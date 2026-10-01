// Module ID: 6562
// Function ID: 6563
// Name: FormArrow
// Dependencies: [19, 17, 21, 4836, 576, 4832, 1177, 6563, 2]
// Exports: default

// Module 6562 (FormArrow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import AssetRegistryDefault from "AssetRegistry" /* 6563 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
