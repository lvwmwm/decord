// Module ID: 13795
// Function ID: 13796
// Name: route
// Dependencies: [7753, 676, 10116, 1236, 2741, 4405, 13796, 2]

// Module 13795 (route)
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
    return "" + intl.string(require(1236) /* getSystemLocale */.t.XxRj7f) + " \u2022 " + intl2.string(importDefault(2741).FTawSP);
  },
  usePredicate: require("useShouldCallReactiveCheck").useShowAssignedAgeGroupSettings,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require(13796) /* SettingsAgeGroupHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;
