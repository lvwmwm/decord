// Module ID: 16044
// Function ID: 16045
// Name: openQuestAccessSuspendedBottomSheet
// Dependencies: [5115, 16045, 2000, 2]
// Exports: default

// Module 16044 (openQuestAccessSuspendedBottomSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const QuestAccessSuspendedBottomSheet = "QuestAccessSuspendedBottomSheet";
const result = size.fileFinishedImporting("modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx");

export default function openQuestAccessSuspendedBottomSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(16045, dependencyMap.paths), QuestAccessSuspendedBottomSheet, {});
};
export const ACTION_SHEET_KEY = "QuestAccessSuspendedBottomSheet";
