// Module ID: 15198
// Function ID: 15199
// Name: openQuestAccessSuspendedBottomSheet
// Dependencies: [5054, 15199, 1999, 2]
// Exports: default

// Module 15198 (openQuestAccessSuspendedBottomSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const QuestAccessSuspendedBottomSheet = "QuestAccessSuspendedBottomSheet";
const result = size.fileFinishedImporting("modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx");

export default function openQuestAccessSuspendedBottomSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(15199, dependencyMap.paths), QuestAccessSuspendedBottomSheet, {});
};
export const ACTION_SHEET_KEY = "QuestAccessSuspendedBottomSheet";
