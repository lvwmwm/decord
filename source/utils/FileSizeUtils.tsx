// Module ID: 4023
// Function ID: 33497
// Name: formatSize
// Dependencies: []
// Exports: formatKbSize

// Module 4023 (formatSize)
function formatSize(result, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_3;
  }
  let num = 1000;
  let num2 = 1000;
  if (tmp.useKibibytes) {
    num2 = closure_2;
  }
  if (tmp.useKibibytes) {
    num = 1024;
  }
  const rounded = Math.ceil(result / num2);
  if (rounded < num) {
    const intl2 = require(dependencyMap[0]).intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t2 = require(dependencyMap[0]).t;
    if (tmp.useSpace) {
      let obj = { size: rounded };
      let formatToPlainString2Result = formatToPlainString2(t2.cS889N, obj);
    } else {
      obj = { size: rounded };
      formatToPlainString2Result = formatToPlainString2(t2.pIn7Af, obj);
    }
    return formatToPlainString2Result;
  } else {
    result = rounded / num;
    const _Math = Math;
    if (tmp.showDecimalForGB) {
      let result1 = round(10 * result) / 10;
    } else {
      result1 = round(result);
    }
    const intl = require(dependencyMap[0]).intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = require(dependencyMap[0]).t;
    if (tmp.useSpace) {
      const obj1 = { size: result1 };
      let formatToPlainStringResult = formatToPlainString(t.yhEXX7, obj1);
    } else {
      obj = { size: result1 };
      formatToPlainStringResult = formatToPlainString(t.TbMX9D, obj);
    }
    return formatToPlainStringResult;
  }
}
let closure_2 = 1024;
let closure_3 = { children: "hidden", color: "all", variant: true };
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("utils/FileSizeUtils.tsx");

export const BYTE_IN_KB = 1024;
export const KB_IN_MB = 1024;
export { formatSize };
export const formatKbSize = function formatKbSize(MAX_STICKER_FILE_SIZE, arg1) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = closure_3;
  }
  let num = 1000;
  let num2 = 1000;
  if (tmp.useKibibytes) {
    num2 = 1024;
  }
  const result = MAX_STICKER_FILE_SIZE / num2;
  if (tmp.useKibibytes) {
    num = closure_2;
  }
  if (result / num >= 1) {
    let formatToPlainStringResult = formatSize(result, tmp);
  } else {
    const intl = require(dependencyMap[0]).intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = require(dependencyMap[0]).t;
    if (tmp.useSpace) {
      let obj = {};
      const _Math2 = Math;
      obj.size = Math.ceil(result);
      formatToPlainStringResult = formatToPlainString(t.bTzRR6, obj);
    } else {
      obj = {};
      const _Math = Math;
      obj.size = Math.ceil(result);
      formatToPlainStringResult = formatToPlainString(t.kEk9pr, obj);
    }
  }
  return formatToPlainStringResult;
};
