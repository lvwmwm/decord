// Module ID: 13672
// Function ID: 104990
// Name: route
// Dependencies: [7662, 653, 10095, 1212, 2716, 4347, 13673, 2]

// Module 13672 (route)
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
    return "" + intl.string(require(1212) /* getSystemLocale */.t.XxRj7f) + " \u2022 " + intl2.string(importDefault(2716).FTawSP);
  },
  usePredicate: require("isReactiveCheckEnabled").useShowAssignedAgeGroupSettings,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require(13673) /* SettingsAgeGroupHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;
