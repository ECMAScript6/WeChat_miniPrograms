
//获取应用实例
const app = getApp()
//导入json
var postData = require('./expo_data.js');
var util = require("../../utils/util.js");

var randomCode = Math.random() / 9999
var codeurl = '?time=' + randomCode
var time = util.startTime()


Page({
  data: {
    inputShowed: false,
    inputVal: "",
    randomCode:codeurl,
    datalist: {},
    newtime:time,
    userInfo: '',
    passkey:false
  },
  



  onLoad: function () {

    wx.showLoading({
      title: '加载中',
    })





/*
    this.setData({
      dataList: postData.postList,
    });
*/
    //huoqujson
    var that = this
    wx.request({
      url: 'https://www.jingzheng.com/miniPrograms/api/imagesJson.php?v='+codeurl,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {

        that.setData({
          postList: res.data,
        })
        console.log(res.data[0])
        //关闭
        setTimeout(function () {
          wx.hideLoading()
        }, 0)
      }
    })
    //huoqujson

  },

  expo_E1: function () {
    wx.navigateTo({
      url: 'pages/expo/images/images'
    })
  },
  //图片点击事件
  imgExpo: function (event) {
    var src = event.currentTarget.dataset.src;//获取data-src
    var imgList = event.currentTarget.dataset.list;//获取data-list
    //图片预览
    console.log(src);
    console.log(imgList);
    wx.clearStorage();
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: [imgList] // 需要预览的图片http链接列表
    })
    console.log(imgList)
  },
  onPullDownRefresh: function () {

    var time = util.startTime();

    wx.showLoading({
      title: '加载中',
    })

    //huoqujson
    var that = this
    wx.request({
      url: 'https://www.jingzheng.com/miniPrograms/api/imagesJson.php?v=' + codeurl,
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {

        that.setData({
          postList: res.data,
          newtime: time
        })
        console.log(res.data[0])
        //关闭
        /*
        wx.stopPullDownRefresh();
        setTimeout(function () {
          wx.hideLoading()
        }, 1500)
        */
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 1000
        });
        wx.stopPullDownRefresh();
        setTimeout(function () {
          wx.hideLoading()
        }, 1500);

        return res.data

      }
    })
    //huoqujson

  },






  formSubmit: function (e) {
    var param = e.detail.value;
    this.mysubmit(param);
  },
  mysubmit: function (param) {
    var flag = this.checkUserName(param)
    if (flag) {

      this.checkUserInfo(param);
    }
  },


  checkUserName: function (param) {
    var phone = util.regexConfig().phone;
    var inputUserName = param.username.trim();
    if (phone.test(inputUserName)){
      return true;
    } else {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请输入正确的员工号'
      });
      return false;
    }
  },










  checkUserInfo: function (param) {
    var username = param.username.trim();

    console.log(username);

    var that = this;
    if (username == '13661110737' || username == '13901331219' || username == '13911871075') {
      that.setData({
        passkey: true
      });
    } else {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请输入正确的员工号'
      });
      that.setData({
        passkey: false
      })
    }
  },













})
