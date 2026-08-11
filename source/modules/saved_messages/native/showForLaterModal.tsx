// Module ID: 8384
// Function ID: 8385
// Name: showForLaterModal
// Dependencies: [8385, 8386, 4509, 8387, 2007, 2]
// Exports: showForLaterModal

// Module 8384 (showForLaterModal)
const result = require("module_4509").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === require(8385) /* SavedMessageSortTypes */.SavedMessageSortTypes.REMINDER) {
    tmp(8386).markRemindersSeen();
    const tmpResult = tmp(8386);
  }
  importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(8387, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
