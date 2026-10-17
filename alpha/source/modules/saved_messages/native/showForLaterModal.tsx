// Module ID: 13582
// Function ID: 13583
// Name: showForLaterModal
// Dependencies: [9981, 13583, 6190, 13584, 2002, 2]
// Exports: showForLaterModal

// Module 13582 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9981 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13583 */;
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
  obj2.pushLazy(asyncRequire(13584, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
