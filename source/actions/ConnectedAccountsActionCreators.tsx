// Module ID: 4935
// Function ID: 42266
// Name: callback
// Dependencies: []

// Module 4935 (callback)
function callback(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const HTTP = arg1(dependencyMap[4]).HTTP;
  let obj = { url: closure_6.CONNECTIONS_CALLBACK(arg0) };
  obj = {};
  const merged = Object.assign(arg1);
  obj["insecure"] = flag;
  obj["friend_sync"] = set.has(arg0);
  obj.body = obj;
  obj.oldFormErrors = true;
  obj.rejectWithError = arg1(dependencyMap[4]).rejectWithMigratedError();
  return HTTP.post(obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ AbortCodes: closure_5, Endpoints: closure_6, FRIEND_SYNC_PLATFORM_TYPES: closure_7, AnalyticEvents: closure_8 } = arg1(dependencyMap[2]));
let importDefaultResult = importDefault(dependencyMap[3]);
importDefaultResult = new importDefaultResult("ConnectedAccounts");
const obj = {
  fetch() {
    const HTTP = arg1(dependencyMap[4]).HTTP;
    const obj = { y: null, isArray: null, accessible: null, url: closure_6.CONNECTIONS };
    const value = HTTP.get(obj);
    return value.then((accounts) => {
      let obj = callback(closure_2[5]);
      obj = { accounts: accounts.body };
      return obj.dispatch(obj);
    }, () => callback(closure_2[5]).dispatch({ accounts: [] }));
  },
  authorize(arg0) {
    let obj = arg1;
    const arg1 = arg0;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ location: closure_1, twoWayLinkType: closure_2, userCode: closure_3, twoWayLink: closure_4, successRedirect: closure_5, handle: closure_6 } = obj);
    return callback(async () => {
      let obj = callback2(closure_2[6]);
      obj = { platform_type: callback, location: callback2 };
      obj.track(constants.CONNECTED_ACCOUNT_INITIATED, obj);
      const result = closure_6.CONNECTIONS_AUTHORIZE(callback);
      const str = new URLSearchParams();
      if (null != closure_3) {
        str.append("two_way_user_code", closure_3);
      }
      if (null != closure_5) {
        str.append("success_redirect", closure_5);
      }
      if (null != closure_2) {
        str.append("two_way_link_type", closure_2);
        str.append("two_way_link", "true");
      } else if (null != closure_4) {
        const _String = String;
        str.append("two_way_link", String(closure_4));
      }
      if (null != closure_6) {
        str.append("handle", closure_6);
      }
      const text = `${tmp2}?${str.toString()}`;
      const HTTP = callback(closure_2[4]).HTTP;
      obj = { url: text, oldFormErrors: true, rejectWithError: callback(closure_2[4]).rejectWithMigratedError() };
      const tmp16 = yield HTTP.get(obj);
      const obj4 = callback(closure_2[4]);
      const url = tmp16.body.url;
      let str9 = "";
      if (null != url) {
        str9 = url;
      }
      const state = callback(closure_2[7]).getCallbackParamsFromURL(str9).state;
      if (null != state) {
        const result1 = closure_4.addPendingAuthorizedState(state);
      }
      return tmp16;
    })();
  },
  callback,
  connect(arg0, arg1, name, location, friend_sync) {
    let obj = importDefault(dependencyMap[8]);
    obj = { url: closure_6.CONNECTION(arg0, arg1) };
    obj = { name };
    friend_sync = undefined;
    if (null != friend_sync) {
      friend_sync = friend_sync.friend_sync;
    }
    if (null == friend_sync) {
      friend_sync = set.has(arg0);
    }
    obj.friend_sync = friend_sync;
    obj.body = obj;
    obj.context = { location };
    obj.oldFormErrors = true;
    const obj2 = { event: arg1(dependencyMap[9]).NetworkActionNames.USER_CONNECTIONS_UPDATE, properties: { name, friend_sync: set.has(arg0) } };
    obj.trackedActionData = obj2;
    const obj1 = { location };
    const obj3 = { name, friend_sync: set.has(arg0) };
    obj.rejectWithError = arg1(dependencyMap[4]).rejectWithMigratedError();
    return obj.put(obj);
  },
  disconnect(arg0, arg1) {
    const HTTP = arg1(dependencyMap[4]).HTTP;
    const obj = { url: closure_6.CONNECTION(arg0, arg1), oldFormErrors: true, rejectWithError: arg1(dependencyMap[4]).rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  refresh(arg0, arg1) {
    const HTTP = arg1(dependencyMap[4]).HTTP;
    const obj = { url: closure_6.CONNECTION_REFRESH(arg0, arg1), oldFormErrors: true, rejectWithError: arg1(dependencyMap[4]).rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  setVisibility(type, id, inProgressVisibility) {
    return this.update(type, id, { visibility: 1 === inProgressVisibility });
  },
  setMetadataVisibility(type, id, inProgressMetadataVisibility) {
    return this.update(type, id, { metadata_visibility: 1 === inProgressMetadataVisibility });
  },
  setFriendSync(type, id, enabled) {
    return this.update(type, id, { friend_sync: enabled });
  },
  setShowActivity(type, id, show_activity) {
    return this.update(type, id, { show_activity });
  },
  update(arg0, arg1, body) {
    let obj = importDefault(dependencyMap[8]);
    obj = { url: closure_6.CONNECTION(arg0, arg1), body, oldFormErrors: true };
    obj = { event: arg1(dependencyMap[9]).NetworkActionNames.USER_CONNECTIONS_UPDATE };
    const merged = Object.assign(body);
    obj.properties = {};
    obj.trackedActionData = obj;
    obj.rejectWithError = arg1(dependencyMap[4]).rejectWithMigratedError();
    return obj.patch(obj);
  },
  joinServer(id, arg1) {
    arg1 = id;
    const importDefault = arg1;
    let obj = importDefault(dependencyMap[5]);
    obj = { integrationId: id };
    obj.dispatch(obj);
    const HTTP = arg1(dependencyMap[4]).HTTP;
    obj = { url: closure_6.INTEGRATION_JOIN(id), oldFormErrors: true, rejectWithError: arg1(dependencyMap[4]).rejectWithMigratedError() };
    HTTP.post(obj, (ok) => {
      let obj = arg1(closure_2[5]);
      obj = { "Null": 0.5, "Null": "M15 6h-1v2h1V6Z", "Null": true, integrationId: ok };
      obj.dispatch(obj);
      if (!ok.ok) {
        obj = { type: "USER_CONNECTIONS_INTEGRATION_JOINING_ERROR", integrationId: ok };
        let message;
        if (!ok.hasErr) {
          message = ok.body.message;
        }
        obj.error = message;
        arg1(closure_2[5]).dispatch(obj);
        if (null != arg1) {
          arg1();
        }
        const obj3 = arg1(closure_2[5]);
      }
    });
  },
  refreshAccessToken(type, id) {
    id = type;
    const importDefault = id;
    return callback(async () => {
      const HTTP = callback(closure_2[4]).HTTP;
      let obj = { url: closure_6.CONNECTION_ACCESS_TOKEN(callback, callback2), oldFormErrors: true, rejectWithError: callback(closure_2[4]).rejectWithMigratedError() };
      const access_token = yield HTTP.get(obj).body.access_token;
      const obj2 = callback(closure_2[4]);
      obj = { type: "USER_CONNECTION_UPDATE", platformType: callback, id: callback2, accessToken: access_token };
      callback2(closure_2[5]).dispatch(obj);
      return access_token;
    })();
  },
  linkDispatchAuthCallback(arg0, arg1) {
    const HTTP = arg1(dependencyMap[4]).HTTP;
    let obj = { url: closure_6.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(arg0) };
    obj = {};
    const merged = Object.assign(arg1);
    obj.body = obj;
    obj.oldFormErrors = true;
    obj.rejectWithError = arg1(dependencyMap[4]).rejectWithMigratedError();
    return HTTP.post(obj);
  },
  completeTwoWayLink(arg0, location, arg2, arg3) {
    location = arg0;
    const importDefault = location;
    const dependencyMap = arg2;
    const callback = arg3;
    let closure_4 = arg4;
    return callback(async () => {
      if (null != closure_1) {
        let obj = callback(closure_2[7]);
        const callbackParamsFromURL = obj.getCallbackParamsFromURL(closure_1);
        const error = callbackParamsFromURL.error;
        if (null == error) {
          obj = { code: closure_2, state: closure_3, two_way_link_code: tmp7, token_redirect_uri: closure_4 };
          return yield closure_10(closure_0, obj);
        } else {
          obj = { error, errorDescription: tmp8 };
          closure_9.error("Two-way link: missing authorize code", obj);
        }
      } else {
        closure_9.error("Two-way link: missing authorize location");
      }
    })();
  },
  sessionHandoff(arg0, state, code, openid_params, iss) {
    const HTTP = state(dependencyMap[4]).HTTP;
    let obj = { url: closure_6.CONNECTIONS_SESSION_HANDOFF(arg0), body: obj, oldFormErrors: true };
    obj = { state, code, openid_params, iss, rejectWithError: state(dependencyMap[4]).rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  getHandoffStatus(arg0, state) {
    const str = new URLSearchParams();
    str.append("state", state);
    const result = closure_6.CONNECTIONS_SESSION_HANDOFF(arg0);
    const url = "" + result + "?" + str.toString();
    const HTTP = state(dependencyMap[4]).HTTP;
    const body = { state };
    return HTTP.get({ url, body, rejectWithError: true });
  }
};
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("actions/ConnectedAccountsActionCreators.tsx");

export default obj;
