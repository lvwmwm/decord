// Module ID: 16157
// Function ID: 16158
// Name: ICYMIHeader
// Dependencies: [19, 17, 21, 16091, 576, 4832, 1115, 2]
// Exports: default

// Module 16157 (ICYMIHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16091 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroRequire;
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createICYMIStyles.createICYMIStyles((margin) => {
  let obj2;
  const obj = { text: obj2, separator: size };
  obj2 = { flexDirection: "row", justifyContent: "space-between", marginHorizontal: margin.margin };
  size = { height: 1, width: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_16 };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/icymi/native/ICYMIHeader.tsx");

export default function ICYMIHeader() {
  let intl;
  let items;
  const tmp = closure_7();
  const obj = { children: items };
  items = [, ];
  const obj2 = { style: tmp.separator };
  items[0] = React3(View, obj2);
  const obj3 = { style: tmp.text, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: intl.string(intl2.t["jnXV/V"]) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items[1] = React3(Text, obj3);
  return metroRequire(hasOwnProperty, obj);
};
