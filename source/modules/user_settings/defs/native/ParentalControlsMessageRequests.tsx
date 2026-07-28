// Module ID: 14660
// Function ID: 111642
// Name: useIsDisabled
// Dependencies: [5775, 7733, 6237, 13835, 14646, 6726, 6728, 13834, 10099, 1212, 2199, 2]

// Module 14660 (useIsDisabled)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
function useIsDisabled() {
  return require(13834) /* useParentalControlledExplicitContentSettings */.useDefaultGuildsRestricted();
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
    const selectedTeenId = require(6237) /* useSelectedTeen */.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = require(13835) /* result */.ParentalControlledDefaultMessageRequestRestricted;
    if (null != selectedTeenId) {
      tmp = selectedTeenId;
    }
    const obj = require(6237) /* useSelectedTeen */;
    return !tmp2 && !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(tmp);
  },
  useIsDisabled,
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (!arg0) {
        let obj = require(14646) /* shouldAgeVerifyForDMDefaultOff */;
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          obj = { entryPoint: require(6728) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
          const result = importDefault(6726).showAgeVerificationGetStartedModal(obj);
          const obj2 = importDefault(6726);
        }
      }
      const ParentalControlledDefaultMessageRequestRestricted = require(13835) /* result */.ParentalControlledDefaultMessageRequestRestricted;
      const result1 = ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("useSelectedTeen").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default createToggle;
