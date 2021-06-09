# 大事件和node阶段晨读资料

## 1、盒子塌陷的原因？解决方式

```
原因: 1. 浮动导致的塌陷,浮动会脱落标准流
		 2. 嵌套的两个盒子,子盒子设置margin-top会导致父盒子一下下移
解决方法:第一种情况 1 清除浮动;  2 给父盒子加高度;  3 给父元素添加overflow:hidden
				第一种情况 1 给父元素加上边框; 2 给父元素添加overflow:hidden
```

## 2、不定宽高的div水平垂直居中

```
答: 1、父元素添加 position: relative
		div{
			position:absolute;
			top: 50%;
             left: 50%;
             transform: translate(-50%, -50%);
		}
	2、div {
	   display: flex;
       justify-content:center; //子元素水平居中
       align-items:center; //子元素垂直居中
	 }
      
    3、#box {
        width: 100px;
        height: 100px;
        position: relative;
    }

    #content {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
    }
```

## 3、css写一个三角形

```
答: div {
      width: 0;
      height: 0;
      border: 20px solid transparent;
      border-width: 40px 20px 0 0;
      border-right-color: #f99;
    }
```

## 4、css选择器的优先级

```
答: !important>行内样式>id选择器>类/属性/伪类选择器>伪元素/标签选择器>通配符选择器*
```

## 5、px、em和rem的区别

```
答: px是固定单位,  
    em是相对单位,相当于当前文字的大小,如果没有就找父元素
    rem也是相对单位,相对于html的fontsize的大小
```

## 6、什么是重绘和重排

```
答:
	重排: 当DOM元素影响了元素的几何属性（例如宽和高），浏览器需要重新计算元素的几何属性，同样其它元素的几何属性也会和位置也会因此受到影响。浏览器会使渲染树中受到影响的部分失效，并重新构造渲染树。这个过程称为“重排”。
	重绘: 完成重排后，浏览器会重新绘制受影响的部分到屏幕上中，该过程称为“重绘”。
	
	当我们改变DOM的大小，增加删除都会导致重排，当给DOM元素改变颜色的时候，会导致重绘，重排一定会重绘，重绘不会重排。重排会影响性能，所以我们尽快能的减少重排的操作
```

## 7、flex常用的容器属性

```
答:
1. flex-direction: 设置容器中的主轴方向
2. flex-wrap: 项目在主轴方向上是否换行显示
3. justify-content: 设置容器中的项目在主轴上的对齐方式
4. align-items: 单行项目在侧轴上的排列方式
5. align-content: 多行项目侧轴上的对齐方式
6. flex-flow: 是flex-direction和flex-wrap的合写, 默认值为row nowrap
```

## 8、如何设置比12px更小的字体

```
答:
   p {
    	font-size:12px;
			-webkit-transform:scale(0.8);
    	}
```

## 9、H5新增了那些特性

```
答: 
1. 语义化标签: header nav section article aside footer
2. 多媒体标签: video audio
3. 表单控件: number search email tel date file time  url
4. 本地离线存储 localStorage 长期存储数据,改变浏览器数据不会丢失
			  sessionStorage 浏览器关闭数据会丢失
5. 自定义属性 data-*
6. 画布 Canvas
7. 拖拽释放 (Drap and Drap) API ondrop
8. 新的技术文本 webworker
9. 地理位置 (Geolocation) API
```

## 10、C3新增了那些特性

```
答:
1. 圆角 border-radius
2. 盒子模型 box-sizing
3. 阴影 box-shadow 盒子阴影  text-shadow 文字阴影
4. 过渡 transition
5. 2D转换transform  translate(平移) scale(缩放)  skew(斜切) rotate(旋转) transform-origin 控制转换中心点
6. 3D转换 perspective(透视距)  transform-style(3D控件效果)
7. 渐变 linear-gradient radial-gradient
8. 弹性布局 flex
9. 媒体查询 @media screen and () {...}
10. 边框图片 border-image
11. 自定义动画 @keyframes    animation
12. 颜色 新增RGBA HSLA模式
13. 背景 background-size   background-origin   background-clip
```

## 11、js的数据类型有哪些

```
答: 简单数据类型: number string boolean undefined   null
	复制数据类型: object  function  array
```

