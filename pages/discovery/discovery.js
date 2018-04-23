Page({
  data:{
    navTab: ["推荐", "圆桌", "热门", "收藏"],
    currentNavtab: "0",

  },

   switchTab: function (e) {
    this.setData({
      currentNavtab: e.currentTarget.dataset.idx
    });
  },
});