// Module ID: 11790
// Function ID: 11791
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5374, 11791, 2118, 2]
// Exports: default

// Module 11790 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11791, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
