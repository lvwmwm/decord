// Module ID: 14587
// Function ID: 111312
// Name: route
// Dependencies: [31, 653, 13821, 13824, 10059, 1212, 8858, 14588, 2]

// Module 14587 (route)
import result from "result";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.OAuOHD);
  },
  parent: null,
  IconComponent: require("ShieldLockIcon").ShieldLockIcon,
  screen: createToggle,
  usePreNavigationAction() {
    return React.useCallback(() => {
      const consents = outer1_0(outer1_1[2]).fetchConsents();
      const obj = outer1_0(outer1_1[2]);
      const harvestStatus = outer1_0(outer1_1[3]).fetchHarvestStatus();
      return true;
    }, []);
  }
};
createToggle = {
  route: require("ME").UserSettingsSections.DATA_AND_PRIVACY,
  getComponent() {
    return require(14588) /* getTermsOfServicePrivacyPolicySettings */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("handleRequestSuccess").fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default createToggle;
