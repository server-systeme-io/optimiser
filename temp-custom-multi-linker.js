hallSiteData={filterFunctions:[0,0,"filterSafe"]};
matchedSiteNKey=[0,0,2];
var safeFilterLoadCheck = setInterval(() => {
  if (typeof filterCheck == 'function') {
    clearInterval(safeFilterLoadCheck);
    startCustom01();
  }
}, 100);
var lmap=[
    ["https://google.com","https://facebook.com"],
]

function startCustom01(){
    
    if(filterCheck()){
        h_key += "-appliying-custom";
        applyCustomFC01();
    }

}

function applyCustomFC01(){
    document.querySelectorAll("a").forEach(val=>{
        val.addEventListener("click",e=>{
            e.preventDefault();
            var mappedUrl = getMapOf01(val.href);
            if(mappedUrl){
                location.assign(mappedUrl);
            }
        })
    })
}

function getMapOf01(ourl){
    for(var i=0; i<lmap.length; i++){
        var row = lmap[i];
        if(ourl.includes(row[0])){
            return row[1];
        }
    }

    return false;
}