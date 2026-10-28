// Module ID: 16720
// Function ID: 16721
// Name: QuestDockDismissalToast
// Dependencies: [5699, 1125, 5722, 2]
// Exports: displayQuestDismissalToast

// Module 16720 (QuestDockDismissalToast)
import intl2 from "intl" /* 1125 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5699 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5722 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/QuestDockDismissalToast.tsx");

export const displayQuestDismissalToast = function displayQuestDismissalToast() {
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
};
