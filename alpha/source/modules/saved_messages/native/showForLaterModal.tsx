// Module ID: 12357
// Function ID: 12358
// Name: showForLaterModal
// Dependencies: [12358, 12359, 6833, 12360, 2121, 2]
// Exports: showForLaterModal

// Module 12357 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 12358 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 12359 */;
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
  obj2.pushLazy(asyncRequire(12360, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
