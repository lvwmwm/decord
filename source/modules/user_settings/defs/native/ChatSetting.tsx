// Module ID: 14338
// Function ID: 109821
// Name: route
// Dependencies: [653, 10127, 1212, 14339, 14341, 2]

// Module 14338 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["/VQax8"]);
  },
  parent: null,
  IconComponent: require("ImageTextIcon").ImageTextIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.TEXT,
  getComponent() {
    return require(14341) /* VideoUploadQualityNitroUpsell */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ChatSetting.tsx");

export default route;
