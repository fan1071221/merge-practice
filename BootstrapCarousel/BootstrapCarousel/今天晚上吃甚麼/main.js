/*window.onload=function()
{
    //this.document.write("Hello JavaScript!");
};*/
$(document).ready(function() {
    $("input").click(function(){
        //alert("Hi");//銀幕
        //$("H1").text("Hello");//按下去跑出Hello
        //$("H1").text($("li:first").text());//拉麵
        //$("H1").text($("li:last").text())//水餃
        //$("H1").text($("li").eq(1).text());//滷肉飯
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());
        $("#random-pic").attr("src",pictures[randomChildNumber]);
    }); 
});