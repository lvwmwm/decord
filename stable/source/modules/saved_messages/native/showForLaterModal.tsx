// Module ID: 7962
// Function ID: 7963
// Name: showForLaterModal
// Dependencies: [7963, 7964, 4839, 7965, 1896, 2]
// Exports: showForLaterModal

// Module 7962 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7963 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7964).markRemindersSeen();
    const tmpResult = tmp(7964);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7965, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
