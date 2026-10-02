// Module ID: 11125
// Function ID: 11126
// Name: SpotifyActionCreators
// Dependencies: [11124, 7792, 1086, 2046, 1283, 585, 1103, 1370, 8135, 2]
// Exports: fetchIsSpotifyProtocolRegistered, getAccessToken, getDevices, getProfile, pause, play, setActiveDevice, subscribePlayerStateNotifications

// Module 11125 (SpotifyActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import PlatformUtils from "PlatformUtils" /* 1370 */;
import GameUtilsDefault from "GameUtils" /* 8135 */;
import SpotifyProtocolStore from "SpotifyProtocolStore" /* 11124 */;
import SpotifyConstants from "SpotifyConstants" /* 7792 */;
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function apiRequest(fn, arg1, arg2, arg3) {
  let num;
  const f106290 = (status) => {
    let rejectResult = status;
    if (202 === status.status) {
      rejectResult = Promise.reject(status);
    }
    return rejectResult;
  };
  const f106291 = (error) => {
    let tmp = true !== obj.onlyRetryOnAuthorizationErrors;
    if (tmp) {
      let num = 202;
      tmp = 202 === error.status;
    }
    if (401 === error.status) {
      let nextPromise2;
      let tmp2 = closure_3;
      let num2 = 0;
      if (closure_3 > 0) {
        let timeoutPromiseResult;
        let num3 = 202;
        if (202 === error.status) {
          let tmp5 = closure_2_0;
          let tmp6 = closure_2_2;
          obj = closure_2_0(closure_2_2[3]);
          let num4 = 5000;
          timeoutPromiseResult = obj.timeoutPromise(5000);
        } else {
          let tmp4 = globalThis;
          let _Promise = Promise;
          timeoutPromiseResult = Promise.resolve();
        }
        let nextPromise = timeoutPromiseResult.then(() => {
          const f106292 = (error) => {
            let body = error.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code === constants.CONNECTION_REVOKED) {
              let tmp3 = closure_2_1;
              let tmp4 = closure_2_2;
              let obj2 = closure_2_1(closure_2_2[5]);
              let obj3 = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId };
              let tmp5 = accountId;
              let dispatchResult = obj2.dispatch(obj3);
            } else {
              let num3 = 429;
              if (429 === error.status) {
                let tmp7 = closure_2_1;
                let tmp8 = closure_2_2;
                let result = error.headers["retry-after"] * closure_2_1(closure_2_2[6]).Millis.SECOND;
                let tmp10 = globalThis;
                let _isNaN = isNaN;
                let num4 = 5000;
                let num2 = 5000;
                if (!isNaN(result)) {
                  let num = 0;
                  num2 = 5000;
                  if (0 !== result) {
                    num2 = result;
                  }
                }
                let tmp2 = closure_2_0;
                let obj = closure_2_0(tmp8[3]);
                let timeoutPromiseResult = obj.timeoutPromise(num2);
                return timeoutPromiseResult.then(f139683);
              }
            }
            return Promise.reject(error);
          };
          const f106293 = (body) => {
            const access_token = body.body.access_token;
            const obj = closure_2_1(closure_2_2[5]);
            const obj2 = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId, accessToken: access_token };
            obj.dispatch(obj2);
            return body;
          };
          closure_0 = closure_1_1;
          const HTTP = closure_0(obj[4]).HTTP;
          obj = { url: closure_2_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, closure_1_1), oldFormErrors: true, rejectWithError: false };
          const value = HTTP.get(obj);
          const catchPromise = value.catch(f106292);
          return catchPromise.then(f106293);
        });
        let nextPromise1 = nextPromise.then(f139681);
        nextPromise2 = nextPromise1.then((result) => {
          closure_0 = result;
          const promise = new Promise((arg0) => {
            closure_0 = arg0;
            return setImmediate(() => closure_0(closure_0));
          });
          return promise;
        });
      }
      return nextPromise2;
    }
    nextPromise2 = Promise.reject(error);
  };
  let closure_0 = fn;
  let closure_1 = arg1;
  obj = { headers: { authorization: "Bearer " + arg2 } };
  const merged = Object.assign(arg3);
  ({ authorization: "Bearer " + arg2 });
  const promise = fn(obj);
  const nextPromise = promise.then(f106290);
  return nextPromise.catch(f106291);
}
({ SPOTIFY_APP_PROTOCOL: closure_4, SpotifyEndpoints: hasOwnProperty } = SpotifyConstants);
({ AbortCodes: metroRequire, Endpoints: metroImportDefault, PlatformTypes: metroImportAll } = Constants);
const SpotifyAPI = { get: apiRequest.bind(null, HTTPUtils.HTTP.get), put: apiRequest.bind(null, HTTPUtils.HTTP.put) };
const result = size.fileFinishedImporting("modules/spotify/SpotifyActionCreators.tsx");

