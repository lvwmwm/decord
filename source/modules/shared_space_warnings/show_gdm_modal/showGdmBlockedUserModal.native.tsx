// Module ID: 12711
// Function ID: 98889
// Name: showGdmBlockedUserModal
// Dependencies: [4098, 12712, 1934, 2]
// Exports: showGdmBlockedUserModal

// Module 12711 (showGdmBlockedUserModal)
const result = require("maybeLoadBundle").fileFinishedImporting("modules/shared_space_warnings/show_gdm_modal/showGdmBlockedUserModal.native.tsx");

export const showGdmBlockedUserModal = function showGdmBlockedUserModal(arg0) {
  let blockedUserIds;
  let channelId;
  let ignoredUserIds;
  ({ channelId, blockedUserIds, ignoredUserIds } = arg0);
  importDefault(4098).openLazy(require(1934) /* maybeLoadBundle */(12712, dependencyMap.paths), "gdm_blocked_user_action_sheet", { channelId, blockedUserIds, ignoredUserIds });
};
