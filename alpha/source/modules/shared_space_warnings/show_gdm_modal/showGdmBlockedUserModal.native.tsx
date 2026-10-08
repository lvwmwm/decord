// Module ID: 17955
// Function ID: 17956
// Name: showGdmBlockedUserModal
// Dependencies: [5054, 17956, 1999, 2]
// Exports: showGdmBlockedUserModal

// Module 17955 (showGdmBlockedUserModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  let blockedUserIds;
  let channelId;
  let ignoredUserIds;
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(17956, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
};
