// Module ID: 1914
// Function ID: 21584
// Name: _createForOfIteratorHelperLoose
// Dependencies: [1388, 1911, 483, 665, 1913, 2]
// Exports: fromSerializedPartition, fromSyncOperation, isGuildRoleRecord, toSerializedPartition

// Module 1914 (_createForOfIteratorHelperLoose)
import constructInPlace from "constructInPlace";
import { GuildRoleRecordTypeTag } from "GuildRoleRecordTypeTag";

let closure_3;
let closure_4;
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
function fromServerArray(id, roles) {
  let done;
  const obj = {};
  const tmp = _createForOfIteratorHelperLoose(roles);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp2 = fromServer;
      obj[value.id] = fromServer(id, value);
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  return obj;
}
function fromServer(guildId, id) {
  let flags;
  let managed;
  const obj = { id: id.id, name: id.name, guildId, permissions: importAll(483).deserialize(id.permissions) };
  ({ mentionable: obj.mentionable, position: obj.position, color: obj.color } = id);
  let int2hexResult = null;
  if (0 !== id.color) {
    int2hexResult = require(665) /* pad2 */.int2hex(id.color);
    const obj3 = require(665) /* pad2 */;
  }
  obj.colorString = int2hexResult;
  const colors = id.colors;
  let tmp5 = null;
  if (null != colors) {
    tmp5 = colors;
  }
  obj.colors = tmp5;
  let result = null;
  if (null != id.colors) {
    result = require(1913) /* extractColorStringsFromServerColors */.extractColorStringsFromServerColors(id.colors);
    const obj4 = require(1913) /* extractColorStringsFromServerColors */;
  }
  obj.colorStrings = result;
  ({ hoist: obj.hoist, managed } = id);
  obj.managed = null != managed && managed;
  let tags = id.tags;
  if (null == tags) {
    tags = {};
  }
  obj.tags = tags;
  ({ icon: obj.icon, unicode_emoji: obj.unicodeEmoji, flags } = id);
  let num3 = 0;
  if (null != flags) {
    num3 = flags;
  }
  obj.flags = num3;
  const description = id.description;
  let tmp9 = null;
  if (null != description) {
    tmp9 = description;
  }
  obj.description = tmp9;
  obj.version = id.version;
  return constructGuildRoleInPlace(obj);
}
function constructGuildRoleInPlace(arg0) {
  return callback(GuildRoleRecordTypeTag, arg0);
}
function fromSerialized(guildId, id) {
  let flags;
  let managed;
  const obj = { id: id.id, name: id.name, guildId, permissions: importAll(483).deserialize(id.permissions) };
  ({ mentionable: obj.mentionable, position: obj.position, color: obj.color } = id);
  let int2hexResult = null;
  if (null != id.color) {
    int2hexResult = null;
    if (0 !== id.color) {
      int2hexResult = require(665) /* pad2 */.int2hex(id.color);
      const obj3 = require(665) /* pad2 */;
    }
  }
  obj.colorString = int2hexResult;
  const colors = id.colors;
  let tmp5 = null;
  if (null != colors) {
    tmp5 = colors;
  }
  obj.colors = tmp5;
  let result = null;
  if (null != id.colors) {
    result = require(1913) /* extractColorStringsFromServerColors */.extractColorStringsFromServerColors(id.colors);
    const obj4 = require(1913) /* extractColorStringsFromServerColors */;
  }
  obj.colorStrings = result;
  ({ hoist: obj.hoist, managed } = id);
  obj.managed = null != managed && managed;
  let tags = id.tags;
  if (null == tags) {
    tags = {};
  }
  obj.tags = tags;
  ({ icon: obj.icon, unicodeEmoji: obj.unicodeEmoji, flags } = id);
  let num4 = 0;
  if (null != flags) {
    num4 = flags;
  }
  obj.flags = num4;
  const description = id.description;
  let tmp9 = null;
  if (null != description) {
    tmp9 = description;
  }
  obj.description = tmp9;
  obj.version = id.version;
  return constructGuildRoleInPlace(obj);
}
({ constructInPlace: closure_3, objectIsPlainRecordOfType: closure_4 } = constructInPlace);
let result = require("fromHexReverseArray").fileFinishedImporting("utils/GuildRoleRecordUtils.tsx");

export const isGuildRoleRecord = function isGuildRoleRecord(arg0) {
  return callback2(GuildRoleRecordTypeTag, arg0);
};
export { fromServerArray };
export { fromServer };
export { constructGuildRoleInPlace };
export { fromSerialized };
export const fromSyncOperation = function fromSyncOperation(id, roles, partition) {
  let done;
  let done2;
  if ("full_sync" === roles.op) {
    return fromServerArray(id, roles.items);
  } else {
    const obj = {};
    const merged = Object.assign(partition);
    const tmp11 = _createForOfIteratorHelperLoose(roles.deletes);
    let iter2 = tmp11();
    if (!iter2.done) {
      do {
        let value = iter2.value;
        delete tmp[tmp2];
        let iter = tmp11();
        iter2 = iter;
        done = iter.done;
      } while (!done);
    }
    const tmp4 = _createForOfIteratorHelperLoose(roles.writes);
    let iter3 = tmp4();
    if (!iter3.done) {
      do {
        value = iter3.value;
        let tmp5 = fromServer;
        obj[value.id] = fromServer(id, value);
        let iter4 = tmp4();
        iter3 = iter4;
        done2 = iter4.done;
      } while (!done2);
    }
    return obj;
  }
};
export const fromSerializedPartition = function fromSerializedPartition(id, roles) {
  const obj = {};
  for (const key10006 in arg1) {
    let tmp = key10006;
    let tmp2 = fromSerialized;
    obj[key10006] = fromSerialized(arg0, arg1[key10006]);
    continue;
  }
  return obj;
};
export const toSerializedPartition = function toSerializedPartition(unsafeMutableRoles) {
  let obj = {};
  for (const key10005 in arg0) {
    let tmp = key10005;
    let tmp2 = arg0[key10005];
    obj = {};
    let tmp3 = obj;
    let tmp4 = tmp2;
    let merged = Object.assign(tmp2);
    let str = tmp2.permissions;
    obj["permissions"] = str.toString();
    obj[key10005] = obj;
    continue;
  }
  return obj;
};
