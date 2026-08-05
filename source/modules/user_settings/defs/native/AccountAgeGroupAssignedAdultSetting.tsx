// Module ID: 13893
// Function ID: 13894
// Name: route
// Dependencies: [7864, 676, 10333, 1236, 2773, 4470, 13894, 2]

// Module 13893 (route)
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
    return "" + intl.string(require(1236) /* getSystemLocale */.t.XxRj7f) + " \u2022 " + intl2.string(importDefault(2773).FTawSP);
  },
  usePredicate: require("useAgeVerificationRunner").useShowAssignedAgeGroupSettings,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.AGE_GROUP,
  getComponent() {
    return require(13894) /* SettingsAgeGroupHeader */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/AccountAgeGroupAssignedAdultSetting.tsx");

export default route;
