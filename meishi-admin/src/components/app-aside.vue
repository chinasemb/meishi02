<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>

        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          background-color="antiquewhite"
          text-color="skyblue"
          active-text-color="red"
          :default-active="routerName"
          router
        >
          <el-menu-item :index="menu.name" v-for="menu of menus" :key="menu.text">
            <i :class="menu.icon"></i>
            <span>{{menu.text}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class AppAside extends Vue {
  isCollapse: boolean = true;

  // routerName: string = '/user'

  menus: any [] = []

  created  () {
    this.menus = this.$store.state.menus
  }

  handleOpen(key: number, keyPath: number) {
    console.log(key, keyPath);
  }
  handleClose(key: number, keyPath: number) {
    console.log(key, keyPath);
  }

  get routerName() {
    return this.$store.state.router.name
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  min-height: 600px;
}
.el-menu-item.is-active{
  background-color: aliceblue!important;
}
.el-menu-item .iconfont{
  margin-right: 10px;
}

</style>
