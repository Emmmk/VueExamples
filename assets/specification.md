# 示例

## 一、Vue.js指令

1 . 数据绑定--“Mustache”语法 (双大括号)

数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值，
Mustache 标签将会被替代为对应数据对象上 msg 属性的值。无论何时，绑定的数据对象上 msg 属性发生了改变，插值处的内容都会更新。

```html  
    <span>Message: {{ msg }}</span>
```

通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定：

```html
    <span v-once>这个将不会改变: {{ msg }}</span>
```

### 使用JavaScript表达式

对于所有的数据绑定，Vue.js提供了完全的JavaScript表达式支持

```html
    {{ number + 1 }}

    {{ ok ? 'YES' : 'NO' }}

    {{ message.split('').reverse().join('') }}

    <div v-bind:id="'list-' + id"></div>
```

需要注意的是，每个绑定都只能包含 <font color=#FF0033>单个表达式</font>,下面的例子就不会生效

```html
    <!-- 这是语句，不是表达式 -->
    {{ var a = 1 }}

    <!-- 流控制也不会生效，请使用三元表达式 -->
    {{ if (ok) { return message } }}
```

2 . v-html 指令  

双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 v-html 指令：

```html
    <p>“Mustache”语法：{{txthtml}}</p>
    <p>v-html指令：<span v-html="txthtml"></span></p>

     <script type="text/javascript">
        var vue = new Vue({
            el:'#app',
            data:{
                txthtml:'<span style="color:red;">v-html显示</span>'
            }
        });
    </script>

```

![Alt text](/assets/imgMD/v-html.png "optional title")

span中的内容将会被替换为替换为属性值<font color=#FF0000>txthtml</font>，直接作为html（会忽略其中的数据绑定）

> <font size=4 color=#42b983> 注意！你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 XSS 攻击。请只对可信内容使用 HTML 插值，绝不要对用户提供的内容使用插值 </font>

3 . v-if 指令

v-if 指令将根据表达式 isLogin 的值的真假来插入/移除对应的元素。

```html
 <div id="app">
        <div v-if="isLogin">你好，陈彦森！</div>
        <div v-else>你好，请登录！</div>
    </div>
    <script type="text/javascript">
        var app1 = new Vue({
            el: "#app",
            data: {
                isLogin: true,
            }
        });
    </script>
```

4 . v-text && v-html

对比“Mustache”语法 (双大括号)来说，使用v-text标签更友好，可以避免在js丢失时或者因网速慢没有及时加载出来时，直接在页面显示{{....}}的问题

```html

    <div id="app">
        <!--使用v-text标签更友好，当js丢失或者因网速慢没有及时加载出来时，直接在页面显示{{....}}的问题-->
        <span>{{message}}</span> = <span v-text="message"></span> <br/>
        <!-- 需要注意的是：在生产环境中动态渲染HTML是非常危险的，因为容易导致XSS攻击。所以只能在可信的内容上使用v-html，永远不要在用户提交和可操作的网页上使用-->
        <span v-html="todo"></span>
    </div>
    <script type="text/javascript">
        var vue = new Vue({
            el:'#app',
            data:{
                message:'Hello World!!!!!',
                todo:'<h2>Hello World!</h2>',
            }
        });
    </script>

```