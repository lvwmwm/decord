// Module ID: 14683
// Function ID: 14684
// Name: route
// Dependencies: [7880, 676, 10272, 14684, 2]

// Module 14683 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Haptics";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_HAPTICS,
  getComponent() {
    return require(14684) /* HapticButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemHapticsSetting.tsx");

export default route;
