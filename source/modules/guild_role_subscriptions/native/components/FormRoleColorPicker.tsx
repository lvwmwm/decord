// Module ID: 16533
// Function ID: 128824
// Name: FormRoleColorPicker
// Dependencies: [31, 653, 33, 4131, 4099, 14879, 1935, 12967, 13632, 665, 2]
// Exports: default

// Module 16533 (FormRoleColorPicker)
import result from "result";
import { DEFAULT_ROLE_COLOR } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ rowColorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 } });
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormRoleColorPicker.tsx");

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
  const callback = React.useCallback(() => {
    let obj = onChange(outer1_2[4]);
    obj = { color, onSelect: onChange };
    obj.openLazy(color(outer1_2[6])(outer1_2[5], outer1_2.paths), "RoleColorPicker", obj);
  }, items);
  let obj = {};
  const tmp = callback();
  obj = { color, style: tmp.rowColorBlock, onSelect: callback };
  obj.leading = jsx(onChange(13632), { color, style: tmp.rowColorBlock, onSelect: callback });
  const tmp3 = onChange(12967);
  obj.label = color(665).int2hex(color);
  obj.disabled = flag;
  obj.onPress = callback;
  return <tmp3 color={color} style={tmp.rowColorBlock} onSelect={callback} />;
};
