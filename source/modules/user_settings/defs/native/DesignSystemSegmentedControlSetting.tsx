// Module ID: 14871
// Function ID: 14872
// Name: route
// Dependencies: [8127, 676, 10407, 14872, 2]

// Module 14871 (route)
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
    return require(14872) /* UserSettingsDesignSystemSegmentedControl */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSegmentedControlSetting.tsx");

export default route;
