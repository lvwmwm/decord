// Module ID: 7428
// Function ID: 7429
// Name: ActionSheetRow
// Dependencies: [19, 17, 21, 7038, 7046, 7126, 7429, 2]
// Exports: ActionSheetSwitchRow

// Module 7428 (ActionSheetRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import TableRow2 from "TableRow" /* 7038 */;
import TableRowIcon2 from "TableRowIcon" /* 7046 */;
import TableRowGroup from "TableRowGroup" /* 7126 */;
import TableSwitchRow2 from "TableSwitchRow" /* 7429 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

class ActionSheetRow {
  constructor(variant) {
    let arrow;
    let icon;
    let str = variant.variant;
    const label = variant.label;
    if (str === undefined) {
      str = "default";
    }
    ({ arrow, icon } = variant);
    const merged = Object.assign(variant, Object.assign({ label: 0, variant: 0, arrow: 0, icon: 0 }));
    const Provider = redux.Provider;
    const TableRow = TableRow2.TableRow;
    const merged1 = Object.assign(merged);
    return <Provider value={str}>{null}</Provider>;
  }
}
const View = react_native.View;
const jsx = Fragment.jsx;
const hasOwnProperty = react.createContext("default");
ActionSheetRow.Icon = function ActionSheetRowIcon(IconComponent) {
  IconComponent = IconComponent.IconComponent;
  const source = IconComponent.source;
  const context = react.useContext(redux);
  const obj = { source, IconComponent, variant: context };
  const TableRowIcon = TableRowIcon2.TableRowIcon;
  return jsx(TableRowIcon, obj);
};
ActionSheetRow.Group = function ActionSheetRowGroup(arg0) {
  let children;
  let hasIcons;
  let title;
  ({ children, title, hasIcons } = arg0);
  return <View>{jsx(TableRowGroup.TableRowGroup, { hasIcons, title, children })}</View>;
};
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheetRow.native.tsx");

export { ActionSheetRow };
export function ActionSheetSwitchRow(arg0) {
  const TableSwitchRow = TableSwitchRow2.TableSwitchRow;
  const merged = Object.assign(arg0);
  return <TableSwitchRow />;
}
