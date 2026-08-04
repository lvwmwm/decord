// Module ID: 12904
// Function ID: 12905
// Name: showGdmBlockedUserModal
// Dependencies: [4253, 12905, 1959, 2]
// Exports: showGdmBlockedUserModal

// Module 12904 (showGdmBlockedUserModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  let blockedUserIds;
  let channelId;
  let ignoredUserIds;
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(12905, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
};
