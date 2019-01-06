<template>
	<div class='menu-wrapper'>

		<template v-for="item in routes">
			<!-- <router-link v-if="item.children.length>0" :to="item.code+'/'+item.children[0].code">
			<el-menu-item :index="item.code+'/'+item.children[0].code" class='submenu-title-noDropdown'>
				<icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg>
				<span slot="title">{{item.children[0].title}}</span>
			</el-menu-item>
		</router-link> -->
			<el-submenu :index="item.title" :key="item.id">
				<template slot="title">
					<icon-svg v-if='item.icon' :icon-class="item.icon"></icon-svg>
					<span>{{item.title}}</span>
				</template>
				<template v-for="child in item.children">
					<sidebar-item class='nest-menu' v-if='child.children&&child.children.length>0' :routes='[child]' :key="child.id"> </sidebar-item>
					<!-- <router-link v-else :to="'/'+item.code+'/'+child.code" :key="child.id"  class="test"> -->
						<el-menu-item v-else :index="item.code+'/'+child.code" :key="child.id">
						<router-link :to="'/'+item.code+'/'+child.code">
							<icon-svg v-if='child.icon' :icon-class="child.icon"></icon-svg>
							<span>{{child.title}}</span>
							</router-link>
						</el-menu-item>
					<!-- </router-link> -->
				</template>
			</el-submenu>

		</template>

	</div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    routes: {
      type: Array
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
<style>
.sidebar-container{
	background-color: rgb(48, 65, 86);
}
.el-submenu__title{
	color: rgb(191, 203, 217)!important;
}
.el-submenu__title:hover{
		color: rgb(64, 158, 255)!important;
		background-color: #1f2d3d!important;
}
.el-menu--inline{
	background-color: #1f2d3d!important;
}

.el-menu-item{
	color: rgb(191, 203, 217)!important;
}
.el-menu-item:hover{
	color: rgb(64, 158, 255)!important;
background-color: #001528!important;
}



</style>


