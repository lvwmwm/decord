// Module ID: 9932
// Function ID: 9933
// Name: showForLaterModal
// Dependencies: [4395, 9933, 1959, 2]
// Exports: showForLaterModal

// Module 9932 (showForLaterModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  let obj = importDefault(4395);
  obj = { type: BOOKMARK };
  obj.pushLazy(require(1959) /* asyncRequireImpl */(9933, dependencyMap.paths), obj, "for-later-modal", { presentation: "modal" });
};