export { SpotifyAPI };
export const getAccessToken = function getAccessToken(id) {
  const f106292 = (error) => {
    let body = error.body;
    let code;
    if (body != null) {
      code = body.code;
    }
    if (code === constants.CONNECTION_REVOKED) {
      let tmp3 = closure_2_1;
      let tmp4 = closure_2_2;
      let obj2 = closure_2_1(closure_2_2[5]);
      let obj3 = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId };
      let tmp5 = accountId;
      let dispatchResult = obj2.dispatch(obj3);
    } else {
      let num3 = 429;
      if (429 === error.status) {
        let tmp7 = closure_2_1;
        let tmp8 = closure_2_2;
        let result = error.headers["retry-after"] * closure_2_1(closure_2_2[6]).Millis.SECOND;
        let tmp10 = globalThis;
        let _isNaN = isNaN;
        let num4 = 5000;
        let num2 = 5000;
        if (!isNaN(result)) {
          let num = 0;
          num2 = 5000;
          if (0 !== result) {
            num2 = result;
          }
        }
        let tmp2 = closure_2_0;
        let obj = closure_2_0(tmp8[3]);
        let timeoutPromiseResult = obj.timeoutPromise(num2);
        return timeoutPromiseResult.then(f139683);
      }
    }
    return Promise.reject(error);
  };
  const f106293 = (body) => {
    const access_token = body.body.access_token;
    const obj = closure_2_1(closure_2_2[5]);
    const obj2 = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId, accessToken: access_token };
    obj.dispatch(obj2);
    return body;
  };
  _require = id;
  const HTTP = require("HTTPUtils").HTTP;
  obj = { url: closure_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, id), oldFormErrors: true, rejectWithError: false };
  const value = HTTP.get(obj);
  const catchPromise = value.catch(f106292);
  return catchPromise.then(f106293);
};
export const subscribePlayerStateNotifications = function subscribePlayerStateNotifications(accountId, accessToken, connectionId) {
  let num;
  const f106294 = (error) => {
    let rejectResult;
    if (closure_3 <= 0) {
      let tmp4 = error;
      let tmp5 = globalThis;
      let _Promise = Promise;
      rejectResult = Promise.reject(error);
    } else {
      let tmp = closure_2_0;
      let tmp2 = connection_id;
      let obj = closure_2_0(connection_id[3]);
      let num = 5000;
      let timeoutPromiseResult = obj.timeoutPromise(5000);
      rejectResult = timeoutPromiseResult.then(f139684);
    }
    return rejectResult;
  };
  let closure_0 = accountId;
  let closure_1 = accessToken;
  let closure_2 = connectionId;
  const request = { url: closure_5.NOTIFICATIONS_PLAYER, query: { connection_id: connectionId } };
  const putResult = obj.put(accountId, accessToken, request);
  return putResult.catch(f106294);
};
export const getProfile = function getProfile(accountId, arg1) {
  obj = { url: closure_5.PROFILE };
  const value = obj.get(accountId, arg1, obj);
  return value.then((body) => {
    obj = DispatcherDefault;
    const obj2 = { type: "SPOTIFY_PROFILE_UPDATE", accountId, isPremium: "premium" === body.body.product };
    obj.dispatch(obj2);
    return body;
  });
};
export const getDevices = function getDevices(accountId, accessToken) {
  obj = { url: closure_5.PLAYER_DEVICES };
  const value = obj.get(accountId, accessToken, obj);
  return value.then((body) => {
    if (body.body) {
      const obj2 = { type: "SPOTIFY_SET_DEVICES", accountId, devices: body.body.devices };
      obj = DispatcherDefault;
      obj.dispatch(obj2);
    }
    return body;
  });
};
export const play = function play(arg0, arg1, sync_id, TRACK) {
  let c5;
  let contextUri;
  let num;
  let obj2;
  let tmp4;
  let tmp5;
  let closure_0 = arg0;
  let closure_1 = arg1;
  const id = sync_id;
  obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  c5 = undefined;
  const PLAYER_OPENResult = c5.PLAYER_OPEN(TRACK, sync_id, false);
  const deviceId = obj.deviceId;
  const position = obj.position;
  ({ contextUri, repeat: c5 } = obj);
  let request = { url: c5.PLAYER_PLAY, query: { device_id: deviceId }, body: obj2 };
  let tmp3;
  const tmp2 = obj;
  let put = obj.put;
  if (null != contextUri) {
    tmp3 = contextUri;
  }
  obj2 = { context_uri: tmp3, uris: tmp4, offset: tmp5, position_ms: num };
  tmp4 = undefined;
  if (null == contextUri) {
    const items = [PLAYER_OPENResult];
    tmp4 = items;
  }
  tmp5 = undefined;
  if (null != contextUri) {
    tmp5 = { uri: PLAYER_OPENResult };
    const obj3 = { uri: PLAYER_OPENResult };
  }
  num = 0;
  if (null != position) {
    num = position;
  }
  let putResult = put(arg0, arg1, request);
  const nextPromise = putResult.then((result) => {
    let query;
    let str;
    let putResult = result;
    if (null != c5) {
      const request = { url: hasOwnProperty.PLAYER_REPEAT, query };
      query = { device_id: deviceId, state: str };
      str = "off";
      const put = query.put;
      const tmp4 = closure_0;
      const tmp5 = closure_1;
      if (tmp2) {
        str = "context";
      }
      putResult = put(tmp4, tmp5, request);
    }
    return putResult;
  });
  return nextPromise.then((result) => {
    let num;
    obj = { type: "SPOTIFY_PLAYER_PLAY", id, position: num };
    num = 0;
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (null != position) {
      num = position;
    }
    dispatch(obj);
    return result;
  });
};
export const pause = function pause(arg0, arg1) {
  obj = { url: hasOwnProperty.PLAYER_PAUSE };
  const putResult = obj.put(arg0, arg1, obj);
  return putResult.then((result) => {
    obj = DispatcherDefault;
    obj.dispatch({ type: "SPOTIFY_PLAYER_PAUSE" });
    return result;
  });
};
export const fetchIsSpotifyProtocolRegistered = function fetchIsSpotifyProtocolRegistered() {
  if (!SpotifyProtocolStore.isProtocolRegistered()) {
    obj = PlatformUtils;
    if (obj.isDesktop()) {
      let obj2 = GameUtilsDefault;
      const isProtocolRegisteredResult = obj2.isProtocolRegistered(React3);
      isProtocolRegisteredResult.then((isRegistered) => {
        obj = DispatcherDefault;
        const obj2 = { type: "SPOTIFY_SET_PROTOCOL_REGISTERED", isRegistered };
        obj.dispatch(obj2);
      });
    }
  }
};
export const setActiveDevice = function setActiveDevice(accountId, deviceId) {
  obj = DispatcherDefault;
  const obj2 = { type: "SPOTIFY_SET_ACTIVE_DEVICE", accountId, deviceId };
  obj.dispatch(obj2);
};
