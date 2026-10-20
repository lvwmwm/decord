// Module ID: 13638
// Function ID: 13639
// Name: showForLaterModal
// Dependencies: [10006, 13639, 6623, 13640, 2002, 2]
// Exports: showForLaterModal

// Module 13638 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10006 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13639 */;
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
  obj2.pushLazy(asyncRequire(13640, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
