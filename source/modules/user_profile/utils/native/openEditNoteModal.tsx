// Module ID: 12025
// Function ID: 92772
// Name: openEditNoteModal
// Dependencies: [4372, 12026, 1935, 2]
// Exports: default

// Module 12025 (openEditNoteModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  let obj = importDefault(4372);
  obj = { presentation: "modal" };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(12026, dependencyMap.paths), merged, undefined, obj);
};
