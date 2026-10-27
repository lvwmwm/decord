// Module ID: 7261
// Function ID: 7262
// Name: AuthorizedAppsActionCreators
// Dependencies: [5, 7205, 1084, 4819, 584, 1294, 2]

// Module 7261 (AuthorizedAppsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1084 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import Timers from "Timers" /* 4819 */;
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 7205 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const AuthorizedAppsStore = AuthorizedAppsStore2;
let c4, c5;

function tokensToAppTokensMap(arg0, arr) {
  let mapped;
  const _Object = Object;
  if (arr != null) {
    mapped = arr.map((item) => {
      const items = [item, null];
      return items;
    });
  }
  if (mapped == null) {
    mapped = [];
  }
  const fromEntriesResult = fromEntries(mapped);
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    fromEntriesResult[nextResult.application.id] = nextResult;
    continue;
  }
  return fromEntriesResult;
}
function fetchAuthorizedApps() {
  return obj(...arguments);
}
let obj = function _fetchAuthorizedApps() {
  let OAUTH2_TOKENS;
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let obj4;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let body;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            body = undefined;
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: OAUTH2_TOKENS.OAUTH2_TOKENS, oldFormErrors: true, rejectWithError: true, query: obj4 };
            obj4 = { application_ids: applicationIds };
            c4 = 2;
            c5 = 1;
            const obj5 = { value: HTTP.get(request), done: false };
            return obj5;
          }
        } else if (1 === c4) {
          let obj6;
          c3 = 0;
          const dispatch2 = closure_130_1(closure_130_2[4]).dispatch;
          const tmp18 = closure_130_1(closure_130_2[4]);
          if (null == applicationIds) {
            obj6 = { type: "full" };
          } else {
            obj6 = { type: "partial", applicationIds };
          }
          const obj7 = { type: "USER_AUTHORIZED_APPS_REQUEST_FAILED", request: obj6 };
          c5 = 3;
          const obj8 = { value: dispatch2(obj7), done: true };
          return obj8;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          body = value;
          c3 = 0;
          obj = { type: "USER_AUTHORIZED_APPS_UPDATE", isFullFetch: null == applicationIds, tokens: closure_130_8(body.body, applicationIds) };
          const dispatch = closure_130_1(closure_130_2[4]).dispatch;
          const tmp9 = closure_130_1(closure_130_2[4]);
          c5 = 3;
          const obj10 = { value: dispatch(obj), done: true };
          return obj10;
        }
      } catch (tmp22) {
        if (0 === c3) {
          c5 = 3;
          throw tmp22;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const FetchState = AuthorizedAppsStore2.FetchState;
const Endpoints = Constants.Endpoints;
obj = {
  predicate(arg0) {
    return AuthorizedAppsStore.getFetchStateForApplication(arg0) !== FetchState.FETCHING;
  },
  onQueued(applicationIds) {
    let obj3;
    const obj2 = { type: "USER_AUTHORIZED_APPS_REQUEST", request: obj3 };
    obj3 = { type: "partial", applicationIds };
    obj = DispatcherDefault;
    return obj.dispatch(obj2);
  },
  onCancelled(applicationIds) {
    obj = DispatcherDefault;
    const obj2 = { type: "USER_AUTHORIZED_APPS_REQUEST_CANCELLED", applicationIds };
    return obj.dispatch(obj2);
  }
};
const batchInvocationManager = new Timers.BatchInvocationManager(fetchAuthorizedApps, obj);
let obj2 = {
  fetch(items) {
    if (AuthorizedAppsStore.getFetchState() !== FetchState.FETCHING) {
      if (null != items) {
        const queueResult = batchInvocationManager.queue(items);
        queueResult.catch((error) => {
          if (!(error instanceof Timers.BatchInvocationManagerResetError)) {
            throw error;
          }
        });
      } else {
        batchInvocationManager.reset();
        const obj2 = { type: "USER_AUTHORIZED_APPS_REQUEST", request: { type: "full" } };
        obj = DispatcherDefault;
        obj.dispatch(obj2);
        fetchAuthorizedApps();
      }
    }
  },
  delete: function(arg0) {
    const self = this;
    const HTTP = HTTPUtils.HTTP;
    obj = { url: Endpoints.OAUTH2_TOKEN(arg0), oldFormErrors: true, rejectWithError: true };
    const delResult = HTTP.del(obj);
    delResult.then(() => {
      const response = self.fetch();
    });
  }
};
const result = size.fileFinishedImporting("modules/oauth2/AuthorizedAppsActionCreators.tsx");

export default obj2;
