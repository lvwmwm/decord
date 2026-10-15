// Module ID: 13482
// Function ID: 13483
// Name: showForLaterModal
// Dependencies: [9900, 13483, 6150, 13484, 2000, 2]
// Exports: showForLaterModal

// Module 13482 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9900 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13483 */;
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
  obj2.pushLazy(asyncRequire(13484, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
