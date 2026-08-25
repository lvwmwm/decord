// Module ID: 11393
// Function ID: 11394
// Name: showModerateUserActionSheet
// Dependencies: [4347, 11394, 2009, 2]
// Exports: default

// Module 11393 (showModerateUserActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4347 */;

const result = set.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11394, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
