// Module ID: 5690
// Function ID: 48974
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4808, 1352, 1348, 1906, 653, 1355, 686, 5606, 3952, 3965, 507, 2]

// Module 5690 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import { isStaticChannelRoute } from "set";

let closure_4;
let closure_5;
let closure_8;
let closure_9;
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
function initialize() {
  if (!c12) {
    c12 = true;
    const subscription = importDefault(686).subscribe("CONNECTION_OPEN", () => {
      const outer1_11 = {};
      const channelId = outer1_7.getChannelId();
      if (tmp2) {
        outer1_17(channelId);
      }
    });
    const obj = importDefault(686);
  }
}
function dispatchLoadedThread(arg0, messageId) {
  let obj = importDefault(686);
  obj = { type: "THREAD_CREATE", channel: callback(arg0), messageId };
  obj.dispatch(obj);
}
function loadThread(channelId) {
  const _require = channelId;
  if (null == channelId) {
    return Promise.resolve();
  } else if (channelId === _require(5606).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
    return Promise.resolve();
  } else if (isStaticChannelRoute(channelId)) {
    return Promise.resolve();
  } else if (null != store.getChannel(channelId)) {
    return Promise.resolve();
  } else {
    initialize();
    if (_isNativeReflectConstruct.isConnected()) {
      if (null != dependencyMap[channelId]) {
        if ("LOADING" === tmp4.type) {
          let resolved = tmp4.promise;
        } else {
          resolved = Promise.resolve();
        }
        return resolved;
      } else {
        let obj = _require(3952);
        const _location = location;
        obj = {};
        const RouteParam = _require(3965).RouteParam;
        const RouteParam2 = _require(3965).RouteParam;
        obj.path = closure_9.CHANNEL(RouteParam.guildId(), RouteParam2.channelId(), ":messageId");
        obj.exact = true;
        let closure_1 = obj.matchPath(location.pathname, obj);
        const HTTP = _require(507).HTTP;
        obj = { url: closure_8.CHANNEL(channelId) };
        const guildIdResult = RouteParam.guildId();
        obj.rejectWithError = _require(507).rejectWithMigratedError();
        const value = HTTP.get(obj);
        const obj4 = _require(507);
        const catchPromise = value.then((body) => {
          body = body.body;
          outer1_11[closure_0] = { type: "LOADED" };
          if (outer1_5.has(body.type)) {
            let messageId;
            if (null != lib) {
              const params = lib.params;
              if (null != params) {
                messageId = params.messageId;
              }
            }
            outer1_16(body, messageId);
            const tmp = outer1_16;
          }
        }).catch(() => {
          outer1_11[closure_0] = { type: "NOT_FOUND" };
          let obj = lib(outer1_2[6]);
          obj = { type: "CHANNEL_DELETE" };
          obj = { id: closure_0 };
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
        dependencyMap[channelId] = obj1;
        return catchPromise;
      }
    } else {
      return Promise.resolve();
    }
  }
}
({ createChannelRecordFromServer: closure_4, THREAD_CHANNEL_TYPES: closure_5 } = _callSuper);
({ Endpoints: closure_8, Routes: closure_9 } = ME);
let closure_11 = {};
let c12 = false;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/threads/LazyLoadedThreadManager.tsx");

export default {
  getLoadState(key10016) {
    let type;
    if (null != dependencyMap[key10016]) {
      type = tmp.type;
    }
    return type;
  },
  loadThread,
  loadThreadsBulk(arr) {
    let iter3;
    let length;
    initialize();
    if (_isNativeReflectConstruct.isConnected()) {
      const items = [];
      const items1 = [];
      let tmp5 = _createForOfIteratorHelperLoose(arr);
      let iter = tmp5();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let tmp8 = items1;
          let tmp9 = dependencyMap;
          let tmp10 = tmp7;
          if (value !== items1(5606).FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) {
            let tmp11 = isStaticChannelRoute;
            tmp10 = tmp7;
            if (!isStaticChannelRoute(value)) {
              let tmp12 = store;
              tmp10 = tmp7;
              if (null == store.getChannel(value)) {
                let tmp13 = dependencyMap;
                let tmp14 = dependencyMap[value];
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
          tmp7 = tmp10;
          iter2 = iter3;
        } while (!iter3.done);
      }
      if (0 === items1.length) {
        return Promise.all(items).then(() => {

        });
      } else {
        const HTTP = items1(507).HTTP;
        let obj = { url: closure_8.THREADS_BULK };
        obj = { thread_ids: items1 };
        obj.body = obj;
        obj.rejectWithError = items1(507).rejectWithMigratedError();
        const obj4 = items1(507);
        const postResult = HTTP.post(obj);
        const catchPromise = HTTP.post(obj).then((body) => {
          let done;
          const set = new Set();
          const tmp = outer1_13(body.body.items);
          let iter = tmp();
          if (!iter.done) {
            do {
              let value = iter.value;
              let id = value.id;
              let addResult = set.add(id);
              let tmp3 = outer1_11;
              let obj = { type: "LOADED" };
              outer1_11[id] = obj;
              let tmp4 = outer1_16;
              let tmp5 = outer1_16(value);
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
                let tmp7 = outer1_11;
                obj = { type: "NOT_FOUND" };
                outer1_11[tmp6] = obj;
              }
              num = num + 1;
            } while (num < arr.length);
          }
        }).catch(() => {
          let length;
          let num = 0;
          if (0 < items1.length) {
            do {
              let tmp3 = arr[num];
              let tmp4 = outer1_11;
              delete tmp[tmp2];
              num = num + 1;
              length = arr.length;
            } while (num < length);
          }
        });
        let num3 = 0;
        if (0 < items1.length) {
          do {
            let tmp17 = dependencyMap;
            obj = { type: "LOADING", promise: catchPromise };
            dependencyMap[items1[num3]] = obj;
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
