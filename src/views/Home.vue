<template>
    <div class="loginWrap">
        <div class="loginBox">
            <img src="../assets/images/timo.jpg" alt="提莫队长" class="timoImg">
            <h1 class="title">
                欢迎来到召唤师峡谷
            </h1>
            <div class="loginContent">
                <el-form :model="formData" ref="form">
                    <el-form-item prop="userName" class="userName">
                        <div class="userNameBox box"
                             :class="[{borderSuccess :showUserNameBorderSuccess},
                                    {borderError :showUserNameBorderError}]">
                            <span class="el-icon-user icon"></span>
                            <el-input
                                    @focus="showUserNameBorderSuccess=true;showUserNameBorderError=false"
                                    @blur="blurUserName"
                                    v-model="formData.userName"
                                    class="userNameInput Input"
                                    placeholder="请输入用户名"></el-input>
                        </div>
                        <div class="errorMsg" v-if="showUserNameBorderError"> {{userNameErrorMsg}}</div>
                    </el-form-item>
                    <el-form-item prop="passWord" class="passWord ">
                        <div class="passWordBox box"
                             :class="[{borderSuccess : showPassWordBorderSuccess},
                                    {borderError :showPassWordBorderError}]">
                            <span class="el-icon-lock icon"></span>
                            <el-input v-model="formData.passWord"
                                    @focus="showPassWordBorderSuccess=true;showPassWordBorderError=false"
                                    @blur="blurPassWord"
                                    class="passWordInput Input"
                                    placeholder="请输入密码"></el-input>
                        </div>
                        <div class="errorMsg" v-if="showPassWordBorderError"> {{passWordErrorMsg}}</div>
                    </el-form-item>
                    <el-form-item  class="Login">
                        <el-button type="primary" @click="submit" class="loginBtn" :loading="loading" :disabled="loading">立即登录</el-button>
                    </el-form-item>
                    <el-form-item class="losePassWord">
                        <div class="options">
                            <el-checkbox v-model="checked" label="记住账号密码"></el-checkbox>
                            <span>忘记密码?</span>
                        </div>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

import {getSalt} from "@/api/api";

export default {
    name: 'home',
    data(){
        return {
            showUserNameBorderSuccess:false,
            showUserNameBorderError:false,
            showPassWordBorderSuccess:false,
            checked:false,
            showPassWordBorderError:false,
            userNameErrorMsg:"",
            passWordErrorMsg:"",
            loading:false,
            formData:{
                userName:"",
                passWord:"",
            }
        }
    },
    methods:{
        blurUserName(){
            if (this.formData.userName){
                this.showUserNameBorderSuccess=false;
                this.showUserNameBorderError=false;
            }else{
                this.showUserNameBorderError=true;
                this.userNameErrorMsg='请输入账号'
            }
        },
        blurPassWord(){
            if (this.formData.passWord){
                this.showPassWordBorderError=false;
                this.showPassWordBorderSuccess=false;
            }else{
                this.showPassWordBorderError=true;
                this.passWordErrorMsg='请输入密码'
            }
        },
        submit(){
            if (this.showPassWordBorderError || this.showUserNameBorderError || !this.formData.passWord || !this.formData.userName){
                this.$message.error('请填写正确的账号密码后登录')
            }else{

            }
        }
    }
 }
</script>

<style lang="stylus">
    @import "../assets/vase.styl"
    .loginWrap
        width 100%
        display flex
        height 100%
        justify-content flex-end
        .loginBox
            position relative
            margin-top 160px
            margin-right 150px
            width 420px
            height 350px
            background-color rgba(0,0,0,0.7)
            box-shadow 2px 2px  10px rgba(0,0,0,0.7)
            .timoImg
                position absolute
                top -40px
                left -40px
                width 100px
                height 100px
                border-radius 50%
            .title
                margin 0
                color $color_success
                margin-bottom 10px
                height 70px
                display flex
                justify-content center
                align-items center
            .loginContent
                padding 0 40px 0 40px
                .box
                    display flex
                    align-items center
                    .icon
                        height 40px
                        background-color $color_white
                        width 40px
                        display flex
                        align-items center
                        justify-content center
                        font-size 30px
                        color gray
                        border-right 1px solid gray
                    .Input
                        .el-input__inner
                            border none
                            outline none
                            border-radius 0
                .borderSuccess
                    border 1px solid $color_success
                    box-shadow 0 0 5px $color_success
                .borderError
                    border 1px solid $color_error
                    box-shadow 0 0 5px $color_error
                .passWord,.userName
                    position relative
                    .errorMsg
                        font-size 14px
                        color $color_error
                        position absolute
                        bottom -35px
                .passWord
                    margin-top 35px
                .Login
                    margin-top 35px
                    .loginBtn
                        background-color $color_success
                        border none
                        width 100%
                .losePassWord
                    .options
                        display flex
                        justify-content space-between
                        align-items center
                        .is-checked
                            .el-checkbox__inner
                                background-color $color_success
                        span
                            color gray
                            cursor pointer


</style>
