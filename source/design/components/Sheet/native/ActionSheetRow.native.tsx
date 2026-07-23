// Module ID: 5502
// Function ID: 46914
// Name: ActionSheetRowIcon
// Dependencies: [31, 27, 33, 5165, 5170, 5503, 5504, 2]
// Exports: ActionSheetSwitchRow

// Module 5502 (ActionSheetRowIcon)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
class ActionSheetRow {
  constructor(arg0) {
    str = global.variant;
    if (str === undefined) {
      str = "default";
    }
    obj = { label: 0, variant: 0, arrow: 0, icon: 0 };
    ({ arrow, icon } = global);
    setPrototypeOfResult = Object.setPrototypeOf(null);
    obj = {};
    obj.value = str;
    merged = Object.assign(global, obj);
    obj1 = {};
    obj1.variant = str;
    obj1.label = global.label;
    obj1.arrow = arrow;
    obj1.icon = icon;
    merged1 = Object.assign(merged);
    obj.children = jsx(require("TableRowInner").TableRow, obj1);
    return jsx(c5.Provider, obj);
  }
}
let context = importAllResult.createContext("default");
ActionSheetRow.Icon = function ActionSheetRowIcon(IconComponent) {
  IconComponent = IconComponent.IconComponent;
  const context = importAllResult.useContext(closure_5);
  const obj = { source: IconComponent.source };
  let tmp3;
  if (null != IconComponent) {
    tmp3 = IconComponent;
  }
  obj.IconComponent = tmp3;
  obj.variant = context;
  return jsx(require(5170) /* TableRowIcon */.TableRowIcon, { source: IconComponent.source });
};
ActionSheetRow.Group = function ActionSheetRowGroup(arg0) {
  let children;
  let hasIcons;
  let title;
  ({ children, title, hasIcons } = arg0);
  return <View>{jsx(require(5503) /* TableRowGroupTitle */.TableRowGroup, { hasIcons, title, children })}</View>;
};
const result = require("jsxProd").fileFinishedImporting("design/components/Sheet/native/ActionSheetRow.native.tsx");

export { ActionSheetRow };
export const ActionSheetSwitchRow = function ActionSheetSwitchRow(arg0) {
  const merged = Object.assign(arg0);
  return jsx(require(5504) /* TableSwitchRow */.TableSwitchRow, {});
};
