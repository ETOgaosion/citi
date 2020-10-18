const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wxlogin: true,
    hideShopPopup: true,
    goodid: 0,
    goodname: '',
    goodimg: '',
    goodprice: 0,
    collected: 0,
    buyNumber:0,
    buyNumMin: 1,
    propertyChildIds: "",
    propertyChildNames: "",
    canSubmit: false, //  选中规格尺寸时候是否允许加入购物车
    shopType: "addShopCar",
    goodsDetail: [{
        name: 'color',
        value: [{
            num: '蓝色',
            active: 0,
          },
          {
            num: '红色',
            active: 0,
          }
        ]
      },
      {
        name: 'config',
        value: [{
            num: '3090',
            active: 0,
          },
          {
            num: '4090',
            active: 0,
          }
        ]
      },
    ],
    //重定向后显示
    username: app.username,
    position: app.position,
  },

  bindGuiGeTap: function () {
    this.setData({

      hideShopPopup: false,
    })
  },

  closePopupTap: function () {
    this.setData({
      hideShopPopup: true
    })
  },
  labelItemTap:function(e) {
    console.log(e);
    const a=e.currentTarget.dataset.propertyindex;
    const b=e.currentTarget.dataset.propertychildindex;
    for(var i=0;i<this.data.goodsDetail[a].value.length;i++){
      this.data.goodsDetail[a].value[i].active=0;
    }
    this.data.goodsDetail[a].value[b].active=1;
    this.setData({
      goodsDetail:this.data.goodsDetail,
    })
    console.log(this.data.goodsDetail);
  },

  
  minusTap: function() {
    if (this.data.buyNumber >= this.data.buyNumMin) {
      var currentNum = this.data.buyNumber;
      currentNum--;
      this.setData({
        buyNumber: currentNum
      })
    }
  },
  plusTap: function() {
      var currentNum = this.data.buyNumber;
      currentNum++;
      this.setData({
        buyNumber: currentNum
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      goodid: options.id,
      goodname: options.goodname,
      goodimg: options.goodimg,
      goodprice: options.goodprice,
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