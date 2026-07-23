// Module ID: 11911
// Function ID: 92172
// Name: formatDuration
// Dependencies: [11901, 3800, 1212, 664, 1327, 2]
// Exports: default

// Module 11911 (formatDuration)
import { ClearAfterValues } from "StatusTypes";

function formatDuration(arg0) {
  const sum = Date.now() + arg0;
  let obj = require(3800) /* resetCache */;
  const date = new Date();
  const date1 = new Date(sum);
  const intl = require(1212) /* getSystemLocale */.intl;
  if (isSameDayResult) {
    const data2 = intl.data;
    obj = { format: "short" };
    let formatTimeResult = data2.formatTime(sum, obj);
  } else {
    obj = {};
    const data = tmp5(1212).intl.data;
    const obj1 = { format: "short" };
    obj.time = data.formatTime(sum, obj1);
    formatTimeResult = intl.formatToPlainString(tmp5(1212).t.DN91Jz, obj);
  }
  return formatTimeResult;
}
const result = require("getSystemLocale").fileFinishedImporting("modules/custom_status/utils/formatClearAfterOption.tsx");

export default function formatClearAfterOption(arg0) {
  if (ClearAfterValues.TODAY === arg0) {
    const intl5 = require(1212) /* getSystemLocale */.intl;
    let obj = { hours: 24 };
    const formatToPlainStringResult = intl5.formatToPlainString(require(1212) /* getSystemLocale */.t.Rea2gR, obj);
    const _HermesInternal4 = HermesInternal;
    return "" + formatToPlainStringResult + " (" + formatDuration(importDefault(664).Millis.DAY) + ")";
  } else if (ClearAfterValues.HOURS_4 === arg0) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj = { hours: 4 };
    const formatToPlainStringResult1 = intl4.formatToPlainString(require(1212) /* getSystemLocale */.t.Rea2gR, obj);
    const _HermesInternal3 = HermesInternal;
    return "" + formatToPlainStringResult1 + " (" + formatDuration(4 * importDefault(664).Millis.HOUR) + ")";
  } else if (ClearAfterValues.HOURS_1 === arg0) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const obj1 = { hours: 1 };
    const formatToPlainStringResult2 = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.Rea2gR, obj1);
    const _HermesInternal2 = HermesInternal;
    return "" + formatToPlainStringResult2 + " (" + formatDuration(importDefault(664).Millis.HOUR) + ")";
  } else if (ClearAfterValues.MINUTES_30 === arg0) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj2 = { minutes: 30 };
    const formatToPlainStringResult3 = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t.TS3eJb, obj2);
    const _HermesInternal = HermesInternal;
    return "" + formatToPlainStringResult3 + " (" + formatDuration(30 * importDefault(664).Millis.MINUTE) + ")";
  } else if (ClearAfterValues.DONT_CLEAR === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.bRn8cq);
  } else {
    obj = require(1327) /* isDiscordFrontendDevelopment */;
    obj.assertNever(arg0);
  }
};
