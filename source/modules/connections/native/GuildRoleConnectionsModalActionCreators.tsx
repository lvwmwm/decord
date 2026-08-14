// Module ID: 11032
// Function ID: 11033
// Name: openGuildRoleConnectionsModal
// Dependencies: [4572, 11033, 2007, 4310, 11025, 2]
// Exports: makeGuildRoleConnectionsConnectAccountsActionSheetKey, openGuildRoleConnectionsConnectAccountModal, openGuildRoleConnectionsModal

// Module 11032 (openGuildRoleConnectionsModal)
const ROLE_CONNECTIONS_MODAL_KEY = "ROLE_CONNECTIONS_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx");

export const openGuildRoleConnectionsModal = function openGuildRoleConnectionsModal(guildId) {
  const onClose = guildId.onClose;
  let obj = importDefault(4572);
  obj = {
    guildId: guildId.guildId,
    onClose() {
      outer1_1(outer1_2[0]).popWithKey(outer1_3);
      if (onClose != null) {
        onClose();
      }
    }
  };
  obj.pushLazy(onClose(2007)(11033, dependencyMap.paths), obj, ROLE_CONNECTIONS_MODAL_KEY);
};
export const makeGuildRoleConnectionsConnectAccountsActionSheetKey = function makeGuildRoleConnectionsConnectAccountsActionSheetKey(id) {
  return "GuildRoleConnectionsConnectAccountsActionSheet-" + id;
};
export const openGuildRoleConnectionsConnectAccountModal = function openGuildRoleConnectionsConnectAccountModal(id, guildId) {
  let obj = importDefault(4310);
  obj = { role: id, guildId };
  obj.openLazy(require(2007) /* asyncRequireImpl */(11025, dependencyMap.paths), "GuildRoleConnectionsConnectAccountsActionSheet-" + id.id, obj);
};
