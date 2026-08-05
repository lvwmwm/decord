// Module ID: 14678
// Function ID: 14679
// Name: route
// Dependencies: [7864, 676, 10333, 14679, 2]

// Module 14678 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Text Input";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_TEXT_INPUT,
  getComponent() {
    return require(14679) /* Sample */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTextInputSetting.tsx");

export default route;
