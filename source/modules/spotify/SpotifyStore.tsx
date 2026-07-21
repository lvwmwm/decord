// Module ID: 4808
// Function ID: 41963
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4808 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
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
function _getActiveSocketAndDevice() {
  for (const key10005 in closure_44) {
    let tmp5 = key10005;
    let tmp6 = closure_44;
    let tmp7 = closure_44[key10005];
    if (!tmp7.connected) {
      continue;
    } else {
      let tmp = closure_45;
      if (null == closure_45[key10005]) {
        continue;
      } else {
        let tmp2 = closure_45;
        let arr = closure_45[key10005];
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
  let obj = importDefault(dependencyMap[18]);
  obj = { left: true, right: "/assets/images/platforms", alignItems: 255, "Bool(false)": 255, "Bool(false)": null, "Bool(false)": "2eaff20be2a75be7ccdd4c6f19f0eb36", "Bool(false)": "img_account_sync_youtube_white", "Bool(false)": "png", accountId };
  obj.dispatch(obj);
}
function findSpotifyActivity(arg0) {
  return closure_12.findActivity(arg0, (party) => {
    let tmp = null != party.party && null != party.party.id;
    if (tmp) {
      tmp = callback(party.party.id);
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
  if (arg0 in closure_44) {
    closure_44[arg0].disconnect();
    delete r1[r4];
    let tmp7 = null != tmp5;
    if (tmp7) {
      tmp7 = null != track;
    }
    if (tmp7) {
      tmp7 = tmp5.track.id === track.track.id;
    }
    if (tmp7) {
      const track = null;
    }
    delete r1[r4];
    const _HermesInternal = HermesInternal;
    importDefaultResult1.info("Removed account: " + arg0);
    const obj = closure_44[arg0];
  }
}
function setActiveDevice(arg0, arg1) {
  let done;
  const tmp = _createForOfIteratorHelperLoose(closure_45[arg0]);
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
                const obj3 = activity(dependencyMap[20]);
                let obj = { position: +bound, deviceId: device.id, repeat: tmp8 };
                obj3.play(socket.accountId, socket.accessToken, sync_id, tmp9Result, obj);
                obj = { userId, partyId: party.id, trackId: sync_id, startTime: start };
                let str = "presence change";
                if (arg2) {
                  obj = importDefault(dependencyMap[22]);
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
  let obj = importDefault(dependencyMap[22]);
  obj = {};
  let partyId = null;
  if (null != closure_24) {
    partyId = closure_24.partyId;
  }
  obj.party_id = partyId;
  let userId = null;
  if (null != closure_24) {
    userId = closure_24.userId;
  }
  obj.other_user_id = userId;
  obj.track(constants3.SPOTIFY_LISTEN_ALONG_ENDED, obj);
  let trackId = null;
  if (null != closure_24) {
    trackId = closure_24.trackId;
  }
  closure_24 = null;
  importDefaultResult1.info("Listen along stopped");
  const tmp9 = _getActiveSocketAndDevice();
  if (null != tmp9) {
    const socket = tmp9.socket;
    if (tmp12) {
      arg1(dependencyMap[20]).pause(socket.accountId, socket.accessToken);
      const obj3 = arg1(dependencyMap[20]);
    }
    const tmp12 = null != closure_46[socket.accountId] && closure_46[socket.accountId].track.id === trackId;
  }
}
function handleUserConnectionsUpdate() {
  let iter3;
  const keys = Object.keys(closure_44);
  const accounts = store2.getAccounts();
  const found = accounts.filter((type) => type.type === constants.SPOTIFY);
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
            let tmp13 = closure_0;
            let tmp14 = closure_2;
            let obj = closure_0(closure_2[20]);
            let accessToken = obj.getAccessToken(value.id);
          } else {
            let tmp11 = closure_59;
            let tmp12 = closure_59(value.id, value.accessToken);
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
      let closure_47 = true;
      arg1(dependencyMap[20]).pause(socket.accountId, socket.accessToken);
      const obj = arg1(dependencyMap[20]);
      importDefault(dependencyMap[22]).track(constants3.SPOTIFY_AUTO_PAUSED);
      importDefaultResult1.info("Playback auto paused");
      const obj2 = importDefault(dependencyMap[22]);
    }
  }
}
function setSpeaking(id, arg1) {
  if (id === store.getId()) {
    const result = currentClientInVoiceChannel.isCurrentClientInVoiceChannel();
    let obj = arg1(dependencyMap[25]);
    obj = { "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003076984559, "Bool(true)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000636598737303, "Bool(true)": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007971384466157509, userId: id };
    if (result) {
      if (obj.getIsSpeaking(obj)) {
        if (null != closure_23) {
          timeout.start(closure_28, autoPause, false);
          timeout1.stop();
        }
      }
    }
    timeout1.start(100, () => closure_39.stop(), false);
  }
  return false;
}
function updatePlayerState(arg0, arg1) {
  let context;
  let item;
  arg1 = arg0;
  const device = arg2.device;
  let importDefault = device;
  ({ progress_ms: closure_2, is_playing: closure_3, repeat_state: closure_4, item, context } = arg2);
  let closure_5;
  if (null != item) {
    if (item.type === constants2.TRACK) {
      let id = item.id;
      if (tmp7) {
        id = item.linked_from.id;
      }
      let obj = { id };
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
          let isNotNullishResult = id(closure_2[26]).isNotNullish(id.id);
          if (isNotNullishResult) {
            isNotNullishResult = id(closure_2[26]).isNotNullish(id.name);
            const obj2 = id(closure_2[26]);
          }
          return isNotNullishResult;
        });
      } else {
        found = [];
      }
      obj.artists = found;
      obj.isLocal = item.is_local || false;
      closure_5 = obj;
      const tmp7 = null != item.linked_from && null != item.linked_from.id;
    }
    let tmp15 = null != device;
    if (tmp15) {
      tmp15 = true !== device.is_active;
    }
    if (tmp15) {
      obj = {};
      const merged = Object.assign(device);
      obj["is_active"] = true;
      importDefault = obj;
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
          const SpotifyAPI = arg1(dependencyMap[20]).SpotifyAPI;
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
        _public = tmp.type !== constants.PLAYLIST;
      }
      if (!_public) {
        _public = tmp.public;
      }
      if (!_public) {
        tmp = null;
      }
      let obj = obj(closure_2[18]);
      obj = { type: "SPOTIFY_PLAYER_STATE", accountId: arg0, track: obj2 };
      let num = 0;
      if (null != obj) {
        num = obj.volume_percent;
      }
      obj.volumePercent = num;
      obj.isPlaying = closure_3;
      obj.repeat = "off" !== closure_4;
      obj.position = closure_2;
      obj.context = tmp;
      obj.device = obj;
      obj.dispatch(obj);
    });
  }
  if (null != item) {
    if (item.type === constants2.EPISODE) {
      const obj2 = {};
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
      closure_5 = obj2;
    }
  }
}
function getPlayerState(arg0) {
  const arg1 = arg0;
  const importDefault = arg1;
  const SpotifyAPI = arg1(dependencyMap[20]).SpotifyAPI;
  let obj = { url: constants.PLAYER };
  obj = { additional_types: "" + constants2.TRACK + "," + constants2.EPISODE };
  obj.query = obj;
  obj.onlyRetryOnAuthorizationErrors = true;
  const value = SpotifyAPI.get(arg0, arg1, obj);
  return value.then((body) => {
    body = body.body;
    if (null != body) {
      callback2(body, arg1, body).then(() => arg0);
      const promise = callback2(body, arg1, body);
    } else {
      callback(body);
    }
  }).catch(() => {
    callback(arg0);
  });
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
({ getSpotifyResourceType: closure_15, isSpotifyParty: closure_16, SPOTIFY_PARTY_PREFIX: closure_17, SpotifyEndpoints: closure_18, SpotifyResourceTypes: closure_19 } = arg1(dependencyMap[12]));
const tmp3 = arg1(dependencyMap[13]);
const PlatformTypes = tmp3.PlatformTypes;
({ ActivityFlags: closure_21, AnalyticEvents: closure_22 } = tmp3);
const tmp2 = arg1(dependencyMap[12]);
let closure_26 = importDefault(dependencyMap[14]).get(PlatformTypes.SPOTIFY);
let closure_27 = 30 * importDefault(dependencyMap[15]).Millis.SECOND;
let closure_28 = 30 * importDefault(dependencyMap[15]).Millis.SECOND;
let closure_29 = 5 * importDefault(dependencyMap[15]).Millis.MINUTE;
let closure_30 = 5 * importDefault(dependencyMap[15]).Millis.SECOND;
let closure_31 = 1.5 * importDefault(dependencyMap[15]).Millis.SECOND;
const MINUTE = importDefault(dependencyMap[15]).Millis.MINUTE;
let closure_33 = 3 * importDefault(dependencyMap[15]).Millis.SECOND;
let closure_34 = { PLAYER_STATE_CHANGED: "PLAYER_STATE_CHANGED", DEVICE_STATE_CHANGED: "DEVICE_STATE_CHANGED" };
let closure_35 = "message";
let closure_36 = "ping";
let closure_37 = "single";
let importDefaultResult1 = importDefault(dependencyMap[16]);
importDefaultResult1 = new importDefaultResult1("Spotify");
const timeout = new arg1(dependencyMap[17]).Timeout();
const timeout1 = new arg1(dependencyMap[17]).Timeout();
const timeout2 = new arg1(dependencyMap[17]).Timeout();
const timeout3 = new arg1(dependencyMap[17]).Timeout();
const timeout4 = new arg1(dependencyMap[17]).Timeout();
let closure_44 = {};
let closure_45 = {};
let closure_46 = {};
let closure_47 = false;
let closure_48 = null;
const items = [WebSocket.CONNECTING, WebSocket.OPEN];
const set = new Set(items);
const tmp12 = () => {
  class SpotifySocket {
    constructor(arg0, arg1) {
      SpotifySocket = this;
      tmp = closure_6(this, SpotifySocket);
      this._requestedDisconnect = false;
      this._requestedConnect = false;
      obj = closure_1(closure_2[19]);
      this.handleDeviceStateChange = obj.throttle(() => {
        const devices = self(closure_2[20]).getDevices(self.accountId, self.accessToken);
        callback(self.accountId, self.accessToken);
      }, closure_33);
      this.accountId = arg0;
      this.accessToken = arg1;
      interval = new SpotifySocket(closure_2[17]).Interval();
      this.pingInterval = interval;
      tmp3 = closure_1(closure_2[21]);
      tmp3 = new tmp3(undefined, closure_32);
      this.backoff = tmp3;
      connectResult = this.connect();
      return;
    }
  }
  const arg1 = SpotifySocket;
  let obj = {
    key: "connected",
    get() {
      let hasItem = null != this.socket;
      if (hasItem) {
        hasItem = set.has(tmp.socket.readyState);
      }
      return hasItem;
    }
  };
  const items = [obj, , , , , , , ];
  obj = {
    key: "connect",
    value() {
      const self = this;
      const SpotifySocket = this;
      if (!tmp) {
        closure_38.info("WS Connecting");
        self._requestedDisconnect = false;
        self._requestedConnect = true;
        const promise = callback5(self.accountId, self.accessToken);
        callback5(self.accountId, self.accessToken).then(() => {
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
          closure_38.error(arg0);
          self._requestedConnect = false;
          self.handleClose();
        });
        const nextPromise = callback5(self.accountId, self.accessToken).then(() => {
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
          const obj = { type: closure_36 };
          socket.send(JSON.stringify(obj));
        }
      }
    }
  };
  items[4] = {
    key: "handleOpen",
    value() {
      const SpotifySocket = this;
      closure_38.info("WS Connected");
      const backoff = this.backoff;
      backoff.succeed();
      const pingInterval = this.pingInterval;
      pingInterval.start(closure_27, () => self.ping());
      const profile = SpotifySocket(closure_2[20]).getProfile(this.accountId, this.accessToken);
      const obj = SpotifySocket(closure_2[20]);
      const devices = SpotifySocket(closure_2[20]).getDevices(this.accountId, this.accessToken);
    }
  };
  items[5] = {
    key: "handleMessage",
    value(data) {
      let payloads;
      let uri;
      const self = this;
      data = data.data;
      if ("string" === typeof data) {
        const _JSON = JSON;
        const parsed = JSON.parse(data);
        ({ uri, payloads } = parsed);
        if (parsed.type === closure_35) {
          if ("string" === typeof uri) {
            if (uri.startsWith("hm://pusher/v1/connections/")) {
              const _decodeURIComponent = decodeURIComponent;
              self.connectionId = decodeURIComponent(uri.split("hm://pusher/v1/connections/")[1]);
              const result = SpotifySocket(closure_2[20]).subscribePlayerStateNotifications(self.accountId, self.accessToken, self.connectionId);
              const obj = SpotifySocket(closure_2[20]);
            }
          }
          const _Array = Array;
          if (Array.isArray(payloads)) {
            const tmp2 = callback3(payloads);
            const iter = tmp2();
            let iter2 = iter;
            if (!iter.done) {
              while (true) {
                let events = iter2.value.events;
                if (null != events) {
                  let tmp4 = callback3;
                  let tmp5 = callback3(events);
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
                      let done = iter5.done;
                    } while (!done);
                  }
                }
                let iter6 = tmp2();
                iter2 = iter6;
                if (iter6.done) {
                  break;
                } else {
                  // continue
                }
              }
            }
          }
        }
      }
    }
  };
  items[6] = {
    key: "handleClose",
    value() {
      const SpotifySocket = this;
      const pingInterval = this.pingInterval;
      pingInterval.stop();
      if (!this._requestedDisconnect) {
        const backoff = this.backoff;
        const _Math = Math;
        const _HermesInternal = HermesInternal;
        closure_38.info("WS Disconnected. Next retry in " + Math.round(backoff.fail(() => {
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
      if (constants.PLAYER_STATE_CHANGED === type) {
        if (tmp4) {
          callback4(self.accountId, self.accessToken, event.state);
        }
        const tmp4 = null != event && null != event.state;
      } else if (constants.DEVICE_STATE_CHANGED === type) {
        const result = self.handleDeviceStateChange();
      }
    }
  };
  return callback2(SpotifySocket, items);
}();
let tmp13 = (Store) => {
  class SpotifyStore {
    constructor() {
      self = this;
      tmp = closure_6(this, SpotifyStore);
      obj = closure_4(SpotifyStore);
      tmp2 = closure_3;
      if (closure_52()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = SpotifyStore;
  callback(SpotifyStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_9, closure_10, closure_11, closure_12, closure_8, closure_13, closure_14);
      const items = [closure_12];
      this.syncWith(items, () => function handlePresenceUpdate() {
        let party;
        let sync_id;
        let timestamps;
        if (null == closure_24) {
          return false;
        } else if (null == callback()) {
          return false;
        } else {
          const userId = closure_24.userId;
          const tmp14 = callback2(userId);
          if (null == tmp14) {
            closure_41.start(closure_29, () => {
              let tmp = null != userId;
              if (tmp) {
                tmp = userId.userId === userId;
              }
              if (tmp) {
                callback(closure_2[24])();
              }
            });
            return false;
          } else {
            closure_41.stop();
            ({ sync_id, timestamps, party } = tmp14);
            let tmp2 = null != sync_id;
            if (tmp2) {
              tmp2 = closure_24.trackId !== sync_id;
            }
            let tmp3 = null != timestamps;
            if (tmp3) {
              tmp3 = closure_24.startTime !== timestamps.start;
            }
            if (!tmp2) {
              if (!tmp3) {
                let flag = null != party;
                if (flag) {
                  flag = party.id !== closure_24.partyId;
                }
                if (flag) {
                  closure_24.partyId = party.id;
                  flag = true;
                }
              }
              return flag;
            }
            flag = callback3(userId, tmp14, false);
          }
        }
      }());
      const isSpotifyProtocolRegistered = SpotifyStore(closure_2[20]).fetchIsSpotifyProtocolRegistered();
    }
  };
  const items = [obj, , , , , , , , , , , ];
  obj = {
    key: "hasConnectedAccount",
    value() {
      return Object.keys(closure_44).length > 0;
    }
  };
  items[1] = obj;
  obj = {
    key: "getActiveSocketAndDevice",
    value() {
      return callback5();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getPlayableComputerDevices",
    value() {
      const items = [];
      for (const key10005 in closure_44) {
        let tmp7 = key10005;
        let tmp8 = closure_44;
        let tmp9 = closure_44[key10005];
        if (!tmp9.connected) {
          continue;
        } else {
          let tmp = closure_45;
          if (null == closure_45[key10005]) {
            continue;
          } else {
            let tmp2 = closure_45;
            let arr2 = closure_45[key10005];
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
              // continue
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
      let tmp = null != callback5() && null != party.sync_id && null != party && null != party.id;
      if (tmp) {
        tmp = callback3(party.id);
      }
      return tmp;
    }
  };
  items[5] = {
    key: "getSyncingWith",
    value() {
      return closure_24;
    }
  };
  items[6] = {
    key: "wasAutoPaused",
    value() {
      return closure_47;
    }
  };
  items[7] = {
    key: "getLastPlayedTrackId",
    value() {
      return closure_25;
    }
  };
  items[8] = {
    key: "getTrack",
    value() {
      let track = null;
      if (null != closure_23) {
        track = closure_23.track;
      }
      return track;
    }
  };
  items[9] = {
    key: "getPlayerState",
    value(arg0) {
      return closure_46[arg0];
    }
  };
  items[10] = {
    key: "shouldShowActivity",
    value() {
      let showActivity = null != closure_23;
      if (showActivity) {
        showActivity = closure_23.account.showActivity;
      }
      if (showActivity) {
        showActivity = !idle.isIdle();
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
      if (null == closure_23) {
        let tmp18 = null;
        if (null != closure_24) {
          tmp18 = callback6(closure_24.userId);
        }
        return tmp18;
      } else {
        const track = closure_23.track;
        ({ artists, album, name } = track);
        ({ startTime, context } = closure_23);
        ({ id, duration, isLocal, type } = track);
        const substr = artists.slice(0, 5);
        if (artists.length > 0) {
          const mapped = substr.map((name) => name.name.replace(/;/g, ""));
          const joined = mapped.join("; ");
        }
        let obj = {};
        let assetFromImageURL = null;
        if (null != album.image) {
          let obj2 = SpotifyStore(closure_2[27]);
          assetFromImageURL = obj2.getAssetFromImageURL(constants.SPOTIFY, album.image.url);
        }
        if (tmp6) {
          obj.large_image = assetFromImageURL;
        }
        if (album.type !== closure_37) {
          obj.large_text = album.name;
        }
        if (null != context) {
          const uri = context.uri;
        }
        if (null != closure_24) {
          if (null != closure_24.partyId) {
            let partyId = closure_24.partyId;
          }
          let text = name;
          if (name.length > 128) {
            text = `${name.substring(0, 125)}...`;
          }
          obj = { context_uri: uri, album_id: album.id, artist_ids: substr.map((id) => id.id), type, button_urls: [] };
          const obj1 = { name: name.name, assets: obj, details: text, state: joined };
          obj2 = { start: startTime, end: startTime + duration };
          obj1.timestamps = obj2;
          const obj3 = { id: partyId };
          obj1.party = obj3;
          if (!isLocal) {
            obj1.sync_id = id;
            obj1.flags = constants2.PLAY | constants2.SYNC;
            obj1.metadata = obj;
          }
          return obj1;
        }
        const _HermesInternal = HermesInternal;
        partyId = "" + closure_17 + id.getId();
        const tmp6 = null != album.image && null != assetFromImageURL;
      }
    }
  };
  return callback2(SpotifyStore, items);
}(importDefault(dependencyMap[28]).Store);
tmp13.displayName = "SpotifyStore";
tmp13 = new tmp13(importDefault(dependencyMap[18]), {
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
    if (null == closure_44[accountId]) {
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
    const arg1 = device;
    let importDefault;
    let flag = false;
    ({ repeat, context } = arg0);
    if (null != device) {
      if (null != closure_45[accountId]) {
        const found = closure_45[accountId].find((id) => id.id === device.id);
        if (null == found) {
          closure_45[accountId].push(device);
          let flag2 = true;
          const arr3 = closure_45[accountId];
        } else {
          flag2 = false;
          if (!importDefault(dependencyMap[23])(found, device)) {
            const _Object = Object;
            const merged = Object.assign(found, device);
            flag2 = true;
          }
        }
        setActiveDevice(accountId, device.id);
        const arr2 = closure_45[accountId];
      } else {
        const items = [device];
        closure_45[accountId] = items;
        flag = true;
      }
    }
    let obj = closure_48;
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
    const account = store2.getAccount(accountId, PlatformTypes.SPOTIFY);
    importDefault = account;
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
        closure_46[accountId] = tmp21;
      }
      const values = importDefault(dependencyMap[19]).values(closure_46);
      let closure_23 = values.find((arg0) => null != arg0);
      setSpeaking(store.getId());
      if (null != tmp14) {
        if (!tmp22) {
          timeout3.start(tmp14.duration - position + closure_30, () => {
            callback(account.id);
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
            closure_38.info("Stopping listening along");
            account(closure_2[24])();
            callback(account.id);
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
              importDefault(dependencyMap[18]).dispatch(obj);
              const obj4 = importDefault(dependencyMap[18]);
              const obj1 = { party_platform: PlatformTypes.SPOTIFY, track_id: tmp14.id, has_images: true, details: tmp14.album.name, state: tmp14.name, album_id: tmp14.album.id };
              const artists = tmp14.artists;
              obj1.author_ids = artists.map((id) => id.id);
              const artists1 = tmp14.artists;
              obj1.author_names = artists1.map((name) => name.name);
              importDefault(dependencyMap[22]).track(constants3.ACTIVITY_UPDATED, obj1);
              const obj6 = importDefault(dependencyMap[22]);
            }
          } else {
            tmp51 = flag;
          }
        }
        return tmp51;
      }
      timeout3.stop();
      const obj3 = importDefault(dependencyMap[19]);
      const tmp25 = closure_23;
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
          let obj = arg1(dependencyMap[20]);
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
      callback(userId.userId);
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
      if (null != closure_48) {
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
            const Interval = arg1(dependencyMap[17]).Interval;
            const prototype = Interval.prototype;
            const interval = new Interval();
            closure_48 = interval;
            interval.start(closure_28, autoPause);
          }
        }
      }
      if (null != closure_48) {
        obj2.stop();
      }
      closure_48 = null;
      const obj = closure_48;
      const obj2 = closure_48;
    } else if (null == settings) {
      if (null != closure_48) {
        obj4.stop();
      }
      closure_48 = null;
      const obj4 = closure_48;
    }
  }
});
const importDefaultResult = importDefault(dependencyMap[14]);
const obj = {
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
    if (null == closure_44[accountId]) {
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
    const arg1 = device;
    let importDefault;
    let flag = false;
    ({ repeat, context } = arg0);
    if (null != device) {
      if (null != closure_45[accountId]) {
        const found = closure_45[accountId].find((id) => id.id === device.id);
        if (null == found) {
          closure_45[accountId].push(device);
          let flag2 = true;
          const arr3 = closure_45[accountId];
        } else {
          flag2 = false;
          if (!importDefault(dependencyMap[23])(found, device)) {
            const _Object = Object;
            const merged = Object.assign(found, device);
            flag2 = true;
          }
        }
        setActiveDevice(accountId, device.id);
        const arr2 = closure_45[accountId];
      } else {
        const items = [device];
        closure_45[accountId] = items;
        flag = true;
      }
    }
    let obj = closure_48;
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
    const account = store2.getAccount(accountId, PlatformTypes.SPOTIFY);
    importDefault = account;
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
        closure_46[accountId] = tmp21;
      }
      const values = importDefault(dependencyMap[19]).values(closure_46);
      let closure_23 = values.find((arg0) => null != arg0);
      setSpeaking(store.getId());
      if (null != tmp14) {
        if (!tmp22) {
          timeout3.start(tmp14.duration - position + closure_30, () => {
            callback(account.id);
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
            closure_38.info("Stopping listening along");
            account(closure_2[24])();
            callback(account.id);
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
              importDefault(dependencyMap[18]).dispatch(obj);
              const obj4 = importDefault(dependencyMap[18]);
              const obj1 = { party_platform: PlatformTypes.SPOTIFY, track_id: tmp14.id, has_images: true, details: tmp14.album.name, state: tmp14.name, album_id: tmp14.album.id };
              const artists = tmp14.artists;
              obj1.author_ids = artists.map((id) => id.id);
              const artists1 = tmp14.artists;
              obj1.author_names = artists1.map((name) => name.name);
              importDefault(dependencyMap[22]).track(constants3.ACTIVITY_UPDATED, obj1);
              const obj6 = importDefault(dependencyMap[22]);
            }
          } else {
            tmp51 = flag;
          }
        }
        return tmp51;
      }
      timeout3.stop();
      const obj3 = importDefault(dependencyMap[19]);
      const tmp25 = closure_23;
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
          let obj = arg1(dependencyMap[20]);
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
      callback(userId.userId);
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
      if (null != closure_48) {
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
            const Interval = arg1(dependencyMap[17]).Interval;
            const prototype = Interval.prototype;
            const interval = new Interval();
            closure_48 = interval;
            interval.start(closure_28, autoPause);
          }
        }
      }
      if (null != closure_48) {
        obj2.stop();
      }
      closure_48 = null;
      const obj = closure_48;
      const obj2 = closure_48;
    } else if (null == settings) {
      if (null != closure_48) {
        obj4.stop();
      }
      closure_48 = null;
      const obj4 = closure_48;
    }
  }
};
const result = arg1(dependencyMap[29]).fileFinishedImporting("modules/spotify/SpotifyStore.tsx");

export default tmp13;
export const SpotifySocket = tmp12;
