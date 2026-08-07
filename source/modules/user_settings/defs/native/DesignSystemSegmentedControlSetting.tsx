// Module ID: 14722
// Function ID: 14723
// Name: route
// Dependencies: [8022, 676, 10380, 14723, 2]

// Module 14722 (route)
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
    return require(14723) /* UserSettingsDesignSystemSegmentedControl */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemSegmentedControlSetting.tsx");

export default route;
