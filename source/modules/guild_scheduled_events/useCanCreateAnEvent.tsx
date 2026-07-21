// Module ID: 8447
// Function ID: 67392
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 8447 (_createForOfIteratorHelperLoose)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const GUILD_VOCAL_CHANNELS_KEY = arg1(dependencyMap[1]).GUILD_VOCAL_CHANNELS_KEY;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const Permissions = arg1(dependencyMap[4]).Permissions;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/guild_scheduled_events/useCanCreateAnEvent.tsx");

export default function useCanCreateAnEvent(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  const items = [closure_5, closure_3, closure_6];
  const items1 = [arg0, arg1];
  return arg1(dependencyMap[5]).useStateFromStores(items, () => {
    const guild = guild.getGuild(arg0);
    if (!closure_6.can(constants.ADMINISTRATOR, guild)) {
      if (!closure_6.can(constants.CREATE_EVENTS, guild)) {
        const tmp8 = callback2(channels.getChannels(arg0)[closure_4]);
        let iter = tmp8();
        if (!iter.done) {
          while (true) {
            let channel = iter.value.channel;
            let tmp10 = arg1;
            if (null == arg1) {
              let tmp12 = arg0;
              let tmp13 = arg1;
              let obj = arg0(arg1[6]);
              let tmp14 = callback;
              let tmp15 = closure_6;
              if (closure_6.can(callback(obj.attachChannelPermissions(channel), 1)[0], channel)) {
                break;
              }
            } else {
              let tmp11 = arg1;
            }
            let iter2 = tmp8();
            iter = iter2;
          }
          return true;
        }
        return false;
      }
    }
    return true;
  }, items1);
};
