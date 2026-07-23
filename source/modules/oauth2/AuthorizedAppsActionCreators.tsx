// Module ID: 5472
// Function ID: 46756
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 5066, 653, 4015, 686, 507, 2]

// Module 5472 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

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
function tokensToAppTokensMap(arg0, arr) {
  let done;
  let mapped;
  if (null != arr) {
    mapped = arr.map((arg0) => {
      const items = [arg0, null];
      return items;
    });
  }
  if (null == mapped) {
    mapped = [];
  }
  const fromEntriesResult = Object.fromEntries(mapped);
  const tmp2 = _createForOfIteratorHelperLoose(arg0);
  let iter = tmp2();
  if (!iter.done) {
    do {
      let value = iter.value;
      fromEntriesResult[value.application.id] = value;
      let iter2 = tmp2();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
  return fromEntriesResult;
}
function fetchAuthorizedApps() {
  return _fetchAuthorizedApps(...arguments);
}
async function _fetchAuthorizedApps(arg0, arg1) {
  let closure_0 = arg0;
  const HTTP = outer2_0(outer2_2[5]).HTTP;
  let obj = { url: outer2_6.OAUTH2_TOKENS, oldFormErrors: true, rejectWithError: true, query: { application_ids: arg0 } };
  const value = HTTP.get(obj);
  yield value.then((body) => {
    let obj = outer3_1(outer3_2[4]);
    obj = { type: "USER_AUTHORIZED_APPS_UPDATE", isFullFetch: null == closure_0, tokens: outer3_10(body.body, closure_0) };
    return obj.dispatch(obj);
  }, () => {
    let obj = outer3_1(outer3_2[4]);
    obj = { type: "USER_AUTHORIZED_APPS_REQUEST_FAILED" };
    if (null == closure_0) {
      obj = { type: "full" };
      let obj1 = obj;
    } else {
      obj1 = { type: "partial", applicationIds: closure_0 };
    }
    obj.request = obj1;
    return obj.dispatch(obj);
  });
}
let obj = {
  predicate(arg0) {
    return store.getFetchStateForApplication(arg0) !== FetchState.FETCHING;
  },
  onQueued(applicationIds) {
    let request = importDefault(686);
    request = { type: "partial", applicationIds };
    return request.dispatch({ type: "USER_AUTHORIZED_APPS_REQUEST", request });
  },
  onCancelled(applicationIds) {
    let obj = importDefault(686);
    obj = { type: "USER_AUTHORIZED_APPS_REQUEST_CANCELLED", applicationIds };
    return obj.dispatch(obj);
  }
};
const batchInvocationManager = new require("_createForOfIteratorHelperLoose").BatchInvocationManager(fetchAuthorizedApps, obj);
obj = {
  fetch(arg0) {
    if (store.getFetchState() !== FetchState.FETCHING) {
      if (null != arg0) {
        (function queueAuthorizedApps(arg0) {
          outer1_7.queue(arg0).catch((arg0) => {
            if (!(arg0 instanceof outer2_0(outer2_2[3]).BatchInvocationManagerResetError)) {
              throw arg0;
            }
          });
        })(arg0);
      } else {
        batchInvocationManager.reset();
        let obj = importDefault(686);
        obj = { type: "USER_AUTHORIZED_APPS_REQUEST" };
        obj = { type: "full" };
        obj.request = obj;
        obj.dispatch(obj);
        fetchAuthorizedApps();
      }
    }
  },
  delete(arg0) {
    const self = this;
    const HTTP = self(507).HTTP;
    const obj = { url: Endpoints.OAUTH2_TOKEN(arg0), oldFormErrors: true, rejectWithError: true };
    HTTP.del(obj).then(() => {
      const response = self.fetch();
    });
  }
};
const result = require("ME").fileFinishedImporting("modules/oauth2/AuthorizedAppsActionCreators.tsx");

export default obj;
