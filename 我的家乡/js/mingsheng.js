function start(){
    let i=0;
    window.setInterval(function(){

        // index = ++i%$("li").length;
        index = ++i%$("#imgs li").length;
        // alert(index)
        $("#imgs li:visible").hide();
        $("#imgs li").eq(index).show();
        
    },1700);
}