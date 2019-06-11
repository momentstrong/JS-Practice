//GO = window = 全局对象
console.log(a)  //functiona(){	 var a = 'a';}
// a = 'test';

function a(){
	console.log(b)
	a = 'a'; // 暗示全局变量
	function b (){

	}
}
a();    //Uncaught TypeError: a is not a function



/* 
js 执行前会进行预编译
   全局编译GO(Global Object) 
	1.创建GO对象,给属性赋值undefined GO{a:undefined}
	1.提升变量 GO{a:'test'}
	2.提升函数 GO{a:function a(a = 'a'){}}	
   函数预编译AO (Activation Object)
   	1.创建AO对象，AO{}
   	2.将函数内的形参和变量声明存储到AO对象中，值为undefined
   	3.将实参和形参统一
   	4.将函数内的函数申明的名称作为AO对象的key，函数的整体内容为value 存储到AO对象 AO{b:function b(){}}

输出 ：
function a(){
	console.log(b)
	a = 'a'; 
	function b (){

	}
}
function b(){

}
*/