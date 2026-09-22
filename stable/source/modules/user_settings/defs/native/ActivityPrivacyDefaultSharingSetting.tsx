// Module ID: 15999
// Function ID: 16000
// Name: ActivityPrivacyDefaultSharingSetting
// Dependencies: [19, 8079, 1185, 1114, 1935, 16000, 14941, 4603, 16001, 1896, 11605, 2]

// Module 15999 (ActivityPrivacyDefaultSharingSetting)
import util from "util" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1185 */;
import UserSettings from "UserSettings" /* 1935 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import ActivityPrivacyMatchingExperiment from "ActivityPrivacyMatchingExperiment" /* 16000 */;
import noop from "module_19" /* 19 */;

require = fn;
const SettingBuilders = fn(11605);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.vpgck1);
  },
  parent: fn(8079).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  usePredicate() {
    return ActivityPrivacyMatchingExperiment.useIsInActivityPrivacyCopyExperiment("ActivityPrivacyDefaultSharingSetting");
  },
  useOptions() {
    return noop.useMemo(() => {
      const obj = { value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF, label: null, subLabel: null };
      const intl = util.intl;
      obj.label = intl.string(util.t.FzgQna);
      const intl2 = util.intl;
      obj.subLabel = intl2.string(util.t.SQxoyc);
      const items = [obj, , ];
      const obj2 = { value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, label: null, subLabel: null };
      const intl3 = util.intl;
      obj2.label = intl3.string(util.t["1hvuGH"]);
      const intl4 = util.intl;
      obj2.subLabel = intl4.string(util.t.odUCPE);
      items[1] = obj2;
      const obj3 = { value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON, label: null };
      const intl5 = util.intl;
      obj3.label = intl5.string(util.t.fQc5la);
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
    if (obj.getIsInActivityPrivacyUpsellExperiment("ActivityPrivacyDefaultSharingSetting")) {
      const affectedGuilds = tmp2(14941).computeAffectedGuilds(setting, NumberResult);
      if (null != affectedGuilds) {
        const activityRestrictionSettingName = tmp2(14941).getActivityRestrictionSettingName(NumberResult);
        const tmp2Result2 = tmp2(14941);
        const obj2 = { direction: null, affectedGuildIds: null, settingName: null };
        ({ direction: obj5.direction, affectedGuildIds: obj5.affectedGuildIds } = affectedGuilds);
        obj2.settingName = activityRestrictionSettingName;
        ActionSheetActionCreatorsDefault.openLazy(tmp2(1896)(16001, dependencyMap.paths), "ActivityPrivacyUpsellActionSheet", obj2);
      }
      const tmp2Result = tmp2(14941);
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyDefaultSharingSetting.tsx");

export default radio;
