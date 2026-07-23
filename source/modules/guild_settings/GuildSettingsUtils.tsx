// Module ID: 16327
// Function ID: 127399
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1911, 653, 483, 15514, 2]
// Exports: getPowerfulPermissionTitles, isRolePowerful

// Module 16327 (_createForOfIteratorHelperLoose)
import { hasPermission } from "GuildRoleRecordTypeTag";
import ME from "ME";

let closure_4;
let closure_5;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
({ ElevatedPermissions: closure_4, ElevatedPermissionsList: closure_5 } = ME);
const result = require("fromHexReverseArray").fileFinishedImporting("modules/guild_settings/GuildSettingsUtils.tsx");

export const isRolePowerful = function isRolePowerful(role) {
  return importAll(483).hasAny(role.permissions, closure_4);
};
export const getPowerfulPermissionTitles = function getPowerfulPermissionTitles(id) {
  let iter2;
  const items = [];
  const guildPermissionSpecMap = importDefault(15514).getGuildPermissionSpecMap(id);
  const tmp2 = _createForOfIteratorHelperLoose(closure_5);
  let iter = tmp2();
  if (!iter.done) {
    do {
      let str = iter.value;
      let tmp3 = hasPermission;
      if (hasPermission(arg1, str)) {
        let arr = items.push(guildPermissionSpecMap[str.toString(str)].title);
      }
      iter2 = tmp2();
      iter = iter2;
    } while (!iter2.done);
  }
  return items;
};
