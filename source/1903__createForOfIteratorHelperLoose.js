// Module ID: 1903
// Function ID: 21359
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: deserializeChannel, deserializeChannelEntries

// Module 1903 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importAll = Symbol_iterator;
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
      importAll = tmp;
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
function deserializeChannels(arg0) {
  let iter2;
  const tmp = _createForOfIteratorHelperLoose(arg0);
  let iter = tmp();
  if (!iter.done) {
    do {
      let permissionOverwrites_ = iter.value.permissionOverwrites_;
      if (null != permissionOverwrites_) {
        let tmp2 = permissionOverwrites_;
        for (const key10012 in permissionOverwrites_) {
          let tmp3 = key10012;
          let tmp4 = permissionOverwrites_[key10012];
          let tmp5 = closure_0;
          let tmp6 = closure_1;
          let obj = closure_0(closure_1[1]);
          tmp4.allow = obj.deserialize(tmp4.allow);
          let obj2 = closure_0(closure_1[1]);
          tmp4.deny = obj2.deserialize(tmp4.deny);
        }
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
}
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/cache/deserializeChannels.tsx");

export default deserializeChannels;
export const deserializeChannelEntries = function deserializeChannelEntries(guildChannels) {
  let done;
  const tmp = _createForOfIteratorHelperLoose(guildChannels);
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = closure_2;
      let tmp3 = closure_2(iter.value, 2);
      let first = tmp3[0];
      let tmp5 = closure_5;
      let tmp6 = closure_5(tmp3[1]);
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
};
export const deserializeChannel = function deserializeChannel(permissionOverwrites_) {
  permissionOverwrites_ = permissionOverwrites_.permissionOverwrites_;
  if (null != permissionOverwrites_) {
    for (const key10007 in permissionOverwrites_) {
      let tmp2 = key10007;
      let tmp3 = permissionOverwrites_[key10007];
      let tmp4 = closure_0;
      let tmp5 = closure_1;
      let obj = closure_0(closure_1[1]);
      tmp3.allow = obj.deserialize(tmp3.allow);
      let obj2 = closure_0(closure_1[1]);
      tmp3.deny = obj2.deserialize(tmp3.deny);
    }
  }
  return permissionOverwrites_;
};
