// index.js
// 获取应用实例
const app = getApp()

Page({
  onReady() {
      this.mainPageAnimation = wx.createAnimation()
      this.drawerPageAnimation = wx.createAnimation()
  },
  data: {
    //导航栏高度
    navBarHeight: app.globalData.navBarHeight,
    //导航栏距离顶部距离
    menuBotton: app.globalData.menuBotton,
    //导航栏高度
    menuHeight: app.globalData.menuHeight,
    sliderList: [
        {
            id: "0",
            text: "Home"
        },
        {
            id: "1",
            text: "Discover"
        },
        {
            id: "2",
            text: "Devices"
        },
        {
            id: "3",
            text: "Profile"
        },
        {
            id: "4",
            text: "Settings"
        },
        {
            id: "5",
            text: "About"
        },
        {
            id: "6",
            text: "Help"
        }
    ],
    isShow: false,
    currentIndex: 0
  },
  openDrawer(e) {
      let currentStatus = e.currentTarget.dataset.status
      this.createAnimation(currentStatus)
      this.setData({
          isShow: true
      })
  },
  closeDrawer(e) {
    let currentStatus = e.currentTarget.dataset.status
    if (currentStatus == "close") {
        this.setData({
            isShow: false
        })
        this.createAnimation(currentStatus)
    }
  },
  resume() {
    this.clearAnimation('.main')
    this.setData({
        isShow: false
    })
  },
  createAnimation(currentStatus) {
    console.log(currentStatus)
    this.mainPageAnimation.translateX(200).step().rotateY(-45).step().scale(0.9).step()
    this.setData({
        mainPageAnimation: this.mainPageAnimation.export()
    })
    if (currentStatus === "close") {
        this.clearAnimation('.main')
    }
  },
  click(event) {
    console.log(event)
    this.setData({
        currentIndex: event.mark.index
    })
  }
})
