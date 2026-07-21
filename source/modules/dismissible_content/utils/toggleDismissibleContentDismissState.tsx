// Module ID: 14464
// Function ID: 109004
// Name: toggleDismissibleContentShared
// Dependencies: [872415253, 3791650837, 3103784964, 469762065, 2264924176, 2801795128, 33554488, 4026531840, 311074, 3704832, 3705088, 3705344]
// Exports: default

// Module 14464 (toggleDismissibleContentShared)
function toggleDismissibleContentShared(dismissibleContent, arg1, guildId) {
  let tmp = null;
  if (!arg1) {
    tmp = dismissibleContent;
  }
  const result = require(dependencyMap[2]).overrideDCFLastDCDismissed(tmp, guildId);
}
require(dependencyMap[0]).useCallback;
let closure_4 = importDefault(dependencyMap[1]);
const _module = require(dependencyMap[11]);
const result = _module.fileFinishedImporting("modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx");

export default function useToggleDismissibleContentDismissState(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER) {
  const require = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
  let obj = require(dependencyMap[7]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
  const importDefault = stateFromStores;
  obj = { cooldownDurationMs: importDefault(dependencyMap[9]).Millis.WEEK, guildId: stateFromStores };
  const result = require(dependencyMap[8]).useIsDismissibleContentDismissed_UNSAFE(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, obj);
  const dependencyMap = result;
  const items1 = [APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, stateFromStores, result];
  obj = {
    isDismissed: result,
    handleToggleDismissState: useCallback(() => {
      if (obj.isVersionedDismissibleContent(arg0)) {
        const versionedDismissibleContentCurrentVersion = arg0(result[3]).getVersionedDismissibleContentCurrentVersion(arg0);
        const obj22 = arg0(result[3]);
        const nextNumTimesDismissed = arg0(result[4]).getNextNumTimesDismissed(arg0, {});
        callback(arg0, result);
        let obj24 = arg0;
        if (result) {
          obj24 = obj24(tmp96[5]);
          const result = obj24.removeDismissedRecurringContent(tmp88);
          let flag10 = false;
        } else {
          const result1 = obj24(tmp96[4]).addVersionedDismissedContent(tmp88, versionedDismissibleContentCurrentVersion, nextNumTimesDismissed);
          flag10 = true;
          const obj24Result = obj24(tmp96[4]);
        }
        const obj23 = arg0(result[4]);
      } else {
        if (obj2.isSnowflakeBoundDismissibleContent(arg0)) {
          const nextNumTimesDismissed1 = arg0(result[4]).getNextNumTimesDismissed(arg0, {});
          callback(arg0, result);
          let obj19 = arg0;
          if (result) {
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
          const obj18 = arg0(result[4]);
        } else {
          if (obj3.isTimeRecurringDismissibleContent(arg0)) {
            callback(arg0, result);
            let obj15 = arg0;
            if (result) {
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
            if (obj4.isSingleUseGuildDismissibleContent(arg0)) {
              if (null == stateFromStores) {
                let flag = false;
              } else {
                let num12 = 1;
                if (null != tmp55) {
                  num12 = arg0(result[4]).getGuildNextNumTimesDismissed(tmp54, tmp55);
                  const obj13 = arg0(result[4]);
                }
                callback(tmp54, tmp56, tmp55);
                const obj14 = arg0(result[4]);
                if (tmp56) {
                  num12 = obj14.UNSAFE_removeGuildDismissedContent(tmp54, tmp55, num12 - 1);
                  let flag7 = false;
                } else {
                  const result6 = obj14.UNSAFE_addGuildDismissedContent(tmp54, tmp55, num12);
                  flag7 = true;
                }
              }
            } else {
              if (obj5.isTimeRecurringGuildDismissibleContent(arg0)) {
                if (null == stateFromStores) {
                  flag = false;
                } else {
                  let num8 = 1;
                  if (null != tmp43) {
                    num8 = arg0(result[4]).getGuildNextNumTimesDismissed(tmp42, tmp43);
                    const obj11 = arg0(result[4]);
                  }
                  callback(tmp42, tmp44, tmp43);
                  const obj12 = arg0(result[4]);
                  if (tmp44) {
                    num8 = obj12.UNSAFE_removeTimeRecurringGuildDismissedContent(tmp42, tmp43, num8 - 1);
                    let flag5 = false;
                  } else {
                    const result7 = obj12.UNSAFE_addTimeRecurringGuildDismissedContent(tmp42, tmp43, num8);
                    flag5 = true;
                  }
                }
              } else {
                if (obj6.isSnowflakeBoundGuildDismissibleContent(arg0)) {
                  if (null == stateFromStores) {
                    flag = false;
                  } else {
                    let num3 = 1;
                    if (null != tmp24) {
                      num3 = arg0(result[4]).getGuildNextNumTimesDismissed(tmp16, tmp24);
                      const obj8 = arg0(result[4]);
                    }
                    callback(tmp16, tmp25, tmp24);
                    const obj9 = arg0(result[4]);
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
                    const tmp31 = arg0;
                  }
                } else {
                  callback(tmp16, result);
                  const obj7 = arg0(result[5]);
                  if (result) {
                    const result9 = obj7.removeDismissedContent(tmp16);
                    flag = false;
                  } else {
                    obj7.addDismissedContent(tmp16);
                    flag = true;
                  }
                }
                const obj6 = arg0(result[10]);
              }
              const obj5 = arg0(result[10]);
            }
            return flag;
          }
          const obj3 = arg0(result[10]);
        }
        const obj2 = arg0(result[10]);
      }
    }, items1)
  };
  return obj;
};
