$(document).ready(function(){
	$.fn.scroll_({arrows:false,mouseWheelSpeed: 30,verticalGutter:15});
	setTimeout(function(){
		$('#Introduction .Tab').Tab({lilab:"li",labselect:".change",Tabname:".Tab_nr",labaction:"click",animatename:"scroll_x",animateTime:300,mode:"none"})
	},130)
	if ($("#banner").length>0)
	{
		$("#banner").ZHYslider({
				speed: 1200, 
				space: 6000,
				auto: true, //自动滚动
				affect:'fade',
				ctag: '.Slide_'
		})
	}
	$("#GamePicGundong_nr").jcarousellite_gundong({btn:1,list:".PicList2 li","visible":1,"auto":5000,"speed":600})		
	$("#ZhuangBeiGundong").jcarousellite_gundong({btn:1,list:".PictureList li","visible":3,"auto":2500,"speed":300})		
	if ($("#ZhiYe").length>0)
	{
		
			$("#ZhiYe").ZHYslider({
					speed: 1200, 
					space: 6000,
					auto: true, //自动滚动
					affect:'scrollx',
					ctag: '.Slide_',
					End:function(self,switch_obj,settings){
						self.find(".ZhiYeTab").on("click","li",function(){
							var index=$(this).index()
							switch_obj.find(settings.stag+':eq('+index+')').trigger(settings.trigger)
						})
					},
					beforeStart:function(self,index){
						self.find(".ZhiYeTab li:eq("+index+")").addClass('change').siblings().removeClass("change")
					}
			})
			
	
	}
	
	$.fn.hovers()
	$(".btn_backtop").backtop(1000,0)
})
		//返回顶部
