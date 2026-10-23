// Module ID: 13778
// Function ID: 13779
// Name: showForLaterModal
// Dependencies: [10077, 13779, 6670, 13780, 2002, 2]
// Exports: showForLaterModal

// Module 13778 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6670 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10077 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13779 */;
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
  obj2.pushLazy(asyncRequire(13780, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
