// Module ID: 14786
// Function ID: 14787
// Name: route
// Dependencies: [8082, 676, 10447, 14787, 2]

// Module 14786 (route)
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
    return require(14787) /* UserSettingsDesignSystemExperimentalButtons */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsExperimentalButtonsSetting.tsx");

export default route;
