// Module ID: 14804
// Function ID: 14805
// Name: route
// Dependencies: [8084, 676, 10452, 14805, 2]

// Module 14804 (route)
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
    return require(14805) /* UserSettingsDesignSystemSegmentedControl */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSegmentedControlSetting.tsx");

export default route;
