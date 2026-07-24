// Module ID: 4938
// Function ID: 42288
// Name: callback
// Dependencies: [5, 4812, 653, 3, 507, 686, 675, 4939, 4942, 480, 2]

// Module 4938 (callback)
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import importDefaultResult from "timestamp";

let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function callback(arg0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  let obj = { url: closure_6.CONNECTIONS_CALLBACK(arg0) };
  obj = {};
  const merged = Object.assign(arg1);
  obj["insecure"] = flag;
  obj["friend_sync"] = set.has(arg0);
  obj.body = obj;
  obj.oldFormErrors = true;
  obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
  return HTTP.post(obj);
}
({ AbortCodes: closure_5, Endpoints: closure_6, FRIEND_SYNC_PLATFORM_TYPES: closure_7, AnalyticEvents: closure_8 } = ME);
importDefaultResult = new importDefaultResult("ConnectedAccounts");
let result = require("ME").fileFinishedImporting("actions/ConnectedAccountsActionCreators.tsx");

export default {
  fetch() {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    let obj = { url: closure_6.CONNECTIONS, oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj);
    return value.then((body) => {
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "USER_CONNECTIONS_UPDATE", local: true, accounts: body.body };
      return obj.dispatch(obj);
    }, () => {
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "USER_CONNECTIONS_UPDATE", local: true, accounts: [] };
      return obj.dispatch(obj);
    });
  },
  authorize(arg0) {
    let dispatcher;
    let _isNativeReflectConstruct;
    let closure_5;
    let closure_6;
    let dependencyMap;
    let importDefault;
    let obj = arg1;
    let closure_0 = arg0;
    if (arg1 === undefined) {
      obj = {};
    }
    ({ location: importDefault, twoWayLinkType: dependencyMap, userCode: dispatcher, twoWayLink: _isNativeReflectConstruct, successRedirect: closure_5, handle: closure_6 } = obj);
    return callback(async () => {
      let obj = outer2_1(outer2_2[6]);
      obj = { platform_type: outer1_0, location: outer1_1 };
      obj.track(outer2_8.CONNECTED_ACCOUNT_INITIATED, obj);
      const result = outer2_6.CONNECTIONS_AUTHORIZE(outer1_0);
      const str = new URLSearchParams();
      if (null != outer1_3) {
        str.append("two_way_user_code", outer1_3);
      }
      if (null != outer1_5) {
        str.append("success_redirect", outer1_5);
      }
      if (null != outer1_2) {
        str.append("two_way_link_type", outer1_2);
        str.append("two_way_link", "true");
      } else if (null != outer1_4) {
        const _String = String;
        str.append("two_way_link", String(outer1_4));
      }
      if (null != outer1_6) {
        str.append("handle", outer1_6);
      }
      const text = `${tmp2}?${str.toString()}`;
      const HTTP = callback(outer2_2[4]).HTTP;
      obj = { url: text, oldFormErrors: true, rejectWithError: callback(outer2_2[4]).rejectWithMigratedError() };
      const tmp16 = yield HTTP.get(obj);
      const obj4 = callback(outer2_2[4]);
      const url = tmp16.body.url;
      let str9 = "";
      if (null != url) {
        str9 = url;
      }
      const state = callback(outer2_2[7]).getCallbackParamsFromURL(str9).state;
      if (null != state) {
        const result1 = outer2_4.addPendingAuthorizedState(state);
      }
      return tmp16;
    })();
  },
  callback,
  connect(arg0, arg1, name, location, friend_sync) {
    let obj = importDefault(4942);
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
    const obj2 = { event: require(480) /* isThrottled */.NetworkActionNames.USER_CONNECTIONS_UPDATE, properties: { name, friend_sync: set.has(arg0) } };
    obj.trackedActionData = obj2;
    const obj1 = { location };
    const obj3 = { name, friend_sync: set.has(arg0) };
    obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    return obj.put(obj);
  },
  disconnect(arg0, arg1) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: closure_6.CONNECTION(arg0, arg1), oldFormErrors: true, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.del(obj);
  },
  refresh(arg0, arg1) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: closure_6.CONNECTION_REFRESH(arg0, arg1), oldFormErrors: true, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
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
    let obj = importDefault(4942);
    obj = { url: closure_6.CONNECTION(arg0, arg1), body, oldFormErrors: true };
    obj = { event: require(480) /* isThrottled */.NetworkActionNames.USER_CONNECTIONS_UPDATE };
    const merged = Object.assign(body);
    obj.properties = {};
    obj.trackedActionData = obj;
    obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    return obj.patch(obj);
  },
  joinServer(id, arg1) {
    const _require = id;
    const importDefault = arg1;
    let obj = importDefault(686);
    obj = { type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId: id, joining: true };
    obj.dispatch(obj);
    const HTTP = _require(507).HTTP;
    obj = { url: closure_6.INTEGRATION_JOIN(id), oldFormErrors: true, rejectWithError: _require(507).rejectWithMigratedError() };
    HTTP.post(obj, (ok) => {
      let obj = callback(outer1_2[5]);
      obj = { type: "USER_CONNECTIONS_INTEGRATION_JOINING", integrationId: closure_0, joining: false };
      obj.dispatch(obj);
      if (!ok.ok) {
        obj = { type: "USER_CONNECTIONS_INTEGRATION_JOINING_ERROR", integrationId: closure_0 };
        let message;
        if (!ok.hasErr) {
          message = ok.body.message;
        }
        obj.error = message;
        callback(outer1_2[5]).dispatch(obj);
        if (null != callback) {
          callback();
        }
        const obj3 = callback(outer1_2[5]);
      }
    });
  },
  refreshAccessToken(type, id) {
    let closure_0 = type;
    let closure_1 = id;
    return callback(async () => {
      const HTTP = callback(outer2_2[4]).HTTP;
      let obj = { url: outer2_6.CONNECTION_ACCESS_TOKEN(outer1_0, outer1_1), oldFormErrors: true, rejectWithError: callback(outer2_2[4]).rejectWithMigratedError() };
      const access_token = yield HTTP.get(obj).body.access_token;
      const obj2 = callback(outer2_2[4]);
      obj = { type: "USER_CONNECTION_UPDATE", platformType: outer1_0, id: outer1_1, accessToken: access_token };
      callback2(outer2_2[5]).dispatch(obj);
      return access_token;
    })();
  },
  linkDispatchAuthCallback(arg0, arg1) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    let obj = { url: closure_6.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(arg0) };
    obj = {};
    const merged = Object.assign(arg1);
    obj.body = obj;
    obj.oldFormErrors = true;
    obj.rejectWithError = require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  completeTwoWayLink(arg0, location, arg2, arg3) {
    let closure_0 = arg0;
    let closure_1 = location;
    let closure_2 = arg2;
    const callback = arg3;
    let _isNativeReflectConstruct = arg4;
    return callback(async () => {
      if (null != outer1_1) {
        let obj = callback(table[7]);
        const callbackParamsFromURL = obj.getCallbackParamsFromURL(outer1_1);
        const error = callbackParamsFromURL.error;
        if (null == error) {
          obj = { code: outer1_2, state: outer1_3, two_way_link_code: tmp7, token_redirect_uri: outer1_4 };
          return yield outer2_10(outer1_0, obj);
        } else {
          obj = { error, errorDescription: tmp8 };
          outer2_9.error("Two-way link: missing authorize code", obj);
        }
      } else {
        outer2_9.error("Two-way link: missing authorize location");
      }
    })();
  },
  sessionHandoff(arg0, state, code, openid_params, iss) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_6.CONNECTIONS_SESSION_HANDOFF(arg0), body: obj, oldFormErrors: true };
    obj = { state, code, openid_params, iss, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.post(obj);
  },
  getHandoffStatus(arg0, state) {
    const str = new URLSearchParams();
    str.append("state", state);
    const result = closure_6.CONNECTIONS_SESSION_HANDOFF(arg0);
    const url = "" + result + "?" + str.toString();
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const body = { state };
    return HTTP.get({ url, body, rejectWithError: true });
  }
};
