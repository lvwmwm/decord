// Module ID: 10324
// Function ID: 10325
// Name: SearchableUserListActions
// Dependencies: [19, 17, 21, 10325, 5999, 5917, 2]
// Exports: useUserListActionsProps

// Module 10324 (SearchableUserListActions)
import Fragment from "Fragment" /* 21 */;
import TableRow2 from "TableRow" /* 5917 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
class UserFlashListActions {
  constructor(actions) {
    actions = actions.actions;
    const items = [{ flex: 1 }, actions.style];
    let mapped;
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    if (actions != null) {
      mapped = actions.map((item, index) => {
        let IconComponent;
        let icon;
        let iconVariant;
        let label;
        let onPress;
        let subLabel;
        ({ label, subLabel, icon, IconComponent, iconVariant, onPress } = item);
        const TableRow = TableRow2.TableRow;
        return <TableRow key={arg1} label={label} subLabel={subLabel} icon={null} onPress={onPress} arrow />;
      });
    }
    return <tmp2 style={items}>{null}</tmp2>;
  }
}
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/SearchableUserListActions.tsx");

export const useUserListActionsProps = function useUserListActionsProps(actions) {
  let closure_2;
  actions = actions.actions;
  const style = actions.style;
  const tmp = style(10325)();
  dependencyMap = tmp;
  const items = [actions, tmp, style];
  return react.useMemo(() => {
    let fn;
    let obj = style;
    hasOwnProperty = hasOwnProperty.flatten;
    if (style == null) {
      obj = {};
    }
    const flattenResult = hasOwnProperty(obj);
    const paddingTop = flattenResult.paddingTop;
    let num = 0;
    if (undefined !== paddingTop) {
      num = paddingTop;
    }
    const paddingBottom = flattenResult.paddingBottom;
    let num2 = 0;
    if (undefined !== paddingBottom) {
      num2 = paddingBottom;
    }
    if (typeof num === "number") {
      if (typeof num2 === "number") {
        let num3 = 0;
        if (null != actions) {
          num3 = 0;
          if (actions.length > 0) {
            num3 = arr.length * closure_2 + num + num2;
          }
        }
        const obj2 = { headerSize: num3, renderHeader: fn };
        fn = undefined;
        if (null != actions) {
          if (actions.length > 0) {
            fn = () => <UserFlashListActions actions={actions} style={style} />;
          }
        }
        return obj2;
      }
    }
    const error = new Error("UserListActions: paddingTop and paddingBottom must be numbers.");
    throw error;
  }, items);
};
export { UserFlashListActions };
