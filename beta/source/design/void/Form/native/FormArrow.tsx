// Module ID: 7386
// Function ID: 7387
// Name: FormArrow
// Dependencies: [19, 17, 21, 4756, 576, 4752, 1177, 7387, 2]
// Exports: default

// Module 7386 (FormArrow)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4752 */;
import _modDef7387 from "module_7387" /* 7387 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4756);
let obj2 = { wrapper: { flexDirection: "row", alignItems: "center" }, icon: { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: -8, marginLeft: 8 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormArrow.tsx");

export default function FormArrow(arg0) {
  ({ label, style } = arg0);
  const tmp = closure_6();
  if (null != label) {
    const obj2 = { style: tmp.wrapper, children: null };
    const obj3 = { maxFontSizeMultiplier: 1.5, variant: "text-md/medium", color: "text-muted", children: label };
    const items = [React4(Text_Text.Text, obj3), ];
    const obj4 = { style: null, source: null, size: null };
    const items1 = [tmp.icon, style];
    obj4.style = items1;
    obj4.source = _modDef7387;
    obj4.size = native.Icon.Sizes.MEDIUM;
    items[1] = React4(native.Icon, obj4);
    obj2.children = items;
    let tmp6 = hasOwnProperty(View, obj2);
  } else {
    const obj = { style: null, source: null, size: null };
    const items2 = [tmp.icon, style];
    obj.style = items2;
    obj.source = _modDef7387;
    obj.size = native.Icon.Sizes.MEDIUM;
    tmp6 = React4(native.Icon, obj);
  }
  return tmp6;
};
