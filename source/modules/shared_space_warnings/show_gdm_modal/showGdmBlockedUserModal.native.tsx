// Module ID: 12541
// Function ID: 96384
// Name: showGdmBlockedUserModal
// Dependencies: []
// Exports: showGdmBlockedUserModal

// Module 12541 (showGdmBlockedUserModal)
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  let blockedUserIds;
  let channelId;
  let ignoredUserIds;
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  importDefault(dependencyMap[0]).openLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
};
