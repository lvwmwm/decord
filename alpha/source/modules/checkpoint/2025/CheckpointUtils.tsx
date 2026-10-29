// Module ID: 6063
// Function ID: 6064
// Name: CheckpointUtils
// Dependencies: [5760, 6064, 1125, 6065, 6066, 6067, 6068, 6069, 6070, 6071, 6072, 6073, 6074, 2]
// Exports: getAccessibleVoiceDurationString, getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 6063 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 5760 */;
import getTimestampString from "getTimestampString" /* 6064 */;
import _modDef6065 from "module_6065" /* 6065 */;
import _modDef6066 from "module_6066" /* 6066 */;
import _modDef6067 from "module_6067" /* 6067 */;
import _modDef6068 from "module_6068" /* 6068 */;
import _modDef6069 from "module_6069" /* 6069 */;
import _modDef6070 from "module_6070" /* 6070 */;
import _modDef6071 from "module_6071" /* 6071 */;
import _modDef6072 from "module_6072" /* 6072 */;
import _modDef6073 from "module_6073" /* 6073 */;
import _modDef6074 from "module_6074" /* 6074 */;
import size from "module_2" /* 2 */;

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/2025/CheckpointUtils.tsx");

export function getVoiceDurationString(rounded) {
  let time;
  let unit;
  const obj = TimeUtils;
  const timeAndUnit = obj.getTimeAndUnit(rounded, items);
  ({ time, unit } = timeAndUnit);
  const obj2 = getTimestampString;
  const time2 = obj2.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = tmp(1125).intl;
    return intl3.formatToPlainString(time2.minutes, { minutes: 0 });
  } else {
    let formatToPlainStringResult;
    const _Math = Math;
    rounded = Math.round(time);
    if (unit === TimeUtils.TimeUnits.HOURS) {
      const intl2 = tmp(1125).intl;
      const obj3 = { hours: rounded };
      formatToPlainStringResult = intl2.formatToPlainString(time2.hours, obj3);
    } else {
      const intl = tmp(1125).intl;
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
    const intl2 = tmp(1125).intl;
    const obj2 = { hours: roundResult };
    formatToPlainStringResult = intl2.formatToPlainString(tmp(1125).t.xCjYxK, obj2);
  } else {
    const intl = tmp(1125).intl;
    const obj3 = { minutes: roundResult };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1125).t.iXLF9W, obj3);
  }
  return formatToPlainStringResult;
}
export function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef6065;
  } else if (1 === cardId) {
    return _modDef6066;
  } else if (2 === cardId) {
    return _modDef6067;
  } else if (3 === cardId) {
    return _modDef6068;
  } else if (4 === cardId) {
    return _modDef6069;
  } else if (5 === cardId) {
    return _modDef6070;
  } else if (6 === cardId) {
    return _modDef6071;
  } else if (7 === cardId) {
    return _modDef6072;
  } else if (8 === cardId) {
    return _modDef6073;
  } else {
    return _modDef6074;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}
