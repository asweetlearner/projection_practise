<template>
  <el-col :span="4">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      active-text-color="#ff9223"
    >
      <el-menu-item index="1">
        <i class="el-icon-bicycle"></i>
        <span slot="title">车辆管理</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-document"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-user-solid"></i>
        <span slot="title">客户管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-money"></i>
        <span slot="title">财务管理</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-attract"></i>
        <span slot="title">售后维修</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-message"></i>
        <span slot="title">信息反馈</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-setting"></i>
        <span slot="title">账号设置</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
export default {
  name: 'asideMenu',
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    goto (url) {
      this.$router.replace({path: url})
    }
  }
}
</script>

<style lang="less" scoped>
  .el-menu-vertical-demo {
    text-align: left;
    height: 100%;
    background-color: #4c5768;
    .el-menu--inline {
      background-color:red;
    }
    .el-menu-item {
      background-color: #4c5768;
      font-size: 18px;
      color: #ffffff;
      font-weight: 400;
      &:hover {
        background-color: #505050;
      }
      &.is-active {
        background-color: #505050;
      }
      i {
        color: #ffffff;
        font-weight: 400;
      }
    }

  }
  .el-col {
    &.el-col-4 {
      min-width: 300px;
    }
  }
  .el-submenu_title {
    color: #ffffff;
    font-weight: 400;
  }

</style>
