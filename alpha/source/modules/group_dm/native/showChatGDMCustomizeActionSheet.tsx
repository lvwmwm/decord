// Module ID: 10059
// Function ID: 10060
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [5246, 6707, 10060, 1999, 2]
// Exports: default

// Module 10059 (showChatGDMCustomizeActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5246 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(10060, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
