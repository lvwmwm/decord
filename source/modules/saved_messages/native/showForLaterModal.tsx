// Module ID: 8449
// Function ID: 8450
// Name: showForLaterModal
// Dependencies: [8450, 8451, 4572, 8452, 2007, 2]
// Exports: showForLaterModal

// Module 8449 (showForLaterModal)
const result = require("module_4572").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === require(8450) /* SavedMessageSortTypes */.SavedMessageSortTypes.REMINDER) {
    tmp(8451).markRemindersSeen();
    const tmpResult = tmp(8451);
  }
  importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(8452, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
