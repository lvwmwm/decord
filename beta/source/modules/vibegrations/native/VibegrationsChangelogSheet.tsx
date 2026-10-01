// Module ID: 16266
// Function ID: 16267
// Name: VibegrationsChangelogSheet
// Dependencies: [19, 17, 21, 4836, 576, 1613, 16265, 6618, 6570, 1115, 3715, 6045, 4832, 4512, 4421, 2]
// Exports: default

// Module 16266 (VibegrationsChangelogSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import _modDef3715 from "module_3715" /* 3715 */;
import _modDef4421 from "module_4421" /* 4421 */;
import DateUtils from "DateUtils" /* 4512 */;
import Text_Text from "Text/Text" /* 4832 */;
import VibegrationsChangelog from "VibegrationsChangelog" /* 16265 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { entries: obj2, entry: obj3 };
obj2 = { gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsChangelogSheet.tsx");

export default function VibegrationsChangelogSheet() {
  let BottomSheetScrollView;
  let BottomSheetTitleHeader;
  let entry;
  let intl;
  let items;
  let obj3;
  let obj4;
  const tmp = closure_6();
  _require = tmp;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = require("VibegrationsChangelog");
  const result = obj.allVibegrationsChangelog("mobile");
  let obj2 = { scrollable: true, header: closure_4(BottomSheetTitleHeader, obj3), children: closure_4(BottomSheetScrollView, obj4) };
  const ActionSheet = require("ActionSheet").ActionSheet;
  obj3 = { title: intl.string(_modDef3715.x07mpp) };
  BottomSheetTitleHeader = require("BottomSheetTitleHeader").BottomSheetTitleHeader;
  intl = require("intl").intl;
  obj4 = {
    contentContainerStyle: items,
    scrollIndicatorInsets: { bottom },
    children: result.map((children) => {
      let items1;
      const obj = { style: entry.entry, children: items1 };
      const Text = Text_Text.Text;
      const items = [, ];
      const obj2 = DateUtils;
      items[0] = obj2.dateFormat(_modDef4421(children.date, "YYYY-MM-DD"), "LL");
      let combined = null;
      const obj3 = VibegrationsChangelog;
      const tmp2 = View;
      if (obj3.isVibegrationsChangelogEntryExclusive(children)) {
        const intl = tmp3(1115).intl;
        const _HermesInternal = HermesInternal;
        combined = " \u00B7 " + intl.string(_modDef3715["CLX+p/"]);
      }
      items[1] = combined;
      items1 = [hasOwnProperty(Text, { variant: "text-xs/bold", color: "text-muted", children: items }), ];
      const obj4 = { variant: "text-sm/normal", color: "text-subtle", children: children.summary };
      items1[1] = React3(Text_Text.Text, obj4);
      return hasOwnProperty(tmp2, obj, "" + children.date + "-" + children.summary);
    })
  };
  items = [tmp.entries, ];
  const obj5 = { paddingBottom: nativeDefault.space.PX_16 + bottom };
  BottomSheetScrollView = require("BottomSheetModal").BottomSheetScrollView;
  items[1] = obj5;
  return closure_4(ActionSheet, obj2);
};
export const VIBEGRATIONS_CHANGELOG_SHEET_KEY = "VibegrationsChangelogSheet";
