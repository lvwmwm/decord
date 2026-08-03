// Module ID: 14588
// Function ID: 14589
// Name: route
// Dependencies: [676, 10272, 1236, 4211, 14589, 2]

// Module 14588 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.LRmNAl);
  },
  parent: null,
  IconComponent: require("CircleInformationIcon").CircleInformationIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.CHANGE_LOG,
  getComponent() {
    return require(14589) /* ChangeLogScreen */.ChangeLogScreen;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ChangeLogSetting.tsx");

export default route;
