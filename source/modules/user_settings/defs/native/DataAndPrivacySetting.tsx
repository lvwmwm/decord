// Module ID: 15788
// Function ID: 15789
// Name: route
// Dependencies: [19, 673, 14780, 14783, 11400, 1233, 9141, 15789, 2]

// Module 15788 (route)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import closure_2 from "noop" /* 19 */;
import createToggle from "createToggle" /* 11400 */;

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
      const consents = callback(14780).fetchConsents();
      const obj = callback(14780);
      const harvestStatus = callback(14783).fetchHarvestStatus();
      return true;
    }, []);
  }
};
createToggle = {
  route: require("ME").UserSettingsSections.DATA_AND_PRIVACY,
  getComponent() {
    return require(15789) /* DataAndPrivacySettings */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/DataAndPrivacySetting.tsx");

export default createToggle;
