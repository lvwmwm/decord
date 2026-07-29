// Module ID: 12788
// Function ID: 12789
// Name: showGdmBlockedUserModal
// Dependencies: [4157, 12789, 1959, 2]
// Exports: showGdmBlockedUserModal

// Module 12788 (showGdmBlockedUserModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  let blockedUserIds;
  let channelId;
  let ignoredUserIds;
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  importDefault(4157).openLazy(require(1959) /* asyncRequireImpl */(12789, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
};
