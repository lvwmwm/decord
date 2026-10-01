// Module ID: 16466
// Function ID: 16467
// Name: VibegrationsPublishBlockedSheet
// Dependencies: [19, 17, 21, 4845, 576, 16467, 6804, 6756, 1115, 3714, 4841, 5465, 4809, 2]
// Exports: default

// Module 16466 (VibegrationsPublishBlockedSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3714 from "module_3714" /* 3714 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4809 */;
import Text_Text from "Text/Text" /* 4841 */;
import components_Button_Button from "components/Button/Button" /* 5465 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6756 */;
import ActionSheet from "ActionSheet" /* 6804 */;
import vibegrationsPublishBlockedReason from "vibegrationsPublishBlockedReason" /* 16467 */;
import noop from "module_19" /* 19 */;

const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;

require = fn;
function VibegrationsPublishBlockedSheet(reason) {
  const tmp4 = reason.reason === vibegrationsPublishBlockedReason.VibegrationsPublishBlockedReason.PERMISSIONS;
  const intl = util.intl;
  const tmp7 = _modDef3714;
  if (tmp4) {
    let Rtlv25 = tmp7.Rtlv25;
    let tmp9 = tmp6;
  } else {
    Rtlv25 = tmp7["+UouPe"];
    tmp9 = tmp6;
  }
  const obj = { header: null, children: null };
  const tmp = closure_7();
  obj.header = React4(BottomSheetTitleHeader.BottomSheetTitleHeader, { title: intl.string(Rtlv25) });
  const obj3 = { style: tmp.content, children: null };
  const intl2 = tmp2(1115).intl;
  const tmp9Result = tmp9(3714);
  const obj2 = { title: intl.string(Rtlv25) };
  const tmp10 = hasOwnProperty;
  const tmp11 = View;
  const items = [React4(Text_Text.Text, { variant: "text-md/normal", color: "text-muted", children: intl2.string(tmp4 ? tmp9Result["nDQB/b"] : tmp9Result["E0QD++"]) }), ];
  const intl3 = tmp2(1115).intl;
  if (tmp4) {
    let BddRzS = tmp2(1115).t.BddRzS;
  } else {
    BddRzS = tmp9(3714)["+Zh4FA"];
  }
  const obj4 = { variant: "text-md/normal", color: "text-muted", children: intl2.string(tmp4 ? tmp9Result["nDQB/b"] : tmp9Result["E0QD++"]) };
  items[1] = React4(components_Button_Button.Button, {
    variant: "primary",
    text: intl3.string(BddRzS),
    onPress() {
      return ActionSheetActionCreatorsDefault.hideActionSheet(VibegrationsPublishBlockedSheet);
    }
  });
  obj3.children = items;
  obj.children = tmp10(tmp11, obj3);
  return React4(ActionSheet.ActionSheet, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
VibegrationsPublishBlockedSheet = "VibegrationsPublishBlockedSheet";
const createStyles = fn(4845);
let obj2 = { content: { gap: nativeDefault.space.PX_16 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsPublishBlockedSheet.tsx");

export default function showVibegrationsPublishBlockedSheet(reason) {
  const obj2 = { key: VibegrationsPublishBlockedSheet, content: React4(VibegrationsPublishBlockedSheet, { reason }) };
  ActionSheetActionCreators.showActionSheet(obj2);
};
export const VIBEGRATIONS_PUBLISH_BLOCKED_SHEET_KEY = "VibegrationsPublishBlockedSheet";
