// Module ID: 16159
// Function ID: 124696
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16159 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getSortedRoleIds(sortedRoles) {
  return sortedRoles.map((id) => id.id);
}
function handleGuildRoleCreateOrUpdate(arg0) {
  if (closure_13) {
    let closure_14 = getSortedRoleIds(store.getSortedRoles(tmp));
  }
}
function handleCancelEditingPermissions() {
  if (null != closure_18) {
    if (closure_18 !== closure_17) {
      closure_18 = closure_17;
      let closure_19 = false;
    }
  }
  return false;
}
function checkForPermissionChanges() {
  let closure_19 = closure_17 !== closure_18;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const FormStates = arg1(dependencyMap[7]).FormStates;
const CLOSED = FormStates.CLOSED;
let closure_13 = false;
let closure_14 = null;
let closure_15 = null;
let closure_16 = null;
let closure_17 = null;
let closure_18 = null;
let closure_19 = false;
let closure_20 = null;
let closure_21 = false;
let tmp2 = (Store) => {
  class GuildSettingsModalRolesStore {
    constructor() {
      self = this;
      tmp = closure_4(this, GuildSettingsModalRolesStore);
      obj = closure_7(GuildSettingsModalRolesStore);
      tmp2 = closure_6;
      if (closure_22()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildSettingsModalRolesStore;
  callback2(GuildSettingsModalRolesStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_10, closure_9);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "submitting",
    get() {
      return closure_12 === constants.SUBMITTING;
    }
  };
  items[1] = obj;
  obj = {
    key: "getUpdates",
    value() {
      if (null != closure_14) {
        if (null != user) {
          let obj = callback(closure_3[8]);
          obj = {
            oldOrdering: store.getSortedRoles(user.id),
            newOrdering: store.getManyRoles(user.id, closure_14),
            idGetter(id) {
                  return id.id;
                },
            existingPositionGetter(position) {
                  return position.position;
                },
            ascending: false
          };
          const result = obj.calculatePositionDeltas(obj);
        }
        return [];
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "order",
    get() {
      return closure_14;
    }
  };
  items[4] = {
    key: "guild",
    get() {
      return closure_15;
    }
  };
  items[5] = {
    key: "role",
    get() {
      return closure_16;
    }
  };
  items[6] = {
    key: "permissions",
    get() {
      return closure_18;
    }
  };
  items[7] = {
    key: "hasPermissionChanges",
    get() {
      return closure_19;
    }
  };
  return callback(GuildSettingsModalRolesStore, items);
}(importDefault(dependencyMap[12]).Store);
tmp2.displayName = "GuildSettingsModalRolesStore";
tmp2 = new tmp2(importDefault(dependencyMap[13]), {
  GUILD_SETTINGS_MODAL_ROLES_START_REORDER: function handleStartReorder(guildId) {
    guildId = guildId.guildId;
    let closure_13 = true;
    let closure_14 = getSortedRoleIds(store.getSortedRoles(guildId));
    const guild = store2.getGuild(guildId);
    clearTimeout(closure_20);
  },
  GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER: function handleStopReorder() {
    let closure_13 = false;
    let closure_15 = null;
    if (!closure_21) {
      let closure_14 = null;
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER: function handleUpdateOrder(arg0) {
    let from;
    let to;
    ({ from, to } = arg0);
    if (null == closure_14) {
      return false;
    } else {
      const moveItemFromToResult = importDefault(dependencyMap[8]).moveItemFromTo(closure_14, from, to);
      closure_14 = moveItemFromToResult;
      if (moveItemFromToResult[from] !== closure_14[from]) {
        const AccessibilityAnnouncer2 = arg1(dependencyMap[9]).AccessibilityAnnouncer;
        const intl2 = arg1(dependencyMap[10]).intl;
        const obj = { from: from + 1, to: to + 1 };
        AccessibilityAnnouncer2.announce(intl2.formatToPlainString(arg1(dependencyMap[10]).t.+tmElp, obj));
      } else {
        const AccessibilityAnnouncer = arg1(dependencyMap[9]).AccessibilityAnnouncer;
        const intl = arg1(dependencyMap[10]).intl;
        AccessibilityAnnouncer.announce(intl.string(arg1(dependencyMap[10]).t.WaxXjc));
      }
    }
  },
  GUILD_ROLE_CREATE: handleGuildRoleCreateOrUpdate,
  GUILD_ROLE_UPDATE: handleGuildRoleCreateOrUpdate,
  GUILD_ROLE_DELETE: function handleGuildRoleDelete(arg0) {
    if (null == arr) {
      return false;
    } else {
      const index = arr.indexOf(tmp);
      if (-1 === index) {
        return false;
      } else {
        arr.splice(index, 1);
      }
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_START_EDITING: function handleStartEditingPermissions(guildId) {
    const guild = store2.getGuild(guildId.guildId);
    const id = guild;
    let role;
    if (null != guild) {
      role = store.getRole(id.id, guildId.roleId);
    }
    let permissions = role;
    if (null != role) {
      permissions = permissions.permissions;
      let closure_18 = permissions;
      let closure_17 = permissions;
    }
    const CLOSED = FormStates.OPEN;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING: function handleStopEditingPermissions() {
    let closure_18 = null;
    let closure_17 = null;
    let closure_16 = null;
    let closure_15 = null;
    let closure_19 = false;
    const CLOSED = FormStates.CLOSED;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_CANCEL: handleCancelEditingPermissions,
  GUILD_SETTINGS_MODAL_ROLES_PERMISSION_ALLOW: function handleAllowPermission(arg0) {
    if (null == closure_18) {
      return false;
    } else {
      closure_18 = importAll(dependencyMap[11]).add(closure_18, tmp);
      checkForPermissionChanges();
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY: function handleDenyPermission(arg0) {
    if (null == closure_18) {
      return false;
    } else {
      closure_18 = importAll(dependencyMap[11]).remove(closure_18, tmp);
      checkForPermissionChanges();
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING: function handleSubmitPermissions() {
    const CLOSED = FormStates.SUBMITTING;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS: function handleSubmitPermissionsSuccess() {
    const CLOSED = FormStates.OPEN;
    let closure_17 = closure_18;
    checkForPermissionChanges();
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE: function handleSubmitPermissionsFailure() {
    const CLOSED = FormStates.OPEN;
    handleCancelEditingPermissions();
  },
  GUILD_SETTINGS_SUBMIT: function handleSubmit() {
    let closure_21 = true;
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function handleSubmitSuccess() {
    let closure_21 = false;
    clearTimeout(timeout);
    const timeout = setTimeout(() => {
      let closure_14 = null;
    }, 400);
  }
});
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_settings/roles/GuildSettingsModalRolesStore.tsx");

export default tmp2;
