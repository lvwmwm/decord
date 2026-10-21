// Module ID: 9983
// Function ID: 9984
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5192, 6651, 9984, 2002, 2]
// Exports: default

// Module 9983 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(9984, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
