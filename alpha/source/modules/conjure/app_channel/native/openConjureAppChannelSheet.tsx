// Module ID: 15538
// Function ID: 15539
// Name: openConjureAppChannelSheet
// Dependencies: [5489, 15539, 2118, 15540, 2]
// Exports: closeConjureAppChannelMembersSheet, closeConjureAppChannelSheet, default, openConjureAppChannelMembersSheet

// Module 15538 (openConjureAppChannelSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5489 */;
import size from "module_2" /* 2 */;

const ConjureAppChannelSheet = "ConjureAppChannelSheet";
const ConjureAppChannelMembersSheet = "ConjureAppChannelMembersSheet";
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/openConjureAppChannelSheet.tsx");

export default function openConjureAppChannelSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(15540, dependencyMap.paths), ConjureAppChannelSheet, obj2);
};
export function closeConjureAppChannelSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(ConjureAppChannelSheet);
}
export function closeConjureAppChannelMembersSheet() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(ConjureAppChannelMembersSheet);
}
export function openConjureAppChannelMembersSheet(id) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId: id };
  obj.openLazy(asyncRequire(15539, dependencyMap.paths), ConjureAppChannelMembersSheet, obj2);
}
