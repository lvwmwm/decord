// Module ID: 10852
// Function ID: 10853
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5060, 10853, 2000, 2]
// Exports: default

// Module 10852 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5060 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(10853, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
