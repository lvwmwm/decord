// Module ID: 15047
// Function ID: 15048
// Name: ProfilePrivacySetting
// Dependencies: [7974, 558, 2041, 15048, 5055, 15049, 2000, 1126, 1209, 10629, 2]

// Module 15047 (ProfilePrivacySetting)
import intl7 from "intl" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1209 */;
import UserSettings from "UserSettings" /* 2041 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import SettingsConstants from "SettingsConstants" /* 7974 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 15048 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
import size from "module_2" /* 2 */;

let tmp2;
const asyncRequire = tmp2(2000);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
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
    const obj = ActivityPrivacyUpsellUtils;
    const profileToActivityUpsell = obj.computeProfileToActivityUpsell(setting, NumberResult);
    const tmp3 = dependencyMap;
    if (null != profileToActivityUpsell) {
      const obj4 = { direction: null, affectedGuildIds: null, settingName: null, mappedActivityValue: null };
      ({ direction: obj3.direction, affectedGuildIds: obj3.affectedGuildIds, settingName: obj3.settingName, mappedActivityValue: obj3.mappedActivityValue } = profileToActivityUpsell);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.openLazy(asyncRequire(15049, tmp3.paths), "ProfileToActivityPrivacyUpsellActionSheet", obj4);
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
  }
};
const radio = SettingBuilders.createRadio(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ProfilePrivacySetting.tsx");

export default radio;
