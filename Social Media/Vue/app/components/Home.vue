<template>
<Page class="page">

	<ActionBar title="" class="action-bar header">
		<StackLayout orientation="horizontal" height="38" alignItems="left" class="actionBarContainer">
			<StackLayout class="HLeft" style="margin-top:10;" @tap="toggleDrawer()">
				<Label :text="drawerToggle ? drawer2: drawer1"  style="font-size:27;color:#fff;" class="font-awesome"/>
			</StackLayout>
			<StackLayout class="HMid" alignItems="left">
				<TextField placeholderColor="white" id="searchField" editable="true" hint="      Search" returnKeyType="search" ios:height="30" ios:marginTop="3" android:paddingBottom="5" class="searchField font-awesome"
				 color="#fff" />
			</StackLayout>
			<StackLayout class="HRight">
		
			</StackLayout>
		</StackLayout>
	</ActionBar>
	
	<RadSideDrawer ref="drawer" @drawerOpened="onDrawerOpened()" @drawerClosed="onDrawerClosed()">
		<StackLayout ~drawerContent backgroundColor="#eee">
			<StackLayout height="80%"></StackLayout>
			<StackLayout class="">
				<Label text="  Settings" paddingLeft="30%" color="black" class="drawerItemText font-awesome" margin="10" />
				<Label text="  Log out" paddingLeft="30%" color="black" class="drawerItemText font-awesome" margin="10"  />
			</StackLayout>
		</StackLayout>
			
		<StackLayout ~mainContent >

			<DockLayout>

				<StackLayout dock="top" height="90%" width="100%" style="">

					<ListView for="item in homePosts" :key="index" height="100%" backgroundColor="#E8E8E8" separatorColor="transparent" id="listView">
						<v-template>

							<StackLayout paddingTop="5" backgroundColor="#E8E8E8">
								<StackLayout class="postContainer">
									<StackLayout orientation="horizontal" padding="10">
										<Image :src="item.authorImg" stretch="aspectFill" class="postImageSmall" />
											<StackLayout>
												<Label :text="item.autorName" class="postAuthotName" />
												<Label :text="item.date" class="postDateSmall" />
											</StackLayout>
									</StackLayout>
									<Label marginLeft="10" marginRight="10" class="postTitle" :text="item.title" />
									<Image :src="item.postImg" marginTop="10" />
									<StackLayout orientation="horizontal" padding="10" marginLeft="10%">
										<Label text=" " style="font-size:18;margin-top:-1;" :color="item.color" class="font-awesome"/>
										<Label :text="item.likes" style="font-size:12;color:#1aa3ff;" />
										<Label text=" " style="font-size:19;margin-left:23%;margin-top:-3;color:#747474;" class="font-awesome"/>
										<Label :text="item.comments" style="font-size:12;color:#1aa3ff;" />
										<Label text=" " style="font-size:22;margin-left:23%;margin-top:-3;color:#747474;" class="font-awesome"/>
										<Label :text="item.reposts" style="font-size:12;color:#1aa3ff;" />
									</StackLayout>
								</StackLayout>
							</StackLayout>

						</v-template>
					</ListView>

				</StackLayout>


				<StackLayout dock="bottom" height="10%" style="border-color:#E4E4E4;border-width:1;background:#fff;">
					<StackLayout orientation="horizontal">
						<StackLayout class="navItem" @tap="homeTap()">
							<Label text="" android:class="notificationAndroid" ios:class="notification" opacity="0"/>
							<Label text="" :color="mainColor" android:style="font-size:25;margin-top:-15" ios:style="font-size:30;margin-top:-15" class="font-awesome"/>
						</StackLayout>
						<StackLayout class="navItem" @tap="profileTap()">
							<Label text="" android:class="notificationAndroid" ios:class="notification" opacity="0"/>
							<Label text="" :color="profileColor" android:style="font-size:25;margin-top:-15" ios:style="font-size:30;margin-top:-15" class="font-awesome"/>
						</StackLayout>
						<StackLayout class="navItem" @tap="conversationsTap()">
							<Label text="1" android:class="notificationAndroid" ios:class="notification"  />
							<Label text="" android:style="font-size:25;margin-top:-15" ios:style="font-size:30;margin-top:-15" class="font-awesome"/>
						</StackLayout>
						<StackLayout class="navItem" @tap="notificationsTap()">
							<Label text="0" android:class="notificationAndroid" ios:class="notification" opacity="0"/>
							<Label text="" android:style="font-size:23;margin-top:-15" ios:style="font-size:29;margin-top:-15" class="font-awesome"/>
						</StackLayout>
					</StackLayout>
				</StackLayout>

			</DockLayout>

		</StackLayout>
	</RadSideDrawer>

</page>
</template>
<script>
import Profile from './Profile'
import Convs from './Convs'

export default {	
	computed: {
	},
	watch: {
	},
	mounted () {
	},
	data() {
		return {
			drawerToggle: false,
			drawer1: '',
			drawer2: '',
			mainColor: '#1aa3ff',
			homePosts: [
					{ authorImg: "~/assets/images/Sebastian.jpg", autorName: "Sebastian", color: "#747474", date: "Today at 13:45", title: "Thank you Guys !", postImg: "~/assets/images/bday.png", likes: "30", comments: "14", reposts: "8" },
					{ authorImg: "~/assets/images/large.jpg", autorName: "Cristine", color: "#E15050", date: "Today at 16:21", title: "I Love California 🌞", postImg: "~/assets/images/cali.png", likes: "150", comments: "21", reposts: "11" },
				],
		
		};
	},
	methods: {
		onDrawerClosed(){
			this.drawerToggle = false
		},
		onDrawerOpened(){
			this.drawerToggle = true
		},
		toggleDrawer(){
			this.$refs.drawer.nativeView.toggleDrawerState()
		},
		homeTap() {
		},
		profileTap() {
			this.$navigateTo(Profile)
		},
		conversationsTap() {
			this.$navigateTo(Convs)
		},
		notificationsTap() {
		},
		showDetails() {
		},
		
	}
};
</script>

<style scoped>
#searchField {
	placeholder-color: white;
}
</style>