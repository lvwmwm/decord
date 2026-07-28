// Module ID: 14922
// Function ID: 113690
// Name: FormRoleColorPicker
// Dependencies: [31, 653, 33, 4165, 4133, 14923, 1935, 7611, 13676, 665, 2]
// Exports: default

// Module 14922 (FormRoleColorPicker)
import result from "result";
import { DEFAULT_ROLE_COLOR } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ rowColorBlock: { marginHorizontal: 0, marginVertical: 0, marginRight: 8, minWidth: 24, height: 24, borderRadius: 3 } });
const result = require("jsxProd").fileFinishedImporting("components_native/common/color_picker/FormRoleColorPicker.tsx");

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
  obj = { color, style: callback().rowColorBlock, onSelect: callback };
  obj.leading = jsx(onChange(13676), { color, style: callback().rowColorBlock, onSelect: callback });
  const tmp = callback();
  obj.label = color(665).int2hex(color);
  obj.disabled = flag;
  obj.onPress = callback;
  return jsx(color(7611).FormRow, { color, style: callback().rowColorBlock, onSelect: callback });
};
