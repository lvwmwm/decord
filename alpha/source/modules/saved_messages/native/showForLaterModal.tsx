// Module ID: 7458
// Function ID: 7459
// Name: showForLaterModal
// Dependencies: [7459, 7460, 5048, 7461, 1981, 2]
// Exports: showForLaterModal

// Module 7458 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5048 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7459 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7460).markRemindersSeen();
    const tmpResult = tmp(7460);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7461, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
