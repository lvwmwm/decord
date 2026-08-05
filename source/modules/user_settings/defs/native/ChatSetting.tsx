// Module ID: 14516
// Function ID: 14517
// Name: route
// Dependencies: [676, 10333, 1236, 14517, 14519, 2]

// Module 14516 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["/VQax8"]);
  },
  parent: null,
  IconComponent: require("ImageTextIcon").ImageTextIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.TEXT,
  getComponent() {
    return require(14519) /* VideoUploadQualityNitroUpsell */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ChatSetting.tsx");

export default route;
