// Module ID: 6022
// Function ID: 6023
// Name: CheckpointUtils
// Dependencies: [5720, 6023, 1128, 6024, 6025, 6026, 6027, 6028, 6029, 6030, 6031, 6032, 6033, 2]
// Exports: getAccessibleVoiceDurationString, getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 6022 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 5720 */;
import getTimestampString from "getTimestampString" /* 6023 */;
import _modDef6024 from "module_6024" /* 6024 */;
import _modDef6025 from "module_6025" /* 6025 */;
import _modDef6026 from "module_6026" /* 6026 */;
import _modDef6027 from "module_6027" /* 6027 */;
import _modDef6028 from "module_6028" /* 6028 */;
import _modDef6029 from "module_6029" /* 6029 */;
import _modDef6030 from "module_6030" /* 6030 */;
import _modDef6031 from "module_6031" /* 6031 */;
import _modDef6032 from "module_6032" /* 6032 */;
import _modDef6033 from "module_6033" /* 6033 */;
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
    const intl3 = tmp(1128).intl;
    return intl3.formatToPlainString(time2.minutes, { minutes: 0 });
  } else {
    let formatToPlainStringResult;
    const _Math = Math;
    rounded = Math.round(time);
    if (unit === TimeUtils.TimeUnits.HOURS) {
      const intl2 = tmp(1128).intl;
      const obj3 = { hours: rounded };
      formatToPlainStringResult = intl2.formatToPlainString(time2.hours, obj3);
    } else {
      const intl = tmp(1128).intl;
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
    const intl2 = tmp(1128).intl;
    const obj2 = { hours: roundResult };
    formatToPlainStringResult = intl2.formatToPlainString(tmp(1128).t.xCjYxK, obj2);
  } else {
    const intl = tmp(1128).intl;
    const obj3 = { minutes: roundResult };
    formatToPlainStringResult = intl.formatToPlainString(tmp(1128).t.iXLF9W, obj3);
  }
  return formatToPlainStringResult;
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef6024;
  } else if (1 === cardId) {
    return _modDef6025;
  } else if (2 === cardId) {
    return _modDef6026;
  } else if (3 === cardId) {
    return _modDef6027;
  } else if (4 === cardId) {
    return _modDef6028;
  } else if (5 === cardId) {
    return _modDef6029;
  } else if (6 === cardId) {
    return _modDef6030;
  } else if (7 === cardId) {
    return _modDef6031;
  } else if (8 === cardId) {
    return _modDef6032;
  } else {
    return _modDef6033;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
};
