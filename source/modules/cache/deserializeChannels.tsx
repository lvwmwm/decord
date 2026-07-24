// Module ID: 1903
// Function ID: 21366
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 483, 2]
// Exports: deserializeChannel, deserializeChannelEntries

// Module 1903 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";

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
          let tmp5 = importAll;
          let tmp6 = dependencyMap;
          let obj = importAll(483);
          tmp4.allow = obj.deserialize(tmp4.allow);
          let obj2 = importAll(483);
          tmp4.deny = obj2.deserialize(tmp4.deny);
          continue;
        }
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
}
const result = require("set").fileFinishedImporting("modules/cache/deserializeChannels.tsx");

export default deserializeChannels;
export const deserializeChannelEntries = function deserializeChannelEntries(guildChannels) {
  let done;
  const tmp = _createForOfIteratorHelperLoose(guildChannels);
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = callback;
      let tmp3 = callback(iter.value, 2);
      let first = tmp3[0];
      let tmp5 = deserializeChannels;
      let tmp6 = deserializeChannels(tmp3[1]);
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
      let tmp4 = importAll;
      let tmp5 = dependencyMap;
      let obj = importAll(483);
      tmp3.allow = obj.deserialize(tmp3.allow);
      let obj2 = importAll(483);
      tmp3.deny = obj2.deserialize(tmp3.deny);
      continue;
    }
  }
  return permissionOverwrites_;
};
