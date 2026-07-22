// Module ID: 16065
// Function ID: 123388
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 16065 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let importDefault = Symbol_iterator;
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
      importDefault = tmp;
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let tmp2 = (arg0) => {
  class ThreadManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, ThreadManager);
      items1 = [...items];
      obj = closure_5(ThreadManager);
      tmp2 = closure_4;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.actions = { CHANNEL_DELETE: tmp2Result.handleChannelDelete, MESSAGE_CREATE: tmp2Result.handleMessageCreate, GUILD_DELETE: tmp2Result.handleGuildDelete };
      return tmp2Result;
    }
  }
  const importDefault = ThreadManager;
  callback2(ThreadManager, arg0);
  let obj = {
    key: "handleChannelDelete",
    value(channel) {
      channel = channel.channel;
      let ThreadManager;
      if (null != channel.guild_id) {
        const allThreadsForParent = store.getAllThreadsForParent(channel.id);
        ThreadManager = allThreadsForParent;
        if (allThreadsForParent.length > 0) {
          const Emitter = ThreadManager(closure_1[7]).Emitter;
          Emitter.batched(() => {
            let done;
            const tmp = callback(allThreadsForParent);
            let iter = tmp();
            if (!iter.done) {
              do {
                let tmp2 = closure_0;
                let tmp3 = closure_1;
                let obj = closure_0(closure_1[8]);
                obj = { type: "THREAD_DELETE", channel: iter.value };
                let dispatchResult = obj.dispatch(obj);
                let iter2 = tmp();
                iter = iter2;
                done = iter2.done;
              } while (!done);
            }
          });
        }
      }
    }
  };
  const items = [obj, , ];
  obj = {
    key: "handleMessageCreate",
    value(channelId) {
      const channel = store.getChannel(channelId.channelId);
      const author = channelId.message.author;
      let id;
      if (null != author) {
        id = author.id;
      }
      if (id === id.getId()) {
        if (null != channel) {
          if (channel.isActiveThread()) {
            let _Date = Date;
            const threadMetadata = channel.threadMetadata;
            let archiveTimestamp;
            if (null != threadMetadata) {
              archiveTimestamp = threadMetadata.archiveTimestamp;
            }
            let num = 0;
            if (null != archiveTimestamp) {
              num = archiveTimestamp;
            }
            const prototype = _Date.prototype;
            _Date = new _Date(num);
            const _Date2 = Date;
            const time = _Date.getTime();
            if (Date.now() - time < 5000) {
              ThreadManager(closure_1[9]).resort(channel.parent_id);
              const obj3 = ThreadManager(closure_1[9]);
            }
          }
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "handleGuildDelete",
    value(guild) {
      guild = guild.guild;
      let ThreadManager;
      if (!guild.unavailable) {
        const allThreadsForGuild = store.getAllThreadsForGuild(guild.id);
        ThreadManager = allThreadsForGuild;
        if (0 !== allThreadsForGuild.length) {
          const Emitter = ThreadManager(closure_1[7]).Emitter;
          Emitter.batched(() => {
            let done;
            const tmp = callback(allThreadsForGuild);
            let iter = tmp();
            if (!iter.done) {
              do {
                let tmp2 = closure_0;
                let tmp3 = closure_1;
                let obj = closure_0(closure_1[8]);
                obj = { type: "THREAD_DELETE", channel: iter.value };
                let dispatchResult = obj.dispatch(obj);
                let iter2 = tmp();
                iter = iter2;
                done = iter2.done;
              } while (!done);
            }
          });
        }
      }
    }
  };
  items[2] = obj;
  return callback(ThreadManager, items);
}(importDefault(dependencyMap[10]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/threads/ThreadManager.tsx");

export default tmp2;
