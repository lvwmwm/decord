// Module ID: 17014
// Function ID: 17015
// Name: useDerivedDMSpamFilterSetting
// Dependencies: [1385, 4970, 4968, 504, 5829, 5837, 1196, 2]
// Exports: useDerivedDmSpamFilterSettingValue

// Module 17014 (useDerivedDMSpamFilterSetting)
import get_initialized from "get initialized" /* 504 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import UserSettings from "UserSettings" /* 4968 */;
import DMSafetyConstants from "DMSafetyConstants" /* 4970 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5829 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5837 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

let closure_3 = DMSafetyConstants.ExplicitContentFilterToDmSpamFilterV2;
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useDerivedDMSpamFilterSetting.tsx");

export function useDerivedDmSpamFilterSettingValue() {
  let currentUser;
  const DmSpamFilterV2 = UserSettings.DmSpamFilterV2;
  let setting = DmSpamFilterV2.useSetting();
  const ExplicitContentFilter = UserSettings.ExplicitContentFilter;
  const setting1 = ExplicitContentFilter.useSetting();
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = RegionalFeatureConfigUtils;
  const isSettingTeenByDefault = obj2.useIsSettingTeenByDefault(SettingsDefaultFeature.SettingsDefaultFeature.SPAM_FILTERS);
  if (setting === preloaded_user_settings.DmSpamFilterV2.DEFAULT_UNSET) {
    let NON_FRIENDS;
    let nsfwAllowed;
    if (stateFromStores != null) {
      nsfwAllowed = stateFromStores.nsfwAllowed;
    }
    if (false === nsfwAllowed) {
      if (isSettingTeenByDefault) {
        NON_FRIENDS = tmp(1196).DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS;
      }
      setting = NON_FRIENDS;
    }
    NON_FRIENDS = closure_3.get(setting1);
    if (NON_FRIENDS == null) {
      NON_FRIENDS = tmp(1196).DmSpamFilterV2.NON_FRIENDS;
    }
  }
  return setting;
}
