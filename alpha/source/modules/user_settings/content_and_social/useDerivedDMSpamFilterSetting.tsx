// Module ID: 16990
// Function ID: 16991
// Name: useDerivedDMSpamFilterSetting
// Dependencies: [1385, 4968, 4966, 504, 5827, 5834, 1196, 2]
// Exports: useDerivedDmSpamFilterSettingValue

// Module 16990 (useDerivedDMSpamFilterSetting)
import get_initialized from "get initialized" /* 504 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import UserSettings from "UserSettings" /* 4966 */;
import DMSafetyConstants from "DMSafetyConstants" /* 4968 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5827 */;
import SettingsDefaultFeature from "SettingsDefaultFeature" /* 5834 */;
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
