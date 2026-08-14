// Module ID: 14724
// Function ID: 14725
// Name: route
// Dependencies: [676, 10421, 1236, 14725, 14727, 2]

// Module 14724 (route)
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
    return require(14727) /* VideoUploadQualityNitroUpsell */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ChatSetting.tsx");

export default route;
