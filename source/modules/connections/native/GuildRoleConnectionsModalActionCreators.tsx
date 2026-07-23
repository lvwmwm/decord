// Module ID: 9990
// Function ID: 77237
// Name: makeGuildRoleConnectionsConnectAccountsActionSheetKey
// Dependencies: [4337, 9991, 1934, 4098, 9983, 2]
// Exports: openGuildRoleConnectionsConnectAccountModal, openGuildRoleConnectionsModal

// Module 9990 (makeGuildRoleConnectionsConnectAccountsActionSheetKey)
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
  obj.pushLazy(onClose(1934)(9991, dependencyMap.paths), obj, "ROLE_CONNECTIONS_MODAL_KEY");
};
export { makeGuildRoleConnectionsConnectAccountsActionSheetKey };
export const openGuildRoleConnectionsConnectAccountModal = function openGuildRoleConnectionsConnectAccountModal(verificationRole, guildId) {
  let obj = importDefault(4098);
  obj = { role: verificationRole, guildId };
  obj.openLazy(require(1934) /* maybeLoadBundle */(9983, dependencyMap.paths), makeGuildRoleConnectionsConnectAccountsActionSheetKey(verificationRole.id), obj);
};
