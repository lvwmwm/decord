// Module ID: 5547
// Function ID: 5548
// Name: CheckpointUtils
// Dependencies: [5220, 5548, 1128, 5549, 5550, 5551, 5552, 5553, 5554, 5555, 5556, 5557, 5558, 2]
// Exports: getAccessibleVoiceDurationString, getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 5547 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 5220 */;
import getTimestampString from "getTimestampString" /* 5548 */;
import _modDef5549 from "module_5549" /* 5549 */;
import _modDef5550 from "module_5550" /* 5550 */;
import _modDef5551 from "module_5551" /* 5551 */;
import _modDef5552 from "module_5552" /* 5552 */;
import _modDef5553 from "module_5553" /* 5553 */;
import _modDef5554 from "module_5554" /* 5554 */;
import _modDef5555 from "module_5555" /* 5555 */;
import _modDef5556 from "module_5556" /* 5556 */;
import _modDef5557 from "module_5557" /* 5557 */;
import _modDef5558 from "module_5558" /* 5558 */;
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
    return _modDef5549;
  } else if (1 === cardId) {
    return _modDef5550;
  } else if (2 === cardId) {
    return _modDef5551;
  } else if (3 === cardId) {
    return _modDef5552;
  } else if (4 === cardId) {
    return _modDef5553;
  } else if (5 === cardId) {
    return _modDef5554;
  } else if (6 === cardId) {
    return _modDef5555;
  } else if (7 === cardId) {
    return _modDef5556;
  } else if (8 === cardId) {
    return _modDef5557;
  } else {
    return _modDef5558;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(checkpointData) {
  return Math.min(Math.max(Math.round(checkpointData / 10), 1), 9);
};
