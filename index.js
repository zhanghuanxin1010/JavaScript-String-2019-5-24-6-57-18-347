﻿// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
name=name.toUpperCase();
console.log(name);
// TODO write your code here...


// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
var arr=sentence.split('');
console.log(sentence);
for(var i=0;i>arr.length;i++)
{
  arr[i]=arr[i].charAT(0).toUpperCase()+arr[i].slice(1);
}
console.log(arr.join(''));


//TODO write your code here...


// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
var ss=money.substring(1);
console.log(ss);

//TODO write your code here...
