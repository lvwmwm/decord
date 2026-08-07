// Module ID: 8319
// Function ID: 8320
// Name: showForLaterModal
// Dependencies: [4507, 8320, 1988, 2]
// Exports: showForLaterModal

// Module 8319 (showForLaterModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  let obj = importDefault(4507);
  obj = { type: BOOKMARK };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(8320, dependencyMap.paths), obj, "for-later-modal", { presentation: "modal" });
};
