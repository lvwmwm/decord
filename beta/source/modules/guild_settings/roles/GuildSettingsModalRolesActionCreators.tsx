// Module ID: 17788
// Function ID: 17789
// Name: GuildSettingsModalRolesActionCreators
// Dependencies: [5, 1085, 1282, 6826, 584, 2]

// Module 17788 (GuildSettingsModalRolesActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

function updateGuildRole() {
  return obj(...arguments);
}
let obj = function _updateGuildRole() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let color;
    let obj4;
    let obj6;
    let closure_0 = arg0;
    ({ guildId: c0, roleId: c1, name: c2, permissions: c3, color: c4, hoist: c5, mentionable: c6 } = closure_0);
    await "Reflect";
    const HTTP = closure_131_0(closure_131_2[2]).HTTP;
    const request = { url: closure_131_4.GUILD_ROLE(c0, color), body: obj6, oldFormErrors: true, rejectWithError: obj4.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj6 = { name, permissions, color, hoist, mentionable };
    if (c4 == null) {
      color = 0;
    }
    obj4 = closure_131_0(closure_131_2[2]);
    const value = await patch(request);
    obj = closure_131_1(closure_131_2[3]);
    const result = obj.checkGuildTemplateDirty(c0);
    return value;
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
obj = {
  startReordering(guildId) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_MODAL_ROLES_START_REORDER", guildId };
    obj.dispatch(obj2);
  },
  stopReordering() {
    obj = DispatcherDefault;
    obj.wait(() => {
      obj = DispatcherDefault;
      return obj.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER" });
    });
  },
  updateRoleOrder(from, to) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER", from, to };
    obj.dispatch(obj2);
  },
  toggleRoleSetting(guildId, id, hoist, mentionable) {
    obj = { guildId, roleId: id.id, name: id.name, permissions: id.permissions, color: id.color, hoist, mentionable };
    return updateGuildRole(obj);
  },
  startEditingPermissions(guildId, roleId) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_START_EDITING", guildId, roleId };
    obj.dispatch(obj2);
  },
  stopEditingPermissions() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING" });
  },
  allowPermission(permission) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSION_ALLOW", permission };
    obj.dispatch(obj2);
  },
  denyPermission(permission) {
    obj = DispatcherDefault;
    const obj2 = { type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY", permission };
    obj.dispatch(obj2);
  },
  cancelPermissionChanges() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_CANCEL" });
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
    obj = DispatcherDefault;
    obj.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING" });
    const promise = updateGuildRole({ guildId, roleId, name, permissions, color, hoist, mentionable });
    promise.then(() => {
      obj = DispatcherDefault;
      return obj.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS" });
    }, () => {
      obj = DispatcherDefault;
      return obj.dispatch({ type: "GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE" });
    });
  }
};
let result = size.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsModalRolesActionCreators.tsx");

export default obj;
