// Module ID: 8423
// Function ID: 8424
// Name: showForLaterModal
// Dependencies: [8424, 8425, 4549, 8426, 2007, 2]
// Exports: showForLaterModal

// Module 8423 (showForLaterModal)
const result = require("module_4549").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  if (BOOKMARK === require(8424) /* SavedMessageSortTypes */.SavedMessageSortTypes.REMINDER) {
    tmp(8425).markRemindersSeen();
    const tmpResult = tmp(8425);
  }
  importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(8426, dependencyMap.paths), { type: BOOKMARK }, "for-later-modal", { presentation: "modal" });
};
