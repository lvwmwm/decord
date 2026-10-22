// Module ID: 13741
// Function ID: 13742
// Name: showForLaterModal
// Dependencies: [10048, 13742, 6658, 13743, 2002, 2]
// Exports: showForLaterModal

// Module 13741 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6658 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10048 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13742 */;
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
  obj2.pushLazy(asyncRequire(13743, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
