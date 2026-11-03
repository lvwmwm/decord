// Module ID: 7025
// Function ID: 7026
// Name: QuarantineModeInfoAlert
// Dependencies: [19, 1072, 21, 5141, 6843, 575, 6150, 1187, 1113, 5747, 2]
// Exports: default

// Module 7025 (QuarantineModeInfoAlert)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1113 */;
import native from "native" /* 1187 */;
import Text_Text from "Text/Text" /* 5747 */;
import AlertDefault from "Alert" /* 6150 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5141 */;
import TextStyles from "TextStyles" /* 6843 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const Fonts = Constants.Fonts;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, text: { textAlign: "center", marginVertical: 8 } };
obj2 = { textAlign: "center", marginVertical: 12 };
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_BOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/quarantine/native/QuarantineModeInfoAlert.tsx");

export default function QuarantineModeInfoAlert(onClose) {
  let intl;
  let intl2;
  let items;
  onClose = onClose.onClose;
  const tmp = closure_5();
  const obj = { onClose, children: items };
  const obj2 = { style: tmp.header, children: intl.string(intl3.t.EouHwv) };
  const tmp2 = AlertDefault;
  const LegacyText = native.LegacyText;
  intl = intl3.intl;
  items = [_false(LegacyText, obj2), ];
  const obj3 = { style: tmp.text, variant: "text-md/medium", children: intl2.string(intl3.t.zNPBMA) };
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  items[1] = _false(Text, obj3);
  return React3(tmp2, obj);
};
