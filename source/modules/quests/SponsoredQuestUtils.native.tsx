// Module ID: 11107
// Function ID: 11108
// Name: createGameSheetHook
// Dependencies: [2]
// Exports: createGameSheetHook

// Module 11107 (createGameSheetHook)
const result = require("set").fileFinishedImporting("modules/quests/SponsoredQuestUtils.native.tsx");

export const createGameSheetHook = function createGameSheetHook(arg0) {
  let applications;
  let onGameSheetClosed;
  let onGameSheetOpened;
  let popoutTargetElementRef;
  let quest;
  let sourceQuestContent;
  ({ quest, sourceQuestContent, applications, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed } = arg0);
  return (arg0) => arg0;
};
