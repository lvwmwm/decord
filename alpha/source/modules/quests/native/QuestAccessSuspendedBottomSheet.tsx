// Module ID: 15394
// Function ID: 15395
// Name: QuestAccessSuspendedBottomSheet
// Dependencies: [19, 21, 4724, 15393, 12168, 10494, 1115, 5187, 2]
// Exports: default

// Module 15394 (QuestAccessSuspendedBottomSheet)
import util from "util" /* 1115 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import components_Button_Button from "components/Button/Button" /* 5187 */;
import PromoSheet from "PromoSheet" /* 10494 */;
import openAccountStanding from "openAccountStanding" /* 12168 */;
import openQuestAccessSuspendedBottomSheet from "openQuestAccessSuspendedBottomSheet" /* 15393 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestAccessSuspendedBottomSheet.tsx");

export default function QuestAccessSuspendedBottomSheet() {
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideActionSheet(openQuestAccessSuspendedBottomSheet.ACTION_SHEET_KEY);
    openAccountStanding.openAccountStanding();
  }, []);
  let obj = { title: null, description: null, actions: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.WfwodX);
  const intl2 = util.intl;
  obj.description = intl2.string(util.t.I27WXW);
  const obj2 = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = util.intl;
  obj2.text = intl3.string(util.t.hvVgAZ);
  obj2.onPress = callback;
  obj.actions = jsx(components_Button_Button.Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
  return jsx(PromoSheet.PromoSheet, { title: null, description: null, actions: null });
};
