// Module ID: 11559
// Function ID: 11560
// Name: showForLaterModal
// Dependencies: [11560, 11561, 6310, 11562, 2119, 2]
// Exports: showForLaterModal

// Module 11559 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 11560 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11561 */;
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
  obj2.pushLazy(asyncRequire(11562, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
