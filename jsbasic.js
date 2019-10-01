document.write( "<h3>JavaScript 기본 언어 스펙 연습<h3>");
document.write( "<hr>");

var box;
box = 100;
document.write( box, "<br>");
console.log( box );
document.write( "<hr>" );

var s = "Javascript"
var num = '100';
var tag = "<h3>JavaScript String</h3>"

document.write( s, "<br>");
document.write( num, "<br>");
document.write( tag, "<br>");
document.write( "<hr>");

var n = 100;
var t = Number( '500' );

document.write( n, "<br>");
document.write( t, "<br>");
document.write( "<hr>");

//논리형
var b = true;
var b2 = 10 >= 100;
var k = Boolean( "hello" );
var l = Boolean( 0 ); 
var m = Boolean( null ); // 0 , null, 아무문자도 없으면 false 그 이외에는 true

document.write( b, "<br>" );
document.write( b2, "<br>");
document.write( k, "<br>");
document.write( l, "<br>");
document.write( m, "<br>");
document.write( "<hr>" );

// null & undefined
var u;
var h = "hello";
h = null; // null과 undefined는 혼동금지 

document.write( u, "<br>"); // 변수를 선언했는데 아무값도 없으면 undefined 출력.
document.write( h, "<br>");
document.write( "<hr>");

//typeof 자료형을 파악할때 쓰는 코드
document.write( typeof s, "<br>");  //string 출력
document.write( typeof n, "<br>");  //number 출력
document.write( typeof b, "<br>");  //boolean 출력
document.write( typeof u, "<br>");  //undefined 출력
document.write( typeof h, "<br>");  //object 출력
document.write( "<hr>");

//문자열 결합 연산
var str = "<table border='1'>";
str += "<tr>";
str += "<td>1</td><td>2</td><td>3</td>";
str += "</tr>";
str += "</table>";

document.write( str, "<br>");
document.write( "<hr>");

//비교연산
var k = 10, m = "10"; // k 와 m의 데이터 타입이다르다. 

document.write( k == 10, "<br>");
document.write( m == 10, "<br>");
document.write( "<hr>" );

document.write( k === 10, "<br>");
document.write( m === 10, "<br>"); // 반드시 타입이 일치해야한다. 
document.write( "<hr>" );

// 입력
var number1 = prompt( " 정수1 입력 ", " 0 " );
var number2 = prompt( " 정수2 입력 ", " 0 ");
var sum = parseInt(number1) + parseInt(number2); //pareInt 형변환메소드 (문자열 -> 정수)

document.write( number1 + " + " + number2 + " = " + sum, " <br> ");
document.write( "<hr>" );

var select = confirm( " 회원을 탈퇴하시겠나요? "); // dialogue 형식( window 프로그램의 요소 중 하나)

if (select) {
    document.write( "탈퇴처리 되었습니다. ");
} else {
    document.write( "탈퇴 취소되었습니다. " );
}