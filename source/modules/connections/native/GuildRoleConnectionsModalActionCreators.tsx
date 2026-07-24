// Module ID: 10022
// Function ID: 77431
// Name: makeGuildRoleConnectionsConnectAccountsActionSheetKey
// Dependencies: [4337, 10023, 1934, 4098, 10015, 2]
// Exports: openGuildRoleConnectionsConnectAccountModal, openGuildRoleConnectionsModal

// Module 10022 (makeGuildRoleConnectionsConnectAccountsActionSheetKey)
function makeGuildRoleConnectionsConnectAccountsActionSheetKey(id) {
  return "GuildRoleConnectionsConnectAccountsActionSheet-" + id;
}
const result = require("maybeLoadBundle").fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx");

export const openGuildRoleConnectionsModal = function openGuildRoleConnectionsModal(guildId) {
  const onClose = guildId.onClose;
  let obj = importDefault(4337);
  obj = {
    guildId: guildId.guildId,
    onClose() {
      outer1_1(outer1_2[0]).popWithKey("ROLE_CONNECTIONS_MODAL_KEY");
      if (null != onClose) {
        onClose();
      }
    }
  };
  obj.pushLazy(onClose(1934)(10023, dependencyMap.paths), obj, "ROLE_CONNECTIONS_MODAL_KEY");
};
export { makeGuildRoleConnectionsConnectAccountsActionSheetKey };
export const openGuildRoleConnectionsConnectAccountModal = function openGuildRoleConnectionsConnectAccountModal(verificationRole, guildId) {
  let obj = importDefault(4098);
  obj = { role: verificationRole, guildId };
  obj.openLazy(require(1934) /* maybeLoadBundle */(10015, dependencyMap.paths), makeGuildRoleConnectionsConnectAccountsActionSheetKey(verificationRole.id), obj);
};
