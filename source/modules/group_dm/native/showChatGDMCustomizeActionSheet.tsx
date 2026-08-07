// Module ID: 9608
// Function ID: 9609
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4270, 4507, 9609, 1988, 2]
// Exports: default

// Module 9608 (showChatGDMCustomizeActionSheet)
const result = require("ChatGDMCustomizeActionSheet").fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  importDefault(4270).hideActionSheet();
  const obj = importDefault(4270);
  importDefault(4507).pushLazy(require(1988) /* asyncRequireImpl */(9609, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};
