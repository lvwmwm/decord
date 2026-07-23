// Module ID: 5605
// Function ID: 47651
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 1196, 2]

// Module 5605 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_5 from "_isNativeReflectConstruct";
import tmp5 from "_isNativeReflectConstruct";
import set from "_possibleConstructorReturn";

function _isNativeReflectConstruct() {
  let _isNativeReflectConstruct = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _isNativeReflectConstruct;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let _isNativeReflectConstruct = iterable;
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
      _isNativeReflectConstruct = tmp;
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
function isSpam(isSpam) {
  return isSpam.isSpam;
}
function processChannel(id) {
  let tmp = isSpam(id);
  if (tmp) {
    tmp = !set.has(id.id);
  }
  let flag = false;
  if (tmp) {
    set.add(id.id);
    flag = true;
  }
  let hasItem = !isSpam(id);
  if (hasItem) {
    hasItem = set.has(id.id);
  }
  if (hasItem) {
    set.delete(id.id);
    flag = true;
  }
  let hasItem1 = !isSpam(id);
  if (hasItem1) {
    hasItem1 = set1.has(id.id);
  }
  if (hasItem1) {
    set1.delete(id.id);
    flag = true;
  }
  return flag;
}
function handleConnectionOpen() {
  set.clear();
  set1.clear();
  const values = Object.values(mutablePrivateChannels.getMutablePrivateChannels());
  const item = values.forEach((arg0) => {
    outer1_13(arg0);
  });
  let c8 = true;
}
function handleSpamAcceptOptimistic(channelId) {
  set1.add(channelId.channelId);
}
function handleChannelCreate(channel) {
  return processChannel(channel.channel);
}
function handleChannelUpdates(channels) {
  let done;
  const tmp = _createForOfIteratorHelperLoose(channels.channels);
  let iter = tmp();
  if (!iter.done) {
    do {
      let tmp2 = processChannel;
      let tmp3 = processChannel(iter.value);
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
}
function handleChannelDelete(channel) {
  channel = channel.channel;
  let flag = false;
  if (set.has(channel.id)) {
    set.delete(channel.id);
    flag = true;
  }
  return flag;
}
let set = new Set();
const set1 = new Set();
let c8 = false;
tmp5.displayName = "SpamMessageRequestStore";
tmp5.LATEST_SNAPSHOT_VERSION = 1;
tmp5 = new tmp5();
let result = set.fileFinishedImporting("modules/message_request/SpamMessageRequestStore.tsx");

export default tmp5;
