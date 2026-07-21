// Module ID: 1912
// Function ID: 21564
// Name: _createForOfIteratorHelperLoose
// Dependencies: [6, 7, 15, 17, 18]
// Exports: doesRoleSortHigher, filterRoleDeletes, inviteRoleToDisplayData, sortGuildRoleRecords, sortInviteRoles

// Module 1912 (_createForOfIteratorHelperLoose)
import _inherits from "_inherits";

function _createForOfIteratorHelperLoose(@@iterator) {
  let require = Symbol_iterator;
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
      require = tmp;
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
function compareGuildRoles(guildId, id) {
  guildId = guildId.guildId;
  if (guildId.id === guildId) {
    let num3 = 1;
    if (id.id === guildId) {
      num3 = importDefault(dependencyMap[0]).compare(guildId.id, id.id);
      const obj2 = importDefault(dependencyMap[0]);
    }
    let num = num3;
  } else {
    num = -1;
    if (id.id !== guildId) {
      if (guildId.position !== id.position) {
        let diff = id.position - guildId.position;
      } else {
        diff = importDefault(dependencyMap[0]).compare(guildId.id, id.id);
        const obj = importDefault(dependencyMap[0]);
      }
    }
  }
  return num;
}
const result = _inherits.fileFinishedImporting("utils/GuildRoleUtils.tsx");

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
    diff = importDefault(dependencyMap[0]).compare(position.id, position2.id);
    const obj = importDefault(dependencyMap[0]);
  }
  return diff;
};
export const inviteRoleToDisplayData = function inviteRoleToDisplayData(id, id) {
  const obj = { id: id.id, name: id.name, guildId: id };
  let int2hexResult = null;
  if (0 !== id.color) {
    int2hexResult = require(dependencyMap[1]).int2hex(id.color);
    const obj2 = require(dependencyMap[1]);
  }
  obj.colorString = int2hexResult;
  let result = null;
  if (null != id.colors) {
    result = require(dependencyMap[2]).extractColorStringsFromServerColors(id.colors);
    const obj3 = require(dependencyMap[2]);
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
      const tmp2 = _createForOfIteratorHelperLoose(items1);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let value = iter.value;
          delete r1[r2];
          let iter2 = tmp2();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
    const tmp4 = _createForOfIteratorHelperLoose(items);
    let iter3 = tmp4();
    if (!iter3.done) {
      do {
        value = iter3.value;
        let tmp5 = closure_2;
        let tmp6 = closure_3;
        obj = closure_2(closure_3[3]);
        obj[value.id] = obj.fromServer(id, value);
        let iter4 = tmp4();
        iter3 = iter4;
        done2 = iter4.done;
      } while (!done2);
    }
    return obj;
  }
};
