// Module ID: 11314
// Function ID: 11315
// Name: showForLaterModal
// Dependencies: [10343, 11315, 6831, 11316, 2118, 2]
// Exports: showForLaterModal

// Module 11314 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10343 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 11315 */;
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
  obj2.pushLazy(asyncRequire(11316, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
}
