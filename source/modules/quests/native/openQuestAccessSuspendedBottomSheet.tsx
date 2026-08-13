// Module ID: 14425
// Function ID: 14426
// Name: openQuestAccessSuspendedBottomSheet
// Dependencies: [4310, 14426, 2007, 2]
// Exports: default

// Module 14425 (openQuestAccessSuspendedBottomSheet)
const QuestAccessSuspendedBottomSheet = "QuestAccessSuspendedBottomSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx");

export default function openQuestAccessSuspendedBottomSheet() {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(14426, dependencyMap.paths), QuestAccessSuspendedBottomSheet, {});
};
export const ACTION_SHEET_KEY = "QuestAccessSuspendedBottomSheet";
