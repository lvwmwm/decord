// Module ID: 19921
// Function ID: 19922
// Name: FormRoleColorPicker
// Dependencies: [19, 1072, 21, 5009, 5253, 18311, 1995, 15679, 16397, 1091, 2]
// Exports: default

// Module 19921 (FormRoleColorPicker)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
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
    obj.openLazy(asyncRequire(18311, dependencyMap.paths), "RoleColorPicker", obj2);
  }, items);
  let obj2 = { color, style: tmp.rowColorBlock, onSelect: callback };
  onChange(15679);
  const obj3 = color(1091);
  return <tmp3 leading={null} label={obj3.int2hex(color)} disabled={flag} onPress={callback} />;
};