## 12、typeof返回的数据类型

```
答: number string boolean undefined  object  function 
   特殊情况：
   typeof null -->object
   typeof array -->object
   typeof typeof 任何类型  -->string
```

## 13、返回false的情况有哪些

```
答: 0  ""   null  false  NaN  undefined  不成立的表达式
```

## 14、对this的理解

```
答: this是个关键字,它的指向和函数的调用方式有关
1. 函数调用模式, this指向window
2. 构造函数调用模式, this指向新创建的实例对象
3. 方法调用模式, this指向调用方法的对象
4. 上下文调用模式, call和apply方法中, this指向方法内的第一个参数
                  bind方法中, bind创建的新函数的this绑定为bind方法中新的函数
5. 在事件处理函数中,this指向触发事件的当前元素
6. 定时器中,this指向window
7. 箭头函数中没有this指向问题,它的this和外层作用域的this保持一致
8. 匿名函数中的this总是指向window
```

## 15、new操作符做了什么

```
答:  1. 创建一个新对象
	2. 函数内部的this指向这个对象
	3. 执行函数体
	4. 自动返回这个函数
```

## 16、什么是深拷贝什么是浅拷贝

```
答: 浅拷贝: 拷贝对象的一层属性,如果对象里面还有对象,拷贝的是地址, 两者之间修改会有影响,适用于对象里面属性的值是简单数据类型的.
    深拷贝: 拷贝对象的多层属性,如果对象里面还有对象,会继续拷贝,使用递归去实现.
```

## 17、如何实现深拷贝和浅拷贝

```js
答:
浅拷贝:
    var obj = {
      class: 'UI',
      age: 20,
      love: 'eat'
    }
    function getObj(obj) {
      var newObj = {}
      for (var k in obj) {
        newObj[k] = obj[k]
      }
      return newObj
    }
    var obj2 = getObj(obj)
    console.log(obj2)

深拷贝: 
		var obj = {
      class: '前端',
      age: 26,
      love: {
      friuts : 'apple',
      meat: 'beef'
      }
    }
		function getObj(obj) {
      var newObj = {}
      for (var k in obj) {
        /* if (typeof obj[k] == 'object') {
          newObj[k] = getObj(obj[k])
        } else {
          newObj[k] = obj[k]
        } */
        newObj[k] = typeof obj[k] == 'object' ? getObj(obj[k]) : obj[k]
      }
      return newObj
    }
    var obj2 = getObj(obj)
    console.log(obj2)
```

## 18、对闭包的理解？并能举出闭包的例子

```js
答: 闭包 函数和声明该函数的词法环境的组合(两个嵌套关系的函数,内部函数可以访问外部函数定义的变量)
    闭包的优点：1、形成私有空间，避免全局变量的污染
               2、持久化内存，保存数据
    闭包的缺点：1、持久化内存，导致内存泄露
    解决：1、尽快避免函数的嵌套，以及变量的引用
         2、执行完的变量，可以赋值null，让垃圾回收机制，进行回收释放内存（当不在引用的变量、对象，垃圾回收机制就会回收）
     垃圾回收机制：常见的浏览器垃圾回收算法: 引用计数 和 标记清除法
     			1）引用计数：如果没有任何变量指向它了，说明该对象已经不再需要了。缺点：循环引用
                2）标记清除法：在JS中就是全局出发定时扫描内存中的对象，无法触及的对象，就会背回收。
例: 点击li获取当前下标
    <ul>
      <li>111</li>
      <li>222</li>
      <li>333</li>
      <li>444</li>
      <li>555</li>
    </ul>
      var lis = document.querySelectorAll('li')
      for (var i = 0; i < lis.length; i++) {
        (function (j) {
          lis[j].onclick = function () {
            console.log(j)
          }
        })(i)
      }
```

## 19、什么是原型和原型链

```
答: 原型: 函数都有prototype属性,这个属性的值是个对象,称之为原型
   原型链: 对象都有__proto__属性,这个属性指向它的原型对象,原型对象也是对象,也有__proto__属性,指向原型对象的原型对象,这样一层一层形成的链式结构称为原型链.
```

## 20、call、apply和bind的区别

