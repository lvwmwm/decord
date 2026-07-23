// Module ID: 11912
// Function ID: 92175
// Name: formatDuration
// Dependencies: [11901, 3800, 1212, 664, 1327, 2]
// Exports: default

// Module 11912 (formatDuration)
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
    formatTimeResult = intl.formatToPlainString(tmp5(1212).t.bI7n9i, obj);
  }
  return formatTimeResult;
}
const result = require("getSystemLocale").fileFinishedImporting("modules/custom_status/utils/formatClearAfterValue.tsx");

export default function formatClearAfterValue(arg0) {
  if (ClearAfterValues.TODAY === arg0) {
    return formatDuration(importDefault(664).Millis.DAY);
  } else if (ClearAfterValues.HOURS_4 === arg0) {
    return formatDuration(4 * importDefault(664).Millis.HOUR);
  } else if (ClearAfterValues.HOURS_1 === arg0) {
    return formatDuration(importDefault(664).Millis.HOUR);
  } else if (ClearAfterValues.MINUTES_30 === arg0) {
    return formatDuration(30 * importDefault(664).Millis.MINUTE);
  } else if (ClearAfterValues.DONT_CLEAR === arg0) {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.bRn8cq);
  } else {
    require(1327) /* isDiscordFrontendDevelopment */.assertNever(arg0);
  }
};
