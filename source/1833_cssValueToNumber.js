// Module ID: 1833
// Function ID: 20031
// Name: cssValueToNumber
// Dependencies: []
// Exports: getAcronym, truncateText, upperCaseFirstChar

// Module 1833 (cssValueToNumber)
let closure_2 = /[\u0300-\u036f]/g;
let closure_3 = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("../discord_common/js/shared/utils/StringUtils.tsx");

export const cssValueToNumber = require(dependencyMap[2]).cssValueToNumber;
export const upperCaseFirstChar = function upperCaseFirstChar(str) {
  str = "";
  if (null != str) {
    const formatted = str.charAt(0).toUpperCase();
    const _HermesInternal = HermesInternal;
    str = "" + formatted + str.slice(1);
    const str2 = str.charAt(0);
  }
  return str;
};
export const truncateText = (arg0, arg1) => {
  let concat = arg0;
  let str = arg2;
  if (arg2 === undefined) {
    str = "\u2026";
  }
  let str2 = "";
  if (null != concat) {
    str2 = "";
    if (null != arg1) {
      if (concat.length <= arg1) {
        str2 = concat;
      } else {
        if (regex.test(concat)) {
          const items = [];
          HermesBuiltin.arraySpread(concat, 0);
          const substr = items.slice(0, arg1 - str.length);
          let str3 = substr.join("");
        } else {
          str3 = concat.substring(0, arg1 - str.length);
        }
        const _HermesInternal = HermesInternal;
        concat = HermesInternal.concat;
        const combined = concat(str3.replace(/[\s.]+$/, ""), str);
      }
    }
  }
  return str2;
};
export const getAcronym = function getAcronym(str) {
  str = "";
  if (null != str) {
    const str3 = str.replace(/'s /g, " ");
    str = str.replace(/'s /g, " ").replace(/\w+/g, (arg0) => arg0[0]).replace(/\s/g, "");
    const str4 = str.replace(/'s /g, " ").replace(/\w+/g, (arg0) => arg0[0]);
  }
  return str;
};
export const stripDiacritics = null == String.prototype.normalize ? (arg0) => arg0 : (str) => {
  const replaced = str.normalize("NFD").replace(closure_2, "");
  return replaced.normalize("NFC");
};
export const normalize = null == String.prototype.normalize ? (arg0) => arg0 : function fullNormalize(str) {
  const callback = callback(dependencyMap[0]);
  const dependencyMap = "";
  const items = [...str.normalize("NFD")];
  const item = items.forEach((arg0) => {
    let tmp = arg0;
    if (null != closure_0[arg0]) {
      tmp = tmp3;
    }
    closure_1 = closure_1 + tmp;
  });
  return dependencyMap.normalize("NFD").toLocaleLowerCase();
};
