// Module ID: 13062
// Function ID: 13063
// Name: showGdmBlockedUserModal
// Dependencies: [4310, 13063, 2007, 2]
// Exports: showGdmBlockedUserModal

// Module 13062 (showGdmBlockedUserModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  let blockedUserIds;
  let channelId;
  let ignoredUserIds;
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  importDefault(4310).openLazy(require(2007) /* asyncRequireImpl */(13063, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
};
