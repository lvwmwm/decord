// Module ID: 11051
// Function ID: 11052
// Name: showModerateUserActionSheet
// Dependencies: [4346, 11052, 2008, 2]
// Exports: default

// Module 11051 (showModerateUserActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4346 */;

const result = set.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11052, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
