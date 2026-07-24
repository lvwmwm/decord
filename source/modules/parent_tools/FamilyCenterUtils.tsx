// Module ID: 6827
// Function ID: 53828
// Name: getActivityTypeTextConfigs
// Dependencies: [6769, 6770, 1212, 2198, 3712, 6771, 2]
// Exports: displayTypeFromString, formatLinkTimestamp, formatTotalTime, formatUserActivityTimestamp, getActivityWindowTimestampFormatter, getEmptyActivityFormatter, getFailureCodeForAPIError, getOrFetchLinkedUsers, getSortedActivityTypeConfigs, getTopUserOrGuildDescription, isGift, isGuildAction, isParentallyControlled, isPurchase, isUserAction

// Module 6827 (getActivityTypeTextConfigs)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import items from "items";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getActivityTypeTextConfigs() {
  return new Map(closure_4);
}
function hasActiveParentLinks() {
  const values = Object.values(authStore.getLinkedUsers());
  return values.some((link_status) => {
    let tmp = link_status.link_status === outer1_8.ACTIVE;
    if (tmp) {
      tmp = link_status.link_type === outer1_9.PARENT;
    }
    return tmp;
  });
}
({ ACTION_TO_TEXT: closure_4, FAMILY_CENTER_ERROR_CODE_TO_FAILURE: closure_5, FamilyCenterFailureCode: closure_6, TeenActionDisplayType: closure_7, UserLinkStatus: closure_8, UserLinkType: closure_9 } = items);
let result = require("getSystemLocale").fileFinishedImporting("modules/parent_tools/FamilyCenterUtils.tsx");

