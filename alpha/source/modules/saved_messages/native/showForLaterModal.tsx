// Module ID: 11300
// Function ID: 11301
// Name: showForLaterModal
// Dependencies: [10328, 11301, 6824, 11302, 2118, 2]
// Exports: showForLaterModal

// Module 11300 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10328 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11301 */;
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
  obj2.pushLazy(asyncRequire(11302, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
