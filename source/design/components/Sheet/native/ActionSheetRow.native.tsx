// Module ID: 5500
// Function ID: 46875
// Name: ActionSheetRowIcon
// Dependencies: []
// Exports: ActionSheetSwitchRow

// Module 5500 (ActionSheetRowIcon)
class ActionSheetRow {
  constructor(arg0) {
    str = global.variant;
    if (str === undefined) {
      str = "default";
    }
    obj = { id: null, type: 4, name: 4, hasWishlist: "rgba(0, 0, 0, 0.75)" };
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
    obj.children = jsx(arg1(dependencyMap[3]).TableRow, obj1);
    return jsx(closure_5.Provider, obj);
  }
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const context = importAllResult.createContext("default");
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
  return jsx(arg1(dependencyMap[4]).TableRowIcon, obj);
};
ActionSheetRow.Group = function ActionSheetRowGroup(arg0) {
  let children;
  let hasIcons;
  let title;
  ({ children, title, hasIcons } = arg0);
  return <View>{jsx(arg1(dependencyMap[5]).TableRowGroup, { hasIcons, title, children })}</View>;
};
const result = arg1(dependencyMap[7]).fileFinishedImporting("design/components/Sheet/native/ActionSheetRow.native.tsx");

export { ActionSheetRow };
export const ActionSheetSwitchRow = function ActionSheetSwitchRow(arg0) {
  const merged = Object.assign(arg0);
  return jsx(arg1(dependencyMap[6]).TableSwitchRow, {});
};
