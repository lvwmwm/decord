// Module ID: 11282
// Function ID: 11283
// Name: showForLaterModal
// Dependencies: [10311, 11283, 6799, 11284, 2118, 2]
// Exports: showForLaterModal

// Module 11282 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10311 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11283 */;
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
  obj2.pushLazy(asyncRequire(11284, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
