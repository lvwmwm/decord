// Module ID: 11088
// Function ID: 11089
// Name: createGameSheetHook
// Dependencies: [2]
// Exports: createGameSheetHook

// Module 11088 (createGameSheetHook)
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
