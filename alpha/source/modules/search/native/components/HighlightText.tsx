// Module ID: 11054
// Function ID: 11055
// Name: HighlightText
// Dependencies: [19, 1072, 21, 5014, 5011, 575, 1187, 2]
// Exports: default

// Module 11054 (HighlightText)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import native from "native" /* 1187 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5014 */;
import ColorUtils_mod from "ColorUtils" /* 5011 */;
import size from "module_2" /* 2 */;

let ColorUtils;
let obj2;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { text: obj2 };
createStyles = createStyles.createStyles;
obj2 = { fontFamily: Fonts.PRIMARY_BOLD, backgroundColor: ColorUtils.hexOpacityToRgba(nativeDefault.unsafe_rawColors.YELLOW_300, 0.3), color: nativeDefault.colors.TEXT_STRONG };
ColorUtils = ColorUtils_mod;
let closure_3 = createStyles(obj);
const result = size.fileFinishedImporting("modules/search/native/components/HighlightText.tsx");

export default function HighlightText(children) {
  children = children.children;
  return jsx(native.LegacyText, { style: closure_3().text, children });
};
