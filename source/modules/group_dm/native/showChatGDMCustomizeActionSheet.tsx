// Module ID: 9035
// Function ID: 71063
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4099, 4338, 9036, 1935, 2]
// Exports: default

// Module 9035 (showChatGDMCustomizeActionSheet)
const result = require("ChatGDMCustomizeActionSheet").fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  let obj = importDefault(4099);
  obj.hideActionSheet();
  obj = { presentation: "modal" };
  importDefault(4338).pushLazy(require(1935) /* maybeLoadBundle */(9036, dependencyMap.paths), merged, "customize-group-dm", obj);
};
