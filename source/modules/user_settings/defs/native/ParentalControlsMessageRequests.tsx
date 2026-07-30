// Module ID: 14679
// Function ID: 14680
// Name: toggle
// Dependencies: [5793, 7753, 6254, 13851, 14665, 6744, 6746, 13850, 10116, 1236, 2223, 2]

// Module 14679 (toggle)
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
    return intl.string(importDefault(2223)["7aYkh1"]);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    const defaultGuildsRestricted = require(13850) /* useParentalControlledExplicitContentSettings */.useDefaultGuildsRestricted();
    const obj = require(13850) /* useParentalControlledExplicitContentSettings */;
    const selectedTeenId = require(6254) /* useSelectedTeen */.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = require(13851) /* result */.ParentalControlledDefaultMessageRequestRestricted;
    let tmp3 = !defaultGuildsRestricted;
    if (!defaultGuildsRestricted) {
      tmp3 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
    }
    return tmp3;
  },
  useIsDisabled() {
    return require(13850) /* useParentalControlledExplicitContentSettings */.useDefaultGuildsRestricted();
  },
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (!arg0) {
        let obj = require(14665) /* shouldAgeVerifyForDMDefaultOff */;
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          obj = { entryPoint: null };
          obj[0] = tmp2(6746).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS;
          const result = importDefault(6744).showAgeVerificationGetStartedModal(obj);
          const obj2 = importDefault(6744);
        }
        tmp2 = require;
      }
      const ParentalControlledDefaultMessageRequestRestricted = require(13851) /* result */.ParentalControlledDefaultMessageRequestRestricted;
      const result1 = ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("useSelectedTeen").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default createToggle;
