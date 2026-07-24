// Module ID: 1827
// Function ID: 20019
// Name: shortenAndLocalizeNumber
// Dependencies: [1212, 2]
// Exports: formatPercent, humanizeValue, parseInteger, shortenAndLocalizeNumber

// Module 1827 (shortenAndLocalizeNumber)
let result = require("set").fileFinishedImporting("utils/NumberUtils.tsx");

export const shortenAndLocalizeNumber = function shortenAndLocalizeNumber(count) {
  if (count < 1000000) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let obj = { value: count };
    return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.OiHat3, obj);
  } else {
    const result = count / 1000000;
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { value: result.toFixed(1) };
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t.Iku48I, obj);
  }
};
export const humanizeValue = function humanizeValue(newPostCount, stateFromStores) {
  if (newPostCount < 1000) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    let obj = {};
    const _Math2 = Math;
    obj.value = Math.floor(newPostCount);
    return intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.OiHat3, obj);
  } else if (newPostCount < 1000000) {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = {};
    const _Math = Math;
    obj.value = Math.floor(newPostCount / 1000);
    return intl.formatToPlainString(require(1212) /* getSystemLocale */.t["84R4Tc"], obj);
  } else {
    const _Math3 = Math;
    const _Intl = Intl;
    obj = { maximumFractionDigits: 1 };
    const prototype = NumberFormat.prototype;
    const result = Math.floor(10 * newPostCount / 1000000) / 10;
    const numberFormat = new NumberFormat(stateFromStores, obj);
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj1 = { value: numberFormat.format(result) };
    return intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.Iku48I, obj1);
  }
};
export const parseInteger = function parseInteger(discriminator, arg1) {
  let _NaN = arg1;
  if (arg1 === undefined) {
    _NaN = NaN;
  }
  if (null == discriminator) {
    return _NaN;
  } else {
    const _parseInt = parseInt;
    let parsed = parseInt(discriminator);
    const _Number = Number;
    if (Number.isNaN(parsed)) {
      parsed = _NaN;
    }
    return parsed;
  }
};
export const formatPercent = function formatPercent(arg0, arg1) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  obj = { style: "percent", minimumFractionDigits: 0 };
  const merged = Object.assign(obj);
  return Intl.NumberFormat(arg0, obj).format(arg1);
};
