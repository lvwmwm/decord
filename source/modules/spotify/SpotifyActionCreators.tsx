// Module ID: 10892
// Function ID: 84672
// Name: apiRequest
// Dependencies: []
// Exports: fetchIsSpotifyProtocolRegistered, getDevices, getProfile, pause, play, setActiveDevice

// Module 10892 (apiRequest)
function apiRequest(arg0, arg1, arg2, arg3) {
  let num = arg4;
  arg1 = arg0;
  const importDefault = arg1;
  let dependencyMap = arg3;
  if (arg4 === undefined) {
    num = 1;
  }
  let closure_3 = num;
  let obj = {};
  const merged = Object.assign(arg3);
  obj = { authorization: "Bearer " + arg2 };
  obj["headers"] = obj;
  dependencyMap = obj;
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
          const obj = status(obj[3]);
          let timeoutPromiseResult = obj.timeoutPromise(5000);
        } else {
          timeoutPromiseResult = Promise.resolve();
        }
        const nextPromise = timeoutPromiseResult.then(() => callback2(closure_1));
        timeoutPromiseResult.then(() => callback2(closure_1)).then((body) => callback(closure_0, closure_1, body.body.access_token, closure_2, closure_3 - 1)).then((arg0) => new Promise((arg0) => setImmediate(() => arg0(arg0))));
        const nextPromise1 = timeoutPromiseResult.then(() => callback2(closure_1)).then((body) => callback(closure_0, closure_1, body.body.access_token, closure_2, closure_3 - 1));
      }
    }
    return Promise.reject(status);
  });
}
function getAccessToken(id) {
  const arg1 = id;
  const HTTP = arg1(dependencyMap[4]).HTTP;
  const obj = { disabled: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003076984559, accessibilityHint: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000636598737303, legacyCompat_selected: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007971384466157509, url: closure_7.CONNECTION_ACCESS_TOKEN(constants.SPOTIFY, id) };
  const value = HTTP.get(obj);
  return value.catch((body) => {
    body = body.body;
    let code;
    if (null != body) {
      code = body.code;
    }
    if (code === constants.CONNECTION_REVOKED) {
      let obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE", accountId: body };
      callback(closure_2[5]).dispatch(obj);
      const obj2 = callback(closure_2[5]);
    } else if (429 === body.status) {
      const result = body.headers.retry-after * callback(closure_2[6]).Millis.SECOND;
      const _isNaN = isNaN;
      let num2 = 5000;
      if (!isNaN(result)) {
        num2 = 5000;
        if (0 !== result) {
          num2 = result;
        }
      }
      obj = body(closure_2[3]);
      return obj.timeoutPromise(num2).then(() => callback(closure_0));
    }
    return Promise.reject(body);
  }).then((accessToken) => {
    let obj = callback(closure_2[5]);
    obj = { type: "SPOTIFY_ACCOUNT_ACCESS_TOKEN", accountId: accessToken, accessToken: accessToken.body.access_token };
    obj.dispatch(obj);
    return accessToken;
  });
}
let closure_3 = importDefault(dependencyMap[0]);
({ SPOTIFY_APP_PROTOCOL: closure_4, SpotifyEndpoints: closure_5 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ AbortCodes: closure_6, Endpoints: closure_7, PlatformTypes: closure_8 } = arg1(dependencyMap[2]));
const obj = { get: apiRequest.bind(null, arg1(dependencyMap[4]).HTTP.get), put: apiRequest.bind(null, arg1(dependencyMap[4]).HTTP.put) };
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/spotify/SpotifyActionCreators.tsx");
function subscribePlayerStateNotifications(accountId, accessToken, connectionId) {
  let num = arg3;
  accessToken = accountId;
  const importDefault = accessToken;
  const dependencyMap = connectionId;
  if (arg3 === undefined) {
    num = 2;
  }
  let closure_3 = num;
  let obj = { url: closure_5.NOTIFICATIONS_PLAYER, query: obj };
  obj = { connection_id: connectionId };
  return obj.put(accountId, accessToken, obj).catch((arg0) => {
    if (num <= 0) {
      let rejectResult = Promise.reject(arg0);
    } else {
      const obj = arg0(arg2[3]);
      rejectResult = arg0(arg2[3]).timeoutPromise(5000).then(() => callback(closure_0, closure_1, closure_2, closure_3 - 1));
      const timeoutPromiseResult = arg0(arg2[3]).timeoutPromise(5000);
    }
    return rejectResult;
  });
}

