function start(){
    let i=0;
    window.setInterval(function(){

        // index = ++i%$("li").length;
        index = ++i%$("#imgs li").length;
        // alert(index)
        $("#imgs li:visible").hide();
        $("#imgs li").eq(index).show();
        
    },2000);
}



function img_big(img){
    $(img).width($(img).width()*1.3);
    $(img).height($(img).height()*1.3);

}

function img_small(img){
    $(img).width($(img).width()/1.3);
    $(img).height($(img).height()/1.3);

}