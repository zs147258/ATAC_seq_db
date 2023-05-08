<template>
  <!-- 主体 -->

  <!-- <router-view></router-view> -->


  <div style="margin: 1% auto;">


    <!-- tab -->

    <div class="col-md-12">
      <el-tabs type="border-card" class="demo-tabs ">

        <!--  GO_enrich  tab  -->
        <el-tab-pane label="GO_enrich" class="">
          <div class="col-md-8" data-plugin-portlet>
            <el-collapse v-model="activeNames">
              <el-collapse-item name="1">
                <!-- 展示面板title -->
                <template #title>
                  <i class="ti-layers"></i>&nbsp; Results <sup><span data-html="true" data-toggle="tooltip"
                      data-placement="right" title="The meaning of columns is explained in the Help page."><i
                        class="ti-info-alt" style="font-size: 70%"> </i></span></sup>
                </template>


                <!-- 表格展示 -->
                <el-table :data="tableData1" border stripe table-layout="auto" :cell-style="{ padding: '0px' }"
                  @sort-change="sortChange1" header-cell-class-name="header-cell-class-name"
                  style="color: black;margin-top: 20px;font-size: 10px;">
                  <!-- prop是表头属性名 label是展示的列名 宽度不写就是自适应-->
                  <el-table-column prop="GO_id" label="GO_id" align="center" width="100px" />
                  <el-table-column prop="description" label="description" align="center" width="120px" />
                  <el-table-column prop="gene_ratio" label="gene_ratio" align="center" width="120px" />
                  <el-table-column prop="bg_ratio" label="bg_ratio" align="center" width="120px" />
                  <el-table-column prop="p_value" label="p_value" :sortable="'custom'" align="center" width="120px" />
                  <el-table-column prop="p_adjust" label="p_adjust" :sortable="'custom'" align="center" width="120px" />
                  <el-table-column prop="q_value" label="q_value" :sortable="'custom'" align="center" width="110px" />
                  <el-table-column prop="gene_ids" label="gene_ids" align="center" width="1000px" />
                  <el-table-column prop="count" label="count" :sortable="'custom'" align="center" width="100px" />

                </el-table>
                <div style="margin: 3vh auto;">
                  <!-- 下载 -->
                  <el-button type="primary" plain @click="onDownload1"><el-icon>
                      <Download />
                    </el-icon>CSV</el-button>
                  <!-- 分页 -->
                  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage" :page-sizes="[5, 10, 20]" :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper" :total="total1">
                  </el-pagination>
                </div>

              </el-collapse-item>
            </el-collapse>
          </div>

          <!-- <div class="col-md-4">
            <img src="@/assets\plots\⑤_GO_enrich.png" alt="">
          </div> -->
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">GO_enrichment</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/GO_enrichment.png`" :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_GO_enrichment.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/GO_enrichment.png`" alt="">
            </div>
          </section>

        </el-tab-pane>
        <!--  KEGG_enrich  tab  -->
        <el-tab-pane label="KEGG_enrich" class="">
          <div class="col-md-8" data-plugin-portlet>
            <el-collapse v-model="activeNames">
              <el-collapse-item name="1">
                <!-- 展示面板title -->
                <template #title>
                  <i class="ti-layers"></i>&nbsp; Results <sup><span data-html="true" data-toggle="tooltip"
                      data-placement="right" title="The meaning of columns is explained in the Help page."><i
                        class="ti-info-alt" style="font-size: 70%"> </i></span></sup>
                </template>


                <!-- 表格展示 -->
                <el-table :data="tableData2" border stripe table-layout="auto" :cell-style="{ padding: '0px' }"
                  @sort-change="sortChange2" header-cell-class-name="header-cell-class-name"
                  style="color: black;margin-top: 20px;font-size: 10px;">
                  <!-- prop是表头属性名 label是展示的列名 宽度不写就是自适应-->
                  <el-table-column prop="cluster" label="cluster" align="center" width="100px" />
                  <el-table-column prop="KEGG_id" label="KEGG_id" align="center" width="120px" />
                  <el-table-column prop="description" label="description" align="center" width="120px" />
                  <el-table-column prop="gene_ratio" label="gene_ratio" align="center" width="120px" />
                  <el-table-column prop="bg_ratio" label="bg_ratio" align="center" width="120px" />
                  <el-table-column prop="p_value" label="p_value" :sortable="'custom'" align="center" width="120px" />
                  <el-table-column prop="p_adjust" label="p_adjust" :sortable="'custom'" align="center" width="120px" />
                  <el-table-column prop="q_value" label="q_value" :sortable="'custom'" align="center" width="110px" />
                  <el-table-column prop="gene_ids" label="gene_ids" align="center" width="1000px" />
                  <el-table-column prop="count" label="count" :sortable="'custom'" align="center" width="100px" />

                </el-table>
                <div style="margin: 3vh auto;">
                  <!-- 下载 -->
                  <el-button type="primary" plain @click="onDownload2"><el-icon>
                      <Download />
                    </el-icon>CSV</el-button>
                  <!-- 分页 -->
                  <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage" :page-sizes="[5, 10, 20]" :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper" :total="total2">
                  </el-pagination>
                </div>

              </el-collapse-item>
            </el-collapse>
          </div>

          <!-- <div class="col-md-4">
            <img src="@/assets\plots\⑤_KEGG_enrich.png" alt="">
          </div> -->
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">KEGG_enrichment</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/KEGG_enrichment.png`" :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_KEGG_enrichment.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/KEGG_enrichment.png`" alt="">
            </div>
          </section>

        </el-tab-pane>


      </el-tabs>
    </div>


  </div>
