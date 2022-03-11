<template>
  <div class="login-wrapper">
    <login-header />

    <div class="login-container">
      <div class="title-container">
        <h1 class="title margin-no">登录到</h1>
        <h1 class="title">LD System</h1>
      </div>
      <login />
      <tdesign-setting />
    </div>

    <footer class="copyright">Copyright @ 2021-2022 Tencent. All Rights Reserved</footer>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import Login from './components/Login.vue';
import LoginHeader from './components/Header.vue';
import TdesignSetting from '@/layouts/setting.vue';

const type = ref('login');
const switchType = (val: string) => {
  type.value = val;
};
</script>
<style lang="less">
@import url('./index.less');
</style>
