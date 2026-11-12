// Module ID: 11838
// Function ID: 11839
// Name: showForLaterModal
// Dependencies: [11839, 11840, 6785, 11841, 2118, 2]
// Exports: showForLaterModal

// Module 11838 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 11839 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11840 */;
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
  obj2.pushLazy(asyncRequire(11841, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
