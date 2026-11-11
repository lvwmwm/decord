// Module ID: 14983
// Function ID: 14984
// Name: HubEmailConnectionDescriptionActionsheet
// Dependencies: [19, 17, 21, 5243, 575, 5503, 7847, 1113, 5866, 2]
// Exports: default

// Module 14983 (HubEmailConnectionDescriptionActionsheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5503 */;
import Text_Text from "Text/Text" /* 5866 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7847 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { content: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionDescriptionActionsheet.tsx");

export default function HubEmailConnectionDescriptionActionsheet() {
  let BottomSheetTitleHeader;
  let intl;
  let intl2;
  let intl3;
  let items;
  let obj2;
  let obj3;
  const obj = { header: _false(BottomSheetTitleHeader, obj2), children: React3(View, obj3) };
  const tmp = closure_5();
  const BottomSheet = Sheet_BottomSheet.BottomSheet;
  obj2 = { title: intl.string(intl4.t["48kg+O"]) };
  BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl4.intl;
  obj3 = { style: tmp.content, children: items };
  const obj4 = { variant: "body-md/normal", color: "text-default", children: intl2.string(intl4.t.O1k9XX) };
  const Text = Text_Text.Text;
  intl2 = intl4.intl;
  items = [_false(Text, obj4), ];
  const obj5 = { variant: "body-md/normal", color: "text-default", children: intl3.string(intl4.t.FV5dvh) };
  const Text2 = Text_Text.Text;
  intl3 = intl4.intl;
  items[1] = _false(Text2, obj5);
  return _false(BottomSheet, obj);
};
