# JavaScript基础 #

## 1.JavaScript规定了几种语言类型 ##

1. 基本数据类型
    - Number
    - String
    - Boolean
    - Undefined
    - Null

2. 复杂数据类型
    - Object
    - Function
    - Symbol

3. 验证数据类型之`typeof`字符中比较特殊的情况  
    ![typeof](./image/typeof.png)

4. 判断常用if()中的值会自动调用Boolean()方法，所以会有以下经常判断的方法(`非常重要`)：  

数据类型|转化为true的值|转化为false的值
-|:-:|:-:
Boolean|true|false
String|任何非空字符串|“”(空字符串)
Number|任何非0数字(包括无穷大)|0和NaN
object|任何对象(包括数组等)|null
Undefined|N/A(not applicable不适用)|undefined

5. 最稳定的验证数据类型的方法，利用原型来验证
```
function(value){
  return Object.prototype.toString.call(value).slice(8, -1)
}
// return 'String', 'Null', 'Object'等
```

6. 最新的数据类型之Symbol  
> 表示独一无二的值，它是一切非字符串的对象key的集合。 Symbol 值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。 Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，但是即使描述相同，Symbol值也不相等。
```
 var a = Symbol('1');
 var b = Symbol('2');
 a === b; // false
```
 

