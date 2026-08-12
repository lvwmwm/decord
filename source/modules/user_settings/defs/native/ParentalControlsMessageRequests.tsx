// Module ID: 14976
// Function ID: 14977
// Name: toggle
// Dependencies: [7038, 8123, 7379, 14137, 14962, 7838, 7840, 14136, 10493, 1236, 2303, 2]

// Module 14976 (toggle)
import freshTeenActivityWithMap from "freshTeenActivityWithMap";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["3o2ojh"]);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2303)["7aYkh1"]);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    const defaultGuildsRestricted = require(14136) /* useParentalControlledExplicitContentSettings */.useDefaultGuildsRestricted();
    const obj = require(14136) /* useParentalControlledExplicitContentSettings */;
    const selectedTeenId = require(7379) /* useSelectedTeen */.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = require(14137) /* result */.ParentalControlledDefaultMessageRequestRestricted;
    let tmp3 = !defaultGuildsRestricted;
    if (!defaultGuildsRestricted) {
      tmp3 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
    }
    return tmp3;
  },
  useIsDisabled() {
    return require(14136) /* useParentalControlledExplicitContentSettings */.useDefaultGuildsRestricted();
  },
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (!arg0) {
        let obj = require(14962) /* shouldAgeVerifyForDMDefaultOff */;
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          obj = { entryPoint: null };
          obj[0] = tmp2(7840).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS;
          const result = importDefault(7838).showAgeVerificationGetStartedModal(obj);
          const obj2 = importDefault(7838);
        }
        tmp2 = require;
      }
      const ParentalControlledDefaultMessageRequestRestricted = require(14137) /* result */.ParentalControlledDefaultMessageRequestRestricted;
      const result1 = ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("useSelectedTeen").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default createToggle;
