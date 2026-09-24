// Module ID: 8449
// Function ID: 8450
// Name: CheckpointUtils
// Dependencies: [4819, 7915, 1119, 8450, 8451, 8452, 8453, 8454, 8455, 8456, 8457, 8458, 8459, 2]
// Exports: getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 8449 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 4819 */;
import notification_center_getTimestampString from "notification_center/getTimestampString" /* 7915 */;
import _modDef8450 from "module_8450" /* 8450 */;
import _modDef8451 from "module_8451" /* 8451 */;
import _modDef8452 from "module_8452" /* 8452 */;
import _modDef8453 from "module_8453" /* 8453 */;
import _modDef8454 from "module_8454" /* 8454 */;
import _modDef8455 from "module_8455" /* 8455 */;
import _modDef8456 from "module_8456" /* 8456 */;
import _modDef8457 from "module_8457" /* 8457 */;
import _modDef8458 from "module_8458" /* 8458 */;
import _modDef8459 from "module_8459" /* 8459 */;
import size from "module_2" /* 2 */;

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  const timeAndUnit = TimeUtils.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const time2 = notification_center_getTimestampString.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = tmp(1119).intl;
    return intl3.formatToPlainString(time2.minutes, { minutes: 0 });
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === tmp(4819).TimeUnits.HOURS) {
      const intl2 = tmp(1119).intl;
      const obj3 = { hours: rounded };
      let formatToPlainStringResult = intl2.formatToPlainString(time2.hours, obj3);
    } else {
      const intl = tmp(1119).intl;
      const obj4 = { minutes: rounded };
      formatToPlainStringResult = intl.formatToPlainString(time2.minutes, obj4);
    }
    return formatToPlainStringResult;
  }
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef8450;
  } else if (1 === cardId) {
    return _modDef8451;
  } else if (2 === cardId) {
    return _modDef8452;
  } else if (3 === cardId) {
    return _modDef8453;
  } else if (4 === cardId) {
    return _modDef8454;
  } else if (5 === cardId) {
    return _modDef8455;
  } else if (6 === cardId) {
    return _modDef8456;
  } else if (7 === cardId) {
    return _modDef8457;
  } else if (8 === cardId) {
    return _modDef8458;
  } else {
    return _modDef8459;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};
