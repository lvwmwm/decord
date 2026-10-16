// Module ID: 13516
// Function ID: 13517
// Name: showForLaterModal
// Dependencies: [9917, 13517, 6153, 13518, 2002, 2]
// Exports: showForLaterModal

// Module 13516 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6153 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9917 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13517 */;
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
  obj2.pushLazy(asyncRequire(13518, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
