// Module ID: 6654
// Function ID: 6655
// Name: AuthHeader
// Dependencies: [19, 1085, 21, 5091, 5903, 587, 558, 576, 1200, 2]

// Module 6654 (AuthHeader)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5091 */;
import TextStyles from "TextStyles" /* 5903 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp;
const native = tmp(1200);
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { header: obj2 };
createStyles = createStyles.createStyles;
obj2 = { textAlign: "center" };
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
let closure_3 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function AuthHeader(arg0) {
  let children;
  let style;
  const obj = react2;
  const cResult = obj.c(6);
  ({ children, style } = arg0);
  const tmp4 = closure_3();
  if (cResult[0] === style) {
    let tmp5;
    if (cResult[1] === tmp4.header) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === children) {
      let tmp6;
      if (cResult[4] === tmp5) {
        tmp6 = cResult[5];
      }
      return tmp6;
    }
    const tmp8 = jsx(native.LegacyText, { style: tmp5, accessibilityRole: "header", children });
    cResult[3] = children;
    cResult[4] = tmp5;
    cResult[5] = tmp8;
    tmp6 = tmp8;
  }
  const items = [tmp4.header, style];
  cResult[0] = style;
  cResult[1] = tmp4.header;
  cResult[2] = items;
  tmp5 = items;
}) : (function AuthHeader(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const items = [closure_3().header, style];
  closure_3();
  return jsx(native.LegacyText, { style: items, accessibilityRole: "header", children });
});
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/AuthHeader.tsx");

export default tmp6;
