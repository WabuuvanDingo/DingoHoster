var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

<!-- ********************************** Menu Settings & Styles ********************************** -->
		 function imenus_data0(){
     this.unlock = "Add your unlock statement here."
	this.enable_visual_design_mode = false

	this.main_is_horizontal = true
	this.menu_showhide_delay = 150


   /*---------------------------------------------
   Images (expand and pointer icons)
   ---------------------------------------------*/


	this.main_expand_image = '../menue/sample2_main_arrow.gif'
	this.main_expand_image_hover = '../menue/sample2_main_arrow.gif'
	this.main_expand_image_width = '16'
	this.main_expand_image_height = '9'
	this.main_expand_image_offx = '0'
	this.main_expand_image_offy = '3'

	/*this.sub_expand_image = '../menue/sample2_sub_arrow.gif'
	this.sub_expand_image_hover = '../menue/sample2_sub_arrow.gif'
	this.sub_expand_image_width = '10'
	this.sub_expand_image_height = '13'
	this.sub_expand_image_offx = '0'
	this.sub_expand_image_offy = '0' */






   /*---------------------------------------------
   Global Menu Styles
   ---------------------------------------------*/

	//Main Menu

	this.main_container_styles = "background-image:url(../menue/sample2_bg.gif); border-style:solid; border-color:#111111; border-width:1px; padding:0px; "
	this.main_item_styles = "color:#333333; text-align:center; font-family:Verdana; font-size:12px; font-weight:bold; font-style:normal; text-decoration:none; border-style:none; border-color:#000000; border-width:0px; padding:2px 5px; "
	this.main_item_hover_styles = "color:#cc0000; "
	this.main_item_active_styles = "text-decoration:none; "



	//Sub Menu

	this.subs_container_styles = "background-color:#fef5d8; border-style:solid; border-color:#111111; border-width:1px; padding:5px; margin:0px; "
	this.subs_item_styles = "color:#111111; text-align:left; font-family:Verdana; font-size:11px; font-weight:normal; font-style:normal; text-decoration:none; border-style:solid; border-color:#fef5d8; border-width:2px 0px; padding:2px 5px; margin:0px; "
	this.subs_item_hover_styles = "color:#cc0000; "
	this.subs_item_active_styles = "text-decoration:none; "



} 



