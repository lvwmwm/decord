// Module ID: 13322
// Function ID: 13323
// Name: showGdmBlockedUserModal
// Dependencies: [4413, 13323, 2010, 2]
// Exports: showGdmBlockedUserModal

// Module 13322 (showGdmBlockedUserModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;

const result = set.fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(13323, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
};
