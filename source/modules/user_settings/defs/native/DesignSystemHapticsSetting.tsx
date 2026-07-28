// Module ID: 14572
// Function ID: 111150
// Name: route
// Dependencies: [7733, 653, 10099, 14573, 2]

// Module 14572 (route)
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
    return require(14573) /* HapticButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemHapticsSetting.tsx");

export default route;
