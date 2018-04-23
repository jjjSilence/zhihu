//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  //事件处理函数
  // TabBar的list中已有的路径其它地方不能再使用，使用也无效
  bindItemTap: function () {
    wx.navigateTo({
      url: '../logs/logs',
      success: function (res) {
        // success
        console.log(成功);
      },
      fail: function () {
        // fail
        console.log('sksdfksjfksjf');
      },
      complete: function () {
        // complete
        console.log('complete');
      }
    })
  }
})
