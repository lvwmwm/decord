// Module ID: 20057
// Function ID: 20058
// Name: FormRoleColorPicker
// Dependencies: [19, 1071, 21, 4913, 5127, 17883, 2119, 15122, 15854, 1089, 2]
// Exports: default

// Module 20057 (FormRoleColorPicker)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

const DEFAULT_ROLE_COLOR = Constants.DEFAULT_ROLE_COLOR;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ rowColorBlock: { marginHorizontal: 0, marginVertical: 0, minWidth: 24, height: 24, borderRadius: 3 } });
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
    obj.openLazy(asyncRequire(17883, dependencyMap.paths), "RoleColorPicker", obj2);
  }, items);
  let obj2 = { color, style: tmp.rowColorBlock, onSelect: callback };
  onChange(15122);
  const obj3 = color(1089);
  return <tmp3 leading={null} label={obj3.int2hex(color)} disabled={flag} onPress={callback} />;
};
