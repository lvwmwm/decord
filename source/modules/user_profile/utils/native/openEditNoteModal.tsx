// Module ID: 12005
// Function ID: 92792
// Name: openEditNoteModal
// Dependencies: [4337, 12006, 1934, 2]
// Exports: default

// Module 12005 (openEditNoteModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/user_profile/utils/native/openEditNoteModal.tsx");

export default function openEditNoteModal(merged) {
  let obj = importDefault(4337);
  obj = { presentation: "modal" };
  obj.pushLazy(require(1934) /* maybeLoadBundle */(12006, dependencyMap.paths), merged, undefined, obj);
};
