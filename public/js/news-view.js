"undefined"==typeof public&&(public={}),public.newsView={init:function(){$("body main section.head .section-content .reactions .emoji[data-type], body main section.post .actions .reactions .emoji[data-type]").on("click",(function(){var t=$(this).closest(".reactions"),e=$(this).attr("data-type");public.newsView.reaction({loader:t,type:e})})),$("body main [data-download]").on("click",(function(){var t=$(this).attr("data-download");public.newsView.counter({name:t})}))},counter:function(t){var e=$.extend({},{name:""},t);core.ajax({url:"/index/counter",data:{name:e.name},ident:"counter"+e.name,success:function(t){t&&$("body main .mobile-post .stat .stat-count").text(core.main.num(t))}})},reaction:function(t){var e=$.extend({},{loader:"body main section.head .section-content .reactions .emoji[data-type], body main section.post .actions .reactions .emoji[data-type]",type:0},t);core.ajax({url:"/news/reaction-add",data:{id:global.app.id,type:e.type},ident:"reaction-add"+e.type,loader:e.loader,success:function(t){if(t&&t.error)return Swal.fire({text:t.error,icon:"error",confirmButtonText:global.lang.public["news-view"].close});void 0!==t.balance&&pattern.index.main.balance(t.balance),t.status?$('body main section.head .section-content .reactions .emoji[data-type="'+e.type+'"], body main section.post .actions .reactions .emoji[data-type="'+e.type+'"]').addClass("active"):$('body main section.head .section-content .reactions .emoji[data-type="'+e.type+'"], body main section.post .actions .reactions .emoji[data-type="'+e.type+'"]').removeClass("active");var n=core.main.numl(t.count.total);for(var o in t.count.total>=1e3&&(n+="+"),$("body main section.head .section-content .reactions .all .value, body main section.post .actions .reactions .all .value").text(n),$("body main section.head .section-content .reactions .all .desc, body main section.post .actions .reactions .all .desc").text(core.main.plural(t.count.total,global.lang.public["news-view"]["reaction-1"],global.lang.public["news-view"]["reaction-2"],global.lang.public["news-view"]["reaction-5"])),t.count.list)t.count.list[o]>0?($('body main section.head .section-content .reactions .emoji[data-type="'+o+'"] .count').length?$('body main section.head .section-content .reactions .emoji[data-type="'+o+'"] .count span').text(core.main.numl(t.count.list[o])):$('body main section.head .section-content .reactions .emoji[data-type="'+o+'"]').append('<div class="count"><span>'+core.main.numl(t.count.list[o])+"</span></div>"),$('body main section.post .actions .reactions .emoji[data-type="'+o+'"] .count').length?$('body main section.post .actions .reactions .emoji[data-type="'+o+'"] .count span').text(core.main.numl(t.count.list[o])):$('body main section.post .actions .reactions .emoji[data-type="'+o+'"]').append('<div class="count"><span>'+core.main.numl(t.count.list[o])+"</span></div>")):$('body main section.head .section-content .reactions .emoji[data-type="'+o+'"] .count, body main section.post .actions .reactions .emoji[data-type="'+o+'"] .count').remove();if(t.warning){Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1e4,timerProgressBar:!0,didOpen:t=>{t.addEventListener("mouseenter",Swal.stopTimer),t.addEventListener("mouseleave",Swal.resumeTimer)}}).fire({icon:"warning",html:t.warning})}if(t.success){Swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1e4,timerProgressBar:!0,didOpen:t=>{t.addEventListener("mouseenter",Swal.stopTimer),t.addEventListener("mouseleave",Swal.resumeTimer)}}).fire({icon:"success",html:t.success})}}})}},$(document).ready((function(){public.newsView.init()}));