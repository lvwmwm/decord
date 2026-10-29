// Module ID: 14269
// Function ID: 14270
// Name: showForLaterModal
// Dependencies: [10145, 14270, 6731, 14271, 2000, 2]
// Exports: showForLaterModal

// Module 14269 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10145 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 14270 */;
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
  obj2.pushLazy(asyncRequire(14271, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
