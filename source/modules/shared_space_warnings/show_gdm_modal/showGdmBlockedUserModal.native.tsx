// Module ID: 12722
// Function ID: 99016
// Name: showGdmBlockedUserModal
// Dependencies: [4099, 12723, 1935, 2]
// Exports: showGdmBlockedUserModal

// Module 12722 (showGdmBlockedUserModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  let blockedUserIds;
  let channelId;
  let ignoredUserIds;
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  importDefault(4099).openLazy(require(1935) /* maybeLoadBundle */(12723, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
};
