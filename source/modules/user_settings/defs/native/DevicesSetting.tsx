// Module ID: 13899
// Function ID: 106375
// Name: route
// Dependencies: [653, 10127, 1212, 13900, 13902, 2]

// Module 13899 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["+1h0k/"]);
  },
  parent: null,
  IconComponent: require("LaptopPhoneIcon").LaptopPhoneIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.SESSIONS,
  getComponent() {
    return require(13902) /* UserSettingsSessions */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DevicesSetting.tsx");

export default route;