```js
答: 1. call和apply方法都可以调用函数,方法内的第一个参数可以修改this的指向
	2. call方法可以有多个参数,除了第一个参数,其他参数作为实参传递给函数
		 apply方法最多有2个参数,第二个参数是个数组或伪数组,数组里面的每一项作为实参传递给函数
	3. bind方法不能调用函数,它会创建一个副本函数,并且绑定新函数的this指向bind返回的新的函数
```

## 21、==和===的区别

```js
答：== 表示是相等，只比较内容
   === 表示是全等，不仅比较内容，也比较类型
```

## 22、es6-es10新增常用方法

```js
答: 
es6:
1、let、const
2、解构赋值  let { a, b } = { a: 1, b: 2 }
3、箭头函数
4、字符串模板
5、扩展运算符
6、数组方法：map、filter等等
7、类：class关键字
8、promise
9、函数参数默认值 fn(a = 1) {}
10、对象属性简写 let a = 1; let obj = {a}
11、模块化：import--引入、exprot default--导出

es7:
1、includes()方法，用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回true，否则返回false。

es8:
1、async/await

es9：
1、Promise.finally() 允许你指定最终的逻辑

es10:
1、数组Array的flat()和flatmap()
   flat:方法最基本的作用就是数组降维
      var arr1 = [1, 2, [3, 4]];
            arr1.flat(); 
            // [1, 2, 3, 4]

        var arr3 = [1, 2, [3, 4, [5, 6]]];
        arr3.flat(2);
        // [1, 2, 3, 4, 5, 6]

        //使用 Infinity 作为深度，展开任意深度的嵌套数组
        arr3.flat(Infinity); 
        // [1, 2, 3, 4, 5, 6]
   flatmap:方法首先使用映射函数映射(遍历)每个元素，然后将结果压缩成一个新数组
```

## 23、怎么理解函数的防抖和节流

```js
答:
1、定义：
防抖: 就是指触发事件后在n秒内函数只能执行一次，如果在n秒内又触发了事件，则会重新计算函数执行时间。
     例如：设定1000毫秒执行，当你触发事件了，他会1000毫秒后执行，但是在还剩500毫秒的时候你又触发了事件，那就会重新开始1000毫秒之后再执行

节流: 就是指连续触发事件但是在设定的一段时间内中只执行一次函数。
     例如：设定1000毫秒执行，那你在1000毫秒触发在多次，也只在1000毫秒后执行一次
     
2、防抖和节流的实现：
    <body>
    <input type="text" class="ipt" />
    <script>
      var timerId = null
      document.querySelector('.ipt').onkeyup = function () {
        // 防抖
        if (timerId !== null) {
          clearTimeout(timerId)
        }
        timerId = setTimeout(() => {
          console.log('我是防抖')
        }, 1000)
      }

      document.querySelector('.ipt').onkeyup = function () {
        // 节流
        console.log(2)
        if (timerId !== null) {
          return
        }

        timerId = setTimeout(() => {
          console.log('我是节流')
          timerId = null
        }, 1000)
      }

    </script>
  </body>
```

## 24、什么是事件流

```
答: 事件流是指事件传播的顺序,由事件捕获 => 目标事件 => 事件冒泡
```

## 25、如何阻止冒泡和默认行为

```js
答: 阻止冒泡和捕获  e.stopPropagation()
    阻止默认行为   e.preventDefault()   return false
    注意：addEventListener注册的事件，在高浏览器版本中，return false将没有效果，必须要用事件对象
```

## 26、原生注册事件的方式有哪些？区别是什么

```js
答: 注册方式
		  1. on + 事件名称
		  2. addEventListener
		区别: 
			1. 使用on注册事件,同一个元素只能注册一个同类型事件,否则会覆盖。
			2. addEventListener可以注册同一事件多次,不会被覆盖。
```

## 27、http和https的区别

```
答:
  1.https协议需要到CA申请证书，一般免费证书较少，因而需要一定费用。
  2.http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl/tls加密传输协议。
  3.http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。
  4.http的连接很简单，是无状态的；HTTPS协议是由SSL/TLS+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。
```

## 28、get 和post的区别

