// Module ID: 14586
// Function ID: 111207
// Name: toggleDismissibleContentShared
// Dependencies: [31, 3947, 12996, 1346, 1336, 1331, 21, 566, 3946, 664, 1335, 2]
// Exports: default

// Module 14586 (toggleDismissibleContentShared)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function toggleDismissibleContentShared(dismissibleContent, arg1, guildId) {
  let tmp = null;
  if (!arg1) {
    tmp = dismissibleContent;
  }
  const result = require(12996) /* handleDCShownToUser */.overrideDCFLastDCDismissed(tmp, guildId);
}
require("result").useCallback;
let result = require("handleDCShownToUser").fileFinishedImporting("modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx");

export default function useToggleDismissibleContentDismissState(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER) {
  const _require = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
  let obj = _require(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getGuildId());
  obj = { cooldownDurationMs: stateFromStores(664).Millis.WEEK, guildId: stateFromStores };
  let result = _require(3946).useIsDismissibleContentDismissed_UNSAFE(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, obj);
  const dependencyMap = result;
  const items1 = [APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, stateFromStores, result];
  obj = {
    isDismissed: result,
    handleToggleDismissState: useCallback(() => {
      if (obj.isVersionedDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
        const versionedDismissibleContentCurrentVersion = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[3]).getVersionedDismissibleContentCurrentVersion(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
        const obj22 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[3]);
        const nextNumTimesDismissed = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[4]).getNextNumTimesDismissed(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, {});
        outer1_5(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, closure_2);
        let obj24 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
        if (closure_2) {
          obj24 = obj24(tmp96[5]);
          result = obj24.removeDismissedRecurringContent(tmp88);
          let flag10 = false;
        } else {
          const result1 = obj24(tmp96[4]).addVersionedDismissedContent(tmp88, versionedDismissibleContentCurrentVersion, nextNumTimesDismissed);
          flag10 = true;
          const obj24Result = obj24(tmp96[4]);
        }
        const obj23 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[4]);
      } else {
        if (obj2.isSnowflakeBoundDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
          const nextNumTimesDismissed1 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[4]).getNextNumTimesDismissed(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, {});
          outer1_5(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, closure_2);
          let obj19 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
          if (closure_2) {
            obj19 = obj19(tmp81[5]);
            const result2 = obj19.removeDismissedRecurringContent(tmp74);
            let flag9 = false;
          } else {
            const obj19Result = obj19(tmp81[4]);
            const _Date2 = Date;
            const timestamp = Date.now();
            const result3 = obj19Result.addSnowflakeBoundDismissedContent(tmp74, stateFromStores(tmp81[6]).fromTimestamp(timestamp + obj19(tmp81[4]).SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS), nextNumTimesDismissed1);
            flag9 = true;
            const obj21 = stateFromStores(tmp81[6]);
          }
          const obj18 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[4]);
        } else {
          if (obj3.isTimeRecurringDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
            outer1_5(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, closure_2);
            let obj15 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
            if (closure_2) {
              obj15 = obj15(tmp70[5]);
              const result4 = obj15.removeDismissedRecurringContent(tmp66);
              let flag8 = false;
            } else {
              let obj15Result = obj15(tmp70[4]);
              obj15Result = obj15(tmp70[4]);
              const result5 = obj15Result.addTimeRecurringDismissedContent(tmp66, obj15Result.getNextNumTimesDismissed(tmp66, {}));
              flag8 = true;
            }
          } else {
            if (obj4.isSingleUseGuildDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
              if (null == stateFromStores) {
                let flag = false;
              } else {
                let num12 = 1;
                if (null != tmp55) {
                  num12 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[4]).getGuildNextNumTimesDismissed(tmp54, tmp55);
                  const obj13 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[4]);
                }
                outer1_5(tmp54, tmp56, tmp55);
                const obj14 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[4]);
                if (tmp56) {
                  num12 = obj14.UNSAFE_removeGuildDismissedContent(tmp54, tmp55, num12 - 1);
                  let flag7 = false;
                } else {
                  const result6 = obj14.UNSAFE_addGuildDismissedContent(tmp54, tmp55, num12);
                  flag7 = true;
                }
              }
            } else {
              if (obj5.isTimeRecurringGuildDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
                if (null == stateFromStores) {
                  flag = false;
                } else {
                  let num8 = 1;
                  if (null != tmp43) {
                    num8 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[4]).getGuildNextNumTimesDismissed(tmp42, tmp43);
                    const obj11 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[4]);
                  }
                  outer1_5(tmp42, tmp44, tmp43);
                  const obj12 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[4]);
                  if (tmp44) {
                    num8 = obj12.UNSAFE_removeTimeRecurringGuildDismissedContent(tmp42, tmp43, num8 - 1);
                    let flag5 = false;
                  } else {
                    const result7 = obj12.UNSAFE_addTimeRecurringGuildDismissedContent(tmp42, tmp43, num8);
                    flag5 = true;
                  }
                }
              } else {
                if (obj6.isSnowflakeBoundGuildDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
                  if (null == stateFromStores) {
                    flag = false;
                  } else {
                    let num3 = 1;
                    if (null != tmp24) {
                      num3 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[4]).getGuildNextNumTimesDismissed(tmp16, tmp24);
                      const obj8 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[4]);
                    }
                    outer1_5(tmp16, tmp25, tmp24);
                    const obj9 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[4]);
                    if (tmp25) {
                      num3 = obj9.UNSAFE_removeSnowflakeBoundGuildDismissedContent(tmp16, tmp24, num3 - 1);
                      let flag3 = false;
                    } else {
                      const _Date = Date;
                      const timestamp1 = Date.now();
                      const result8 = obj9.UNSAFE_addSnowflakeBoundGuildDismissedContent(tmp16, stateFromStores(tmp32[6]).fromTimestamp(timestamp1 + tmp31(tmp32[4]).SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS), tmp24, num3);
                      flag3 = true;
                      const obj10 = stateFromStores(tmp32[6]);
                    }
                    tmp31 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
                  }
                } else {
                  outer1_5(tmp16, closure_2);
                  const obj7 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[5]);
                  if (closure_2) {
                    const result9 = obj7.removeDismissedContent(tmp16);
                    flag = false;
                  } else {
                    obj7.addDismissedContent(tmp16);
                    flag = true;
                  }
                }
                obj6 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[10]);
              }
              obj5 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[10]);
            }
            return flag;
          }
          obj3 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[10]);
        }
        obj2 = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER(result[10]);
      }
    }, items1)
  };
  return obj;
};
