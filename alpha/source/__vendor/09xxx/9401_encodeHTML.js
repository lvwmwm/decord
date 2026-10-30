// Module ID: 9401
// Function ID: 9402
// Name: encodeHTML
// Dependencies: [9402, 9400]
// Exports: encodeHTML, encodeNonAsciiHTML

// Module 9401 (encodeHTML)
import xmlReplacer from "xmlReplacer" /* 9400 */;
import _Map12 from "_Map1" /* 9402 */;

function encodeHTMLTrieRe(re3, attribs) {
  let match = re3.exec(attribs);
  let num = 0;
  let num2 = 0;
  let str = "";
  if (null !== match) {
    while (true) {
      let sum2;
      let sum;
      let index = match.index;
      let text = `${attribs.substring(num, index)}`;
      let charCodeAtResult = attribs.charCodeAt(index);
      let _default = _Map1.default;
      let value = _default.get(charCodeAtResult);
      let v = value;
      if (typeof value === "object") {
        if (index + 1 < attribs.length) {
          let value2;
          let charCodeAtResult1 = attribs.charCodeAt(index + 1);
          if (typeof value.n === "number") {
            let o;
            if (value.n === charCodeAtResult1) {
              o = value.o;
            }
            value2 = o;
          } else {
            let n = value.n;
            value2 = n.get(charCodeAtResult1);
          }
          if (undefined !== value2) {
            sum = text + value2;
            let sum1 = re3.lastIndex + 1;
            re3.lastIndex = sum1;
            sum2 = sum1;
            match = re3.exec(attribs);
            num = sum2;
            num2 = sum2;
            str = sum;
            if (null === match) {
              break;
            }
          }
        }
        v = value.v;
      }
      if (undefined !== v) {
        sum = text + v;
        sum2 = index + 1;
      } else {
        let str2 = xmlReplacer.getCodePoint(attribs, index);
        let concat = "&#x".concat;
        sum = text + "&#x".concat(str2.toString(16), ";");
        let _Number = Number;
        sum2 = re3.lastIndex + Number(str2 !== charCodeAtResult);
        re3.lastIndex = sum2;
      }
    }
  }
  return str + attribs.substr(num2);
}
const fn = this && this.__importDefault || ((__esModule) => {
  let tmp2;
  const tmp = __esModule;
  if (!tmp) {
    tmp2 = { default: __esModule };
    const obj = { default: __esModule };
  } else {
    tmp2 = __esModule;
  }
  return tmp2;
});
const _Map1 = fn(_Map12);
const re3 = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;

export function encodeHTML(attribs) {
  return encodeHTMLTrieRe(re3, attribs);
}
export function encodeNonAsciiHTML(attribs) {
  return encodeHTMLTrieRe(xmlReplacer.xmlReplacer, attribs);
}
