<template>
  <!-- 主体 -->

  <div class="clearfix">
    <el-collapse class="col-md-12" id="portlet-2" v-model="activeNames">
      <el-collapse-item name="1">

        <template #title>
          <el-icon>
            <Menu />
          </el-icon>&nbsp Sample overview
        </template>
        <!-- 左边的数据展示 -->
        <div class="col-md-6 " style="margin-top: 5%;">
          <el-descriptions title="" :column="1" :size="size" border>
            <el-descriptions-item label="ID :" width="5vw" label-align="right">{{ dbID
            }}</el-descriptions-item>
            <el-descriptions-item label="Pb_gene :" width="5vw" label-align="right">{{ dataSet.pb_gene
            }}</el-descriptions-item>
            <el-descriptions-item label="Pb_ensembl :" width="5vw" label-align="right">{{ dataSet.pb_ensembl
            }}</el-descriptions-item>
            <el-descriptions-item label="n_sample :" width="5vw" label-align="right">{{ dataSet.n_sample
            }}</el-descriptions-item>
            <el-descriptions-item label="Celline :" width="5vw" label-align="right">{{ dataSet.celline
            }}</el-descriptions-item>
            <el-descriptions-item label="Method :" width="5vw" label-align="right">{{ dataSet.method
            }}</el-descriptions-item>
            <el-descriptions-item label="Accession :" width="5vw" label-align="right">
              <div v-html="dataSet.accession"></div>
            </el-descriptions-item>
            <el-descriptions-item label="Datasource :" width="5vw" label-align="right">{{ dataSet.datasource
            }}</el-descriptions-item>

          </el-descriptions>
        </div>
        <!-- 右边的图片 -->
        <section class="col-md-6 showimg panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
          <header class="panel-heading" style="position: relative;">

            <span style="font-size: 16px;" class="panel-title">Cor_plot</span>
            <a href="" :download="`http://43.143.155.140/atac_db/${this.dbID}/plots/cor_plot.png`" target="_blank"
              style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                  <Download />
                </el-icon></el-button></a>

          </header>
          <div class="panel-body">

            <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/cor_plot.png`" alt="">
          </div>
        </section>



      </el-collapse-item>
    </el-collapse>

  </div>
  <!-- 下面的tab -->
  <div style="margin: 2% 0; ">
    <div class="col-md-12">
      <el-tabs type="border-card" class="demo-tabs ">


        <el-tab-pane label="TSS_distribution" class="TSS_distribution">

          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">Cor_plot</span>
              <a href="" :download="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">
              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotDistToTSS.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">peakHeatmap</span>
              <a href="" :download="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/peakHeatmap.png`" alt="">
            </div>
          </section>
          <section class="col-md-4  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">plotAvgProf</span>
              <a href="" :download="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotAvgProf.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotAvgProf.png`" alt="">
            </div>
          </section>

          <!-- <div class="col-md-4">
            <img src="@/assets\plots\③_TSS_2.png" alt="">
          </div>
          <div class="col-md-4">
            <img src="@/assets\plots\③_TSS_3.png" alt="">
          </div> -->
        </el-tab-pane>
        <el-tab-pane label="Intervals_annotation">
          <section class="col-md-5  panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
            <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">plotAnnoBar</span>
              <a href="" :download="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotAnnoBar.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
            <div class="panel-body">

              <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotAnnoBar.png`" alt="">
            </div>
          </section>
          <div class="col-md-7">
            <section class=" panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
              <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">plotAnnoPie</span>
              <a href="" :download="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotAnnoPie.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
              <div class="panel-body">

                <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/plotAnnoPie.png`" alt="">
              </div>
            </section>
          </div>
          <div class="col-md-7">
            <section class=" panel panel-tertiary" id="tutorial-panel-1" data-portlet-item>
              <header class="panel-heading" style="position: relative;">
              <span style="font-size: 16px;" class="panel-title">upsetplot</span>
              <a href="" :download="`http://43.143.155.140/atac_db/${this.dbID}/plots/upsetplot.png`" target="_blank"
                style="position: absolute;right: 2vw;"><el-button type="warning" size="small" circle><el-icon>
                    <Download />
                  </el-icon></el-button></a>
            </header>
              <div class="panel-body">

                <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/upsetplot.png`" alt="">
              </div>
            </section>
          </div>
          <!-- <div class="col-md-5">
            <img src="@/assets\plots\③_struct_1.png" alt="">
          </div>
          <div class="col-md-7">
            <img src="@/assets\plots\③_struct_2.png" alt="">

            <img src="@/assets\plots\③_struct_3.png" alt="">
          </div> -->
        </el-tab-pane>

      </el-tabs>
    </div>

  </div>
</template>



<script>
import request from "@/utils/request";
// import { log } from "console";
import bus from 'vue3-eventbus'
export default {
  name: "Total",
  components: {

  },
  props: {
    dbID: Number

  },
  data() {
    return {
      size: 'large',
      activeNames: ['1'],

      dataSet: {},

    }

  },
  methods: {
    load() {


      request.post("/get_single_data",
        {
          id: this.dbID
        }).then(res => {

          this.dataSet = res.data;


        })


    },
   handDown() {
      let a = document.createElement("a"); //创建一个a元素
      a.href = '';    //a元素图片地址
      a.download = `http://43.143.155.140/atac_db/${this.dbID}/plots/cor_plot.png`; //图片名
      a.click();
    } 

  },
  created() {
    // console.log(this.dbID);

    // let router = useRouter()
    // 监听当前路由变化
    // watch(
    //   () => router.currentRoute.value,
    //   () => {
    //     // this.dbID = router.currentRoute.value.params.id;
    //     this.load();
    //   }
    // );
    // this.dbID = router.currentRoute.value.params.id;
    this.load();



  },
  beforeDestroy() {
    // bus.off('ID')
  },
}


</script>

<style scoped>
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
}</style>