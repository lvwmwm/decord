// Module ID: 6011
// Function ID: 6012
// Name: CheckpointUtils
// Dependencies: [5708, 6012, 1128, 6013, 6014, 6015, 6016, 6017, 6018, 6019, 6020, 6021, 6022, 2]
// Exports: getAccessibleVoiceDurationString, getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 6011 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 5708 */;
import getTimestampString from "getTimestampString" /* 6012 */;
import _modDef6013 from "module_6013" /* 6013 */;
import _modDef6014 from "module_6014" /* 6014 */;
import _modDef6015 from "module_6015" /* 6015 */;
import _modDef6016 from "module_6016" /* 6016 */;
import _modDef6017 from "module_6017" /* 6017 */;
import _modDef6018 from "module_6018" /* 6018 */;
import _modDef6019 from "module_6019" /* 6019 */;
import _modDef6020 from "module_6020" /* 6020 */;
import _modDef6021 from "module_6021" /* 6021 */;
import _modDef6022 from "module_6022" /* 6022 */;
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
    return _modDef6013;
  } else if (1 === cardId) {
    return _modDef6014;
  } else if (2 === cardId) {
    return _modDef6015;
  } else if (3 === cardId) {
    return _modDef6016;
  } else if (4 === cardId) {
    return _modDef6017;
  } else if (5 === cardId) {
    return _modDef6018;
  } else if (6 === cardId) {
    return _modDef6019;
  } else if (7 === cardId) {
    return _modDef6020;
  } else if (8 === cardId) {
    return _modDef6021;
  } else {
    return _modDef6022;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
};
