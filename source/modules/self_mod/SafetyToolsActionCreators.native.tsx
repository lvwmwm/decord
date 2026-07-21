// Module ID: 10124
// Function ID: 78370
// Name: openSafetyToolsActionSheet
// Dependencies: []
// Exports: openSafetyToolsActionSheet

// Module 10124 (openSafetyToolsActionSheet)
let closure_3 = require(dependencyMap[0]).getSafetyToolsActionSheetKey;
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/self_mod/SafetyToolsActionCreators.native.tsx");

export const openSafetyToolsActionSheet = function openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType) {
  const tmp = callback(channelId);
  const require = tmp;
  let obj = importDefault(dependencyMap[1]);
  obj = {
    channelId,
    warningId,
    warningType,
    recipientId,
    onClose() {
      callback(closure_2[1]).hideActionSheet(tmp);
    }
  };
  obj.openLazy(require(dependencyMap[3])(dependencyMap[2], dependencyMap.paths), tmp, obj);
};
