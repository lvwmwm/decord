// Module ID: 7307
// Function ID: 7308
// Name: FormArrow
// Dependencies: [19, 17, 21, 5009, 575, 5619, 1188, 7308, 2]
// Exports: default

// Module 7307 (FormArrow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 5619 */;
import AssetRegistryDefault from "AssetRegistry" /* 7308 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { wrapper: { flexDirection: "row", alignItems: "center" }, icon: obj2 };
obj2 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, marginRight: -8, marginLeft: 8 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/void/Form/native/FormArrow.tsx");

export default function FormArrow(arg0) {
  let items;
  let items1;
  let items2;
  let label;
  let style;
  let tmp6;
  ({ label, style } = arg0);
  const tmp = closure_6();
  if (null != label) {
    const obj2 = { style: tmp.wrapper, children: items };
    const obj3 = { maxFontSizeMultiplier: 1.5, variant: "text-md/medium", color: "text-muted", children: label };
    items = [React3(Text_Text.Text, obj3), ];
    const obj4 = { style: items1, source: AssetRegistryDefault, size: native.Icon.Sizes.MEDIUM };
    items1 = [tmp.icon, style];
    const Icon2 = native.Icon;
    items[1] = React3(Icon2, obj4);
    tmp6 = hasOwnProperty(View, obj2);
  } else {
    const obj = { style: items2, source: AssetRegistryDefault, size: native.Icon.Sizes.MEDIUM };
    items2 = [tmp.icon, style];
    const Icon = native.Icon;
    tmp6 = React3(Icon, obj);
  }
  return tmp6;
};
