// Module ID: 12120
// Function ID: 12121
// Name: openGroupDMNitroCapInfoActionSheet
// Dependencies: [4448, 12121, 2008, 2]
// Exports: default

// Module 12120 (openGroupDMNitroCapInfoActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;

const result = set.fileFinishedImporting("modules/group_dm/native/openGroupDMNitroCapInfoActionSheet.tsx");

export default function openGroupDMNitroCapInfoActionSheet() {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(12121, dependencyMap.paths), "GroupDMNitroCapInfoActionSheet");
};
