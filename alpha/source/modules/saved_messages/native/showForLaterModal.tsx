// Module ID: 11639
// Function ID: 11640
// Name: showForLaterModal
// Dependencies: [11640, 11641, 6337, 11642, 2121, 2]
// Exports: showForLaterModal

// Module 11639 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 11640 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11641 */;
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
  obj2.pushLazy(asyncRequire(11642, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
