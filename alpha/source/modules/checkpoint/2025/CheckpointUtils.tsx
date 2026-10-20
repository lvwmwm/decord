// Module ID: 5979
// Function ID: 5980
// Name: CheckpointUtils
// Dependencies: [5684, 5980, 1128, 5981, 5982, 5983, 5984, 5985, 5986, 5987, 5988, 5989, 5990, 2]
// Exports: getAccessibleVoiceDurationString, getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 5979 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 5684 */;
import getTimestampString from "getTimestampString" /* 5980 */;
import _modDef5981 from "module_5981" /* 5981 */;
import _modDef5982 from "module_5982" /* 5982 */;
import _modDef5983 from "module_5983" /* 5983 */;
import _modDef5984 from "module_5984" /* 5984 */;
import _modDef5985 from "module_5985" /* 5985 */;
import _modDef5986 from "module_5986" /* 5986 */;
import _modDef5987 from "module_5987" /* 5987 */;
import _modDef5988 from "module_5988" /* 5988 */;
import _modDef5989 from "module_5989" /* 5989 */;
import _modDef5990 from "module_5990" /* 5990 */;
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
    return _modDef5981;
  } else if (1 === cardId) {
    return _modDef5982;
  } else if (2 === cardId) {
    return _modDef5983;
  } else if (3 === cardId) {
    return _modDef5984;
  } else if (4 === cardId) {
    return _modDef5985;
  } else if (5 === cardId) {
    return _modDef5986;
  } else if (6 === cardId) {
    return _modDef5987;
  } else if (7 === cardId) {
    return _modDef5988;
  } else if (8 === cardId) {
    return _modDef5989;
  } else {
    return _modDef5990;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
};
