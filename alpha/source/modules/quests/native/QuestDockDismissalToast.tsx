// Module ID: 15358
// Function ID: 15359
// Name: QuestDockDismissalToast
// Dependencies: [4809, 1126, 5046, 2]
// Exports: displayQuestDismissalToast

// Module 15358 (QuestDockDismissalToast)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5046 */;
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
