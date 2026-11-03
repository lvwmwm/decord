// Module ID: 11287
// Function ID: 11288
// Name: showForLaterModal
// Dependencies: [10322, 11288, 6864, 11289, 2123, 2]
// Exports: showForLaterModal

// Module 11287 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10322 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11288 */;
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
  obj2.pushLazy(asyncRequire(11289, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
