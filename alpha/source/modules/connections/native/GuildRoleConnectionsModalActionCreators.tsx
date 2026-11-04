// Module ID: 11791
// Function ID: 11792
// Name: GuildRoleConnectionsModalActionCreators
// Dependencies: [6879, 11792, 2123, 5382, 11783, 2]
// Exports: makeGuildRoleConnectionsConnectAccountsActionSheetKey, openGuildRoleConnectionsConnectAccountModal, openGuildRoleConnectionsModal

// Module 11791 (GuildRoleConnectionsModalActionCreators)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import size from "module_2" /* 2 */;

const ROLE_CONNECTIONS_MODAL_KEY = "ROLE_CONNECTIONS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx");

export function openGuildRoleConnectionsModal(onClose) {
  onClose = onClose.onClose;
  const guildId = onClose.guildId;
  let obj = ModalActionCreatorsDefault;
  const obj2 = {
    guildId,
    onClose: function handleClose() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(ROLE_CONNECTIONS_MODAL_KEY);
      if (onClose != null) {
        onClose();
      }
    }
  };
  obj.pushLazy(onClose(2123)(11792, dependencyMap.paths), obj2, ROLE_CONNECTIONS_MODAL_KEY);
}
export function makeGuildRoleConnectionsConnectAccountsActionSheetKey(id) {
  return "GuildRoleConnectionsConnectAccountsActionSheet-" + id;
}
export function openGuildRoleConnectionsConnectAccountModal(verificationRole, guildId) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj = { role: verificationRole, guildId };
  const tmp2 = asyncRequire(11783, dependencyMap.paths);
  openLazy(tmp2, "GuildRoleConnectionsConnectAccountsActionSheet-" + verificationRole.id, obj);
}
