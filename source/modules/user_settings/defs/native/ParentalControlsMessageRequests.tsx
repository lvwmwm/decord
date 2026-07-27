// Module ID: 14616
// Function ID: 111469
// Name: useIsDisabled
// Dependencies: [5765, 7697, 6202, 13791, 14602, 6690, 6692, 13790, 10059, 1212, 2199, 2]

// Module 14616 (useIsDisabled)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
function useIsDisabled() {
  return require(13790) /* useParentalControlledExplicitContentSettings */.useDefaultGuildsRestricted();
}
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["3o2ojh"]);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2199)["7aYkh1"]);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    let tmp;
    const tmp2 = useIsDisabled();
    const selectedTeenId = require(6202) /* useSelectedTeen */.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = require(13791) /* result */.ParentalControlledDefaultMessageRequestRestricted;
    if (null != selectedTeenId) {
      tmp = selectedTeenId;
    }
    const obj = require(6202) /* useSelectedTeen */;
    return !tmp2 && !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(tmp);
  },
  useIsDisabled,
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (!arg0) {
        let obj = require(14602) /* shouldAgeVerifyForDMDefaultOff */;
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          obj = { entryPoint: require(6692) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
          const result = importDefault(6690).showAgeVerificationGetStartedModal(obj);
          const obj2 = importDefault(6690);
        }
      }
      const ParentalControlledDefaultMessageRequestRestricted = require(13791) /* result */.ParentalControlledDefaultMessageRequestRestricted;
      const result1 = ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("useSelectedTeen").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default createToggle;
