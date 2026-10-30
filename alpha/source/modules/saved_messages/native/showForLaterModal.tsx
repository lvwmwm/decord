// Module ID: 11131
// Function ID: 11132
// Name: showForLaterModal
// Dependencies: [10172, 11132, 6738, 11133, 1995, 2]
// Exports: showForLaterModal

// Module 11131 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10172 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11132 */;
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
  obj2.pushLazy(asyncRequire(11133, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
