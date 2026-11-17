// Module ID: 12740
// Function ID: 12741
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5546, 12741, 2121, 2]
// Exports: default

// Module 12740 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(12741, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
