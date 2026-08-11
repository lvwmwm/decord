// Module ID: 9678
// Function ID: 9679
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4271, 4509, 9679, 2007, 2]
// Exports: default

// Module 9678 (showChatGDMCustomizeActionSheet)
const result = require("ChatGDMCustomizeActionSheet").fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  importDefault(4271).hideActionSheet();
  const obj = importDefault(4271);
  importDefault(4509).pushLazy(require(2007) /* asyncRequireImpl */(9679, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};
