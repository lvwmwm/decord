// Module ID: 17012
// Function ID: 17013
// Name: QuestDockDismissalToast
// Dependencies: [5707, 1114, 5730, 2]
// Exports: displayQuestDismissalToast

// Module 17012 (QuestDockDismissalToast)
import intl2 from "intl" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5707 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5730 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/QuestDockDismissalToast.tsx");

export function displayQuestDismissalToast() {
  let intl;
  let obj2;
  const obj = { text: intl.formatToPlainString(intl2.t.dYE1px, obj2), icon: CircleInformationIcon.CircleInformationIcon, position: "bottom" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  obj2 = {
    arrowHook() {
      return "\u2192";
    }
  };
  open("QUEST_BAR_DISMISS_TOAST", obj);
}
