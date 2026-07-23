// Module ID: 5697
// Function ID: 49045
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 4202, 3759, 653, 686, 507, 5698, 1327, 5699, 5715, 2]
// Exports: stopLurking

// Module 5697 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import { Endpoints } from "ME";
import importDefaultResult from "_createForOfIteratorHelperLoose";

const require = arg1;
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
function stopLurkingAll(items) {
  return _stopLurkingAll(...arguments);
}
async function _stopLurkingAll(arg0, arg1) {
  let closure_0 = arg0;
  let map;
  const found = outer2_5.lurkingGuildIds().filter((arg0) => !ignoredGuildIds.includes(arg0));
  if (0 !== found.length) {
    const _Map = Map;
    map = new Map(found.map((arg0) => {
      const items = [arg0, outer3_5.getLurkingSourceForGuild(arg0)];
      return items;
    }));
    let obj = outer2_1(outer2_2[4]);
    obj = { type: "GUILD_STOP_LURKING", ignoredGuildIds: arg0 };
    obj.dispatch(obj);
    yield Promise.all(found.map((() => {
      let closure_0 = outer3_3(async (arg0) => {
        const value = outer2_1.get(arg0);
        const HTTP = outer5_0(outer5_2[5]).HTTP;
        yield HTTP.del({ url: outer5_6.GUILD_LEAVE(arg0), body: { lurking: true }, oldFormErrors: true, rejectWithError: true });
      });
      return function() {
        return callback(...arguments);
      };
    })()));
  }
}
function stopLurkingForGuild(closure_0) {
  return _stopLurkingForGuild(...arguments);
}
async function _stopLurkingForGuild(arg0, arg1) {
  if (lurkingGuildIdsResult.includes(arg0)) {
    const lurkingSourceForGuild = outer2_5.getLurkingSourceForGuild(tmp);
    let obj1 = outer2_1(outer2_2[4]);
    let obj = { type: "GUILD_STOP_LURKING_FOR_GUILD", lurkingGuildId: tmp };
    obj1.dispatch(obj);
    const HTTP = outer2_0(outer2_2[5]).HTTP;
    obj = { url: outer2_6.GUILD_LEAVE(tmp) };
    obj1 = { lurking: true };
    obj.body = obj1;
    obj.oldFormErrors = true;
    obj.rejectWithError = true;
    yield HTTP.del(obj);
  }
}
async function _stopLurking() {
  let iter = (function*() {
    let tmp = arg0;
    if (tmp === undefined) {
      tmp = null;
    }
    let found;
    yield undefined;
    const lurkingGuildIdsResult = outer2_5.lurkingGuildIds();
    if (0 !== lurkingGuildIdsResult.length) {
      if (!obj2.getMobileLurkerServerPreview("LurkerActionCreators.stopLurking").stickyLurk) {
        const items = [tmp, outer2_4.getGuildId()];
        found = items.filter(outer2_0(outer2_2[7]).isNotNullish);
        if (obj.getMobileLurkerServerPreview("LurkerActionCreators.stopLurking").enabled) {
          const found1 = lurkingGuildIdsResult.filter((arg0) => !found.includes(arg0));
          if (found1.length > 0) {
            function* _loop(value) {
              if (obj) {
                return obj.resume();
              } else {
                let closure_0 = value;
                obj = {
                  onLeave() {
                      outer5_11(closure_0);
                    }
                };
                const result = outer4_0(outer4_2[8]).openLurkerLeavePrompt(value, obj);
              }
            }
            const tmp10 = outer2_7(found1);
            let iter = tmp10();
            if (!iter.done) {
              const _Symbol = Symbol;
              const _loopResult = _loop(iter.value);
              HermesBuiltin.ensureObject("iterator is not an object");
              while (true) {
                let iter2 = tmp16(undefined);
                let tmp17 = iter2;
                let str6 = "iterator.next() did not return an object";
                let ensureObjectResult1 = HermesBuiltin.ensureObject("iterator.next() did not return an object");
                if (!iter2.done) {
                  break;
                } else {
                  do {
                    let value = iter3.value;
                    iter4 = tmp10();
                    iter = iter4;
                  } while (iter4.done);
                }
              }
              const tmp13 = _loop(iter.value)[Symbol.iterator]();
            }
          }
        }
        return yield outer2_9(found);
      }
      obj2 = outer2_0(outer2_2[6]);
    }
  })();
  iter.next();
  return iter;
}
require("_createForOfIteratorHelperLoose").initialize();
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/lurker_mode/LurkerActionCreators.tsx");

export { stopLurkingAll };
export { stopLurkingForGuild };
export const stopLurking = function stopLurking(guildId) {
  return _stopLurking(...arguments);
};
