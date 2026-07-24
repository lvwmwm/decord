// Module ID: 14601
// Function ID: 111326
// Name: route
// Dependencies: [7751, 653, 10127, 1212, 4639, 14602, 2]

// Module 14601 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["Hj/But"]);
  },
  IconComponent: require("ImageWarningIcon").ImageWarningIcon,
  parent: require("MobileSetting").MobileSetting.FAMILY_CENTER_PARENTAL_CONTROLS_SETTINGS,
  screen: obj,
  unsearchable: true
};
obj = {
  route: require("ME").UserSettingsSections.FAMILY_CENTER_PARENTAL_CONTROLS_SENSITIVE_CONTENT_FILTERS,
  getComponent() {
    return require(14602) /* UserSettingsSensitiveContentFilters */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/ParentalControlsSensitiveContentFilterSetting.tsx");

export default route;
