<template>
  <div id="app">
    <!-- <h1 @click='m'>{{name}}</h1> -->
    <!-- <el-button>button</el-button> -->
    <el-container>
      <el-header>
        <h1 class="h1 fl">
          <i class="iconfont icon-caidan"></i>
          <span>后台管理</span>
        </h1>

        <el-dropdown class="fr mt" split-button type="primary" @click="handleClick" trigger="click" @command="handleCommand">更多菜单
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item command="黄金糕">黄金糕</el-dropdown-item>
            <el-dropdown-item command="狮子头">狮子头</el-dropdown-item>
            <el-dropdown-item command="螺蛳粉">螺蛳粉</el-dropdown-item>
            <el-dropdown-item command="双皮奶">双皮奶</el-dropdown-item>
            <el-dropdown-item command="蚵仔煎">蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside>asider</el-aside>
        <el-main>mainer</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
// let a:string = 's'
// export default {

// }
@Component({})
export default class App extends Vue {
  // name:string = 'sss'
  // m() {
  //   console.log('mm');
  // }

  handleClick() {
    alert("button click");
  }
  handleCommand(command:string) {
    this.$message("button click "+ command);
  }
}
</script>

