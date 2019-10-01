function calc() {
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var z = document.getElementById("z").value;
    var sum;
    var avg;
    var score
    sum = parseInt(x) + parseInt(y) + parseInt(z);
    document.getElementById("sum").value = sum;
    avg = sum / 3 ;
    document.getElementById("avg").value = avg;
    
}

document.write("<h4>성적 일람표(입력순)<h4>");
document.write("<table border=1">);
<tr>
    <td>이름</td><td>과목1</td><td>과목2</td><td>과목3</td><td>총점</td><td>평균</td>
</tr>
document.write("</table>");

document.write("<h4>성적 일람표(평균순)<h4>");
