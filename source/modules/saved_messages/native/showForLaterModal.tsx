// Module ID: 7791
// Function ID: 7792
// Name: showForLaterModal
// Dependencies: [7792, 7793, 4731, 7794, 2008, 2]
// Exports: showForLaterModal

// Module 7791 (showForLaterModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;
import SavedMessageSortTypes from "SavedMessageSortTypes" /* 7792 */;

const result = set.fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === SavedMessageSortTypes.SavedMessageSortTypes.REMINDER) {
    tmp(7793).markRemindersSeen();
    const tmpResult = tmp(7793);
  }
  _modDef4731.pushLazy(asyncRequireImpl(7794, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
