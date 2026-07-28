// Module ID: 9079
// Function ID: 71214
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4133, 4372, 9080, 1935, 2]
// Exports: default

// Module 9079 (showChatGDMCustomizeActionSheet)
const result = require("ChatGDMCustomizeActionSheet").fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  let obj = importDefault(4133);
  obj.hideActionSheet();
  obj = { presentation: "modal" };
  importDefault(4372).pushLazy(require(1935) /* maybeLoadBundle */(9080, dependencyMap.paths), merged, "customize-group-dm", obj);
};
