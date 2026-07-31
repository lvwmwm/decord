// Module ID: 14616
// Function ID: 14617
// Name: route
// Dependencies: [7761, 676, 10133, 14617, 2]

// Module 14616 (route)
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
    return require(14617) /* HapticButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemHapticsSetting.tsx");

export default route;
