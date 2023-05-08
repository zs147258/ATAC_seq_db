<template>
  <!-- 主体 -->
  <div>
    <!-- <Detailtab></Detailtab> -->
    <el-tabs type="border-card">
    <el-tab-pane label="Total">
      <Total :dbID="globalID"></Total>
    </el-tab-pane>
    <el-tab-pane label="Diff_peak">
      <Diff_peak :dbID="globalID" ></Diff_peak>
    </el-tab-pane>
    <el-tab-pane label="Diff_enrichment">
      <Diff_enrichment :dbID="globalID" ></Diff_enrichment>
    </el-tab-pane>
    <el-tab-pane label="Diff_motif">
      <Diff_motif :dbID="globalID" ></Diff_motif>
    </el-tab-pane>
    <el-tab-pane label="Diff_footprint">
      <Diff_footprint :dbID="globalID" ></Diff_footprint>
    </el-tab-pane>
    <el-tab-pane label="Ctrl">
      <Ctrl :dbID="globalID" ></Ctrl>
    </el-tab-pane>
    <el-tab-pane label="Treat">
      <Treat :dbID="globalID"></Treat>
    </el-tab-pane>
  </el-tabs>

  </div>
  
</template>

<style></style>

<script>
// import Detailtab from "@/components/Detailtab.vue";
import Total from '@/views/detail/Total.vue'
import Diff_peak from '@/views/detail/Diff_peak.vue'
import Diff_enrichment from '@/views/detail/Diff_enrichment.vue'
import Diff_motif from '@/views/detail/Diff_motif.vue'
import Diff_footprint from '@/views/detail/Diff_footprint.vue'
import Ctrl from '@/views/detail/Ctrl.vue'
import Treat from '@/views/detail/Treat.vue'
import request from "@/utils/request";
// import { log } from "console";
import bus from 'vue3-eventbus'
export default {
  name: "detail",
  components: {
    Total,Diff_peak,Diff_enrichment,Diff_motif,Diff_footprint,Ctrl,Treat

  },
 props: {
  globalID:Number

 },
 data () {
      return {
        dbID:0,
        
      }
    },
 
  
    
}

</script>