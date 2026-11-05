// Module ID: 11345
// Function ID: 11346
// Name: showForLaterModal
// Dependencies: [10376, 11346, 6882, 11347, 2123, 2]
// Exports: showForLaterModal

// Module 11345 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10376 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11346 */;
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
  obj2.pushLazy(asyncRequire(11347, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
