// Module ID: 11571
// Function ID: 11572
// Name: createGameSheetHook
// Dependencies: [2]
// Exports: createGameSheetHook

// Module 11571 (createGameSheetHook)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/quests/SponsoredQuestUtils.native.tsx");

export const createGameSheetHook = function createGameSheetHook(arg0) {
  ({ quest, sourceQuestContent, applications, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed } = arg0);
  return (arg0) => arg0;
};
