// Module ID: 14928
// Function ID: 14929
// Name: route
// Dependencies: [8198, 676, 10669, 14929, 2]

// Module 14928 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Tooltip";
  },
  parent: require("MobileUserSettings").MobileUserSettings.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_TOOLTIP,
  getComponent() {
    return require(14929) /* Content */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTooltipSetting.tsx");

export default route;
