// Module ID: 14593
// Function ID: 14594
// Name: route
// Dependencies: [7753, 676, 10116, 14594, 2]

// Module 14593 (route)
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
    return require(14594) /* HapticButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemHapticsSetting.tsx");

export default route;
