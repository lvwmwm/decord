// Module ID: 13620
// Function ID: 13621
// Name: showForLaterModal
// Dependencies: [9995, 13621, 6620, 13622, 2002, 2]
// Exports: showForLaterModal

// Module 13620 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6620 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9995 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13621 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  const tmp2 = dependencyMap;
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    const tmpResult = MessageRemindersSeenStorage;
    tmpResult.markRemindersSeen();
  }
  const obj = { type: BOOKMARK };
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(13622, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
