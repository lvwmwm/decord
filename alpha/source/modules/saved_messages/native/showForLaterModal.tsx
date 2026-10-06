// Module ID: 7505
// Function ID: 7506
// Name: showForLaterModal
// Dependencies: [7506, 7507, 5099, 7508, 1987, 2]
// Exports: showForLaterModal

// Module 7505 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7506 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 7507 */;
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
  obj2.pushLazy(asyncRequire(7508, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
