// Module ID: 14438
// Function ID: 14439
// Name: openQuestAccessSuspendedBottomSheet
// Dependencies: [4310, 14439, 2007, 2]
// Exports: default

// Module 14438 (openQuestAccessSuspendedBottomSheet)
const QuestAccessSuspendedBottomSheet = "QuestAccessSuspendedBottomSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx");

export default function openQuestAccessSuspendedBottomSheet() {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(14439, dependencyMap.paths), QuestAccessSuspendedBottomSheet, {});
};
export const ACTION_SHEET_KEY = "QuestAccessSuspendedBottomSheet";