</template>



<script>
import request from "@/utils/request";



export default {
  name: "Diff_enrichment",
  components: {

  },


  methods: {

    load() {
      /*  if(sessionStorage.getItem('dbID')){
 
 this.dbID = JSON.parse(sessionStorage.getItem('dbID'));
 
 } */


      request.post("get_diff_GO_enrichment_data",
        {
          id: this.dbID,
          seq: this.seq1,
          paging: this.paging

        }).then(res => {
          this.tableData1 = res.data;
          this.total1 = res.records_sum;
        });
      request.post("/get_diff_KEGG_enrichment_data",
        {
          id: this.dbID,
          seq: this.seq2,
          paging: this.paging

        }).then(res => {
          this.tableData2 = res.data;
          this.total2 = res.records_sum;
        });

    },
    onDownload1() {
      this.pb_gene = sessionStorage.getItem('pb_gene');
      this.celline = sessionStorage.getItem('celline');
      
      let link = document.createElement('a');
      link.style.display = 'none';
      link.href = `http://43.143.155.140/atac_db/${this.dbID}/csv/id-${this.dbID}_${this.pb_gene}_${this.celline}_diff_peaks_GO_enrich.csv`;
      document.body.appendChild(link);
      link.click();
    },
    onDownload2() {
      this.pb_gene = sessionStorage.getItem('pb_gene');
      this.celline = sessionStorage.getItem('celline');
      
      let link = document.createElement('a');
      link.style.display = 'none';
      link.href = `http://43.143.155.140/atac_db/${this.dbID}/csv/id-${this.dbID}_${this.pb_gene}_${this.celline}_diff_peaks_KEGG_enrich.csv`;
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
    sortChange1(column) {  // 表格排序条件发生变化触发
      // 当前列的排序  ascending 升序 descending 降序 
      if (column.order == "ascending") {
        this.tabSort = 1
      } else if (column.order == "descending") {
        this.tabSort = -1
      } else {
        this.tabSort = 0
      }
      // 当前点击列名
      this.seq1 = {}
      if (this.tabSort !== 0) {
        this.tabProp = column.prop + '_seq'
        this.seq1[this.tabProp] = this.tabSort
      }

      console.log(this.seq1)

      // 调后端接口，把后端需要的参数传递给后端，就可以实现排序
      this.load()
    },
    sortChange2(column) {  // 表格排序条件发生变化触发
      // 当前列的排序  ascending 升序 descending 降序 
      if (column.order == "ascending") {
        this.tabSort = 1
      } else if (column.order == "descending") {
        this.tabSort = -1
      } else {
        this.tabSort = 0
      }
      // 当前点击列名
      this.seq2 = {}
      if (this.tabSort !== 0) {
        this.tabProp = column.prop + '_seq'
        this.seq2[this.tabProp] = this.tabSort
      }

      console.log(this.seq2)

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
      total1: 10,
      total2: 10,
      pageSize: 10,

      activeNames: ['1'],



      tableData1: [],
      tableData2: [],

      seq1: {},
      seq2: {},
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

.el-collapse-item {
  border: rgb(2, 119, 80) 1px solid;
  border-top: none;
}

.el-col {
  /* border-radius: 4px; */
}

.grid-content {
  /* border-radius: 4px; */
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


