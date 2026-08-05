// Module ID: 14660
// Function ID: 14661
// Name: route
// Dependencies: [7864, 676, 10333, 14661, 2]

// Module 14660 (route)
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
    return require(14661) /* UserSettingsDesignSystemExperimentalButtons */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsExperimentalButtonsSetting.tsx");

export default route;
