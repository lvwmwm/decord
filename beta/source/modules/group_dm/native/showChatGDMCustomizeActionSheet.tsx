// Module ID: 11224
// Function ID: 11225
// Name: showChatGDMCustomizeActionSheet
// Dependencies: [4725, 4961, 11225, 1984, 2]
// Exports: default

// Module 11224 (showChatGDMCustomizeActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4725 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/showChatGDMCustomizeActionSheet.tsx");

export default function showChatGDMCustomizeActionSheet(merged) {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11225, dependencyMap.paths), merged, "customize-group-dm", { presentation: "modal" });
};
