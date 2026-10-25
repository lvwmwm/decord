// Module ID: 13803
// Function ID: 13804
// Name: showForLaterModal
// Dependencies: [10078, 13804, 6672, 13805, 2002, 2]
// Exports: showForLaterModal

// Module 13803 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10078 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13804 */;
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
  obj2.pushLazy(asyncRequire(13805, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
