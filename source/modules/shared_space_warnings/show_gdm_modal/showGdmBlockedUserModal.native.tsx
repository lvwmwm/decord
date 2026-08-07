// Module ID: 12927
// Function ID: 12928
// Name: showGdmBlockedUserModal
// Dependencies: [4270, 12928, 1988, 2]
// Exports: showGdmBlockedUserModal

// Module 12927 (showGdmBlockedUserModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  let blockedUserIds;
  let channelId;
  let ignoredUserIds;
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  importDefault(4270).openLazy(require(1988) /* asyncRequireImpl */(12928, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
};
