// Module ID: 13835
// Function ID: 13836
// Name: showForLaterModal
// Dependencies: [10110, 13836, 6704, 13837, 2002, 2]
// Exports: showForLaterModal

// Module 13835 (showForLaterModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6704 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 10110 */;
import MessageRemindersSeenStorage from "MessageRemindersSeenStorage" /* 13836 */;
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
  obj2.pushLazy(asyncRequire(13837, tmp2.paths), obj, "for-later-modal", { presentation: "modal" });
};
