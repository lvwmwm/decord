// Module ID: 3944
// Function ID: 32537
// Name: UNSAFE_isDismissibleContentDismissed
// Dependencies: []
// Exports: UNSAFE_markDismissibleContentAsDismissed, UNSAFE_markSingleUseGuildDismissibleContentAsDismissed, UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed, UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed, useIsDismissibleContentDismissed_UNSAFE

// Module 3944 (UNSAFE_isDismissibleContentDismissed)
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
      tmp = importDefault;
      tmp2 = dependencyMap;
      num = 3;
      WEEK = importDefault(dependencyMap[3]).Millis.WEEK;
    }
    guildId = obj.guildId;
    if (!flag) {
      tmp3 = arg1;
      tmp4 = dependencyMap;
      num2 = 4;
      obj2 = arg1(dependencyMap[4]);
      if (obj2.disableNewUserDismissibleContent(global)) {
        flag2 = true;
        return true;
      }
    }
    obj3 = arg1(dependencyMap[5]);
    tmp5 = arg1;
    tmp6 = dependencyMap;
    if (obj3.isVersionedDismissibleContent(global)) {
      num9 = 6;
      tmp5Result = tmp5(tmp6[6]);
      return tmp5Result.isVersionedDismissibleContentDismissed(global).isDismissed;
    } else {
      tmp5Result1 = tmp5(tmp6[5]);
      if (tmp5Result1.isSnowflakeBoundDismissibleContent(global)) {
        tmp23 = UNSAFE_isSnowflakeBoundDismissibleContentDismissed;
        tmp24 = importDefault;
        tmp25 = dependencyMap;
        num8 = 7;
        obj15 = importDefault(dependencyMap[7]);
        tmp26 = globalThis;
        _Date = Date;
        return UNSAFE_isSnowflakeBoundDismissibleContentDismissed(global, obj15.fromTimestamp(Date.now())).isDismissed;
      } else {
        tmp7 = arg1;
        tmp8 = dependencyMap;
        obj5 = arg1(dependencyMap[5]);
        tmp9 = arg1;
        tmp10 = dependencyMap;
        if (obj5.isTimeRecurringDismissibleContent(global)) {
          num7 = 6;
          tmp9Result = tmp9(tmp10[6]);
          obj = {};
          obj.cooldownDurationMs = WEEK;
          return tmp9Result.isTimeRecurringDismissibleContentDismissed(global, obj).isDismissed;
        } else {
          tmp9Result1 = tmp9(tmp10[5]);
          tmp11 = arg1;
          tmp12 = dependencyMap;
          if (tmp9Result1.isSingleUseGuildDismissibleContent(global)) {
            num6 = 6;
            tmp11Result = tmp11(tmp12[6]);
            return tmp11Result.UNSAFE_isSingleUseGuildDismissibleContentDismissed(global, guildId);
          } else {
            tmp11Result1 = tmp11(tmp12[5]);
            tmp13 = arg1;
            tmp14 = dependencyMap;
            if (tmp11Result1.isTimeRecurringGuildDismissibleContent(global)) {
              num5 = 6;
              tmp13Result = tmp13(tmp14[6]);
              return tmp13Result.UNSAFE_isTimeRecurringGuildDismissibleContentDismissed(global, guildId);
            } else {
              tmp13Result1 = tmp13(tmp14[5]);
              if (tmp13Result1.isSnowflakeBoundGuildDismissibleContent(global)) {
                tmp21 = arg1;
                tmp22 = dependencyMap;
                num4 = 6;
                obj10 = arg1(dependencyMap[6]);
                return obj10.UNSAFE_isSnowflakeBoundGuildDismissibleContentDismissed(global, guildId);
              } else {
                tmp15 = closure_4;
                userContent = closure_4.settings.userContent;
                tmp16 = null;
                dismissedContents = undefined;
                if (null != userContent) {
                  dismissedContents = userContent.dismissedContents;
                }
                hasBitResult = null != dismissedContents;
                if (hasBitResult) {
                  tmp19 = arg1;
                  tmp20 = dependencyMap;
                  num3 = 8;
                  obj9 = arg1(dependencyMap[8]);
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
  const fn = function*(CHANNEL_NOTICE_INVITE, forceTrack) {
    let obj = forceTrack;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    if (!callback2(CHANNEL_NOTICE_INVITE, { bypassNewUserCheck: true })) {
      const result = callback(closure_2[6]).markDismissibleContentAsDismissedPreProcessing(CHANNEL_NOTICE_INVITE, obj);
      const obj2 = callback(closure_2[6]);
      yield callback(closure_2[10]).addDismissedContent(CHANNEL_NOTICE_INVITE);
      const obj3 = callback(closure_2[10]);
      const result1 = callback(closure_2[6]).markDismissibleContentAsDismissedPostProcessing(CHANNEL_NOTICE_INVITE, obj);
      const obj4 = callback(closure_2[6]);
    }
  };
  fn.next();
  return fn;
}
class UNSAFE_isSnowflakeBoundDismissibleContentDismissed {
  constructor(arg0, arg1) {
    obj = arg1(dependencyMap[4]);
    if (obj.disableNewUserDismissibleContent(global)) {
      return { "Bool(false)": true, "Bool(false)": true };
    } else {
      tmp = closure_4;
      userContent = closure_4.settings.userContent;
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
        tmp6 = importDefault;
        tmp7 = dependencyMap;
        num = 7;
        obj3 = importDefault(dependencyMap[7]);
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
  const fn = function*(content, guildId, forceTrack) {
    let obj = forceTrack;
    if (obj === undefined) {
      obj = {};
    }
    yield undefined;
    const result = callback(closure_2[6]).markDismissibleContentAsDismissedPreProcessing(content, obj);
    const obj2 = callback(closure_2[6]);
    yield callback(closure_2[6]).UNSAFE_addGuildDismissedContent(content, guildId, 1);
    const obj3 = callback(closure_2[6]);
    const result1 = callback(closure_2[6]).markDismissibleContentAsDismissedPostProcessing(content, obj);
  };
  fn.next();
  return fn;
}
async function _UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(content, guildId, forceTrack, arg3) {
  const guildNextNumTimesDismissed = callback(closure_2[6]).getGuildNextNumTimesDismissed(content, guildId);
  const obj = callback(closure_2[6]);
  const result = callback(closure_2[6]).markDismissibleContentAsDismissedPreProcessing(content, forceTrack);
  const obj2 = callback(closure_2[6]);
  yield callback(closure_2[6]).UNSAFE_addTimeRecurringGuildDismissedContent(content, guildId, guildNextNumTimesDismissed);
  const obj3 = callback(closure_2[6]);
  const result1 = callback(closure_2[6]).markDismissibleContentAsDismissedPostProcessing(content, forceTrack);
}
async function _UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(content, lastDismissedObjectId, guildId, groupName, arg4) {
  let obj = callback(closure_2[6]);
  const guildNextNumTimesDismissed = obj.getGuildNextNumTimesDismissed(content, guildId);
  obj = {};
  const merged = Object.assign(groupName);
  obj["snowflakeId"] = lastDismissedObjectId;
  const result = callback(closure_2[6]).markDismissibleContentAsDismissedPreProcessing(content, obj);
  const obj2 = callback(closure_2[6]);
  yield callback(closure_2[6]).UNSAFE_addSnowflakeBoundGuildDismissedContent(content, lastDismissedObjectId, guildId, guildNextNumTimesDismissed);
  const obj4 = callback(closure_2[6]);
  const result1 = callback(closure_2[6]).markDismissibleContentAsDismissedPostProcessing(content, groupName);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/dismissible_content/DismissibleContentUnsafeUtils.tsx");

export { UNSAFE_isDismissibleContentDismissed };
export const useIsDismissibleContentDismissed_UNSAFE = function useIsDismissibleContentDismissed_UNSAFE(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, arg1) {
  let obj = arg1;
  arg1 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
  if (arg1 === undefined) {
    obj = {};
  }
  const importDefault = obj;
  const items = [closure_4, closure_5];
  return arg1(dependencyMap[9]).useStateFromStores(items, () => callback(arg0, obj));
};
export const UNSAFE_markDismissibleContentAsDismissed = function UNSAFE_markDismissibleContentAsDismissed(DONUT_MOBILE_NUX, arg1) {
  return _UNSAFE_markDismissibleContentAsDismissed(...arguments);
};
export { UNSAFE_isSnowflakeBoundDismissibleContentDismissed };
export const UNSAFE_markSingleUseGuildDismissibleContentAsDismissed = function UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(MOBILE_ACCOUNT_LINKING_BANNER, guildId, arg2) {
  return _UNSAFE_markSingleUseGuildDismissibleContentAsDismissed(...arguments);
};
export const UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed = function UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(arg0, arg1, arg2) {
  return _UNSAFE_markTimeRecurringGuildDismissibleContentAsDismissed(...arguments);
};
export const UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed = function UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(arg0, arg1, arg2, arg3) {
  return _UNSAFE_markSnowflakeBoundGuildDismissibleContentAsDismissed(...arguments);
};
