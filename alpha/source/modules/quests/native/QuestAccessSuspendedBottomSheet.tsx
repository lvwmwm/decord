// Module ID: 16382
// Function ID: 16383
// Name: QuestAccessSuspendedBottomSheet
// Dependencies: [19, 21, 5008, 16381, 12330, 11105, 1112, 5392, 2]
// Exports: default

// Module 16382 (QuestAccessSuspendedBottomSheet)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1112 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import components_Button_Button from "components/Button/Button" /* 5392 */;
import PromoSheet2 from "PromoSheet" /* 11105 */;
import openAccountStanding from "openAccountStanding" /* 12330 */;
import openQuestAccessSuspendedBottomSheet from "openQuestAccessSuspendedBottomSheet" /* 16381 */;
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
