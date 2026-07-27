// Module ID: 9951
// Function ID: 77051
// Name: makeGuildRoleConnectionsConnectAccountsActionSheetKey
// Dependencies: [4338, 9952, 1935, 4099, 9944, 2]
// Exports: openGuildRoleConnectionsConnectAccountModal, openGuildRoleConnectionsModal

// Module 9951 (makeGuildRoleConnectionsConnectAccountsActionSheetKey)
function makeGuildRoleConnectionsConnectAccountsActionSheetKey(id) {
  return "GuildRoleConnectionsConnectAccountsActionSheet-" + id;
}
const result = require("maybeLoadBundle").fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx");

export const openGuildRoleConnectionsModal = function openGuildRoleConnectionsModal(guildId) {
  const onClose = guildId.onClose;
  let obj = importDefault(4338);
  obj = {
    guildId: guildId.guildId,
    onClose() {
      outer1_1(outer1_2[0]).popWithKey("ROLE_CONNECTIONS_MODAL_KEY");
      if (null != onClose) {
        onClose();
      }
    }
  };
  obj.pushLazy(onClose(1935)(9952, dependencyMap.paths), obj, "ROLE_CONNECTIONS_MODAL_KEY");
};
export { makeGuildRoleConnectionsConnectAccountsActionSheetKey };
export const openGuildRoleConnectionsConnectAccountModal = function openGuildRoleConnectionsConnectAccountModal(verificationRole, guildId) {
  let obj = importDefault(4099);
  obj = { role: verificationRole, guildId };
  obj.openLazy(require(1935) /* maybeLoadBundle */(9944, dependencyMap.paths), makeGuildRoleConnectionsConnectAccountsActionSheetKey(verificationRole.id), obj);
};
