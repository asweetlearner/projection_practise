<template>
  <div class="main">
    <el-container style="border: 1px solid #eee">
      <aside-menu/>
      <el-container>
        <el-header>
          <status/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<script>
import AsideMenu from '../aside/asideMenu'
import status from '../status/status'
export default {
  name: 'index',
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  },
  components: {
    AsideMenu,
    status
  }
}
</script>
<style lang="less" scoped>
.main {
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-header {
    padding: 0;
  }
}
</style>
