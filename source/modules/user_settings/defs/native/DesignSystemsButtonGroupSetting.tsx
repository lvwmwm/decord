// Module ID: 14904
// Function ID: 14905
// Name: route
// Dependencies: [8198, 676, 10669, 14905, 2]

// Module 14904 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Button Group";
  },
  parent: require("MobileUserSettings").MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_BUTTON_GROUP,
  getComponent() {
    return require(14905) /* UserSettingsDesignSystemButtonGroup */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonGroupSetting.tsx");

export default route;
