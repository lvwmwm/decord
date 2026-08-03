// Module ID: 10092
// Function ID: 10093
// Name: showForLaterModal
// Dependencies: [4461, 10093, 1959, 2]
// Exports: showForLaterModal

// Module 10092 (showForLaterModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  let obj = importDefault(4461);
  obj = { type: BOOKMARK };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(10093, dependencyMap.paths), obj, "for-later-modal", { presentation: "modal" });
};
