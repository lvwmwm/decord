// Module ID: 8162
// Function ID: 8163
// Name: showForLaterModal
// Dependencies: [4460, 8163, 1959, 2]
// Exports: showForLaterModal

// Module 8162 (showForLaterModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  let obj = importDefault(4460);
  obj = { type: BOOKMARK };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(8163, dependencyMap.paths), obj, "for-later-modal", { presentation: "modal" });
};
