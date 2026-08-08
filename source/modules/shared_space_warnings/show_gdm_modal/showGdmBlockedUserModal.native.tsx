// Module ID: 12997
// Function ID: 12998
// Name: showGdmBlockedUserModal
// Dependencies: [4271, 12998, 1988, 2]
// Exports: showGdmBlockedUserModal

// Module 12997 (showGdmBlockedUserModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  let blockedUserIds;
  let channelId;
  let ignoredUserIds;
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(12998, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
};
