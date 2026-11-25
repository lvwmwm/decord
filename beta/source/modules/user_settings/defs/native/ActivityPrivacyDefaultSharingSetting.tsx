// Module ID: 17412
// Function ID: 17413
// Name: ActivityPrivacyDefaultSharingSetting
// Dependencies: [19, 8712, 1195, 1112, 4738, 16161, 5127, 17413, 2119, 11942, 2]

// Module 17412 (ActivityPrivacyDefaultSharingSetting)
import intl6 from "intl" /* 1112 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1195 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import UserSettings from "UserSettings" /* 4738 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import SettingsConstants from "SettingsConstants" /* 8712 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 16161 */;
import react from "react" /* 19 */;
import SettingBuilders from "SettingBuilders" /* 11942 */;
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
      obj3.openLazy(asyncRequire(17413, tmp3.paths), "ActivityPrivacyUpsellActionSheet", obj2);
    }
  }
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyDefaultSharingSetting.tsx");

export default radio;
