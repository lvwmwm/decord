// Module ID: 15649
// Function ID: 15650
// Name: openConjureAppChannelSheet
// Dependencies: [5552, 15650, 2121, 15651, 2]
// Exports: closeConjureAppChannelMembersSheet, closeConjureAppChannelSheet, default, openConjureAppChannelMembersSheet

// Module 15649 (openConjureAppChannelSheet)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import size from "module_2" /* 2 */;

const ConjureAppChannelSheet = "ConjureAppChannelSheet";
const ConjureAppChannelMembersSheet = "ConjureAppChannelMembersSheet";
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/openConjureAppChannelSheet.tsx");

export default function openConjureAppChannelSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(15651, dependencyMap.paths), ConjureAppChannelSheet, obj2);
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
  obj.openLazy(asyncRequire(15650, dependencyMap.paths), ConjureAppChannelMembersSheet, obj2);
}
