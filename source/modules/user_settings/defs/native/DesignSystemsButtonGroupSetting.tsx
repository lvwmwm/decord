// Module ID: 14557
// Function ID: 14558
// Name: route
// Dependencies: [7756, 676, 10120, 14558, 2]

// Module 14557 (route)
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
    return require(14558) /* UserSettingsDesignSystemButtonGroup */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonGroupSetting.tsx");

export default route;
