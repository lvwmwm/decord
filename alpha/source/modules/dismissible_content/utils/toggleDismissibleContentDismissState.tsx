// Module ID: 15908
// Function ID: 15909
// Name: toggleDismissibleContentDismissState
// Dependencies: [19, 4578, 10501, 2040, 2030, 2025, 11, 504, 4577, 1091, 2029, 2]
// Exports: default

// Module 15908 (toggleDismissibleContentDismissState)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _mod19 from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4578 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const UserSettingsProtoActionCreators = obj(2025);
const DismissibleContentTypes = obj(2029);
const DismissibleContentUtils = obj(2030);
const VersionedDismissibleContentUtils = obj(2040);
const DismissibleContentFrameworkActionCreators = obj(10501);
_mod19.useCallback;
let result = size.fileFinishedImporting("modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx");

export default function useToggleDismissibleContentDismissState(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER) {
  _require = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
  const items = [SelectedGuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => guildId.getGuildId());
  let obj = require("initialize");
  const obj2 = require("DismissibleContentUnsafeUtils");
  let result = obj2.useIsDismissibleContentDismissed_UNSAFE(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, { cooldownDurationMs: stateFromStores(1091).Millis.WEEK, guildId: stateFromStores });
  dependencyMap = result;
  const items1 = [APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, stateFromStores, result];
  const obj3 = { cooldownDurationMs: stateFromStores(1091).Millis.WEEK, guildId: stateFromStores };
  return {
    isDismissed: result,
    handleToggleDismissState: useCallback(() => {
      let obj = require;
      let result1 = dependencyMap;
      if (obj2.isVersionedDismissibleContent(closure_0)) {
        const versionedDismissibleContentCurrentVersion = VersionedDismissibleContentUtils.getVersionedDismissibleContentCurrentVersion(tmp2);
        const objResult = VersionedDismissibleContentUtils;
        const tmp55 = result;
        const nextNumTimesDismissed = DismissibleContentUtils.getNextNumTimesDismissed(tmp2, {});
        const objResult28 = DismissibleContentUtils;
        let tmp58 = null;
        if (!result) {
          tmp58 = tmp2;
        }
        result = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp58, undefined);
        if (tmp55) {
          obj = UserSettingsProtoActionCreators;
          result1 = obj.removeDismissedRecurringContent(tmp2);
          let flag10 = false;
        } else {
          const result2 = DismissibleContentUtils.addVersionedDismissedContent(tmp2, versionedDismissibleContentCurrentVersion, nextNumTimesDismissed);
          flag10 = true;
          const objResult30 = DismissibleContentUtils;
        }
        const objResult29 = DismissibleContentFrameworkActionCreators;
      } else {
        if (objResult31.isSnowflakeBoundDismissibleContent(tmp2)) {
          const nextNumTimesDismissed1 = DismissibleContentUtils.getNextNumTimesDismissed(tmp2, {});
          const objResult32 = DismissibleContentUtils;
          const tmp45 = result;
          let tmp47 = null;
          if (!result) {
            tmp47 = tmp2;
          }
          const result3 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp47, undefined);
          if (tmp45) {
            const result4 = UserSettingsProtoActionCreators.removeDismissedRecurringContent(tmp2);
            let flag9 = false;
            const objResult34 = UserSettingsProtoActionCreators;
          } else {
            const objResult35 = DismissibleContentUtils;
            const _Date2 = Date;
            const timestamp = Date.now();
            const result5 = objResult35.addSnowflakeBoundDismissedContent(tmp2, SnowflakeUtilsDefault.fromTimestamp(timestamp + DismissibleContentUtils.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS), nextNumTimesDismissed1);
            flag9 = true;
          }
          const objResult33 = DismissibleContentFrameworkActionCreators;
        } else {
          if (objResult36.isTimeRecurringDismissibleContent(tmp2)) {
            let tmp40 = null;
            if (!result) {
              tmp40 = tmp2;
            }
            const result6 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp40, undefined);
            if (tmp39) {
              const result7 = UserSettingsProtoActionCreators.removeDismissedRecurringContent(tmp2);
              let flag8 = false;
              const objResult38 = UserSettingsProtoActionCreators;
            } else {
              const objResult39 = DismissibleContentUtils;
              const result8 = objResult39.addTimeRecurringDismissedContent(tmp2, DismissibleContentUtils.getNextNumTimesDismissed(tmp2, {}));
              flag8 = true;
              const objResult40 = DismissibleContentUtils;
            }
            const objResult37 = DismissibleContentFrameworkActionCreators;
            tmp39 = result;
          } else {
            if (objResult41.isSingleUseGuildDismissibleContent(tmp2)) {
              if (null == stateFromStores) {
                let flag = false;
              } else {
                let num5 = 1;
                let num6 = 1;
                if (null != tmp31) {
                  num6 = DismissibleContentUtils.getGuildNextNumTimesDismissed(tmp2, tmp31);
                  const objResult42 = DismissibleContentUtils;
                }
                let tmp34 = null;
                if (!tmp32) {
                  tmp34 = tmp2;
                }
                const result9 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp34, tmp31);
                const objResult44 = DismissibleContentUtils;
                if (tmp32) {
                  num5 = num6 - num5;
                  const result10 = objResult44.UNSAFE_removeGuildDismissedContent(tmp2, tmp31, num5);
                  let flag7 = false;
                } else {
                  const result11 = objResult44.UNSAFE_addGuildDismissedContent(tmp2, tmp31, num6);
                  flag7 = true;
                }
                const objResult43 = DismissibleContentFrameworkActionCreators;
              }
            } else {
              if (objResult45.isTimeRecurringGuildDismissibleContent(tmp2)) {
                if (null == stateFromStores) {
                  flag = false;
                } else {
                  let num3 = 1;
                  let num4 = 1;
                  if (null != tmp23) {
                    num4 = DismissibleContentUtils.getGuildNextNumTimesDismissed(tmp2, tmp23);
                    const objResult46 = DismissibleContentUtils;
                  }
                  let tmp26 = null;
                  if (!tmp24) {
                    tmp26 = tmp2;
                  }
                  const result12 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp26, tmp23);
                  const objResult48 = DismissibleContentUtils;
                  if (tmp24) {
                    num3 = num4 - num3;
                    const result13 = objResult48.UNSAFE_removeTimeRecurringGuildDismissedContent(tmp2, tmp23, num3);
                    let flag5 = false;
                  } else {
                    const result14 = objResult48.UNSAFE_addTimeRecurringGuildDismissedContent(tmp2, tmp23, num4);
                    flag5 = true;
                  }
                  const objResult47 = DismissibleContentFrameworkActionCreators;
                }
              } else {
                if (objResult49.isSnowflakeBoundGuildDismissibleContent(tmp2)) {
                  if (null == stateFromStores) {
                    flag = false;
                  } else {
                    let num = 1;
                    let num2 = 1;
                    if (null != tmp8) {
                      num2 = DismissibleContentUtils.getGuildNextNumTimesDismissed(tmp2, tmp8);
                      const objResult50 = DismissibleContentUtils;
                    }
                    let tmp11 = null;
                    if (!tmp9) {
                      tmp11 = tmp2;
                    }
                    const result15 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp11, tmp8);
                    const objResult52 = DismissibleContentUtils;
                    if (tmp9) {
                      num = num2 - num;
                      const result16 = objResult52.UNSAFE_removeSnowflakeBoundGuildDismissedContent(tmp2, tmp8, num);
                      let flag3 = false;
                    } else {
                      const _Date = Date;
                      const timestamp1 = Date.now();
                      const result17 = objResult52.UNSAFE_addSnowflakeBoundGuildDismissedContent(tmp2, SnowflakeUtilsDefault.fromTimestamp(timestamp1 + DismissibleContentUtils.SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS), tmp8, num2);
                      flag3 = true;
                    }
                    const objResult51 = DismissibleContentFrameworkActionCreators;
                  }
                } else {
                  let tmp4 = null;
                  if (!result) {
                    tmp4 = tmp2;
                  }
                  const result18 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed(tmp4, undefined);
                  const objResult54 = UserSettingsProtoActionCreators;
                  if (tmp3) {
                    const result19 = objResult54.removeDismissedContent(tmp2);
                    flag = false;
                  } else {
                    objResult54.addDismissedContent(tmp2);
                    flag = true;
                  }
                  const objResult53 = DismissibleContentFrameworkActionCreators;
                  tmp3 = result;
                }
                objResult49 = DismissibleContentTypes;
              }
              objResult45 = DismissibleContentTypes;
            }
            return flag;
          }
          objResult36 = DismissibleContentTypes;
        }
        objResult31 = DismissibleContentTypes;
      }
    }, items1)
  };
};
