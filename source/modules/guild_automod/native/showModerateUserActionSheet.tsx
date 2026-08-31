// Module ID: 11368
// Function ID: 11369
// Name: showModerateUserActionSheet
// Dependencies: [4415, 11369, 2009, 2]
// Exports: default

// Module 11368 (showModerateUserActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4415 */;

const result = set.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11369, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
