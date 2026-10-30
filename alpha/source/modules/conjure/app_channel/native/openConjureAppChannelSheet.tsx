// Module ID: 14531
// Function ID: 14532
// Name: openConjureAppChannelSheet
// Dependencies: [5253, 14532, 1995, 14533, 2]
// Exports: closeConjureAppChannelMembersSheet, closeConjureAppChannelSheet, default, openConjureAppChannelMembersSheet

// Module 14531 (openConjureAppChannelSheet)
import asyncRequire from "asyncRequire" /* 1995 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import size from "module_2" /* 2 */;

const ConjureAppChannelSheet = "ConjureAppChannelSheet";
const ConjureAppChannelMembersSheet = "ConjureAppChannelMembersSheet";
const result = size.fileFinishedImporting("modules/conjure/app_channel/native/openConjureAppChannelSheet.tsx");

export default function openConjureAppChannelSheet(channelId) {
  const obj = ActionSheetActionCreatorsDefault;
  const obj2 = { channelId };
  obj.openLazy(asyncRequire(14533, dependencyMap.paths), ConjureAppChannelSheet, obj2);
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
  obj.openLazy(asyncRequire(14532, dependencyMap.paths), ConjureAppChannelMembersSheet, obj2);
}
