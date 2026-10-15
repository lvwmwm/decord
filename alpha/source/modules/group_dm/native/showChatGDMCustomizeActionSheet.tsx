// Module ID: 9849
// Function ID: 9850
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5115, 6150, 9850, 2000, 2]
// Exports: default

// Module 9849 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(9850, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
