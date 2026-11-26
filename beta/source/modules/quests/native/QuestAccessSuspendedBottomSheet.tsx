// Module ID: 16517
// Function ID: 16518
// Name: QuestAccessSuspendedBottomSheet
// Dependencies: [19, 21, 5127, 16516, 12455, 11230, 1112, 5511, 2]
// Exports: default

// Module 16517 (QuestAccessSuspendedBottomSheet)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1112 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import components_Button_Button from "components/Button/Button" /* 5511 */;
import PromoSheet2 from "PromoSheet" /* 11230 */;
import openAccountStanding from "openAccountStanding" /* 12455 */;
import openQuestAccessSuspendedBottomSheet from "openQuestAccessSuspendedBottomSheet" /* 16516 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/quests/native/QuestAccessSuspendedBottomSheet.tsx");

export default function QuestAccessSuspendedBottomSheet() {
  let intl3;
  const callback = react.useCallback(() => {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(openQuestAccessSuspendedBottomSheet.ACTION_SHEET_KEY);
    const obj2 = openAccountStanding;
    obj2.openAccountStanding();
  }, []);
  const PromoSheet = PromoSheet2.PromoSheet;
  const intl = intl4.intl;
  const intl2 = intl4.intl;
  let obj2 = { grow: true, size: "lg", variant: "primary", text: intl3.string(intl4.t.hvVgAZ), onPress: callback };
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  return <PromoSheet title={intl.string(intl4.t.WfwodX)} description={intl2.string(intl4.t.I27WXW)} actions={null} />;
};
