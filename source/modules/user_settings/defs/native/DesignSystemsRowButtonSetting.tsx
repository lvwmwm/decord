// Module ID: 14696
// Function ID: 14697
// Name: route
// Dependencies: [8005, 676, 10364, 14697, 2]

// Module 14696 (route)
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
    return require(14697) /* UserSettingsDesignSystemRowButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsRowButtonSetting.tsx");

export default route;
