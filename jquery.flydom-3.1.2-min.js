jQuery.fn.createAppend=function(e,t,n){if(t==undefined&&e.constructor==Array){for(var r=0;r<e.length;r+=3)jQuery(this).createAppend(e[r],e[r+1]||{},e[r+2]||[]);return this}var i=this[0];if(jQuery.browser.msie&&e=="input"&&t.type&&jQuery.browser.version<9)var e=document.createElement("<"+e+' type="'+t.type+'" />');else var e=document.createElement(e);if(i.nodeName.toLowerCase()=="table"&&e.nodeName.toLowerCase()=="tr"){if(i&&i.getElementsByTagName("tbody")[0])var s=i.getElementsByTagName("tbody")[0];else var s=i.appendChild(document.createElement("tbody"));var e=s.appendChild(e)}else var e=i.appendChild(e);e=__FlyDOM_parseAttrs(e,t);if(typeof n=="object"&&n!=null)for(var r=0;r<n.length;r+=3)jQuery(e).createAppend(n[r],n[r+1]||{},n[r+2]||[]);else n!=null&&(e=__FlyDOM_setText(e,n));return jQuery(e)},jQuery.fn.createPrepend=function(e,t,n){if(t==undefined&&e.constructor==Array){for(var r=0;r<e.length;r+=3)jQuery(this).createPrepend(e[r],e[r+1]||{},e[r+2]||[]);return this}var e=document.createElement(e);if(this[0].hasChildNodes()==0)var e=this[0].appendChild(e);e=__FlyDOM_parseAttrs(e,t);if(typeof n=="object"&&n!=null)for(var r=0;r<n.length;r+=3)jQuery(e).createAppend(n[r],n[r+1]||{},n[r+2]||[]);else n!=null&&(e=__FlyDOM_setText(e,n));if(this[0].hasChildNodes()==1)var e=this[0].insertBefore(e,this[0].firstChild);return jQuery(e)},jQuery.fn.tplAppend=function(e,t){e.constructor!=Array&&(e=[e]);if(e.length==0)return!1;for(var n=0;n<e.length;n++){var r=t.apply(e[n]);for(var i=0;i<r.length;i+=3)jQuery(this).createAppend(r[i],r[i+1],r[i+2])}return this},jQuery.fn.tplPrepend=function(e,t){var n=this[0];e.constructor!=Array&&(e=[e]);if(e.length==0)return!1;var r=document.createElement("div");for(var i=0;i<e.length;i++){var s=t.apply(e[i]);for(var o=0;o<s.length;o+=3)jQuery(r).createAppend(s[o],s[o+1],s[o+2])}for(i=r.childNodes.length-1;i>=0;i--)if(jQuery.browser.msie&&n.nodeName.toLowerCase()=="table"&&r.childNodes[i].nodeName.toLowerCase()=="tr")if(n.getElementsByTagName("tbody")[0]){var u=n.getElementsByTagName("tbody")[0];u.insertBefore(r.childNodes[i],u.firstChild)}else{var u=n.insertBefore(document.createElement("tbody"),n.firstChild);u.appendChild(u.appendChild(r.childNodes[i]))}else n.insertBefore(r.childNodes[i],n.firstChild);return this},String.prototype.toCamelCase=function(){var e=this,t={"class":"className",colspan:"colSpan",rowspan:"rowSpan","for":"htmlFor",httpequiv:"httpEquiv",alink:"aLink",vlink:"vLink",bgcolor:"bgColor",acceptcharset:"acceptCharset",selectedindex:"selectedIndex",tabindex:"tabIndex",selected:"defaultSelected",checked:"defaultChecked",value:"defaultValue",accesskey:"accessKey",noshade:"noShade",datetime:"dateTime",usemap:"useMap",lowsrc:"lowSrc",longdesc:"longDesc",ismap:"isMap",codebase:"codeBase",codetype:"codeType",valuetype:"valueType",nohref:"noHref",thead:"tHead",tfoot:"tFoot",cellpadding:"cellPadding",cellspacing:"cellSpacing",charoff:"chOff",valign:"vAlign",frameborder:"frameBorder",marginheight:"marginHeight",marginwidth:"marginWidth",noresize:"noResize"};if(t[e]!=""&&typeof t[e]!="undefined")return t[e];if(e.indexOf("-")>0){var n=e.split("-");e=n[0];for(i=1;i<n.length;i++)e+=n[i].substr(0,1).toUpperCase()+n[i].substr(1).toLowerCase()}return e},String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")},__FlyDOM_parseAttrs=function(element,attrs){for(attr in attrs){var attrName=attr,attrValue=attrs[attr];switch(attrName){case"style":if(typeof attrValue=="string"){var params=attrValue.split(";");for(var i=0;i<params.length;i++)if(params[i].trim()!=""){var styleName=params[i].split(":")[0].trim(),styleValue=params[i].split(":")[1].trim();styleName=styleName.toCamelCase(),styleName!=""&&(element.style[styleName]=styleValue)}}else if(typeof attrValue=="object")for(styleName in attrValue){var styleNameCamel=styleName.toCamelCase();styleName.trim()!=""&&(element.style[styleNameCamel]=attrValue[styleName])}break;default:if(attrName.substr(0,2)=="on"){var event=attrName.substr(2);attrValue=typeof attrValue!="function"?eval("f = function() { "+attrValue+"}"):attrValue,jQuery(element).bind(event,attrValue)}else element[attrName.toCamelCase()]=attrValue}}return element},__FlyDOM_setText=function(e,t){var n=/(<\S[^><]*>)|(&.+;)/g;if(t.match(n)!=null&&e.tagName.toUpperCase()!="TEXTAREA")e.innerHTML=t;else{var r=document.createTextNode(t);e.appendChild(r)}return e};