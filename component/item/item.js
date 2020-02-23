const { requestPromise, getLabel } = require('../../utils/util.js');
Component({
  properties: {
    question: {
      type: String,
      value: ``
    },
    aid: {
      type: Number,
      value: 0
    },
    label: {
      type: String,
      value: ``
    }
  },
  data: {
    // 这里是一些组件内部数据
  },
  methods: {
    showContent() {
      wx.navigateTo({
        url: `../content/content?id=${this.data.aid}&title=${this.properties.question}`
      })
    }
  },
  attached : function() {
  }
})