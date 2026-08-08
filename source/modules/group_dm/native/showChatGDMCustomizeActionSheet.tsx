// Module ID: 9673
// Function ID: 9674
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4271, 4509, 9674, 1988, 2]
// Exports: default

// Module 9673 (showChatGDMCustomizeActionSheet)
const result = require("ChatGDMCustomizeActionSheet").fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  importDefault(4271).hideActionSheet();
  const obj = importDefault(4271);
  importDefault(4509).pushLazy(require(1988) /* asyncRequireImpl */(9674, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};
