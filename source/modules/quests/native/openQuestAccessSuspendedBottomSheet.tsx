// Module ID: 14434
// Function ID: 14435
// Name: openQuestAccessSuspendedBottomSheet
// Dependencies: [4310, 14435, 2007, 2]
// Exports: default

// Module 14434 (openQuestAccessSuspendedBottomSheet)
const QuestAccessSuspendedBottomSheet = "QuestAccessSuspendedBottomSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx");

export default function openQuestAccessSuspendedBottomSheet() {
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(14435, dependencyMap.paths), QuestAccessSuspendedBottomSheet, {});
};
export const ACTION_SHEET_KEY = "QuestAccessSuspendedBottomSheet";
