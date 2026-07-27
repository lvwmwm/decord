// Module ID: 11982
// Function ID: 92602
// Name: openEditNoteModal
// Dependencies: [4338, 11983, 1935, 2]
// Exports: default

// Module 11982 (openEditNoteModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  let obj = importDefault(4338);
  obj = { presentation: "modal" };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(11983, dependencyMap.paths), merged, undefined, obj);
};
