// Module ID: 9982
// Function ID: 77197
// Name: makeGuildRoleConnectionsConnectAccountsActionSheetKey
// Dependencies: []
// Exports: openGuildRoleConnectionsConnectAccountModal, openGuildRoleConnectionsModal

// Module 9982 (makeGuildRoleConnectionsConnectAccountsActionSheetKey)
function makeGuildRoleConnectionsConnectAccountsActionSheetKey(id) {
  return "GuildRoleConnectionsConnectAccountsActionSheet-" + id;
}
const _module = require(dependencyMap[5]);
const result = _module.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx");

export const openGuildRoleConnectionsModal = function openGuildRoleConnectionsModal(guildId) {
  const require = guildId.onClose;
  let obj = importDefault(dependencyMap[0]);
  obj = {
    guildId: guildId.guildId,
    onClose() {
      callback(closure_2[0]).popWithKey("ROLE_CONNECTIONS_MODAL_KEY");
      if (null != onClose) {
        onClose();
      }
    }
  };
  obj.pushLazy(require(dependencyMap[2])(dependencyMap[1], dependencyMap.paths), obj, "ROLE_CONNECTIONS_MODAL_KEY");
};
export { makeGuildRoleConnectionsConnectAccountsActionSheetKey };
export const openGuildRoleConnectionsConnectAccountModal = function openGuildRoleConnectionsConnectAccountModal(verificationRole, guildId) {
  let obj = importDefault(dependencyMap[3]);
  obj = { role: verificationRole, guildId };
  obj.openLazy(require(dependencyMap[2])(dependencyMap[4], dependencyMap.paths), makeGuildRoleConnectionsConnectAccountsActionSheetKey(verificationRole.id), obj);
};
