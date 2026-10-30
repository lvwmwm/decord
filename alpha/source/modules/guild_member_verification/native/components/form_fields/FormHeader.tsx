// Module ID: 9093
// Function ID: 9094
// Name: FormHeader
// Dependencies: [19, 1083, 21, 5009, 6717, 575, 1188, 2]
// Exports: default

// Module 9093 (FormHeader)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1083 */;
import native from "native" /* 1188 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5009 */;
import TextStyles from "TextStyles" /* 6717 */;
import size from "module_2" /* 2 */;

let obj2;
const Fonts = Constants.Fonts;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { fieldHeader: obj2 };
createStyles = createStyles.createStyles;
const DISPLAY_EXTRABOLD = Fonts.DISPLAY_EXTRABOLD;
obj2 = { paddingBottom: 8 };
let merged = Object.assign(TextStyles(DISPLAY_EXTRABOLD, nativeDefault.colors.TEXT_SUBTLE, 12, { uppercase: true }));
let closure_3 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/FormHeader.tsx");

export default function FormHeader(children) {
  children = children.children;
  const merged = Object.assign(children, Object.assign({ children: 0 }));
  const tmp2 = closure_3();
  const LegacyText = native.LegacyText;
  const merged1 = Object.assign(merged);
  const items = [tmp2.fieldHeader, merged.style];
  return <LegacyText style={items}>{children}</LegacyText>;
};
