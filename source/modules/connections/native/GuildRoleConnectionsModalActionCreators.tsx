// Module ID: 9991
// Function ID: 77180
// Name: makeGuildRoleConnectionsConnectAccountsActionSheetKey
// Dependencies: [4372, 9992, 1935, 4133, 9984, 2]
// Exports: openGuildRoleConnectionsConnectAccountModal, openGuildRoleConnectionsModal

// Module 9991 (makeGuildRoleConnectionsConnectAccountsActionSheetKey)
function makeGuildRoleConnectionsConnectAccountsActionSheetKey(id) {
  return "GuildRoleConnectionsConnectAccountsActionSheet-" + id;
}
const result = require("maybeLoadBundle").fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx");

export const openGuildRoleConnectionsModal = function openGuildRoleConnectionsModal(guildId) {
  const onClose = guildId.onClose;
  let obj = importDefault(4372);
  obj = {
    guildId: guildId.guildId,
    onClose() {
      outer1_1(outer1_2[0]).popWithKey("ROLE_CONNECTIONS_MODAL_KEY");
      if (null != onClose) {
        onClose();
      }
    }
  };
  obj.pushLazy(onClose(1935)(9992, dependencyMap.paths), obj, "ROLE_CONNECTIONS_MODAL_KEY");
};
export { makeGuildRoleConnectionsConnectAccountsActionSheetKey };
export const openGuildRoleConnectionsConnectAccountModal = function openGuildRoleConnectionsConnectAccountModal(verificationRole, guildId) {
  let obj = importDefault(4133);
  obj = { role: verificationRole, guildId };
  obj.openLazy(require(1935) /* maybeLoadBundle */(9984, dependencyMap.paths), makeGuildRoleConnectionsConnectAccountsActionSheetKey(verificationRole.id), obj);
};
