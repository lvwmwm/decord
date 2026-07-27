// Module ID: 9874
// Function ID: 76502
// Name: showForLaterModal
// Dependencies: [4338, 9875, 1935, 2]
// Exports: showForLaterModal

// Module 9874 (showForLaterModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/saved_messages/native/showForLaterModal.tsx");

export const showForLaterModal = function showForLaterModal(BOOKMARK) {
  let obj = importDefault(4338);
  obj = { type: BOOKMARK };
  obj = { presentation: "modal" };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(9875, dependencyMap.paths), obj, "for-later-modal", obj);
};
