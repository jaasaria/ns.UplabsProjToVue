<template>
<Page class="page" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
<GridLayout rows="*, auto, auto">
    <ScrollView row="0" scrollBarIndicatorVisible="false" paddingBottom="100">
        <GridLayout rows="auto, *">
            <!-- header -->
            <GridLayout row="0" rows="*, *, *" class="header">
                <GridLayout row="0" rows="*" columns="*, auto" padding="15">
                    <Label row="0" col="0" text="EXPLORE" class="title sf"></Label>
                    <Image row="0" col="1" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d74712e9b31ac943d46541e6e6ed559f&auto=format&fit=crop&w=800&q=80" class="profile-img" shadow="3"></Image>
                </GridLayout>
                <ScrollView row="1" orientation="horizontal" scrollBarIndicatorVisible="false" paddingRight="15">
                    <StackLayout orientation="horizontal" >
                        <GridLayout class="header-tiles t1">
                            <Label text="NEW ALBUMS" horizontalAlignment="center" verticalAlignment="center" class="mt fs14 ls"></Label>
                        </GridLayout>
                        <GridLayout class="header-tiles t2">
                            <Label text="PLAYLISTS" horizontalAlignment="center" verticalAlignment="center" class="mt fs14 ls"></Label>
                        </GridLayout>
                        <GridLayout class="header-tiles t3">
                            <Label text="TRACKS" horizontalAlignment="center" verticalAlignment="center" class="mt fs14 ls"></Label>
                        </GridLayout>
                    </StackLayout>
                </ScrollView>
                <GridLayout row="2" rows="*" columns="auto, auto, auto" horizontalAlignment="center">
                    <GridLayout row="0" col="0" class="slider s1"></GridLayout>
                    <GridLayout row="0" col="1" class="slider"></GridLayout>
                    <GridLayout row="0" col="2" class="slider"></GridLayout>
                </GridLayout>
            </GridLayout>
            <StackLayout row="1">
                <Label text="GENRE" class="p15 sf fw800" color="#374064"></Label>
                <ScrollView orientation="horizontal"
                    scrollBarIndicatorVisible="false">
                    <StackLayout orientation="horizontal">
                        <GridLayout rows="*" columns="*" class="genre-tiles g1">
                            <Image row="0" col="0" src="~/assets/images/electro.png" width="145"></Image>
                            <Label row="0" col="0" text="ELECTRONIC" horizontalAlignment="center" verticalAlignment="center" class="mt fs14 ls"></Label>
                        </GridLayout>
                        <GridLayout rows="*" columns="*" class="genre-tiles">
                            <Image row="0" col="0" src="~/assets/images/rock.png" width="300"></Image>
                            <Label row="0" col="0" text="ROCK" horizontalAlignment="center" verticalAlignment="center" class="mt fs14 ls"></Label>
                        </GridLayout>
                        <GridLayout rows="*" columns="*" class="genre-tiles g3">
                            <Image row="0" col="0" src="~/assets/images/classic.png" width="300"></Image>
                            <Label row="0" col="0" text="CLASSICAL" horizontalAlignment="center" verticalAlignment="center"  class="mt fs14 ls"></Label>
                        </GridLayout>
                    </StackLayout>
                </ScrollView>
                <Label text="ARTISTS" class="p15 sf fw800" color="#374064"></Label>
                <ScrollView scrollBarIndicatorVisible="false" orientation="horizontal">
                    <StackLayout orientation="horizontal"  paddingRight="15">
                        <GridLayout rows="*" columns="*" width="170" paddingLeft="15" 
													@tap="showDetails()">
                            <Image row="0" col="0" src="~/assets/images/camila.png"></Image>
                            <GridLayout row="0" col="0" rows="90, 60" columns="*" verticalAlignment="bottom">
                                <Image row="0" col="0" src="~/assets/images/btn1.png" verticalAlignment="top" width="45" horizontalAlignment="right" marginRight="10" marginTop="5"></Image>
                                <GridLayout rows="*, *" columns="*" row="1">
                                    <Label row="0" col="0" text="CAMILA CABELLO" color="white" class="fs12 fw800 mt" paddingTop="16" horizontalAlignment="center"></Label>
                                    <Label row="1" col="0" text="25 TRACKS" class="fs10 mt" color="white" horizontalAlignment="center"></Label>
                                </GridLayout>
                            </GridLayout>
                        </GridLayout>
                        <GridLayout rows="*" columns="*" width="170" paddingLeft="15">
                            <Image src="~/assets/images/drake.png"></Image>
                            <GridLayout row="0" col="0" rows="90, 60" columns="*" verticalAlignment="bottom">
                                <Image row="0" col="0" src="~/assets/images/btn2.png" verticalAlignment="top" width="45" horizontalAlignment="right" marginRight="10" marginTop="5"></Image>
                                <GridLayout rows="*, *" columns="*" row="1">
                                    <Label row="0" col="0" text="DRAKE" color="white" class="fs12 fw800 mt" paddingTop="16" horizontalAlignment="center"></Label>
                                    <Label row="1" col="0" text="48 TRACKS" class="fs10 mt" color="white" horizontalAlignment="center"></Label>
                                </GridLayout>
                            </GridLayout>
                        </GridLayout>
                        <GridLayout rows="*" columns="*" width="170" paddingLeft="15">
                            <Image src="~/assets/images/beyonce.png"></Image>
                            <GridLayout row="0" col="0" rows="90, 60" columns="*" verticalAlignment="bottom">
                                <Image row="0" col="0" src="~/assets/images/btn3.png" verticalAlignment="top" width="45" horizontalAlignment="right"  marginRight="10" marginTop="5"></Image>
                                <GridLayout rows="*, *" columns="*" row="1">
                                    <Label row="0" col="0" text="BEYONCE" color="white" class="fs12 fw800 mt" paddingTop="16" horizontalAlignment="center"></Label>
                                    <Label row="1" col="0" text="124 TRACKS" class="fs10 mt" color="white" horizontalAlignment="center"></Label>
                                </GridLayout>
                            </GridLayout>
                        </GridLayout>
                    </StackLayout>
                </ScrollView>
                <!-- PLAYLISTS -->
                <Label text="PLAYLISTS" class="p15 sf fw800" color="#374064"></Label>
                <ScrollView scrollBarIndicatorVisible="false" orientation="horizontal">
                    <StackLayout orientation="horizontal" paddingBottom="15" paddingRight="15">
                        <GridLayout rows="*, *" columns="*, *" width="155" marginLeft="15" borderRadius="8">
                            <Image row="0" col="0" src="~/assets/images/playlist1/1.png"></Image>
                            <Image row="0" col="1" src="~/assets/images/playlist1/2.png"></Image>
                            <Image row="1" col="0" src="~/assets/images/playlist1/3.png"></Image>
                            <Image row="1" col="1" src="~/assets/images/playlist1/4.png"></Image>
                        </GridLayout>
                        <GridLayout rows="*, *" columns="*, *" width="155" marginLeft="15" borderRadius="8">
                            <Image row="0" col="0" src="~/assets/images/playlist2/1.png"></Image>
                            <Image row="0" col="1" src="~/assets/images/playlist2/2.png"></Image>
                            <Image row="1" col="0" src="~/assets/images/playlist2/3.png"></Image>
                            <Image row="1" col="1" src="~/assets/images/playlist2/4.png"></Image>
                        </GridLayout>
                        <AbsoluteLayout borderRadius="8">
                        <GridLayout rows="*, *" columns="*, *" width="155" marginLeft="15" >
                            <Image row="0" col="0" src="~/assets/images/playlist3/1.png"></Image>
                            <Image row="0" col="1" src="~/assets/images/playlist3/2.png"></Image>
                            <Image row="1" col="0" src="~/assets/images/playlist3/3.png"></Image>
                            <Image row="1" col="1" src="~/assets/images/playlist3/4.png"></Image>
                        </GridLayout>
                        </AbsoluteLayout>
                    </StackLayout>
                </ScrollView>
            </StackLayout>
        </GridLayout>
    </ScrollView>
    <!-- BOTTOM NAVBAR -->
    <GridLayout row="1" rows="*" columns="*">
        <Image row="0" col="0" src="~/assets/images/nav.png" opacity="0.6"></Image>
        <GridLayout row="0" col="0" rows="*" columns="*, *, *, *, *" class="nav">
            <Label row="0" col="0" text="a" horizontalAlignment="center" verticalAlignment="center" class="ico active"></Label>
            <Label row="0" col="1" text="b" horizontalAlignment="center" verticalAlignment="center" class="ico fs20" 
							@tap="showDetails()"></Label>
            <Label row="0" col="2" text="c" horizontalAlignment="center" verticalAlignment="center" class="ico fs20" 
							@tap="showPlayer()"></Label>
            <Label row="0" col="3" text="d" horizontalAlignment="center" verticalAlignment="center" class="ico fs20"></Label>
            <Label row="0" col="4" text="e" horizontalAlignment="center" verticalAlignment="center" class="ico fs20"></Label>
        </GridLayout>
    </GridLayout>
	<!-- <StackLayout row="0" rowSpan="2" height="{{viewHeigth}}" class="modal"></StackLayout>     -->
