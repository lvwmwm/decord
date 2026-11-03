// Module ID: 6195
// Function ID: 6196
// Name: CheckpointUtils
// Dependencies: [5892, 6196, 1113, 6197, 6198, 6199, 6200, 6201, 6202, 6203, 6204, 6205, 6206, 2]
// Exports: getAccessibleVoiceDurationString, getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 6195 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 5892 */;
import getTimestampString from "getTimestampString" /* 6196 */;
import _modDef6197 from "module_6197" /* 6197 */;
import _modDef6198 from "module_6198" /* 6198 */;
import _modDef6199 from "module_6199" /* 6199 */;
import _modDef6200 from "module_6200" /* 6200 */;
import _modDef6201 from "module_6201" /* 6201 */;
import _modDef6202 from "module_6202" /* 6202 */;
import _modDef6203 from "module_6203" /* 6203 */;
import _modDef6204 from "module_6204" /* 6204 */;
import _modDef6205 from "module_6205" /* 6205 */;
import _modDef6206 from "module_6206" /* 6206 */;
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
    return _modDef6197;
  } else if (1 === cardId) {
    return _modDef6198;
  } else if (2 === cardId) {
    return _modDef6199;
  } else if (3 === cardId) {
    return _modDef6200;
  } else if (4 === cardId) {
    return _modDef6201;
  } else if (5 === cardId) {
    return _modDef6202;
  } else if (6 === cardId) {
    return _modDef6203;
  } else if (7 === cardId) {
    return _modDef6204;
  } else if (8 === cardId) {
    return _modDef6205;
  } else {
    return _modDef6206;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}
