// Module ID: 12596
// Function ID: 12597
// Name: showForLaterModal
// Dependencies: [9652, 12597, 5941, 12598, 2000, 2]
// Exports: showForLaterModal

// Module 12596 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9652 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 12597 */;
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
  obj2.pushLazy(asyncRequire(12598, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
