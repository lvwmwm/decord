// Module ID: 11150
// Function ID: 11151
// Name: showForLaterModal
// Dependencies: [10192, 11151, 6744, 11152, 1994, 2]
// Exports: showForLaterModal

// Module 11150 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10192 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11151 */;
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
  obj2.pushLazy(asyncRequire(11152, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
