// Module ID: 14401
// Function ID: 110081
// Name: route
// Dependencies: [10249, 7751, 653, 566, 1212, 10127, 14402, 2]

// Module 14401 (route)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.D9yVAH);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useDescription: function useCommunityActivityAlertsSettingDescription() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["0PhAOH"]);
  },
  usePredicate: function useHasCommunityActivityAlertsSetting() {
    const items = [_isNativeReflectConstruct];
    return require(566) /* initialize */.useStateFromStores(items, () => Object.keys(outer1_2.getGuildAlertSettings()).length > 0);
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.COMMUNITY_ALERTS,
  getComponent() {
    return require(14402) /* UserSettingsCommunityNotifications */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx");

export default createToggle;
