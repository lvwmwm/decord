// Module ID: 14714
// Function ID: 14715
// Name: openConjureAppChannelSheet
// Dependencies: [5381, 14715, 2123, 14716, 2]
// Exports: closeConjureAppChannelMembersSheet, closeConjureAppChannelSheet, default, openConjureAppChannelMembersSheet

// Module 14714 (openConjureAppChannelSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import size from "module_2" /* 2 */;

const ConjureAppChannelSheet = "ConjureAppChannelSheet";
const ConjureAppChannelMembersSheet = "ConjureAppChannelMembersSheet";
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/openConjureAppChannelSheet.tsx");

export default function openConjureAppChannelSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(14716, dependencyMap.paths), ConjureAppChannelSheet, obj2);
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
  obj.openLazy(asyncRequire(14715, dependencyMap.paths), ConjureAppChannelMembersSheet, obj2);
}
