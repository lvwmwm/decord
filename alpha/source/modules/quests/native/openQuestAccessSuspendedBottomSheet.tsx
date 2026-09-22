// Module ID: 15393
// Function ID: 15394
// Name: openQuestAccessSuspendedBottomSheet
// Dependencies: [4724, 15394, 1980, 2]
// Exports: default

// Module 15393 (openQuestAccessSuspendedBottomSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4724 */;
import size from "module_2" /* 2 */;

const QuestAccessSuspendedBottomSheet = "QuestAccessSuspendedBottomSheet";
const result = size.fileFinishedImporting("modules/quests/native/openQuestAccessSuspendedBottomSheet.tsx");

export default function openQuestAccessSuspendedBottomSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15394, dependencyMap.paths), QuestAccessSuspendedBottomSheet, {});
};
export const ACTION_SHEET_KEY = "QuestAccessSuspendedBottomSheet";
