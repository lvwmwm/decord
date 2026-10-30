// Module ID: 6070
// Function ID: 6071
// Name: CheckpointUtils
// Dependencies: [5767, 6071, 1114, 6072, 6073, 6074, 6075, 6076, 6077, 6078, 6079, 6080, 6081, 2]
// Exports: getAccessibleVoiceDurationString, getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 6070 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 5767 */;
import getTimestampString from "getTimestampString" /* 6071 */;
import _modDef6072 from "module_6072" /* 6072 */;
import _modDef6073 from "module_6073" /* 6073 */;
import _modDef6074 from "module_6074" /* 6074 */;
import _modDef6075 from "module_6075" /* 6075 */;
import _modDef6076 from "module_6076" /* 6076 */;
import _modDef6077 from "module_6077" /* 6077 */;
import _modDef6078 from "module_6078" /* 6078 */;
import _modDef6079 from "module_6079" /* 6079 */;
import _modDef6080 from "module_6080" /* 6080 */;
import _modDef6081 from "module_6081" /* 6081 */;
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
    const intl3 = tmp(1114).intl;
    return intl3.formatToPlainString(time2.minutes, { minutes: 0 });
  } else {
    let formatToPlainStringResult;
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === TimeUtils.TimeUnits.HOURS) {
      const intl2 = tmp(1114).intl;
      const obj3 = { hours: rounded };
      formatToPlainStringResult = intl2.formatToPlainString(time2.hours, obj3);
    } else {
      const intl = tmp(1114).intl;
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
    const intl2 = tmp(1114).intl;
    const obj2 = { hours: roundResult };
    formatToPlainStringResult = intl2.formatToPlainString(tmp(1114).t.xCjYxK, obj2);
  } else {
    const intl = tmp(1114).intl;
    const obj3 = { minutes: roundResult };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1114).t.iXLF9W, obj3);
  }
  return formatToPlainStringResult;
}
export function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef6072;
  } else if (1 === cardId) {
    return _modDef6073;
  } else if (2 === cardId) {
    return _modDef6074;
  } else if (3 === cardId) {
    return _modDef6075;
  } else if (4 === cardId) {
    return _modDef6076;
  } else if (5 === cardId) {
    return _modDef6077;
  } else if (6 === cardId) {
    return _modDef6078;
  } else if (7 === cardId) {
    return _modDef6079;
  } else if (8 === cardId) {
    return _modDef6080;
  } else {
    return _modDef6081;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}
