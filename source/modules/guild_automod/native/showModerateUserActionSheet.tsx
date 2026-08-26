// Module ID: 11465
// Function ID: 11466
// Name: showModerateUserActionSheet
// Dependencies: [4411, 11466, 2009, 2]
// Exports: default

// Module 11465 (showModerateUserActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4411 */;

const result = set.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11466, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
