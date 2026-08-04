// Module ID: 14697
// Function ID: 14698
// Name: route
// Dependencies: [7892, 676, 10361, 14698, 2]

// Module 14697 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Toast";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_TOAST,
  getComponent() {
    return require(14698) /* UserSettingsDesignSystemToast */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsToastSetting.tsx");

export default route;
