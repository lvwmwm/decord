// Module ID: 13003
// Function ID: 13004
// Name: showGdmBlockedUserModal
// Dependencies: [4271, 13004, 2007, 2]
// Exports: showGdmBlockedUserModal

// Module 13003 (showGdmBlockedUserModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  let blockedUserIds;
  let channelId;
  let ignoredUserIds;
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  importDefault(4271).openLazy(require(2007) /* asyncRequireImpl */(13004, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
};
