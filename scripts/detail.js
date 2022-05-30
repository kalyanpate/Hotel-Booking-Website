



function MultiplyBy(){
    var n1= document.getElementById("number").value;
    var d1= document.getElementById("d1").value;
    var d2= document.getElementById("d2").value;

    var date1=new Date(d1);
    var date2 =new Date(d2);

    var time=Math.abs(date2-date1);
    var days=Math.abs(time/(1000*60*60*24));

    var total=n1*days*1000;

    document.getElementById("result").innerHTML="Rs."+total;
}