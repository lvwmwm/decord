// Module ID: 11713
// Function ID: 11714
// Name: showForLaterModal
// Dependencies: [11714, 11715, 6130, 11716, 2120, 2]
// Exports: showForLaterModal

// Module 11713 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 11714 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11715 */;
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
  obj2.pushLazy(asyncRequire(11716, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