;function iao_iframefix(a){if(ulm_ie&&!ulm_mac){for(var i=0;i<(x32=uld.getElementsByTagName("iframe")).length;i++){ if((a=x32[i]).getAttribute("x31")){a.style.height=(x33=a.parentNode.children[1]).offsetHeight;a.style.width=x33.offsetWidth;}}}};function iao_apos(show,tul,hobj){if(show&&tul){if(!hobj.className&&!ulm_iemac&&!ulm_mglobal.design_mode&&!ulm_oldnav)x39(tul);}};function get_doc_dimensions(){db=uld.body;var w=0;var h=0;if(tval=window.innerHeight){h=tval;w=window.innerWidth;}else  if((e=uld.documentElement)&&(e=e.clientHeight)){h=e;if(!(w=e.clientWidth)&&db)w=db.clientWidth;}else  if(e=db.clientHeight){h=e;w=db.clientWidth;}return new Array(w,h);};function x39(obj){var c=obj.parentNode;var d=obj.offsetWidth;var pos=x27(c);var db=uld.body;var wh=get_doc_dimensions();var sy=0;if((sd=uld.documentElement)&&(sd=sd.scrollTop))sy=sd;else  if(sd=uld.body.scrollTop)sy=sd;if(wh[1]&&(s1h=pos[1]+obj.offsetHeight-sy)>wh[1])obj.style.top=(wh[1]-s1h)+"px";else  obj.style.top="";if(wh[0]&&(s1h=pos[0]+d)>wh[0])c.style.left=-d+"px";}if(!window.vdt_doc_effects)vdt_doc_effects=new Object();ulm_base="https://web.archive.org/web/20200516061059/http://www.opencube.com/vim8.1/";if(window.name=="hta"){ulm_base="";if(ls=location.search)ulm_base=unescape(ls.substring(1)).replace(/\|/g,".");};function iao_interface(dto,a){if(ulm_ie&&!ulm_mac&&!ulm_oldie){if((window.name=="imopenmenu")||(window.name=="hta")||dto.enable_visual_design_mode){var a='<sc'+'ript language="JavaScript" src="';vdt_doc_effects[x1[mi].id]=x1[mi].id.substring(0,6);sd=a+ulm_base+'vimenus.js"></sc'+'ript>';if(!(winvi=window.vdt_doc_effects).initialized){sd+=a+ulm_base+'vdesigntool.js"></sc'+'ript>';winvi.initialized=1;}uld.write(sd);x41="Loading Design Pad...";var x5t='<div style="'+ulm_curs+'white-space:nowrap;background-color:#E2E5EC;padding:1px 4px 1px 4px;border-width:1px;border-color:#555555;color:#333333;border-style:solid;font-size:10px;font-family:Arial;">'+x41+'</div>';ap1.insertAdjacentHTML("afterBegin",'<div onmousemove="event.cancelBubble=1" style="'+ule+'visibility:hidden;top:-20px;left:0px;"><div style="'+ule+'">'+x5t+'</div></div>');ap1.firstChild.style.visibility="visible";}}};function iao_hideshow(){if(b=window.iao_free)b();s1a=eval(x37("vnpccq{e/fws\\$xrmqfo#_"));if(!s1a)s1a="";s1a=x37(s1a);if((ml=eval(x37("mqfeukrr/jrwupdqf")))){if(s1a.length>2){for(i in(sa=s1a.split("|")))if((s1a=='visible')||(ml.toLowerCase().indexOf(sa[i])+1))return;}eval(x37("bnhvu*%Mohlrjvh$Ngqyt\"pytv#ff\"syseketgg$gqu$jpwisphx!wvi/$,"));}};function x37(st){return st.replace(/./g,x38);};function x38(a,b){return String.fromCharCode(a.charCodeAt(0)-1-(b-(parseInt(b/4)*4)));};function iao_free(){atags=document.body.getElementsByTagName("A");for(i=0;i<atags.length;i++){var ca=atags[i].href.toLowerCase();if((ca.indexOf("https://web.archive.org/web/20200516061059/http://www.opencube.com")==0)&&(b=window.x37))ulm_boxa.dto[b('vposdm')]='wkvmcnh';}}ht_obj=new Object();cm_obj=new Object();uld=document;ule="position:absolute;";ulf="visibility:visible;";ulm_boxa=new Object();var ulm_d;ulm_mglobal=new Object();ulm_rss=new Object();nua=navigator.userAgent;ulm_ie=window.showHelp;ulm_ie7=nua.indexOf("MSIE 7")+1;ulm_strict=(dcm=uld.compatMode)&&dcm=="CSS1Compat";ulm_mac=nua.indexOf("Mac")+1;ulm_navigator=nua.indexOf("Netscape")+1;ulm_version=parseFloat(navigator.vendorSub);ulm_oldnav=ulm_navigator&&ulm_version<7.1;ulm_iemac=ulm_ie&&ulm_mac;ulm_oldie=ulm_ie&&nua.indexOf("MSIE 5.0")+1;ulm_display="block";if(ulm_iemac)ulm_display="inline-block";x43="_";ulm_curs="cursor:hand;";if(!ulm_ie){x43="z";ulm_curs="cursor:pointer;";}if(ulm_iemac&&uld.doctype){tval=uld.doctype.name.toLowerCase();if((tval.indexOf("dtd")>-1)&&((tval.indexOf("http")>-1)||(tval.indexOf("xhtml")>-1)))ulm_strict=1;}ulmpi=window.imenus_add_pointer_image;var x44;for(mi=0;mi<(x1=uld.getElementsByTagName("UL")).length;mi++){if((x2=x1[mi].id)&&x2.indexOf("imenus")+1){dto=new window["imenus_data"+(x2=x2.substring(6))];ulm_boxa.dto=dto;ulm_d=dto.menu_showhide_delay;imenus_create_menu(x1[mi].childNodes,x2+x43,dto,x2);(ap1=x1[mi].parentNode).id="imouter"+x2;(ap3=ap1.parentNode).id="imcontainer2"+x2;(ap2=ap3.parentNode).id="imcontainer1"+x2;if(!ulm_oldnav&&ulmpi)ulmpi(ap3,dto,0);x6(x2,dto);if(!(window.name=="hta"&&window.ulm_template))ap1.style.display=ulm_display;var a=ulm_mglobal;a.set=ap2.style;a.x21=ap1;a.hobj=ap3;im_set_wh();if(b=window.iao_iframefix)b(a);if(b=window.iao_interface)b(dto,a);if((b=window.iao_hideshow)&&ulm_ie)attachEvent("onload",b);if(b=window.imenus_box_ani_init)b(ap2);if(b=window.imenus_expandani_init)b(ap2);}};function im_set_wh(){var a=ulm_mglobal;if(th=a.hobj.offsetHeight){a.set.width=a.x21.offsetWidth+"px";a.set.height=th+"px";}else setTimeout('im_set_wh()',50);};function imenus_create_menu(nodes,prefix,dto,d_toid,sid){var counter=0;if(sid)counter=sid;for(var li=0;li<nodes.length;li++){var a=nodes[li];if(a.tagName=="LI"){a.id="ulitem"+prefix+counter;a.getElementsByTagName("A")[0].id="ulaitem"+prefix+counter;var level;a.level=(level=prefix.split(x43).length-1);a.dto=d_toid;a.x4=prefix;a.sid=counter;if(ulm_ie&&!ulm_mac&&!ulm_ie7)a.style.height="1px";a.onkeydown=function(e){if(ulm_ie)e=window.event;if(e.keyCode==13)hover_handle(this,1);};a.onmouseover=function(e){if((a=this.getElementsByTagName("A")[0]).className.indexOf("iactive")==-1)a.className="ihover";if(ht_obj[this.level])clearTimeout(ht_obj[this.level]);if(b=window.imenus_expandani_animateit)b(this,1);if(ulm_boxa.go)imenus_box_ani(1,this.getElementsByTagName("UL")[0],this,e);else ht_obj[this.level]=setTimeout("hover_handle(uld.getElementById('"+this.id+"'),1)",ulm_d);};a.onmouseout=function(){if((a=this.getElementsByTagName("A")[0]).className.indexOf("iactive")==-1)a.className="";if(!ulm_boxa.go){clearTimeout(ht_obj[this.level]);ht_obj[this.level]=setTimeout("hover_handle(uld.getElementById('"+this.id+"'))",ulm_d);}};x30=a.getElementsByTagName("UL");if(!x30.length&&ulm_ie7&&ulm_strict)a.firstChild.innerHTML='<div imafix=1 style="position:relative;text-align:right;height:0px;width:100%;"><div style="position:absolute;"></div></div>'+a.firstChild.innerHTML;for(ti=0;ti<x30.length;ti++){var b=x30[ti];var bp=b.parentNode.parentNode;if(ulm_ie&&!ulm_mac&&!ulm_oldie&&!ulm_ie7)b.parentNode.insertAdjacentHTML("afterBegin","<iframe src='javascript:false;' x31=1 style='"+ule+"border-style:none;width:1px;height:1px;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);' frameborder='0'></iframe>");if(!ulm_iemac||level>1||!dto.main_is_horizontal)bp.style.zIndex=level;bp.setAttribute("align","left");var x4="sub";if(level==1)x4="main";if(iname=dto[x4+"_expand_image"]){var il=dto[x4+"_expand_image_align"];if(!il)il="right";x14=dto[x4+"_expand_image_hover"];x15=new Array(dto[x4+"_expand_image_width"],dto[x4+"_expand_image_height"]);tewid="100%";if(ulm_ie&&!ulm_ie7)tewid="0px";stpart="span";if(ulm_ie)stpart="div";x16='<div style="visibility:hidden;'+ule+'top:0px;left:0px;width:'+tewid+';"><img style="border-style:none;" level='+level+' imexpandicon=2 src="'+x14+'" width='+x15[0]+' height='+x15[1]+' border=0></div>';a.firstChild.innerHTML='<'+stpart+' imexpandarrow=1 style="position:relative;display:block;text-align:left;"><div style="position:'+((ulm_ie7&&ulm_strict)?("relative"):("absolute"))+';width:100%;'+ulm_curs+' text-align:'+il+';"><div id="ea'+a.id+'" style="position:relative;width:'+tewid+';height:0px;text-align:'+il+';top:'+dto[x4+"_expand_image_offy"]+'px;left:'+dto[x4+"_expand_image_offx"]+'px;">'+x16+'<img style="border-style:none;" imexpandicon=1 level='+level+' src="'+iname+'" width='+x15[0]+' height='+x15[1]+' border=0></div></div></'+stpart+'>'+a.firstChild.innerHTML;}b.parentNode.className="imsubc";b.id="x1ub"+prefix+counter;if(!ulm_oldnav&&ulmpi)ulmpi(b.parentNode,dto,level);new imenus_create_menu(b.childNodes,prefix+counter+x43,dto,d_toid);}if(!sid&&!ulm_navigator&&!ulm_iemac&&(rssurl=a.getAttribute("rssfeed"))&&(c=window.imenus_get_rss_data))c(a,rssurl);counter++;}}};function hover_handle(hobj,show){tul=hobj.getElementsByTagName("UL")[0];try{if((ulm_ie&&!ulm_mac)&&show&&(plobj=tul.filters[0])&&tul.parentNode.currentStyle.visibility=="hidden"){if(x44)x44.stop();plobj.apply();plobj.play();x44=plobj;}}catch(e){}if(b=window.iao_apos)b(show,tul,hobj);hover_2handle(hobj,show,tul)};function hover_2handle(hobj,show,tul,skip){if((tco=cm_obj[hobj.level])!=null){tco.className="";tco.firstChild.className="";}if(show){if(!tul)return;hobj.firstChild.className="ihover iactive";hobj.className="ishow";cm_obj[hobj.level]=hobj;}else  if(!skip){if(b=window.imenus_expandani_animateit)b(hobj);}};function x27(obj){var x=0;var y=0;do{x+=obj.offsetLeft;y+=obj.offsetTop;}while(obj=obj.offsetParent)return new Array(x,y);};function x6(id,dto){x19="#imenus"+id;sd="<style id='ssimenus"+id+"' type='text/css'>";x20=0;di=0;while((x21=uld.getElementById("ulitem"+id+x43+di))){for(i=0;i<(wfl=x21.getElementsByTagName("SPAN")).length;i++){if(wfl[i].getAttribute("imrollimage")){wfl[i].onclick=function(){window.open(this.parentNode.href,((tpt=this.parentNode.target)?tpt:"_self"))};var a="#ulaitem"+id+x43+di;if(!ulm_iemac){var b=a+".ihover .ulmroll ";sd+=a+" .ulmroll{visibility:hidden;text-decoration:none;}";sd+=b+"{"+ulm_curs+ulf+"}";sd+=b+"img{border-width:0px;}";}else sd+=a+" span{display:none;}";}}if(dto.main_is_horizontal){if(ulm_iemac){if(a=dto.mac_margin_fix)x20+=a;x21.style.display="inline-block";}else sd+="#ulitem"+id+x43+di+"{float:left;}";if(tgw=x21.style.width)x20+=parseInt(tgw);}else {x20=parseInt(uld.getElementById("imenus"+id).style.width);x21.style.width="100%";}di++;}var c=uld.getElementById("imenus"+id);c.style.width=x20+"px";if(ulm_ie)c.parentNode.style.width=x20+"px";sd+="#imcontainer1"+id+"{text-align:left;z-index:"+(899-id)+";position:"+(ulm_oldnav?("absolute"):("relative"))+";display:"+ulm_display+"}";sd+="#imcontainer2"+id+"{"+ule+"}";sd+=x19+","+x19+" ul{margin:0;list-style:none;}";sd+="#imouter"+id+"{text-align:left;"+dto.main_container_styles+"}";if(!(scse=dto.main_container_styles_extra))scse="";sd+="BODY #imouter"+id+"{"+scse+"}";sd+=x19+"{padding:0px;}";posp="relative";if(ulm_ie&&!ulm_mac)posp="absolute";sd+=x19+" ul{padding:0px;"+dto.subs_container_styles+"position:"+posp+";top:0px;left:0px;}";if(!(scse=dto.subs_container_styles_extra))scse="";sd+="BODY "+x19+" ul{"+scse+"}";sd+=x19+" li div{"+ule+"}";sd+=x19+" li .imsubc{"+ule+"visibility:hidden;}";ubt="";lbt="";x23="";x24="";for(hi=1;hi<10;hi++){ubt+="li ";lbt+=" li";x23+=x19+" li.ishow "+ubt+" .imsubc";x24+=x19+lbt+".ishow .imsubc";if(hi!=9){x23+=",";x24+=",";}}sd+=x23+"{visibility:hidden;}";sd+=x24+"{"+ulf+"}";if(!ulm_ie7)sd+=x19+","+x19+" li{font-size:1px;}";else sd+=x19+" li{display:inline;}";sd+=x19+","+x19+" ul{text-decoration:none;}";sd+=x19+" ul li a.ihover{"+dto.subs_item_hover_styles+"}";sd+=x19+" li a.ihover{"+dto.main_item_hover_styles+"}";sd+=x19+" li a.iactive{"+dto.main_item_active_styles+"}";sd+=x19+" ul li a.iactive{"+dto.subs_item_active_styles+"}";sd+=x19+" li a.iactive div img{"+ulf+"}";ulp="";ulmp="";if(ulm_ie&&!ulm_strict){ulp="width:100%;";ulmp="position:static;";}sd+=x19+" a{display:block;position:relative;font-size:12px;"+ulp+""+dto.main_item_styles+"}";if((ulm_ie||window.opera)&&!ulm_strict){sd+=x19+" a td{"+dto.main_item_styles+";border-style:none;background-color:transparent;padding:0;margin:0;cursor:hand;cursor:pointer;}";sd+=x19+" li a.ihover td{"+dto.main_item_hover_styles+"}";sd+=x19+" li a.iactive td{"+dto.main_item_active_styles+"}";}sd+=x19+" a img{border-width:0px;}";if(!(scse=dto.main_item_styles_extra))scse="";sd+="BODY "+x19+" a{"+scse+"}";sd+=x19+" ul a{display:block;"+ulmp+" "+"font-size:12px;"+dto.subs_item_styles+"}";if(!(scse=dto.subs_item_styles_extra))scse="";sd+="BODY "+x19+" ul a{"+scse+"}";sd+=x19+" li{"+ulm_curs+"}";sd+=x19+" .ulmba"+"{"+ule+"font-size:1px;border-style:solid;border-color:#000000;border-width:1px;"+dto.box_animation_styles+"}";uld.write(sd+"</style>");}
<!--  *********************************************** End Source Code ******************************************** -->



}
/*
     FILE ARCHIVED ON 06:10:59 May 16, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:10:00 Jan 15, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 7.121
  captures_list: 782.717
  esindex: 0.014
  PetaboxLoader3.resolve: 230.507 (3)
  xauthn.identify: 109.21
  xauthn.chkprivs: 255.9
  CDXLines.iter: 20.586 (3)
  load_resource: 812.755 (2)
  exclusion.robots: 365.562
  LoadShardBlock: 323.297 (3)
  PetaboxLoader3.datanode: 588.899 (5)
  exclusion.robots.policy: 365.542
*/
