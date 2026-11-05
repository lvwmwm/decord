// Module ID: 6213
// Function ID: 6214
// Name: CheckpointUtils
// Dependencies: [5909, 6214, 1113, 6215, 6216, 6217, 6218, 6219, 6220, 6221, 6222, 6223, 6224, 2]
// Exports: getAccessibleVoiceDurationString, getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 6213 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 5909 */;
import getTimestampString from "getTimestampString" /* 6214 */;
import _modDef6215 from "module_6215" /* 6215 */;
import _modDef6216 from "module_6216" /* 6216 */;
import _modDef6217 from "module_6217" /* 6217 */;
import _modDef6218 from "module_6218" /* 6218 */;
import _modDef6219 from "module_6219" /* 6219 */;
import _modDef6220 from "module_6220" /* 6220 */;
import _modDef6221 from "module_6221" /* 6221 */;
import _modDef6222 from "module_6222" /* 6222 */;
import _modDef6223 from "module_6223" /* 6223 */;
import _modDef6224 from "module_6224" /* 6224 */;
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
    return _modDef6215;
  } else if (1 === cardId) {
    return _modDef6216;
  } else if (2 === cardId) {
    return _modDef6217;
  } else if (3 === cardId) {
    return _modDef6218;
  } else if (4 === cardId) {
    return _modDef6219;
  } else if (5 === cardId) {
    return _modDef6220;
  } else if (6 === cardId) {
    return _modDef6221;
  } else if (7 === cardId) {
    return _modDef6222;
  } else if (8 === cardId) {
    return _modDef6223;
  } else {
    return _modDef6224;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}
