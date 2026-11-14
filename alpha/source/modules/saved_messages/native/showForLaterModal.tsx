// Module ID: 11904
// Function ID: 11905
// Name: showForLaterModal
// Dependencies: [11905, 11906, 6848, 11907, 2121, 2]
// Exports: showForLaterModal

// Module 11904 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 11905 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11906 */;
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
  obj2.pushLazy(asyncRequire(11907, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
