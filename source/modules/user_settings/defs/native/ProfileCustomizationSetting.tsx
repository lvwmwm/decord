// Module ID: 13620
// Function ID: 104696
// Name: useTitle
// Dependencies: [653, 10059, 1212, 13621, 2]

// Module 13620 (useTitle)
import createToggle from "createToggle";

const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.LYju5J);
  },
  parent: null,
  unsearchable: true,
  screen: {
    route: require("ME").UserSettingsSections.PROFILE_CUSTOMIZATION,
    getComponent() {
      return require(13621) /* ProfileCustomizationSubsection */.default;
    }
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ProfileCustomizationSetting.tsx");

export default route;
