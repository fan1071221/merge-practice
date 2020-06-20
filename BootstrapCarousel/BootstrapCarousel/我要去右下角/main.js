let mapArray,ctx,currentImgMainX,currentImgMainY;
let imgMountain,imgMain,imgEnemy;

$(document).ready(function(){
    mapArray =[0,1,1,0,0,3,1,2];
    ctx = $("#myCanvas")[0].getContext("2d");

    imgMain = new Image();
    imgMain.src = "我要去右下角/images/spriteSheet.png";
    currentImgMainX =0;
    currentImgMainY =0;
    imgMain.onload = function(){
        ctx.drawImage(imgMain,0,0,80,130,currentImgMainX,currentImgMainY,200,200);
    }
    imgMountain = new Image();
    imgMountain.src = "我要去右下角/images/material.png";
    imgEnemy = new Image();
    imgEnemy.src= "我要去右下角/images/Enemy.png";
    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            for(let x in mapArray)
            {
                if(mapArray[x]==1){
                    //ctx.drawImage(imgMountain,32,65,32,32,x%3*200,Math.floor(x/3)*200,200,200);右 上
                    ctx.drawImage(imgMountain,64,65,35,35,x%3*200,Math.floor(x/3)*200,200,200);
    
                }else if(mapArray[x]==3){
                    ctx.drawImage(imgEnemy,561,40,130,145,x%3*200,Math.floor(x/3)*200,200,200);
                }
            }
        }
    };
});
$(document).keydown(function(event){
    let targetImgMainX,targetImgMainY,targetBlock,cutImagePositionX;
    event.preventDefault();
    console.log(event.originalEvent.code);
    switch(event.originalEvent.code){
        case "ArrowLeft":
            targetImgMainX = currentImgMainX-200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX =175;
            break;
        case "ArrowUp":
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY-200;
            cutImagePositionX =355;
            break;
        case "ArrowRight":
            targetImgMainX = currentImgMainX+200;
            targetImgMainY = currentImgMainY;
            cutImagePositionX =540;
            break;
        case "ArrowDown":
            targetImgMainX = currentImgMainX;
            targetImgMainY = currentImgMainY+200;
            cutImagePositionX =0;
            break;
        default:
            return;
    }
    if(targetImgMainX<=400&&targetImgMainX>=0&&
        targetImgMainY<=400&&targetImgMainY>=0){
            targetBlock = targetImgMainX/200+targetImgMainY/200*3;
    }else{
        targetBlock = -1;
    }
    ctx.clearRect(currentImgMainX,currentImgMainY,200,200);
    if(targetBlock==-1||mapArray[targetBlock]==1||mapArray[targetBlock]==3){
    }else{
        $("#talkBox").empty();
        currentImgMainX = targetImgMainX;
        currentImgMainY = targetImgMainY;
    }
    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMainX,currentImgMainY,200,200);
    switch(mapArray[targetBlock]){
        case undefined:
            $("#talkBox").text("邊界");
            break;
        case 1:
            $("#talkBox").text("有番茄");
            break;
        case 2:
            $("#talkBox").text("底達終點");
            break;
        case 3:
            $("#talkBox").text("您好");
            break;
    }
});