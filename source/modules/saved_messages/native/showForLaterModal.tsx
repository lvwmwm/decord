// Module ID: 8379
// Function ID: 8380
// Name: showForLaterModal
// Dependencies: [4509, 8380, 1988, 2]
// Exports: showForLaterModal

// Module 8379 (showForLaterModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  let obj = importDefault(4509);
  obj = { type: BOOKMARK };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(8380, dependencyMap.paths), obj, "for-later-modal", { presentation: "modal" });
};
