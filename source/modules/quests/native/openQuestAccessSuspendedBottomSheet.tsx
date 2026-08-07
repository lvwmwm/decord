// Module ID: 14288
// Function ID: 14289
// Name: openQuestAccessSuspendedBottomSheet
// Dependencies: [4270, 14289, 1988, 2]
// Exports: default

// Module 14288 (openQuestAccessSuspendedBottomSheet)
const QuestAccessSuspendedBottomSheet = "QuestAccessSuspendedBottomSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx");

export default function openQuestAccessSuspendedBottomSheet() {
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(14289, dependencyMap.paths), QuestAccessSuspendedBottomSheet, {});
};
export const ACTION_SHEET_KEY = "QuestAccessSuspendedBottomSheet";
