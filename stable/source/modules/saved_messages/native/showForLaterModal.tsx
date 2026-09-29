// Module ID: 8135
// Function ID: 8136
// Name: showForLaterModal
// Dependencies: [8136, 8137, 4991, 8138, 1980, 2]
// Exports: showForLaterModal

// Module 8135 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 8136 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(8137).markRemindersSeen();
    const tmpResult = tmp(8137);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8138, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
