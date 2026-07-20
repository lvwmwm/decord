// Module ID: 1914
// Function ID: 21578
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: fromSerializedPartition, fromSyncOperation, isGuildRoleRecord, toSerializedPartition

// Module 1914 (_createForOfIteratorHelperLoose)
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
function fromServerArray(id, roles) {
  let done;
  const obj = {};
  const tmp = _createForOfIteratorHelperLoose(roles);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp2 = closure_9;
      obj[value.id] = closure_9(id, value);
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
  const obj = { id: id.id, name: id.name, guildId, permissions: importAll(dependencyMap[2]).deserialize(id.permissions) };
  ({ mentionable: obj.mentionable, position: obj.position, color: obj.color } = id);
  let int2hexResult = null;
  if (0 !== id.color) {
    int2hexResult = require(dependencyMap[3]).int2hex(id.color);
    const obj3 = require(dependencyMap[3]);
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
    result = require(dependencyMap[4]).extractColorStringsFromServerColors(id.colors);
    const obj4 = require(dependencyMap[4]);
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
  const obj = { id: id.id, name: id.name, guildId, permissions: importAll(dependencyMap[2]).deserialize(id.permissions) };
  ({ mentionable: obj.mentionable, position: obj.position, color: obj.color } = id);
  let int2hexResult = null;
  if (null != id.color) {
    int2hexResult = null;
    if (0 !== id.color) {
      int2hexResult = require(dependencyMap[3]).int2hex(id.color);
      const obj3 = require(dependencyMap[3]);
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
    result = require(dependencyMap[4]).extractColorStringsFromServerColors(id.colors);
    const obj4 = require(dependencyMap[4]);
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
const _module = require(dependencyMap[0]);
({ constructInPlace: closure_3, objectIsPlainRecordOfType: closure_4 } = _module);
const GuildRoleRecordTypeTag = require(dependencyMap[1]).GuildRoleRecordTypeTag;
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("utils/GuildRoleRecordUtils.tsx");

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
    const tmp9 = _createForOfIteratorHelperLoose(roles.deletes);
    let iter2 = tmp9();
    if (!iter2.done) {
      do {
        let value = iter2.value;
        delete r1[r2];
        let iter = tmp9();
        iter2 = iter;
        done = iter.done;
      } while (!done);
    }
    const tmp2 = _createForOfIteratorHelperLoose(roles.writes);
    let iter3 = tmp2();
    if (!iter3.done) {
      do {
        value = iter3.value;
        let tmp3 = closure_9;
        obj[value.id] = closure_9(id, value);
        let iter4 = tmp2();
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
    let tmp2 = closure_11;
    obj[key10006] = closure_11(arg0, arg1[key10006]);
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
  }
  return obj;
};
