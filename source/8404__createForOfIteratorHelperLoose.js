// Module ID: 8404
// Function ID: 66944
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: checkChattableChannelThresholdMetAfterChannelPermissionDeny, isDefaultChannelThresholdMetAfterDelete

// Module 8404 (_createForOfIteratorHelperLoose)
let GuildSettingsSections;
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
function _isDefaultChannelThresholdMetAfterDelete() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _isDefaultChannelThresholdMetAfterDelete = obj;
  return obj(...arguments);
}
function isChattableChannelThresholdMetAfterChannelChange() {
  return _isChattableChannelThresholdMetAfterChannelChange(...arguments);
}
function _isChattableChannelThresholdMetAfterChannelChange() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _isChattableChannelThresholdMetAfterChannelChange = obj;
  return obj(...arguments);
}
function _checkChattableChannelThresholdMetAfterChannelPermissionDeny() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _checkChattableChannelThresholdMetAfterChannelPermissionDeny = obj;
  return obj(...arguments);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).NUM_DEFAULT_CHATTABLE_CHANNELS_MIN;
({ GuildFeatures: closure_8, GuildSettingsSections, Permissions: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/guild_onboarding/DefaultChannelThresholdUtils.tsx");

export const isDefaultChannelThresholdMetAfterDelete = function isDefaultChannelThresholdMetAfterDelete(guildId, id) {
  return _isDefaultChannelThresholdMetAfterDelete(...arguments);
};
export const checkChattableChannelThresholdMetAfterChannelPermissionDeny = function checkChattableChannelThresholdMetAfterChannelPermissionDeny(getGuildId, VIEW_CHANNEL, allow) {
  return _checkChattableChannelThresholdMetAfterChannelPermissionDeny(...arguments);
};
