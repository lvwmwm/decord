// Module ID: 6281
// Function ID: 6282
// Name: CheckpointUtils
// Dependencies: [5701, 6282, 1112, 6283, 6284, 6285, 6286, 6287, 6288, 6289, 6290, 6291, 6292, 2]
// Exports: getAccessibleVoiceDurationString, getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 6281 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 5701 */;
import getTimestampString from "getTimestampString" /* 6282 */;
import _modDef6283 from "module_6283" /* 6283 */;
import _modDef6284 from "module_6284" /* 6284 */;
import _modDef6285 from "module_6285" /* 6285 */;
import _modDef6286 from "module_6286" /* 6286 */;
import _modDef6287 from "module_6287" /* 6287 */;
import _modDef6288 from "module_6288" /* 6288 */;
import _modDef6289 from "module_6289" /* 6289 */;
import _modDef6290 from "module_6290" /* 6290 */;
import _modDef6291 from "module_6291" /* 6291 */;
import _modDef6292 from "module_6292" /* 6292 */;
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
    const intl3 = tmp(1112).intl;
    return intl3.formatToPlainString(time2.minutes, { minutes: 0 });
  } else {
    let formatToPlainStringResult;
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === TimeUtils.TimeUnits.HOURS) {
      const intl2 = tmp(1112).intl;
      const obj3 = { hours: rounded };
      formatToPlainStringResult = intl2.formatToPlainString(time2.hours, obj3);
    } else {
      const intl = tmp(1112).intl;
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
    const intl2 = tmp(1112).intl;
    const obj2 = { hours: roundResult };
    formatToPlainStringResult = intl2.formatToPlainString(tmp(1112).t.xCjYxK, obj2);
  } else {
    const intl = tmp(1112).intl;
    const obj3 = { minutes: roundResult };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1112).t.iXLF9W, obj3);
  }
  return formatToPlainStringResult;
}
export function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef6283;
  } else if (1 === cardId) {
    return _modDef6284;
  } else if (2 === cardId) {
    return _modDef6285;
  } else if (3 === cardId) {
    return _modDef6286;
  } else if (4 === cardId) {
    return _modDef6287;
  } else if (5 === cardId) {
    return _modDef6288;
  } else if (6 === cardId) {
    return _modDef6289;
  } else if (7 === cardId) {
    return _modDef6290;
  } else if (8 === cardId) {
    return _modDef6291;
  } else {
    return _modDef6292;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}
