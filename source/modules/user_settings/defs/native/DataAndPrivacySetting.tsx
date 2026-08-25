// Module ID: 15100
// Function ID: 15101
// Name: route
// Dependencies: [19, 676, 14310, 14313, 10516, 1236, 12419, 15101, 2]

// Module 15100 (route)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_2 from "noop" /* 19 */;
import createToggle from "createToggle" /* 10516 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.OAuOHD);
  },
  parent: null,
  IconComponent: require("ShieldLockIcon").ShieldLockIcon,
  screen: createToggle,
  usePreNavigationAction() {
    return React.useCallback(() => {
      const consents = callback(14310).fetchConsents();
      const obj = callback(14310);
      const harvestStatus = callback(14313).fetchHarvestStatus();
      return true;
    }, []);
  }
};
createToggle = {
  route: require("ME").UserSettingsSections.DATA_AND_PRIVACY,
  getComponent() {
    return require(15101) /* DataAndPrivacySettings */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default createToggle;
