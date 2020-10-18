var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //重定向后显示
    username: app.username,
    position: app.position,
    shopimg: '',
    shopname: '',
    shopindex: 0,

    vtabs: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      shopimg: options.shopimg,
      shopname: options.shopname,
      shopindex: options.shopID,
    })
    console.log(this.data.shopindex);

    const type = [{
      data: [{
          kind: '手机',
          category: [{
              name: 'P40',
              photo: '/photos/digital/12.jpg',
              price: 5000,
            },
            {
              name: '畅享10',
              photo: '/photos/digital/13.jpg',
              price: 5000,
            },
            {
              name: 'Mate30',
              photo: '/photos/digital/5.jpg',
              price: 5000,
            },
            {
              name: 'Iphone12',
              photo: '/photos/digital/6.jpg',
              price: 5000,
            },
            {
              name: 'Imi',
              photo: '/photos/digital/7.jpg',
              price: 5000,
            },
            {
              name: '电脑',
              photo: '/photos/digital/8.jpg'
            }
          ]
        },
        {
          kind: '电脑',
          category: [{
            name: '联想',
            photo: '/photos/makeup/14.png',
            price: 5000,
          }, {
            name: 'dell',
            photo: '/photos/makeup/15.png',
            price: 5000,
          }, ]
        },
        {
          kind: '手环',
          category: [{
            name: '1代',
            photo: '/photos/clothes/16.png',
            price: 5000,
          }, {
            name: '2代',
            photo: '/photos/clothes/17.png',
            price: 5000,
          }, {
            name: '3代',
            photo: '/photos/clothes/18.png',
            price: 5000,
          }, ]
        },
        {
          kind: '耳机',
          category: [{
            name: 'AirPod',
            photo: '/photos/sports/19.png',
            price: 5000,
          }, {
            name: 'IPod',
            photo: '/photos/sports/20.jpg',
            price: 5000,
          }, {
            name: '华为',
            photo: '/photos/sports/21.jpeg',
            price: 5000,
          }, ]
        },
        {
          kind: '芯片',
          category: [{
            name: '龙芯',
            photo: '/photos/wujin/y1.jpg',
            price: 5000,
          }, {
            name: '麒麟',
            photo: '/photos/wujin/y2.jpg',
            price: 5000,
          }, ]
        },
        {
          kind: '汽车',
          category: [{
            name: 'AI',
            photo: '/photos/car/25.jpeg  '
          }]
        },
        {
          kind: '云服务器',
          category: [{
            name: '华为云',
            photo: '/photos/service/26.jpg',
            price: 5000,
          }, {
            name: '阿里云',
            photo: '/photos/service/27.jpg',
            price: 5000,
          }, ]
        },
        {
          kind: '乐器',
          category: [{
            name: ''
          }]
        },
        {
          kind: '游戏',
          category: [{
            name: '网易',
            photo: '/photos/game/22.jpeg',
            price: 5000,
          }, {
            name: '腾讯',
            photo: '/photos/game/23.jpeg',
            price: 5000,
          }, {
            name: 'Unity',
            photo: '/photos/game/24.jpeg'
          }]
        }
      ]
    },{
      data: [{
          kind: '粉底液',
          category: [{
              name: '1',
              photo: '/photos/digital/12.jpg',
              price: 5000,
            },
            {
              name: '2',
              photo: '/photos/digital/13.jpg',
              price: 5000,
            },
            {
              name: '3',
              photo: '/photos/digital/5.jpg',
              price: 5000,
            },
            {
              name: '4',
              photo: '/photos/digital/6.jpg',
              price: 5000,
            },
            {
              name: '5',
              photo: '/photos/digital/7.jpg',
              price: 5000,
            },
            {
              name: '6',
              photo: '/photos/digital/8.jpg'
            }
          ]
        },
        {
          kind: '眼影',
          category: [{
            name: '1',
            photo: '/photos/makeup/14.png',
            price: 5000,
          }, {
            name: '2',
            photo: '/photos/makeup/15.png',
            price: 5000,
          }, ]
        },
        {
          kind: 'BB霜',
          category: [{
            name: '1代',
            photo: '/photos/clothes/16.png',
            price: 5000,
          }, {
            name: '2代',
            photo: '/photos/clothes/17.png',
            price: 5000,
          }, {
            name: '3代',
            photo: '/photos/clothes/18.png',
            price: 5000,
          }, ]
        },
        {
          kind: '双眼皮贴',
          category: [{
            name: '1片',
            photo: '/photos/sports/19.png',
            price: 5000,
          }, {
            name: '2片',
            photo: '/photos/sports/20.jpg',
            price: 5000,
          }, {
            name: '3片',
            photo: '/photos/sports/21.jpeg',
            price: 5000,
          }, ]
        },
        {
          kind: '口红',
          category: [{
            name: '1',
            photo: '/photos/wujin/y1.jpg',
            price: 5000,
          }, {
            name: '2',
            photo: '/photos/wujin/y2.jpg',
            price: 5000,
          }, ]
        },
        {
          kind: '指甲油',
          category: [{
            name: '1',
            photo: '/photos/car/25.jpeg  '
          }]
        },
        {
          kind: '香水',
          category: [{
            name: '迪奥',
            photo: '/photos/service/26.jpg',
            price: 5000,
          }, {
            name: '香榭丽舍',
            photo: '/photos/service/27.jpg',
            price: 5000,
          }, ]
        },
        {
          kind: '卸妆水',
          category: [{
            name: '1',
            photo: '/photos/game/22.jpeg',
            price: 5000,
          }, {
            name: '2',
            photo: '/photos/game/23.jpeg',
            price: 5000,
          }, {
            name: '3',
            photo: '/photos/game/24.jpeg'
          }]
        }
      ]
    },{
      data: [{
          kind: '男装',
          category: [{
              name: '海澜之家',
              photo: '/photos/digital/12.jpg',
              price: 5000,
            },
            {
              name: '七匹狼',
              photo: '/photos/digital/13.jpg',
              price: 5000,
            },
            {
              name: '3',
              photo: '/photos/digital/5.jpg',
              price: 5000,
            },
            {
              name: '4',
              photo: '/photos/digital/6.jpg',
              price: 5000,
            },
            {
              name: '5',
              photo: '/photos/digital/7.jpg',
              price: 5000,
            },
            {
              name: '6',
              photo: '/photos/digital/8.jpg'
            }
          ]
        },
        {
          kind: '正装',
          category: [{
            name: '1',
            photo: '/photos/makeup/14.png',
            price: 5000,
          }, {
            name: '2',
            photo: '/photos/makeup/15.png',
            price: 5000,
          }, ]
        },
        {
          kind: '运动装',
          category: [{
            name: '1代',
            photo: '/photos/clothes/16.png',
            price: 5000,
          }, {
            name: '2代',
            photo: '/photos/clothes/17.png',
            price: 5000,
          }, {
            name: '3代',
            photo: '/photos/clothes/18.png',
            price: 5000,
          }, ]
        },
        {
          kind: '休闲装',
          category: [{
            name: '1',
            photo: '/photos/sports/19.png',
            price: 5000,
          }, {
            name: '2',
            photo: '/photos/sports/20.jpg',
            price: 5000,
          }, {
            name: '3',
            photo: '/photos/sports/21.jpeg',
            price: 5000,
          }, ]
        },
        {
          kind: '女装',
          category: [{
            name: '1',
            photo: '/photos/wujin/y1.jpg',
            price: 5000,
          }, {
            name: '2',
            photo: '/photos/wujin/y2.jpg',
            price: 5000,
          }, ]
        },
        {
          kind: '真正的女装',
          category: [{
            name: '1',
            photo: '/photos/car/25.jpeg  '
          }]
        },
        {
          kind: '童装',
          category: [{
            name: '1',
            photo: '/photos/service/26.jpg',
            price: 5000,
          }, {
            name: '2',
            photo: '/photos/service/27.jpg',
            price: 5000,
          }, ]
        },
        {
          kind: '内衣',
          category: [{
            name: 'sexy',
            photo: '/photos/game/22.jpeg',
            price: 5000,
          }, {
            name: '情趣',
            photo: '/photos/game/23.jpeg',
            price: 5000,
          }, {
            name: 'neutral',
            photo: '/photos/game/24.jpeg'
          }]
        }
      ]
    },{
      data: [{
          kind: '手机',
          category: [{
              name: 'P40',
              photo: '/photos/digital/12.jpg',
              price: 5000,
            },
            {
              name: '畅享10',
              photo: '/photos/digital/13.jpg',
              price: 5000,
            },
            {
              name: 'Mate30',
              photo: '/photos/digital/5.jpg',
              price: 5000,
            },
            {
              name: 'Iphone12',
              photo: '/photos/digital/6.jpg',
              price: 5000,
            },
            {
              name: 'Imi',
              photo: '/photos/digital/7.jpg',
              price: 5000,
            },
            {
              name: '电脑',
              photo: '/photos/digital/8.jpg'
            }
          ]
        },
        {
          kind: '电脑',
          category: [{
            name: '联想',
            photo: '/photos/makeup/14.png',
            price: 5000,
          }, {
            name: 'dell',
            photo: '/photos/makeup/15.png',
            price: 5000,
          }, ]
        },
        {
          kind: '手环',
          category: [{
            name: '1代',
            photo: '/photos/clothes/16.png',
            price: 5000,
          }, {
            name: '2代',
            photo: '/photos/clothes/17.png',
            price: 5000,
          }, {
            name: '3代',
            photo: '/photos/clothes/18.png',
            price: 5000,
          }, ]
        },
        {
          kind: '耳机',
          category: [{
            name: 'AirPod',
            photo: '/photos/sports/19.png',
            price: 5000,
          }, {
            name: 'IPod',
            photo: '/photos/sports/20.jpg',
            price: 5000,
          }, {
            name: '华为',
            photo: '/photos/sports/21.jpeg',
            price: 5000,
          }, ]
        },
        {
          kind: '芯片',
          category: [{
            name: '龙芯',
            photo: '/photos/wujin/y1.jpg',
            price: 5000,
          }, {
            name: '麒麟',
            photo: '/photos/wujin/y2.jpg',
            price: 5000,
          }, ]
        },
        {
          kind: '汽车',
          category: [{
            name: 'AI',
            photo: '/photos/car/25.jpeg  '
          }]
        },
        {
          kind: '云服务器',
          category: [{
            name: '华为云',
            photo: '/photos/service/26.jpg',
            price: 5000,
          }, {
            name: '阿里云',
            photo: '/photos/service/27.jpg',
            price: 5000,
          }, ]
        },
        {
          kind: '乐器',
          category: [{
            name: ''
          }]
        },
        {
          kind: '游戏',
          category: [{
            name: '网易',
            photo: '/photos/game/22.jpeg',
            price: 5000,
          }, {
            name: '腾讯',
            photo: '/photos/game/23.jpeg',
            price: 5000,
          }, {
            name: 'Unity',
            photo: '/photos/game/24.jpeg'
          }]
        }
      ]
    },{
      data: [{
          kind: '手机',
          category: [{
              name: 'P40',
              photo: '/photos/digital/12.jpg',
              price: 5000,
            },
            {
              name: '畅享10',
              photo: '/photos/digital/13.jpg',
              price: 5000,
            },
            {
              name: 'Mate30',
              photo: '/photos/digital/5.jpg',
              price: 5000,
            },
            {
              name: 'Iphone12',
              photo: '/photos/digital/6.jpg',
              price: 5000,
            },
            {
              name: 'Imi',
              photo: '/photos/digital/7.jpg',
              price: 5000,
            },
            {
              name: '电脑',
              photo: '/photos/digital/8.jpg'
            }
          ]
        },
        {
          kind: '电脑',
          category: [{
            name: '联想',
            photo: '/photos/makeup/14.png',
            price: 5000,
          }, {
            name: 'dell',
            photo: '/photos/makeup/15.png',
            price: 5000,
          }, ]
        },
        {
          kind: '手环',
          category: [{
            name: '1代',
            photo: '/photos/clothes/16.png',
            price: 5000,
          }, {
            name: '2代',
            photo: '/photos/clothes/17.png',
            price: 5000,
          }, {
            name: '3代',
            photo: '/photos/clothes/18.png',
            price: 5000,
          }, ]
        },
        {
          kind: '耳机',
          category: [{
            name: 'AirPod',
            photo: '/photos/sports/19.png',
            price: 5000,
          }, {
            name: 'IPod',
            photo: '/photos/sports/20.jpg',
            price: 5000,
          }, {
            name: '华为',
            photo: '/photos/sports/21.jpeg',
            price: 5000,
          }, ]
        },
        {
          kind: '芯片',
          category: [{
            name: '龙芯',
            photo: '/photos/wujin/y1.jpg',
            price: 5000,
          }, {
            name: '麒麟',
            photo: '/photos/wujin/y2.jpg',
            price: 5000,
          }, ]
        },
        {
          kind: '汽车',
          category: [{
            name: 'AI',
            photo: '/photos/car/25.jpeg  '
          }]
        },
        {
          kind: '云服务器',
          category: [{
            name: '华为云',
            photo: '/photos/service/26.jpg',
            price: 5000,
          }, {
            name: '阿里云',
            photo: '/photos/service/27.jpg',
            price: 5000,
          }, ]
        },
        {
          kind: '乐器',
          category: [{
            name: ''
          }]
        },
        {
          kind: '游戏',
          category: [{
            name: '网易',
            photo: '/photos/game/22.jpeg',
            price: 5000,
          }, {
            name: '腾讯',
            photo: '/photos/game/23.jpeg',
            price: 5000,
          }, {
            name: 'Unity',
            photo: '/photos/game/24.jpeg'
          }]
        }
      ]
    },{
      data: [{
          kind: '手机',
          category: [{
              name: 'P40',
              photo: '/photos/digital/12.jpg',
              price: 5000,
            },
            {
              name: '畅享10',
              photo: '/photos/digital/13.jpg',
              price: 5000,
            },
            {
              name: 'Mate30',
              photo: '/photos/digital/5.jpg',
              price: 5000,
            },
            {
              name: 'Iphone12',
              photo: '/photos/digital/6.jpg',
              price: 5000,
            },
            {
              name: 'Imi',
              photo: '/photos/digital/7.jpg',
              price: 5000,
            },
            {
              name: '电脑',
              photo: '/photos/digital/8.jpg'
            }
          ]
        },
        {
          kind: '电脑',
          category: [{
            name: '联想',
            photo: '/photos/makeup/14.png',
            price: 5000,
          }, {
            name: 'dell',
            photo: '/photos/makeup/15.png',
            price: 5000,
          }, ]
        },
        {
          kind: '手环',
          category: [{
            name: '1代',
            photo: '/photos/clothes/16.png',
            price: 5000,
          }, {
            name: '2代',
            photo: '/photos/clothes/17.png',
            price: 5000,
          }, {
            name: '3代',
            photo: '/photos/clothes/18.png',
            price: 5000,
          }, ]
        },
        {
          kind: '耳机',
          category: [{
            name: 'AirPod',
            photo: '/photos/sports/19.png',
            price: 5000,
          }, {
            name: 'IPod',
            photo: '/photos/sports/20.jpg',
            price: 5000,
          }, {
            name: '华为',
            photo: '/photos/sports/21.jpeg',
            price: 5000,
          }, ]
        },
        {
          kind: '芯片',
          category: [{
            name: '龙芯',
            photo: '/photos/wujin/y1.jpg',
            price: 5000,
          }, {
            name: '麒麟',
            photo: '/photos/wujin/y2.jpg',
            price: 5000,
          }, ]
        },
        {
          kind: '汽车',
          category: [{
            name: 'AI',
            photo: '/photos/car/25.jpeg  '
          }]
        },
        {
          kind: '云服务器',
          category: [{
            name: '华为云',
            photo: '/photos/service/26.jpg',
            price: 5000,
          }, {
            name: '阿里云',
            photo: '/photos/service/27.jpg',
            price: 5000,
          }, ]
        },
        {
          kind: '乐器',
          category: [{
            name: ''
          }]
        },
        {
          kind: '游戏',
          category: [{
            name: '网易',
            photo: '/photos/game/22.jpeg',
            price: 5000,
          }, {
            name: '腾讯',
            photo: '/photos/game/23.jpeg',
            price: 5000,
          }, {
            name: 'Unity',
            photo: '/photos/game/24.jpeg'
          }]
        }
      ]
    },{
      data: [{
          kind: '手机',
          category: [{
              name: 'P40',
              photo: '/photos/digital/12.jpg',
              price: 5000,
            },
            {
              name: '畅享10',
              photo: '/photos/digital/13.jpg',
              price: 5000,
            },
            {
              name: 'Mate30',
              photo: '/photos/digital/5.jpg',
              price: 5000,
            },
            {
              name: 'Iphone12',
              photo: '/photos/digital/6.jpg',
              price: 5000,
            },
            {
              name: 'Imi',
              photo: '/photos/digital/7.jpg',
              price: 5000,
            },
            {
              name: '电脑',
              photo: '/photos/digital/8.jpg'
            }
          ]
        },
        {
          kind: '电脑',
          category: [{
            name: '联想',
            photo: '/photos/makeup/14.png',
            price: 5000,
          }, {
            name: 'dell',
            photo: '/photos/makeup/15.png',
            price: 5000,
          }, ]
        },
        {
          kind: '手环',
          category: [{
            name: '1代',
            photo: '/photos/clothes/16.png',
            price: 5000,
          }, {
            name: '2代',
            photo: '/photos/clothes/17.png',
            price: 5000,
          }, {
            name: '3代',
            photo: '/photos/clothes/18.png',
            price: 5000,
          }, ]
        },
        {
          kind: '耳机',
          category: [{
            name: 'AirPod',
            photo: '/photos/sports/19.png',
            price: 5000,
          }, {
            name: 'IPod',
            photo: '/photos/sports/20.jpg',
            price: 5000,
          }, {
            name: '华为',
            photo: '/photos/sports/21.jpeg',
            price: 5000,
          }, ]
        },
        {
          kind: '芯片',
          category: [{
            name: '龙芯',
            photo: '/photos/wujin/y1.jpg',
            price: 5000,
          }, {
            name: '麒麟',
            photo: '/photos/wujin/y2.jpg',
            price: 5000,
          }, ]
        },
        {
          kind: '汽车',
          category: [{
            name: 'AI',
            photo: '/photos/car/25.jpeg  '
          }]
        },
        {
          kind: '云服务器',
          category: [{
            name: '华为云',
            photo: '/photos/service/26.jpg',
            price: 5000,
          }, {
            name: '阿里云',
            photo: '/photos/service/27.jpg',
            price: 5000,
          }, ]
        },
        {
          kind: '乐器',
          category: [{
            name: ''
          }]
        },
        {
          kind: '游戏',
          category: [{
            name: '网易',
            photo: '/photos/game/22.jpeg',
            price: 5000,
          }, {
            name: '腾讯',
            photo: '/photos/game/23.jpeg',
            price: 5000,
          }, {
            name: 'Unity',
            photo: '/photos/game/24.jpeg'
          }]
        }
      ]
    },{
      data: [{
          kind: '手机',
          category: [{
              name: 'P40',
              photo: '/photos/digital/12.jpg',
              price: 5000,
            },
            {
              name: '畅享10',
              photo: '/photos/digital/13.jpg',
              price: 5000,
            },
            {
              name: 'Mate30',
              photo: '/photos/digital/5.jpg',
              price: 5000,
            },
            {
              name: 'Iphone12',
              photo: '/photos/digital/6.jpg',
              price: 5000,
            },
            {
              name: 'Imi',
              photo: '/photos/digital/7.jpg',
              price: 5000,
            },
            {
              name: '电脑',
              photo: '/photos/digital/8.jpg'
            }
          ]
        },
        {
          kind: '电脑',
          category: [{
            name: '联想',
            photo: '/photos/makeup/14.png',
            price: 5000,
          }, {
            name: 'dell',
            photo: '/photos/makeup/15.png',
            price: 5000,
          }, ]
        },
        {
          kind: '手环',
          category: [{
            name: '1代',
            photo: '/photos/clothes/16.png',
            price: 5000,
          }, {
            name: '2代',
            photo: '/photos/clothes/17.png',
            price: 5000,
          }, {
            name: '3代',
            photo: '/photos/clothes/18.png',
            price: 5000,
          }, ]
        },
        {
          kind: '耳机',
          category: [{
            name: 'AirPod',
            photo: '/photos/sports/19.png',
            price: 5000,
          }, {
            name: 'IPod',
            photo: '/photos/sports/20.jpg',
            price: 5000,
          }, {
            name: '华为',
            photo: '/photos/sports/21.jpeg',
            price: 5000,
          }, ]
        },
        {
          kind: '芯片',
          category: [{
            name: '龙芯',
            photo: '/photos/wujin/y1.jpg',
            price: 5000,
          }, {
            name: '麒麟',
            photo: '/photos/wujin/y2.jpg',
            price: 5000,
          }, ]
        },
        {
          kind: '汽车',
          category: [{
            name: 'AI',
            photo: '/photos/car/25.jpeg  '
          }]
        },
        {
          kind: '云服务器',
          category: [{
            name: '华为云',
            photo: '/photos/service/26.jpg',
            price: 5000,
          }, {
            name: '阿里云',
            photo: '/photos/service/27.jpg',
            price: 5000,
          }, ]
        },
        {
          kind: '乐器',
          category: [{
            name: ''
          }]
        },
        {
          kind: '游戏',
          category: [{
            name: '网易',
            photo: '/photos/game/22.jpeg',
            price: 5000,
          }, {
            name: '腾讯',
            photo: '/photos/game/23.jpeg',
            price: 5000,
          }, {
            name: 'Unity',
            photo: '/photos/game/24.jpeg'
          }]
        }
      ]
    },]
    let vtabs =[];
    for(var i=0;i<type[this.data.shopindex].data.length;i++){
      vtabs.push(type[this.data.shopindex].data[i].kind)
    }
    this.setData({
      vtabs
    })
    let vtab = [];
    for(var i=0;i<type[this.data.shopindex].data.length;i++){
      vtab.push(type[this.data.shopindex].data[i].category)
    }
    this.setData({
      vtab
    })
    console.log(vtabs)
    const vtab2 = vtabs.map(item => ({
      title: item
    }))
    this.setData({
      vtab2
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
              console.log(that.data.position)
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