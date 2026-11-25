// Module ID: 11684
// Function ID: 11685
// Name: showForLaterModal
// Dependencies: [11685, 11686, 6429, 11687, 2119, 2]
// Exports: showForLaterModal

// Module 11684 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 11685 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11686 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export function showForLaterModal(BOOKMARK) {
  const tmp2 = dependencyMap;
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    const tmpResult = MessageRemindersSeenStorage;
    tmpResult.markRemindersSeen();
  }
  const obj = { type: BOOKMARK };
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(11687, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
