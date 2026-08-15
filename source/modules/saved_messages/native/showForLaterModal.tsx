// Module ID: 8488
// Function ID: 8489
// Name: showForLaterModal
// Dependencies: [8489, 8490, 5260, 8491, 2007, 2]
// Exports: showForLaterModal

// Module 8488 (showForLaterModal)
const result = require("module_5260").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === require(8489) /* SavedMessageSortTypes */.SavedMessageSortTypes.REMINDER) {
    tmp(8490).markRemindersSeen();
    const tmpResult = tmp(8490);
  }
  importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(8491, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
