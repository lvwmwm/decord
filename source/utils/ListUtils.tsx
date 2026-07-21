// Module ID: 11641
// Function ID: 90354
// Name: getListSummaryLabel
// Dependencies: []
// Exports: getListSummaryLabel

// Module 11641 (getListSummaryLabel)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("utils/ListUtils.tsx");

export const getListSummaryLabel = function getListSummaryLabel(names, length) {
  if (null == length) {
    length = names.length;
  }
  let num = 0;
  if (0 === length) {
    return "";
  } else if (1 === length) {
    const intl4 = require(dependencyMap[num]).intl;
    let obj = {};
    num = names[num];
    obj.first = num;
    let formatToPlainStringResult = intl4.formatToPlainString(require(dependencyMap[num]).t.8s9z8P, obj);
  } else if (2 === length) {
    const intl3 = require(dependencyMap[num]).intl;
    obj = { first: names[num], second: names[1] };
    formatToPlainStringResult = intl3.formatToPlainString(require(dependencyMap[num]).t.i0K/dw, obj);
  } else if (3 === length) {
    const intl2 = require(dependencyMap[num]).intl;
    const obj1 = { first: names[num], second: names[1], third: names[2] };
    formatToPlainStringResult = intl2.formatToPlainString(require(dependencyMap[num]).t./KSOKY, obj1);
  } else {
    const intl = require(dependencyMap[num]).intl;
    obj = { first: names[num], second: names[1], third: names[2], count: length - 3 };
    formatToPlainStringResult = intl.formatToPlainString(require(dependencyMap[num]).t.xpU76u, obj);
  }
};
