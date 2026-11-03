// Module ID: 11768
// Function ID: 11769
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5381, 11769, 2123, 2]
// Exports: default

// Module 11768 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11769, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
