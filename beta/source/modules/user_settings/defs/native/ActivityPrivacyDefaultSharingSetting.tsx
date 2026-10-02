// Module ID: 15513
// Function ID: 15514
// Name: ActivityPrivacyDefaultSharingSetting
// Dependencies: [19, 7421, 558, 576, 1198, 1127, 2027, 15514, 14375, 4801, 15515, 1987, 10874, 2]

// Module 15513 (ActivityPrivacyDefaultSharingSetting)
import react2 from "react" /* 576 */;
import intl6 from "intl" /* 1127 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1198 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import UserSettings from "UserSettings" /* 2027 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import SettingsConstants from "SettingsConstants" /* 7421 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 14375 */;
import ActivityPrivacyMatchingExperiment from "ActivityPrivacyMatchingExperiment" /* 15514 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF, label: intl.string(intl6.t.FzgQna), subLabel: intl2.string(intl6.t.SQxoyc) };
    intl = tmp(1127).intl;
    intl2 = tmp(1127).intl;
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, label: intl3.string(intl6.t["1hvuGH"]), subLabel: intl4.string(intl6.t.odUCPE) };
    intl3 = tmp(1127).intl;
    intl4 = tmp(1127).intl;
    cResult[1] = obj3;
    tmp5 = obj3;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [first, tmp5, ];
    const obj4 = { value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON, label: intl5.string(intl6.t.fQc5la) };
    intl5 = tmp(1127).intl;
    items[2] = obj4;
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : (() => react.useMemo(() => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  const obj = { value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF, label: intl.string(intl6.t.FzgQna), subLabel: intl2.string(intl6.t.SQxoyc) };
  intl = intl6.intl;
  intl2 = intl6.intl;
  const items = [obj, , ];
  const obj2 = { value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, label: intl3.string(intl6.t["1hvuGH"]), subLabel: intl4.string(intl6.t.odUCPE) };
  intl3 = intl6.intl;
  intl4 = intl6.intl;
  items[1] = obj2;
  const obj3 = { value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON, label: intl5.string(intl6.t.fQc5la) };
  intl5 = intl6.intl;
  items[2] = obj3;
  return items;
}, []));
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
let obj = {
  useTitle() {
    const intl = intl6.intl;
    return intl.string(intl6.t.vpgck1);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  usePredicate() {
    const obj = ActivityPrivacyMatchingExperiment;
    return obj.useIsInActivityPrivacyCopyExperiment("ActivityPrivacyDefaultSharingSetting");
  },
  useOptions: tmp2,
  useValue: () => {
    const DefaultGuildsActivityRestrictedV2 = UserSettings.DefaultGuildsActivityRestrictedV2;
    return DefaultGuildsActivityRestrictedV2.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const DefaultGuildsActivityRestrictedV2 = UserSettings.DefaultGuildsActivityRestrictedV2;
    const setting = DefaultGuildsActivityRestrictedV2.getSetting();
    const DefaultGuildsActivityRestrictedV22 = UserSettings.DefaultGuildsActivityRestrictedV2;
    DefaultGuildsActivityRestrictedV22.updateSetting(NumberResult);
    const obj = ActivityPrivacyMatchingExperiment;
    const tmp3 = dependencyMap;
    if (obj.getIsInActivityPrivacyUpsellExperiment("ActivityPrivacyDefaultSharingSetting")) {
      const tmp2Result = ActivityPrivacyUpsellUtils;
      const affectedGuilds = tmp2Result.computeAffectedGuilds(setting, NumberResult);
      if (null != affectedGuilds) {
        const tmp2Result2 = ActivityPrivacyUpsellUtils;
        const activityRestrictionSettingName = tmp2Result2.getActivityRestrictionSettingName(NumberResult);
        const obj2 = { direction: null, affectedGuildIds: null, settingName: activityRestrictionSettingName };
        ({ direction: obj5.direction, affectedGuildIds: obj5.affectedGuildIds } = affectedGuilds);
        const obj4 = ActionSheetActionCreatorsDefault;
        obj4.openLazy(asyncRequire(15515, tmp3.paths), "ActivityPrivacyUpsellActionSheet", obj2);
      }
    }
  }
};
const radio = SettingBuilders.createRadio(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyDefaultSharingSetting.tsx");

export default radio;
