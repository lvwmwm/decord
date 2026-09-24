// Module ID: 8140
// Function ID: 8141
// Name: showForLaterModal
// Dependencies: [8141, 8142, 4993, 8143, 1984, 2]
// Exports: showForLaterModal

// Module 8140 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 8141 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(8142).markRemindersSeen();
    const tmpResult = tmp(8142);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8143, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
