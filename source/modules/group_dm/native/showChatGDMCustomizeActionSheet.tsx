// Module ID: 9733
// Function ID: 9734
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4310, 4572, 9734, 2007, 2]
// Exports: default

// Module 9733 (showChatGDMCustomizeActionSheet)
const result = require("ChatGDMCustomizeActionSheet").fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  importDefault(4310).hideActionSheet();
  const obj = importDefault(4310);
  importDefault(4572).pushLazy(require(2007) /* asyncRequireImpl */(9734, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};
