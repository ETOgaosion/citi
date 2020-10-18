var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //重定向后显示
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
    //搜索框数据
    animate: false,
    msgList: [{
        text: '华为减价'
      },
      {
        text: '韩国化妆品减价'
      },
      {
        text: '海澜之家减价'
      }
    ],
    inputShowed: false,
    inputVal: '',

    //滑动幻灯片
    photos: [{
        src: '/photos/1.jpg'
      },
      {
        src: '/photos/2.jpg'
      },
      {
        src: '/photos/3.jpg'
      },
      {
        src: '/photos/4.jpg'
      }
    ],

    //左侧种类
    showpage: [{
      content: {
        /*photo-src:{
        ''
      }
    },*/
        mode: 1
      },
    }],
    selected: 0,
    vtabs: [],

    //商铺
    shops: [{
        no: 0,
        type: '数码',
        category: [{
            name: '华为',
            photo: '/photos/digital/12.jpg'
          },
          {
            name: '苹果',
            photo: '/photos/digital/13.jpg'
          },
          {
            name: '小米',
            photo: '/photos/digital/5.jpg'
          },
          {
            name: '三星',
            photo: '/photos/digital/6.jpg'
          },
          {
            name: '1+',
            photo: '/photos/digital/7.jpg'
          },
          {
            name: '方舟',
            photo: '/photos/digital/8.jpg'
          }
        ]
      },
      {
        no: 0,
        type: '美妆',
        category: [{
          name: '韩国知名',
          photo: '/photos/makeup/14.png'
        }, {
          name: '日本知名',
          photo: '/photos/makeup/15.png'
        }, ]
      },
      {
        no: 0,
        type: '服装',
        category: [{
          name: 'Addidas',
          photo: '/photos/clothes/16.png'
        }, {
          name: 'Halloween',
          photo: '/photos/clothes/17.png'
        }, {
          name: '海澜之家',
          photo: '/photos/clothes/18.png'
        }, ]
      },
      {
        no: 1,
        type: '农业',
        category: [{
          name: ''
        }]
      },
      {
        no: 0,
        type: '运动',
        category: [{
          name: '特步',
          photo: '/photos/sports/19.png'
        }, {
          name: '耐克',
          photo: '/photos/sports/20.jpg'
        }, {
          name: 'NBA',
          photo: '/photos/sports/21.jpeg'
        }, ]
      },
      {
        no: 0,
        type: '五金',
        category: [{
          name: '韩国知名',
          photo: '/photos/wujin/y1.jpg'
        }, {
          name: '日本知名',
          photo: '/photos/wujin/y2.jpg'
        }, ]
      },
      {
        no: 0,
        type: '汽车',
        category: [{
          name: '劳斯莱斯',
          photo: '/photos/car/25.jpeg  '
        }]
      },
      {
        no: 0,
        type: '服务',
        category: [{
          name: '韩国知名',
          photo: '/photos/service/26.jpg'
        }, {
          name: '日本知名',
          photo: '/photos/service/27.jpg'
        }, ]
      },
      {
        no: 1,
        type: '乐器',
        category: [{
          name: ''
        }]
      },
      {
        no: 0,
        type: '游戏',
        category: [{
          name: '网易',
          photo: '/photos/game/22.jpeg'
        }, {
          name: '腾讯',
          photo: '/photos/game/23.jpeg'
        }, {
          name: 'Unity',
          photo: '/photos/game/24.jpeg'
        }]
      },
      {
        no: 1,
        type: '电气',
        category: [{
          name: ''
        }]
      },
      {
        no: 1,
        type: '运输',
        category: [{
          name: ''
        }]
      },
      {
        no: 1,
        type: '通信',
        category: [{
          name: ''
        }]
      },
      {
        no: 1,
        type: '能源',
        category: [{
          name: ''
        }]
      },
      {
        no: 1,
        type: '包装',
        category: [{
          name: ''
        }]
      }
    ]

    //data结束
  },
  //搜索框
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: '',
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ''
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });

  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log(app.globalData.username);
    //搜索功能
    this.setData({
      search: this.search.bind(this),
    })
    const type = ['数码', '美妆', '服装', '农业', '运动', '五金', '汽车', '服务', '乐器', '游戏', '电气', '运输', '通信', '能源', '包装']
    const vtabs = type.map(item => ({
      title: item
    }))
    this.setData({
      vtabs
    })
  },
  //点击分类框
  changeshow: function (e) {
    var that = this;
    that.data.selected = e.detail.index;
    const index = e.detail.index;
    var co = that.data.shops[that.data.selected];
    console.log(co);
  },
  onTabCLick(e) {
    const index = e.detail.index
    this.data.selected = index;
    this.setData({
      selected: index
    })
    console.log('tabClick', this.data.selected)
  },
  onChange(e) {
    const index = e.detail.index
    this.data.selected = index;
    this.setData({
      selected: index
    })
    console.log('change', this.data.selected)
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

  //扫描二维码
  scanqrcode: function () {
    // 允许从相机和相册扫码
    wx.scanCode({
      success(res) {
        console.log(res)
      }
    })
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