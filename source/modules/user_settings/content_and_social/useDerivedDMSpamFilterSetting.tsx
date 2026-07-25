// Module ID: 13804
// Function ID: 105845
// Name: useDerivedDmSpamFilterSettingValue
// Dependencies: [1850, 3806, 3804, 566, 3810, 3817, 1282, 2]
// Exports: useDerivedDmSpamFilterSettingValue

// Module 13804 (useDerivedDmSpamFilterSettingValue)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ExplicitContentFilterToDmSpamFilterV2 as closure_3 } from "items";

const require = arg1;
const result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/content_and_social/useDerivedDMSpamFilterSetting.tsx");

export const useDerivedDmSpamFilterSettingValue = function useDerivedDmSpamFilterSettingValue() {
  const DmSpamFilterV2 = require(3804) /* explicitContentFromProto */.DmSpamFilterV2;
  const setting = DmSpamFilterV2.useSetting();
  const ExplicitContentFilter = require(3804) /* explicitContentFromProto */.ExplicitContentFilter;
  const setting1 = ExplicitContentFilter.useSetting();
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getCurrentUser());
  const obj = require(566) /* initialize */;
  const isSettingTeenByDefault = require(3810) /* isFeatureAgeGated */.useIsSettingTeenByDefault(require(3817) /* SettingsDefaultFeature */.SettingsDefaultFeature.SPAM_FILTERS);
  if (setting !== require(1282) /* _callSuper */.DmSpamFilterV2.DEFAULT_UNSET) {
    return setting;
  } else {
    let nsfwAllowed;
    if (null != stateFromStores) {
      nsfwAllowed = stateFromStores.nsfwAllowed;
    }
    if (false !== nsfwAllowed) {
      let FRIENDS_AND_NON_FRIENDS = closure_3.get(setting1);
      if (null == FRIENDS_AND_NON_FRIENDS) {
        FRIENDS_AND_NON_FRIENDS = require(1282) /* _callSuper */.DmSpamFilterV2.NON_FRIENDS;
      }
    }
    FRIENDS_AND_NON_FRIENDS = require(1282) /* _callSuper */.DmSpamFilterV2.FRIENDS_AND_NON_FRIENDS;
  }
};
