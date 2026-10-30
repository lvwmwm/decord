// Module ID: 15360
// Function ID: 15361
// Name: PremiumGroupEducationActionSheet
// Dependencies: [17, 2061, 21, 5009, 575, 5267, 7080, 5619, 1114, 3285, 2]
// Exports: default

// Module 15360 (PremiumGroupEducationActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1114 */;
import PremiumGroupConstants from "PremiumGroupConstants" /* 2061 */;
import _modDef3285 from "module_3285" /* 3285 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5267 */;
import Text_Text from "Text/Text" /* 5619 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7080 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
  const obj6 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.helpdeskText, children: intl.format(_modDef3285.ah1Ecm, obj7) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  obj7 = { helpCenterLink: HELP_CENTER_LINK };
  items1[1] = hasOwnProperty(Text, obj6);
  return hasOwnProperty(BottomSheet, obj);
};
