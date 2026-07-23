// Module ID: 14426
// Function ID: 110276
// Name: route
// Dependencies: [7662, 653, 10095, 14427, 2]

// Module 14426 (route)
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
    return require(14427) /* UserSettingsDesignSystemButtonGroup */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonGroupSetting.tsx");

export default route;
