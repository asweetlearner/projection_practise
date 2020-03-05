<template>
  <div class="login_page">
    登陆页
  </div>
</template>

<script>
// 引用数据接口
import utils from '@/api'
import {mapActions, mapState} from 'vuex'

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      // 对用户名密码做简单的验证
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      showLogin: false
    }
  },
  mounted () {
    this.showLogin = true
    if (!this.adminInfo.id) {
      console.log('getAdminData')
    }
  },
  computed: {
    ...mapState(['adminInfo'])
  },
  methods: {
    ...mapActions(['getAdminData']),
    async submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        console.log('valid:' + valid)
        if (valid) {
          const res = await utils.api({method: 'get', url: '/api/login', params: {user_name: this.loginForm.username, password: this.loginForm.password}})
          console.log('res:' + JSON.stringify(res))
          if (res.status === 1) {
            this.$message({
              type: 'success',
              message: '登录成功'
            })
            this.$router.push('manage')
          } else {
            this.$message({
              type: 'error',
              message: res.message
            })
          }
        } else {
          this.$notify.error({
            title: '错误',
            message: '请输入正确的用户名密码',
            offset: 100
          })
          return false
        }
      })
    }
  },
  watch: {
    adminInfo: function (newValue) {
      if (newValue.id) {
        this.$message({
          type: 'success',
          message: '检测到您之前登录过，将自动登录'
        })
        this.$router.push('manage')
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .login_page{
    background-color: #324057;
  }
  .manage_tip{
    position: absolute;
    width: 100%;
    top: -100px;
    left: 0;
    p{
      font-size: 34px;
      color: #fff;
    }
  }
  .form-container{
    padding: 25px;
    border-radius: 5px;
    text-align: center;
    background-color: #fff;
    .submit_btn{
      width: 100%;
      font-size: 16px;
    }
  }
  .tip{
    font-size: 12px;
    color: red;
  }
  .form-fade-enter-active, .form-fade-leave-active {
    transition: all 1s;
  }
  .form-fade-enter, .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
</style>
