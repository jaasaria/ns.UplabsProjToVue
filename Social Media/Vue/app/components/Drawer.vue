<template>
  <Page>
  
	 <ActionBar>
      <GridLayout width="100%" columns="auto, *">
        <Label text="MENU" @tap="openDrawer()" col="0"/>
        <Label class="title" text="Welcome to NativeScript-Vue!"  col="1"/>
      </GridLayout>
    </ActionBar>

    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent backgroundColor="#eee">
				<StackLayout height="80%"></StackLayout>
				<StackLayout class="">
					<Label text="  Settings" paddingLeft="30%" color="black" class="drawerItemText font-awesome" margin="10" />
					<Label text="  Log out" paddingLeft="30%" color="black" class="drawerItemText font-awesome" margin="10"  />
				</StackLayout>
			</StackLayout>
				
      <StackLayout ~mainContent >
				<Home></Home>

      </StackLayout>
    </RadSideDrawer>
  </Page>
</template>

<script>
import Home from './Home'
import Profile from './Profile'

  export default {
		components: {
			Home
		},
    data () {
      return {
      };
    },
  };
</script>

<style scoped>
  
.drawerItemText{
	font-size: 19;
	color: #000000;
	height: 22;
}
</style>
