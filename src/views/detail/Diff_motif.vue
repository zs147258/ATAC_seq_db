<template>
  <!-- 主体 -->
  <div style="margin: 1% auto;">
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
            <el-table-column prop="rank" label="rank" align="center" width="70px" />
            <el-table-column prop="motif" label="motif" align="center" width="350px">
              <template v-slot="scope">
                <div v-html="scope.row.motif"></div>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="name" align="center" width="150px" />
            <el-table-column prop="consensus" label="consensus" align="center" width="100px" />
            <el-table-column prop="p_value" label="p_value" :sortable="'custom'" align="center" width="90px" />
            <el-table-column prop="log_p_value" label="log_p_value" align="center" width="90px" />
            <el-table-column prop="q_value" label="q_value" :sortable="'custom'" align="center" width="110px" />
            <el-table-column prop="target_sequences" label="target_sequences" :sortable="'custom'" align="center"
              width="120px" />
            <el-table-column prop="target_sequences_percent" label="target_sequences_percent" align="center"
              width="150px" >
              <template v-slot="scope">
                {{ formatPercent(scope.row.target_sequences_percent) }}
              </template>
            </el-table-column>
            <el-table-column prop="bg_sequences" label="bg_sequences" :sortable="'custom'" align="center" width="120px" />
            <el-table-column prop="bg_sequences_percent" label="bg_sequences_percent" align="center" width="150px">
              <template v-slot="scope">
                {{ formatPercent(scope.row.bg_sequences_percent) }}
              </template>
            </el-table-column>

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
  name: "Diff_motif",
  components: {

  },


  methods: {

    load() {
      request.post("/get_diff_motif_data",
        {
          id: this.dbID,
          seq: this.seq,
          paging: this.paging

        }).then(res => {
          this.tableData = res.data;
          this.total = res.records_sum;
        })
    },
    onDownload() {
      this.pb_gene = sessionStorage.getItem('pb_gene');
      this.celline = sessionStorage.getItem('celline');
      
      let link = document.createElement('a');
      link.style.display = 'none';
      link.href = `http://43.143.155.140/atac_db/${this.dbID}/csv/id-${this.dbID}_${this.pb_gene}_${this.celline}_diff_motif.csv`;
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
      this.seq = {}
      if (this.tabSort !== 0) {
        this.tabProp = column.prop + '_seq'
        this.seq[this.tabProp] = this.tabSort
      }
      console.log(this.seq)

      // 调后端接口，把后端需要的参数传递给后端，就可以实现排序
      this.load()
    },
    formatPercent(val) {
      var data = (val * 100).toFixed(2) + "%"
      return data

    }



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
      total: 0,
      pageSize: 10,

      activeNames: ['1'],



      tableData: [],
      filter: {},
      /*          "chr": "chr2", //染色体号
                  "gene_chr": 1, //gene 染色体号
                  "gene_id": "ENSG00000127616.21", //gene id
                  "transcript_id": "ENST00000587988.5" //转录id
               }, //筛选项object */
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
  },

}

</script>
  
<style scoped>
.el-form {
  margin-left: 4vw;
}

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
  margin-right: 20px;
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
