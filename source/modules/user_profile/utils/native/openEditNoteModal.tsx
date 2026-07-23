// Module ID: 11979
// Function ID: 92556
// Name: openEditNoteModal
// Dependencies: [4337, 11980, 1934, 2]
// Exports: default

// Module 11979 (openEditNoteModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  let obj = importDefault(4337);
  obj = { presentation: "modal" };
  obj.pushLazy(require(1934) /* maybeLoadBundle */(11980, dependencyMap.paths), merged, undefined, obj);
};
