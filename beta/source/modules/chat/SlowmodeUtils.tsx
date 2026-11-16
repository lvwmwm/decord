// Module ID: 8793
// Function ID: 8794
// Name: SlowmodeUtils
// Dependencies: [5238, 1072, 504, 1113, 1089, 2169, 2]
// Exports: canBypassSlowmode, canBypassSlowmodeHelper, getSlowmodeDescription, getSlowmodeIndicatorText, getSlowmodeTooltipLabel, useCanBypassSlowmode

// Module 8793 (SlowmodeUtils)
import Constants from "Constants" /* 1072 */;
import DurationsDefault from "Durations" /* 1089 */;
import intl4 from "intl" /* 1113 */;
import _modDef2169 from "module_2169" /* 2169 */;
import PermissionStore from "PermissionStore" /* 5238 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/chat/SlowmodeUtils.tsx");

export function canBypassSlowmodeHelper(rateLimitPerUser, can) {
  return can.can(Permissions.BYPASS_SLOWMODE, rateLimitPerUser);
}
export function canBypassSlowmode(PressableOpacity) {
  return PermissionStore.can(Permissions.BYPASS_SLOWMODE, PressableOpacity);
}
export function useCanBypassSlowmode(channel) {
  _require = channel;
  const items = [PermissionStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => PermissionStore.can(Permissions.BYPASS_SLOWMODE, channel));
}
export function getSlowmodeIndicatorText(stateFromStores, canBypassSlowmode) {
  const tmp = canBypassSlowmode;
  if (tmp) {
    const intl2 = intl4.intl;
    return intl2.string(intl4.t["8+NidX"]);
  } else if (stateFromStores >= DurationsDefault.Millis.HOUR) {
    const tmp3Result = _modDef2169;
    const time2 = tmp3Result.duration(stateFromStores);
    const _HermesInternal3 = HermesInternal;
    const combined = "" + time2.minutes();
    const _HermesInternal4 = HermesInternal;
    const padStartResult = combined.padStart(2, "0");
    const combined1 = "" + time2.seconds();
    const _HermesInternal5 = HermesInternal;
    const padStartResult1 = combined1.padStart(2, "0");
    return "" + time2.hours() + ":" + padStartResult + ":" + padStartResult1;
  } else if (stateFromStores > 0) {
    const tmp3Result2 = _modDef2169;
    const time = tmp3Result2.duration(stateFromStores);
    const _HermesInternal = HermesInternal;
    const combined2 = "" + time.seconds();
    const _HermesInternal2 = HermesInternal;
    const padStartResult2 = combined2.padStart(2, "0");
    return "" + time.minutes() + ":" + padStartResult2;
  } else {
    const intl = intl4.intl;
    return intl.string(intl4.t.Icu3bf);
  }
}
export function getSlowmodeDescription(seconds) {
  let formatToPlainString3Result;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const rounded = Math.floor(seconds / DurationsDefault.Seconds.HOUR);
  const diff = seconds - rounded * DurationsDefault.Seconds.HOUR;
  const floorResult = floor(diff / DurationsDefault.Seconds.MINUTE);
  const diff1 = seconds - rounded * DurationsDefault.Seconds.HOUR;
  const diff2 = diff1 - floorResult * DurationsDefault.Seconds.MINUTE;
  if (rounded > 0) {
    const intl3 = intl4.intl;
    const formatToPlainString3 = intl3.formatToPlainString;
    const t3 = intl4.t;
    const time = { hours: rounded, minutes: floorResult, seconds: diff2 };
    formatToPlainString3Result = formatToPlainString3(flag ? t3.oEwLez : t3["3hz51F"], time);
  } else if (floorResult > 0) {
    const intl2 = intl4.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const t2 = intl4.t;
    const time1 = { minutes: floorResult, seconds: diff2 };
    formatToPlainString3Result = formatToPlainString2(flag ? t2.DARKYm : t2.sY3wlG, time1);
  } else {
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const t = intl4.t;
    const obj = { seconds };
    formatToPlainString3Result = formatToPlainString(flag ? t["9yE8Ga"] : t.IWntYg, obj);
  }
  return formatToPlainString3Result;
}
export function getSlowmodeTooltipLabel(rateLimitPerUser) {
  let formatToPlainStringResult;
  const rounded = Math.floor(rateLimitPerUser / DurationsDefault.Seconds.HOUR);
  const diff = rateLimitPerUser - rounded * DurationsDefault.Seconds.HOUR;
  const floorResult = floor(diff / DurationsDefault.Seconds.MINUTE);
  const diff1 = rateLimitPerUser - rounded * DurationsDefault.Seconds.HOUR;
  const diff2 = diff1 - floorResult * DurationsDefault.Seconds.MINUTE;
  if (rounded > 0) {
    const intl3 = intl4.intl;
    const time = { hours: rounded, minutes: floorResult, seconds: diff2 };
    formatToPlainStringResult = intl3.formatToPlainString(intl4.t.YiNO8W, time);
  } else if (floorResult > 0) {
    const intl2 = intl4.intl;
    const time1 = { minutes: floorResult, seconds: diff2 };
    formatToPlainStringResult = intl2.formatToPlainString(intl4.t.oSzkf2, time1);
  } else {
    const intl = intl4.intl;
    const obj = { seconds: rateLimitPerUser };
    formatToPlainStringResult = intl.formatToPlainString(intl4.t.uaRDmS, obj);
  }
  return formatToPlainStringResult;
}
