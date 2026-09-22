// Module ID: 18231
// Function ID: 18232
// Name: FormRoleColorPicker
// Dependencies: [19, 1078, 21, 4758, 4725, 16632, 1984, 14167, 14862, 1096, 2]
// Exports: default

// Module 18231 (FormRoleColorPicker)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import noop from "module_19" /* 19 */;

require = fn;
const DEFAULT_ROLE_COLOR = fn(1078).DEFAULT_ROLE_COLOR;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let closure_6 = createStyles.createStyles({ rowColorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 } });
const size = fn(2);
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
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16632, dependencyMap.paths), "RoleColorPicker", { color, onSelect: onChange });
  }, items);
  const obj = { leading: null, label: null, disabled: null, onPress: null };
  const tmp = closure_6();
  obj.leading = jsx(onChange(14862), { color, style: tmp.rowColorBlock, onSelect: callback });
  const obj2 = { color, style: tmp.rowColorBlock, onSelect: callback };
  const tmp3 = onChange(14167);
  obj.label = color(1096).int2hex(color);
  obj.disabled = flag;
  obj.onPress = callback;
  return <tmp3 leading={null} label={null} disabled={null} onPress={null} />;
};
