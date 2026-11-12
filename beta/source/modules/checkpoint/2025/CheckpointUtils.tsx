// Module ID: 6240
// Function ID: 6241
// Name: CheckpointUtils
// Dependencies: [5933, 6241, 1113, 6242, 6243, 6244, 6245, 6246, 6247, 6248, 6249, 6250, 6251, 2]
// Exports: getAccessibleVoiceDurationString, getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 6240 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 5933 */;
import getTimestampString from "getTimestampString" /* 6241 */;
import _modDef6242 from "module_6242" /* 6242 */;
import _modDef6243 from "module_6243" /* 6243 */;
import _modDef6244 from "module_6244" /* 6244 */;
import _modDef6245 from "module_6245" /* 6245 */;
import _modDef6246 from "module_6246" /* 6246 */;
import _modDef6247 from "module_6247" /* 6247 */;
import _modDef6248 from "module_6248" /* 6248 */;
import _modDef6249 from "module_6249" /* 6249 */;
import _modDef6250 from "module_6250" /* 6250 */;
import _modDef6251 from "module_6251" /* 6251 */;
import size from "module_2" /* 2 */;

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/2025/CheckpointUtils.tsx");

export function getVoiceDurationString(totalVoiceMinutes) {
  let time;
  let unit;
  const obj = TimeUtils;
  const timeAndUnit = obj.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const obj2 = getTimestampString;
  const time2 = obj2.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = tmp(1113).intl;
    return intl3.formatToPlainString(time2.minutes, { minutes: 0 });
  } else {
    let formatToPlainStringResult;
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === TimeUtils.TimeUnits.HOURS) {
      const intl2 = tmp(1113).intl;
      const obj3 = { hours: rounded };
      formatToPlainStringResult = intl2.formatToPlainString(time2.hours, obj3);
    } else {
      const intl = tmp(1113).intl;
      const obj4 = { minutes: rounded };
      formatToPlainStringResult = intl.formatToPlainString(time2.minutes, obj4);
    }
    return formatToPlainStringResult;
  }
}
export function getAccessibleVoiceDurationString(rounded) {
  let formatToPlainStringResult;
  const obj = TimeUtils;
  const timeAndUnit = obj.getTimeAndUnit(rounded, items);
  let num = timeAndUnit.time;
  const unit = timeAndUnit.unit;
  const _Math = Math;
  if (num == null) {
    num = 0;
  }
  const roundResult = round(num);
  if (unit === TimeUtils.TimeUnits.HOURS) {
    const intl2 = tmp(1113).intl;
    const obj2 = { hours: roundResult };
    formatToPlainStringResult = intl2.formatToPlainString(tmp(1113).t.xCjYxK, obj2);
  } else {
    const intl = tmp(1113).intl;
    const obj3 = { minutes: roundResult };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1113).t.iXLF9W, obj3);
  }
  return formatToPlainStringResult;
}
export function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef6242;
  } else if (1 === cardId) {
    return _modDef6243;
  } else if (2 === cardId) {
    return _modDef6244;
  } else if (3 === cardId) {
    return _modDef6245;
  } else if (4 === cardId) {
    return _modDef6246;
  } else if (5 === cardId) {
    return _modDef6247;
  } else if (6 === cardId) {
    return _modDef6248;
  } else if (7 === cardId) {
    return _modDef6249;
  } else if (8 === cardId) {
    return _modDef6250;
  } else {
    return _modDef6251;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}
