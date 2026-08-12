// Module ID: 9718
// Function ID: 9719
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4312, 4549, 9719, 2007, 2]
// Exports: default

// Module 9718 (showChatGDMCustomizeActionSheet)
const result = require("ChatGDMCustomizeActionSheet").fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  importDefault(4312).hideActionSheet();
  const obj = importDefault(4312);
  importDefault(4549).pushLazy(require(2007) /* asyncRequireImpl */(9719, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};
