// Module ID: 14443
// Function ID: 14444
// Name: route
// Dependencies: [676, 10333, 1236, 2613, 14444, 2]

// Module 14443 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2613).ZPMAlX);
  },
  parent: null,
  unsearchable: true,
  screen: obj,
  usePredicate() {
    return true;
  }
};
obj = {
  route: require("ME").UserSettingsSections.DISPLAY_NAME_STYLES,
  getComponent() {
    return require(14444) /* ApplyButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx");

export default route;
