// Module ID: 5685
// Function ID: 48947
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 5685 (_createForOfIteratorHelperLoose)
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
function initialize() {
  if (!closure_12) {
    closure_12 = true;
    const subscription = importDefault(dependencyMap[6]).subscribe("CONNECTION_OPEN", () => {
      let closure_11 = {};
      const channelId = channelId.getChannelId();
      if (tmp2) {
        callback(channelId);
      }
    });
    const obj = importDefault(dependencyMap[6]);
  }
}
function dispatchLoadedThread(arg0, messageId) {
  let obj = importDefault(dependencyMap[6]);
  obj = { type: "THREAD_CREATE", channel: callback(arg0), messageId };
  obj.dispatch(obj);
}
function loadThread(channelId) {
  const arg1 = channelId;
  if (null == channelId) {
    return Promise.resolve();
  } else if (channelId === arg1(dependencyMap[7]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return Promise.resolve();
  } else if (isStaticChannelRoute(channelId)) {
    return Promise.resolve();
  } else if (null != channel.getChannel(channelId)) {
    return Promise.resolve();
  } else {
    initialize();
    if (closure_3.isConnected()) {
      if (null != closure_11[channelId]) {
        if ("LOADING" === tmp4.type) {
          let resolved = tmp4.promise;
        } else {
          resolved = Promise.resolve();
        }
        return resolved;
      } else {
        let obj = arg1(dependencyMap[8]);
        const _location = location;
        obj = {};
        const RouteParam = arg1(dependencyMap[9]).RouteParam;
        const RouteParam2 = arg1(dependencyMap[9]).RouteParam;
        obj.path = closure_9.CHANNEL(RouteParam.guildId(), RouteParam2.channelId(), ":messageId");
        obj.exact = true;
        let closure_1 = obj.matchPath(location.pathname, obj);
        const HTTP = arg1(dependencyMap[10]).HTTP;
        obj = { url: closure_8.CHANNEL(channelId) };
        const guildIdResult = RouteParam.guildId();
        obj.rejectWithError = arg1(dependencyMap[10]).rejectWithMigratedError();
        const value = HTTP.get(obj);
        const obj4 = arg1(dependencyMap[10]);
        const catchPromise = value.then((body) => {
          body = body.body;
          closure_11[body] = { type: "LOADED" };
          if (set.has(body.type)) {
            let messageId;
            if (null != lib) {
              const params = lib.params;
              if (null != params) {
                messageId = params.messageId;
              }
            }
            closure_16(body, messageId);
            const tmp = closure_16;
          }
        }).catch(() => {
          closure_11[arg0] = { type: "NOT_FOUND" };
          let obj = lib(closure_2[6]);
          obj = { type: "CHANNEL_DELETE" };
          obj = { id: arg0 };
          let guildId;
          if (null != lib) {
            const params = lib.params;
            if (null != params) {
              guildId = params.guildId;
            }
          }
          obj.guild_id = guildId;
          obj.parent_id = undefined;
          obj.channel = obj;
          obj.dispatch(obj);
        });
        const obj1 = { type: "LOADING", promise: catchPromise };
        closure_11[channelId] = obj1;
        return catchPromise;
      }
    } else {
      return Promise.resolve();
    }
  }
}
let closure_3 = importDefault(dependencyMap[0]);
({ createChannelRecordFromServer: closure_4, THREAD_CHANNEL_TYPES: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[1]);
({ Endpoints: closure_8, Routes: closure_9 } = arg1(dependencyMap[4]));
const isStaticChannelRoute = arg1(dependencyMap[5]).isStaticChannelRoute;
let closure_11 = {};
let closure_12 = false;
const obj = {
  getLoadState(key10016) {
    let type;
    if (null != closure_11[key10016]) {
      type = tmp.type;
    }
    return type;
  },
  loadThread,
  loadThreadsBulk(arr) {
    let iter3;
    let length;
    initialize();
    if (closure_3.isConnected()) {
      const items = [];
      const items1 = [];
      const arg1 = items1;
      const tmp5 = _createForOfIteratorHelperLoose(arr);
      const iter = tmp5();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let tmp8 = closure_0;
          let tmp9 = closure_2;
          let tmp10 = tmp7;
          if (value !== closure_0(closure_2[7]).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
            let tmp11 = closure_10;
            tmp10 = tmp7;
            if (!closure_10(value)) {
              let tmp12 = closure_6;
              tmp10 = tmp7;
              if (null == closure_6.getChannel(value)) {
                let tmp13 = closure_11;
                let tmp14 = closure_11[value];
                if (null == tmp14) {
                  arr = items1.push(value);
                  tmp10 = tmp14;
                } else {
                  tmp10 = tmp14;
                  if ("LOADING" === tmp14.type) {
                    arr = items.push(tmp14.promise);
                    tmp10 = tmp14;
                  }
                }
              }
            }
          }
          iter3 = tmp5();
          let tmp7 = tmp10;
          iter2 = iter3;
        } while (!iter3.done);
      }
      if (0 === items1.length) {
        return Promise.all(items).then(() => {

        });
      } else {
        const HTTP = arg1(dependencyMap[10]).HTTP;
        let obj = { url: closure_8.THREADS_BULK };
        obj = { thread_ids: items1 };
        obj.body = obj;
        obj.rejectWithError = arg1(dependencyMap[10]).rejectWithMigratedError();
        const obj4 = arg1(dependencyMap[10]);
        const postResult = HTTP.post(obj);
        const catchPromise = HTTP.post(obj).then((body) => {
          let done;
          const set = new Set();
          const tmp = callback(body.body.items);
          let iter = tmp();
          if (!iter.done) {
            do {
              let value = iter.value;
              let id = value.id;
              let addResult = set.add(id);
              let tmp3 = closure_11;
              let obj = { type: "LOADED" };
              closure_11[id] = obj;
              let tmp4 = closure_16;
              let tmp5 = closure_16(value);
              let iter2 = tmp();
              iter = iter2;
              done = iter2.done;
            } while (!done);
          }
          let num = 0;
          if (0 < items1.length) {
            do {
              let tmp6 = arr[num];
              if (!set.has(tmp6)) {
                let tmp7 = closure_11;
                obj = { type: "NOT_FOUND" };
                closure_11[tmp6] = obj;
              }
              num = num + 1;
            } while (num < arr.length);
          }
        }).catch(() => {
          let length;
          let num = 0;
          if (0 < items1.length) {
            do {
              let tmp = arr[num];
              let tmp2 = closure_11;
              delete r0[r4];
              num = num + 1;
              length = arr.length;
            } while (num < length);
          }
        });
        let num3 = 0;
        if (0 < items1.length) {
          do {
            let tmp17 = closure_11;
            obj = { type: "LOADING", promise: catchPromise };
            closure_11[items1[num3]] = obj;
            num3 = num3 + 1;
            length = items1.length;
          } while (num3 < length);
        }
        let nextPromise1 = catchPromise;
        if (0 !== items.length) {
          const items2 = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(items, 0);
          items2[arraySpreadResult] = catchPromise;
          const sum = arraySpreadResult + 1;
          nextPromise1 = Promise.all(items2).then(() => {

          });
          const allPromises1 = Promise.all(items2);
        }
        return nextPromise1;
      }
    } else {
      return Promise.resolve();
    }
  }
};
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/threads/LazyLoadedThreadManager.tsx");

export default obj;
