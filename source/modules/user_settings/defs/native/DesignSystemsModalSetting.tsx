// Module ID: 14814
// Function ID: 14815
// Name: route
// Dependencies: [8082, 676, 10447, 14815, 2]

// Module 14814 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Modal";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_MODAL,
  getComponent() {
    return require(14815) /* DemoModal */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsModalSetting.tsx");

export default route;
