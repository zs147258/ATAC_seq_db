<template>
  <!-- 主体 -->

  <!-- 上面的筛选 -->
  <!-- <router-view></router-view> -->
  <div style="margin: 1% auto; overflow: hidden;">
    <!-- 0--筛选面板 -->
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

              <el-form-item label="Motif :" style="justify-self: center;">
                <el-input v-model="filter.motif" placeholder="e.g. MA0594.2.HOXA9" clearable
                  style="width: 200px;"></el-input>
              </el-form-item>
              <el-form-item label="Tf :">
                <el-input v-model="filter.tf" placeholder="e.g. HOXA9" clearable style="width: 200px;"></el-input>
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
    <!--  1--上面的表格和图片  -->
    <div class="col-md-12" style="margin-bottom: 2% ">

      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <!-- 展示面板title -->
          <template #title>
            <i class="ti-layers"></i>&nbsp; Results <sup><span data-html="true" data-toggle="tooltip"
                data-placement="right" title="The meaning of columns is explained in the Help page."><i
                  class="ti-info-alt" style="font-size: 70%"> </i></span></sup>
          </template>

          <div class="col-md-8" data-plugin-portlet>
            <!-- 表格展示 -->
            <el-table :data="tableData1" border stripe table-layout="auto" :cell-style="{ padding: '0px' }"
              header-cell-class-name="header-cell-class-name" style="color: black;margin-top: 20px;font-size: 10px;"
              @row-click="rowClick" @sort-change="sortChange">
              <!-- prop是表头属性名 label是展示的列名 宽度不写就是自适应-->
              <el-table-column prop="motif" label="motif" align="center" width="100px" />
              <el-table-column prop="tf" label="tf" align="center" width="80px" />
              <el-table-column prop="num" label="num" :sortable="'custom'" align="center" width="80px" />
              <el-table-column prop="protection_score_ctrl" label="protection_score_ctrl" :sortable="'custom'"
                align="center" width="120px" />
              <el-table-column prop="protection_score_treat" label="protection_score_treat" :sortable="'custom'"
                align="center" width="120px" />
              <el-table-column prop="tc_ctrl" label="tc_ctrl" :sortable="'custom'" align="center" width="120px" />
              <el-table-column prop="tc_treat" label="tc_treat" :sortable="'custom'" align="center" width="120px" />
              <el-table-column prop="tf_activity" label="tf_activity" :sortable="'custom'" align="center" width="110px" />
              <el-table-column prop="z_score" label="z_score" :sortable="'custom'" align="center" width="100px" />
              <el-table-column prop="p_value" label="p_value" :sortable="'custom'" align="center" width="100px" />

            </el-table>
            <div style="margin: 3vh auto;">
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
          </div>
          <!-- 第一张图 -->
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">footprint_lineplots</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/footprint_lineplots/${this.motif_id}.png`"
                :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_${this.motif}.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/footprint_lineplots/${this.motif_id}.png`" alt="">
            </div>
          </section>
        </el-collapse-item>
      </el-collapse>

    </div>
    <!-- 2--中间的两个点图 -->
    <div class="col-md-12" data-plugin-portlet>
      <el-collapse v-model="activeNames">
        <el-collapse-item name="2">
          <!-- 展示面板title -->
          <template #title>
            <el-icon>
              <Picture />
            </el-icon>&nbsp; plots <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                title="The meaning of polots is explained in the Help page."><i class="ti-info-alt"
                  style="font-size: 70%"> </i></span></sup>
          </template>


          <!-- 两个点图展示 -->
          <section class="col-md-6  panel panel-tertiary" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">differential_statistics</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/differential_statistics.png`"
                :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_differential_statistics.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body twoimg">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/differential_statistics.png`" alt="">
            </div>
          </section>
          <section class="col-md-6  panel panel-tertiary" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">differential_log2foldChange</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/differential_log2foldChange.png`"
                :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_differential_log2foldChange.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body twoimg">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/differential_log2foldChange.png`" alt="">
            </div>
          </section>


        </el-collapse-item>
      </el-collapse>
    </div>
    <!-- 3--下面的3个图展示 -->
    <div class="col-md-12" data-plugin-portlet style="margin: 2% 0;">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="3">
          <!-- 展示面板title -->
          <template #title>
            <el-icon>
              <Picture />
            </el-icon>&nbsp; plots <sup><span data-html="true" data-toggle="tooltip" data-placement="right"
                title="The meaning of polots is explained in the Help page."><i class="ti-info-alt"
                  style="font-size: 70%"> </i></span></sup>
          </template>


          <!-- 下面三个图 -->

          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">PPIN</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/PPIN.png`"
                :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_PPIN.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/PPIN.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">PPIN_diy</span>
              <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/PPIN_diy.png`"
                :download="`id-${this.dbID}_${this.pb_gene}_${this.celline}_PPIN_diy.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/PPIN_diy.png`" alt="">
            </div>
          </section>
          <div class="col-md-4">
            <el-tabs type="border-card" class="demo-tabs ">
              <el-tab-pane label="cluster1">
                <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/PPIN_cluster1.png`" alt="">
              </el-tab-pane>
              <el-tab-pane label="cluster2">
                <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/PPIN_cluster2.png`" alt="">
              </el-tab-pane>
              <el-tab-pane label="cluster3">
                <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/PPIN_cluster3.png`" alt="">
              </el-tab-pane>
              <el-tab-pane label="cluster4">
                <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/PPIN_cluster4.png`" alt="">
              </el-tab-pane>
              <el-tab-pane label="cluster5">
                <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/PPIN_cluster5.png`" alt="">
              </el-tab-pane>
              <el-tab-pane label="cluster6">
                <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/PPIN_cluster6.png`" alt="">
              </el-tab-pane>

            </el-tabs>
          </div>

        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>



<script>
import request from "@/utils/request";



export default {
  name: "Diff_footprint",
  components: {

  },


  methods: {

    load() {
      /* if(sessionStorage.getItem('dbID')){

this.dbID = JSON.parse(sessionStorage.getItem('dbID'));
}
 */

      request.post("/get_diff_footprint_data",
        {
          id: this.dbID,
          filter: this.filter,


          seq: this.seq,
          paging: this.paging

        }).then(res => {
          this.tableData1 = res.data;
          this.total = res.records_sum;
        });


    },
    onSubmit() {
      request.post("/get_diff_footprint_data",
        {
          id: this.dbID,
          filter: this.filter,
          seq: {},
          paging: {
            "start": 0, //起始数据点（分页）
            "length": 10
          }
        }).then(res => {

          this.tableData1 = res.data;
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
      link.href = `http://43.143.155.140/atac_db/${this.dbID}/csv/id-${this.dbID}_${this.pb_gene}_${this.celline}_diff_footprint.csv`;
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
        this.tabSort = 0  // 默认顺序
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
    //  选中表格某一行,截取对应的motif和motif_id
    rowClick(row, column) {
      this.motif = row.motif
      this.motif_id = row.motif.slice(0, 8);


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
      filter: {},
      total: 0,
      pageSize: 10,

      activeNames: ['1', '2', '3'],

      motif: '',
      motif_id: '',



      tableData1: [],


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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 10px;
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
  padding: 1vw;
  height: 800px;
}

.showimg {

  height: 100%;

}

.twoimg {
  height: 720px;

}

img {
  width: 100%;

}</style>





