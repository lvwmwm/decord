// Module ID: 14714
// Function ID: 14715
// Name: route
// Dependencies: [8022, 676, 10380, 14715, 2]

// Module 14714 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Experimental Buttons";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_EXPERIMENTAL_BUTTONS,
  getComponent() {
    return require(14715) /* UserSettingsDesignSystemExperimentalButtons */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsExperimentalButtonsSetting.tsx");

export default route;
