<template>
  <!-- 主体 -->
  <!-- 上面的筛选 -->
  <!-- <router-view></router-view> -->
  <div style="margin: 1% auto; overflow: hidden;">
    <!-- 筛选面板 -->
    <div class="col-md-12" data-plugin-portlet>
      <el-collapse v-model="activeNames">
        <el-collapse-item name="0">
          <!-- 展示面板title -->
          <template #title>
            <el-icon>
              <Search />
            </el-icon>&nbsp; Search
          </template>
          <el-form ref="form" :model="filter" label-width="120px">
            <div class="formRow1">

              <el-form-item label="Chr :">
                <el-input v-model="filter.chr" placeholder="e.g. chr2" clearable style="width: 100px;"></el-input>
              </el-form-item>
              <el-form-item label="Gene_chr :">
                <el-input v-model="filter.gene_chr" clearable style="width: 100px;"></el-input>
              </el-form-item>

              <el-form-item label="Gene_id :">
                <el-input v-model="filter.gene_id" placeholder="e.g. ENSG00000127616.21" clearable
                  style="width: 200px;"></el-input>
              </el-form-item>
              <el-form-item label="Transcript_id :">
                <el-input v-model="filter.transcript_id" placeholder="e.g. ENST00000587988.5" clearable
                  style="width: 200px;"></el-input>
              </el-form-item>
            </div>

            <div class="formRow3">
              <el-form-item style="margin-left: -120px;">
                <el-button type="success" @click="onSubmit" style="width: 100px;">Submit</el-button>
                <el-button @click="onReset" style="margin-left: 100px;width: 100px;">Reset</el-button>
              </el-form-item>
            </div>
          </el-form>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>

  <div style="margin: 0 auto;">
    <!-- 展示面板 -->
    <div class="col-md-12" data-plugin-portlet>
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <!-- 展示面板title -->
          <template #title>
            <i class="ti-layers"></i>&nbsp; Results <sup><span data-html="true" data-toggle="tooltip"
                data-placement="right" title="The meaning of columns is explained in the Help page."><i
                  class="ti-info-alt" style="font-size: 70%"> </i></span></sup>
          </template>


          <!-- 表格展示 -->
          <el-table :data="tableData" border stripe table-layout="auto" header-cell-class-name="header-cell-class-name"
            style="color: black;margin-top: 20px;" @sort-change="sortChange">
            <!-- prop是表头属性名 label是展示的列名 宽度不写就是自适应-->
            <el-table-column prop="peak_id" label="peak_id" align="center" width="100px" />
            <el-table-column prop="chr" label="chr" align="center" width="70px" />
            <el-table-column prop="start" label="start" :sortable="'custom'" align="center" width="80px" />
            <el-table-column prop="end" label="end" :sortable="'custom'" align="center" width="75px" />
            <el-table-column prop="width" label="width" :sortable="'custom'" align="center" width="90px" />
            <el-table-column prop="score" label="score" :sortable="'custom'" align="center" width="90px" />
            <el-table-column prop="signal_value" label="signal_value" :sortable="'custom'" align="center" width="110px" />
            <el-table-column prop="log_p_value" label="log_p_value" :sortable="'custom'" align="center" width="120px" />
            <el-table-column prop="log_q_value" label="log_q_value" :sortable="'custom'" align="center" width="120px" />
            <el-table-column prop="peak_offset" label="peak_offset" :sortable="'custom'" align="center" width="120px" />
            <el-table-column prop="annotation" label="annotation" align="center" width="120px" />

            <el-table-column prop="gene_chr" label="gene_chr" align="center" width="110px" />
            <el-table-column prop="gene_start" label="gene_start" :sortable="'custom'" align="center" width="120px" />
            <el-table-column prop="gene_end" label="gene_end" :sortable="'custom'" align="center" width="120px" />
            <el-table-column prop="gene_len" label="gene_len" :sortable="'custom'" align="center" width="120px" />
            <el-table-column prop="gene_strand" label="gene_strand" align="center" width="130px" />
            <el-table-column prop="gene_id" label="gene_id" align="center" width="120px" />
            <el-table-column prop="transcript_id" label="transcript_id" align="center" width="130px" />

            <el-table-column prop="distance_to_tss" label="distance_to_tss" :sortable="'custom'" align="center" width="150px" />


          </el-table>
          <div class="table-foot" style="margin: 3vh auto;">
            <!-- 下载 -->
            <el-button type="primary" plain @click="onDownload"><el-icon>
                <Download />
              </el-icon>CSV</el-button>
            <!-- 分页 -->
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
              :current-page="currentPage" :page-sizes="[5, 10, 20]" :page-size="pageSize"
              layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
          </div>

        </el-collapse-item>
      </el-collapse>
    </div>





  </div>
