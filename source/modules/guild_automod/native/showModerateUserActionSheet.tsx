// Module ID: 11320
// Function ID: 11321
// Name: showModerateUserActionSheet
// Dependencies: [4412, 11321, 2009, 2]
// Exports: default

// Module 11320 (showModerateUserActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;

const result = set.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11321, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
