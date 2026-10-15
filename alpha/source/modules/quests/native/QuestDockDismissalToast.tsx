// Module ID: 16031
// Function ID: 16032
// Name: QuestDockDismissalToast
// Dependencies: [4865, 1126, 5105, 2]
// Exports: displayQuestDismissalToast

// Module 16031 (QuestDockDismissalToast)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4865 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5105 */;
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
