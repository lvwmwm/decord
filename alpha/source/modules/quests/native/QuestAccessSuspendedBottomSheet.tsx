// Module ID: 17344
// Function ID: 17345
// Name: QuestAccessSuspendedBottomSheet
// Dependencies: [19, 21, 5382, 17343, 13569, 11015, 1113, 5768, 2]
// Exports: default

// Module 17344 (QuestAccessSuspendedBottomSheet)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1113 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import components_Button_Button from "components/Button/Button" /* 5768 */;
import PromoSheet2 from "PromoSheet" /* 11015 */;
import openAccountStanding from "openAccountStanding" /* 13569 */;
import openQuestAccessSuspendedBottomSheet from "openQuestAccessSuspendedBottomSheet" /* 17343 */;
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
