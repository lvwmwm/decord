// Module ID: 7135
// Function ID: 7136
// Name: AuthHeader
// Dependencies: [19, 1072, 21, 5009, 6717, 575, 1188, 2]
// Exports: default

// Module 7135 (AuthHeader)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import native from "native" /* 1188 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5009 */;
import TextStyles from "TextStyles" /* 6717 */;
import size from "module_2" /* 2 */;

let obj2;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { header: obj2 };
createStyles = createStyles.createStyles;
obj2 = { textAlign: "center" };
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
let closure_3 = createStyles(obj);
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/AuthHeader.tsx");

export default function AuthHeader(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const items = [closure_3().header, style];
  closure_3();
  return jsx(native.LegacyText, { style: items, accessibilityRole: "header", children });
};
