// Module ID: 14016
// Function ID: 14017
// Name: route
// Dependencies: [8082, 676, 10447, 1236, 2802, 4519, 14017, 2]

// Module 14016 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.piqs0o);
  },
  parent: require("MobileSetting").MobileSetting.ACCOUNT,
  useTrailing() {
    const intl = require(1236) /* getSystemLocale */.intl;
    const intl2 = require(1236) /* getSystemLocale */.intl;
    return "" + intl.string(require(1236) /* getSystemLocale */.t.XxRj7f) + " \u2022 " + intl2.string(importDefault(2802).FTawSP);
  },
  usePredicate: require("useAgeVerificationRunner").useShowAssignedAgeGroupSettings,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require(14017) /* SettingsAgeGroupHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;
