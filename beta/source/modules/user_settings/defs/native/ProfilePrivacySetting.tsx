// Module ID: 14386
// Function ID: 14387
// Name: ProfilePrivacySetting
// Dependencies: [7417, 2021, 12667, 14387, 4800, 14388, 1981, 1115, 1186, 11006, 2]

// Module 14386 (ProfilePrivacySetting)
import intl7 from "intl" /* 1115 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import asyncRequire from "asyncRequire" /* 1981 */;
import UserSettings from "UserSettings" /* 2021 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import SettingsConstants from "SettingsConstants" /* 7417 */;
import PrivateProfilesExperiment from "PrivateProfilesExperiment" /* 12667 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 14387 */;
import SettingBuilders from "SettingBuilders" /* 11006 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let obj = {
  useTitle() {
    const intl = intl7.intl;
    return intl.string(intl7.t.Qnf32C);
  },
  parent: MobileUserSettings.DATA_AND_PRIVACY,
  useValue() {
    const ProfileVisibility = UserSettings.ProfileVisibility;
    return ProfileVisibility.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const ProfileVisibility = UserSettings.ProfileVisibility;
    const setting = ProfileVisibility.getSetting();
    const ProfileVisibility2 = UserSettings.ProfileVisibility;
    ProfileVisibility2.updateSetting(NumberResult);
    const obj = PrivateProfilesExperiment;
    const tmp3 = dependencyMap;
    if (obj.getIsInPrivateProfilesExperiment("ProfilePrivacySetting")) {
      const tmp2Result = ActivityPrivacyUpsellUtils;
      const profileToActivityUpsell = tmp2Result.computeProfileToActivityUpsell(setting, NumberResult);
      if (null != profileToActivityUpsell) {
        const obj2 = { direction: null, affectedGuildIds: null, settingName: null, mappedActivityValue: null };
        ({ direction: obj4.direction, affectedGuildIds: obj4.affectedGuildIds, settingName: obj4.settingName, mappedActivityValue: obj4.mappedActivityValue } = profileToActivityUpsell);
        const obj3 = ActionSheetActionCreatorsDefault;
        obj3.openLazy(asyncRequire(14388, tmp3.paths), "ProfileToActivityPrivacyUpsellActionSheet", obj2);
      }
    }
  },
  useOptions() {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    const obj = { label: intl.string(intl7.t.Boxc8R), subLabel: intl2.string(intl7.t["nLj+nc"]), value: preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS };
    intl = intl7.intl;
    intl2 = intl7.intl;
    const items = [obj, , ];
    const obj2 = { label: intl3.string(intl7.t.YOIKBt), subLabel: intl4.string(intl7.t.y0JZ4s), value: preloaded_user_settings.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS };
    intl3 = intl7.intl;
    intl4 = intl7.intl;
    items[1] = obj2;
    const obj3 = { label: intl5.string(intl7.t.u0nlJv), subLabel: intl6.string(intl7.t["4jnKHu"]), value: preloaded_user_settings.ProfileVisibility.FRIENDS_ONLY };
    intl5 = intl7.intl;
    intl6 = intl7.intl;
    items[2] = obj3;
    return items;
  },
  usePredicate() {
    const obj = PrivateProfilesExperiment;
    return obj.useIsInPrivateProfilesExperiment("ProfilePrivacySetting");
  }
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ProfilePrivacySetting.tsx");

export default radio;
