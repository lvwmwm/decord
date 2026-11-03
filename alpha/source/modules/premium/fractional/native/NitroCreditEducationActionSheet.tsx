// Module ID: 15546
// Function ID: 15547
// Name: NitroCreditEducationActionSheet
// Dependencies: [17, 1072, 21, 5141, 575, 5395, 7212, 5747, 1113, 2190, 2]
// Exports: default

// Module 15546 (NitroCreditEducationActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2190 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5395 */;
import Text_Text from "Text/Text" /* 5747 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7212 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { marginTop: 32, marginHorizontal: 30 }, aboutContainer: obj2, warningIcon: { margin: 16 }, aboutTextContainer: { justifyContent: "center", flex: 1, marginRight: 30 }, helpdeskText: { textAlign: "center", marginBottom: 24 } };
obj2 = { flexDirection: "row", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", borderRadius: nativeDefault.radii.lg, marginBottom: 12 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/fractional/native/NitroCreditEducationActionSheet.tsx");

export default function NitroCreditEducationActionSheet(aboutText) {
  let bg3jBj;
  let format;
  let items;
  let items1;
  let obj2;
  let obj7;
  let obj8;
  aboutText = aboutText.aboutText;
  const tmp = closure_7();
  const obj = { children: metroRequire(View, obj2) };
  obj2 = { style: tmp.container, children: items1 };
  const obj3 = { style: tmp.aboutContainer, children: items };
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
  items = [, ];
  const obj4 = { size: "lg", style: tmp.warningIcon };
  items[0] = hasOwnProperty(CircleErrorIcon.CircleErrorIcon, obj4);
  const obj5 = { style: tmp.aboutTextContainer, children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-overlay-light", children: aboutText }) };
  items[1] = hasOwnProperty(View, obj5);
  items1 = [metroRequire(View, obj3), ];
  const obj6 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.helpdeskText, children: format(bg3jBj, obj7) };
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  format = intl.format;
  obj7 = { helpCenterLink: obj8.getArticleURL(HelpdeskArticles.FRACTIONAL_PREMIUM_ABOUT) };
  bg3jBj = intl2.t.bg3jBj;
  obj8 = HelpdeskUtilsDefault;
  items1[1] = hasOwnProperty(Text, obj6);
  return hasOwnProperty(BottomSheet, obj);
};
