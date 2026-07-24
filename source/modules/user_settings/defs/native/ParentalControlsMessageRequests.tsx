// Module ID: 14604
// Function ID: 111337
// Name: useIsDisabled
// Dependencies: [6769, 7751, 7124, 13779, 14590, 7581, 7583, 13778, 10127, 1212, 2198, 2]

// Module 14604 (useIsDisabled)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
function useIsDisabled() {
  return require(13778) /* useParentalControlledExplicitContentSettings */.useDefaultGuildsRestricted();
}
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["3o2ojh"]);
  },
  useDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2198)["7aYkh1"]);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    let tmp;
    const tmp2 = useIsDisabled();
    const selectedTeenId = require(7124) /* useSelectedTeen */.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = require(13779) /* result */.ParentalControlledDefaultMessageRequestRestricted;
    if (null != selectedTeenId) {
      tmp = selectedTeenId;
    }
    const obj = require(7124) /* useSelectedTeen */;
    return !tmp2 && !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(tmp);
  },
  useIsDisabled,
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (!arg0) {
        let obj = require(14590) /* shouldAgeVerifyForDMDefaultOff */;
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          obj = { entryPoint: require(7583) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
          const result = importDefault(7581).showAgeVerificationGetStartedModal(obj);
          const obj2 = importDefault(7581);
        }
      }
      const ParentalControlledDefaultMessageRequestRestricted = require(13779) /* result */.ParentalControlledDefaultMessageRequestRestricted;
      const result1 = ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("useSelectedTeen").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default createToggle;
