// Module ID: 9095
// Function ID: 71291
// Name: showChatGDMCustomizeActionSheet
// Dependencies: []
// Exports: default

// Module 9095 (showChatGDMCustomizeActionSheet)
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(closure_2) {
  let obj = importDefault(dependencyMap[0]);
  obj.hideActionSheet();
  obj = { presentation: "modal" };
  importDefault(dependencyMap[1]).pushLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), closure_2, "customize-group-dm", obj);
};
