// Module ID: 7494
// Function ID: 7495
// Name: showForLaterModal
// Dependencies: [7495, 7496, 5093, 7497, 1987, 2]
// Exports: showForLaterModal

// Module 7494 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7495 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 7496 */;
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
  obj2.pushLazy(asyncRequire(7497, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
