// Module ID: 14002
// Function ID: 14003
// Name: route
// Dependencies: [676, 10120, 1236, 14003, 14005, 2]

// Module 14002 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.z2jK6X);
  },
  parent: null,
  IconComponent: require("ClipsIcon").ClipsIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.CLIPS,
  getComponent() {
    return require(14005) /* ClipsSettingsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ClipsSetting.tsx");

export default route;
