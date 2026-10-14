// Module ID: 13186
// Function ID: 13187
// Name: showForLaterModal
// Dependencies: [9692, 13187, 5939, 13188, 2000, 2]
// Exports: showForLaterModal

// Module 13186 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5939 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9692 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13187 */;
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
  obj2.pushLazy(asyncRequire(13188, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
