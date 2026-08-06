// Module ID: 14820
// Function ID: 14821
// Name: toggle
// Dependencies: [6917, 8005, 7260, 13986, 14806, 7720, 7722, 13985, 10364, 1236, 2284, 2]

// Module 14820 (toggle)
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
    return intl.string(importDefault(2284)["7aYkh1"]);
  },
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  useValue() {
    const defaultGuildsRestricted = require(13985) /* useParentalControlledExplicitContentSettings */.useDefaultGuildsRestricted();
    const obj = require(13985) /* useParentalControlledExplicitContentSettings */;
    const selectedTeenId = require(7260) /* useSelectedTeen */.useSelectedTeenId();
    const ParentalControlledDefaultMessageRequestRestricted = require(13986) /* result */.ParentalControlledDefaultMessageRequestRestricted;
    let tmp3 = !defaultGuildsRestricted;
    if (!defaultGuildsRestricted) {
      tmp3 = !ParentalControlledDefaultMessageRequestRestricted.useControlledSetting(selectedTeenId);
    }
    return tmp3;
  },
  useIsDisabled() {
    return require(13985) /* useParentalControlledExplicitContentSettings */.useDefaultGuildsRestricted();
  },
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    selectedTeenId = selectedTeenId.getSelectedTeenId();
    if (null != selectedTeenId) {
      if (!arg0) {
        let obj = require(14806) /* shouldAgeVerifyForDMDefaultOff */;
        if (obj.shouldAgeVerifyForDMDefaultOff()) {
          obj = { entryPoint: null };
          obj[0] = tmp2(7722).AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS;
          const result = importDefault(7720).showAgeVerificationGetStartedModal(obj);
          const obj2 = importDefault(7720);
        }
        tmp2 = require;
      }
      const ParentalControlledDefaultMessageRequestRestricted = require(13986) /* result */.ParentalControlledDefaultMessageRequestRestricted;
      const result1 = ParentalControlledDefaultMessageRequestRestricted.updateControlledSetting(selectedTeenId, !arg0);
    }
  },
  unsearchable: true
};
createToggle = createToggle.createToggle(createToggle);
let result = require("useSelectedTeen").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsMessageRequests.tsx");

export default createToggle;
