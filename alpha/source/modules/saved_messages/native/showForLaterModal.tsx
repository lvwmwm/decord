// Module ID: 7279
// Function ID: 7280
// Name: showForLaterModal
// Dependencies: [7280, 7281, 5032, 7282, 1980, 2]
// Exports: showForLaterModal

// Module 7279 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7280 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7281).markRemindersSeen();
    const tmpResult = tmp(7281);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7282, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
