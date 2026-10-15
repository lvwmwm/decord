// Module ID: 18526
// Function ID: 18527
// Name: showGdmBlockedUserModal
// Dependencies: [5115, 18527, 2000, 2]
// Exports: showGdmBlockedUserModal

// Module 18526 (showGdmBlockedUserModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  let blockedUserIds;
  let channelId;
  let ignoredUserIds;
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(18527, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
};
