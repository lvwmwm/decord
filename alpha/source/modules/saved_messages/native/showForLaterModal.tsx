// Module ID: 13151
// Function ID: 13152
// Name: showForLaterModal
// Dependencies: [9682, 13152, 5934, 13153, 2000, 2]
// Exports: showForLaterModal

// Module 13151 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 9682 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13152 */;
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
  obj2.pushLazy(asyncRequire(13153, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
