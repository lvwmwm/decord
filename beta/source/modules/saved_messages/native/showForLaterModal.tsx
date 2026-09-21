// Module ID: 8108
// Function ID: 8109
// Name: showForLaterModal
// Dependencies: [8109, 8110, 4961, 8111, 1984, 2]
// Exports: showForLaterModal

// Module 8108 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 8109 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(8110).markRemindersSeen();
    const tmpResult = tmp(8110);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8111, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
