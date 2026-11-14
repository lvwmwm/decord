// Module ID: 6386
// Function ID: 6387
// Name: CheckpointUtils
// Dependencies: [6079, 6387, 1113, 6388, 6389, 6390, 6391, 6392, 6393, 6394, 6395, 6396, 6397, 2]
// Exports: getAccessibleVoiceDurationString, getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 6386 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 6079 */;
import getTimestampString from "getTimestampString" /* 6387 */;
import _modDef6388 from "module_6388" /* 6388 */;
import _modDef6389 from "module_6389" /* 6389 */;
import _modDef6390 from "module_6390" /* 6390 */;
import _modDef6391 from "module_6391" /* 6391 */;
import _modDef6392 from "module_6392" /* 6392 */;
import _modDef6393 from "module_6393" /* 6393 */;
import _modDef6394 from "module_6394" /* 6394 */;
import _modDef6395 from "module_6395" /* 6395 */;
import _modDef6396 from "module_6396" /* 6396 */;
import _modDef6397 from "module_6397" /* 6397 */;
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
    return _modDef6388;
  } else if (1 === cardId) {
    return _modDef6389;
  } else if (2 === cardId) {
    return _modDef6390;
  } else if (3 === cardId) {
    return _modDef6391;
  } else if (4 === cardId) {
    return _modDef6392;
  } else if (5 === cardId) {
    return _modDef6393;
  } else if (6 === cardId) {
    return _modDef6394;
  } else if (7 === cardId) {
    return _modDef6395;
  } else if (8 === cardId) {
    return _modDef6396;
  } else {
    return _modDef6397;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}
