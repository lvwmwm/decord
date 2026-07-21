// Module ID: 5470
// Function ID: 46729
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 5470 (_createForOfIteratorHelperLoose)
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
async function _fetchAuthorizedApps(applicationIds, arg1) {
  let obj = callback(closure_2[4]);
  obj = { type: "USER_AUTHORIZED_APPS_REQUEST" };
  if (null == applicationIds) {
    obj = { type: "full" };
    let obj1 = obj;
  } else {
    obj1 = { type: "partial", applicationIds };
  }
  obj.request = obj1;
  obj.dispatch(obj);
  const HTTP = applicationIds(closure_2[5]).HTTP;
  const obj2 = { disabled: null, accessibilityHint: null, legacyCompat_selected: null, url: OAUTH2_TOKENS.OAUTH2_TOKENS, query: { application_ids: applicationIds } };
  const value = HTTP.get(obj2);
  yield value.then((body) => {
    let obj = callback(closure_2[4]);
    obj = { type: "USER_AUTHORIZED_APPS_UPDATE", isFullFetch: null == body, tokens: callback2(body.body, body) };
    return obj.dispatch(obj);
  }, () => {
    let obj = callback(closure_2[4]);
    obj = { type: "USER_AUTHORIZED_APPS_REQUEST_FAILED" };
    if (null == arg0) {
      obj = { type: "full" };
      let obj1 = obj;
    } else {
      obj1 = { type: "partial", applicationIds: arg0 };
    }
    obj.request = obj1;
    return obj.dispatch(obj);
  });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const FetchState = arg1(dependencyMap[1]).FetchState;
const Endpoints = arg1(dependencyMap[2]).Endpoints;
const batchInvocationManager = new arg1(dependencyMap[3]).BatchInvocationManager(fetchAuthorizedApps, (arg0) => store.getFetchStateForApplication(arg0) !== FetchState.FETCHING);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/oauth2/AuthorizedAppsActionCreators.tsx");

export default {
  fetch(arg0) {
    if (store.getFetchState() !== FetchState.FETCHING) {
      if (null != arg0) {
        batchInvocationManager.queue(arg0);
      } else {
        batchInvocationManager.reset();
        fetchAuthorizedApps();
      }
    }
  },
  delete(arg0) {
    const arg1 = this;
    const HTTP = arg1(dependencyMap[5]).HTTP;
    const obj = { disabled: null, accessibilityHint: null, legacyCompat_selected: null, url: Endpoints.OAUTH2_TOKEN(arg0) };
    HTTP.del(obj).then(() => {
      const response = self.fetch();
    });
  }
};
