// Module ID: 11892
// Function ID: 92073
// Name: formatDuration
// Dependencies: []
// Exports: default

// Module 11892 (formatDuration)
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
    formatTimeResult = intl.formatToPlainString(tmp5(tmp6[2]).t.bI7n9i, obj);
  }
  return formatTimeResult;
}
const ClearAfterValues = require(dependencyMap[0]).ClearAfterValues;
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/custom_status/utils/formatClearAfterValue.tsx");

export default function formatClearAfterValue(arg0) {
  if (ClearAfterValues.TODAY === arg0) {
    return formatDuration(importDefault(dependencyMap[3]).Millis.DAY);
  } else if (ClearAfterValues.HOURS_4 === arg0) {
    return formatDuration(4 * importDefault(dependencyMap[3]).Millis.HOUR);
  } else if (ClearAfterValues.HOURS_1 === arg0) {
    return formatDuration(importDefault(dependencyMap[3]).Millis.HOUR);
  } else if (ClearAfterValues.MINUTES_30 === arg0) {
    return formatDuration(30 * importDefault(dependencyMap[3]).Millis.MINUTE);
  } else if (ClearAfterValues.DONT_CLEAR === arg0) {
    const intl = require(dependencyMap[2]).intl;
    return intl.string(require(dependencyMap[2]).t.bRn8cq);
  } else {
    require(dependencyMap[4]).assertNever(arg0);
  }
};
