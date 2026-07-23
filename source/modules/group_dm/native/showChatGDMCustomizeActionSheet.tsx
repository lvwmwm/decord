// Module ID: 9107
// Function ID: 71368
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4098, 4337, 9108, 1934, 2]
// Exports: default

// Module 9107 (showChatGDMCustomizeActionSheet)
const result = require("ChatGDMCustomizeActionSheet").fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  let obj = importDefault(4098);
  obj.hideActionSheet();
  obj = { presentation: "modal" };
  importDefault(4337).pushLazy(require(1934) /* maybeLoadBundle */(9108, dependencyMap.paths), merged, "customize-group-dm", obj);
};
