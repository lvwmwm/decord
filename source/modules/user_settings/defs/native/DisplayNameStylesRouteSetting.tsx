// Module ID: 14349
// Function ID: 14350
// Name: route
// Dependencies: [676, 10120, 1236, 2581, 14350, 2]

// Module 14349 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(importDefault(2581).ZPMAlX);
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
    return require(14350) /* ApplyButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx");

export default route;
