// Module ID: 6025
// Function ID: 6026
// Name: CheckpointUtils
// Dependencies: [5723, 6026, 1125, 6027, 6028, 6029, 6030, 6031, 6032, 6033, 6034, 6035, 6036, 2]
// Exports: getAccessibleVoiceDurationString, getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 6025 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 5723 */;
import getTimestampString from "getTimestampString" /* 6026 */;
import _modDef6027 from "module_6027" /* 6027 */;
import _modDef6028 from "module_6028" /* 6028 */;
import _modDef6029 from "module_6029" /* 6029 */;
import _modDef6030 from "module_6030" /* 6030 */;
import _modDef6031 from "module_6031" /* 6031 */;
import _modDef6032 from "module_6032" /* 6032 */;
import _modDef6033 from "module_6033" /* 6033 */;
import _modDef6034 from "module_6034" /* 6034 */;
import _modDef6035 from "module_6035" /* 6035 */;
import _modDef6036 from "module_6036" /* 6036 */;
import size from "module_2" /* 2 */;

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/2025/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(rounded) {
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
};
export const getAccessibleVoiceDurationString = function getAccessibleVoiceDurationString(rounded) {
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
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef6027;
  } else if (1 === cardId) {
    return _modDef6028;
  } else if (2 === cardId) {
    return _modDef6029;
  } else if (3 === cardId) {
    return _modDef6030;
  } else if (4 === cardId) {
    return _modDef6031;
  } else if (5 === cardId) {
    return _modDef6032;
  } else if (6 === cardId) {
    return _modDef6033;
  } else if (7 === cardId) {
    return _modDef6034;
  } else if (8 === cardId) {
    return _modDef6035;
  } else {
    return _modDef6036;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
};
