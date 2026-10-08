// Module ID: 12656
// Function ID: 12657
// Name: showForLaterModal
// Dependencies: [9633, 12657, 5940, 12658, 1999, 2]
// Exports: showForLaterModal

// Module 12656 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9633 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 12657 */;
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
  obj2.pushLazy(asyncRequire(12658, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
