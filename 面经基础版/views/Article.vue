<template>
  <div class="article-page">
    <!-- <div class="article-item" v-for="item in articles" :key="item.id" @click="$router.push(`/detail?id=${item.id}`)"> -->
      <div class="article-item" v-for="item in articles" :key="item.id" @click="$router.push(`/detail/${item}`)">
      <div class="head">
        <img :src="item.creatorAvatar" alt="" />
        <div class="con">
          <p class="title">{{item.stem}}</p>
          <p class="other">{{item.creatorName}} | {{item.createdAt}}</p>
        </div>
      </div>
      <div class="body">
         {{item.content}}
      </div>
      <div class="foot">点赞 {{item.likeCount}} | 浏览 {{item.views}}</div>
    </div>
  </div>
</template>

<script>
// 请求地址: https://mock.boxuegu.com/mock/3083/articles
// 请求方式: get
import axios from 'axios';

export default {
  name: 'ArticlePage',
  data () {
    return {
      articles: [
        {
          content: '虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数',
          createdAt: '2022-01-20',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '青春, 那么骚',
          difficulty: 1,
          id: '41156',
          likeCount: '44',
          likeFlag: 0,
          questionBankType: 'mj27483',
          stem: '百度前端面经',
          subjectName: '前端与移动开发',
          views: '315'
        },
        {
          content: '阿里巴巴前端面试注重算法和项目经验。1.手写快速排序算法 2.Vue和React的区别 3.如何优化前端性能 4.Webpack配置相关问题 5.跨域解决方案',
          createdAt: '2022-02-15',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '前端小王子',
          difficulty: 2,
          id: '41157',
          likeCount: '56',
          likeFlag: 1,
          questionBankType: 'mj27484',
          stem: '阿里前端面经',
          subjectName: '前端与移动开发',
          views: '420'
        },
        {
          content: '腾讯前端面试流程：1.自我介绍 2.CSS盒模型 3.响应式设计原理 4.JS原型链 5.手写Promise实现 6.前端安全防范措施',
          createdAt: '2022-03-10',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '代码猎人',
          difficulty: 3,
          id: '41158',
          likeCount: '78',
          likeFlag: 0,
          questionBankType: 'mj27485',
          stem: '腾讯前端面经',
          subjectName: '前端与移动开发',
          views: '512'
        },
        {
          content: '字节跳动前端面试：1.手写深拷贝 2.React Hooks使用场景 3.前端工程化理解 4.浏览器渲染原理 5.性能监控方案',
          createdAt: '2022-04-05',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '字节爱好者',
          difficulty: 2,
          id: '41159',
          likeCount: '62',
          likeFlag: 1,
          questionBankType: 'mj27486',
          stem: '字节前端面经',
          subjectName: '前端与移动开发',
          views: '480'
        },
        {
          content: '美团前端面试经历：1.CSS选择器优先级 2.事件循环机制 3.Vue双向绑定原理 4.Webpack loader和plugin区别 5.项目难点及解决方案',
          createdAt: '2022-05-12',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '美食前端',
          difficulty: 1,
          id: '41160',
          likeCount: '34',
          likeFlag: 0,
          questionBankType: 'mj27487',
          stem: '美团前端面经',
          subjectName: '前端与移动开发',
          views: '390'
        },
        {
          content: '京东前端面试题：1.手写防抖节流 2.HTTP缓存策略 3.CSS布局方式比较 4.TypeScript优势 5.前端监控系统设计',
          createdAt: '2022-06-18',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '京东小哥',
          difficulty: 2,
          id: '41161',
          likeCount: '45',
          likeFlag: 1,
          questionBankType: 'mj27488',
          stem: '京东前端面经',
          subjectName: '前端与移动开发',
          views: '430'
        },
        {
          content: '网易前端面试：1.CSS动画实现方式 2.JS继承方式比较 3.前端模块化发展历程 4.前端性能优化指标 5.项目架构设计思路',
          createdAt: '2022-07-22',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '云音乐粉',
          difficulty: 3,
          id: '41162',
          likeCount: '51',
          likeFlag: 0,
          questionBankType: 'mj27489',
          stem: '网易前端面经',
          subjectName: '前端与移动开发',
          views: '520'
        },
        {
          content: '拼多多前端面试：1.手写Promise.all 2.Vue3新特性 3.前端安全防护 4.Web Components应用 5.大文件上传方案',
          createdAt: '2022-08-30',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '拼购达人',
          difficulty: 2,
          id: '41163',
          likeCount: '39',
          likeFlag: 1,
          questionBankType: 'mj27490',
          stem: '拼多多前端面经',
          subjectName: '前端与移动开发',
          views: '410'
        },
        {
          content: '小米前端面试经历：1.CSS预处理器比较 2.React Fiber架构 3.前端微服务实践 4.可视化图表方案 5.前端自动化测试',
          createdAt: '2022-09-15',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '米粉工程师',
          difficulty: 3,
          id: '41164',
          likeCount: '47',
          likeFlag: 0,
          questionBankType: 'mj27491',
          stem: '小米前端面经',
          subjectName: '前端与移动开发',
          views: '490'
        },
        {
          content: '华为前端面试题：1.手写bind实现 2.CSS性能优化 3.前端CI/CD流程 4.PWA应用实践 5.前端国际化方案',
          createdAt: '2022-10-20',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '华为人',
          difficulty: 2,
          id: '41165',
          likeCount: '58',
          likeFlag: 1,
          questionBankType: 'mj27492',
          stem: '华为前端面经',
          subjectName: '前端与移动开发',
          views: '540'
        },
        {
          content: '滴滴前端面试：1.手写柯里化函数 2.CSS in JS方案 3.前端灰度发布 4.WebAssembly应用 5.前端异常监控',
          createdAt: '2022-11-25',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '出行专家',
          difficulty: 1,
          id: '41166',
          likeCount: '42',
          likeFlag: 0,
          questionBankType: 'mj27493',
          stem: '滴滴前端面经',
          subjectName: '前端与移动开发',
          views: '380'
        },
        {
          content: '快手前端面试经历：1.手写发布订阅模式 2.React性能优化 3.前端SSR实现 4.前端数据可视化 5.小程序开发经验',
          createdAt: '2022-12-10',
          creatorAvatar: 'http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png',
          creatorName: '短视频开发者',
          difficulty: 3,
          id: '41167',
          likeCount: '63',
          likeFlag: 1,
          questionBankType: 'mj27494',
          stem: '快手前端面经',
          subjectName: '前端与移动开发',
          views: '570'
        }
      ],
    }
  },
  async created(){
    const res = await axios.get('https://mock.boxuegu.com/mock/3084/articles')
    console.log(res);
    this.articles = res.data.result.rows
    console.log(this.articles);
  }
}
</script>

<style lang="less" scoped>
.article-page {
  background: #f5f5f5;
}
.article-item {
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 15px;
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 15px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-clamp:2;
    // -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>