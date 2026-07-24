// Module ID: 14500
// Function ID: 110719
// Name: route
// Dependencies: [7751, 653, 10127, 14501, 2]

// Module 14500 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Tooltip";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_TOOLTIP,
  getComponent() {
    return require(14501) /* useCanRotate */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTooltipSetting.tsx");

export default route;
