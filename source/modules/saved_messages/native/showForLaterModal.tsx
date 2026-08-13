// Module ID: 8427
// Function ID: 8428
// Name: showForLaterModal
// Dependencies: [8428, 8429, 4550, 8430, 2007, 2]
// Exports: showForLaterModal

// Module 8427 (showForLaterModal)
const result = require("module_4550").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === require(8428) /* SavedMessageSortTypes */.SavedMessageSortTypes.REMINDER) {
    tmp(8429).markRemindersSeen();
    const tmpResult = tmp(8429);
  }
  importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(8430, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
