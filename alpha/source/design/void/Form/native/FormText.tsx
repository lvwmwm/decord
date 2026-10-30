// Module ID: 8181
// Function ID: 8182
// Name: FormText
// Dependencies: [19, 21, 5009, 6772, 575, 1188, 2]
// Exports: default

// Module 8181 (FormText)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import LegacyTokens from "LegacyTokens" /* 6772 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const jsx = Fragment.jsx;
let closure_3 = createStyles.createStyles((arg0) => {
  let num2;
  let obj3;
  let num = 16;
  const obj = { primary: { color: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 }, text: obj3 };
  ({ color: LegacyTokens.DARK_PRIMARY_100_LIGHT_PRIMARY_500 });
  if ("small" === arg0) {
    num = 12;
  }
  obj3 = { fontSize: num, lineHeight: num2 };
  num2 = 22;
  if ("small" === arg0) {
    num2 = 16;
  }
  return obj;
});
let obj = { BRAND: obj2, RED: obj3, GREEN: { color: nativeDefault.unsafe_rawColors.GREEN_360 }, YELLOW: { color: nativeDefault.unsafe_rawColors.YELLOW_300 }, LINK: { color: nativeDefault.unsafe_rawColors.BLUE_345 }, WHITE: { color: nativeDefault.unsafe_rawColors.WHITE } };
obj2 = { color: nativeDefault.unsafe_rawColors.BRAND_500 };
obj3 = { color: nativeDefault.unsafe_rawColors.RED_400 };
({ color: nativeDefault.unsafe_rawColors.GREEN_360 });
({ color: nativeDefault.unsafe_rawColors.YELLOW_300 });
({ color: nativeDefault.unsafe_rawColors.BLUE_345 });
({ color: nativeDefault.unsafe_rawColors.WHITE });
const result = size.fileFinishedImporting("design/void/Form/native/FormText.tsx");

export default function FormText(size) {
  let items;
  let ref;
  let style;
  let str = size.size;
  const children = size.children;
  if (str === undefined) {
    str = "medium";
  }
  let primary = size.color;
  ({ style, ref } = size);
  const tmp = closure_3(str);
  const obj = { ref, style: items, children };
  items = [tmp.text, , ];
  const LegacyText = native.LegacyText;
  const tmp2 = jsx;
  if (primary == null) {
    primary = tmp.primary;
  }
  items[1] = primary;
  items[2] = style;
  return tmp2(LegacyText, obj);
};
export const FormTextColors = obj;
