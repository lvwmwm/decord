// Module ID: 14917
// Function ID: 14918
// Name: openQuestAccessSuspendedBottomSheet
// Dependencies: [4854, 14918, 1987, 2]
// Exports: default

// Module 14917 (openQuestAccessSuspendedBottomSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import size from "module_2" /* 2 */;

const QuestAccessSuspendedBottomSheet = "QuestAccessSuspendedBottomSheet";
const result = size.fileFinishedImporting("modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx");

export default function openQuestAccessSuspendedBottomSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(14918, dependencyMap.paths), QuestAccessSuspendedBottomSheet, {});
};
export const ACTION_SHEET_KEY = "QuestAccessSuspendedBottomSheet";
