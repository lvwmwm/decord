// Module ID: 16363
// Function ID: 16364
// Name: QuestDockDismissalToast
// Dependencies: [5476, 1112, 5498, 2]
// Exports: displayQuestDismissalToast

// Module 16363 (QuestDockDismissalToast)
import intl2 from "intl" /* 1112 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5476 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5498 */;
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
