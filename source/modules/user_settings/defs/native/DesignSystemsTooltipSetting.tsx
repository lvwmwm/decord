// Module ID: 14512
// Function ID: 110851
// Name: route
// Dependencies: [7697, 653, 10059, 14513, 2]

// Module 14512 (route)
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
    return require(14513) /* useCanRotate */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTooltipSetting.tsx");

export default route;
