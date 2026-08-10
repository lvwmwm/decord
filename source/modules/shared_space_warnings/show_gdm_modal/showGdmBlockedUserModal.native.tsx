// Module ID: 12999
// Function ID: 13000
// Name: showGdmBlockedUserModal
// Dependencies: [4271, 13000, 1988, 2]
// Exports: showGdmBlockedUserModal

// Module 12999 (showGdmBlockedUserModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  let blockedUserIds;
  let channelId;
  let ignoredUserIds;
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  importDefault(4271).openLazy(require(1988) /* asyncRequireImpl */(13000, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
};
