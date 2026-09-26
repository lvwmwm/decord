// Module ID: 7284
// Function ID: 7285
// Name: showForLaterModal
// Dependencies: [7285, 7286, 5039, 7287, 1981, 2]
// Exports: showForLaterModal

// Module 7284 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7285 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7286).markRemindersSeen();
    const tmpResult = tmp(7286);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7287, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
