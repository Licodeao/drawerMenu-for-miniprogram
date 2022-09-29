// pages/components/navigation.js
const app = getApp()
Component({
    /**
     * 组件的初始数据
     */
    data: {
        //导航栏高度
        navBarHeight: app.globalData.navBarHeight, 
        // 胶囊距右方间距（方保持左、右间距一致）
        menuRight: app.globalData.menuRight, 
        menuBotton: app.globalData.menuBotton,
        menuHeight: app.globalData.menuHeight
    }
})
