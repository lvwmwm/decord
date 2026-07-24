// Module ID: 14575
// Function ID: 111180
// Name: route
// Dependencies: [31, 653, 13809, 13812, 10127, 1212, 8970, 14576, 2]

// Module 14575 (route)
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
    return require(14576) /* getTermsOfServicePrivacyPolicySettings */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("handleRequestSuccess").fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default createToggle;
