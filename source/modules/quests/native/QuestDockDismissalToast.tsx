// Module ID: 14007
// Function ID: 107234
// Name: QuestDockDismissalNotification
// Dependencies: [31, 27, 33, 4130, 689, 4126, 1212, 11385, 3831, 7415, 2]
// Exports: displayQuestDismissalToast

// Module 14007 (QuestDockDismissalNotification)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
const require = arg1;
function QuestDockDismissalNotification() {
  const _require = callback();
  let obj = { color: "mobile-text-heading-primary", variant: "text-sm/semibold" };
  const intl = _require(1212).intl;
  obj = {
    arrowHook() {
      let obj = { style: closure_0.toastArrowForwardIconContainer };
      obj = { resizeMode: "contain", source: outer1_1(outer1_2[7]), style: closure_0.toastArrowForwardIcon };
      obj.children = outer1_5(outer1_3, obj);
      return outer1_5(outer1_4, obj);
    }
  };
  obj.children = intl.format(_require(1212).t.dYE1px, obj);
  return jsx(_require(4126).Text, {
    arrowHook() {
      let obj = { style: closure_0.toastArrowForwardIconContainer };
      obj = { resizeMode: "contain", source: outer1_1(outer1_2[7]), style: closure_0.toastArrowForwardIcon };
      obj.children = outer1_5(outer1_3, obj);
      return outer1_5(outer1_4, obj);
    }
  });
}
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
let closure_6 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = { toastArrowForwardIconContainer: { height: 6, width: 16 } };
  obj = { opacity: 0.35, position: "absolute", top: "50%", left: 0, height: 16, width: 16, tintColor: importDefault(689).colors.INTERACTIVE_TEXT_ACTIVE };
  const items = [{ translateY: -10 }];
  obj.transform = items;
  obj.toastArrowForwardIcon = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/QuestDockDismissalToast.tsx");

export const displayQuestDismissalToast = function displayQuestDismissalToast() {
  let obj = importDefault(3831);
  obj = { key: "QUEST_BAR_DISMISS_TOAST", content: QuestDockDismissalNotification, icon: importDefault(7415), position: "bottom" };
  obj.open(obj);
};
