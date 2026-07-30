// Module ID: 14412
// Function ID: 14413
// Name: route
// Dependencies: [676, 10116, 1236, 14413, 14415, 2]

// Module 14412 (route)
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
    return require(14415) /* VideoUploadQualityNitroUpsell */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ChatSetting.tsx");

export default route;
