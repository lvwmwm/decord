// Module ID: 14036
// Function ID: 14037
// Name: showForLaterModal
// Dependencies: [10112, 14037, 6707, 14038, 1999, 2]
// Exports: showForLaterModal

// Module 14036 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10112 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 14037 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  const tmp2 = dependencyMap;
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    const tmpResult = MessageRemindersSeenStorage;
    tmpResult.markRemindersSeen();
  }
  const obj = { type: BOOKMARK };
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(14038, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
