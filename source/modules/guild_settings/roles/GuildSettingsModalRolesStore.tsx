// Module ID: 16346
// Function ID: 127327
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1910, 1838, 653, 11485, 3976, 1212, 483, 566, 686, 2]

// Module 16346 (_isNativeReflectConstruct)
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_9 from "_createForOfIteratorHelperLoose";
import closure_10 from "_createForOfIteratorHelperLoose";
import { FormStates } from "ME";

const require = arg1;
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
  if (c13) {
    let closure_14 = getSortedRoleIds(store.getSortedRoles(tmp));
  }
}
function handleCancelEditingPermissions() {
  if (null != closure_18) {
    if (closure_18 !== c17) {
      closure_18 = c17;
      let c19 = false;
    }
  }
  return false;
}
function checkForPermissionChanges() {
  let closure_19 = c17 !== c18;
}
let CLOSED = FormStates.CLOSED;
let c13 = false;
let c14 = null;
let c15 = null;
let c16 = null;
let c17 = null;
let c18 = null;
let c19 = false;
let c20 = null;
let c21 = false;
let tmp2 = ((Store) => {
  class GuildSettingsModalRolesStore {
    constructor() {
      self = this;
      tmp = outer1_4(this, GuildSettingsModalRolesStore);
      obj = outer1_7(GuildSettingsModalRolesStore);
      tmp2 = outer1_6;
      if (outer1_22()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_7;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_7(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildSettingsModalRolesStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_10, outer1_9);
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "submitting",
    get() {
      return outer1_12 === outer1_11.SUBMITTING;
    }
  };
  items[1] = obj;
  obj = {
    key: "getUpdates",
    value() {
      if (null != outer1_14) {
        if (null != outer1_15) {
          let obj = outer1_1(outer1_3[8]);
          obj = {
            oldOrdering: outer1_9.getSortedRoles(outer1_15.id),
            newOrdering: outer1_9.getManyRoles(outer1_15.id, outer1_14),
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
      return outer1_14;
    }
  };
  items[4] = {
    key: "guild",
    get() {
      return outer1_15;
    }
  };
  items[5] = {
    key: "role",
    get() {
      return outer1_16;
    }
  };
  items[6] = {
    key: "permissions",
    get() {
      return outer1_18;
    }
  };
  items[7] = {
    key: "hasPermissionChanges",
    get() {
      return outer1_19;
    }
  };
  return callback(GuildSettingsModalRolesStore, items);
})(require("initialize").Store);
tmp2.displayName = "GuildSettingsModalRolesStore";
tmp2 = new tmp2(require("dispatcher"), {
  GUILD_SETTINGS_MODAL_ROLES_START_REORDER: function handleStartReorder(guildId) {
    guildId = guildId.guildId;
    let c13 = true;
    let closure_14 = getSortedRoleIds(store.getSortedRoles(guildId));
    const guild = store2.getGuild(guildId);
    clearTimeout(c20);
  },
  GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER: function handleStopReorder() {
    let c13 = false;
    let c15 = null;
    if (!c21) {
      let c14 = null;
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER: function handleUpdateOrder(arg0) {
    let from;
    let to;
    ({ from, to } = arg0);
    if (null == _null) {
      return false;
    } else {
      const moveItemFromToResult = importDefault(11485).moveItemFromTo(_null, from, to);
      _null = moveItemFromToResult;
      if (moveItemFromToResult[from] !== _null[from]) {
        const AccessibilityAnnouncer2 = require(3976) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
        const intl2 = require(1212) /* getSystemLocale */.intl;
        const obj = { from: from + 1, to: to + 1 };
        AccessibilityAnnouncer2.announce(intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["+tmElp"], obj));
      } else {
        const AccessibilityAnnouncer = require(3976) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
        const intl = require(1212) /* getSystemLocale */.intl;
        AccessibilityAnnouncer.announce(intl.string(require(1212) /* getSystemLocale */.t.WaxXjc));
      }
    }
  },
  GUILD_ROLE_CREATE: handleGuildRoleCreateOrUpdate,
  GUILD_ROLE_UPDATE: handleGuildRoleCreateOrUpdate,
  GUILD_ROLE_DELETE: function handleGuildRoleDelete(arg0) {
    if (null == _null) {
      return false;
    } else {
      const index = _null.indexOf(tmp);
      if (-1 === index) {
        return false;
      } else {
        _null.splice(index, 1);
      }
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_START_EDITING: function handleStartEditingPermissions(guildId) {
    const guild = store2.getGuild(guildId.guildId);
    let role;
    if (null != guild) {
      role = store.getRole(guild.id, guildId.roleId);
    }
    if (null != role) {
      const permissions = role.permissions;
    }
    const OPEN = FormStates.OPEN;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING: function handleStopEditingPermissions() {
    let c18 = null;
    let c17 = null;
    let c16 = null;
    let c15 = null;
    let c19 = false;
    const CLOSED = FormStates.CLOSED;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_CANCEL: handleCancelEditingPermissions,
  GUILD_SETTINGS_MODAL_ROLES_PERMISSION_ALLOW: function handleAllowPermission(arg0) {
    if (null == closure_18) {
      return false;
    } else {
      closure_18 = importAll(483).add(closure_18, tmp);
      checkForPermissionChanges();
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY: function handleDenyPermission(arg0) {
    if (null == closure_18) {
      return false;
    } else {
      closure_18 = importAll(483).remove(closure_18, tmp);
      checkForPermissionChanges();
    }
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING: function handleSubmitPermissions() {
    const SUBMITTING = FormStates.SUBMITTING;
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS: function handleSubmitPermissionsSuccess() {
    const OPEN = FormStates.OPEN;
    let closure_17 = c18;
    checkForPermissionChanges();
  },
  GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE: function handleSubmitPermissionsFailure() {
    const OPEN = FormStates.OPEN;
    handleCancelEditingPermissions();
  },
  GUILD_SETTINGS_SUBMIT: function handleSubmit() {
    let c21 = true;
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function handleSubmitSuccess() {
    let c21 = false;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      const outer1_14 = null;
    }, 400);
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/guild_settings/roles/GuildSettingsModalRolesStore.tsx");

export default tmp2;