</GridLayout>


</Page>
</template>
<script>
import Details from './Details'
import Player from './Player'

export default {	
	computed: {
	},
	mounted () {
	},
	data() {
		return {
		};
	},
	methods: {
		onButtonTap() {

		},
		showDetails() {
			this.$navigateTo(Details,{
				animated: true,
				transition: {
					name: "slideLeft",
					duration: 250,
					curve: "easeIn"
				}
			})
		},
		showPlayer() {
			this.$navigateTo(Player,{
				animated: true,
				transition: {
					name: "slideLeft",
					duration: 250,
					curve: "easeIn"
				}
			})
		},
		
	}
};
</script>

<style scoped>
/* HEADER */
.header{
    background-color: #FCFCFF;
}
.title{
    font-size: 28;
    color: #374064;
}
.header-tiles{
    width: 135;
    height: 45;
    border-radius: 8;
    font-size: 14;
    font-weight: 800;
    color: #fff;
    margin: 0 0 15 15;
}
.slider{
    width: 5;
    height: 5;
    background-color: #8590A7;
    border-radius: 5;
    margin: 0 2 15 1;
}
.s1{
    width: 15;
}

/* CONTAINER */
.genre-tiles{
    width: 145;
    height: 50;
    border-radius: 8;
    font-size: 14;
    font-weight: 800;
    color: #fff;
    margin: 0 0 15 15;
}
.modal{
    background-color: red;
    z-index: 99;
    border-radius: 10;

}






/* bottom nav bar */
.nav{
    height: 50;
}
</style>