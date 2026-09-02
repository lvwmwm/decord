// Module ID: 11629
// Function ID: 11630
// Name: showModerateUserActionSheet
// Dependencies: [4445, 11630, 2008, 2]
// Exports: default

// Module 11629 (showModerateUserActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11630, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
