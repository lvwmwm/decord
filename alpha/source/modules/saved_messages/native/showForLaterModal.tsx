// Module ID: 13755
// Function ID: 13756
// Name: showForLaterModal
// Dependencies: [10055, 13756, 6657, 13757, 2002, 2]
// Exports: showForLaterModal

// Module 13755 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10055 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13756 */;
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
  obj2.pushLazy(asyncRequire(13757, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
