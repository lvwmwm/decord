// Module ID: 10930
// Function ID: 84923
// Name: apiRequest
// Dependencies: [10929, 8355, 653, 4015, 507, 686, 664, 477, 8640, 2]
// Exports: fetchIsSpotifyProtocolRegistered, getDevices, getProfile, pause, play, setActiveDevice

// Module 10930 (apiRequest)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import spotifyUtmParams from "spotifyUtmParams";
import ME from "ME";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
function apiRequest(arg0, arg1, arg2, arg3) {
  let num = arg4;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj = arg3;
  if (arg4 === undefined) {
    num = 1;
  }
  obj = {};
  const merged = Object.assign(arg3);
  obj = { authorization: "Bearer " + arg2 };
  obj["headers"] = obj;
  const promise = arg0(obj);
  return arg0(obj).then((status) => {
    let rejectResult = status;
    if (202 === status.status) {
      rejectResult = Promise.reject(status);
    }
    return rejectResult;
  }).catch((status) => {
    let tmp = true !== obj.onlyRetryOnAuthorizationErrors;
    if (tmp) {
      tmp = 202 === status.status;
    }
    if (401 === status.status) {
      if (num > 0) {
        if (202 === status.status) {
          obj = callback(obj[3]);
          let timeoutPromiseResult = obj.timeoutPromise(5000);
        } else {
          timeoutPromiseResult = Promise.resolve();
        }
        const nextPromise = timeoutPromiseResult.then(() => outer2_11(outer1_1));
        timeoutPromiseResult.then(() => outer2_11(outer1_1)).then((body) => outer2_10(outer1_0, outer1_1, body.body.access_token, outer1_2, outer1_3 - 1)).then((arg0) => {
          let closure_0 = arg0;
          return new Promise((arg0) => {
            let closure_0 = arg0;
            return setImmediate(() => callback(callback));
          });
        });
        const nextPromise1 = timeoutPromiseResult.then(() => outer2_11(outer1_1)).then((body) => outer2_10(outer1_0, outer1_1, body.body.access_token, outer1_2, outer1_3 - 1));
      }
    }
    return Promise.reject(status);
  });
}
function getAccessToken(id) {
  const _require = id;
  const HTTP = _require(507).HTTP;
  let obj = { url: closure_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, id), oldFormErrors: true, rejectWithError: false };
  const value = HTTP.get(obj);
  return value.catch((body) => {
    body = body.body;
    let code;
    if (null != body) {
      code = body.code;
    }
    if (code === outer1_6.CONNECTION_REVOKED) {
      let obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId: id };
      outer1_1(outer1_2[5]).dispatch(obj);
      const obj2 = outer1_1(outer1_2[5]);
    } else if (429 === body.status) {
      const result = body.headers["retry-after"] * outer1_1(outer1_2[6]).Millis.SECOND;
      const _isNaN = isNaN;
      let num2 = 5000;
      if (!isNaN(result)) {
        num2 = 5000;
        if (0 !== result) {
          num2 = result;
        }
      }
      obj = id(outer1_2[3]);
      return obj.timeoutPromise(num2).then(() => outer2_11(outer1_0));
    }
    return Promise.reject(body);
  }).then((accessToken) => {
    let obj = outer1_1(outer1_2[5]);
    obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId: closure_0, accessToken: accessToken.body.access_token };
    obj.dispatch(obj);
    return accessToken;
  });
}
({ SPOTIFY_APP_PROTOCOL: closure_4, SpotifyEndpoints: closure_5 } = spotifyUtmParams);
({ AbortCodes: closure_6, Endpoints: closure_7, PlatformTypes: closure_8 } = ME);
let obj = { get: apiRequest.bind(null, require("_isNativeReflectConstruct").HTTP.get), put: apiRequest.bind(null, require("_isNativeReflectConstruct").HTTP.put) };
let result = require("ME").fileFinishedImporting("modules/spotify/SpotifyActionCreators.tsx");
function subscribePlayerStateNotifications(accountId, accessToken, connectionId) {
  let num = arg3;
  let closure_0 = accountId;
  let closure_1 = accessToken;
  let closure_2 = connectionId;
  if (arg3 === undefined) {
    num = 2;
  }
  obj = { url: closure_5.NOTIFICATIONS_PLAYER, query: obj };
  obj = { connection_id: connectionId };
  return obj.put(accountId, accessToken, obj).catch((arg0) => {
    if (num <= 0) {
      let rejectResult = Promise.reject(arg0);
    } else {
      const obj = accountId(table[3]);
      rejectResult = accountId(table[3]).timeoutPromise(5000).then(() => outer2_12(outer1_0, outer1_1, outer1_2, outer1_3 - 1));
      const timeoutPromiseResult = accountId(table[3]).timeoutPromise(5000);
    }
    return rejectResult;
  });
}

