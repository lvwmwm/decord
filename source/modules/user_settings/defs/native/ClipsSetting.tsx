// Module ID: 13874
// Function ID: 106201
// Name: route
// Dependencies: [653, 10095, 1212, 13875, 13877, 2]

// Module 13874 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.z2jK6X);
  },
  parent: null,
  IconComponent: require("ClipsIcon").ClipsIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.CLIPS,
  getComponent() {
    return require(13877) /* ClipsSettingsScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ClipsSetting.tsx");

export default route;
