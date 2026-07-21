// Module ID: 13619
// Function ID: 103183
// Name: useDerivedDmSpamFilterSettingValue
// Dependencies: []
// Exports: useDerivedDmSpamFilterSettingValue

// Module 13619 (useDerivedDmSpamFilterSettingValue)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[1]).ExplicitContentFilterToDmSpamFilterV2;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_settings/content_and_social/useDerivedDMSpamFilterSetting.tsx");

export const useDerivedDmSpamFilterSettingValue = function useDerivedDmSpamFilterSettingValue() {
  const DmSpamFilterV2 = arg1(dependencyMap[2]).DmSpamFilterV2;
  const setting = DmSpamFilterV2.useSetting();
  const ExplicitContentFilter = arg1(dependencyMap[2]).ExplicitContentFilter;
  const setting1 = ExplicitContentFilter.useSetting();
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[3]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = arg1(dependencyMap[3]);
  const isSettingTeenByDefault = arg1(dependencyMap[4]).useIsSettingTeenByDefault(arg1(dependencyMap[5]).SettingsDefaultFeature.SPAM_FILTERS);
  if (setting !== arg1(dependencyMap[6]).DmSpamFilterV2.DEFAULT_UNSET) {
    return setting;
  } else {
    let nsfwAllowed;
    if (null != stateFromStores) {
      nsfwAllowed = stateFromStores.nsfwAllowed;
    }
    if (false !== nsfwAllowed) {
      let FRIENDS_AND_NON_FRIENDS = closure_3.get(setting1);
      if (null == FRIENDS_AND_NON_FRIENDS) {
        FRIENDS_AND_NON_FRIENDS = arg1(dependencyMap[6]).DmSpamFilterV2.NON_FRIENDS;
      }
    }
    FRIENDS_AND_NON_FRIENDS = arg1(dependencyMap[6]).DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS;
  }
};
