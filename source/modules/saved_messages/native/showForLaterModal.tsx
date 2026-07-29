// Module ID: 9936
// Function ID: 9937
// Name: showForLaterModal
// Dependencies: [4395, 9937, 1959, 2]
// Exports: showForLaterModal

// Module 9936 (showForLaterModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  let obj = importDefault(4395);
  obj = { type: BOOKMARK };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(9937, dependencyMap.paths), obj, "for-later-modal", { presentation: "modal" });
};
