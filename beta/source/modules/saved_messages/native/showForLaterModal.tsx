// Module ID: 11679
// Function ID: 11680
// Name: showForLaterModal
// Dependencies: [11680, 11681, 6429, 11682, 2119, 2]
// Exports: showForLaterModal

// Module 11679 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 11680 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11681 */;
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
  obj2.pushLazy(asyncRequire(11682, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
