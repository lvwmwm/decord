// Module ID: 8815
// Function ID: 69519
// Name: UserFlashListActions
// Dependencies: []
// Exports: useUserListActionsProps

// Module 8815 (UserFlashListActions)
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
        const obj = { label, subLabel, icon: callback2(callback(closure_2[5]).TableRow.Icon, { source: icon, IconComponent, variant: iconVariant }), onPress, arrow: true };
        return callback2(callback(closure_2[5]).TableRow, obj, arg1);
      });
    }
    obj.children = mapped;
    obj.children = tmp3(arg1(dependencyMap[4]).TableRowGroup, obj);
    return tmp(tmp2, obj);
  }
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, StyleSheet: closure_5 } = arg1(dependencyMap[1]));
const jsx = arg1(dependencyMap[2]).jsx;
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/SearchableUserListActions.tsx");

export const useUserListActionsProps = function useUserListActionsProps(actions) {
  actions = actions.actions;
  const arg1 = actions;
  const style = actions.style;
  const importDefault = style;
  const tmp = importDefault(dependencyMap[3])();
  const dependencyMap = tmp;
  const items = [actions, tmp, style];
  return React.useMemo(() => {
    const flattenResult = closure_5.flatten(null != style ? style : {});
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
            num3 = actions.length * tmp + num + num2;
          }
        }
        obj.headerSize = num3;
        let fn;
        if (null != actions) {
          if (actions.length > 0) {
            fn = () => callback(closure_7, { actions: closure_0, style: closure_1 });
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
