// Module ID: 6323
// Function ID: 6324
// Name: CheckpointUtils
// Dependencies: [6016, 6324, 1113, 6325, 6326, 6327, 6328, 6329, 6330, 6331, 6332, 6333, 6334, 2]
// Exports: getAccessibleVoiceDurationString, getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 6323 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 6016 */;
import getTimestampString from "getTimestampString" /* 6324 */;
import _modDef6325 from "module_6325" /* 6325 */;
import _modDef6326 from "module_6326" /* 6326 */;
import _modDef6327 from "module_6327" /* 6327 */;
import _modDef6328 from "module_6328" /* 6328 */;
import _modDef6329 from "module_6329" /* 6329 */;
import _modDef6330 from "module_6330" /* 6330 */;
import _modDef6331 from "module_6331" /* 6331 */;
import _modDef6332 from "module_6332" /* 6332 */;
import _modDef6333 from "module_6333" /* 6333 */;
import _modDef6334 from "module_6334" /* 6334 */;
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
    return _modDef6325;
  } else if (1 === cardId) {
    return _modDef6326;
  } else if (2 === cardId) {
    return _modDef6327;
  } else if (3 === cardId) {
    return _modDef6328;
  } else if (4 === cardId) {
    return _modDef6329;
  } else if (5 === cardId) {
    return _modDef6330;
  } else if (6 === cardId) {
    return _modDef6331;
  } else if (7 === cardId) {
    return _modDef6332;
  } else if (8 === cardId) {
    return _modDef6333;
  } else {
    return _modDef6334;
  }
}
export function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
}
