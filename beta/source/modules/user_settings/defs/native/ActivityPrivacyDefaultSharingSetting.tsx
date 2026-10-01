// Module ID: 15525
// Function ID: 15526
// Name: ActivityPrivacyDefaultSharingSetting
// Dependencies: [19, 7417, 1186, 1115, 2021, 15526, 14387, 4800, 15527, 1981, 11006, 2]

// Module 15525 (ActivityPrivacyDefaultSharingSetting)
import intl6 from "intl" /* 1115 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import UserSettings from "UserSettings" /* 2021 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 14387 */;
import ActivityPrivacyMatchingExperiment from "ActivityPrivacyMatchingExperiment" /* 15526 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
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
  useOptions() {
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
  },
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
        obj4.openLazy(asyncRequire(15527, tmp3.paths), "ActivityPrivacyUpsellActionSheet", obj2);
      }
    }
  }
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyDefaultSharingSetting.tsx");

export default radio;
