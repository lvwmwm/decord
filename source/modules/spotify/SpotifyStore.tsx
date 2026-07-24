// Module ID: 4811
// Function ID: 41994
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 6, 7, 4150, 1194, 4812, 4943, 4217, 4952, 4146, 8355, 653, 4814, 664, 3, 4015, 686, 22, 10930, 561, 675, 620, 12613, 10563, 1327, 7909, 566, 2]

// Module 4811 (_isNativeReflectConstruct)
import closure_3 from "set";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import spotifyUtmParams from "spotifyUtmParams";
import ME from "ME";
import importDefaultResult1 from "_classCallCheck";
import set from "_inherits";

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_21;
let closure_22;
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
function _getActiveSocketAndDevice() {
  for (const key10005 in closure_44) {
    let tmp5 = key10005;
    let tmp6 = dependencyMap;
    let tmp7 = dependencyMap[key10005];
    if (!tmp7.connected) {
      continue;
    } else {
      let tmp = dependencyMap2;
      if (null == dependencyMap2[key10005]) {
        continue;
      } else {
        let tmp2 = dependencyMap2;
        let arr = dependencyMap2[key10005];
        let found = arr.find((is_active) => is_active.is_active);
        let tmp4 = found;
        if (null == found) {
          continue;
        } else {
          let obj = { socket: tmp7, device: found };
          return obj;
        }
      }
      continue;
    }
    continue;
  }
}
function calculateStartTime(startTime, position) {
  let num = 0;
  const timestamp = Date.now();
  if (null != startTime) {
    num = startTime.startTime;
  }
  const diff = timestamp - position;
  if (Math.abs(diff - num) > closure_31) {
    num = diff;
  }
  return num;
}
function sendStoppedPlayerState(accountId) {
  let obj = importDefault(686);
  obj = { type: "SPOTIFY_PLAYER_STATE", accountId, track: null, volumePercent: 0, isPlaying: false, repeat: false, position: 0, context: null };
  obj.dispatch(obj);
}
function findSpotifyActivity(arg0) {
  return closure_12.findActivity(arg0, (party) => {
    let tmp = null != party.party && null != party.party.id;
    if (tmp) {
      tmp = outer1_16(party.party.id);
    }
    return tmp;
  });
}
function upsertAccount(accountId, accessToken) {
  if (accountId in closure_44) {
    tmp[accountId].accessToken = accessToken;
    const _HermesInternal2 = HermesInternal;
    importDefaultResult1.info("Updated account access token: " + accountId);
  } else {
    const prototype = tmp12.prototype;
    const tmp7 = new tmp12(accountId, accessToken);
    tmp[accountId] = tmp7;
    const _HermesInternal = HermesInternal;
    importDefaultResult1.info("Added account: " + accountId);
  }
}
function removeAccount(arg0) {
  if (arg0 in dependencyMap) {
    dependencyMap[arg0].disconnect();
    delete tmp[tmp2];
    let tmp9 = null != tmp7;
    if (tmp9) {
      tmp9 = null != c23;
    }
    if (tmp9) {
      tmp9 = tmp7.track.id === c23.track.id;
    }
    if (tmp9) {
      c23 = null;
    }
    delete tmp[tmp2];
    const _HermesInternal = HermesInternal;
    importDefaultResult1.info("Removed account: " + arg0);
    const obj = dependencyMap[arg0];
  }
}
function setActiveDevice(arg0, arg1) {
  let done;
  const tmp = _createForOfIteratorHelperLoose(dependencyMap2[arg0]);
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      value.is_active = value.id === arg1;
      let iter2 = tmp();
      iter = iter2;
      done = iter2.done;
    } while (!done);
  }
}
function activitySync(userId, activity, arg2) {
  let device;
  let party;
  let socket;
  let sync_id;
  let timestamps;
  const tmp = _getActiveSocketAndDevice();
  if (null == tmp) {
    return false;
  } else {
    ({ socket, device } = tmp);
    ({ sync_id, party, timestamps } = activity);
    if (null != sync_id) {
      if (null != party) {
        if (null != party.id) {
          if (callback3(party.id)) {
            if (null != timestamps) {
              if (null != timestamps.start) {
                let start = timestamps.start;
              }
              const _Math = Math;
              const _Date2 = Date;
              let tmp7 = null != tmp6;
              const bound = Math.max(0, Date.now() - start);
              if (tmp7) {
                tmp7 = false === tmp6.repeat;
              }
              let tmp8 = false;
              if (tmp7) {
                tmp8 = null;
              }
              const metadata = activity.metadata;
              let type;
              if (null != metadata) {
                type = metadata.type;
              }
              if (null == type) {
                type = constants2.TRACK;
              }
              const tmp9Result = closure_15(type);
              if (null != tmp9Result) {
                const obj3 = require(10930) /* apiRequest */;
                let obj = { position: +bound, deviceId: device.id, repeat: tmp8 };
                obj3.play(socket.accountId, socket.accessToken, sync_id, tmp9Result, obj);
                obj = { userId, partyId: party.id, trackId: sync_id, startTime: start };
                let str = "presence change";
                if (arg2) {
                  obj = importDefault(675);
                  const obj1 = { party_id: party.id, other_user_id: userId };
                  obj.track(constants3.SPOTIFY_LISTEN_ALONG_STARTED, obj1);
                  str = "started";
                }
                const _HermesInternal = HermesInternal;
                importDefaultResult1.info("Listen along " + str + ": " + socket.accountId + " to " + userId + " playing " + sync_id + " on " + device.name);
              }
            }
            const _Date = Date;
            start = Date.now();
          }
        }
      }
    }
    return false;
  }
}
function handleUserActivitySyncStop() {
  let obj = importDefault(675);
  obj = {};
  let partyId = null;
  if (null != c24) {
    partyId = c24.partyId;
  }
  obj.party_id = partyId;
  let userId = null;
  if (null != c24) {
    userId = c24.userId;
  }
  obj.other_user_id = userId;
  obj.track(constants3.SPOTIFY_LISTEN_ALONG_ENDED, obj);
  let trackId = null;
  if (null != c24) {
    trackId = c24.trackId;
  }
  c24 = null;
  importDefaultResult1.info("Listen along stopped");
  const tmp9 = _getActiveSocketAndDevice();
  if (null != tmp9) {
    const socket = tmp9.socket;
    if (tmp12) {
      require(10930) /* apiRequest */.pause(socket.accountId, socket.accessToken);
      const obj3 = require(10930) /* apiRequest */;
    }
    tmp12 = null != dependencyMap3[socket.accountId] && dependencyMap3[socket.accountId].track.id === trackId;
  }
}
function handleUserConnectionsUpdate() {
  let iter3;
  const keys = Object.keys(closure_44);
  const accounts = store2.getAccounts();
  const found = accounts.filter((type) => type.type === outer1_20.SPOTIFY);
  if (null == found) {
    return false;
  } else {
    const mapped = found.map((id) => id.id);
    for (let num = 0; num < keys.length; num = num + 1) {
      let tmp = keys[num];
      if (!mapped.includes(tmp)) {
        let tmp2 = removeAccount;
        let tmp3 = removeAccount(tmp);
      }
    }
    const tmp5 = _createForOfIteratorHelperLoose(found);
    const iter = tmp5();
    let iter2 = iter;
    let flag = false;
    let flag2 = false;
    if (!iter.done) {
      do {
        let value = iter2.value;
        let tmp6 = closure_23;
        let tmp7 = null != closure_23;
        if (tmp7) {
          let tmp8 = closure_23;
          tmp7 = closure_23.account.id === value.id;
        }
        if (tmp7) {
          let tmp9 = closure_23;
          closure_23.account = value;
          flag = true;
        }
        let tmp10 = flag;
        if (!keys.includes(value.id)) {
          if (null == value.accessToken) {
            let tmp13 = require;
            let tmp14 = dependencyMap;
            let obj = require(10930) /* apiRequest */;
            let accessToken = obj.getAccessToken(value.id);
          } else {
            let tmp11 = upsertAccount;
            let tmp12 = upsertAccount(value.id, value.accessToken);
          }
        }
        iter3 = tmp5();
        iter2 = iter3;
        flag2 = flag;
      } while (!iter3.done);
    }
    return flag2;
  }
}
function autoPause() {
  if (null != closure_23) {
    const tmp10 = _getActiveSocketAndDevice();
    if (null != tmp10) {
      const socket = tmp10.socket;
      let c47 = true;
      require(10930) /* apiRequest */.pause(socket.accountId, socket.accessToken);
      const obj = require(10930) /* apiRequest */;
      importDefault(675).track(constants3.SPOTIFY_AUTO_PAUSED);
      importDefaultResult1.info("Playback auto paused");
      const obj2 = importDefault(675);
    }
  }
}
function setSpeaking(id, arg1) {
  if (id === store.getId()) {
    const result = currentClientInVoiceChannel.isCurrentClientInVoiceChannel();
    let obj = require(10563) /* _checkIsSpeaking */;
    obj = { userId: id, checkSoundSharing: true, checkSoundboardSounds: false };
    if (result) {
      if (obj.getIsSpeaking(obj)) {
        if (null != closure_23) {
          timeout.start(closure_28, autoPause, false);
          timeout1.stop();
        }
      }
    }
    timeout1.start(100, () => outer1_39.stop(), false);
  }
  return false;
}
function updatePlayerState(arg0, arg1) {
  let closure_3;
  let _createForOfIteratorHelperLoose;
  let context;
  let dependencyMap;
  let item;
  const _require = arg0;
  const device = arg2.device;
  let obj = device;
  ({ progress_ms: dependencyMap, is_playing: closure_3, repeat_state: _createForOfIteratorHelperLoose, item, context } = arg2);
  let obj2;
  if (null != item) {
    if (item.type === constants2.TRACK) {
      let id = item.id;
      if (tmp7) {
        id = item.linked_from.id;
      }
      obj = { id };
      ({ name: obj.name, duration_ms: obj.duration } = item);
      obj.type = constants2.TRACK;
      obj = {};
      const album2 = item.album;
      id = undefined;
      if (null != album2) {
        id = album2.id;
      }
      let str3 = "";
      let str4 = "";
      if (null != id) {
        str4 = id;
      }
      obj.id = str4;
      const album3 = item.album;
      let name;
      if (null != album3) {
        name = album3.name;
      }
      if (null != name) {
        str3 = name;
      }
      obj.name = str3;
      const album4 = item.album;
      let first;
      if (null != album4) {
        first = album4.images[0];
      }
      obj.image = first;
      const album5 = item.album;
      let type;
      if (null != album5) {
        type = album5.type;
      }
      if (null == type) {
        type = constants2.ALBUM;
      }
      obj.type = type;
      obj.album = obj;
      const _Array = Array;
      if (Array.isArray(item.artists)) {
        const artists = item.artists;
        let found = artists.filter((id) => {
          let isNotNullishResult = callback(outer1_2[26]).isNotNullish(id.id);
          if (isNotNullishResult) {
            isNotNullishResult = callback(outer1_2[26]).isNotNullish(id.name);
            const obj2 = callback(outer1_2[26]);
          }
          return isNotNullishResult;
        });
      } else {
        found = [];
      }
      obj.artists = found;
      obj.isLocal = item.is_local || false;
      obj2 = obj;
      tmp7 = null != item.linked_from && null != item.linked_from.id;
    }
    let tmp15 = null != device;
    if (tmp15) {
      tmp15 = true !== device.is_active;
    }
    if (tmp15) {
      obj = {};
      const merged = Object.assign(device);
      obj["is_active"] = true;
    }
    if (null != context) {
      const items = [constants2.PLAYLIST, constants2.ALBUM];
      if (items.includes(context.type)) {
        let context2 = tmp13.getPlayerState(arg0);
        if (null != context2) {
          context2 = context2.context;
          let resolved = Promise.resolve(context2);
        }
        if (context.type === constants2.ALBUM) {
          resolved = Promise.resolve(context);
        } else {
          const SpotifyAPI = _require(10930).SpotifyAPI;
          const obj1 = { url: context.href };
          const value = SpotifyAPI.get(arg0, arg1, obj1);
          resolved = value.then((body) => body.body).catch((status) => {
            if (status) {
              if (404 === status.status) {
                return null;
              }
            }
            throw status;
          });
          const nextPromise = value.then((body) => body.body);
        }
      }
    }
    const resolved1 = Promise.resolve(undefined);
    return resolved1.then((arg0) => {
      let tmp = arg0;
      let _public = null == arg0;
      if (!_public) {
        _public = tmp.type !== outer1_19.PLAYLIST;
      }
      if (!_public) {
        _public = tmp.public;
      }
      if (!_public) {
        tmp = null;
      }
      obj = obj(outer1_2[18]);
      obj = { type: "SPOTIFY_PLAYER_STATE", accountId: closure_0, track: obj2 };
      let num = 0;
      if (null != obj) {
        num = obj.volume_percent;
      }
      obj.volumePercent = num;
      obj.isPlaying = closure_3;
      obj.repeat = "off" !== _createForOfIteratorHelperLoose;
      obj.position = closure_2;
      obj.context = tmp;
      obj.device = obj;
      obj.dispatch(obj);
    });
  }
  if (null != item) {
    if (item.type === constants2.EPISODE) {
      obj2 = {};
      ({ id: obj5.id, name: obj5.name, duration_ms: obj5.duration } = item);
      obj2.type = constants2.EPISODE;
      const obj3 = {};
      const show3 = item.show;
      let id1;
      if (null != show3) {
        id1 = show3.id;
      }
      let str = "";
      let str2 = "";
      if (null != id1) {
        str2 = id1;
      }
      obj3.id = str2;
      const show = item.show;
      let name1;
      if (null != show) {
        name1 = show.name;
      }
      if (null != name1) {
        str = name1;
      }
      obj3.name = str;
      const show2 = item.show;
      let first1;
      if (null != show2) {
        first1 = show2.images[0];
      }
      obj3.image = first1;
      const album = item.album;
      let type1;
      if (null != album) {
        type1 = album.type;
      }
      if (null == type1) {
        type1 = constants2.SHOW;
      }
      obj3.type = type1;
      obj2.album = obj3;
      obj2.artists = [];
      obj2.isLocal = false;
    }
  }
}
function getPlayerState(arg0) {
  const _require = arg0;
  let closure_1 = arg1;
  const SpotifyAPI = _require(10930).SpotifyAPI;
  let obj = { url: constants.PLAYER };
  obj = { additional_types: "" + constants2.TRACK + "," + constants2.EPISODE };
  obj.query = obj;
  obj.onlyRetryOnAuthorizationErrors = true;
  const value = SpotifyAPI.get(arg0, arg1, obj);
  return value.then((body) => {
    let closure_0 = body;
    body = body.body;
    if (null != body) {
      outer1_66(closure_0, closure_1, body).then(() => closure_0);
      const promise = outer1_66(closure_0, closure_1, body);
    } else {
      outer1_57(closure_0);
    }
  }).catch(() => {
    outer1_57(closure_0);
  });
}
({ getSpotifyResourceType: closure_15, isSpotifyParty: closure_16, SPOTIFY_PARTY_PREFIX: closure_17, SpotifyEndpoints: closure_18, SpotifyResourceTypes: closure_19 } = spotifyUtmParams);
const PlatformTypes = ME.PlatformTypes;
({ ActivityFlags: closure_21, AnalyticEvents: closure_22 } = ME);
let closure_26 = require("getPlatformUserUrl").get(PlatformTypes.SPOTIFY);
let closure_27 = 30 * require("set").Millis.SECOND;
let closure_28 = 30 * require("set").Millis.SECOND;
let closure_29 = 5 * require("set").Millis.MINUTE;
let closure_30 = 5 * require("set").Millis.SECOND;
let closure_31 = 1.5 * require("set").Millis.SECOND;
const MINUTE = require("set").Millis.MINUTE;
let closure_33 = 3 * require("set").Millis.SECOND;
let closure_34 = { PLAYER_STATE_CHANGED: "PLAYER_STATE_CHANGED", DEVICE_STATE_CHANGED: "DEVICE_STATE_CHANGED" };
const message = "message";
const ping = "ping";
const single = "single";
importDefaultResult1 = new importDefaultResult1("Spotify");
const timeout = new require("_createForOfIteratorHelperLoose").Timeout();
const timeout1 = new require("_createForOfIteratorHelperLoose").Timeout();
const timeout2 = new require("_createForOfIteratorHelperLoose").Timeout();
const timeout3 = new require("_createForOfIteratorHelperLoose").Timeout();
const timeout4 = new require("_createForOfIteratorHelperLoose").Timeout();
let closure_44 = {};
let closure_45 = {};
let closure_46 = {};
let c47 = false;
let c48 = null;
let items = [WebSocket.CONNECTING, WebSocket.OPEN];
let set = new Set(items);
let tmp12 = (() => {
  class SpotifySocket {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_6(this, self);
      this._requestedDisconnect = false;
      this._requestedConnect = false;
      obj = outer1_1(outer1_2[19]);
      this.handleDeviceStateChange = obj.throttle(() => {
        const devices = SpotifySocket(outer2_2[20]).getDevices(self.accountId, self.accessToken);
        outer2_67(self.accountId, self.accessToken);
      }, outer1_33);
      this.accountId = arg0;
      this.accessToken = arg1;
      interval = new SpotifySocket(outer1_2[17]).Interval();
      this.pingInterval = interval;
      tmp3 = outer1_1(outer1_2[21]);
      tmp3 = new tmp3(undefined, outer1_32);
      this.backoff = tmp3;
      connectResult = this.connect();
      return;
    }
  }
  let obj = {
    key: "connected",
    get() {
      let hasItem = null != this.socket;
      if (hasItem) {
        hasItem = outer1_49.has(tmp.socket.readyState);
      }
      return hasItem;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "connect",
    value() {
      let self = this;
      self = this;
      if (!tmp) {
        outer1_38.info("WS Connecting");
        self._requestedDisconnect = false;
        self._requestedConnect = true;
        const promise = outer1_67(self.accountId, self.accessToken);
        outer1_67(self.accountId, self.accessToken).then(() => {
          let handleClose;
          let handleMessage;
          let handleOpen;
          let socket;
          let socket2;
          let socket3;
          let socket4;
          self._requestedConnect = false;
          const webSocket = new WebSocket("wss://dealer.spotify.com/?access_token=" + self.accessToken);
          self.socket = webSocket;
          ({ handleOpen, socket } = self);
          socket.onopen = handleOpen.bind(self);
          ({ handleMessage, socket: socket2 } = self);
          socket2.onmessage = handleMessage.bind(self);
          ({ handleClose, socket: socket3, socket: socket4 } = self);
          const bindResult = handleClose.bind(self);
          socket4.onerror = bindResult;
          socket3.onclose = bindResult;
        }).catch((arg0) => {
          outer2_38.error(arg0);
          self._requestedConnect = false;
          self.handleClose();
        });
        const nextPromise = outer1_67(self.accountId, self.accessToken).then(() => {
          let handleClose;
          let handleMessage;
          let handleOpen;
          let socket;
          let socket2;
          let socket3;
          let socket4;
          self._requestedConnect = false;
          const webSocket = new WebSocket("wss://dealer.spotify.com/?access_token=" + self.accessToken);
          self.socket = webSocket;
          ({ handleOpen, socket } = self);
          socket.onopen = handleOpen.bind(self);
          ({ handleMessage, socket: socket2 } = self);
          socket2.onmessage = handleMessage.bind(self);
          ({ handleClose, socket: socket3, socket: socket4 } = self);
          const bindResult = handleClose.bind(self);
          socket4.onerror = bindResult;
          socket3.onclose = bindResult;
        });
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "disconnect",
    value() {
      this._requestedDisconnect = true;
      const backoff = this.backoff;
      backoff.cancel();
      const socket = this.socket;
      if (null != socket) {
        socket.close();
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "ping",
    value() {
      if (this.connected) {
        const socket = this.socket;
        if (null != socket) {
          const _JSON = JSON;
          const obj = { type: outer1_36 };
          socket.send(JSON.stringify(obj));
        }
      }
    }
  };
  items[4] = {
    key: "handleOpen",
    value() {
      const self = this;
      outer1_38.info("WS Connected");
      const backoff = this.backoff;
      backoff.succeed();
      const pingInterval = this.pingInterval;
      pingInterval.start(outer1_27, () => self.ping());
      const profile = SpotifySocket(outer1_2[20]).getProfile(this.accountId, this.accessToken);
      const obj = SpotifySocket(outer1_2[20]);
      const devices = SpotifySocket(outer1_2[20]).getDevices(this.accountId, this.accessToken);
    }
  };
  items[5] = {
    key: "handleMessage",
    value(data) {
      let iter6;
      let payloads;
      let uri;
      const self = this;
      data = data.data;
      if ("string" === typeof data) {
        const _JSON = JSON;
        const parsed = JSON.parse(data);
        ({ uri, payloads } = parsed);
        if (parsed.type === outer1_35) {
          if ("string" === typeof uri) {
            if (uri.startsWith("hm://pusher/v1/connections/")) {
              const _decodeURIComponent = decodeURIComponent;
              self.connectionId = decodeURIComponent(uri.split("hm://pusher/v1/connections/")[1]);
              const result = SpotifySocket(outer1_2[20]).subscribePlayerStateNotifications(self.accountId, self.accessToken, self.connectionId);
              const obj = SpotifySocket(outer1_2[20]);
            }
          }
          const _Array = Array;
          if (Array.isArray(payloads)) {
            const tmp2 = outer1_53(payloads);
            const iter = tmp2();
            let iter2 = iter;
            if (!iter.done) {
              do {
                let events = iter2.value.events;
                if (null != events) {
                  let tmp4 = outer1_53;
                  let tmp5 = outer1_53(events);
                  let iter3 = tmp5();
                  let iter4 = iter3;
                  let tmp6 = iter3;
                  let tmp7 = tmp5;
                  if (!iter3.done) {
                    do {
                      let handleEventResult = self.handleEvent(iter4.value);
                      let iter5 = tmp5();
                      iter4 = iter5;
                      let tmp9 = iter5;
                      let tmp10 = tmp5;
                      done = iter5.done;
                    } while (!done);
                  }
                }
                iter6 = tmp2();
                iter2 = iter6;
              } while (!iter6.done);
            }
          }
        }
      }
    }
  };
  items[6] = {
    key: "handleClose",
    value() {
      const self = this;
      const pingInterval = this.pingInterval;
      pingInterval.stop();
      if (!this._requestedDisconnect) {
        const backoff = this.backoff;
        const _Math = Math;
        const _HermesInternal = HermesInternal;
        outer1_38.info("WS Disconnected. Next retry in " + Math.round(backoff.fail(() => {
          if (!self._requestedDisconnect) {
            self.connect();
          }
        })) + "ms");
      }
    }
  };
  items[7] = {
    key: "handleEvent",
    value(arg0) {
      let event;
      let type;
      const self = this;
      ({ type, event } = arg0);
      if (outer1_34.PLAYER_STATE_CHANGED === type) {
        if (tmp4) {
          outer1_66(self.accountId, self.accessToken, event.state);
        }
        tmp4 = null != event && null != event.state;
      } else if (outer1_34.DEVICE_STATE_CHANGED === type) {
        const result = self.handleDeviceStateChange();
      }
    }
  };
  return callback2(SpotifySocket, items);
})();
let closure_50 = tmp12;
let tmp13 = ((Store) => {
  class SpotifyStore {
    constructor() {
      self = this;
      tmp = outer1_6(this, SpotifyStore);
      obj = outer1_4(SpotifyStore);
      tmp2 = outer1_3;
      if (outer1_52()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback(SpotifyStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_9, outer1_10, outer1_11, outer1_12, outer1_8, outer1_13, outer1_14);
      const items = [outer1_12];
      this.syncWith(items, () => (function handlePresenceUpdate() {
        let party;
        let sync_id;
        let timestamps;
        if (null == outer3_24) {
          return false;
        } else if (null == outer3_55()) {
          return false;
        } else {
          const userId = outer3_24.userId;
          const tmp14 = outer3_58(userId);
          if (null == tmp14) {
            outer3_41.start(outer3_29, () => {
              let tmp = null != outer4_24;
              if (tmp) {
                tmp = outer4_24.userId === userId;
              }
              if (tmp) {
                outer4_1(outer4_2[24])();
              }
            });
            return false;
          } else {
            outer3_41.stop();
            ({ sync_id, timestamps, party } = tmp14);
            let tmp2 = null != sync_id;
            if (tmp2) {
              tmp2 = outer3_24.trackId !== sync_id;
            }
            let tmp3 = null != timestamps;
            if (tmp3) {
              tmp3 = outer3_24.startTime !== timestamps.start;
            }
            if (!tmp2) {
              if (!tmp3) {
                let flag = null != party;
                if (flag) {
                  flag = party.id !== outer3_24.partyId;
                }
                if (flag) {
                  outer3_24.partyId = party.id;
                  flag = true;
                }
              }
              return flag;
            }
            flag = outer3_62(userId, tmp14, false);
          }
        }
      })());
      const isSpotifyProtocolRegistered = SpotifyStore(outer1_2[20]).fetchIsSpotifyProtocolRegistered();
    }
  };
  let items = [obj, , , , , , , , , , , ];
  obj = {
    key: "hasConnectedAccount",
    value() {
      return Object.keys(outer1_44).length > 0;
    }
  };
  items[1] = obj;
  obj = {
    key: "getActiveSocketAndDevice",
    value() {
      return outer1_55();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getPlayableComputerDevices",
    value() {
      const items = [];
      for (const key10005 in outer1_44) {
        let tmp7 = key10005;
        let tmp8 = outer1_44;
        let tmp9 = outer1_44[key10005];
        if (!tmp9.connected) {
          continue;
        } else {
          let tmp = outer1_45;
          if (null == outer1_45[key10005]) {
            continue;
          } else {
            let tmp2 = outer1_45;
            let arr2 = outer1_45[key10005];
            let found = arr2.find((is_restricted) => {
              let tmp = !is_restricted.is_restricted;
              if (tmp) {
                tmp = "Computer" === is_restricted.type;
              }
              return tmp;
            });
            let tmp4 = found;
            if (null == found) {
              continue;
            } else {
              let obj = { socket: tmp9, device: found };
              let arr = items.push(obj);
              let tmp6 = found;
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      return items;
    }
  };
  items[4] = {
    key: "canPlay",
    value(party) {
      party = party.party;
      let tmp = null != outer1_55() && null != party.sync_id && null != party && null != party.id;
      if (tmp) {
        tmp = outer1_16(party.id);
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getSyncingWith",
    value() {
      return outer1_24;
    }
  };
  items[6] = {
    key: "wasAutoPaused",
    value() {
      return outer1_47;
    }
  };
  items[7] = {
    key: "getLastPlayedTrackId",
    value() {
      return outer1_25;
    }
  };
  items[8] = {
    key: "getTrack",
    value() {
      let track = null;
      if (null != outer1_23) {
        track = outer1_23.track;
      }
      return track;
    }
  };
  items[9] = {
    key: "getPlayerState",
    value(arg0) {
      return outer1_46[arg0];
    }
  };
  items[10] = {
    key: "shouldShowActivity",
    value() {
      let showActivity = null != outer1_23;
      if (showActivity) {
        showActivity = outer1_23.account.showActivity;
      }
      if (showActivity) {
        showActivity = !outer1_11.isIdle();
      }
      return showActivity;
    }
  };
  items[11] = {
    key: "getActivity",
    value() {
      let album;
      let artists;
      let context;
      let duration;
      let id;
      let isLocal;
      let name;
      let startTime;
      let type;
      if (null == outer1_23) {
        let tmp18 = null;
        if (null != outer1_24) {
          tmp18 = outer1_58(outer1_24.userId);
        }
        return tmp18;
      } else {
        const track = outer1_23.track;
        ({ artists, album, name } = track);
        ({ startTime, context } = outer1_23);
        ({ id, duration, isLocal, type } = track);
        const substr = artists.slice(0, 5);
        if (artists.length > 0) {
          const mapped = substr.map((name) => name.name.replace(/;/g, ""));
          const joined = mapped.join("; ");
        }
        let obj = {};
        let assetFromImageURL = null;
        if (null != album.image) {
          let obj2 = SpotifyStore(outer1_2[27]);
          assetFromImageURL = obj2.getAssetFromImageURL(outer1_20.SPOTIFY, album.image.url);
        }
        if (tmp6) {
          obj.large_image = assetFromImageURL;
        }
        if (album.type !== outer1_37) {
          obj.large_text = album.name;
        }
        if (null != context) {
          const uri = context.uri;
        }
        if (null != outer1_24) {
          if (null != outer1_24.partyId) {
            let partyId = outer1_24.partyId;
          }
          let text = name;
          if (name.length > 128) {
            text = `${name.substring(0, 125)}...`;
          }
          obj = { context_uri: uri, album_id: album.id, artist_ids: substr.map((id) => id.id), type, button_urls: [] };
          const obj1 = { name: outer1_26.name, assets: obj, details: text, state: joined };
          obj2 = { start: startTime, end: startTime + duration };
          obj1.timestamps = obj2;
          const obj3 = { id: partyId };
          obj1.party = obj3;
          if (!isLocal) {
            obj1.sync_id = id;
            obj1.flags = outer1_21.PLAY | outer1_21.SYNC;
            obj1.metadata = obj;
          }
          return obj1;
        }
        const _HermesInternal = HermesInternal;
        partyId = "" + outer1_17 + outer1_9.getId();
        tmp6 = null != album.image && null != assetFromImageURL;
      }
    }
  };
  return callback2(SpotifyStore, items);
})(require("initialize").Store);
tmp13.displayName = "SpotifyStore";
tmp13 = new tmp13(require("dispatcher"), {
  USER_CONNECTIONS_UPDATE: handleUserConnectionsUpdate,
  CONNECTION_OPEN: handleUserConnectionsUpdate,
  SPOTIFY_ACCOUNT_ACCESS_TOKEN: function handleSpotifyAccountAccessToken(accountId) {
    upsertAccount(accountId.accountId, accountId.accessToken);
    return false;
  },
  SPOTIFY_ACCOUNT_ACCESS_TOKEN_REVOKE: function handleSpotifyAccountAccessTokenRevoked(accountId) {
    removeAccount(accountId.accountId);
  },
  SPOTIFY_PROFILE_UPDATE: function handleSpotifyProfileUpdate(arg0) {
    let accountId;
    let isPremium;
    ({ accountId, isPremium } = arg0);
    if (null == dependencyMap[accountId]) {
      return false;
    } else {
      tmp.isPremium = isPremium;
      const _HermesInternal = HermesInternal;
      importDefaultResult1.info("Profile updated for " + accountId + ": isPremium = " + isPremium);
    }
  },
  SPOTIFY_PLAYER_STATE: function handleSpotifyPlayerState(arg0) {
    let accountId;
    let context;
    let device;
    let isPlaying;
    let position;
    let repeat;
    let track;
    ({ accountId, isPlaying, track, position, device } = arg0);
    let account;
    let flag = false;
    ({ repeat, context } = arg0);
    if (null != device) {
      if (null != dependencyMap2[accountId]) {
        const found = dependencyMap2[accountId].find((id) => id.id === device.id);
        if (null == found) {
          dependencyMap2[accountId].push(device);
          let flag2 = true;
          const arr3 = dependencyMap2[accountId];
        } else {
          flag2 = false;
          if (!account(620)(found, device)) {
            const _Object = Object;
            const merged = Object.assign(found, device);
            flag2 = true;
          }
        }
        setActiveDevice(accountId, device.id);
        const arr2 = dependencyMap2[accountId];
      } else {
        const items = [device];
        dependencyMap2[accountId] = items;
        flag = true;
      }
    }
    let obj = c48;
    if (isPlaying) {
      let tmp14 = track;
      if (null != obj) {
        obj.start(closure_28, autoPause);
        tmp14 = track;
      }
    } else {
      tmp14 = null;
      if (null != obj) {
        obj.stop();
        tmp14 = null;
      }
    }
    account = store2.getAccount(accountId, PlatformTypes.SPOTIFY);
    if (null == account) {
      return flag;
    } else {
      let tmp21 = null;
      if (null != tmp14) {
        obj = { account, track: tmp14, startTime: calculateStartTime(tmp59, position), context, repeat };
        tmp21 = obj;
      }
      let tmp22 = null != device;
      if (tmp22) {
        tmp22 = null != closure_24;
      }
      if (tmp22) {
        tmp22 = 0 === position;
      }
      if (tmp22) {
        tmp22 = !isPlaying;
      }
      if (!tmp22) {
        dependencyMap3[accountId] = tmp21;
      }
      const values = account(22).values(dependencyMap3);
      let closure_23 = values.find((arg0) => null != arg0);
      setSpeaking(store.getId());
      if (null != tmp14) {
        if (!tmp22) {
          timeout3.start(tmp14.duration - position + closure_30, () => {
            outer1_57(account.id);
          });
        }
        if (null == closure_24) {
          if (timeout4.isStarted()) {
            importDefaultResult1.info("Listen along stop cancelled as playback of track resumed");
            timeout4.stop();
          }
        } else {
          const _HermesInternal = HermesInternal;
          importDefaultResult1.info("Listen along active but playback stopped or track changed. Stopping listen along in " + closure_30 + "ms");
          timeout4.start(closure_30, () => {
            outer1_38.info("Stopping listening along");
            account(outer1_2[24])();
            outer1_57(account.id);
          });
        }
        let tmp51 = flag;
        if (tmp25 !== closure_23) {
          if (null != tmp59) {
            if (null != tmp59) {
              if (null != tmp21) {
                if (tmp59.track.id === tmp21.track.id) {
                  tmp51 = flag;
                }
              }
            }
            if (null != tmp14) {
              obj = { type: "SPOTIFY_NEW_TRACK", track: tmp14, connectionId: accountId };
              account(686).dispatch(obj);
              const obj4 = account(686);
              const obj1 = { party_platform: PlatformTypes.SPOTIFY, track_id: tmp14.id, has_images: true, details: tmp14.album.name, state: tmp14.name, album_id: tmp14.album.id };
              const artists = tmp14.artists;
              obj1.author_ids = artists.map((id) => id.id);
              const artists1 = tmp14.artists;
              obj1.author_names = artists1.map((name) => name.name);
              account(675).track(constants3.ACTIVITY_UPDATED, obj1);
              const obj6 = account(675);
            }
          } else {
            tmp51 = flag;
          }
        }
        return tmp51;
      }
      timeout3.stop();
      const obj3 = account(22);
      tmp25 = closure_23;
    }
  },
  SPOTIFY_PLAYER_PLAY: function handleSpotifyPlayerPlay(id) {
    id = id.id;
  },
  ACTIVITY_PLAY: function handleUserActivityPlay(arg0) {
    let accessToken;
    let accountId;
    let activity;
    let device;
    let metadata;
    let party;
    let socket;
    let sync_id;
    ({ activity, metadata } = arg0);
    const tmp = _getActiveSocketAndDevice();
    if (null == tmp) {
      return false;
    } else {
      ({ socket, device } = tmp);
      ({ sync_id, party } = activity);
      let tmp2 = null == sync_id || null == party || null == party.id;
      if (!tmp2) {
        tmp2 = !callback3(party.id);
      }
      let tmp4 = !tmp2;
      if (!tmp2) {
        if (null != metadata) {
          const context_uri = metadata.context_uri;
        }
        if (null != closure_24) {
          handleUserActivitySyncStop();
        }
        if (null != metadata) {
          let obj = require(10930) /* apiRequest */;
          ({ accountId, accessToken } = socket);
          let TRACK = metadata.type;
          if (null == TRACK) {
            TRACK = constants2.TRACK;
          }
          obj = { contextUri: context_uri, deviceId: device.id };
          obj.play(accountId, accessToken, sync_id, TRACK, obj);
          const _HermesInternal = HermesInternal;
          importDefaultResult1.info("Play started: " + socket.accountId + " playing " + sync_id + " on " + device.name);
        }
        tmp4 = tmp8;
      }
      return tmp4;
    }
  },
  ACTIVITY_SYNC: function handleUserActivitySync(userId) {
    return activitySync(userId.userId, userId.activity, true);
  },
  ACTIVITY_SYNC_STOP: handleUserActivitySyncStop,
  SPOTIFY_SET_DEVICES: function handleSpotifySetDevices(arg0) {
    let accountId;
    let devices;
    ({ accountId, devices } = arg0);
    closure_45[accountId] = devices;
    importDefaultResult1.info("Devices updated for " + accountId + ":", devices);
  },
  SPOTIFY_SET_ACTIVE_DEVICE: function handleSetActiveDevice(accountId) {
    setActiveDevice(accountId.accountId, accountId.deviceId);
  },
  SPEAKING: function handleSpeaking(userId) {
    setSpeaking(userId.userId);
    return false;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    return voiceStates.reduce((arg0, userId) => {
      outer1_65(userId.userId);
      return arg0;
    }, false);
  },
  MEDIA_ENGINE_SET_GO_LIVE_SOURCE: function handleSetGoLiveSource(settings) {
    settings = settings.settings;
    let desktopSettings;
    if (null != settings) {
      desktopSettings = settings.desktopSettings;
    }
    if (null != desktopSettings) {
      if (null != c48) {
        obj.stop();
      }
      let desktopSettings1;
      if (null != settings) {
        desktopSettings1 = settings.desktopSettings;
      }
      const sourceId = desktopSettings1.sourceId;
      if (null != sourceId) {
        if (observedAppNameForWindow.getObservedAppNameForWindow(sourceId) === name.name) {
          if (tmp5) {
            const Interval = require(4015) /* _createForOfIteratorHelperLoose */.Interval;
            const prototype = Interval.prototype;
            const interval = new Interval();
            c48 = interval;
            interval.start(closure_28, autoPause);
          }
        }
      }
      if (null != c48) {
        obj2.stop();
      }
      c48 = null;
      obj = c48;
      obj2 = c48;
    } else if (null == settings) {
      if (null != c48) {
        obj4.stop();
      }
      c48 = null;
      obj4 = c48;
    }
  }
});
let closure_51 = tmp13;
let result = set.fileFinishedImporting("modules/spotify/SpotifyStore.tsx");

export default tmp13;
export const SpotifySocket = tmp12;
