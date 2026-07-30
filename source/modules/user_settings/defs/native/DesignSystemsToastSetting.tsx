// Module ID: 14573
// Function ID: 14574
// Name: route
// Dependencies: [7753, 676, 10116, 14574, 2]

// Module 14573 (route)
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
    return require(14574) /* UserSettingsDesignSystemToast */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsToastSetting.tsx");

export default route;
