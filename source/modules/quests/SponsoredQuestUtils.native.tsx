// Module ID: 10964
// Function ID: 10965
// Name: createGameSheetHook
// Dependencies: [2]
// Exports: createGameSheetHook

// Module 10964 (createGameSheetHook)
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
