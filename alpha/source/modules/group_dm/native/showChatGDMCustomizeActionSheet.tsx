// Module ID: 11267
// Function ID: 11268
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5131, 6004, 11268, 2119, 2]
// Exports: default

// Module 11267 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5131 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6004 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(11268, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
