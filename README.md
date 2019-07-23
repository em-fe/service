# B 端客服组件

> Vue.js 2.x B端的业务组件。

[![emservice](https://img.shields.io/npm/v/emservice.svg?style=flat-square)](https://www.npmjs.org/package/emservice)


## 安装

```
$ yarn add emservice
```

## B 端客服组件

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



## 需要的环境

- node.js >= 9.0.0
- npm >= 5.0.0

## 说明

本仓库是用脚手架 [fecli](https://github.com/fe6/fecli)，结合 [component-template](https://github.com/fe6/component-template) 模板生成的。
