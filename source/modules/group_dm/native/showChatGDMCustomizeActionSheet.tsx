// Module ID: 9563
// Function ID: 9564
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4223, 4460, 9564, 1959, 2]
// Exports: default

// Module 9563 (showChatGDMCustomizeActionSheet)
const result = require("ChatGDMCustomizeActionSheet").fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  importDefault(4223).hideActionSheet();
  const obj = importDefault(4223);
  importDefault(4460).pushLazy(require(1959) /* asyncRequireImpl */(9564, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};
