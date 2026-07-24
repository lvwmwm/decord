// Module ID: 16359
// Function ID: 127577
// Name: updateGuildRole
// Dependencies: [5, 653, 507, 5717, 686, 2]

// Module 16359 (updateGuildRole)
import set from "set";
import { Endpoints } from "ME";

const require = arg1;
function updateGuildRole(arg0) {
  return _updateGuildRole(...arguments);
}
function _updateGuildRole() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_settings/roles/GuildSettingsModalRolesActionCreators.tsx");

export default {
  startReordering(guildId) {
    let obj = importDefault(686);
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_START_REORDER", guildId };
    obj.dispatch(obj);
  },
  stopReordering() {
    importDefault(686).wait(() => outer1_1(outer1_2[4]).dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER" }));
  },
  updateRoleOrder(arg0, to) {
    let obj = importDefault(686);
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER", from: arg0, to };
    obj.dispatch(obj);
  },
  toggleRoleSetting(guildId, id, hoist, mentionable) {
    return updateGuildRole({ guildId, roleId: id.id, name: id.name, permissions: id.permissions, color: id.color, hoist, mentionable });
  },
  startEditingPermissions(guildId, roleId) {
    let obj = importDefault(686);
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_START_EDITING", guildId, roleId };
    obj.dispatch(obj);
  },
  stopEditingPermissions() {
    importDefault(686).dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING" });
  },
  allowPermission(permission) {
    let obj = importDefault(686);
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSION_ALLOW", permission };
    obj.dispatch(obj);
  },
  denyPermission(permission) {
    let obj = importDefault(686);
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY", permission };
    obj.dispatch(obj);
  },
  cancelPermissionChanges() {
    importDefault(686).dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_CANCEL" });
  },
  savePermissionChanges(arg0) {
    let color;
    let guildId;
    let hoist;
    let mentionable;
    let name;
    let permissions;
    let roleId;
    ({ guildId, roleId, name, permissions, color, hoist, mentionable } = arg0);
    importDefault(686).dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING" });
    const obj = importDefault(686);
    updateGuildRole({ guildId, roleId, name, permissions, color, hoist, mentionable }).then(() => outer1_1(outer1_2[4]).dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS" }), () => outer1_1(outer1_2[4]).dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE" }));
  }
};
