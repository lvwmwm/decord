// Module ID: 15706
// Function ID: 15707
// Name: route
// Dependencies: [19, 673, 14699, 14702, 11292, 1233, 9899, 15707, 2]

// Module 15706 (route)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import closure_2 from "noop" /* 19 */;
import createToggle from "createToggle" /* 11292 */;

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
      const consents = callback(14699).fetchConsents();
      const obj = callback(14699);
      const harvestStatus = callback(14702).fetchHarvestStatus();
      return true;
    }, []);
  }
};
createToggle = {
  route: require("ME").UserSettingsSections.DATA_AND_PRIVACY,
  getComponent() {
    return require(15707) /* DataAndPrivacySettings */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default createToggle;
