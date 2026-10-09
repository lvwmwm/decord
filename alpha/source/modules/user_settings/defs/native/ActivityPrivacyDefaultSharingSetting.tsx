// Module ID: 16229
// Function ID: 16230
// Name: ActivityPrivacyDefaultSharingSetting
// Dependencies: [19, 7974, 558, 576, 1209, 1126, 2041, 15048, 5055, 16230, 2000, 10629, 2]

// Module 16229 (ActivityPrivacyDefaultSharingSetting)
import react2 from "react" /* 576 */;
import intl6 from "intl" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1209 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import UserSettings from "UserSettings" /* 2041 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 15048 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOptions() {
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
    intl = tmp(1126).intl;
    intl2 = tmp(1126).intl;
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, label: intl3.string(intl6.t["1hvuGH"]), subLabel: intl4.string(intl6.t.odUCPE) };
    intl3 = tmp(1126).intl;
    intl4 = tmp(1126).intl;
    cResult[1] = obj3;
    tmp5 = obj3;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [first, tmp5, ];
    const obj4 = { value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON, label: intl5.string(intl6.t.fQc5la) };
    intl5 = tmp(1126).intl;
    items[2] = obj4;
    cResult[2] = items;
    tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  return tmp6;
}) : (function useOptions() {
  return react.useMemo(() => {
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
  }, []);
});
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
let obj = {
  useTitle() {
    const intl = intl6.intl;
    return intl.string(intl6.t.vpgck1);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useOptions: tmp2,
  useValue() {
    const DefaultGuildsActivityRestrictedV2 = UserSettings.DefaultGuildsActivityRestrictedV2;
    return DefaultGuildsActivityRestrictedV2.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const DefaultGuildsActivityRestrictedV2 = UserSettings.DefaultGuildsActivityRestrictedV2;
    const setting = DefaultGuildsActivityRestrictedV2.getSetting();
    const DefaultGuildsActivityRestrictedV22 = UserSettings.DefaultGuildsActivityRestrictedV2;
    DefaultGuildsActivityRestrictedV22.updateSetting(NumberResult);
    const obj = ActivityPrivacyUpsellUtils;
    const affectedGuilds = obj.computeAffectedGuilds(setting, NumberResult);
    const tmp3 = dependencyMap;
    if (null != affectedGuilds) {
      const tmp2Result = ActivityPrivacyUpsellUtils;
      const activityRestrictionSettingName = tmp2Result.getActivityRestrictionSettingName(NumberResult);
      const obj2 = { direction: null, affectedGuildIds: null, settingName: activityRestrictionSettingName };
      ({ direction: obj4.direction, affectedGuildIds: obj4.affectedGuildIds } = affectedGuilds);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.openLazy(asyncRequire(16230, tmp3.paths), "ActivityPrivacyUpsellActionSheet", obj2);
    }
  }
};
const radio = SettingBuilders.createRadio(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyDefaultSharingSetting.tsx");

export default radio;
