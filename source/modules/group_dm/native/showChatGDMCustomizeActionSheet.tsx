// Module ID: 9285
// Function ID: 9286
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4223, 4461, 9286, 1959, 2]
// Exports: default

// Module 9285 (showChatGDMCustomizeActionSheet)
const result = require("ChatGDMCustomizeActionSheet").fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  importDefault(4223).hideActionSheet();
  const obj = importDefault(4223);
  importDefault(4461).pushLazy(require(1959) /* asyncRequireImpl */(9286, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};
