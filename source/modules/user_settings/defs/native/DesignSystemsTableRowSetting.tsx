// Module ID: 14559
// Function ID: 14560
// Name: route
// Dependencies: [7753, 676, 10116, 14560, 2]

// Module 14559 (route)
import createToggle from "createToggle";

obj = {
  useTitle() {
    return "Table Row";
  },
  parent: require("MobileSetting").MobileSetting.DESIGN_SYSTEMS,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.DESIGN_SYSTEM_TABLE_ROW,
  getComponent() {
    return require(14560) /* MyTableRow */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTableRowSetting.tsx");

export default route;
