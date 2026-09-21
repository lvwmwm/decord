// Module ID: 11183
// Function ID: 11184
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4723, 4959, 11184, 1980, 2]
// Exports: default

// Module 11183 (showChatGDMCustomizeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11184, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
