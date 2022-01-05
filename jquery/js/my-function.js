
function fnFlexItemWidth(){
    let setBox = $('.flex-box>div');
    let conWidth = $('.container').width();
    let setWidth = (conWidth - 12) / 2;    
    setBox.css({width:setWidth,});
}

function loadEvent(leftBox,rightBox){    
    $(leftBox).css({
        transform:'translateX(0)',
        opacity:'1',
    })
    $(rightBox).css({
        transform:'translateX(0)',
        opacity:'1',
    })
}

function loadEventS(item1,item2,item3,item4,item5,item6,deTime){
    setTimeout(function(){
    loadEvent(item1,item2);
},deTime);

setTimeout(function(){
    loadEvent(item3,item4);
},deTime + 600);

setTimeout(function(){
    loadEvent(item5,item6);
},deTime + 1200);
}