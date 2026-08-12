// Module ID: 14870
// Function ID: 14871
// Name: route
// Dependencies: [8123, 676, 10493, 14871, 2]

// Module 14870 (route)
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
    return require(14871) /* UserSettingsDesignSystemToast */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsToastSetting.tsx");

export default route;
