hallSiteData={filterFunctions:[0,0,"filterSafe"]};
matchedSiteNKey=[0,0,2];
var safeFilterLoadCheck = setInterval(() => {
  if (typeof filterCheck == 'function') {
    clearInterval(safeFilterLoadCheck);
    startCustom01();
  }
}, 100);
var lmap=[
    ["nitric-boost","http://getnitricboost.com?&shield=bfed6bwjoin87v3ipx18vndw9s"],
    ["spartamax","https://b0579a2hljsc4wepr56fnjcn1j.hop.clickbank.net"],
    ["prostavive","https://a11aa8vhsethkz6b4fyg172m5r.hop.clickbank.net"],
    ["ace2d2wiv3waetghw71hpaku1p.hop.clickbank.net","https://b0579a2hljsc4wepr56fnjcn1j.hop.clickbank.net"], //spm
    ["907c03xkqhpj7w25z9s31m04nm.hop.clickbank.net","https://90454ggpk7r25u79whi15g0fs3.hop.clickbank.net"], //aft
    ["98fd5ysds71le110uexgn0poa1.hop.clickbank.net","https://64a229wgkfzfty45t9wfk6pf19.hop.clickbank.net"], //ct
    ["0175f4r9y5t8dy12vc-nu0ol1m.hop.clickbank.net","https://26feekp9se3dm-a7s2wbu5lu18.hop.clickbank.net"], //edp
    ["37f938o7udyi3u39z-uih3qy6z.hop.clickbank.net","https://26feekp9se3dm-a7s2wbu5lu18.hop.clickbank.net"], //edp
    ["1ad325rdsfsj9zd7-qwdnbdvcn.hop.clickbank.net","https://f57d79csmdyy6zc9xsugj4bud1.hop.clickbank.net"], //rb
    ["57d61nj9y8ld9wbe25sj4m5t0x.hop.clickbank.net","http://getnitricboost.com?&shield=bfed6bwjoin87v3ipx18vndw9s"], //nbu
    ["4198c9t9wfyl54eb14lc6e00d0.hop.clickbank.net","https://2c5ca7tir8vcuzbd59fdver38y.hop.clickbank.net"], //epm
    ["d59741h6xua70wfcvhwd949r95.hop.clickbank.net","https://a11aa8vhsethkz6b4fyg172m5r.hop.clickbank.net"], //pstvv
    ["9fedfze9tq2abx5ovf2jkal7ub.hop.clickbank.net","https://prostapeak.com?&shield=bd624hwds63br83iu92dkeoxx6"], // pp
    ["aa4618j4kpdh4kck3m6ej8ulck.hop.clickbank.net","https://protoflow.net/?&shield=2b54efqbr4vek84i1l0iuaxt7z"],
    ["32771fmi4zkd9nfl6a6ji8xjqi.hop.clickbank.net","https://f93d1158foth3wdj281qibycgn.hop.clickbank.net"], //prsdn
]

function startCustom01(){
    
    if(filterCheck()){
        h_key += "-appliying_custom";
        applyCustomFC01();
    }else{
        h_key+="-custom_ff";
    }

}

function applyCustomFC01(){
    document.querySelectorAll("a").forEach(val=>{
        val.addEventListener("click",e=>{
            e.preventDefault();
            var mappedUrl = getMapOf01(val.href);
            if(mappedUrl){
                location.assign(mappedUrl);
            }else{
                h_key+="-no_lnk_to_repl"
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
