// Module ID: 11617
// Function ID: 11618
// Name: showForLaterModal
// Dependencies: [11618, 11619, 6308, 11620, 2121, 2]
// Exports: showForLaterModal

// Module 11617 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 11618 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11619 */;
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
  obj2.pushLazy(asyncRequire(11620, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
