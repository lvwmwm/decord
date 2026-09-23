// Module ID: 8188
// Function ID: 8189
// Name: showForLaterModal
// Dependencies: [8189, 8190, 5030, 8191, 1980, 2]
// Exports: showForLaterModal

// Module 8188 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5030 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 8189 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(8190).markRemindersSeen();
    const tmpResult = tmp(8190);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8191, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
