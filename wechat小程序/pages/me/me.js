// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
  },

  /*自定义事件*/
  //事件处理函数
  jump1: function () {
    wx.navigateTo({
      url: '../card/card'
    })
  },





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    wx.showLoading({
      title: '加载中',
    })


    var that = this
    wx.getUserInfo({

      withCredentials: true,
      lang: '',
      success: function (res) {

        console.log(res);
        that.setData({
          userInfo: res.userInfo
        })
        that.update()

        setTimeout(function () {
          wx.hideLoading()
        }, 0)
      },
      fail: function (res) { console.log(res) },
      complete: function (res) { console.log(res) },
    })
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})