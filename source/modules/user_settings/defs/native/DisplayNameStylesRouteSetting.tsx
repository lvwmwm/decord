// Module ID: 14271
// Function ID: 109566
// Name: useTitle
// Dependencies: [653, 10127, 1212, 2556, 14272, 2]

// Module 14271 (useTitle)
import createToggle from "createToggle";

const obj = {
  useTitle() {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(importDefault(2556).ZPMAlX);
  },
  parent: null,
  unsearchable: true,
  screen: {
    route: require("ME").UserSettingsSections.DISPLAY_NAME_STYLES,
    getComponent() {
      return require(14272) /* ApplyButton */.default;
    }
  },
  usePredicate() {
    return true;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx");

export default route;
