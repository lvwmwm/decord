// Module ID: 13705
// Function ID: 13706
// Name: showForLaterModal
// Dependencies: [10036, 13706, 6651, 13707, 2002, 2]
// Exports: showForLaterModal

// Module 13705 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10036 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13706 */;
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
  obj2.pushLazy(asyncRequire(13707, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
