// Module ID: 1882
// Function ID: 1883
// Name: NumberUtils
// Dependencies: [1883, 2]
// Exports: formatPercent, humanizeValue, parseInteger, shortenAndLocalizeNumber, truncateAndLocalizeNumber

// Module 1882 (NumberUtils)
import module_1883 from "module_1883" /* 1883 */;

let c1 = 1000000;
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/shared/utils/NumberUtils.tsx");

export const shortenAndLocalizeNumber = function shortenAndLocalizeNumber(count) {
  if (count < c1) {
    const _Intl = Intl;
    const numberFormat = new Intl.NumberFormat(module_1883.getLocale());
    return numberFormat.format(count);
  } else {
    const result = count / tmp;
    const NUMBER_ABBREVIATIONS_MILLION = module_1883.Messages.NUMBER_ABBREVIATIONS_MILLION;
    const obj = { num: result.toFixed(1) };
    return NUMBER_ABBREVIATIONS_MILLION.format(obj);
  }
};
export const humanizeValue = function humanizeValue(newPostCount, stateFromStores) {
  if (newPostCount < 1000) {
    const _Intl = Intl;
    const numberFormat = new Intl.NumberFormat(stateFromStores);
    const _Math2 = Math;
    return numberFormat.format(Math.floor(newPostCount));
  } else if (newPostCount < c1) {
    const NUMBER_ABBREVIATIONS_THOUSAND = module_1883.Messages.NUMBER_ABBREVIATIONS_THOUSAND;
    const obj = { num: null };
    const _Math = Math;
    obj.num = Math.floor(newPostCount / 1000);
    return NUMBER_ABBREVIATIONS_THOUSAND.format(obj);
  } else {
    const _Math3 = Math;
    const _Intl2 = Intl;
    const result = Math.floor(10 * newPostCount / tmp8) / 10;
    const numberFormat1 = new Intl.NumberFormat(stateFromStores, { maximumFractionDigits: 1 });
    const NUMBER_ABBREVIATIONS_MILLION = module_1883.Messages.NUMBER_ABBREVIATIONS_MILLION;
    const obj2 = { num: numberFormat1.format(result) };
    return NUMBER_ABBREVIATIONS_MILLION.format(obj2);
  }
};
export const truncateAndLocalizeNumber = (arg0, arg1) => {
  if (arg0 < 1000000) {
    const _Intl = Intl;
    let num2 = 1;
    if (tmp % 1 === 0) {
      num2 = 0;
    }
    const obj2 = { maximumFractionDigits: num2 };
    const numberFormat = new Intl.NumberFormat(arg1, obj2);
    return numberFormat.format(arg0);
  } else {
    const _Math = Math;
    const _Intl2 = Intl;
    let num = 1;
    if (Math.round(arg0 / 1000000 * 10) / 10 % 1 === 0) {
      num = 0;
    }
    const obj = { maximumFractionDigits: num };
    const numberFormat1 = new Intl.NumberFormat(arg1, obj);
    const NUMBER_ABBREVIATIONS_MILLION = module_1883.Messages.NUMBER_ABBREVIATIONS_MILLION;
    const obj3 = { num: numberFormat1.format(arg0 / 1000000) };
    return NUMBER_ABBREVIATIONS_MILLION.format(obj3);
  }
};
export const parseInteger = function parseInteger(discriminator, arg1) {
  let num = arg1;
  if (arg1 === undefined) {
    num = NaN;
  }
  if (null == discriminator) {
    return num;
  } else {
    const _parseInt = parseInt;
    let parsed = parseInt(discriminator);
    const _Number = Number;
    if (Number.isNaN(parsed)) {
      parsed = num;
    }
    return parsed;
  }
};
export const formatPercent = function formatPercent(arg0, arg1) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const merged = Object.assign(obj);
  return Intl.NumberFormat(arg0, { style: "percent", minimumFractionDigits: 0 }).format(arg1);
};
