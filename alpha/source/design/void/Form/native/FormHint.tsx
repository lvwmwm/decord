// Module ID: 8184
// Function ID: 8185
// Name: FormHint
// Dependencies: [19, 17, 21, 5014, 575, 7059, 5624, 1187, 2]
// Exports: default

// Module 8184 (FormHint)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import RedesignCompat from "RedesignCompat" /* 7059 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let obj2;
const Platform = react_native.Platform;
const jsx = Fragment.jsx;
let obj = { formHintText: obj2, redesignHorizontalPadding: { paddingHorizontal: 12 }, horizonatalPadding: { paddingHorizontal: 16 } };
obj2 = { fontSize: 14, marginBottom: 0, color: nativeDefault.colors.TEXT_MUTED };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/void/Form/native/FormHint.tsx");

export default function FormHint(inset) {
  let children;
  let items;
  let style;
  let tmp4Result;
  let flag = inset.inset;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, children } = inset);
  const tmp = closure_4();
  if (react.useContext(RedesignCompat.RedesignCompatContext)) {
    let redesignHorizontalPadding = !flag;
    const Text = tmp2(5624).Text;
    if (!flag) {
      redesignHorizontalPadding = tmp.redesignHorizontalPadding;
    }
    const obj2 = { variant: "text-sm/medium", color: "text-muted", style: items, children };
    items = [redesignHorizontalPadding, style];
    tmp4Result = tmp4(Text, obj2);
  } else {
    const items1 = [tmp.formHintText, , ];
    let horizonatalPadding = !flag;
    const LegacyText = tmp2(1187).LegacyText;
    if (!flag) {
      horizonatalPadding = tmp.horizonatalPadding;
    }
    const obj = { style: items1, children };
    items1[1] = horizonatalPadding;
    items1[2] = style;
    tmp4Result = tmp4(LegacyText, obj);
  }
  return tmp4Result;
};
