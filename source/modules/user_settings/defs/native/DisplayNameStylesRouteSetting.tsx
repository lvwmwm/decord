// Module ID: 14577
// Function ID: 14578
// Name: route
// Dependencies: [676, 10452, 1236, 2661, 14578, 2]

// Module 14577 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2661).ZPMAlX);
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
    return require(14578) /* ApplyButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx");

export default route;
