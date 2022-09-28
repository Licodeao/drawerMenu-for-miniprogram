// app.js
App({
  onLaunch() {
   this.setHeight()
   this.globalData.deviceInfo = wx.getSystemInfoSync()
   console.log("全局", this.globalData.deviceInfo)
   console.log("全局变量", this.globalData)
  },
  globalData: {
    // 导航栏高度
    navBarHeight: 0, 
    // 胶囊距底部间距
    menuBotton: 0, 
    // 胶囊距右方间距
    menuRight: 0, 
    // 胶囊高度
    menuHeight: 0, 
    deviceInfo: null
  },
  setHeight() {
    const systemInfo = wx.getSystemInfoSync()
    // 胶囊按钮位置
    const mButton = wx.getMenuButtonBoundingClientRect();
    // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
    this.globalData.navBarHeight = (mButton.top - systemInfo.statusBarHeight) * 2 + mButton.height + systemInfo.statusBarHeight;
    this.globalData.menuBotton = mButton.top - systemInfo.statusBarHeight;
    this.globalData.menuRight = systemInfo.screenWidth - mButton.right;
    this.globalData.menuHeight = mButton.height;
  }
})
