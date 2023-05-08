<template>
  <!-- 主体 -->
  <div style="width: 95%;margin: 2% auto;">
    <!-- 展示面板 -->
    <div class="col-md-12" data-plugin-portlet>
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <!-- 展示面板title -->
          <template #title>
            <i class="ti-layers"></i>&nbsp; Contact us <sup><span data-html="true" data-toggle="tooltip"
                data-placement="right"
                title="<div align='left'> The meaning of columns is explained in the HELP page.</div>"><i
                  class="ti-info-alt" style="font-size: 70%"> </i></span></sup>
          </template>
          <el-descriptions title="Feel free to contac us if you have any questions or suggestions about xxxxx database.">
</el-descriptions>





        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="col-md-12" data-plugin-portlet style="margin-top: 2%;">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <!-- 展示面板title -->
          <template #title>
            <el-icon>
									<ChatLineSquare />
								</el-icon>&nbsp;News and updates 
          </template>
          

        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<style></style>

<script>

export default {
  name: "about",
  data() {
    return {
      activeNames: ['1'],
    }
  }
}


</script>