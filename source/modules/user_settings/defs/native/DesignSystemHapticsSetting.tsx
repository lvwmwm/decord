// Module ID: 14832
// Function ID: 14833
// Name: route
// Dependencies: [8084, 676, 10452, 14833, 2]

// Module 14832 (route)
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
    return require(14833) /* HapticButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemHapticsSetting.tsx");

export default route;
