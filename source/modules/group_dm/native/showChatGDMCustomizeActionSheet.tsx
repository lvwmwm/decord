// Module ID: 9926
// Function ID: 9927
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4342, 5260, 9927, 2007, 2]
// Exports: default

// Module 9926 (showChatGDMCustomizeActionSheet)
const result = require("ChatGDMCustomizeActionSheet").fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  importDefault(4342).hideActionSheet();
  const obj = importDefault(4342);
  importDefault(5260).pushLazy(require(2007) /* asyncRequireImpl */(9927, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};
