// Module ID: 13804
// Function ID: 13805
// Name: showForLaterModal
// Dependencies: [10078, 13805, 6672, 13806, 2002, 2]
// Exports: showForLaterModal

// Module 13804 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10078 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13805 */;
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
  obj2.pushLazy(asyncRequire(13806, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
