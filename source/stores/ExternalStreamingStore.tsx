// Module ID: 10436
// Function ID: 80516
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10436 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function makeTwitchRequest(arg0, query) {
  const HTTP = query(dependencyMap[10]).HTTP;
  let obj = { url: "https://api.twitch.tv/helix" + arg0, query };
  obj = { Client-ID: "33kozedd0zs6fbauka98psnc7zwom2s", Authorization: "Bearer " + arg2 };
  obj.headers = obj;
  obj.rejectWithError = false;
  return HTTP.get(obj);
}
function _getTwitchGame() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  const _getTwitchGame = obj;
  return obj(...arguments);
}
function streamerModeUpdate() {
  if (enabled.enabled) {
    obj.start();
  } else {
    obj.stop();
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const PlatformTypes = arg1(dependencyMap[8]).PlatformTypes;
const MINUTE = importDefault(dependencyMap[9]).Millis.MINUTE;
let closure_13 = 5 * importDefault(dependencyMap[9]).Millis.MINUTE;
let closure_14 = /live_user_(.*)-\{width\}/;
let closure_15 = null;
let closure_16 = 0;
let closure_17 = null;
const set = new Set();
let closure_19 = {};
let tmp3 = () => {
  class StreamingPoller {
    constructor() {
      tmp = closure_6(this, StreamingPoller);
      this._started = false;
      return;
    }
  }
  const dependencyMap = StreamingPoller;
  let obj = {
    key: "start",
    value() {
      const self = this;
      if (!this._started) {
        self._started = true;
        if (closure_9.isFetching()) {
          const response = callback2(StreamingPoller[11]).fetch();
          const obj = callback2(StreamingPoller[11]);
        } else {
          self._check();
        }
      }
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "stop",
    value() {
      this._started = false;
      let closure_17 = null;
      let closure_16 = 0;
      if (null != this._nextCheck) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp._nextCheck);
      }
      callback2(StreamingPoller[12]).dispatch({});
    }
  };
  items[1] = obj;
  obj = { key: "_checkTwitch" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_1 = callback3(tmp2);
  obj.value = function _checkTwitch(type, arg1) {
    return callback2(...arguments);
  };
  items[2] = obj;
  const obj1 = { key: "_checkYouTube" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback3(tmp);
  obj1.value = function _checkYouTube(type, arg1) {
    return callback(...arguments);
  };
  items[3] = obj1;
  items[4] = {
    key: "_check",
    value() {
      const self = this;
      let closure_0 = this;
      if (this._started) {
        const accounts = closure_9.getAccounts();
        if (null != accounts) {
          if (null != self._nextCheck) {
            const _clearTimeout = clearTimeout;
            clearTimeout(self._nextCheck);
          }
          const items = [constants.TWITCH];
          let closure_1 = items;
          const _Date = Date;
          const timestamp = Date.now();
          if (closure_16 <= timestamp) {
            items.push(constants.YOUTUBE);
            closure_16 = timestamp + closure_13;
          }
          const found = accounts.filter((type) => items.includes(type.type));
          Promise.allSettled(found.map((type) => {
            if (type.type === constants.TWITCH) {
              let _checkTwitchResult = self._checkTwitch(type);
            } else {
              _checkTwitchResult = self._checkYouTube(type);
            }
            return _checkTwitchResult;
          })).then((arr) => {
            if (self._started) {
              const iter = arr.find((status) => {
                let tmp = "fulfilled" === status.status;
                if (tmp) {
                  tmp = null != status.value;
                }
                return tmp;
              });
              let value;
              if (null != iter) {
                value = iter.value;
              }
              let tmp3 = null == value;
              if (tmp3) {
                tmp3 = null != closure_17;
              }
              if (tmp3) {
                value = closure_17;
              }
              let obj = items(closure_2[12]);
              obj = { type: "STREAMING_UPDATE", stream: value };
              obj.dispatch(obj);
            }
            self._scheduleCheck();
          });
          const allSettledResult = Promise.allSettled(found.map((type) => {
            if (type.type === constants.TWITCH) {
              let _checkTwitchResult = self._checkTwitch(type);
            } else {
              _checkTwitchResult = self._checkYouTube(type);
            }
            return _checkTwitchResult;
          }));
        }
      }
    }
  };
  items[5] = {
    key: "_scheduleCheck",
    value() {
      let closure_0 = this;
      if (this._started) {
        const _setTimeout = setTimeout;
        tmp._nextCheck = setTimeout(() => self._check(), closure_12);
      }
    }
  };
  return callback2(StreamingPoller, items);
}();
tmp3 = new tmp3();
let tmp5 = (Store) => {
  class ExternalStreamingStore {
    constructor() {
      self = this;
      tmp = closure_6(this, ExternalStreamingStore);
      obj = closure_4(ExternalStreamingStore);
      tmp2 = closure_3;
      if (closure_21()) {
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
  const arg1 = ExternalStreamingStore;
  callback(ExternalStreamingStore, Store);
  let obj = {
    key: "initialize",
    value() {
      callback4();
      this.waitFor(closure_9, closure_10);
      const items = [closure_10];
      this.syncWith(items, callback4);
    }
  };
  const items = [obj, ];
  obj = {
    key: "getStream",
    value() {
      return closure_15;
    }
  };
  items[1] = obj;
  return callback2(ExternalStreamingStore, items);
}(importDefault(dependencyMap[16]).Store);
tmp5.displayName = "ExternalStreamingStore";
tmp5 = new tmp5(importDefault(dependencyMap[12]), {
  STREAMING_UPDATE: function streamUpdate(stream) {
    if (importDefault(dependencyMap[15])(stream.stream, closure_15)) {
      return false;
    } else {
      stream = stream.stream;
      let tmp = null;
      if (null != stream) {
        tmp = stream;
      }
      closure_15 = tmp;
    }
  },
  USER_CONNECTIONS_UPDATE() {
    return tmp3._check();
  }
});
const result = arg1(dependencyMap[17]).fileFinishedImporting("stores/ExternalStreamingStore.tsx");

export default tmp5;
