// Module ID: 14469
// Function ID: 14470
// Name: route
// Dependencies: [676, 10361, 1236, 2643, 14470, 2]

// Module 14469 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2643).ZPMAlX);
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
    return require(14470) /* ApplyButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx");

export default route;
