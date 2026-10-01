// Module ID: 16301
// Function ID: 16302
// Name: VibegrationsPublishBlockedSheet
// Dependencies: [19, 17, 21, 4836, 576, 16302, 6618, 6570, 1115, 3715, 4832, 5281, 4800, 2]
// Exports: default

// Module 16301 (VibegrationsPublishBlockedSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4800 */;
import BottomSheetTitleHeader2 from "BottomSheetTitleHeader" /* 6570 */;
import ActionSheet2 from "ActionSheet" /* 6618 */;
import vibegrationsPublishBlockedReason from "vibegrationsPublishBlockedReason" /* 16302 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

let closure_4;
let hasOwnProperty;
let obj2;
function VibegrationsPublishBlockedSheet(reason) {
  let BddRzS;
  let Rtlv25;
  let items;
  let obj2;
  let obj3;
  let tmp10;
  let tmp11;
  let tmp9;
  reason = reason.reason;
  const tmp = closure_7();
  const tmp4 = reason === vibegrationsPublishBlockedReason.VibegrationsPublishBlockedReason.PERMISSIONS;
  const ActionSheet = ActionSheet2.ActionSheet;
  const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
  const intl = intl4.intl;
  const string = intl.string;
  const tmp7 = _modDef3715;
  if (tmp4) {
    Rtlv25 = tmp7.Rtlv25;
    tmp9 = tmp6;
  } else {
    Rtlv25 = tmp7["+UouPe"];
    tmp9 = tmp6;
  }
  let obj = { header: React3(BottomSheetTitleHeader, obj2), children: tmp10(tmp11, obj3) };
  obj2 = { title: string(Rtlv25) };
  obj3 = { style: tmp.content, children: items };
  const Text = tmp2(4832).Text;
  const intl2 = tmp2(1115).intl;
  const string2 = intl2.string;
  const tmp9Result = tmp9(3715);
  items = [, ];
  const obj4 = { variant: "text-md/normal", color: "text-muted", children: string2(tmp4 ? tmp9Result["nDQB/b"] : tmp9Result["E0QD++"]) };
  items[0] = React3(Text, obj4);
  const Button = tmp2(5281).Button;
  const intl3 = tmp2(1115).intl;
  const string3 = intl3.string;
  tmp10 = hasOwnProperty;
  tmp11 = View;
  if (tmp4) {
    BddRzS = tmp2(1115).t.BddRzS;
  } else {
    BddRzS = tmp9(3715)["+Zh4FA"];
  }
  const obj5 = {
    variant: "primary",
    text: string3(BddRzS),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet(VibegrationsPublishBlockedSheet_str);
    }
  };
  items[1] = React3(Button, obj5);
  return React3(ActionSheet, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const VibegrationsPublishBlockedSheet_str = "VibegrationsPublishBlockedSheet";
let obj = { content: obj2 };
obj2 = { gap: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsPublishBlockedSheet.tsx");

export default function showVibegrationsPublishBlockedSheet(reason) {
  let obj2;
  const obj = { key: VibegrationsPublishBlockedSheet_str, content: React3(VibegrationsPublishBlockedSheet, obj2) };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj2 = { reason };
  ActionSheetActionCreators;
  showActionSheet(obj);
};
export const VIBEGRATIONS_PUBLISH_BLOCKED_SHEET_KEY = "VibegrationsPublishBlockedSheet";
