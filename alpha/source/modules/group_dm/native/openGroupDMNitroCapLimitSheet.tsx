// Module ID: 11825
// Function ID: 11826
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5382, 11826, 2123, 2]
// Exports: default

// Module 11825 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11826, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
