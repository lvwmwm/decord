// Module ID: 11447
// Function ID: 11448
// Name: HighlightText
// Dependencies: [19, 1086, 21, 4837, 4685, 588, 558, 576, 1189, 2]

// Module 11447 (HighlightText)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ColorUtils_mod from "ColorUtils" /* 4685 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let children;

let ColorUtils;
let obj2;
let tmp;
const native = tmp(1189);
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { text: obj2 };
createStyles = createStyles.createStyles;
obj2 = { fontFamily: Fonts.PRIMARY_BOLD, backgroundColor: ColorUtils.hexOpacityToRgba(nativeDefault.unsafe_rawColors.YELLOW_300, 0.3), color: nativeDefault.colors.TEXT_STRONG };
ColorUtils = ColorUtils_mod;
let closure_3 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((children) => {
  const obj = react2;
  const cResult = obj.c(3);
  children = children.children;
  const tmp4 = closure_3();
  if (cResult[0] === children) {
    let tmp5;
    if (cResult[1] === tmp4.text) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmp6 = jsx(native.LegacyText, { style: tmp4.text, children });
  cResult[0] = children;
  cResult[1] = tmp4.text;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((children) => {
  children = children.children;
  return jsx(native.LegacyText, { style: closure_3().text, children });
});
const result = size.fileFinishedImporting("modules/search/native/components/HighlightText.tsx");

export default tmp4;
