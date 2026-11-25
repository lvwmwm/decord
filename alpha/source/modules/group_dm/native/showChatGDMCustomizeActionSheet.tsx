// Module ID: 11366
// Function ID: 11367
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5226, 6099, 11367, 2119, 2]
// Exports: default

// Module 11366 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(11367, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
