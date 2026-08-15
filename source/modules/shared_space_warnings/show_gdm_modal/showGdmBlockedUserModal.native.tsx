// Module ID: 13284
// Function ID: 13285
// Name: showGdmBlockedUserModal
// Dependencies: [4342, 13285, 2007, 2]
// Exports: showGdmBlockedUserModal

// Module 13284 (showGdmBlockedUserModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  let blockedUserIds;
  let channelId;
  let ignoredUserIds;
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  importDefault(4342).openLazy(require(2007) /* asyncRequireImpl */(13285, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
};
