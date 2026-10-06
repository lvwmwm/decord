// Module ID: 7288
// Function ID: 7289
// Name: showForLaterModal
// Dependencies: [7289, 7290, 5040, 7291, 1987, 2]
// Exports: showForLaterModal

// Module 7288 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7289 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 7290 */;
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
  obj2.pushLazy(asyncRequire(7291, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
