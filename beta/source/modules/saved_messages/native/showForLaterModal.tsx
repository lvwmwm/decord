// Module ID: 13581
// Function ID: 13582
// Name: showForLaterModal
// Dependencies: [9981, 13582, 6190, 13583, 2002, 2]
// Exports: showForLaterModal

// Module 13581 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9981 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13582 */;
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
  obj2.pushLazy(asyncRequire(13583, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
