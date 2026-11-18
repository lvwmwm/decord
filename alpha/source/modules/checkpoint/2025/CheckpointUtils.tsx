// Module ID: 5886
// Function ID: 5887
// Name: CheckpointUtils
// Dependencies: [5572, 5887, 1113, 5888, 5889, 5890, 5891, 5892, 5893, 5894, 5895, 5896, 5897, 2]
// Exports: getAccessibleVoiceDurationString, getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 5886 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 5572 */;
import getTimestampString from "getTimestampString" /* 5887 */;
import _modDef5888 from "module_5888" /* 5888 */;
import _modDef5889 from "module_5889" /* 5889 */;
import _modDef5890 from "module_5890" /* 5890 */;
import _modDef5891 from "module_5891" /* 5891 */;
import _modDef5892 from "module_5892" /* 5892 */;
import _modDef5893 from "module_5893" /* 5893 */;
import _modDef5894 from "module_5894" /* 5894 */;
import _modDef5895 from "module_5895" /* 5895 */;
import _modDef5896 from "module_5896" /* 5896 */;
import _modDef5897 from "module_5897" /* 5897 */;
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
    return _modDef5888;
  } else if (1 === cardId) {
    return _modDef5889;
  } else if (2 === cardId) {
    return _modDef5890;
  } else if (3 === cardId) {
    return _modDef5891;
  } else if (4 === cardId) {
    return _modDef5892;
  } else if (5 === cardId) {
    return _modDef5893;
  } else if (6 === cardId) {
    return _modDef5894;
  } else if (7 === cardId) {
    return _modDef5895;
  } else if (8 === cardId) {
    return _modDef5896;
  } else {
    return _modDef5897;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}
