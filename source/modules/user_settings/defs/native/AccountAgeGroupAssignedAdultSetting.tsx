// Module ID: 14024
// Function ID: 14025
// Name: route
// Dependencies: [8084, 676, 10452, 1236, 2821, 4519, 14025, 2]

// Module 14024 (route)
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
    return "" + intl.string(require(1236) /* getSystemLocale */.t.XxRj7f) + " \u2022 " + intl2.string(importDefault(2821).FTawSP);
  },
  usePredicate: require("useAgeVerificationRunner").useShowAssignedAgeGroupSettings,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require(14025) /* SettingsAgeGroupHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;
