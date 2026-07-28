// Module ID: 14538
// Function ID: 110940
// Name: route
// Dependencies: [7733, 653, 10099, 14539, 2]

// Module 14538 (route)
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
    return require(14539) /* MyTableRow */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DesignSystemsTableRowSetting.tsx");

export default route;
