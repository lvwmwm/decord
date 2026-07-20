// Module ID: 11891
// Function ID: 92070
// Name: formatDuration
// Dependencies: []
// Exports: default

// Module 11891 (formatDuration)
function formatDuration(arg0) {
  const sum = Date.now() + arg0;
  let obj = require(dependencyMap[1]);
  const date = new Date();
  const date1 = new Date(sum);
  const intl = require(dependencyMap[2]).intl;
  if (isSameDayResult) {
    const data2 = intl.data;
    obj = { format: "short" };
    let formatTimeResult = data2.formatTime(sum, obj);
  } else {
    obj = {};
    const data = tmp5(tmp6[2]).intl.data;
    const obj1 = { format: "short" };
    obj.time = data.formatTime(sum, obj1);
    formatTimeResult = intl.formatToPlainString(tmp5(tmp6[2]).t.DN91Jz, obj);
  }
  return formatTimeResult;
}
const ClearAfterValues = require(dependencyMap[0]).ClearAfterValues;
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/custom_status/utils/formatClearAfterOption.tsx");

export default function formatClearAfterOption(arg0) {
  if (ClearAfterValues.TODAY === arg0) {
    const intl5 = require(dependencyMap[2]).intl;
    let obj = { hours: 24 };
    const formatToPlainStringResult = intl5.formatToPlainString(require(dependencyMap[2]).t.Rea2gR, obj);
    const _HermesInternal4 = HermesInternal;
    return "" + formatToPlainStringResult + " (" + formatDuration(importDefault(dependencyMap[3]).Millis.DAY) + ")";
  } else if (ClearAfterValues.HOURS_4 === arg0) {
    const intl4 = require(dependencyMap[2]).intl;
    obj = { hours: 4 };
    const formatToPlainStringResult1 = intl4.formatToPlainString(require(dependencyMap[2]).t.Rea2gR, obj);
    const _HermesInternal3 = HermesInternal;
    return "" + formatToPlainStringResult1 + " (" + formatDuration(4 * importDefault(dependencyMap[3]).Millis.HOUR) + ")";
  } else if (ClearAfterValues.HOURS_1 === arg0) {
    const intl3 = require(dependencyMap[2]).intl;
    const obj1 = { hours: 1 };
    const formatToPlainStringResult2 = intl3.formatToPlainString(require(dependencyMap[2]).t.Rea2gR, obj1);
    const _HermesInternal2 = HermesInternal;
    return "" + formatToPlainStringResult2 + " (" + formatDuration(importDefault(dependencyMap[3]).Millis.HOUR) + ")";
  } else if (ClearAfterValues.MINUTES_30 === arg0) {
    const intl2 = require(dependencyMap[2]).intl;
    const obj2 = { minutes: 30 };
    const formatToPlainStringResult3 = intl2.formatToPlainString(require(dependencyMap[2]).t.TS3eJb, obj2);
    const _HermesInternal = HermesInternal;
    return "" + formatToPlainStringResult3 + " (" + formatDuration(30 * importDefault(dependencyMap[3]).Millis.MINUTE) + ")";
  } else if (ClearAfterValues.DONT_CLEAR === arg0) {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.bRn8cq);
  } else {
    obj = require(dependencyMap[4]);
    obj.assertNever(arg0);
  }
};
