// Module ID: 11291
// Function ID: 11292
// Name: showForLaterModal
// Dependencies: [10317, 11292, 6801, 11293, 2118, 2]
// Exports: showForLaterModal

// Module 11291 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6801 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10317 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11292 */;
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
  obj2.pushLazy(asyncRequire(11293, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
