// Module ID: 15172
// Function ID: 15173
// Name: toggleDismissibleContentDismissState
// Dependencies: [19, 4655, 9700, 2043, 2031, 2026, 11, 504, 4654, 1091, 2030, 2]
// Exports: default

// Module 15172 (toggleDismissibleContentDismissState)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react from "react" /* 19 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2026 */;
import DismissibleContentTypes from "DismissibleContentTypes" /* 2030 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2031 */;
import VersionedDismissibleContentUtils from "VersionedDismissibleContentUtils" /* 2043 */;
import DismissibleContentFrameworkActionCreators from "DismissibleContentFrameworkActionCreators" /* 9700 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const useCallback = react.useCallback;
let result = size.fileFinishedImporting("modules/dismissible_content/utils/toggleDismissibleContentDismissState.tsx");

export default function useToggleDismissibleContentDismissState(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER) {
  let guildId;
  _require = APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER;
  let obj = require("get initialized");
  const items = [SelectedGuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
  const obj2 = require("DismissibleContentUnsafeUtils");
  const obj3 = { cooldownDurationMs: stateFromStores(1091).Millis.WEEK, guildId: stateFromStores };
  const result = obj2.useIsDismissibleContentDismissed_UNSAFE(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, obj3);
  dependencyMap = result;
  const items1 = [APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER, stateFromStores, result];
  const obj4 = {
    isDismissed: result,
    handleToggleDismissState: useCallback(() => {
      let flag;
      const obj = DismissibleContentTypes;
      if (obj.isVersionedDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
        let flag10;
        const tmpResult = VersionedDismissibleContentUtils;
        const versionedDismissibleContentCurrentVersion = tmpResult.getVersionedDismissibleContentCurrentVersion(tmp3);
        const tmpResult29 = DismissibleContentUtils;
        const nextNumTimesDismissed = tmpResult29.getNextNumTimesDismissed(tmp3, {});
        let tmp65 = null;
        const overrideDCFLastDCDismissed7 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
        DismissibleContentFrameworkActionCreators;
        const tmp61 = dependencyMap;
        if (!dependencyMap) {
          tmp65 = tmp3;
        }
        dependencyMap = overrideDCFLastDCDismissed7(tmp65, undefined);
        if (tmp61) {
          const tmpResult31 = UserSettingsProtoActionCreators;
          const result1 = tmpResult31.removeDismissedRecurringContent(tmp3);
          flag10 = false;
        } else {
          const tmpResult32 = DismissibleContentUtils;
          const result2 = tmpResult32.addVersionedDismissedContent(tmp3, versionedDismissibleContentCurrentVersion, nextNumTimesDismissed);
          flag10 = true;
        }
        flag = flag10;
      } else {
        const tmpResult33 = DismissibleContentTypes;
        if (tmpResult33.isSnowflakeBoundDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
          let flag9;
          const tmpResult34 = DismissibleContentUtils;
          const nextNumTimesDismissed1 = tmpResult34.getNextNumTimesDismissed(tmp3, {});
          let tmp52 = null;
          const overrideDCFLastDCDismissed6 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
          DismissibleContentFrameworkActionCreators;
          const tmp49 = dependencyMap;
          if (!dependencyMap) {
            tmp52 = tmp3;
          }
          const result3 = overrideDCFLastDCDismissed6(tmp52, undefined);
          if (tmp49) {
            const tmpResult36 = UserSettingsProtoActionCreators;
            const result4 = tmpResult36.removeDismissedRecurringContent(tmp3);
            flag9 = false;
          } else {
            const addSnowflakeBoundDismissedContent = DismissibleContentUtils.addSnowflakeBoundDismissedContent;
            DismissibleContentUtils;
            const _Date2 = Date;
            const fromTimestamp2 = SnowflakeUtilsDefault.fromTimestamp;
            SnowflakeUtilsDefault;
            const timestamp = Date.now();
            const result5 = addSnowflakeBoundDismissedContent(tmp3, fromTimestamp2(timestamp + tmp(2031).SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS), nextNumTimesDismissed1);
            flag9 = true;
          }
          flag = flag9;
        } else {
          const tmpResult38 = DismissibleContentTypes;
          if (tmpResult38.isTimeRecurringDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
            let flag8;
            let tmp44 = null;
            const overrideDCFLastDCDismissed5 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
            DismissibleContentFrameworkActionCreators;
            const tmp42 = dependencyMap;
            if (!dependencyMap) {
              tmp44 = tmp3;
            }
            const result6 = overrideDCFLastDCDismissed5(tmp44, undefined);
            if (tmp42) {
              const tmpResult40 = UserSettingsProtoActionCreators;
              const result7 = tmpResult40.removeDismissedRecurringContent(tmp3);
              flag8 = false;
            } else {
              const addTimeRecurringDismissedContent = DismissibleContentUtils.addTimeRecurringDismissedContent;
              DismissibleContentUtils;
              const tmpResult42 = DismissibleContentUtils;
              const result8 = addTimeRecurringDismissedContent(tmp3, tmpResult42.getNextNumTimesDismissed(tmp3, {}));
              flag8 = true;
            }
            flag = flag8;
          } else {
            const tmpResult43 = DismissibleContentTypes;
            if (tmpResult43.isSingleUseGuildDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
              let flag6 = false;
              if (null != stateFromStores) {
                let flag7;
                let num6 = 1;
                if (null != stateFromStores) {
                  const tmpResult44 = DismissibleContentUtils;
                  num6 = tmpResult44.getGuildNextNumTimesDismissed(tmp3, tmp34);
                }
                let tmp38 = null;
                const overrideDCFLastDCDismissed4 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
                DismissibleContentFrameworkActionCreators;
                if (!dependencyMap) {
                  tmp38 = tmp3;
                }
                const result9 = overrideDCFLastDCDismissed4(tmp38, tmp34);
                const tmpResult46 = DismissibleContentUtils;
                if (dependencyMap) {
                  const result10 = tmpResult46.UNSAFE_removeGuildDismissedContent(tmp3, tmp34, num6 - 1);
                  flag7 = false;
                } else {
                  const result11 = tmpResult46.UNSAFE_addGuildDismissedContent(tmp3, tmp34, num6);
                  flag7 = true;
                }
                flag6 = flag7;
              }
              flag = flag6;
            } else {
              const tmpResult47 = DismissibleContentTypes;
              if (tmpResult47.isTimeRecurringGuildDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
                let flag4 = false;
                if (null != stateFromStores) {
                  let flag5;
                  let num4 = 1;
                  if (null != stateFromStores) {
                    const tmpResult48 = DismissibleContentUtils;
                    num4 = tmpResult48.getGuildNextNumTimesDismissed(tmp3, tmp26);
                  }
                  let tmp30 = null;
                  const overrideDCFLastDCDismissed3 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
                  DismissibleContentFrameworkActionCreators;
                  if (!dependencyMap) {
                    tmp30 = tmp3;
                  }
                  const result12 = overrideDCFLastDCDismissed3(tmp30, tmp26);
                  const tmpResult50 = DismissibleContentUtils;
                  if (dependencyMap) {
                    const result13 = tmpResult50.UNSAFE_removeTimeRecurringGuildDismissedContent(tmp3, tmp26, num4 - 1);
                    flag5 = false;
                  } else {
                    const result14 = tmpResult50.UNSAFE_addTimeRecurringGuildDismissedContent(tmp3, tmp26, num4);
                    flag5 = true;
                  }
                  flag4 = flag5;
                }
                flag = flag4;
              } else {
                const tmpResult51 = DismissibleContentTypes;
                if (tmpResult51.isSnowflakeBoundGuildDismissibleContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER)) {
                  let flag2 = false;
                  if (null != stateFromStores) {
                    let flag3;
                    let num2 = 1;
                    if (null != stateFromStores) {
                      const tmpResult52 = DismissibleContentUtils;
                      num2 = tmpResult52.getGuildNextNumTimesDismissed(tmp3, tmp10);
                    }
                    let tmp14 = null;
                    const overrideDCFLastDCDismissed2 = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
                    DismissibleContentFrameworkActionCreators;
                    if (!dependencyMap) {
                      tmp14 = tmp3;
                    }
                    const result15 = overrideDCFLastDCDismissed2(tmp14, tmp10);
                    const tmpResult54 = DismissibleContentUtils;
                    if (dependencyMap) {
                      const result16 = tmpResult54.UNSAFE_removeSnowflakeBoundGuildDismissedContent(tmp3, tmp10, num2 - 1);
                      flag3 = false;
                    } else {
                      const UNSAFE_addSnowflakeBoundGuildDismissedContent = tmpResult54.UNSAFE_addSnowflakeBoundGuildDismissedContent;
                      const _Date = Date;
                      const fromTimestamp = SnowflakeUtilsDefault.fromTimestamp;
                      SnowflakeUtilsDefault;
                      const timestamp1 = Date.now();
                      const result17 = UNSAFE_addSnowflakeBoundGuildDismissedContent(tmp3, fromTimestamp(timestamp1 + tmp(2031).SNOWFLAKE_BOUND_DISMISSIBLE_CONTENT_DURATION_MS), tmp10, num2);
                      flag3 = true;
                    }
                    flag2 = flag3;
                  }
                  flag = flag2;
                } else {
                  let tmp6 = null;
                  const overrideDCFLastDCDismissed = DismissibleContentFrameworkActionCreators.overrideDCFLastDCDismissed;
                  DismissibleContentFrameworkActionCreators;
                  const tmp4 = dependencyMap;
                  if (!dependencyMap) {
                    tmp6 = tmp3;
                  }
                  const result18 = overrideDCFLastDCDismissed(tmp6, undefined);
                  const tmpResult56 = UserSettingsProtoActionCreators;
                  if (tmp4) {
                    const result19 = tmpResult56.removeDismissedContent(tmp3);
                    flag = false;
                  } else {
                    tmpResult56.addDismissedContent(APP_LAUNCHER_ONBOARDING_ACTIVITIES_BANNER);
                    flag = true;
                  }
                }
              }
            }
          }
        }
      }
      return flag;
    }, items1)
  };
  return obj4;
};
