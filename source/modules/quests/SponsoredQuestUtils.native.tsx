// Module ID: 10916
// Function ID: 84891
// Name: createGameSheetHook
// Dependencies: []
// Exports: createGameSheetHook

// Module 10916 (createGameSheetHook)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/quests/SponsoredQuestUtils.native.tsx");

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
