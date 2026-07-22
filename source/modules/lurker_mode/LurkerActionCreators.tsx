// Module ID: 5692
// Function ID: 49018
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: stopLurking

// Module 5692 (_createForOfIteratorHelperLoose)
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
function stopLurkingAll(items) {
  return _stopLurkingAll(...arguments);
}
async function _stopLurkingAll(ignoredGuildIds, arg1) {
  let map;
  const found = closure_5.lurkingGuildIds().filter((arg0) => !arg0.includes(arg0));
  if (0 !== found.length) {
    const _Map = Map;
    map = new Map(found.map((arg0) => {
      const items = [arg0, lurkingSourceForGuild.getLurkingSourceForGuild(arg0)];
      return items;
    }));
    let obj = map(closure_2[4]);
    obj = { type: "GUILD_STOP_LURKING", ignoredGuildIds };
    obj.dispatch(obj);
    yield Promise.all(found.map(() => {
      let closure_0 = callback(async (arg0) => {
        const value = closure_1.get(arg0);
        const HTTP = callback(closure_2[5]).HTTP;
        yield HTTP.del({ url: closure_6.GUILD_LEAVE(arg0), body: { lurking: true }, oldFormErrors: true, rejectWithError: true });
      });
      return function() {
        return callback(...arguments);
      };
    }()));
  }
}
function stopLurkingForGuild(arg0) {
  return _stopLurkingForGuild(...arguments);
}
async function _stopLurkingForGuild(arg0, arg1) {
  if (lurkingGuildIdsResult.includes(arg0)) {
    const lurkingSourceForGuild = closure_5.getLurkingSourceForGuild(tmp);
    let obj1 = callback2(closure_2[4]);
    let obj = { type: "GUILD_STOP_LURKING_FOR_GUILD", lurkingGuildId: tmp };
    obj1.dispatch(obj);
    const HTTP = callback(closure_2[5]).HTTP;
    obj = { url: closure_6.GUILD_LEAVE(tmp) };
    obj1 = { lurking: true };
    obj.body = obj1;
    obj.oldFormErrors = true;
    obj.rejectWithError = true;
    yield HTTP.del(obj);
  }
}
async function _stopLurking() {
  const fn = function*() {
    let tmp = arg0;
    if (tmp === undefined) {
      tmp = null;
    }
    let found;
    yield undefined;
    const lurkingGuildIdsResult = closure_5.lurkingGuildIds();
    if (0 !== lurkingGuildIdsResult.length) {
      if (!obj2.getMobileLurkerServerPreview("LurkerActionCreators.stopLurking").stickyLurk) {
        const items = [tmp, guildId.getGuildId()];
        found = items.filter(found(closure_2[7]).isNotNullish);
        if (obj.getMobileLurkerServerPreview("LurkerActionCreators.stopLurking").enabled) {
          const found1 = lurkingGuildIdsResult.filter((arg0) => !found.includes(arg0));
          if (found1.length > 0) {
            function* _loop(value) {
              if (obj) {
                return obj.resume();
              } else {
                const obj = {
                  onLeave() {
                      callback(arg0);
                    }
                };
                const result = value(closure_2[8]).openLurkerLeavePrompt(value, obj);
              }
            }
            const tmp10 = callback(found1);
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
                    let iter4 = tmp10();
                    iter = iter4;
                  } while (iter4.done);
                }
              }
              const tmp13 = _loop(iter.value)[Symbol.iterator]();
            }
          }
        }
        return yield closure_9(found);
      }
      const obj2 = found(closure_2[6]);
    }
  };
  fn.next();
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const Endpoints = arg1(dependencyMap[3]).Endpoints;
importDefault(dependencyMap[9]).initialize();
const importDefaultResult = importDefault(dependencyMap[9]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/lurker_mode/LurkerActionCreators.tsx");

export { stopLurkingAll };
export { stopLurkingForGuild };
export const stopLurking = function stopLurking(guildId) {
  return _stopLurking(...arguments);
};
