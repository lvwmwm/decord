// Module ID: 15296
// Function ID: 15297
// Name: QuestDockDismissalToast
// Dependencies: [4768, 1126, 5016, 2]
// Exports: displayQuestDismissalToast

// Module 15296 (QuestDockDismissalToast)
import intl2 from "intl" /* 1126 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import AssetRegistryDefault from "AssetRegistry" /* 5016 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/native/QuestDockDismissalToast.tsx");

export const displayQuestDismissalToast = function displayQuestDismissalToast() {
  let intl;
  let obj2;
  const obj = { key: "QUEST_BAR_DISMISS_TOAST", content: intl.formatToPlainString(intl2.t.dYE1px, obj2), icon: AssetRegistryDefault, position: "bottom" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  obj2 = {
    arrowHook() {
      return "\u2192";
    }
  };
  open(obj);
};
