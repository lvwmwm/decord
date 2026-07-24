// Module ID: 6928
// Function ID: 55301
// Name: canBypassSlowmodeHelper
// Dependencies: [3758, 653, 566, 1212, 664, 3712, 2]
// Exports: canBypassSlowmode, getSlowmodeDescription, getSlowmodeIndicatorText, useCanBypassSlowmode

// Module 6928 (canBypassSlowmodeHelper)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
function canBypassSlowmodeHelper(channel, arg1, _isNativeReflectConstruct) {
  return _isNativeReflectConstruct.can(Permissions.BYPASS_SLOWMODE, channel);
}
const result = require("initialize").fileFinishedImporting("modules/chat/SlowmodeUtils.tsx");

export const canBypassSlowmode = function canBypassSlowmode(channel, SendMessage) {
  return canBypassSlowmodeHelper(channel, undefined, _isNativeReflectConstruct);
};
export const useCanBypassSlowmode = function useCanBypassSlowmode(channel, slowmodeType) {
  const _require = channel;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => outer1_5(closure_0, undefined, outer1_3));
};
export const getSlowmodeIndicatorText = function getSlowmodeIndicatorText(stateFromStores, canBypassSlowmode) {
  if (canBypassSlowmode) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return intl2.string(require(1212) /* getSystemLocale */.t["8+NidX"]);
  } else if (stateFromStores >= importDefault(664).Millis.HOUR) {
    const durationResult = importDefault(3712).duration(stateFromStores);
    const _HermesInternal3 = HermesInternal;
    const combined = "" + durationResult.minutes();
    const obj4 = importDefault(3712);
    const _HermesInternal4 = HermesInternal;
    const combined1 = "" + durationResult.seconds();
    const padStartResult = combined.padStart(2, "0");
    const _HermesInternal5 = HermesInternal;
    return "" + durationResult.hours() + ":" + padStartResult + ":" + combined1.padStart(2, "0");
  } else if (stateFromStores > 0) {
    const durationResult1 = importDefault(3712).duration(stateFromStores);
    const _HermesInternal = HermesInternal;
    const combined2 = "" + durationResult1.seconds();
    const obj = importDefault(3712);
    const _HermesInternal2 = HermesInternal;
    return "" + durationResult1.minutes() + ":" + combined2.padStart(2, "0");
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Icu3bf);
  }
};
export const getSlowmodeDescription = function getSlowmodeDescription(rateLimitPerUser) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (rateLimitPerUser >= importDefault(664).Seconds.HOUR) {
    const _Math2 = Math;
    const rounded = Math.floor(rateLimitPerUser / importDefault(664).Seconds.HOUR);
    const _Math3 = Math;
    const diff = rateLimitPerUser - rounded * importDefault(664).Seconds.HOUR;
    const rounded1 = Math.floor(diff / importDefault(664).Seconds.MINUTE);
    const diff1 = rateLimitPerUser - rounded * importDefault(664).Seconds.HOUR;
    const diff2 = diff1 - rounded1 * importDefault(664).Seconds.MINUTE;
    const intl3 = require(1212) /* getSystemLocale */.intl;
    const t3 = require(1212) /* getSystemLocale */.t;
    let obj = { hours: rounded, minutes: rounded1, seconds: diff2 };
    return intl3.formatToPlainString(flag ? t3.oEwLez : t3["3hz51F"], obj);
  } else if (rateLimitPerUser >= 60) {
    const _Math = Math;
    const rounded2 = Math.floor(rateLimitPerUser / 60);
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const t2 = require(1212) /* getSystemLocale */.t;
    obj = { minutes: rounded2, seconds: rateLimitPerUser - 60 * rounded2 };
    return intl2.formatToPlainString(flag ? t2.DARKYm : t2.sY3wlG, obj);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    const t = require(1212) /* getSystemLocale */.t;
    obj = { seconds: rateLimitPerUser };
    return intl.formatToPlainString(flag ? t["9yE8Ga"] : t.IWntYg, obj);
  }
};