```
答: get
			1. 在url后面拼接参数,只能以文本的形式传递数据
			2. 传递的数据量小,4KB左右
			3. 安全性低, 会将数据显示在地址栏
			4. 速度快,通常用于安全性要求不高的请求
			5. 会缓存数据
	post
		    1. 安全性比较高
			2. 传递数据量大,请求对数据长度没有要求
			3. 请求不会被缓存,也不会保留在浏览器历史记录里
```

## 29、项目中遇到的状态码有哪些

```
答: 200  请求成功,  2开头的异步表示请求成功
		304  请求被允许,但请求内容没有改变, 3开头的一般请求完成
		400  请求格式错误,  4开头的一般表示请求错误
		404  请求的资源(网页)不存在,  
		500  内部服务器错误,  5开头的一般都是指服务器错误
```

## 30、jsonp的原理？以及优缺点

```
答: 原理: 利用script标签的src属性具有天然可跨域的特性，由服务端返回一个预先定义好的Javascript函数的调用，并且将服务器数据以该函数参数的形式响应给浏览器.
		优点: 完美解决在测试或者开发中获取不同域下的数据,用户传递一个callback参数给服务端，然后服务端返回数据时会将这个callback参数作为函数名来包裹住JSON数据，这样客户端就可以随意定制自己的函数来自动处理返回数据了。
		缺点：Jsonp只支持get请求而不支持post 请求,也即是说如果想传给后台一个json 格式的数据,此时问题就来了, 浏览器会报一个http状态码41错误,告诉你请求格式不正确.
```

## 31、什么是同源策略？怎么解决跨域问题

```
答: 同源策略: 同源策略是浏览器的一种安全策略, 所谓同源是指域名、协议、端口完全相同，不同源则跨域。
   解决跨域的方法: 
			1. 通过jsonp跨域
			2. 跨域资源共享（CORS  Access-Control-Allow-Origin: http://api.bob.com）
			3. nginx代理跨域
```

## 32、页面通信的方式有哪些

```
答: 1. 通过url拼接地址
	2. H5本地存储
```

## 33、null和undefined的区别

```js
答：null 表示空值 没有获取到。typeof null 返回"object"
   undefined 表示未定义，声明没有值。typeof undefined 返回"undefined"
```

## 34、Json字符串和json对象怎么相互转换

```
答: JSON对象转JSON字符串: json.stringify(对象)
    JSON字符串转JSON对象: json.parse(字符串)
```

## 35、怎么理解同步和异步

```js
	1、javascript是单线程。单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着。于是就有一个概念——任务队列。
	2、同步任务，顾名思义，就是立即执行的任务，同步任务一般会直接进入到主线程中执行；而异步任务，就是异步执行的任务，比如ajax网络请求，setTimeout 定时函数等都属于异步任务，异步任务会通过任务队列( Event Queue )的机制来进行协调。
```

## 36、localStorage、sessionStorage和cookie的区别

```
答: 共同点: 都是保存在浏览器端，且同源的。
	区别: 
	1. 请求不同: 
		cookie 数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。
				sessionStorage 和 localStorage不会自动把数据发给服务器，仅在本地保存。
	2. 存储大小限制也不同: 
		cookie 数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。
		sessionStorage 和 localStorage虽然也有存储大小的限制，但比cookie大得多，sessionStorage约5M、localStorage约5M 。
	3. 数据有效期不同: 
		 sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持； 
		 localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；
		 cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。 
	4. 作用域不同:
		sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；
		localStorage在所有同源窗口中都是共享的；
		cookie也是在所有同源窗口中都是共享的。
```

## 37、你对WebSocket了解哪些

```
答: WebSocket 是HTML5一种新的协议。它实现了浏览器与服务器全双工通信，能更好的节省服务器资源和带宽并达到实时通讯，它建立在TCP之上，同HTTP一样通过TCP来传输数据，但是它和HTTP最大不同是：
	1. WebSocket是一种双向通信协议，在建立连接后，WebSocket服务器和Browser/Client Agent都能主动的向对方发送或接收数据，就像Socket一样；
	2. WebSocket需要类似TCP的客户端和服务器端通过握手连接连接成功后才能相互通信。
```

## 38、js的运行机制是什么

