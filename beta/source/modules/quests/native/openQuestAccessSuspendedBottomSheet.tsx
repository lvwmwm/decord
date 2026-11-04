// Module ID: 17096
// Function ID: 17097
// Name: openQuestAccessSuspendedBottomSheet
// Dependencies: [5258, 17097, 1994, 2]
// Exports: default

// Module 17096 (openQuestAccessSuspendedBottomSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import size from "module_2" /* 2 */;

const QuestAccessSuspendedBottomSheet = "QuestAccessSuspendedBottomSheet";
const result = size.fileFinishedImporting("modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx");

export default function openQuestAccessSuspendedBottomSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(17097, dependencyMap.paths), QuestAccessSuspendedBottomSheet, {});
};
export const ACTION_SHEET_KEY = "QuestAccessSuspendedBottomSheet";
