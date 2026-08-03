// Module ID: 14655
// Function ID: 14656
// Name: route
// Dependencies: [7880, 676, 10272, 14656, 2]

// Module 14655 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Segmented Control";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_SEGMENTED_CONTROL,
  getComponent() {
    return require(14656) /* UserSettingsDesignSystemSegmentedControl */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSegmentedControlSetting.tsx");

export default route;
