// Module ID: 11210
// Function ID: 11211
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5546, 6833, 11211, 2121, 2]
// Exports: default

// Module 11210 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(11211, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
