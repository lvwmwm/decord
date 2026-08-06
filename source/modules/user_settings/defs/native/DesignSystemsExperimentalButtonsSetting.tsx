// Module ID: 14698
// Function ID: 14699
// Name: route
// Dependencies: [8005, 676, 10364, 14699, 2]

// Module 14698 (route)
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
    return require(14699) /* UserSettingsDesignSystemExperimentalButtons */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsExperimentalButtonsSetting.tsx");

export default route;
