// Module ID: 12643
// Function ID: 12644
// Name: showForLaterModal
// Dependencies: [9681, 12644, 5934, 12645, 2000, 2]
// Exports: showForLaterModal

// Module 12643 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9681 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 12644 */;
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
  obj2.pushLazy(asyncRequire(12645, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
