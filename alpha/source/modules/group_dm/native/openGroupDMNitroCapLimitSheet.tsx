// Module ID: 11196
// Function ID: 11197
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [5171, 11197, 2002, 2]
// Exports: default

// Module 11196 (openGroupDMNitroCapLimitSheet)
import asyncRequire from "asyncRequire" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { location };
  obj.openLazy(asyncRequire(11197, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj2);
};
