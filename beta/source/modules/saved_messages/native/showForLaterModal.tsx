// Module ID: 8103
// Function ID: 8104
// Name: showForLaterModal
// Dependencies: [8104, 8105, 4959, 8106, 1980, 2]
// Exports: showForLaterModal

// Module 8103 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 8104 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(8105).markRemindersSeen();
    const tmpResult = tmp(8105);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8106, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
