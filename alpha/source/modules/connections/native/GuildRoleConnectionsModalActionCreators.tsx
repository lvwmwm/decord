// Module ID: 10719
// Function ID: 10720
// Name: GuildRoleConnectionsModalActionCreators
// Dependencies: [5934, 10720, 2000, 5056, 10711, 2]
// Exports: makeGuildRoleConnectionsConnectAccountsActionSheetKey, openGuildRoleConnectionsConnectAccountModal, openGuildRoleConnectionsModal

// Module 10719 (GuildRoleConnectionsModalActionCreators)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const ROLE_CONNECTIONS_MODAL_KEY = "ROLE_CONNECTIONS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/connections/native/GuildRoleConnectionsModalActionCreators.tsx");

export const openGuildRoleConnectionsModal = function openGuildRoleConnectionsModal(onClose) {
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
  obj.pushLazy(onClose(2000)(10720, dependencyMap.paths), obj2, ROLE_CONNECTIONS_MODAL_KEY);
};
export const makeGuildRoleConnectionsConnectAccountsActionSheetKey = function makeGuildRoleConnectionsConnectAccountsActionSheetKey(id) {
  return "GuildRoleConnectionsConnectAccountsActionSheet-" + id;
};
export const openGuildRoleConnectionsConnectAccountModal = function openGuildRoleConnectionsConnectAccountModal(verificationRole, guildId) {
  const openLazy = ActionSheetActionCreatorsDefault.openLazy;
  ActionSheetActionCreatorsDefault;
  const obj = { role: verificationRole, guildId };
  const tmp2 = asyncRequire(10711, dependencyMap.paths);
  openLazy(tmp2, "GuildRoleConnectionsConnectAccountsActionSheet-" + verificationRole.id, obj);
};