export const SpotifyAPI = obj;
export { getAccessToken };
export { subscribePlayerStateNotifications };
export const getProfile = function getProfile(accountId, accessToken) {
  let closure_0 = accountId;
  let obj = { url: closure_5.PROFILE };
  const value = obj.get(accountId, accessToken, obj);
  return value.then((body) => {
    let obj = outer1_1(outer1_2[5]);
    obj = { type: "SPOTIFY_PROFILE_UPDATE", accountId: closure_0, isPremium: "premium" === body.body.product };
    obj.dispatch(obj);
    return body;
  });
};
export const getDevices = function getDevices(accountId, accessToken) {
  let closure_0 = accountId;
  let obj = { url: closure_5.PLAYER_DEVICES };
  const value = obj.get(accountId, accessToken, obj);
  return value.then((body) => {
    if (body.body) {
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "SPOTIFY_SET_DEVICES", accountId: closure_0, devices: body.body.devices };
      obj.dispatch(obj);
    }
    return body;
  });
};
export const play = function play(arg0, arg1, sync_id, TRACK) {
  let c5;
  let contextUri;
  let obj = arg4;
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = sync_id;
  if (arg4 === undefined) {
    obj = {};
  }
  let deviceId;
  let position;
  c5 = undefined;
  const PLAYER_OPENResult = c5.PLAYER_OPEN(TRACK, sync_id, false);
  deviceId = obj.deviceId;
  position = obj.position;
  ({ contextUri, repeat: c5 } = obj);
  obj = { url: c5.PLAYER_PLAY, query: { device_id: deviceId } };
  obj = {};
  let tmp3;
  if (null != contextUri) {
    tmp3 = contextUri;
  }
  obj.context_uri = tmp3;
  let tmp4;
  if (null == contextUri) {
    const items = [PLAYER_OPENResult];
    tmp4 = items;
  }
  obj.uris = tmp4;
  let tmp5;
  if (null != contextUri) {
    const obj1 = { uri: PLAYER_OPENResult };
    tmp5 = obj1;
  }
  obj.offset = tmp5;
  let num = 0;
  if (null != position) {
    num = position;
  }
  obj.position_ms = num;
  obj.body = obj;
  let putResult = obj.put(arg0, arg1, obj);
  return obj.put(arg0, arg1, obj).then((arg0) => {
    let putResult = arg0;
    if (null != _undefined) {
      let obj = { url: _undefined.PLAYER_REPEAT };
      obj = { device_id: deviceId };
      let str = "off";
      if (_undefined) {
        str = "context";
      }
      obj.state = str;
      obj.query = obj;
      putResult = outer1_9.put(closure_0, closure_1, obj);
      const tmp3 = closure_0;
      const tmp4 = closure_1;
    }
    return putResult;
  }).then((arg0) => {
    let obj = callback(sync_id[5]);
    obj = { type: "SPOTIFY_PLAYER_PLAY", id: sync_id };
    let num = 0;
    if (null != position) {
      num = position;
    }
    obj.position = num;
    obj.dispatch(obj);
    return arg0;
  });
};
export const pause = function pause(arg0, arg1) {
  const obj = { url: closure_5.PLAYER_PAUSE };
  return obj.put(arg0, arg1, obj).then((arg0) => {
    outer1_1(outer1_2[5]).dispatch({ type: "SPOTIFY_PLAYER_PAUSE" });
    return arg0;
  });
};
export const fetchIsSpotifyProtocolRegistered = function fetchIsSpotifyProtocolRegistered() {
  if (!protocolRegistered.isProtocolRegistered()) {
    if (obj.isDesktop()) {
      const obj2 = importDefault(8640);
      importDefault(8640).isProtocolRegistered(closure_4).then((isRegistered) => {
        let obj = outer1_1(outer1_2[5]);
        obj = { type: "SPOTIFY_SET_PROTOCOL_REGISTERED", isRegistered };
        obj.dispatch(obj);
      });
      const isProtocolRegisteredResult = importDefault(8640).isProtocolRegistered(closure_4);
    }
    obj = require(477) /* set */;
  }
};
export const setActiveDevice = function setActiveDevice(accountId, deviceId) {
  let obj = importDefault(686);
  obj = { type: "SPOTIFY_SET_ACTIVE_DEVICE", accountId, deviceId };
  obj.dispatch(obj);
};
