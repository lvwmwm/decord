// Module ID: 14525
// Function ID: 110857
// Name: route
// Dependencies: [31, 653, 13758, 13761, 10095, 1212, 8931, 14526, 2]

// Module 14525 (route)
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
    return require(14526) /* getTermsOfServicePrivacyPolicySettings */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("handleRequestSuccess").fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default createToggle;