export const SpotifyAPI = obj;
export { getAccessToken };
export { subscribePlayerStateNotifications };
export const getProfile = function getProfile(accountId, accessToken) {
  accessToken = accountId;
  const obj = { url: closure_5.PROFILE };
  const value = obj.get(accountId, accessToken, obj);
  return value.then((body) => {
    let obj = callback(closure_2[5]);
    obj = { type: "SPOTIFY_PROFILE_UPDATE", accountId: body, isPremium: "premium" === body.body.product };
    obj.dispatch(obj);
    return body;
  });
};
export const getDevices = function getDevices(accountId, accessToken) {
  accessToken = accountId;
  const obj = { url: closure_5.PLAYER_DEVICES };
  const value = obj.get(accountId, accessToken, obj);
  return value.then((body) => {
    if (body.body) {
      let obj = callback(closure_2[5]);
      obj = { type: "SPOTIFY_SET_DEVICES", accountId: body, devices: body.body.devices };
      obj.dispatch(obj);
    }
    return body;
  });
};
export const play = function play(arg0, arg1, sync_id, TRACK) {
  let contextUri;
  let obj = arg4;
  arg1 = arg0;
  const importDefault = arg1;
  const dependencyMap = sync_id;
  if (arg4 === undefined) {
    obj = {};
  }
  let closure_3;
  let position;
  let closure_5;
  const PLAYER_OPENResult = closure_5.PLAYER_OPEN(TRACK, sync_id, false);
  const deviceId = obj.deviceId;
  closure_3 = deviceId;
  position = obj.position;
  ({ contextUri, repeat: closure_5 } = obj);
  obj = { url: closure_5.PLAYER_PLAY, query: { device_id: deviceId } };
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
  const putResult = obj.put(arg0, arg1, obj);
  return obj.put(arg0, arg1, obj).then((arg0) => {
    let putResult = arg0;
    if (null != constants) {
      let obj = { url: constants.PLAYER_REPEAT };
      obj = { device_id: deviceId };
      let str = "off";
      if (constants) {
        str = "context";
      }
      obj.state = str;
      obj.query = obj;
      putResult = closure_9.put(arg0, arg1, obj);
      const tmp3 = arg0;
      const tmp4 = arg1;
    }
    return putResult;
  }).then((arg0) => {
    let obj = arg1(arg2[5]);
    obj = { type: "SPOTIFY_PLAYER_PLAY", id: arg2 };
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
    callback(closure_2[5]).dispatch({ type: "SPOTIFY_PLAYER_PAUSE" });
    return arg0;
  });
};
export const fetchIsSpotifyProtocolRegistered = function fetchIsSpotifyProtocolRegistered() {
  if (!protocolRegistered.isProtocolRegistered()) {
    if (obj.isDesktop()) {
      const obj2 = importDefault(dependencyMap[8]);
      importDefault(dependencyMap[8]).isProtocolRegistered(closure_4).then((isRegistered) => {
        let obj = callback(closure_2[5]);
        obj = { type: "SPOTIFY_SET_PROTOCOL_REGISTERED", isRegistered };
        obj.dispatch(obj);
      });
      const isProtocolRegisteredResult = importDefault(dependencyMap[8]).isProtocolRegistered(closure_4);
    }
    const obj = arg1(dependencyMap[7]);
  }
};
export const setActiveDevice = function setActiveDevice(accountId, deviceId) {
  let obj = importDefault(dependencyMap[5]);
  obj = { type: "SPOTIFY_SET_ACTIVE_DEVICE", accountId, deviceId };
  obj.dispatch(obj);
};
