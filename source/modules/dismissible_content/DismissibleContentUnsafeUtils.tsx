// Module ID: 3946
// Function ID: 32549
// Name: UNSAFE_isDismissibleContentDismissed
// Dependencies: [5, 1316, 3947, 664, 3968, 1335, 1336, 21, 1333, 566, 1331, 2]
// Exports: UNSAFE_markDismissibleContentAsDismissed, UNSAFE_markSingleUseGuildDismissibleContentAsDismissed, UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed, UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed, useIsDismissibleContentDismissed_UNSAFE

// Module 3946 (UNSAFE_isDismissibleContentDismissed)
import isTimeRecurringDismissibleContent from "isTimeRecurringDismissibleContent";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";

const require = arg1;
class UNSAFE_isDismissibleContentDismissed {
  constructor(arg0) {
    obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    flag = obj.bypassNewUserCheck;
    if (flag === undefined) {
      flag = false;
    }
    WEEK = obj.cooldownDurationMs;
    if (WEEK === undefined) {
      tmp = closure_1;
      tmp2 = closure_2;
      num = 3;
      WEEK = require("set").Millis.WEEK;
    }
    guildId = obj.guildId;
    if (!flag) {
      tmp3 = closure_0;
      tmp4 = closure_2;
      num2 = 4;
      obj2 = require("isUserAccountOldEnough");
      if (obj2.disableNewUserDismissibleContent(global)) {
        flag2 = true;
        return true;
      }
    }
    obj3 = require("isTimeRecurringDismissibleContent");
    tmp5 = closure_0;
    tmp6 = closure_2;
    if (obj3.isVersionedDismissibleContent(global)) {
      num9 = 6;
      tmp5Result = require("addVersionedDismissedContent");
      return tmp5Result.isVersionedDismissibleContentDismissed(global).isDismissed;
    } else {
      tmp5Result1 = require("isTimeRecurringDismissibleContent");
      if (tmp5Result1.isSnowflakeBoundDismissibleContent(global)) {
        tmp23 = UNSAFE_isSnowflakeBoundDismissibleContentDismissed;
        tmp24 = closure_1;
        tmp25 = closure_2;
        num8 = 7;
        obj15 = require("DISCORD_EPOCH");
        tmp26 = globalThis;
        _Date = Date;
        return UNSAFE_isSnowflakeBoundDismissibleContentDismissed(global, obj15.fromTimestamp(Date.now())).isDismissed;
      } else {
        tmp7 = closure_0;
        tmp8 = closure_2;
        obj5 = require("isTimeRecurringDismissibleContent");
        tmp9 = closure_0;
        tmp10 = closure_2;
        if (obj5.isTimeRecurringDismissibleContent(global)) {
          num7 = 6;
          tmp9Result = require("addVersionedDismissedContent");
          obj = {};
          obj.cooldownDurationMs = WEEK;
          return tmp9Result.isTimeRecurringDismissibleContentDismissed(global, obj).isDismissed;
        } else {
          tmp9Result1 = require("isTimeRecurringDismissibleContent");
          tmp11 = closure_0;
          tmp12 = closure_2;
          if (tmp9Result1.isSingleUseGuildDismissibleContent(global)) {
            num6 = 6;
            tmp11Result = require("addVersionedDismissedContent");
            return tmp11Result.UNSAFE_isSingleUseGuildDismissibleContentDismissed(global, guildId);
          } else {
            tmp11Result1 = require("isTimeRecurringDismissibleContent");
            tmp13 = closure_0;
            tmp14 = closure_2;
            if (tmp11Result1.isTimeRecurringGuildDismissibleContent(global)) {
              num5 = 6;
              tmp13Result = require("addVersionedDismissedContent");
              return tmp13Result.UNSAFE_isTimeRecurringGuildDismissibleContentDismissed(global, guildId);
            } else {
              tmp13Result1 = require("isTimeRecurringDismissibleContent");
              if (tmp13Result1.isSnowflakeBoundGuildDismissibleContent(global)) {
                tmp21 = closure_0;
                tmp22 = closure_2;
                num4 = 6;
                obj10 = require("addVersionedDismissedContent");
                return obj10.UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed(global, guildId);
              } else {
                tmp15 = c4;
                userContent = c4.settings.userContent;
                tmp16 = null;
                dismissedContents = undefined;
                if (null != userContent) {
                  dismissedContents = userContent.dismissedContents;
                }
                hasBitResult = null != dismissedContents;
                if (hasBitResult) {
                  tmp19 = closure_0;
                  tmp20 = closure_2;
                  num3 = 8;
                  obj9 = require("hasBit");
                  hasBitResult = obj9.hasBit(dismissedContents, global);
                }
                return hasBitResult;
              }
            }
          }
        }
      }
    }
  }
}
async function _UNSAFE_markDismissibleContentAsDismissed(arg0, arg1) {
  let iter = (function*(closure_0, forceTrack) {
    let obj = forceTrack;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    if (!outer2_6(closure_0, { bypassNewUserCheck: true })) {
      const result = outer2_0(outer2_2[6]).markDismissibleContentAsDismissedPreProcessing(closure_0, obj);
      const obj2 = outer2_0(outer2_2[6]);
      yield outer2_0(outer2_2[10]).addDismissedContent(closure_0);
      const obj3 = outer2_0(outer2_2[10]);
      const result1 = outer2_0(outer2_2[6]).markDismissibleContentAsDismissedPostProcessing(closure_0, obj);
      const obj4 = outer2_0(outer2_2[6]);
    }
  })();
  iter.next();
  return iter;
}
class UNSAFE_isSnowflakeBoundDismissibleContentDismissed {
  constructor(arg0, arg1) {
    obj = require("isUserAccountOldEnough");
    if (obj.disableNewUserDismissibleContent(global)) {
      return { isDismissed: true, lastDismissedSnowflakeId: null };
    } else {
      tmp = c4;
      userContent = c4.settings.userContent;
      tmp2 = null;
      prop = undefined;
      if (null != userContent) {
        tmp4 = userContent.recurringDismissibleContentStates[global];
        if (null != tmp4) {
          prop = tmp4.lastDismissedObjectId;
        }
      }
      obj = {};
      tmp5 = null != prop;
      if (tmp5) {
        tmp6 = closure_1;
        tmp7 = closure_2;
        num = 7;
        obj3 = require("DISCORD_EPOCH");
        tmp8 = arg1;
        num2 = 1;
        tmp5 = 1 !== obj3.compare(arg1, prop);
      }
      obj.isDismissed = tmp5;
      obj.lastDismissedSnowflakeId = prop;
      return obj;
    }
  }
}
async function _UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(arg0, arg1, arg2) {
  let iter = (function*(content, guildId, forceTrack) {
    let obj = forceTrack;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    const result = outer2_0(outer2_2[6]).markDismissibleContentAsDismissedPreProcessing(content, obj);
    const obj2 = outer2_0(outer2_2[6]);
    yield outer2_0(outer2_2[6]).UNSAFE_addGuildDismissedContent(content, guildId, 1);
    const obj3 = outer2_0(outer2_2[6]);
    const result1 = outer2_0(outer2_2[6]).markDismissibleContentAsDismissedPostProcessing(content, obj);
  })();
  iter.next();
  return iter;
}
async function _UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(arg0, arg1, arg2, arg3) {
  const guildNextNumTimesDismissed = outer2_0(outer2_2[6]).getGuildNextNumTimesDismissed(arg0, arg1);
  const obj = outer2_0(outer2_2[6]);
  const result = outer2_0(outer2_2[6]).markDismissibleContentAsDismissedPreProcessing(arg0, arg2);
  const obj2 = outer2_0(outer2_2[6]);
  yield outer2_0(outer2_2[6]).UNSAFE_addTimeRecurringGuildDismissedContent(arg0, arg1, guildNextNumTimesDismissed);
  const obj3 = outer2_0(outer2_2[6]);
  const result1 = outer2_0(outer2_2[6]).markDismissibleContentAsDismissedPostProcessing(arg0, arg2);
}
async function _UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(arg0, arg1, arg2, arg3, arg4) {
  let obj = outer2_0(outer2_2[6]);
  const guildNextNumTimesDismissed = obj.getGuildNextNumTimesDismissed(arg0, arg2);
  obj = {};
  const merged = Object.assign(arg3);
  obj["snowflakeId"] = arg1;
  const result = outer2_0(outer2_2[6]).markDismissibleContentAsDismissedPreProcessing(arg0, obj);
  const obj2 = outer2_0(outer2_2[6]);
  yield outer2_0(outer2_2[6]).UNSAFE_addSnowflakeBoundGuildDismissedContent(arg0, arg1, arg2, guildNextNumTimesDismissed);
  const obj4 = outer2_0(outer2_2[6]);
  const result1 = outer2_0(outer2_2[6]).markDismissibleContentAsDismissedPostProcessing(arg0, arg3);
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/dismissible_content/DismissibleContentUnsafeUtils.tsx");

export { UNSAFE_isDismissibleContentDismissed };
export const useIsDismissibleContentDismissed_UNSAFE = function useIsDismissibleContentDismissed_UNSAFE(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, arg1) {
  let obj = arg1;
  const _require = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
  if (arg1 === undefined) {
    obj = {};
  }
  const items = [_isNativeReflectConstruct, closure_5];
  return _require(566).useStateFromStores(items, () => outer1_6(closure_0, obj));
};
export const UNSAFE_markDismissibleContentAsDismissed = function UNSAFE_markDismissibleContentAsDismissed(DONUT_MOBILE_NUX, arg1) {
  return _UNSAFE_markDismissibleContentAsDismissed(...arguments);
};
export { UNSAFE_isSnowflakeBoundDismissibleContentDismissed };
export const UNSAFE_markSingleUseGuildDismissibleContentAsDismissed = function UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(MOBILE_ACCOUNT_LINKING_BANNER, closure_0, arg2) {
  return _UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(...arguments);
};
export const UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed = function UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(c2, closure_0, arg2) {
  return _UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(...arguments);
};
export const UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed = function UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(c3, closure_0, closure_1, arg3) {
  return _UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(...arguments);
};
