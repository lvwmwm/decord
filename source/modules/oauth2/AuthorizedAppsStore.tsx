// Module ID: 5337
// Function ID: 45525
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5337 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function recomputeFromAppTokens() {
  const items = [...closure_12.values()];
  let closure_13 = items;
  let closure_14 = items.filter((application) => null == application.application.parent_id);
}
function updateFetchStates(FETCHED, applicationIds) {
  let done;
  if (null == applicationIds) {
    const NOT_FETCHED = FETCHED;
    map1.clear();
    closure_17 = closure_17 + 1;
  } else {
    const tmp2 = _createForOfIteratorHelperLoose(applicationIds);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let tmp3 = closure_16;
        let result = closure_16.set(iter.value, FETCHED);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    closure_17 = closure_17 + 1;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = importDefault(dependencyMap[6]);
let closure_9 = importDefault(dependencyMap[7]);
let closure_10 = importDefault(dependencyMap[8]);
let obj = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
const map = new Map();
let closure_13 = [];
let closure_14 = [];
const NOT_FETCHED = obj.NOT_FETCHED;
const map1 = new Map();
let closure_17 = 0;
let tmp4 = (Store) => {
  class AuthorizedAppsStore {
    constructor() {
      self = this;
      tmp = closure_2(this, AuthorizedAppsStore);
      obj = closure_5(AuthorizedAppsStore);
      tmp2 = closure_4;
      if (closure_18()) {
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
  const arg1 = AuthorizedAppsStore;
  callback2(AuthorizedAppsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_8, closure_9, closure_10);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getNewestTokenForApplication",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        const value = closure_12.get(arg0);
        let tmp4 = null;
        if (null != value) {
          tmp4 = value;
        }
        tmp = tmp4;
      }
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "getNewestTokens",
    value() {
      return closure_13;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getNewestTokensForNonChildrenApplications",
    value() {
      return closure_14;
    }
  };
  items[4] = {
    key: "getFetchState",
    value() {
      return closure_15;
    }
  };
  items[5] = {
    key: "getFetchStateForApplication",
    value(arg0) {
      if (closure_15 !== constants.FETCHING) {
        if (closure_15 !== constants.FETCHED) {
          let value = closure_16.get(arg0);
          if (null == value) {
            value = closure_15;
          }
        }
        return value;
      }
      value = closure_15;
    }
  };
  items[6] = {
    key: "getApplicationFetchStateVersion",
    value() {
      return closure_17;
    }
  };
  return callback(AuthorizedAppsStore, items);
}(importDefault(dependencyMap[10]).Store);
tmp4.displayName = "AuthorizedAppsStore";
obj = {
  USER_AUTHORIZED_APPS_REQUEST: function handleUserAuthorizedAppsRequest(request) {
    if ("full" === request.request.type) {
      updateFetchStates(obj.FETCHING);
    } else {
      updateFetchStates(obj.FETCHING, request.request.applicationIds);
    }
  },
  USER_AUTHORIZED_APPS_REQUEST_FAILED: function handleUserAuthorizedAppsRequestFailed(request) {
    if ("full" === request.request.type) {
      updateFetchStates(obj.FETCHED);
    } else {
      updateFetchStates(obj.FETCHED, request.request.applicationIds);
    }
  },
  USER_AUTHORIZED_APPS_UPDATE: function handleAuthorizedAppsUpdate(isFullFetch) {
    let tmp6;
    let tmp7;
    const FETCHED = obj.FETCHED;
    if (isFullFetch.isFullFetch) {
      tmp(FETCHED);
      const _Map = Map;
      const _Object3 = Object;
      const entries = Object.entries(isFullFetch.tokens);
      const map = new Map(entries.filter(arg1(dependencyMap[9]).isObjectEntryNotNullish));
      recomputeFromAppTokens();
    } else {
      const _Object = Object;
      tmp(FETCHED, Object.keys(isFullFetch.tokens));
      const _Object2 = Object;
      const entries1 = Object.entries(isFullFetch.tokens);
      for (let num4 = 0; num4 < entries1.length; num4 = num4 + 1) {
        let tmp4 = callback3;
        let tmp5 = callback3(entries1[num4], 2);
        [tmp6, tmp7] = tmp5;
        if (null == tmp7) {
          let tmp10 = map;
          let deleteResult = map.delete(tmp6);
        } else {
          let tmp8 = map;
          let result = map.set(tmp6, tmp7);
        }
      }
      recomputeFromAppTokens();
    }
  },
  OAUTH2_TOKEN_CREATE: function handleOAuth2TokenCreate(application) {
    application = application.application;
    const result = map.set(application.id, { id: application.id, application, scopes: application.scopes });
    recomputeFromAppTokens();
  },
  OAUTH2_TOKEN_DELETE: function handleOAuth2TokenDelete(applicationId) {
    const value = map.get(applicationId.applicationId);
    if (null != value) {
      if (value.id === applicationId.id) {
        map.delete(value.application.id);
        recomputeFromAppTokens();
      }
    }
    return false;
  },
  LOGOUT: function handleLogout() {
    const map = new Map();
    let closure_13 = [];
    let closure_14 = [];
    const NOT_FETCHED = obj.NOT_FETCHED;
    map1.clear();
    closure_17 = closure_17 + 1;
  }
};
tmp4 = new tmp4(importDefault(dependencyMap[11]), obj);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/oauth2/AuthorizedAppsStore.tsx");

export default tmp4;
export const FetchState = obj;
