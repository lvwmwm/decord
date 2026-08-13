// Module ID: 9722
// Function ID: 9723
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4310, 4550, 9723, 2007, 2]
// Exports: default

// Module 9722 (showChatGDMCustomizeActionSheet)
const result = require("ChatGDMCustomizeActionSheet").fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  importDefault(4310).hideActionSheet();
  const obj = importDefault(4310);
  importDefault(4550).pushLazy(require(2007) /* asyncRequireImpl */(9723, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};
