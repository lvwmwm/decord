// Module ID: 8566
// Function ID: 8567
// Name: FormText
// Dependencies: [19, 21, 5090, 5974, 587, 558, 576, 1200, 2]

// Module 8566 (FormText)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import LegacyTokens from "LegacyTokens" /* 5974 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
let tmp;
const native = tmp(1200);
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
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FormText(arg0) {
  let children;
  let color;
  let ref;
  let style;
  const obj = react2;
  const cResult = obj.c(8);
  ({ children, size, color, style, ref } = arg0);
  let str = "medium";
  const tmp4 = closure_3;
  if (undefined !== size) {
    str = size;
  }
  const tmp4Result = tmp4(str);
  if (color == null) {
    color = tmp4Result.primary;
  }
  if (cResult[0] === style) {
    if (cResult[1] === tmp4Result.text) {
      let tmp6;
      if (cResult[2] === color) {
        tmp6 = cResult[3];
      }
      if (cResult[4] === children) {
        if (cResult[5] === ref) {
          let tmp7;
          if (cResult[6] === tmp6) {
            tmp7 = cResult[7];
          }
          return tmp7;
        }
      }
      const tmp9 = jsx(native.LegacyText, { ref, style: tmp6, children });
      cResult[4] = children;
      cResult[5] = ref;
      cResult[6] = tmp6;
      cResult[7] = tmp9;
      tmp7 = tmp9;
    }
  }
  const items = [tmp4Result.text, color, style];
  cResult[0] = style;
  cResult[1] = tmp4Result.text;
  cResult[2] = color;
  cResult[3] = items;
  tmp6 = items;
}) : (function FormText(size) {
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
});
const result = size.fileFinishedImporting("design/void/Form/native/FormText.tsx");

export default tmp3;
export const FormTextColors = obj;