```js
答：js是单线程执行的，页面加载时，会自上而下执行主线程上的同步任务，当主线程代码执行完毕时，才开始执行在任务队列中的异步任务。具体如下  
    1.所有同步任务都在主线程上执行，形成一个执行栈。
    2.主线程之外，还存在一个"任务队列(eventloop队列或者消息队列)"。只要异步任务有了运行结果，就在"任务队列"之中放置一个事件。
    3.一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。哪些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
    4.主线程不断重复上面的第三步。
```

## 39、怎么理解面向对象

```js
答：1、面向对象是一种软件开发的思想和面向过程是相对应的，就是把程序看作一个对象，将属性和方法封装其中，以提高代码的灵活性、复用性、可扩展性。
  2、面向对象有三大特性：封装、继承、多态。
       封装：把相关的信息（无论数据或方法）存储在对象中的能力
       继承：由另一个类（或多个类）得来类的属性和方法的能力
       多态：编写能以多种方法运行的函数或方法的能力
   3、js中对象是一个无序的数据集合或者也可以说是属性和方法的集合，可以动态的添加属性可方法。
   4、js是基于对象，但是也使用了嵌入了面向对象的思想，可以实现继承和封装，这样也可以提供代码的灵活性和复用性。
```

## 40、如何清除浏览器的缓存

```
答: 当我们请求的地址相同的时候，浏览器为了提高性能，会把相同地址的数据进行缓存。如果服务端的数据发生改变，客户端也不会更新，那就需要清除缓存
    解决：在url后面加时间戳
    例如：https://www.baidu.com?time=New Date()
```

## 41、token的作用是什么

```
答: token是服务端生成的“令牌”，来标识不同身份的
    1. 防止表单重复提交
    2.判断用户是否登录
```

## 42、列举echarts常用的配置项，说明含义

```
答:      图表标题 title
		图例  legend
		值域 dataRange
		提示框 tooltip
		区域缩放控制器 dataZoom
		网格 grid
		类目轴 categoryAxis
		值型坐标轴默认参数 valueAxis
		柱形图默认参数 bar
		折线图默认参数 line
		散点图默认参数 scatter
		饼图默认参数 pie
		默认标志图形类型列表 symbolList
		可计算特性配置, 孤岛, 提示颜色 calculable
```

## 43、git如何管理一个项目

```

答: 1、git init初始化git仓库（新项目才有这一步）
    2、git clone将远程仓库的项目资料下载下来
    3、git checkout -b dev (dev 为本地分支名）
    4、git add .将工作区文件存在暂存区
    4、git commit -m  ""从暂存区存到仓储区
    5、git checkout master切到master分支
    6、git merge dev 合并分支,合并后要将分支删除
    7、使用git push将其上传到远程仓库
    8、第二上班，先pull一下，更新最新代码
```

## 44、介绍一下你们公司的开发流程（自己理解，形成自己的东西）

```
答: （这是最基础的流程，自己理解，形成自己的东西）
    1、项目确定下来后
    2、先分配确定开发人员,然后产品会召集相关开发人员一起开一个项目分析会
    3、接着就项目立项了,项目立项会形成一个prd,确定开发周期
    4、然后就进入开发阶段了,在开发一段时间会进行前后端联调
    5、功能完成后会先进行冒烟测试,检查是否有阻塞缺陷
    6、开发全部结束就进入测试阶段
    7、测试通过就可以上线了,上线之后会有一个回归测试，检查有没有影响以前的功能，保证全流程没有问题
```

## 45、在地址栏输入网址，到数据返回的过程是什么？

```js
答:  1. 输入url地址后，首先进行DNS解析，将相应的域名解析为IP地址。
     2. 根据IP地址去寻找相应的服务器。
     3. 与服务器进行TCP的三次握手，建立连接。
     4. 客户端发送请求，找到相应的资源库。
     5. 客户端拿到数据，进行相应的渲染。
```

## 46、原生 ajax 请求的步骤

```js
答：1.创建异步对象 var xhr = new HTMLHttpRequest()
    2.设置请求行  xhr.open()
    3.设置请求头  xhr.setRequestHeader()   get请求没有请求头
    4.设置请求体  xhr.send      get请求没有请求体,参数为null
    5.监视异步对象的状态变化   xhr.onreadystatechange(){}
```

## 47、伪数组和真数组的区别

