// Module ID: 8412
// Function ID: 8413
// Name: CheckpointUtils
// Dependencies: [4785, 7878, 1115, 8413, 8414, 8415, 8416, 8417, 8418, 8419, 8420, 8421, 8422, 2]
// Exports: getCardAssetUrl, getCheckpointPowerBarUnits, getVoiceDurationString

// Module 8412 (CheckpointUtils)
import TimeUtils from "TimeUtils" /* 4785 */;
import notification_center_getTimestampString from "notification_center/getTimestampString" /* 7878 */;
import _modDef8413 from "module_8413" /* 8413 */;
import _modDef8414 from "module_8414" /* 8414 */;
import _modDef8415 from "module_8415" /* 8415 */;
import _modDef8416 from "module_8416" /* 8416 */;
import _modDef8417 from "module_8417" /* 8417 */;
import _modDef8418 from "module_8418" /* 8418 */;
import _modDef8419 from "module_8419" /* 8419 */;
import _modDef8420 from "module_8420" /* 8420 */;
import _modDef8421 from "module_8421" /* 8421 */;
import _modDef8422 from "module_8422" /* 8422 */;
import size from "module_2" /* 2 */;

const items = [TimeUtils.TimeUnits.HOURS, TimeUtils.TimeUnits.MINUTES];
const result = size.fileFinishedImporting("modules/checkpoint/CheckpointUtils.tsx");

export const getVoiceDurationString = function getVoiceDurationString(totalVoiceMinutes) {
  const timeAndUnit = TimeUtils.getTimeAndUnit(totalVoiceMinutes, items);
  ({ time, unit } = timeAndUnit);
  const time2 = notification_center_getTimestampString.getAbbreviatedFormatter();
  if (null == time) {
    const intl3 = tmp(1115).intl;
    return intl3.formatToPlainString(time2.minutes, { minutes: 0 });
  } else {
    const _Math = Math;
    const rounded = Math.round(time);
    if (unit === tmp(4785).TimeUnits.HOURS) {
      const intl2 = tmp(1115).intl;
      const obj3 = { hours: rounded };
      let formatToPlainStringResult = intl2.formatToPlainString(time2.hours, obj3);
    } else {
      const intl = tmp(1115).intl;
      const obj4 = { minutes: rounded };
      formatToPlainStringResult = intl.formatToPlainString(time2.minutes, obj4);
    }
    return formatToPlainStringResult;
  }
};
export const getCardAssetUrl = function getCardAssetUrl(cardId) {
  if (0 === cardId) {
    return _modDef8413;
  } else if (1 === cardId) {
    return _modDef8414;
  } else if (2 === cardId) {
    return _modDef8415;
  } else if (3 === cardId) {
    return _modDef8416;
  } else if (4 === cardId) {
    return _modDef8417;
  } else if (5 === cardId) {
    return _modDef8418;
  } else if (6 === cardId) {
    return _modDef8419;
  } else if (7 === cardId) {
    return _modDef8420;
  } else if (8 === cardId) {
    return _modDef8421;
  } else {
    return _modDef8422;
  }
};
export const getCheckpointPowerBarUnits = function getCheckpointPowerBarUnits(arg0) {
  return Math.min(Math.max(Math.round(arg0 / 10), 1), 9);
};