</template>



<script>
import request from "@/utils/request";



export default {
  name: "Ctrl",
  components: {

  },


  methods: {

    load() {
      /* if (sessionStorage.getItem('dbID')) {

        this.dbID = JSON.parse(sessionStorage.getItem('dbID'));
      }
 */

      request.post("/get_ctrl_peak_data",
        {
          id: this.dbID,

          filter: this.filter,
          seq: this.seq,
          paging: this.paging

        }).then(res => {
          this.tableData = res.data;
          this.total = res.records_sum;
        })
    },
    onSubmit() {
      request.post("/get_ctrl_peak_data",
        {
          id: this.dbID,
          filter: this.filter,
          seq: {},
          paging: {
                        "start": 0, //起始数据点（分页）
                        "length": 10
                    }
        }).then(res => {

          this.tableData = res.data;
          this.total = res.records_sum;
          this.currentPage = 1;
        })
    },
    onReset() {
      this.filter = {}
    },
    onDownload() {
      this.pb_gene = sessionStorage.getItem('pb_gene');
      this.celline = sessionStorage.getItem('celline');
      
      let link = document.createElement('a');
      link.style.display = 'none';
      link.href = `http://43.143.155.140/atac_db/${this.dbID}/csv/id-${this.dbID}_${this.pb_gene}_${this.celline}_ctrl_peaks.csv`;
      document.body.appendChild(link);
      link.click();
    },
    handleSizeChange(val) {   //改变当前每页的个数触发
      this.pageSize = val
      this.paging.length = val
      this.load();
    },
    handleCurrentChange(val) {   //改变当前页码触发

      this.currentPage = val
      this.paging.start = (val - 1) * this.paging.length
      this.load();

    },
    sortChange(column) {  // 表格排序条件发生变化触发
      // 当前列的排序  ascending 升序 descending 降序 
      if (column.order == "ascending") {
        this.tabSort = 1
      } else if (column.order == "descending") {
        this.tabSort = -1
      } else {
        this.tabSort = 0
      }
      // 当前点击列名
      this.seq={}
      if(this.tabSort !== 0){
        this.tabProp = column.prop + '_seq'
      this.seq[this.tabProp] = this.tabSort
      }
      
      
      // 调后端接口，把后端需要的参数传递给后端，就可以实现排序
      this.load()
    },



  },
  props: {
    dbID: Number,
    dataSet: Object


  },
  data() {
    return {
      pb_gene: '',
      celline: '',

      currentPage: 1,
      total: 10,
      pageSize: 10,

      activeNames: ['1'],
      


      tableData: [],
      filter: {},

      seq: {},
      paging: {
        "start": 0, //起始数据点（分页）
        "length": 10
      }


    };
  },
  computed: {
  },
  created() {
    this.load();
    console.log(this.dbID);
  },

}

</script>
  
<style scoped>
.el-form-item__label {
  color: black;
}

.header-cell-class-name {
  border-color: black;
  color: black;
}

.formRow1 {
  display: flex;
  /* grid-template-columns: repeat(4, 1fr); */
  /* justify-content: space-between; */

  margin-top: 20px;
  margin-left: -5vw;
}


.formRow3 {
  display: flex;
  justify-content: center;
}

.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.el-collapse-item__wrap,
.col-md-6 {
  padding: 2vw;
}

.showimg {
  width: 40vw;

}

img {
  width: 100%;

  object-fit: cover;
}

.TSS_distribution {
  display: flex;
  justify-content: space-between;
}
</style>



