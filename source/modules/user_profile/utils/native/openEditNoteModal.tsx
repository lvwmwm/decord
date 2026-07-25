// Module ID: 11981
// Function ID: 92597
// Name: openEditNoteModal
// Dependencies: [4338, 11982, 1935, 2]
// Exports: default

// Module 11981 (openEditNoteModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  let obj = importDefault(4338);
  obj = { presentation: "modal" };
  obj.pushLazy(require(1935) /* maybeLoadBundle */(11982, dependencyMap.paths), merged, undefined, obj);
};
