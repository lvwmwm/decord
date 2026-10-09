// Module ID: 15312
// Function ID: 15313
// Name: QuestAccessSuspendedBottomSheet
// Dependencies: [19, 21, 558, 576, 5055, 15311, 11461, 1126, 10290, 5376, 2]

// Module 15312 (QuestAccessSuspendedBottomSheet)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import components_Button_Button from "components/Button/Button" /* 5376 */;
import PromoSheet2 from "PromoSheet" /* 10290 */;
import openAccountStanding from "openAccountStanding" /* 11461 */;
import openQuestAccessSuspendedBottomSheet from "openQuestAccessSuspendedBottomSheet" /* 15311 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestAccessSuspendedBottomSheet() {
  let first;
  let intl3;
  let tmp5;
  let tmp6;
  let tmp9;
  let obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(openQuestAccessSuspendedBottomSheet.ACTION_SHEET_KEY);
      const obj2 = openAccountStanding;
      obj2.openAccountStanding();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(intl4.t.WfwodX);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(intl4.t.I27WXW);
    cResult[1] = stringResult;
    cResult[2] = stringResult1;
    tmp6 = stringResult1;
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const PromoSheet = tmp(10290).PromoSheet;
    ({ grow: true, size: "lg", variant: "primary", text: intl3.string(intl4.t.hvVgAZ), onPress: first });
    const Button = tmp(5376).Button;
    intl3 = tmp(1126).intl;
    const tmp11 = <PromoSheet title={tmp5} description={tmp6} actions={null} />;
    cResult[3] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : (function QuestAccessSuspendedBottomSheet() {
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
});
const result = size.fileFinishedImporting("modules/quests/native/QuestAccessSuspendedBottomSheet.tsx");

export default tmp2;
