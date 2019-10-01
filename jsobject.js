//내장 객체 생성 ( 사용자 정의 )
var tv = new Object(); // JS의 최상위 객체
tv.color = "white";
tv.price = 30000;
tv.info = function() {      //임명함수
    document.write( "tv color : " + this.color, "<br>");
    document.write( "tv color : " + this.price, "<br>");
} // 

var car = {
    color: "black",
    price: 50000,
    info: function() {
        document.write( "car color : " + this.color, "<br>");
        document.write( "car color : " + this.color, "<br>");

}
};   //;이 붙으면 하나의 문장이다. (car라는 변수를 초기화하는)
document.write( "<h3>tv object call method</h3>");
tv.info();
document.write( "<hr>");
document.write( "<h3>car object call method</h3>");
car.info();
document.write( "<hr>");

console.log( tv );
console.log( car );

// 내장 객체 활용( 라이브러리 )
var today = new Date( 2019, 10, 1 );    //new Date();
var nowMonth = today.getMonth();
var nowDate = today.getDate();
var nowDay = today.getDay();

document.write( "<h3>날짜정보</h3>");
document.write( "월   : " + nowMonth, "<br>");
document.write( "일  : " + nowDate, "<br>");
document.write( "요일   : " + nowDay, "<br>");
document.write( "<hr>");

//수학객체
var num = 2.1234;
var maxNum = Math.max( 10, 5, 8, 30);
var minNum = Math.min( 10, 5, 8, 30);
var roundNum = Math.round( num );
var floorNUm = Math.floor( num );
var rndNum = Math.random();

document.write( "maxNum : " + maxNum, "<br>");
document.write( "minNum  : " + minNum, "<br>");
document.write( "roundNumm : " + roundNum, "<br>");
document.write( "floorNUm: " + floorNUm, "<br>");
document.write( "rndNum : " + rndNum, "<br>");
document.write( "<hr>");

document.write( Math.floor( Math.random() * 11));
document.write( "<hr>" );

// 배열객체
var arr = [ 30, "JavaScript", true ];
console.log( arr );

document.write( "<h3> 배열 내용 <h3> ");
document.write( "arr[ 0 ] = " + arr[ 0 ], "<br>");
document.write( "arr[ 1 ] = " + arr[ 0 ], "<br>");
document.write( "arr[ 2 ] = " + arr[ 0 ], "<br>");
document.write( "<hr>");

for ( var i = 0; i < arr.length; ++i ) {
    document.write( "arr[ " + i + "] = " + arr[i], "<br>");
}
document.write( "<hr>" );

i = 0;
for ( var index in arr) {
    document.write( "arr[" + i++ + "] =" + arr[ index ], "<br>");
}
document.write( "<hr>" );

//Array 객체 메서드
var arr1 = [ "사당", "교대", "방배", "강남"];
var arr2 = [ "신사", "압구정", "옥수"];
var result = arr1.join( "-" );
console.log( result );

result = arr1.concat( arr2 ); //합체 , arr1 과 arr2
console.log( result );

result = arr1.slice( 1,3 );
console.log( result );

arr1.sort();
console.log( arr1 );

arr2.reverse();
console.log( arr2 );

var greenArr = [ "교대", "방배", "강남"];
var yellowArr = [ "미금", "정자", "수서"];
console.log( greenArr );
console.log( yellowArr );

greenArr.splice( 2, 1, "서초", "역삼");
console.log( greenArr );

var data1 = yellowArr.pop();
var data2 = yellowArr.shift();
console.log( data1 );
console.log( data2 );

yellowArr.push( data2 );
console.log( yellowArr );

yellowArr.unshift( data1 );
console.log( yellowArr );

//String 객체
var str = new String("Hello thank you good luck to you");
var str2 = "Hello Thank you good luck to you";
console.log( str );
console.log( str2 );

document.write( str.charAt( 16 ), "<br>"); // 특정 문자의 위치
document.write( str2.charAt( 3 ), "<br>");
document.write( "<hr>");

document.write( str.match( "luck" ), "<br>"); // indexof와의 차이 : 못찾으면 match 는 null을 출력, indexof는 -1 출력
document.write( str.search( "you" ), "<br>");
document.write( str.substr( 21,4 ), "<br>");
document.write( str.substring( 6, 12), "<br>");
document.write( str.replace( "you", "me"), "<br>");
document.write( "<hr>" );

/*
var email = prompt( "이메일 주소를 입력하세요.", "");
var arrUrl = [ ".co.kr", ".com", ".net", ".or.kr", ".go.kr"];
var check1 = false;
var check2 = false;

if( email.indexOf( "@" ) > 0 );{
    check1 = true;
}
for ( var i =0; i < arrUrl.length; ++i) {
    if (email.indexOf( arrUrl[ i ]) > 0 ){
        check2 = true;
    }
}    
if ( check1 && check2 ) {
    document.write( email );
} else {
    document.write( "e-mail 형식이 잘못되었습니다.", "<br>");
}
document.write( "<hr>" );
*/
//함수객체
var number1 = 10;
var number2 = 20;

document.write( "sum() ->" + sum( number1,number2) );
//document.write( "sum2() ->" + sum2( number1,number2) );  -> Error : 함수정의가 되지않았기때문.


// 일반함수 (function 다음에 이름이 있다.)
function sum( number1, number2 ) {
    return number1 + number2;
}

// 익명함수 (funtion 다음에 이름이 없다. )
var sum2 = function( number1, number2 ) {
    return number1 + number2;
}

document.write( "sum2() ->" + sum2( number1,number2), "<br>" );

console.log( sum(number1, number2) );
console.log( sum2 );

function totals() {
    var total = 0;
    for ( var i = 0; i < arguments.length; ++i ) {
        total += arguments[ i ];
    }
    return total;
}

document.write( totals( 10, 20, 30), "<br>");
document.write( "<hr>");

(
    function() {
    document.write( "자동 실행 함수", "<br>");
    document.write( "<hr>" );
}()
); // 함수는 있는데 호출이 없다. "자동실행 함수" (익명함수 형식)