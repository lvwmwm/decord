// Module ID: 11665
// Function ID: 11666
// Name: showForLaterModal
// Dependencies: [11666, 11667, 6099, 11668, 2119, 2]
// Exports: showForLaterModal

// Module 11665 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 11666 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11667 */;
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
  obj2.pushLazy(asyncRequire(11668, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
