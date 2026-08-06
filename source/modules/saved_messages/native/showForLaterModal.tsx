// Module ID: 8302
// Function ID: 8303
// Name: showForLaterModal
// Dependencies: [4490, 8303, 1988, 2]
// Exports: showForLaterModal

// Module 8302 (showForLaterModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  let obj = importDefault(4490);
  obj = { type: BOOKMARK };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(8303, dependencyMap.paths), obj, "for-later-modal", { presentation: "modal" });
};
