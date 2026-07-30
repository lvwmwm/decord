// Module ID: 9099
// Function ID: 9100
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4157, 4395, 9100, 1959, 2]
// Exports: default

// Module 9099 (showChatGDMCustomizeActionSheet)
const result = require("ChatGDMCustomizeActionSheet").fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  importDefault(4157).hideActionSheet();
  const obj = importDefault(4157);
  importDefault(4395).pushLazy(require(1959) /* asyncRequireImpl */(9100, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};