```js
伪数组：
1、拥有length属性
2、不具有数组的方法
3、伪数组是一个Object，真数组是Array
4、伪数组的长度不可变，真数组的长度是可变的
```

## 48、那些情况会得到伪数组

```js
1、参数 arguments，
2、DOM 对象列表（比如通过 document.getElementsByTags 得到的列表）、childNodes也是伪数组
3、jQuery 对象（比如 $("div")）
```

## 49、伪数组怎么转换为真数组

```js
1、let newArr = Array.protype.slice.call(伪数组)
2、let newArr = Array.from(伪数组),ES6的新语法
3、let newArr = [...伪数组]，使用扩展运算符,也是ES6的语法
```

## 50、let、const、var的区别

```js
1、var声明变量存在提升（提升当前作用域最顶端），let和const是不存在变量提升的情况
2、var没有块级作用，let和const存在块级作用域
3、var允许重复声明，let和const在同一作用域不允许重复声明
4、var和let声明变量可以修改，const是常量不能改变
```

## 51、异步函数有哪些

```js
JavaScript 中常见的异步函数有：定时器，事件和 ajax 等
```

## 52、什么是promise，特点是什么

```js
	首先，它是一个对象，也就是说与其他JavaScript对象的用法，没有什么两样；它使得异步操作具备同步操作的效果，使得程序具备正常的同步运行的流程，回调函数不必再一层层嵌套。
	简单说，它的思想是，每一个异步任务立刻返回一个Promise对象，由于是立刻返回，所以可以采用同步操作的流程。这个Promises对象有一个then方法，允许指定回调函数，在异步任务完成后调用。
    
 特点：
    1、Promise对象只有三种状态。
        异步操作“未完成”（pending）
        异步操作“已完成”（resolved，又称fulfilled）
        异步操作“失败”（rejected）
        异步操作成功，Promise对象传回一个值，状态变为resolved。
        异步操作失败，Promise对象抛出一个错误，状态变为rejected。
    2、promise的回调是同步的，then是异步的
    3、可以链式调用
```

## 53、promise的方法有哪些，能说明其作用

```js
原型上的方法：
1、Promise.prototype.then()
	1）作用是为 Promise 实例添加状态改变时的回调函数。接受两个回调函数作为参数。第一个回调函数是Promise对象的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。其中，第二个函数是可选的，不一定要提供。
    2）返回的是另一个Promise对象，后面还可以接着调用then方法。
2、Promise.prototype.catch()
	1）用于指定发生错误时的回调函数。
    2）返回的也是一个 Promise 对象，因此还可以接着调用then方法
3、Promise.prototype.finally()
	1）finally方法用于指定不管 Promise 对象最后状态如何，都会执行的回调函数。
    2）finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。

自身API:
1、Promise.resolve()
	1）不带参数传递 — 返回一个新的状态为resolve的promise对象
    2）参数是一个 Promise 实例— 返回 当前的promise实例
2、Promise.reject()
	1)返回的是一个值
    2）返回的值会传递到下一个then的resolve方法参数中
3、Promise.all() 
	1）并行执行异步操作的能力
    2）所有异步操作执行完后才执行回调
4、Promise.race()
	1）那个结果返回来的快就是，那个结果，不管结果是成功还是失败
```

## 54、async和await是干什么的

```js
1、async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。
2、await 只能出现在 async 函数中。
3、async 函数返回的是一个 Promise 对象，后面可以用then方法。
```

##55、怎么理解三次握手

```js
字段	      含义
URG	   紧急指针是否有效。为1，表示某一位需要被优先处理
ACK	   确认号是否有效，一般置为1。
PSH	   提示接收端应用程序立即从TCP缓冲区把数据读走。
RST	   对方要求重新建立连接，复位。
SYN	   请求建立连接，并在其序列号的字段进行序列号的初始值设定。建立连接，设置为1
FIN    希望断开连接。

1、三次握手
    第一次握手：建立连接时，客户端发送syn包到服务器，等待服务器确认。
    第二次握手：服务器收到syn包，必须确认客户的SYN，同时自己也发送一个SYN包（syn=y）到客户端
    第三次握手：客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK，此包发送完毕，客户端和服务器进入（TCP连接成功）状态，完成三次握手
   （通俗：主机1告诉主机2，我可以向你请求数据吗。主机2告诉主机1，可以请求数据。主机1告诉主机2，那我来请求数据了，请求完成，实现三次握手）

```

