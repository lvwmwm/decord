// Module ID: 6793
// Function ID: 6794
// Name: AuthorizedAppsStore
// Dependencies: [32, 2064, 6794, 5429, 1388, 504, 584, 2]

// Module 6793 (AuthorizedAppsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import ConnectedAppsStore from "ConnectedAppsStore" /* 6794 */;
import MessageStore from "MessageStore" /* 5429 */;
import size from "module_2" /* 2 */;

const f94105 = (application) => null == application.application.parent_id;
function recomputeFromAppTokens() {
  const items = [...map.values()];
  closure_8 = items;
  closure_9 = items.filter(f94105);
}
function updateFetchStates(FETCHED, applicationIds) {
  if (null == applicationIds) {
    NOT_FETCHED = FETCHED;
    map1.clear();
    closure_12 = closure_12 + 1;
  } else {
    const tmp2 = applicationIds[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let result = map1.set(tmp4, FETCHED);
      continue;
    }
    closure_12 = closure_12 + 1;
  }
}
const FetchState = { NOT_FETCHED: "NOT_FETCHED", FETCHING: "FETCHING", FETCHED: "FETCHED" };
let map = new Map();
let closure_8 = [];
let closure_9 = [];
let NOT_FETCHED = FetchState.NOT_FETCHED;
const map1 = new Map();
let closure_12 = 0;
const Store = get_initializedDefault.Store;
class AuthorizedAppsStore extends Store {
  initialize() {
    this.waitFor(ChannelStore, ConnectedAppsStore, MessageStore);
  }
  getNewestTokenForApplication(application_id) {
    let tmp = null;
    if (null != application_id) {
      let value = map.get(application_id);
      if (value == null) {
        value = null;
      }
      tmp = value;
    }
    return tmp;
  }
  getNewestTokens() {
    return closure_8;
  }
  getNewestTokensForNonChildrenApplications() {
    return closure_9;
  }
  getFetchState() {
    return NOT_FETCHED;
  }
  getFetchStateForApplication(arg0) {
    if (NOT_FETCHED !== obj.FETCHING) {
      let value;
      if (NOT_FETCHED !== tmp.FETCHED) {
        value = map1.get(arg0);
        if (value == null) {
          value = NOT_FETCHED;
        }
      }
      return value;
    }
    value = NOT_FETCHED;
  }
  getApplicationFetchStateVersion() {
    return closure_12;
  }
}
const prototype = AuthorizedAppsStore.prototype;
AuthorizedAppsStore.displayName = "AuthorizedAppsStore";
const obj2 = {
  USER_AUTHORIZED_APPS_REQUEST: function handleUserAuthorizedAppsRequest(request) {
    if ("full" === request.request.type) {
      updateFetchStates(obj.FETCHING);
    } else {
      updateFetchStates(obj.FETCHING, request.request.applicationIds);
    }
  },
  USER_AUTHORIZED_APPS_REQUEST_CANCELLED: function handleUserAuthorizedAppsRequestCancelled(applicationIds) {
    let flag = false;
    applicationIds = applicationIds.applicationIds;
    for (const item10008 of applicationIds) {
      let obj = map1;
      let tmp = item10008;
      if (map1.get(item10008) === obj.FETCHING) {
        let deleteResult = obj.delete(tmp);
        flag = true;
      }
      continue;
    }
    if (flag) {
      closure_12 = closure_12 + 1;
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
    let tmp12;
    let tmp13;
    const FETCHED = obj.FETCHED;
    if (isFullFetch.isFullFetch) {
      updateFetchStates(FETCHED);
      const _Map = Map;
      const _Object3 = Object;
      const entries = Object.entries(isFullFetch.tokens);
      const self = this;
      const self2 = this;
      map = new Map(entries.filter(GlobalUtils.isObjectEntryNotNullish));
      recomputeFromAppTokens();
    } else {
      const _Object = Object;
      updateFetchStates(FETCHED, Object.keys(isFullFetch.tokens));
      const _Object2 = Object;
      const entries1 = Object.entries(isFullFetch.tokens);
      const tmp5 = entries1[Symbol.iterator]();
      while (tmp5 !== undefined) {
        let tmp11 = _slicedToArray(tmp8, 2);
        [tmp12, tmp13] = tmp11;
        if (null == tmp13) {
          let deleteResult = map.delete(tmp12);
        } else {
          let result = map.set(tmp12, tmp14);
        }
        continue;
      }
      recomputeFromAppTokens();
    }
  },
  OAUTH2_TOKEN_CREATE: function handleOAuth2TokenCreate(application) {
    application = application.application;
    const obj = { id: application.id, application, scopes: application.scopes };
    const result = map.set(application.id, obj);
    const items = [...map.values()];
    closure_8 = items;
    closure_9 = items.filter(f94105);
  },
  OAUTH2_TOKEN_DELETE: function handleOAuth2TokenDelete(id) {
    id = id.id;
    const value = map.get(id.applicationId);
    if (null != value) {
      if (value.id === id) {
        map.delete(value.application.id);
        const items = [];
        HermesBuiltin.arraySpread(items, map.values(), 0);
        closure_8 = items;
        closure_9 = items.filter(f94105);
      }
    }
    return false;
  },
  LOGOUT: function handleLogout() {
    new Map();
    closure_8 = [];
    closure_9 = [];
    NOT_FETCHED = obj.NOT_FETCHED;
    map1.clear();
    closure_12 = closure_12 + 1;
  }
};
const authorizedAppsStore = new AuthorizedAppsStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/oauth2/AuthorizedAppsStore.tsx");

export default authorizedAppsStore;
export { FetchState };
