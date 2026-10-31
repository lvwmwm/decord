// Module ID: 15399
// Function ID: 15400
// Name: PremiumGroupEducationActionSheet
// Dependencies: [17, 2060, 21, 5014, 575, 5272, 7086, 5624, 1113, 3288, 2]
// Exports: default

// Module 15399 (PremiumGroupEducationActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 2060 */;
import _modDef3288 from "module_3288" /* 3288 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5272 */;
import Text_Text from "Text/Text" /* 5624 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7086 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const HELP_CENTER_LINK = PremiumGroupConstants.HELP_CENTER_LINK;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { marginTop: 32, marginHorizontal: 30 }, aboutContainer: obj2, warningIcon: { margin: 16 }, aboutTextContainer: { justifyContent: "center", flex: 1, marginRight: 30 }, helpdeskText: { textAlign: "center", marginBottom: 24 } };
obj2 = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", borderRadius: nativeDefault.radii.lg, marginBottom: 12 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/premium_group/native/PremiumGroupEducationActionSheet.tsx");

export default function PremiumGroupEducationActionSheet(aboutText) {
  let intl;
  let items;
  let items1;
  let obj2;
  let obj7;
  aboutText = aboutText.aboutText;
  const tmp = closure_7();
  const obj = { children: metroRequire(View, obj2) };
  obj2 = { style: tmp.container, children: items1 };
  const obj3 = { style: tmp.aboutContainer, children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  items = [, ];
  const obj4 = { size: "lg", style: tmp.warningIcon };
  items[0] = hasOwnProperty(CircleErrorIcon.CircleErrorIcon, obj4);
  const obj5 = { style: tmp.aboutTextContainer, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-overlay-light", children: aboutText }) };
  items[1] = hasOwnProperty(View, obj5);
  items1 = [metroRequire(View, obj3), ];
  const obj6 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.helpdeskText, children: intl.format(_modDef3288.ah1Ecm, obj7) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  obj7 = { helpCenterLink: HELP_CENTER_LINK };
  items1[1] = hasOwnProperty(Text, obj6);
  return hasOwnProperty(BottomSheet, obj);
};
