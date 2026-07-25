// Module ID: 13734
// Function ID: 105441
// Name: route
// Dependencies: [7697, 653, 10059, 1212, 2717, 4348, 13735, 2]

// Module 13734 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.piqs0o);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing() {
    const intl = require(1212) /* getSystemLocale */.intl;
    const intl2 = require(1212) /* getSystemLocale */.intl;
    return "" + intl.string(require(1212) /* getSystemLocale */.t.XxRj7f) + " \u2022 " + intl2.string(importDefault(2717).FTawSP);
  },
  usePredicate: require("isReactiveCheckEnabled").useShowAssignedAgeGroupSettings,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require(13735) /* SettingsAgeGroupHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;