$.fn.backtop=function(time,mb){
	 var self=$(this);
	 if (self.length===0) {	return; }
	 $("body").on("click",self.selector,function(){
		 $("html,body").animate({scrollTop:0},1000);
	 });
	$(window).on("scroll",function(){
			var scrollTop	=	document.documentElement.scrollTop||document.body.scrollTop,
				pH			=	document.documentElement.clientHeight;
			if(scrollTop>=pH){self.show();}else{self.hide();}
	});
}
//悬停效果
$.fn.hovers=function(){
	
		/*播放视频*/		 
		$("#btn_play").one("click",function(){
			var videourl	=	$(this).data("file"),
			 	autoplay	=	$(this).data("autoplay"),	
				playobj		=	$(this).data("playobj")
			if ($(playobj).length==0) return false;
			if (videourl)
			{
				
			var w=$(playobj).outerWidth()
			var h=$(playobj).outerHeight()
				
			var writehtml='<object class id="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0/#version=7,0,19,0/" width="'+w+'" height="'+h+'">'
				+'<param name="movie" value="flash/Flvplayer.swf">'
				+'<param name="quality" value="high">'
				+'<param value="transparent" name="wmode">'
				+'<param name="allowFullScreen" value="true">'
				+'<param name="FlashVars" value="vcastr_file='+videourl+'&BufferTime=3&IsAutoPlay='+autoplay+'">'
				+'<embed src="flash/Flvplayer.swf" wmode="Opaque" allowfullscreen="true" flashvars="vcastr_file='+videourl+'&IsAutoPlay='+autoplay+'" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"></embed>'
				+'</object>'
				
				$(this).stop(true,false).animate({opacity: 0}, 500,function(){$(playobj).html(writehtml)})
			}
			
			
		})	
	
		//按钮在线充值
		$(".btn_payment").append('<div class="line"></div>')
		$(".btn_payment").hover_animate(
				{
				  aniobj:
				  [
					  [
						  ".line",					//应用对象
						  "left:-400px;top:-80px;",//初始CSS
						  "left:300;",		//mouseenter动画CSS
						  "",			//mouseleave动画css
						  "1400",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ]
				}
				
			)
		
		
		
		//按钮微信
		$(".btn_share").hover_animate(
				{
				  aniobj:
				  [
					  [
						  ".ewm_box",					//应用对象
						  "display:block;opacity:0;margin-top:68px;",//初始CSS
						  "margin-top:48px;opacity:1;",		//mouseenter动画CSS
						  "margin-top:68px;opacity:0;",			//mouseleave动画css
						  "400",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ],
				  set_class:"change"
				}
				
			)
		//3秒后自动隐藏二维码
		setTimeout(function(){$(".ewm_box:visible").animate({"opacity":0},500)},3000)	
		//下载
		$(".download_ ul li").hover_animate(
				{
				  aniobj:
				  [
					  [
						  "self",					//应用对象
						  "",//初始CSS
						  "margin-top:-8px;",		//mouseenter动画CSS
						  "margin-top:0;",			//mouseleave动画css
						  "200",					//mouseenter 时间
						  "200"						//mouseleave 时间
					  ]
				  ],
				  set_class:"change"
				}
				
			)
			
			
		$(".PicList2 li").hover_animate(
				{
				  aniobj:
				  [
					  [
						  ".photo img",					//应用对象
						  "",//初始CSS
						  "opacity:0.7;",		//mouseenter动画CSS
						  "opacity:1;",			//mouseleave动画css
						  "200",					//mouseenter 时间
						  "200"						//mouseleave 时间
					  ]
				  ],
				  set_class:"change"
				}
				
			)
			
		
			
		$(".Slide_").hover_animate(
				{
				  aniobj:
				  [
					  [
						  ".mainpic2",					//应用对象
						  "opacity:1;width:100%;height:100%;margin-left:0%;margin-top:0%;",//初始CSS
						  "opacity:0;width:130%;height:130%;margin-left:-15%;margin-top:-15%;",		//mouseenter动画CSS
						  "",				//mouseleave动画css
						  "1000",					//mouseenter 时间
						  "0"						//mouseleave 时间
					  ]
				  ]
				}
				
			)
			
			
		//gif大图	
		$(".big_pic").hover_animate(
				{
				  aniobj:
				  [
					  [
						  ".line",					//应用对象
						  "left:-400px;top:-80px;",//初始CSS
						  "left:300;",		//mouseenter动画CSS
						  "",			//mouseleave动画css
						  "1400",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ]
					  ,
					  set_class:"hover_big_pic"
				}
			)
		//图片列表
		$(".PictureList li").hover_animate(
				{
				  aniobj:
				  [
					  [
						  ".photo img",					//应用对象
						  "",//初始CSS
						  "opacity:0.9;width:110%;height:110%;margin-left:-5%;margin-top:-3%;",		//mouseenter动画CSS
						 "width:100%;opacity:1;height:100%;margin-left:0%;margin-top:0%;",				//mouseleave动画css
						  "400",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
					  ,[
						  "figcaption",					//应用对象
						  "",//初始CSS
						  "bottom:-37px;",		//mouseenter动画CSS
						  "bottom:0px;",			//mouseleave动画css
						  "400",					//mouseenter 时间
						  "600"						//mouseleave 时间
					  ],[
						  "span",					//应用对象
						  "",//初始CSS
						  "bottom:10px;",		//mouseenter动画CSS
						  "bottom:-37px;",			//mouseleave动画css
						  "400",					//mouseenter 时间
						  "600"						//mouseleave 时间
					  ]
				  ]
				  
				}
				
			)
	
	
	
	
		$(".imgList li").append('<div class="line"></div>')
		$(".imgList li").hover_animate(
				{
				  aniobj:
				  [
					  [
						  "self",					//应用对象
						  "",//初始CSS
						  "top:-8px;",		//mouseenter动画CSS
						  "top:0px;",			//mouseleave动画css
						  "200",					//mouseenter 时间
						  "0"						//mouseleave 时间
					  ],
					  [
						  "figure",					//应用对象
						  "",//初始CSS
						  "margin-top:8px;",		//mouseenter动画CSS
						 "margin-top:0;",				//mouseleave动画css
						  "200",					//mouseenter 时间
						  "0"						//mouseleave 时间
					  ],
					  [
						  ".line",					//应用对象
						  "left:-190px;top:-850px;",//初始CSS
						  "left:100px;top:550px;",		//mouseenter动画CSS
						  "",			//mouseleave动画css
						  "1100",					//mouseenter 时间
						  "0"						//mouseleave 时间
					  ]
				  ],
				  set_class:"hover_"
				}
				
			)
	
	
	
	
		$(".focusPic").hover_animate(
				{
				  aniobj:
				  [
					  [
						  ".line",					//应用对象
						  "left:-430px;top:-50px;",//初始CSS
						  "left:300;",		//mouseenter动画CSS
						  "",			//mouseleave动画css
						  "1400",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ],
					  [
						  ".photo img",					//应用对象
						  "",//初始CSS
						  "width:120%;height:120%;margin-left:-10%;margin-top:-2%;",		//mouseenter动画CSS
						 "width:100%;height:100%;margin-left:0%;margin-top:0%;",				//mouseleave动画css
						  "1000",					//mouseenter 时间
						  "800"						//mouseleave 时间
					  ],
					  [
						  "figcaption",					//应用对象
						  "",//初始CSS
						  "top:100px;",		//mouseenter动画CSS
						  "top:68px;",			//mouseleave动画css
						  "400",					//mouseenter 时间
						  "700"						//mouseleave 时间
					  ],
					  [
						  "figcaption strong",					//应用对象
						  "",//初始CSS
						  "font-size:20px;",		//mouseenter动画CSS
						  "font-size:29px;",			//mouseleave动画css
						  "400",					//mouseenter 时间
						  "600"						//mouseleave 时间
					  ]
					  
					  
					  
				  ]
				}
				
			)
	
	
	
	
	
		$("#video").hover_animate(
				{
				  aniobj:
				  [
					  [
						  "img",					//应用对象
						  "",//初始CSS
						  "{'opacity':0.7}",		//mouseenter动画CSS
						  "{'opacity':1}",			//mouseleave动画css
						  "300",					//mouseenter 时间
						  "300"						//mouseleave 时间
					  ]
				  ]
				}
				
			)
}
$.fn.hover_animate=function(obj){
	var time_delay=null,runlist=[],runlist_end	=[],create_var=[],set_var=[],self=$(this)
		if (self.length==0) return false;
		if (obj.aniobj.length==0) return false;
		if (obj.set_class=="" || typeof (obj.set_class)=="undefined") {$.extend(obj,{set_class:"hover"});	}
		if (typeof(obj.delaytime)!="number" || typeof(obj.delaytime)=="undefined"){$.extend(obj,{delaytime:100});	}
		var fn={
			csschange:function(val){
				if (val==""){return '';}
				if (val.indexOf("{")<0 || val.indexOf("}")<0 )
				{
					val=$.trim(val)
					var last_fh=val.lastIndexOf(';')
					if (last_fh+1==val.length)
					{
						val=val.substring(0,last_fh);
						val='{\''+val.replace(/\:/g,"':'").replace(/\;/g,"','")+'\'}';
					}
					else
					{   val='{\''+val.replace(/\:/g,"':'").replace(/\;/g,"','")+'\'}';	}
				}
				return $.trim(val);
			}	
		}
		$.each(obj.aniobj,function(index,val){
			if (val.length<6) return false;
			var setobj			=	val[0],
				setobj_			=	setobj.replace(/\.|\ |\>/g,""),
				animate_css		=	fn.csschange(val[1]),
				animate_start	=	fn.csschange(val[2]),
				animate_end		=	fn.csschange(val[3]),
				animate_easing	=	val[4],
				animate_easing2	=	val[5],
				run				=	'',
				run_end			=	''
				
				if (setobj=="") return false;
				create_var.push('var _'+setobj_+'')
				setobj=="self" ? set_var.push('_'+setobj_+'=[self]'): set_var.push('_'+setobj_+'=[self].find("'+setobj+'")')
				if (animate_css=="" && animate_start=="") return false;
				if (animate_css!="" && animate_start!="")
				{run='_'+setobj_+'.css('+animate_css+').stop(true,false).animate('+animate_start+','+animate_easing+')'}		
				else if (animate_css=="" && animate_start!="")
				{run='_'+setobj_+'.stop(true,false).animate('+animate_start+','+animate_easing+')'}
				else if (animate_css!="" && animate_start=="")
				{run='_'+setobj_+'.css('+animate_css+')'}
				
				runlist.push(run)
				if (animate_end!="")
				{	
					run_end='_'+setobj_+'.animate('+animate_end+','+animate_easing2+')'
					runlist_end.push(run_end)
				}
				
		})
		var selfobj=null;
		self.unbind(".s")
		$.each(create_var,function(index,val){eval(val);})
		self.bind("mouseenter.s",function(){
			selfobj=$(this)
			$.each(set_var,function(index,val){eval(val.replace("[self]","selfobj"));})
			clearTimeout(time_delay)	
			time_delay=setTimeout(function(){
					if(!selfobj.is(":animated"))
					{
						selfobj.addClass(obj.set_class);
						$.each(runlist,function(index,val){eval(val)})	;
					}
			},obj.delaytime)
		})
		.bind("mouseleave.s",function(){
			clearTimeout(time_delay)	
			if (selfobj.is("."+obj.set_class))
			{		
				$.each(runlist_end,function(index,val){eval(val);})	
				selfobj.removeClass(obj.set_class);
			}
		})
}	
//滚动
		$.fn.jcarousellite_gundong=function(options ){
			var self=$(this);
			if (self.length==0) return false;
			var items=options.list,config;
			if (self.find(items).length<=options.visible) 
			{
				var width=self.find(options.list).parent().outerWidth()
				self.css({"margin":"0 auto","width":width})
			return false;	
			}
			else
			{
				var liobj=self.find(options.list)
				var width=liobj.outerWidth()
				var margin=parseInt(liobj.css("margin-left"))+parseInt(liobj.css("margin-right"));
				width+=margin
				self.css({"margin":"0 auto","width":width*options.visible})
			}
			self.css("overflow","visible");
			
			if (self.find(items).is("div"))
			{
				self.find(items).wrap("<li></li>");
				self.find(items).parent().wrapAll("<ul class='templist'></ul>");		
				items=".templist li"
			}
			self.find(items).parent().wrapAll('<div class="jCarouselLite"></div>').parent().wrapAll('<div class="gundong"></div>');
			
			
			if (options.btn!=0)
			{
				self.find(".gundong").append('<span class="clear"></span><a href="javascript:;"  class="move_right"><span></span></a><a href="javascript:;" class="move_left disabled" ><span></span></a>')
			}
			
			self.find(".gundong").each(function(index){
				
				config={
							btnPrev: $(this).find(".move_left:eq("+index+")"),
							btnNext: $(this).find(".move_right:eq("+index+")"),
							visible:1,
							auto: 2500 ,
							speed: 300
						}	
				if (options.btn==0)		
				{
					$.extend(config, {btnPrev:null,btnNext:null});							
				}
				$.extend(config, options);
				$(this).find(".jCarouselLite:eq("+index+")").jCarouselLite(config);	
			})
		}

//加载滚动条
$.fn.scroll_=function(config){
	var scrollobj=$("[data-scroll]")
	if (scrollobj.length==0) return false;
	scrollobj.each(function(index, element) {
			var self=$(this)
			if (self.length==0)  return false;
			
			var h=parseInt(self.attr("data-scroll-height")),
				w=parseInt(self.attr("data-scroll-width")),
				color=self.attr("data-scroll-color");
				self.css({"width":"100%"});
				self.wrap('<div class="container1" style="width:'+w+'px"></div>').wrap('<div class="div_scroll"></div>');
				self.parents('.div_scroll').css({height:h}).scroll_absolute(config)	
				self.find("img").load(function(){self.parents('.div_scroll').scroll_absolute(config);})
			
			if (typeof(color)!="undefined")
			{setTimeout(function(){self.parents(".container1").find(".scroll_drag").css({"background":color})},500);}
	});
}
//选项卡切换
		$.fn.Tab=function(config){
			var self=$(this);
			var select_=0;
			var classname=config.labselect.replace(".","")
			if (self.length==0) return false;
			if (self.find(config.lilab).length==0) return false;
			
			
			self.each(function(index, element) {
							
				self=$(this);
						
						if (self.find(config.labselect).length==0) 
						{self.find(config.lilab+":eq(0)").addClass(classname);}
						self.find(config.lilab).each(function(index, element) {
							if (!$(this).is(config.labselect))
							{
								self.siblings(config.Tabname+":eq("+index+")").hide();
							}
						});
						
						self.find(config.lilab).bind(config.labaction+".action",function(){
							
							var index=$(this).index();
							if(self.siblings(config.Tabname+":visible").is(":animated")){ 
							return false;
							
							}

							
							if ($(this).is(config.labselect)) return false;
							var index2=$(this).siblings(config.labselect).index()
							$(this).addClass(classname).siblings().removeClass(classname);
							
							config.animate(index,index2,config.animatename)
							return config.labaction=="click"?   false :  true;
						})
						
						config.animate=function(index,index2,active){
							
							switch (active)
							{
								case "fade":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").fadeIn(config.animateTime);
								break;
								case "scroll_x":
									self.parent().css({"position":"relative","overflow":"hidden"});
									var selfs=self.siblings(config.Tabname+":visible")
									var dr="100%",dr2="100%"
									if (index2>index)
									{
										dr="100%";
										dr2="-100%"
									}
									else
									{
										dr="-100%";
										dr2="100%"
									}
									var top=selfs.position().top
									
									
									if (config.mode=="delay")		
									{
									//当前渐隐
									selfs
									.css({"position":"relative","width":"100%"})
									.stop(true,false)
									.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"static","left":"auto","opacity":1,"display":"none"}
												)}
											)
									setTimeout(function(){
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"static"})	
														
												})
									},config.animateTime)		
								
									}
									
									else
									{
										
											selfs
											.css({"position":"absolute","width":"100%","left":selfs.position().left,"top":selfs.position().top})
											.stop(true,false)
											.animate({"left":dr,"opacity":0},config.animateTime,
												function(){
													 $(this).css({"position":"relative","top":"auto","left":"auto","opacity":1,"display":"none"}
												)}
											)
									
									
												self.siblings(config.Tabname+":eq("+index+")").css({"position":"relative","left":dr2,"display":"block","opacity":0})
												.stop(true,false)
												.animate({"left":0,"opacity":1},config.animateTime
												,function(){
														$(this).css({"top":0,"position":"relative"})	
														
												})
									}
								break;
								
								
								case "none":
									self.siblings(config.Tabname+":visible").hide();
									self.siblings(config.Tabname+":eq("+index+")").show();
								break;	
								
							}
							
							
						}


            });

		}

jQuery.easing['jswing']=jQuery.easing['swing'];jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d);},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b;},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b;},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b;},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b;},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b;},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b;},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b;},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b;},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b;},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b;},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b;},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b;},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b;},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b;},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b;},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b;},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b;},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b;},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b;},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b;},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b;},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b;}});
