// Module ID: 9592
// Function ID: 9593
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4253, 4490, 9593, 1988, 2]
// Exports: default

// Module 9592 (showChatGDMCustomizeActionSheet)
const result = require("ChatGDMCustomizeActionSheet").fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_0) {
  importDefault(4253).hideActionSheet();
  const obj = importDefault(4253);
  importDefault(4490).pushLazy(require(1988) /* asyncRequireImpl */(9593, dependencyMap.paths), closure_0, "customize-group-dm", { presentation: "modal" });
};
