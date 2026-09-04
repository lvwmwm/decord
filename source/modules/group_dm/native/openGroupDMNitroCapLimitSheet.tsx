// Module ID: 11527
// Function ID: 11528
// Name: openGroupDMNitroCapLimitSheet
// Dependencies: [4448, 11528, 2008, 2]
// Exports: default

// Module 11527 (openGroupDMNitroCapLimitSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;

const result = set.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapLimitSheet.tsx");

export default function openGroupDMNitroCapLimitSheet(location) {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { location };
  obj.openLazy(asyncRequireImpl(11528, dependencyMap.paths), "GroupDMNitroCapLimitSheet", obj);
};
