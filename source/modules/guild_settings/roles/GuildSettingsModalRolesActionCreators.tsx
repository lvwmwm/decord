// Module ID: 16187
// Function ID: 125038
// Name: updateGuildRole
// Dependencies: []

// Module 16187 (updateGuildRole)
function updateGuildRole(arg0) {
  return _updateGuildRole(...arguments);
}
function _updateGuildRole() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _updateGuildRole = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_settings/roles/GuildSettingsModalRolesActionCreators.tsx");

export default {
  startReordering(guildId) {
    let obj = importDefault(dependencyMap[4]);
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_START_REORDER", guildId };
    obj.dispatch(obj);
  },
  stopReordering() {
    importDefault(dependencyMap[4]).wait(() => callback(closure_2[4]).dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER" }));
  },
  updateRoleOrder(arg0, to) {
    let obj = importDefault(dependencyMap[4]);
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER", from: arg0, to };
    obj.dispatch(obj);
  },
  toggleRoleSetting(guildId, id, hoist, mentionable) {
    return updateGuildRole({ guildId, roleId: id.id, name: id.name, permissions: id.permissions, color: id.color, hoist, mentionable });
  },
  startEditingPermissions(guildId, roleId) {
    let obj = importDefault(dependencyMap[4]);
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_START_EDITING", guildId, roleId };
    obj.dispatch(obj);
  },
  stopEditingPermissions() {
    importDefault(dependencyMap[4]).dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING" });
  },
  allowPermission(permission) {
    let obj = importDefault(dependencyMap[4]);
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSION_ALLOW", permission };
    obj.dispatch(obj);
  },
  denyPermission(permission) {
    let obj = importDefault(dependencyMap[4]);
    obj = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY", permission };
    obj.dispatch(obj);
  },
  cancelPermissionChanges() {
    importDefault(dependencyMap[4]).dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_CANCEL" });
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
    importDefault(dependencyMap[4]).dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING" });
    const obj = importDefault(dependencyMap[4]);
    updateGuildRole({ guildId, roleId, name, permissions, color, hoist, mentionable }).then(() => callback(closure_2[4]).dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS" }), () => callback(closure_2[4]).dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE" }));
  }
};
