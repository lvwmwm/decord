// Module ID: 10960
// Function ID: 10961
// Name: openGuildRoleConnectionsModal
// Dependencies: [4490, 10961, 1988, 4253, 10953, 2]
// Exports: makeGuildRoleConnectionsConnectAccountsActionSheetKey, openGuildRoleConnectionsConnectAccountModal, openGuildRoleConnectionsModal

// Module 10960 (openGuildRoleConnectionsModal)
const ROLE_CONNECTIONS_MODAL_KEY = "ROLE_CONNECTIONS_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx");

export const openGuildRoleConnectionsModal = function openGuildRoleConnectionsModal(guildId) {
  const onClose = guildId.onClose;
  let obj = importDefault(4490);
  obj = {
    guildId: guildId.guildId,
    onClose() {
      outer1_1(outer1_2[0]).popWithKey(outer1_3);
      if (onClose != null) {
        onClose();
      }
    }
  };
  obj.pushLazy(onClose(1988)(10961, dependencyMap.paths), obj, ROLE_CONNECTIONS_MODAL_KEY);
};
export const makeGuildRoleConnectionsConnectAccountsActionSheetKey = function makeGuildRoleConnectionsConnectAccountsActionSheetKey(id) {
  return "GuildRoleConnectionsConnectAccountsActionSheet-" + id;
};
export const openGuildRoleConnectionsConnectAccountModal = function openGuildRoleConnectionsConnectAccountModal(id, guildId) {
  let obj = importDefault(4253);
  obj = { role: id, guildId };
  obj.openLazy(require(1988) /* asyncRequireImpl */(10953, dependencyMap.paths), "GuildRoleConnectionsConnectAccountsActionSheet-" + id.id, obj);
};
