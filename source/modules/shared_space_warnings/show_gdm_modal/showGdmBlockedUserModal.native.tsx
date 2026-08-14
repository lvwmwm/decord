// Module ID: 13081
// Function ID: 13082
// Name: showGdmBlockedUserModal
// Dependencies: [4310, 13082, 2007, 2]
// Exports: showGdmBlockedUserModal

// Module 13081 (showGdmBlockedUserModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  let blockedUserIds;
  let channelId;
  let ignoredUserIds;
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(13082, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
};
