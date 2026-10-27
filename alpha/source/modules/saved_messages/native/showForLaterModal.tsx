// Module ID: 13818
// Function ID: 13819
// Name: showForLaterModal
// Dependencies: [10080, 13819, 6673, 13820, 1999, 2]
// Exports: showForLaterModal

// Module 13818 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10080 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13819 */;
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
  obj2.pushLazy(asyncRequire(13820, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
