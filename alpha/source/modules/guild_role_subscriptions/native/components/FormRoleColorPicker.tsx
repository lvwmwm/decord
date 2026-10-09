// Module ID: 18458
// Function ID: 18459
// Name: FormRoleColorPicker
// Dependencies: [19, 1085, 21, 5091, 5055, 16654, 2000, 14045, 14769, 1103, 2]
// Exports: default

// Module 18458 (FormRoleColorPicker)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import size from "module_2" /* 2 */;

const DEFAULT_ROLE_COLOR = Constants.DEFAULT_ROLE_COLOR;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ rowColorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 } });
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormRoleColorPicker.tsx");

export default function FormRoleColorPicker(color) {
  color = color.color;
  if (color === undefined) {
    color = DEFAULT_ROLE_COLOR;
  }
  let flag = color.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const onChange = color.onChange;
  const items = [color, onChange];
  const tmp = closure_6();
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    const obj2 = { color, onSelect: onChange };
    obj.openLazy(asyncRequire(16654, dependencyMap.paths), "RoleColorPicker", obj2);
  }, items);
  let obj2 = { color, style: tmp.rowColorBlock, onSelect: callback };
  onChange(14045);
  const obj3 = color(1103);
  return <tmp3 leading={null} label={obj3.int2hex(color)} disabled={flag} onPress={callback} />;
};
