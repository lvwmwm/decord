// Module ID: 15375
// Function ID: 15376
// Name: QuestAccessSuspendedBottomSheet
// Dependencies: [19, 21, 558, 568, 4725, 15374, 12040, 1119, 10613, 5188, 2]

// Module 15375 (QuestAccessSuspendedBottomSheet)
import c from "c" /* 568 */;
import util from "util" /* 1119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import components_Button_Button from "components/Button/Button" /* 5188 */;
import PromoSheet from "PromoSheet" /* 10613 */;
import openAccountStanding from "openAccountStanding" /* 12040 */;
import openQuestAccessSuspendedBottomSheet from "openQuestAccessSuspendedBottomSheet" /* 15374 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestAccessSuspendedBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      ActionSheetActionCreatorsDefault.hideActionSheet(openQuestAccessSuspendedBottomSheet.ACTION_SHEET_KEY);
      openAccountStanding.openAccountStanding();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.WfwodX);
    const intl2 = tmp(1119).intl;
    const stringResult1 = intl2.string(tmp(1119).t.I27WXW);
    cResult[1] = stringResult;
    cResult[2] = stringResult1;
    let tmp6 = stringResult1;
    let tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: tmp5, description: tmp6, actions: null };
    const obj3 = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
    const intl3 = tmp(1119).intl;
    obj3.text = intl3.string(tmp(1119).t.hvVgAZ);
    obj3.onPress = first;
    obj2.actions = jsx(tmp(5188).Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
    const tmp11 = jsx(tmp(10613).PromoSheet, { title: tmp5, description: tmp6, actions: null });
    cResult[3] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : (() => {
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
});
