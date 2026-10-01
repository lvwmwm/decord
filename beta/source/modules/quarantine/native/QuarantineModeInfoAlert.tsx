// Module ID: 5835
// Function ID: 5836
// Name: QuarantineModeInfoAlert
// Dependencies: [19, 1074, 21, 4836, 5836, 576, 5300, 1177, 1115, 4832, 2]
// Exports: default

// Module 5835 (QuarantineModeInfoAlert)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import AlertDefault from "Alert" /* 5300 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import TextStyles from "TextStyles" /* 5836 */;
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
