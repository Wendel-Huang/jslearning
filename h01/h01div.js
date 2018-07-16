var changeStyle=function(o,att,val){
		o.style[att]=val;
	}
	window.onload=function(){
		var oDiv=document.getElementsByClassName("demodiv")[0];
		var oBtn=document.getElementsByTagName('input');
		var myatt=['width',"height","background","display","display"];
		var myval=["200px","200px","red","none","block"];
		for (var i = 0; i < oBtn.length; i++) {
			oBtn[i].index=i;
			oBtn[i].onclick=function(){
				this.index== oBtn.length-1&&(oDiv.style.cssText='')
				changeStyle(oDiv,myatt[this.index],myval[this.index]);
			}
		}

	}