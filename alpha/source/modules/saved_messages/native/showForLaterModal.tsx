// Module ID: 7449
// Function ID: 7450
// Name: showForLaterModal
// Dependencies: [7450, 7451, 5039, 7452, 1981, 2]
// Exports: showForLaterModal

// Module 7449 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7450 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7451).markRemindersSeen();
    const tmpResult = tmp(7451);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7452, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
