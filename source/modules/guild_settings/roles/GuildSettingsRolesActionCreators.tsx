// Module ID: 16194
// Function ID: 125117
// Name: _createForOfIteratorHelperLoose
// Dependencies: [0, 0, 0, 0, 0, 0, 0]
// Exports: clearRolePermissions, commitSectionChanges, discardConnectionsChanges, discardSectionChanges, init, saveRoleSettings, toggleRoleSettings, updateRoleColor, updateRoleColors, updateRoleConnectionConfigurations, updateRoleDescription, updateRoleIcon, updateRoleName, updateRolePermissionSet, updateRolePermissions, updateRoleSort, updateRoleStyles

// Module 16194 (_createForOfIteratorHelperLoose)
import closure_3 from "result";
import { ComponentActions } from "result";
import result from "result";

function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function AsyncFromSyncIterator(arg0) {
  function AsyncFromSyncIteratorContinuation(done) {
    if (Object(done) !== done) {
      const _TypeError = TypeError;
      const typeError = new TypeError(done + " is not an object.");
      return Promise.reject(typeError);
    } else {
      const AsyncFromSyncIteratorContinuation = done.done;
      const resolved = Promise.resolve(done.value);
      return resolved.then((value) => ({ value, done }));
    }
  }
  class AsyncFromSyncIterator {
    constructor(arg0) {
      this.s = arg0;
      this.n = arg0.next;
      return;
    }
  }
  const obj = {
    "Bool(false)": "o",
    "Bool(false)": "o",
    next() {
      const n = this.n;
      return AsyncFromSyncIteratorContinuation(n(...arguments));
    },
    return(value) {
      const _return = this.s.return;
      if (undefined === _return) {
        const obj = { value, done: true };
        let resolved = Promise.resolve(obj);
      } else {
        resolved = AsyncFromSyncIteratorContinuation(_return(...arguments));
      }
      return resolved;
    },
    throw(arg0) {
      const _return = this.s.return;
      if (undefined === _return) {
        let rejectResult = Promise.reject(arg0);
      } else {
        rejectResult = AsyncFromSyncIteratorContinuation(_return(...arguments));
      }
      return rejectResult;
    }
  };
  AsyncFromSyncIterator.prototype = obj;
  return new AsyncFromSyncIterator(arg0);
}
function _saveRoleSettings() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _saveRoleSettings = obj;
  return obj(...arguments);
}
result = result.fileFinishedImporting("modules/guild_settings/roles/GuildSettingsRolesActionCreators.tsx");

export const updateRoleSort = function updateRoleSort(roles) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "GUILD_SETTINGS_ROLES_SORT_UPDATE", roles };
  obj.dispatch(obj);
};
export const init = function init() {
  importDefault(dependencyMap[2]).dispatch({ type: "GUILD_SETTINGS_ROLES_INIT" });
};
export const discardSectionChanges = function discardSectionChanges(id, effectiveSection) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "GUILD_SETTINGS_ROLES_DISCARD_SECTION_CHANGES", id, section: effectiveSection };
  obj.dispatch(obj);
};
export const discardConnectionsChanges = function discardConnectionsChanges(id) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "GUILD_SETTINGS_ROLES_DISCARD_CONNECTIONS_CHANGES", id };
  obj.dispatch(obj);
};
export const commitSectionChanges = function commitSectionChanges(id, effectiveSection) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "GUILD_SETTINGS_ROLES_COMMIT_SECTION_CHANGES", id, section: effectiveSection };
  obj.dispatch(obj);
};
export const updateRolePermissions = function updateRolePermissions(id, flag, allow) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS", id, flag, allow };
  obj.dispatch(obj);
};
export const updateRolePermissionSet = function updateRolePermissionSet(id, permissions) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET", id, permissions };
  obj.dispatch(obj);
};
export const clearRolePermissions = function clearRolePermissions(id) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS", id };
  obj.dispatch(obj);
};
export const updateRoleName = function updateRoleName(id, name) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_NAME", id, name };
  obj.dispatch(obj);
};
export const updateRoleDescription = function updateRoleDescription(id, description) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION", id, description };
  obj.dispatch(obj);
};
export const updateRoleColor = function updateRoleColor(closure_2, color) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_COLOR", id: closure_2, color };
  obj.dispatch(obj);
};
export const updateRoleColors = function updateRoleColors(closure_2, colors, GRADIENT) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_COLORS", id: closure_2, colors, currentStyle: GRADIENT };
  obj.dispatch(obj);
};
export const updateRoleStyles = function updateRoleStyles(closure_2, currentStyle) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE", id: closure_2, currentStyle };
  obj.dispatch(obj);
};
export const toggleRoleSettings = function toggleRoleSettings(id, hoist, mentionable) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_SETTINGS", id, hoist, mentionable };
  obj.dispatch(obj);
};
export const updateRoleIcon = function updateRoleIcon(id, icon, unicodeEmoji) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON", id, icon, unicodeEmoji };
  obj.dispatch(obj);
};
export const updateRoleConnectionConfigurations = function updateRoleConnectionConfigurations(id, roleConnectionConfigurations) {
  let obj = importDefault(dependencyMap[2]);
  obj = { type: "GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS", roleId: id, roleConnectionConfigurations };
  obj.dispatch(obj);
};
export const saveRoleSettings = function saveRoleSettings(id, items) {
  return _saveRoleSettings(...arguments);
};
