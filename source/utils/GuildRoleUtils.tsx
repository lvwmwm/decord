// Module ID: 1912
// Function ID: 21571
// Name: _createForOfIteratorHelperLoose
// Dependencies: [21, 665, 1913, 1914, 2]
// Exports: doesRoleSortHigher, filterRoleDeletes, inviteRoleToDisplayData, sortGuildRoleRecords, sortInviteRoles

// Module 1912 (_createForOfIteratorHelperLoose)
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
function compareGuildRoles(guildId, id) {
  guildId = guildId.guildId;
  if (guildId.id === guildId) {
    let num3 = 1;
    if (id.id === guildId) {
      num3 = importDefault(21).compare(guildId.id, id.id);
      const obj2 = importDefault(21);
    }
    let num = num3;
  } else {
    num = -1;
    if (id.id !== guildId) {
      if (guildId.position !== id.position) {
        let diff = id.position - guildId.position;
      } else {
        diff = importDefault(21).compare(guildId.id, id.id);
        const obj = importDefault(21);
      }
    }
  }
  return num;
}
let result = require("extractColorStringsFromServerColors").fileFinishedImporting("utils/GuildRoleUtils.tsx");

export const sortGuildRoleRecords = function sortGuildRoleRecords(arr) {
  const sorted = arr.sort(compareGuildRoles);
  return arr;
};
export { compareGuildRoles };
export const doesRoleSortHigher = function doesRoleSortHigher(highestRole, role) {
  return compareGuildRoles(highestRole, role) < 0;
};
export const sortInviteRoles = function sortInviteRoles(position, position2) {
  if (position.position !== position2.position) {
    let diff = position2.position - position.position;
  } else {
    diff = importDefault(21).compare(position.id, position2.id);
    const obj = importDefault(21);
  }
  return diff;
};
export const inviteRoleToDisplayData = function inviteRoleToDisplayData(id, id) {
  const obj = { id: id.id, name: id.name, guildId: id };
  let int2hexResult = null;
  if (0 !== id.color) {
    int2hexResult = require(665) /* pad2 */.int2hex(id.color);
    const obj2 = require(665) /* pad2 */;
  }
  obj.colorString = int2hexResult;
  let result = null;
  if (null != id.colors) {
    result = require(1913) /* extractColorStringsFromServerColors */.extractColorStringsFromServerColors(id.colors);
    const obj3 = require(1913) /* extractColorStringsFromServerColors */;
  }
  obj.colorStrings = result;
  const icon = id.icon;
  let tmp7 = null;
  if (null != icon) {
    tmp7 = icon;
  }
  obj.icon = tmp7;
  const unicode_emoji = id.unicode_emoji;
  let tmp8 = null;
  if (null != unicode_emoji) {
    tmp8 = unicode_emoji;
  }
  obj.unicodeEmoji = tmp8;
  return obj;
};
export const filterRoleDeletes = function filterRoleDeletes(id, nullablePartition, roles, deleted_role_ids) {
  let done;
  let done2;
  let items = roles;
  let items1 = deleted_role_ids;
  if (roles === undefined) {
    items = [];
  }
  if (items1 === undefined) {
    items1 = [];
  }
  if (items1.length + items.length === 0) {
    return nullablePartition;
  } else {
    let obj = {};
    const merged = Object.assign(nullablePartition);
    if (null != items1) {
      const tmp4 = _createForOfIteratorHelperLoose(items1);
      let iter = tmp4();
      if (!iter.done) {
        do {
          let value = iter.value;
          delete tmp[tmp2];
          let iter2 = tmp4();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
    const tmp6 = _createForOfIteratorHelperLoose(items);
    let iter3 = tmp6();
    if (!iter3.done) {
      do {
        value = iter3.value;
        let tmp7 = importAll;
        let tmp8 = dependencyMap;
        obj = importAll(1914);
        obj[value.id] = obj.fromServer(id, value);
        let iter4 = tmp6();
        iter3 = iter4;
        done2 = iter4.done;
      } while (!done2);
    }
    return obj;
  }
};
