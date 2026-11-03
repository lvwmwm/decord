// Module ID: 18093
// Function ID: 18094
// Name: ActivityPrivacyDefaultSharingSetting
// Dependencies: [19, 8556, 1196, 1113, 4966, 16898, 5381, 18094, 2123, 11677, 2]

// Module 18093 (ActivityPrivacyDefaultSharingSetting)
import intl6 from "intl" /* 1113 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import asyncRequire from "asyncRequire" /* 2123 */;
import UserSettings from "UserSettings" /* 4966 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import SettingsConstants from "SettingsConstants" /* 8556 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 16898 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11677 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl6.intl;
    return intl.string(intl6.t.vpgck1);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
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
    const obj = ActivityPrivacyUpsellUtils;
    const affectedGuilds = obj.computeAffectedGuilds(setting, NumberResult);
    const tmp3 = dependencyMap;
    if (null != affectedGuilds) {
      const tmp2Result = ActivityPrivacyUpsellUtils;
      const activityRestrictionSettingName = tmp2Result.getActivityRestrictionSettingName(NumberResult);
      const obj2 = { direction: null, affectedGuildIds: null, settingName: activityRestrictionSettingName };
      ({ direction: obj4.direction, affectedGuildIds: obj4.affectedGuildIds } = affectedGuilds);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.openLazy(asyncRequire(18094, tmp3.paths), "ActivityPrivacyUpsellActionSheet", obj2);
    }
  }
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyDefaultSharingSetting.tsx");

export default radio;
