// Module ID: 11185
// Function ID: 87073
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 11185 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function addToApplicationIdToGuildIds(applicationId) {
  applicationId = applicationId.applicationId;
  if (null == obj.applicationIdToGuildIds[applicationId]) {
    const _Set = Set;
    const set = new Set();
    obj.applicationIdToGuildIds[applicationId] = set;
  }
  obj.applicationIdToGuildIds[applicationId].add(applicationId.guildId);
  obj.applicationIdToGuildIds[applicationId].applicationIdToGuildIds[applicationId] = new Set(obj.applicationIdToGuildIds[applicationId].applicationIdToGuildIds[applicationId].applicationIdToGuildIds[applicationId]);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED", ERROR: 3, [3]: "ERROR" };
obj = { marginRight: "mn", gap: "description", display: "Array", applicationIdToGuildIds: {} };
obj.fetchState = obj.NOT_FETCHED;
let tmp2 = (PersistedStore) => {
  class MyGuildApplicationsStore {
    constructor() {
      self = this;
      tmp = closure_2(this, MyGuildApplicationsStore);
      obj = closure_5(MyGuildApplicationsStore);
      tmp2 = closure_4;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = MyGuildApplicationsStore;
  callback2(MyGuildApplicationsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(lastFetchTimeMs) {
      if (null != lastFetchTimeMs) {
        closure_8.lastFetchTimeMs = lastFetchTimeMs.lastFetchTimeMs;
        closure_8.nextFetchRetryTimeMs = lastFetchTimeMs.nextFetchRetryTimeMs;
        closure_8.fetchState = lastFetchTimeMs.fetchState;
        for (const key10002 in arg0.applicationIdToGuildIds) {
          let tmp5 = key10002;
          let tmp6 = closure_8;
          let _Set = Set;
          let tmp7 = new.target;
          let tmp8 = new.target;
          let set = new Set(arg0.applicationIdToGuildIds[key10002]);
          let tmp10 = set;
          closure_8.applicationIdToGuildIds[key10002] = set;
        }
      }
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuildIdsForApplication",
    value(arg0) {
      if (null != arg0) {
        return closure_8.applicationIdToGuildIds[arg0];
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastFetchTimeMs",
    value() {
      return closure_8.lastFetchTimeMs;
    }
  };
  items[4] = {
    key: "getNextFetchRetryTimeMs",
    value() {
      return closure_8.nextFetchRetryTimeMs;
    }
  };
  items[5] = {
    key: "getFetchState",
    value() {
      return closure_8.fetchState;
    }
  };
  return callback(MyGuildApplicationsStore, items);
}(importDefault(dependencyMap[6]).PersistedStore);
tmp2.displayName = "MyGuildApplicationsStore";
tmp2.persistKey = "MyGuildApplicationsStore";
obj = {
  LOGOUT: function handleLogout() {
    obj.applicationIdToGuildIds = {};
    obj.lastFetchTimeMs = null;
    obj.nextFetchRetryTimeMs = null;
    obj.fetchState = obj.NOT_FETCHED;
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS: function handleGuildApplicationsFetch() {
    obj.fetchState = obj.FETCHING;
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_SUCCESS: function handleGuildApplicationsFetchSuccess(guildIdToApplicationIds) {
    let obj;
    guildIdToApplicationIds = guildIdToApplicationIds.guildIdToApplicationIds;
    obj.fetchState = obj.FETCHED;
    obj.lastFetchTimeMs = Date.now();
    obj.applicationIdToGuildIds = {};
    obj.nextFetchRetryTimeMs = null;
    for (const key10017 in guildIdToApplicationIds) {
      let tmp3 = key10017;
      let tmp4 = closure_10;
      let tmp5 = closure_10(guildIdToApplicationIds[key10017]);
      let iter2 = tmp5();
      if (iter2.done) {
        continue;
      } else {
        let tmp = closure_12;
        obj = { applicationId: iter2.value, guildId: key10017 };
        let tmp2 = closure_12(obj);
        let iter = tmp5();
        iter2 = iter;
      }
      continue;
    }
  },
  FETCH_INTEGRATION_APPLICATION_IDS_FOR_MY_GUILDS_FAILURE: function handleGuildApplicationsFetchFailure(retryAfterSeconds) {
    retryAfterSeconds = retryAfterSeconds.retryAfterSeconds;
    obj.fetchState = obj.ERROR;
    if (null != retryAfterSeconds) {
      const _Date = Date;
      const result = retryAfterSeconds * importDefault(dependencyMap[5]).Millis.SECOND;
      obj.nextFetchRetryTimeMs = Date.now() + result;
    }
  },
  INTEGRATION_CREATE: function handleIntegrationCreate(application) {
    application = application.application;
    if (null != application) {
      const obj = { applicationId: application.id, guildId: tmp };
      addToApplicationIdToGuildIds(obj);
    }
  },
  INTEGRATION_DELETE: function handleIntegrationDelete(applicationId) {
    applicationId = applicationId.applicationId;
    if (null != applicationId) {
      let obj = { applicationId, guildId: tmp };
      const applicationId2 = obj.applicationId;
      if (null != obj.applicationIdToGuildIds[applicationId2]) {
        obj = obj.applicationIdToGuildIds[applicationId2];
        obj.delete(tmp11);
        const _Set = Set;
        const set = new Set(obj.applicationIdToGuildIds[applicationId2]);
        obj.applicationIdToGuildIds[applicationId2] = set;
      }
    }
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[7]), obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/global_discovery_apps/stores/MyGuildApplicationsStore.tsx");

export default tmp2;
export const FetchState = obj;
