// Module ID: 14710
// Function ID: 14711
// Name: route
// Dependencies: [8022, 676, 10380, 14711, 2]

// Module 14710 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Button Group";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_BUTTON_GROUP,
  getComponent() {
    return require(14711) /* UserSettingsDesignSystemButtonGroup */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonGroupSetting.tsx");

export default route;
