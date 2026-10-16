// Module ID: 12645
// Function ID: 12646
// Name: showForLaterModal
// Dependencies: [9677, 12646, 5934, 12647, 2000, 2]
// Exports: showForLaterModal

// Module 12645 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9677 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 12646 */;
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
  obj2.pushLazy(asyncRequire(12647, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
