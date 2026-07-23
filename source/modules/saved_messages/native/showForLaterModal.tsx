// Module ID: 9914
// Function ID: 76692
// Name: showForLaterModal
// Dependencies: [4337, 9915, 1934, 2]
// Exports: showForLaterModal

// Module 9914 (showForLaterModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  let obj = importDefault(4337);
  obj = { type: BOOKMARK };
  obj = { presentation: "modal" };
  obj.pushLazy(require(1934) /* maybeLoadBundle */(9915, dependencyMap.paths), obj, "for-later-modal", obj);
};
