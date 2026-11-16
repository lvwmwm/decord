// Module ID: 15262
// Function ID: 15263
// Name: SponsoredQuestUtils
// Dependencies: [2]
// Exports: createGameSheetHook

// Module 15262 (SponsoredQuestUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/quests/SponsoredQuestUtils.native.tsx");

export function createGameSheetHook(arg0) {
  let applications;
  let onGameSheetClosed;
  let onGameSheetOpened;
  let popoutTargetElementRef;
  let quest;
  let sourceQuestContent;
  ({ quest, sourceQuestContent, applications, popoutTargetElementRef, onGameSheetOpened, onGameSheetClosed } = arg0);
  return (arg0) => arg0;
}
