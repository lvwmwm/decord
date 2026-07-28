// Module ID: 9914
// Function ID: 76631
// Name: showForLaterModal
// Dependencies: [4372, 9915, 1935, 2]
// Exports: showForLaterModal

// Module 9914 (showForLaterModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  let obj = importDefault(4372);
  obj = { type: BOOKMARK };
  obj = { presentation: "modal" };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(9915, dependencyMap.paths), obj, "for-later-modal", obj);
};
