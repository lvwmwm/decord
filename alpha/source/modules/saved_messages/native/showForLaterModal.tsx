// Module ID: 8190
// Function ID: 8191
// Name: showForLaterModal
// Dependencies: [8191, 8192, 5032, 8193, 1980, 2]
// Exports: showForLaterModal

// Module 8190 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 8191 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(8192).markRemindersSeen();
    const tmpResult = tmp(8192);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8193, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
