// Module ID: 11721
// Function ID: 11722
// Name: showForLaterModal
// Dependencies: [11722, 11723, 6130, 11724, 2120, 2]
// Exports: showForLaterModal

// Module 11721 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 11722 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11723 */;
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
  obj2.pushLazy(asyncRequire(11724, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
