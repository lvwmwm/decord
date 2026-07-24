// Module ID: 11225
// Function ID: 87392
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 664, 566, 686, 2]

// Module 11225 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
let obj = { NOT_FETCHED: 0, [0]: "NOT_FETCHED", FETCHING: 1, [1]: "FETCHING", FETCHED: 2, [2]: "FETCHED", ERROR: 3, [3]: "ERROR" };
obj = { applicationIdToGuildIds: {}, lastFetchTimeMs: null, nextFetchRetryTimeMs: null };
obj.fetchState = obj.NOT_FETCHED;
let tmp2 = ((PersistedStore) => {
  class MyGuildApplicationsStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, MyGuildApplicationsStore);
      obj = outer1_5(MyGuildApplicationsStore);
      tmp2 = outer1_4;
      if (outer1_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(MyGuildApplicationsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(lastFetchTimeMs) {
      if (null != lastFetchTimeMs) {
        outer1_8.lastFetchTimeMs = lastFetchTimeMs.lastFetchTimeMs;
        outer1_8.nextFetchRetryTimeMs = lastFetchTimeMs.nextFetchRetryTimeMs;
        outer1_8.fetchState = lastFetchTimeMs.fetchState;
        for (const key10002 in arg0.applicationIdToGuildIds) {
          let tmp5 = key10002;
          let tmp6 = outer1_8;
          let _Set = Set;
          let tmp7 = new.target;
          let tmp8 = new.target;
          let set = new Set(arg0.applicationIdToGuildIds[key10002]);
          let tmp10 = set;
          outer1_8.applicationIdToGuildIds[key10002] = set;
          continue;
        }
      }
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuildIdsForApplication",
    value(arg0) {
      if (null != arg0) {
        return outer1_8.applicationIdToGuildIds[arg0];
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastFetchTimeMs",
    value() {
      return outer1_8.lastFetchTimeMs;
    }
  };
  items[4] = {
    key: "getNextFetchRetryTimeMs",
    value() {
      return outer1_8.nextFetchRetryTimeMs;
    }
  };
  items[5] = {
    key: "getFetchState",
    value() {
      return outer1_8.fetchState;
    }
  };
  return callback(MyGuildApplicationsStore, items);
})(require("initialize").PersistedStore);
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
      let tmp4 = _createForOfIteratorHelperLoose;
      let tmp5 = _createForOfIteratorHelperLoose(guildIdToApplicationIds[key10017]);
      let iter2 = tmp5();
      if (iter2.done) {
        continue;
      } else {
        let tmp = addToApplicationIdToGuildIds;
        obj = { applicationId: iter2.value, guildId: key10017 };
        let tmp2 = addToApplicationIdToGuildIds(obj);
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
      const result = retryAfterSeconds * importDefault(664).Millis.SECOND;
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
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/global_discovery_apps/stores/MyGuildApplicationsStore.tsx");

export default tmp2;
export const FetchState = obj;
