// Module ID: 11844
// Function ID: 11845
// Name: showForLaterModal
// Dependencies: [11845, 11846, 6785, 11847, 2118, 2]
// Exports: showForLaterModal

// Module 11844 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 11845 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11846 */;
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
  obj2.pushLazy(asyncRequire(11847, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
