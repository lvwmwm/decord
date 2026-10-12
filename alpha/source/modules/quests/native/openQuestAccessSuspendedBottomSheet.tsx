// Module ID: 15396
// Function ID: 15397
// Name: openQuestAccessSuspendedBottomSheet
// Dependencies: [5056, 15397, 2000, 2]
// Exports: default

// Module 15396 (openQuestAccessSuspendedBottomSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import size from "module_2" /* 2 */;

const QuestAccessSuspendedBottomSheet = "QuestAccessSuspendedBottomSheet";
const result = size.fileFinishedImporting("modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx");

export default function openQuestAccessSuspendedBottomSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15397, dependencyMap.paths), QuestAccessSuspendedBottomSheet, {});
};
export const ACTION_SHEET_KEY = "QuestAccessSuspendedBottomSheet";
