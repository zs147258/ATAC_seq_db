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
                <el-input v-model="filter.chr" :fetch-suggestions="querySearch" placeholder="e.g. chr2" clearable
                  style="width: 100px;"></el-input>
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
            <el-table-column prop="conc" label="conc" :sortable="'custom'" align="center" width="90px" />
            <el-table-column prop="conc_ctrl" label="conc_ctrl" :sortable="'custom'" align="center" width="110px" />
            <el-table-column prop="conc_treat" label="conc_treat" :sortable="'custom'" align="center" width="120px" />
            <el-table-column prop="fold" label="fold" :sortable="'custom'" align="center" width="80px" />
            <el-table-column prop="p_value" label="p_value" :sortable="'custom'" align="center" width="100px" />
            <el-table-column prop="FDR" label="FDR" :sortable="'custom'" align="center" width="80px" />
            <el-table-column prop="annotation" label="annotation" align="center" width="120px" />
            <el-table-column prop="gene_chr" label="gene_chr" align="center" width="110px" />
            <el-table-column prop="gene_start" label="gene_start" :sortable="'custom'" align="center" width="120px" />
            <el-table-column prop="gene_end" label="gene_end" :sortable="'custom'" align="center" width="120px" />
            <el-table-column prop="gene_len" label="gene_len" :sortable="'custom'" align="center" width="120px" />
            <el-table-column prop="gene_strand" label="gene_strand" align="center" width="130px" />
            <el-table-column prop="gene_id" label="gene_id" align="center" width="120px" />
            <el-table-column prop="transcript_id" label="transcript_id" align="center" width="130px" />


            <el-table-column prop="distance_to_tss" label="distance_to_tss" sortable align="center" width="150px" />


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


    <!-- 下面的tab -->

    <div class="col-md-12" style="margin: 2% 0;">
      <el-tabs type="border-card" class="demo-tabs ">


        <el-tab-pane label="TSS_distribution" class="TSS_distribution">
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">diffPeaks_plotDistToTSS</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/diffPeaks_plotDistToTSS.png`" :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_diffPeaks_plotDistToTSS.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/diffPeaks_plotDistToTSS.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">diff_dis_TSS_Heatmap</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/diff_dis_TSS_Heatmap.png`" :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_diff_dis_TSS_Heatmap.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/diff_dis_TSS_Heatmap.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">diff_plotAvgProf</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/diff_plotAvgProf.png`" :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_diff_plotAvgProf.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/diff_plotAvgProf.png`" alt="">
            </div>
          </section>
          <!-- <div class="col-md-4">
            <img src="@/assets\plots\④_TSS_1.png" alt="">
          </div>
          <div class="col-md-4">
            <img src="@/assets\plots\④_TSS_2.png" alt="">
          </div>
          <div class="col-md-4">
            <img src="@/assets\plots\④_TSS_3.png" alt="">
          </div> -->
        </el-tab-pane>

        <el-tab-pane label="Intervals_annotation">
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">diffPeaks_plotAnnoBar</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/diffPeaks_plotAnnoBar.png`" :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_diffPeaks_plotAnnoBar.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/diffPeaks_plotAnnoBar.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">diffPeaks_plotAnnoPie</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/diffPeaks_plotAnnoPie.png`" :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_diffPeaks_plotAnnoPie.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/diffPeaks_plotAnnoPie.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">diffPeaks_upsetplot</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/diffPeaks_upsetplot.png`" :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_diffPeaks_upsetplot.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/diffPeaks_upsetplot.png`" alt="">
            </div>
          </section>
          <!-- <div class="col-md-4">
            <img src="@/assets\plots\④_struct_1.png" alt="">
          </div>
          <div class="col-md-4">
            <img src="@/assets\plots\④_struct_2.png" alt="">
          </div>
          <div class="col-md-4">
            <img src="@/assets\plots\④_struct_3.png" alt="">
          </div> -->
        </el-tab-pane>

        <el-tab-pane label="Diff_pictures">
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">plotPCA</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotPCA.png`" :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_plotPCA.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotPCA.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">plotMA</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotMA.png`" :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_plotMA.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotMA.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">plotVolcano</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotVolcano.png`" :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_plotVolcano.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotVolcano.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">plotBox</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotBox.png`" :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_plotBox.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotBox.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">plotHeatmap</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotHeatmap.png`" :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_plotHeatmap.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotHeatmap.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">plotProfile</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotProfile.png`" :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_plotProfile.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotProfile.png`" alt="">
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
  name: "Diff_peak",
  components: {

  },


  methods: {

    load() {




      request.post("/get_diff_peak_data",
        {
          id: this.dbID,

          filter: this.filter,
          seq: this.seq,
          paging: this.paging

        }).then(res => {
          this.tableData = res.data;
          this.total = res.records_sum;

        })
        this.pb_gene = sessionStorage.getItem('pb_gene');
    this.celline = sessionStorage.getItem('celline');

    },
    onSubmit() {
      request.post("/get_diff_peak_data",
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
      

      let link = document.createElement('a');
      link.style.display = 'none';
      link.href = `http://43.143.155.140/atac_db/${this.dbID}/csv/id-${this.dbID}_${this.pb_gene}_${this.celline}_diff_peak_data.csv`;
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

    querySearch(queryString, cb) {
      if (queryString == '') return   //如果输入框无内容，不调接口
      this.filter.chr = queryString
      request.post("https://console-mock.apipost.cn/mock/7e333c71-5b29-4949-80f9-914425f760eb/get_diff_peak_data?apipost_id=c4f476",
        {
          id: this.dbID,
          filter: this.filter,
          seq: this.seq,
          paging: this.paging
        }).then(res => {

          this.tableData = res.data;
          this.total = res.records_sum;
          /* var List = this.tableData;
          var results = queryString ? List.filter(this.createFilter(queryString)) : List;    
          // 调用 callback 返回建议列表的数据
          cb(results ); */
        })

    },
    /* createFilter(queryString) {
     return (item) => {       
     return (item.filter.chr.toLowerCase().indexOf(queryString.toLowerCase()) > -1);
     };//fVcHelpCenterName是接口返回的名称和输入的名称做对比
   }, */




  },
  props: {  //父组件向子组件传递的值只会在mount阶段挂载到页面一次，之后便不再执行这个阶段。
    dbID: Number,
    // dataSet: {
    //   type: Object,
    //   default() {
    //     return {}
    //   }
    // }
  },
  data() {
    return {
      pb_gene: '',
      celline: '',

      currentPage: 1,
      total: 0,
      pageSize: 10,

      activeNames: ['1'],
      // 关于排序的属性
      tabSort: 1, //该字段代表升序还是降序 假设：1正序 -1倒序
      tabProp: '',//prop绑定的字段名


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
