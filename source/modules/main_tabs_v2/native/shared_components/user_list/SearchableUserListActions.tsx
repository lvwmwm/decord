// Module ID: 8862
// Function ID: 69787
// Name: UserFlashListActions
// Dependencies: [31, 27, 33, 8863, 5501, 5165, 2]
// Exports: useUserListActionsProps

// Module 8862 (UserFlashListActions)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let closure_4;
let closure_5;
const require = arg1;
class UserFlashListActions {
  constructor(arg0) {
    actions = global.actions;
    obj = { style: items };
    items = [, ];
    items[0] = { flex: 1 };
    items[1] = global.style;
    tmp = jsx;
    tmp2 = View;
    tmp3 = jsx;
    obj = { hasIcons: true };
    mapped = undefined;
    if (null != actions) {
      mapped = actions.map((arg0, arg1) => {
        let IconComponent;
        let icon;
        let iconVariant;
        let label;
        let onPress;
        let subLabel;
        ({ label, subLabel, icon, IconComponent, iconVariant, onPress } = arg0);
        const obj = { label, subLabel, icon: outer1_6(outer1_0(outer1_2[5]).TableRow.Icon, { source: icon, IconComponent, variant: iconVariant }), onPress, arrow: true };
        return outer1_6(outer1_0(outer1_2[5]).TableRow, obj, arg1);
      });
    }
    obj.children = mapped;
    obj.children = tmp3(require("TableRowGroupTitle").TableRowGroup, obj);
    return tmp(tmp2, obj);
  }
}
({ View: closure_4, StyleSheet: closure_5 } = get_ActivityIndicator);
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/SearchableUserListActions.tsx");

export const useUserListActionsProps = function useUserListActionsProps(actions) {
  actions = actions.actions;
  const style = actions.style;
  const tmp = style(8863)();
  const dependencyMap = tmp;
  const items = [actions, tmp, style];
  return React.useMemo(() => {
    const flattenResult = outer1_5.flatten(null != style ? style : {});
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
    if ("number" === typeof num) {
      if ("number" === typeof num2) {
        const obj = {};
        let num3 = 0;
        if (null != actions) {
          num3 = 0;
          if (actions.length > 0) {
            num3 = actions.length * closure_2 + num + num2;
          }
        }
        obj.headerSize = num3;
        let fn;
        if (null != actions) {
          if (actions.length > 0) {
            fn = () => outer2_6(outer2_7, { actions: outer1_0, style: outer1_1 });
          }
        }
        obj.renderHeader = fn;
        return obj;
      }
    }
    const error = new Error("UserListActions: paddingTop and paddingBottom must be numbers.");
    throw error;
  }, items);
};
export { UserFlashListActions };
