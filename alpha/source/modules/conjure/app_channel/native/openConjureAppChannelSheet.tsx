// Module ID: 14795
// Function ID: 14796
// Name: openConjureAppChannelSheet
// Dependencies: [5382, 14796, 2123, 14797, 2]
// Exports: closeConjureAppChannelMembersSheet, closeConjureAppChannelSheet, default, openConjureAppChannelMembersSheet

// Module 14795 (openConjureAppChannelSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const ConjureAppChannelSheet = "ConjureAppChannelSheet";
const ConjureAppChannelMembersSheet = "ConjureAppChannelMembersSheet";
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/openConjureAppChannelSheet.tsx");

export default function openConjureAppChannelSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(14797, dependencyMap.paths), ConjureAppChannelSheet, obj2);
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
  obj.openLazy(asyncRequire(14796, dependencyMap.paths), ConjureAppChannelMembersSheet, obj2);
}
