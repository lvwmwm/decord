// Module ID: 11337
// Function ID: 11338
// Name: showForLaterModal
// Dependencies: [10370, 11338, 6879, 11339, 2123, 2]
// Exports: showForLaterModal

// Module 11337 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10370 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11338 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export function showForLaterModal(BOOKMARK) {
  const tmp2 = dependencyMap;
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    const tmpResult = MessageRemindersSeenStorage;
    tmpResult.markRemindersSeen();
  }
  const obj = { type: BOOKMARK };
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(11339, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
