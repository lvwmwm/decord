// Module ID: 13824
// Function ID: 13825
// Name: route
// Dependencies: [676, 10380, 1236, 13825, 2]

// Module 13824 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.LYju5J);
  },
  parent: null,
  unsearchable: true,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.PROFILE_CUSTOMIZATION,
  getComponent() {
    return require(13825) /* ProfileCustomizationSubsection */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ProfileCustomizationSetting.tsx");

export default route;
