// Module ID: 5066
// Function ID: 43965
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 1348, 5067, 4349, 1327, 566, 686, 2]

// Module 5066 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _slicedToArray from "_slicedToArray";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";

const require = arg1;
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
function recomputeFromAppTokens() {
  const items = [...map.values()];
  let closure_14 = items.filter((application) => null == application.application.parent_id);
}
function updateFetchStates(FETCHED, applicationIds) {
  let done;
  if (null == applicationIds) {
    let closure_15 = FETCHED;
    map1.clear();
    closure_17 = closure_17 + 1;
  } else {
    const tmp2 = _createForOfIteratorHelperLoose(applicationIds);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let tmp3 = map1;
        let result = map1.set(iter.value, FETCHED);
        let iter2 = tmp2();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
    closure_17 = closure_17 + 1;
  }
}
let obj = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
let map = new Map();
let closure_13 = [];
let closure_14 = [];
let NOT_FETCHED = obj.NOT_FETCHED;
const map1 = new Map();
let c17 = 0;
let tmp4 = ((Store) => {
  class AuthorizedAppsStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, AuthorizedAppsStore);
      obj = outer1_5(AuthorizedAppsStore);
      tmp2 = outer1_4;
      if (outer1_18()) {
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
  callback2(AuthorizedAppsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_8, outer1_9, outer1_10);
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "getNewestTokenForApplication",
    value(arg0) {
      let tmp = null;
      if (null != arg0) {
        const value = outer1_12.get(arg0);
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
      return outer1_13;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getNewestTokensForNonChildrenApplications",
    value() {
      return outer1_14;
    }
  };
  items[4] = {
    key: "getFetchState",
    value() {
      return outer1_15;
    }
  };
  items[5] = {
    key: "getFetchStateForApplication",
    value(arg0) {
      if (outer1_15 !== outer1_11.FETCHING) {
        if (outer1_15 !== outer1_11.FETCHED) {
          let value = outer1_16.get(arg0);
          if (null == value) {
            value = outer1_15;
          }
        }
        return value;
      }
      value = outer1_15;
    }
  };
  items[6] = {
    key: "getApplicationFetchStateVersion",
    value() {
      return outer1_17;
    }
  };
  return callback(AuthorizedAppsStore, items);
})(require("initialize").Store);
tmp4.displayName = "AuthorizedAppsStore";
obj = {
  USER_AUTHORIZED_APPS_REQUEST: function handleUserAuthorizedAppsRequest(request) {
    if ("full" === request.request.type) {
      updateFetchStates(obj.FETCHING);
    } else {
      updateFetchStates(obj.FETCHING, request.request.applicationIds);
    }
  },
  USER_AUTHORIZED_APPS_REQUEST_CANCELLED: function handleUserAuthorizedAppsRequestCancelled(applicationIds) {
    let iter3;
    const tmp = _createForOfIteratorHelperLoose(applicationIds.applicationIds);
    const iter = tmp();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp2 = map1;
        let tmp3 = obj;
        if (map1.get(value) === obj.FETCHING) {
          let tmp4 = map1;
          let deleteResult = map1.delete(value);
          flag = true;
        }
        iter3 = tmp();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    if (flag2) {
      closure_17 = closure_17 + 1;
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
      const map = new Map(entries.filter(require(1327) /* isDiscordFrontendDevelopment */.isObjectEntryNotNullish));
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
tmp4 = new tmp4(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/oauth2/AuthorizedAppsStore.tsx");

export default tmp4;
export const FetchState = obj;
