// Module ID: 5448
// Function ID: 46556
// Name: FormIcon
// Dependencies: [31, 27, 5353, 5337, 4810]
// Exports: default

// Module 5448 (FormIcon)
import "module_31";
import { jsx } from "keys";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let closure_3 = _isNativeReflectConstruct.createStyles({ icon: { opacity: 0.6 } });
const result = _isNativeReflectConstruct.fileFinishedImporting("design/void/Form/native/FormIcon.tsx");

export default function FormIcon(color) {
  let style;
  let themedColor;
  ({ style, themedColor } = color);
  let obj = { "Null": "spring", "Null": "linear", "Null": "easeInEaseOut" };
  Object.setPrototypeOf(null);
  const merged = Object.assign(color, obj);
  const tmp3 = callback();
  if (null != themedColor) {
    obj = {};
    const items = [tmp3.icon, style];
    obj.style = items;
    obj.themedColor = themedColor;
    const merged1 = Object.assign(merged);
    let tmp10 = jsx(arg1(dependencyMap[3]).ThemedIcon, obj);
  } else {
    obj = {};
    const items1 = [tmp3.icon, style];
    obj.style = items1;
    obj.color = color.color;
    const merged2 = Object.assign(merged);
    tmp10 = jsx(arg1(dependencyMap[3]).Icon, obj);
  }
  return tmp10;
};
