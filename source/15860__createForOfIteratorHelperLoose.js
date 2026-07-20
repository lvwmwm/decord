// Module ID: 15860
// Function ID: 121432
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: backgroundSync

// Module 15860 (_createForOfIteratorHelperLoose)
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
function _backgroundSync() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _backgroundSync = obj;
  return obj(...arguments);
}
function backgroundSyncPrivateChannels() {
  return _backgroundSyncPrivateChannels(...arguments);
}
function _backgroundSyncPrivateChannels() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _backgroundSyncPrivateChannels = obj;
  return obj(...arguments);
}
function backgroundSyncGuildData() {
  return _backgroundSyncGuildData(...arguments);
}
function _backgroundSyncGuildData() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _backgroundSyncGuildData = obj;
  return obj(...arguments);
}
function backgroundSyncGuildChannels() {
  return _backgroundSyncGuildChannels(...arguments);
}
function _backgroundSyncGuildChannels() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _backgroundSyncGuildChannels = obj;
  return obj(...arguments);
}
function processChannelChanges() {
  return _processChannelChanges(...arguments);
}
function _processChannelChanges() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _processChannelChanges = obj;
  return obj(...arguments);
}
function writeMessageChanges(transaction) {
  const importDefault = arg2;
  const dependencyMap = arg3;
  let closure_3 = arg4;
  return transaction.transaction((arg0) => {
    const arg1 = arg0;
    for (const key10005 in closure_0) {
      let tmp2 = key10005;
      let tmpResult = tmp(key10005);
    }
  }, "Background Sync");
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ isPrivate: closure_5, isThread: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const tmp2 = arg1(dependencyMap[2]);
({ AnalyticEvents: closure_11, Endpoints: closure_12, MAX_MESSAGES_PER_CHANNEL: closure_13 } = arg1(dependencyMap[7]));
arg1(dependencyMap[8]);
arg1(dependencyMap[3]);
arg1(dependencyMap[9]);
arg1(dependencyMap[10]);
let importDefaultResult = importDefault(dependencyMap[11]);
importDefaultResult = new importDefaultResult("BackgroundSync");
let closure_15 = 4 * importDefault(dependencyMap[12]).Millis.HOUR;
let closure_16 = "lastSyncTime";
let closure_17 = "lastSyncedPrivateChannelsMessageId";
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/app_database/background_sync/native/BackgroundSync.tsx");

export const backgroundSync = function backgroundSync(arg0) {
  return _backgroundSync(...arguments);
};
