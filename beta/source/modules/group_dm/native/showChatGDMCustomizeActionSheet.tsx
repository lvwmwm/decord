// Module ID: 10291
// Function ID: 10292
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5406, 6831, 10292, 2118, 2]
// Exports: default

// Module 10291 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5406 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10292, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
