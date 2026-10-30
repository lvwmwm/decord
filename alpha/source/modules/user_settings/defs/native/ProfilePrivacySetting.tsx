// Module ID: 16699
// Function ID: 16700
// Name: ProfilePrivacySetting
// Dependencies: [8424, 4834, 16700, 5253, 16701, 1995, 1114, 1197, 11505, 2]

// Module 16699 (ProfilePrivacySetting)
import intl7 from "intl" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import UserSettings from "UserSettings" /* 4834 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import SettingsConstants from "SettingsConstants" /* 8424 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 16700 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

let tmp2;
const asyncRequire = tmp2(1995);
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
    const obj = ActivityPrivacyUpsellUtils;
    const profileToActivityUpsell = obj.computeProfileToActivityUpsell(setting, NumberResult);
    const tmp3 = dependencyMap;
    if (null != profileToActivityUpsell) {
      const obj4 = { direction: null, affectedGuildIds: null, settingName: null, mappedActivityValue: null };
      ({ direction: obj3.direction, affectedGuildIds: obj3.affectedGuildIds, settingName: obj3.settingName, mappedActivityValue: obj3.mappedActivityValue } = profileToActivityUpsell);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.openLazy(asyncRequire(16701, tmp3.paths), "ProfileToActivityPrivacyUpsellActionSheet", obj4);
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
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ProfilePrivacySetting.tsx");

export default radio;
