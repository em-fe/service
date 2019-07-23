# B 端客服组件
> 基于Vue.js 的 前端业务组件。

## B 端客服组件
> 需要在 index.html 中引入 ***客服 script***


<Service :datas="datas" :helpStatus="helpStatus" :telStatus="telStatus" :serviceStatus="serviceStatus" />

```` html
<Service :datas="datas" :helpStatus="helpStatus" :telStatus="telStatus" :serviceStatus="serviceStatus" />
````

## 客服 script

``` html
<script type="text/javascript" src="https://ykf-webchat.7moor.com/javascripts/7moorInit.js?accessId=89424c60-940d-11e9-b35d-ef6292b91e05&autoShow=false&language=ZHCN" async="async"></script>
```

## API

|参数|说明|类型|是否必填|默认值|
|---|----|---|-------|-----|
|fieldNames|问题字段的定制|Object|否|{link_desc: \'link_desc\',link: \'link\'}
|datas|问题的数据|Array|否|[]|
|target|内容链接的跳转方式|String|否|_blank|
|helpStatus|第1个是否显示|Boolean|否|无|
|telStatus|第2个是否显示|Boolean|否|无|
|serviceStatus|第3个是否显示|Boolean|否|无|

<script>
import Service from './Service';

export default {
  data() {
    return {
     serviceStatus: true,
     telStatus: true,
     helpStatus: true,
     datas: [
        {
          link: 'https://www.evente.cn ',
          link_desc: '则会就是则会就是则会就是则会就是',
        },
        {
          link: 'https://www.evente.cn',
          link_desc: "ddidg",
        },
        {
          link: 'https://www.evente.cn',
          link_desc: "ddidg",
        },
        {
          link: 'https://www.evente.cn',
          link_desc: "ddidg",
        },
        {
          link: 'https://www.evente.cn',
          link_desc: "ddidg",
        },
      ],
    };
  },
  beforeCreate() {
    const script = document.createElement('script');
    script.src = 'https://ykf-webchat.7moor.com/javascripts/7moorInit.js?accessId=89424c60-940d-11e9-b35d-ef6292b91e05&autoShow=false&language=ZHCN';
    document.head.appendChild(script);
  },
  components: {
    Service,
  },
}
</script>
<style lang="scss" scope>
@import './assets/style/service.scss';
</style>
