// Module ID: 11765
// Function ID: 11766
// Name: showModerateUserActionSheet
// Dependencies: [4448, 11766, 2008, 2]
// Exports: default

// Module 11765 (showModerateUserActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;

const result = set.fileFinishedImporting("modules/guild_automod/native/showModerateUserActionSheet.tsx");

export default function showModerateUserActionSheet(arg0) {
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(11766, dependencyMap.paths), "ModerateUserActionSheet", arg0);
};
