// Module ID: 13865
// Function ID: 13866
// Name: useDerivedDmSpamFilterSettingValue
// Dependencies: [1874, 3864, 3862, 589, 3868, 3875, 1306, 2]
// Exports: useDerivedDmSpamFilterSettingValue

// Module 13865 (useDerivedDmSpamFilterSettingValue)
import mergeGuildAvatar from "mergeGuildAvatar";
import { ExplicitContentFilterToDmSpamFilterV2 as closure_3 } from "items";

const require = arg1;
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/content_and_social/useDerivedDMSpamFilterSetting.tsx");

export const useDerivedDmSpamFilterSettingValue = function useDerivedDmSpamFilterSettingValue() {
  let DmSpamFilterV2 = dependencyMap;
  const DmSpamFilterV22 = require(3862) /* explicitContentFromProto */.DmSpamFilterV2;
  const setting = DmSpamFilterV22.useSetting();
  const ExplicitContentFilter = require(3862) /* explicitContentFromProto */.ExplicitContentFilter;
  const setting1 = ExplicitContentFilter.useSetting();
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj = require(589) /* initialize */;
  const isSettingTeenByDefault = require(3868) /* isFeatureAgeGated */.useIsSettingTeenByDefault(require(3875) /* SettingsDefaultFeature */.SettingsDefaultFeature.SPAM_FILTERS);
  if (setting !== require(1306) /* create */.DmSpamFilterV2.DEFAULT_UNSET) {
    return setting;
  } else {
    let nsfwAllowed;
    if (stateFromStores != null) {
      nsfwAllowed = stateFromStores.nsfwAllowed;
    }
    if (false !== nsfwAllowed) {
      let FRIENDS_AND_NON_FRIENDS = closure_3.get(setting1);
      if (FRIENDS_AND_NON_FRIENDS == null) {
        FRIENDS_AND_NON_FRIENDS = tmp(1306).DmSpamFilterV2.NON_FRIENDS;
      }
    }
    DmSpamFilterV2 = tmp(1306).DmSpamFilterV2;
    FRIENDS_AND_NON_FRIENDS = DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS;
  }
};
