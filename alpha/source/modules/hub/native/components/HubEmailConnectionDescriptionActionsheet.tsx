// Module ID: 14332
// Function ID: 14333
// Name: HubEmailConnectionDescriptionActionsheet
// Dependencies: [19, 21, 5014, 5272, 7321, 1113, 5624, 2]
// Exports: default

// Module 14332 (HubEmailConnectionDescriptionActionsheet)
import intl4 from "intl" /* 1113 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5272 */;
import Text_Text from "Text/Text" /* 5624 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 7321 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
let closure_4 = createStyles.createStyles({ description: { marginBottom: 8 } });
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionDescriptionActionsheet.tsx");

export default function HubEmailConnectionDescriptionActionsheet() {
  let intl;
  let intl2;
  let intl3;
  let items;
  const tmp = closure_4();
  const obj = { children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  const obj2 = { title: intl.string(intl4.t["48kg+O"]) };
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  intl = intl4.intl;
  items = [React2(BottomSheetTitleHeader, obj2), , ];
  const obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl4.t.O1k9XX) };
  const Text = Text_Text.Text;
  intl2 = intl4.intl;
  items[1] = React2(Text, obj3);
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: intl3.string(intl4.t.FV5dvh) };
  const Text2 = Text_Text.Text;
  intl3 = intl4.intl;
  items[2] = React2(Text2, obj4);
  return _false(BottomSheet, obj);
};
