// Module ID: 5070
// Function ID: 5071
// Name: CheckpointUtils
// Dependencies: [4866, 5071, 1127, 5072, 5073, 5074, 5075, 5076, 5077, 5078, 5079, 5080, 5081, 2]
// Exports: getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 5070 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 4866 */;
import getTimestampString from "getTimestampString" /* 5071 */;
import _modDef5072 from "module_5072" /* 5072 */;
import _modDef5073 from "module_5073" /* 5073 */;
import _modDef5074 from "module_5074" /* 5074 */;
import _modDef5075 from "module_5075" /* 5075 */;
import _modDef5076 from "module_5076" /* 5076 */;
import _modDef5077 from "module_5077" /* 5077 */;
import _modDef5078 from "module_5078" /* 5078 */;
import _modDef5079 from "module_5079" /* 5079 */;
import _modDef5080 from "module_5080" /* 5080 */;
import _modDef5081 from "module_5081" /* 5081 */;
import size from "module_2" /* 2 */;

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/2025/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  let time;
  let unit;
  const obj = TimeUtils;
  const timeAndUnit = obj.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const obj2 = getTimestampString;
  const time2 = obj2.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = tmp(1127).intl;
    return intl3.formatToPlainString(time2.minutes, { minutes: 0 });
  } else {
    let formatToPlainStringResult;
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === TimeUtils.TimeUnits.HOURS) {
      const intl2 = tmp(1127).intl;
      const obj3 = { hours: rounded };
      formatToPlainStringResult = intl2.formatToPlainString(time2.hours, obj3);
    } else {
      const intl = tmp(1127).intl;
      const obj4 = { minutes: rounded };
      formatToPlainStringResult = intl.formatToPlainString(time2.minutes, obj4);
    }
    return formatToPlainStringResult;
  }
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef5072;
  } else if (1 === cardId) {
    return _modDef5073;
  } else if (2 === cardId) {
    return _modDef5074;
  } else if (3 === cardId) {
    return _modDef5075;
  } else if (4 === cardId) {
    return _modDef5076;
  } else if (5 === cardId) {
    return _modDef5077;
  } else if (6 === cardId) {
    return _modDef5078;
  } else if (7 === cardId) {
    return _modDef5079;
  } else if (8 === cardId) {
    return _modDef5080;
  } else {
    return _modDef5081;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
};
