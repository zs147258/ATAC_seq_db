<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo gtco-nav" mode="horizontal" router :ellipsis="false">
    <div style="margin:5px 10% 0 ">
      <a href="Home"><img src="@/assets/images/logo-v1.png" width="100"></a>
    </div>
    <div class="flex-grow"></div>
    <div class="menu-item">
      <el-menu-item index="Home"><el-icon>
          <HomeFilled />
        </el-icon>Home</el-menu-item>
      <el-menu-item index="Stastics"><el-icon>
          <PieChart />
        </el-icon>Stastics</el-menu-item>
      <el-menu-item index="Search"><el-icon>
          <Memo />
        </el-icon>Search</el-menu-item>
      <el-menu-item index="Help"><el-icon>
          <QuestionFilled />
        </el-icon>Help</el-menu-item>
      <el-menu-item index="About"><el-icon>
          <Avatar />
        </el-icon>About</el-menu-item>
      <!--  <el-sub-menu index="About" >
              <template #title>About</template>
              <el-menu-item index="2-1">item one</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
            </el-sub-menu> -->
    </div>
  </el-menu>
</template>

<script>

export default {
  //父组件通过 props 向下传递数据给子组件
  props: {},
  //import引入的组件需要注入此处能使用
  components: {},
  //此处存放数据
  data() {
    return {
      activeIndex: this.$router.currentRoute._value.fullPath.split("/")[1],
    }
  },

  methods: {


  },
  created() {

  },


}
</script>
<style scoped>
.flex-grow {
  flex-grow: 1;
}

.el-menu-item {
  font-weight: bold;
  color: #fff !important;
  font-size: larger;
}

img {
  display: block;
}

.menu-item {
  width: 70%;
  display: flex;
  padding-right: 5%;
  justify-content: space-around;
}


.el-menu-item:hover {
  outline: 0 !important;
  color: #ff8923 !important;
  background: none !important;
}

.el-menu-item.is-active {
  color: #ff8923 !important;
  background: none !important;
}
</style>