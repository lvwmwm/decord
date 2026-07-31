// Module ID: 12807
// Function ID: 12808
// Name: showGdmBlockedUserModal
// Dependencies: [4161, 12808, 1959, 2]
// Exports: showGdmBlockedUserModal

// Module 12807 (showGdmBlockedUserModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  let blockedUserIds;
  let channelId;
  let ignoredUserIds;
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  importDefault(4161).openLazy(require(1959) /* asyncRequireImpl */(12808, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
};
