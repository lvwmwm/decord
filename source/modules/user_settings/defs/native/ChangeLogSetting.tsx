// Module ID: 14424
// Function ID: 110236
// Name: route
// Dependencies: [653, 10127, 1212, 4086, 14425, 2]

// Module 14424 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.LRmNAl);
  },
  parent: null,
  IconComponent: require("CircleInformationIcon").CircleInformationIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.CHANGE_LOG,
  getComponent() {
    return require(14425) /* _callSuper */.ChangeLogScreen;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ChangeLogSetting.tsx");

export default route;
