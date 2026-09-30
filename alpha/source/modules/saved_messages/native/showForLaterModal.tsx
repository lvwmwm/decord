// Module ID: 7480
// Function ID: 7481
// Name: showForLaterModal
// Dependencies: [7481, 7482, 5069, 7483, 1981, 2]
// Exports: showForLaterModal

// Module 7480 (showForLaterModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import SavedMessagesTypes from "SavedMessagesTypes" /* 7481 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessagesTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7482).markRemindersSeen();
    const tmpResult = tmp(7482);
  }
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7483, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
