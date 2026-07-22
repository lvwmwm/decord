// Module ID: 6924
// Function ID: 55258
// Name: canBypassSlowmodeHelper
// Dependencies: []
// Exports: canBypassSlowmode, getSlowmodeDescription, getSlowmodeIndicatorText, useCanBypassSlowmode

// Module 6924 (canBypassSlowmodeHelper)
function canBypassSlowmodeHelper(channel, arg1, closure_3) {
  return closure_3.can(Permissions.BYPASS_SLOWMODE, channel);
}
let closure_3 = importDefault(dependencyMap[0]);
const Permissions = arg1(dependencyMap[1]).Permissions;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/chat/SlowmodeUtils.tsx");

export const canBypassSlowmode = function canBypassSlowmode(channel, SendMessage) {
  return canBypassSlowmodeHelper(channel, undefined, closure_3);
};
export const useCanBypassSlowmode = function useCanBypassSlowmode(channel, slowmodeType) {
  slowmodeType = channel;
  const items = [closure_3];
  return slowmodeType(dependencyMap[2]).useStateFromStores(items, () => callback(arg0, undefined, closure_3));
};
export const getSlowmodeIndicatorText = function getSlowmodeIndicatorText(stateFromStores, canBypassSlowmode) {
  if (canBypassSlowmode) {
    const intl2 = canBypassSlowmode(dependencyMap[3]).intl;
    return intl2.string(canBypassSlowmode(dependencyMap[3]).t.8+NidX);
  } else if (stateFromStores >= importDefault(dependencyMap[4]).Millis.HOUR) {
    const durationResult = importDefault(dependencyMap[5]).duration(stateFromStores);
    const _HermesInternal3 = HermesInternal;
    const combined = "" + durationResult.minutes();
    const obj4 = importDefault(dependencyMap[5]);
    const _HermesInternal4 = HermesInternal;
    const combined1 = "" + durationResult.seconds();
    const padStartResult = combined.padStart(2, "0");
    const _HermesInternal5 = HermesInternal;
    return "" + durationResult.hours() + ":" + padStartResult + ":" + combined1.padStart(2, "0");
  } else if (stateFromStores > 0) {
    const durationResult1 = importDefault(dependencyMap[5]).duration(stateFromStores);
    const _HermesInternal = HermesInternal;
    const combined2 = "" + durationResult1.seconds();
    const obj = importDefault(dependencyMap[5]);
    const _HermesInternal2 = HermesInternal;
    return "" + durationResult1.minutes() + ":" + combined2.padStart(2, "0");
  } else {
    const intl = canBypassSlowmode(dependencyMap[3]).intl;
    return intl.string(canBypassSlowmode(dependencyMap[3]).t.Icu3bf);
  }
};
export const getSlowmodeDescription = function getSlowmodeDescription(rateLimitPerUser) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (rateLimitPerUser >= importDefault(dependencyMap[4]).Seconds.HOUR) {
    const _Math2 = Math;
    const rounded = Math.floor(rateLimitPerUser / importDefault(dependencyMap[4]).Seconds.HOUR);
    const _Math3 = Math;
    const diff = rateLimitPerUser - rounded * importDefault(dependencyMap[4]).Seconds.HOUR;
    const rounded1 = Math.floor(diff / importDefault(dependencyMap[4]).Seconds.MINUTE);
    const diff1 = rateLimitPerUser - rounded * importDefault(dependencyMap[4]).Seconds.HOUR;
    const diff2 = diff1 - rounded1 * importDefault(dependencyMap[4]).Seconds.MINUTE;
    const intl3 = arg1(dependencyMap[3]).intl;
    const t3 = arg1(dependencyMap[3]).t;
    let obj = { hours: rounded, minutes: rounded1, seconds: diff2 };
    return intl3.formatToPlainString(flag ? t3.oEwLez : t3.3hz51F, obj);
  } else if (rateLimitPerUser >= 60) {
    const _Math = Math;
    const rounded2 = Math.floor(rateLimitPerUser / 60);
    const intl2 = arg1(dependencyMap[3]).intl;
    const t2 = arg1(dependencyMap[3]).t;
    obj = { minutes: rounded2, seconds: rateLimitPerUser - 60 * rounded2 };
    return intl2.formatToPlainString(flag ? t2.DARKYm : t2.sY3wlG, obj);
  } else {
    const intl = arg1(dependencyMap[3]).intl;
    const t = arg1(dependencyMap[3]).t;
    obj = { seconds: rateLimitPerUser };
    return intl.formatToPlainString(flag ? t.9yE8Ga : t.IWntYg, obj);
  }
};
