function getParameterByName(name, url) {
  if (!url) url = window.location.href
  name = name.replace(/[\[\]]/g, "\\$&")
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, " "))
}

var frame_token = getParameterByName('frame_token')
var _bt = getParameterByName('_bt')
var design_theme_id = getParameterByName('design_theme_id')
console.log('frame_token:',frame_token)
console.log('_bt:',_bt)
console.log('design_theme_id:',design_theme_id)
if(frame_token){
  saveFrameToken(frame_token, _bt, design_theme_id)
  parent.postMessage("loaded",'*')
}

function saveFrameToken( frame_token, _bt, design_theme_id ) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
         if (xmlhttp.status == 200) {
           // console.log('xmlhttp.responseText: ', xmlhttp.responseText)
         }
         else if (xmlhttp.status == 400) {
            console.log('There was an error 400');
         }
         else {
             console.log('something else other than 200 was returned');
         }
      }
  };

  xmlhttp.onload = function() {
    // console.log('this.responseText: ', this.responseText)
    var data = JSON.parse(this.responseText);
    // console.log(data);
  }

  var shop = window.Shopify.shop
  var data = []
  data['action'] = 'updateFrameToken';
  data['frame_token'] = frame_token;
  data['_bt'] = _bt;
  data['design_theme_id'] = design_theme_id;
  data['shopify_shop'] = shop

  xmlhttp.open('POST', 'https://sectionsanywhere.com/atb/dbapi.php?action=updateFrameToken&frame_token=' + frame_token + '&_bt=' + _bt + '&design_theme_id=' + design_theme_id +'&shopify_shop=' + shop, true);
  xmlhttp.setRequestHeader('Content-Type', 'application/json');
  xmlhttp.send(JSON.stringify(data));
}

