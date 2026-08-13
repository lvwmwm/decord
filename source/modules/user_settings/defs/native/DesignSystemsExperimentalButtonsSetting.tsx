// Module ID: 14854
// Function ID: 14855
// Name: route
// Dependencies: [8127, 676, 10407, 14855, 2]

// Module 14854 (route)
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
    return require(14855) /* UserSettingsDesignSystemExperimentalButtons */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsExperimentalButtonsSetting.tsx");

export default route;
