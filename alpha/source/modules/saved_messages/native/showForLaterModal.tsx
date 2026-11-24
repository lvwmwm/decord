// Module ID: 11566
// Function ID: 11567
// Name: showForLaterModal
// Dependencies: [11567, 11568, 6004, 11569, 2119, 2]
// Exports: showForLaterModal

// Module 11566 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6004 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 11567 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11568 */;
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
  obj2.pushLazy(asyncRequire(11569, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
