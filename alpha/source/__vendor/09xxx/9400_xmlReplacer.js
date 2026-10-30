// Module ID: 9400
// Function ID: 9401
// Name: xmlReplacer
// Dependencies: []
// Exports: encodeXML, escape, escapeAttribute, escapeText, escapeUTF8

// Module 9400 (xmlReplacer)
export function escape(str) {
  let match = re0.exec(str);
  str = "";
  let num = 0;
  let str2 = "";
  let num2 = 0;
  while (match) {
    let text = str;
    if (num !== match.index) {
      text = `${str.substring(num, tmp.index)}`;
    }
    let first = match[0];
    str = text + map2.get(first.charCodeAt(0));
    num = match.index + 1;
    match = re0.exec(str);
    str2 = str;
    num2 = num;
  }
  return str2 + str.substring(num2);
}
const items = [[34, "&quot;"], [38, "&amp;"], [39, "&apos;"], [60, "&lt;"], [62, "&gt;"]];
const map = new Map(items);
function encodeXML(attribs) {
  const xmlReplacer = exports.xmlReplacer;
  let match = xmlReplacer.exec(attribs);
  let num = 0;
  const str = "";
  let num2 = 0;
  let str2 = "";
  if (null !== match) {
    do {
      let text;
      let sum;
      let index = match.index;
      let charCodeAtResult = attribs.charCodeAt(index);
      let value = map.get(charCodeAtResult);
      if (undefined !== value) {
        text = `${attribs.substring(num, index) + tmp4}`;
        sum = index + 1;
      } else {
        let concat = "".concat;
        let combined = "".concat(attribs.substring(num, index), "&#x");
        let concat2 = combined.concat;
        let str3 = exports.getCodePoint(attribs, index);
        text = `${concat2(str3.toString(16), ";")}`;
        let xmlReplacer2 = exports.xmlReplacer;
        let _Number = Number;
        sum = xmlReplacer2.lastIndex + Number(55296 === (64512 & charCodeAtResult));
        xmlReplacer2.lastIndex = sum;
      }
      let xmlReplacer3 = exports.xmlReplacer;
      match = xmlReplacer3.exec(attribs);
      num = sum;
      num2 = sum;
      str2 = text;
    } while (null !== match);
  }
  return str2 + attribs.substr(num2);
}
let re0 = /[&<>'"]/g;
const items1 = [[34, "&quot;"], [38, "&amp;"], [160, "&nbsp;"]];
new Map(items1);
re0 = /["&\u00A0]/g;
const items2 = [[38, "&amp;"], [60, "&lt;"], [62, "&gt;"], [160, "&nbsp;"]];
const map2 = new Map(items2);
re0 = /[&<>\u00A0]/g;
const xmlReplacer_export = /["&'<>$\x80-\uFFFF]/g;

export { xmlReplacer_export as xmlReplacer };
export const getCodePoint = null != String.prototype.codePointAt ? ((str, arg1) => str.codePointAt(arg1)) : ((str, sum) => {
  if (55296 === (64512 & str.charCodeAt(sum))) {
    const diff = str.charCodeAt(sum) - 55296;
    sum = 1024 * diff + str.charCodeAt(sum + 1) - 56320 + 65536;
  } else {
    sum = str.charCodeAt(sum);
  }
  return sum;
});
export { encodeXML };
export const escapeUTF8 = escape;
export const escapeAttribute = escape;
export const escapeText = escape;
