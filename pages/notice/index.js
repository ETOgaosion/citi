var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: app.username,
    position: app.position,
    //微信icon
    iconSize: 30,
    iconColor: [
      'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'
    ],
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    notice:[
      {
        name:'华为',
        src:"/pages/shops/index?shopID=0&shopname=华为&shopimg=/photos/digital/12.jpg",
        photo:'/photos/digital/12.jpg',
      },
      {
        name:'韩国化妆品',
        src:"/pages/shops/index?shopID=1&shopname=韩国知名&shopimg=/photos/makeup/14.png",
        photo:'/photos/makeup/14.png',
      },{
        name:'海澜之家',
        src:"/pages/shops/index?shopID=3&shopname=海澜之家&shopimg=/photos/clothes/18.png",
        photo:'/photos/clothes/18.png',
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  },
  
  //定位
  position: function () {
    if (this.data.position == "") {
      var that = this;
      wx.getLocation({
        type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
        success: function (res) {
          console.log('定位成功');
          var locationString = res.latitude + ',' + res.longitude;
          console.log(locationString);
          wx.request({
            url: 'https://apis.map.qq.com/ws/geocoder/v1/',
            data: {
              'key': 'K5JBZ-GBHW4-HODUQ-XH5RI-APOCE-WUBYQ',
              'location': locationString,
              'get_poi': 1
            },
            method: 'GET',
            // header: {}, 
            success: function (res) {
              // success
              console.log('请求成功');
              console.log('请求数据:' + res.data.result.address);
              app.position = res.data.result.address;
              that.setData({
                position: '@' + app.position
              })
              getApp().globalData.position=that.data.position
            },
            fail: function () {
              // fail
              console.log('请求失败');
            },
            complete: function () {
              // complete
              console.log('请求完成');
            }
          })
        },
        fail: function () {
          // fail
          console.log('定位失败');
        },
        complete: function () {
          // complete
          console.log('定位完成');
        }
      })
    }
  },
  //搜索功能
  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{
          text: '搜索结果',
          value: 1
        }, {
          text: '搜索结果2',
          value: 2
        }])
      }, 200)
    })
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
  },
})