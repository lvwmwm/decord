// Module ID: 2031
// Function ID: 2032
// Name: utils/StringUtils
// Dependencies: [2032, 2, 2033]
// Exports: getAcronym, truncateText, upperCaseFirstChar

// Module 2031 (utils/StringUtils)
import _mod2032 from "module_2032" /* 2032 */;
import DOMUtils from "DOMUtils" /* 2033 */;
import size from "module_2" /* 2 */;

let closure_1, dependencyMap;

let fn;
let fullNormalize;
const re2 = /[\u0300-\u036f]/g;
const re3 = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
if (null == String.prototype.normalize) {
  fn = (arg0) => arg0;
} else {
  fn = (str) => {
    str = str.normalize("NFD");
    const normalizer = str.replace(re2, "");
    return normalizer.normalize("NFC");
  };
}
if (null == String.prototype.normalize) {
  fullNormalize = (arg0) => arg0;
} else {
  fullNormalize = function fullNormalize(str) {
    let closure_0 = _mod2032;
    dependencyMap = "";
    const items = [...str.normalize("NFD")];
    const item = items.forEach((item) => {
      let tmp2 = closure_0[item];
      const tmp = closure_1;
      if (tmp2 == null) {
        tmp2 = item;
      }
      closure_1 = tmp + tmp2;
    });
    const normalizeResult = dependencyMap.normalize("NFD");
    return normalizeResult.toLocaleLowerCase();
  };
}
const result = size.fileFinishedImporting("../discord_common/js/shared/utils/StringUtils.tsx");

export const cssValueToNumber = DOMUtils.cssValueToNumber;
export const upperCaseFirstChar = function upperCaseFirstChar(item) {
  let str = "";
  if (null != item) {
    const str2 = item.charAt(0);
    const formatted = str2.toUpperCase();
    const _HermesInternal = HermesInternal;
    str = "" + formatted + item.slice(1);
  }
  return str;
};
export const truncateText = (str, arg1) => {
  str = arg2;
  if (arg2 === undefined) {
    str = "\u2026";
  }
  let str2 = "";
  if (null != str) {
    str2 = "";
    if (null != arg1) {
      let combined = str;
      if (str.length > arg1) {
        let str3;
        if (re3.test(str)) {
          const items = [];
          HermesBuiltin.arraySpread(items, str, 0);
          const substr = items.slice(0, arg1 - str.length);
          str3 = substr.join("");
        } else {
          str3 = str.substring(0, arg1 - str.length);
        }
        const _HermesInternal = HermesInternal;
        combined = "" + str3.replace(/[\s.]+$/, "") + str;
      }
      str2 = combined;
    }
  }
  return str2;
};
export const getAcronym = function getAcronym(name) {
  let str = "";
  if (null != name) {
    const str3 = name.replace(/'s /g, " ");
    const str4 = str3.replace(/\w+/g, (arg0) => arg0[0]);
    str = str4.replace(/\s/g, "");
  }
  return str;
};
export const stripDiacritics = fn;
export const normalize = fullNormalize;