##56、怎么理解四次挥手

```js
1、四次挥手
    第一次分手：主机1（可以使客户端，也可以是服务器端）向主机2发送一个FIN报文段；此时，主机1进入FIN_WAIT_1状态；这表示主机1没有数据要发送给主机2了。
    第二次分手：主机2收到了主机1发送的FIN报文段，向主机1回一个ACK报文段，主机1进入FIN_WAIT_2状态；主机2告诉主机1，我“同意”你的关闭请求。
    第三次分手：主机2向主机1发送FIN报文段，请求关闭连接，同时主机2进入LAST_ACK状态。
    第四次分手：主机1收到主机2发送的FIN报文段，向主机2发送ACK报文段，然后主机1进入TIME_WAIT状态；主机2收到主机1的ACK报文段以后，就关闭连接；此时，主机1等待2MSL后依然没有收到回复，则证明Server端已正常关闭，那好，主机1也可以关闭连接了。
    （通俗：主机1告诉主机2，我没有数据要发送了，希望断开连接。主机2接到请求后说，同意断开。主机2告诉主机1可以关闭连接了。主机1接到可以关闭的指令后，关闭连接，四次挥手完成）
```

##57、数组如何进行降维（扁平化）

```js
1、利用Array.some方法判断数组中是否还存在数组，es6展开运算符连接数组
       let arr = [1,2,[3,4]]
        while (arr.some(item => Array.isArray(item))) {
            arr = [].concat(...arr);
        }
2、使用数组的concat方法
　   let arr = [1,2,[3,4]]
     let result = []
     result = Array.prototype.concat.apply([], arr)

3、 使用数组的concat方法和扩展运算符
    var arr = [1,2,[3,4]]
    var result = []
    result = [].concat(...arr)
        
4、es6中的flat函数也可以实现数组的扁平化
    let arr = [1,2,['a','b',['中','文',[1,2,3,[11,21,31]]]],3];
    let result = arr.flat( Infinity )
    注意：flat方法的infinity属性，可以实现多层数组的降维
```

## 58、怎么理解事件循环机制

```js
	1、JavaScript 是一门单线程语言.单线程可能会出现阻塞的情况，所js分了同步任务和异步任务。
    2、同步和异步任务分别进入不同的执行环境，同步的进入主线程，即主执行栈，异步的进入 Event Queue（事件队列） 。主线程内的任务执行完毕为空，会去 Event Queue 读取对应的任务，推入主线程执行。 上述过程的不断重复就是我们说的 Event Loop (事件循环)。
```

##59、什么是作用域链

```js
	1、作用域：分全局作用域和局部作用域
    2、在访问一个变量时，首先在当前作用域中找，如果找不到再到外层作用域中找，这样一层一层的查找，就形成了作用域链。
    3、如果没有找到会返回undefined
```

##60、for in 和 for of 的区别

```js
1、for…in是遍历数组、对象的key
2、for…of是遍历数组的value
例如：
let arr = ["a","b"];
1）for (let key in arr) {
console.log(key);  //0 1
}
2）for (let value of arr) {
console.log(value);  //a b
}
```

## 61、数组去重的方式

```js
1、第一种方式：利用indexof方法
  let arr = [2, 8, 5, 0, 5, 2, 6, 7, 2]
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
     if (newArr.indexOf(arr[i]) === -1) {
       newArr.push(arr[i])
     }
  }

2、第二种方式：sort()方法
   let arr = [2, 8, 5, 0, 5, 2, 6, 7, 2]
   arr.sort()
   let newArr = [arr[0]]
   for (let i = 1; i < arr.length; i++) {
     if (arr[i] !== newArr[newArr.length - 1]) {
       newArr.push(arr[i])
     }
   }
3、第三种方式：两层for循环
    let arr = [2, 8, 5, 0, 5, 2, 6, 7, 2, 8]
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          i++
          j = i
        }
      }
     newArr.push(arr[i])
  }
4、第四种方式：利用ES6 Set去重
 let arr = [2, 8, 5, 0, 5, 2, 6, 7, 2, 8]
 let newArr = new Set(arr)
```

















