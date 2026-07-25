// Module ID: 14487
// Function ID: 110726
// Name: route
// Dependencies: [7697, 653, 10059, 14488, 2]

// Module 14487 (route)
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
    return require(14488) /* UserSettingsDesignSystemButtonGroup */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsButtonGroupSetting.tsx");

export default route;
