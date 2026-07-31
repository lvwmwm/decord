// Module ID: 9949
// Function ID: 9950
// Name: showForLaterModal
// Dependencies: [4399, 9950, 1959, 2]
// Exports: showForLaterModal

// Module 9949 (showForLaterModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  let obj = importDefault(4399);
  obj = { type: BOOKMARK };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(9950, dependencyMap.paths), obj, "for-later-modal", { presentation: "modal" });
};
