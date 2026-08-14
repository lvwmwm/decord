// Module ID: 14866
// Function ID: 14867
// Name: route
// Dependencies: [8148, 676, 10421, 14867, 2]

// Module 14866 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Row Button";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_ROW_BUTTON,
  getComponent() {
    return require(14867) /* UserSettingsDesignSystemRowButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsRowButtonSetting.tsx");

export default route;
