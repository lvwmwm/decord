// Module ID: 19898
// Function ID: 19899
// Name: showGdmBlockedUserModal
// Dependencies: [5382, 19899, 2123, 2]
// Exports: showGdmBlockedUserModal

// Module 19898 (showGdmBlockedUserModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export function showGdmBlockedUserModal(arg0) {
  let blockedUserIds;
  let channelId;
  let ignoredUserIds;
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequire(19899, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
}
