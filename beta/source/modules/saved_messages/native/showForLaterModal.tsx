// Module ID: 7284
// Function ID: 7285
// Name: showForLaterModal
// Dependencies: [7285, 7286, 5039, 7287, 1981, 2]
// Exports: showForLaterModal

// Module 7284 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7285 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 7286 */;
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
  obj2.pushLazy(asyncRequire(7287, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
