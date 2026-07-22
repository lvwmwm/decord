// Module ID: 16346
// Function ID: 126111
// Name: FormRoleColorPicker
// Dependencies: []
// Exports: default

// Module 16346 (FormRoleColorPicker)
let closure_3 = importAll(dependencyMap[0]);
const DEFAULT_ROLE_COLOR = arg1(dependencyMap[1]).DEFAULT_ROLE_COLOR;
const jsx = arg1(dependencyMap[2]).jsx;
let closure_6 = arg1(dependencyMap[3]).createStyles({ rowColorBlock: {} });
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormRoleColorPicker.tsx");

export default function FormRoleColorPicker(color) {
  color = color.color;
  if (color === undefined) {
    color = DEFAULT_ROLE_COLOR;
  }
  const arg1 = color;
  let flag = color.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const onChange = color.onChange;
  const importDefault = onChange;
  const items = [color, onChange];
  const callback = React.useCallback(() => {
    let obj = onChange(paths[4]);
    obj = { color, onSelect: onChange };
    obj.openLazy(color(paths[6])(paths[5], paths.paths), "RoleColorPicker", obj);
  }, items);
  let obj = {};
  const tmp = callback();
  obj = { color, style: tmp.rowColorBlock, onSelect: callback };
  obj.leading = jsx(importDefault(dependencyMap[8]), obj);
  const tmp3 = importDefault(dependencyMap[7]);
  obj.label = arg1(dependencyMap[9]).int2hex(color);
  obj.disabled = flag;
  obj.onPress = callback;
  return <tmp3 {...obj} />;
};