export const getEmptyActivityFormatter = function getEmptyActivityFormatter() {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.today = intl.string(importDefault(2198).VjIAQQ);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.yesterday = intl2.string(importDefault(2198)["2a8xHY"]);
  obj.days = importDefault(2198).Xt6oND;
  return obj;
};
export const getActivityWindowTimestampFormatter = function getActivityWindowTimestampFormatter(arg0) {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  const string = intl.string;
  const tmp4 = importDefault(2198);
  if (arg0) {
    obj.today = string(tmp4["2AtcIs"]);
    const intl3 = tmp(1212).intl;
    obj.yesterday = intl3.string(tmp3(2198).stOECr);
    obj.days = tmp3(2198).n8n5Ba;
    let tmp5 = obj;
  } else {
    obj.today = string(tmp4.g1ZX6m);
    const intl2 = tmp(1212).intl;
    obj.yesterday = intl2.string(tmp3(2198).s3qSVt);
    obj.days = tmp3(2198).f1UJiC;
    tmp5 = obj;
  }
  return tmp5;
};
export const formatUserActivityTimestamp = function formatUserActivityTimestamp(time, timestampFormatter, arg2) {
  let obj = importDefault(3712)();
  const diffResult = obj.diff(importDefault(3712)(time), "s");
  const tmp2 = timestampFormatter();
  importDefault(3712)(time).format("LL");
  if (diffResult < 86400) {
    let yesterday = tmp2.today;
  } else if (diffResult < 172800) {
    yesterday = tmp2.yesterday;
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = {};
    const _Math = Math;
    let num2 = 999;
    const rounded = Math.floor(diffResult / 86400);
    if (null != arg2) {
      num2 = arg2;
    }
    obj.days = Math.min(rounded, num2);
    yesterday = intl.formatToPlainString(tmp2.days, obj);
  }
  return yesterday;
};
export const formatLinkTimestamp = function formatLinkTimestamp(arg0, SENT_TIMESTAMP_FORMATTER) {
  let obj = importDefault(3712)();
  const diffResult = obj.diff(importDefault(3712)(arg0), "s");
  const tmp2 = SENT_TIMESTAMP_FORMATTER();
  importDefault(3712)(arg0);
  if (diffResult < 60) {
    let yesterday = tmp2.seconds;
  } else if (diffResult < 3600) {
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj = {};
    const _Math3 = Math;
    obj.count = Math.floor(diffResult / 60);
    yesterday = intl4.formatToPlainString(tmp2.minutes, obj);
  } else if (diffResult < 86400) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj = {};
    const _Math2 = Math;
    obj.count = Math.floor(diffResult / 3600);
    yesterday = intl3.formatToPlainString(tmp2.hours, obj);
  } else if (diffResult < 172800) {
    yesterday = tmp2.yesterday;
  } else if (diffResult < 604800) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    const obj1 = {};
    const _Math = Math;
    obj1.count = Math.floor(diffResult / 86400);
    yesterday = intl2.formatToPlainString(tmp2.days, obj1);
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj2 = { date: tmp4 };
    yesterday = intl.formatToPlainString(tmp2.date, obj2);
  }
  return yesterday;
};
export const isUserAction = function isUserAction(action) {
  let tmp = action.display_type === constants2.USER_ADD;
  if (!tmp) {
    tmp = action.display_type === constants2.USER_INTERACTION;
  }
  if (!tmp) {
    tmp = action.display_type === constants2.USER_CALLED;
  }
  return tmp;
};
export const isGuildAction = function isGuildAction(action) {
  let tmp = action.display_type === constants2.GUILD_ADD;
  if (!tmp) {
    tmp = action.display_type === constants2.GUILD_INTERACTION;
  }
  return tmp;
};
export const isPurchase = function isPurchase(action) {
  return action.display_type === constants2.PURCHASES;
};
export const isGift = function isGift(action) {
  return action.display_type === constants2.GIFTS;
};
export const displayTypeFromString = function displayTypeFromString(arg0) {
  const values = Object.values(closure_7);
  let num = 0;
  if (0 < values.length) {
    while (values[num].toString() !== arg0) {
      num = num + 1;
    }
    return values[num];
  }
};
export const getFailureCodeForAPIError = function getFailureCodeForAPIError(arg0) {
  let GENERIC_ERROR = table[arg0.code];
  if (null == GENERIC_ERROR) {
    GENERIC_ERROR = constants.GENERIC_ERROR;
  }
  return GENERIC_ERROR;
};
export const getSortedActivityTypeConfigs = function getSortedActivityTypeConfigs() {
  const obj = getActivityTypeTextConfigs();
  if (0 === obj.size) {
    let items = [];
  } else {
    const _Array = Array;
    items = Array.from(obj.entries()).sort((arg0, arg1) => arg0[1].priority - arg1[1].priority);
    const arr = Array.from(obj.entries());
  }
  return items;
};
export { getActivityTypeTextConfigs };
export const formatTotalTime = function formatTotalTime(arg0) {
  const rounded = Math.floor(arg0 / 60);
  const result = arg0 % 60;
  if (rounded > 0) {
    const _HermesInternal2 = HermesInternal;
    let combined = "" + rounded + "h " + result + "m";
  } else {
    const _HermesInternal = HermesInternal;
    combined = "" + result + "m";
  }
  return combined;
};
export const getOrFetchLinkedUsers = function getOrFetchLinkedUsers() {
  if (authStore.getAreLinkedUsersProcessed()) {
    return authStore.getLinkedUsers();
  } else {
    const linkedUsers = importDefault(6771).fetchLinkedUsers();
  }
};
export { hasActiveParentLinks };
export const isParentallyControlled = function isParentallyControlled() {
  return hasActiveParentLinks();
};
export const getTopUserOrGuildDescription = function getTopUserOrGuildDescription(dms_sent, call_count) {
  if (call_count > 0) {
    if (0 === dms_sent) {
      const intl3 = require(1212) /* getSystemLocale */.intl;
      let obj = { callCount: call_count };
      let formatToPlainStringResult = intl3.formatToPlainString(importDefault(2198)["L/Cj7S"], obj);
    }
    return formatToPlainStringResult;
  }
  if (dms_sent > 0) {
    if (0 === call_count) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj = { messageCount: dms_sent };
      formatToPlainStringResult = intl2.formatToPlainString(importDefault(2198)["6X1F0i"], obj);
    }
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { messageCount: dms_sent, callCount: call_count };
  formatToPlainStringResult = intl.formatToPlainString(importDefault(2198).IYqGMG, obj);
};
