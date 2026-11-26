// Module ID: 6407
// Function ID: 6408
// Name: CheckpointUtils
// Dependencies: [5827, 6408, 1112, 6409, 6410, 6411, 6412, 6413, 6414, 6415, 6416, 6417, 6418, 2]
// Exports: getAccessibleVoiceDurationString, getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 6407 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 5827 */;
import getTimestampString from "getTimestampString" /* 6408 */;
import _modDef6409 from "module_6409" /* 6409 */;
import _modDef6410 from "module_6410" /* 6410 */;
import _modDef6411 from "module_6411" /* 6411 */;
import _modDef6412 from "module_6412" /* 6412 */;
import _modDef6413 from "module_6413" /* 6413 */;
import _modDef6414 from "module_6414" /* 6414 */;
import _modDef6415 from "module_6415" /* 6415 */;
import _modDef6416 from "module_6416" /* 6416 */;
import _modDef6417 from "module_6417" /* 6417 */;
import _modDef6418 from "module_6418" /* 6418 */;
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
    return _modDef6409;
  } else if (1 === cardId) {
    return _modDef6410;
  } else if (2 === cardId) {
    return _modDef6411;
  } else if (3 === cardId) {
    return _modDef6412;
  } else if (4 === cardId) {
    return _modDef6413;
  } else if (5 === cardId) {
    return _modDef6414;
  } else if (6 === cardId) {
    return _modDef6415;
  } else if (7 === cardId) {
    return _modDef6416;
  } else if (8 === cardId) {
    return _modDef6417;
  } else {
    return _modDef6418;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}
