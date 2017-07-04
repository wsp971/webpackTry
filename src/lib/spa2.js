/**
 * 简单的单页面加载
 * @author: wangshiping5
 * @version: v20170321
 * @description:
 * */

define(["jquery"],function($){
    function spa(options){
        var config={
            "default":{
                tpl: "tpl_home",
                "bind-tab": "home",
                callback: function(){
                    console.log("run the default callback! please check!");
                }
            }
        };
        var onshowTpl = "";
        $.extend(config,options);
        function go(hash){
            // var tpl = $("#tpl_" +hash).html();
            var tpl = config[hash]? config[hash].tpl : config["home"].tpl;
            var bindtab = config[hash]? config[hash]["bind-tab"]: config["home"]["bind-tab"];
            var container = config[hash]? config[hash].container: config["home"]["container"];
            if(tpl){
                if($("#" + tpl).length < 1){
                    throw new Error("the tpl is not exist!");
                }
                console.log(tpl);
                console.log(onshowTpl);
                console.log(onshowTpl === tpl? "模板不会改变": "模板会改变");
                var $html = $($("#"+ tpl).html());
                $("#container").html($html);
                $html.addClass("active");
                $html.addClass("in");
                onshowTpl = tpl;
                $("li[bind-tab='"+ bindtab + "'").addClass("active").siblings().removeClass("active");
                config[hash] && config[hash].callback && config[hash].callback.call();
                return;
            }
            if(container){
                if($(container).length < 1){
                    throw new Error("the container is not exist!");
                }
                $("li[bind-tab='"+ bindtab + "'").addClass("active").siblings().removeClass("active");
                config[hash] && config[hash].callback && config[hash].callback(container);
            }
        }
        var init= window.onhashchange = function(){
            var hash = location.hash.slice(1);
            go(hash);
        }

        return{
            go:go,
            init: init
        }
    }
    return{
        spa: spa
    }
})







