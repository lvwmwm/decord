// Module ID: 10447
// Function ID: 80590
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 6, 7, 5, 4812, 3970, 653, 664, 507, 4938, 686, 7820, 4814, 636, 566, 2]

// Module 10447 (_isNativeReflectConstruct)
import isUndefinedOrNull from "isUndefinedOrNull";
import closure_4 from "set";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import asyncGeneratorStep from "asyncGeneratorStep";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { PlatformTypes } from "ME";
import set from "_inherits";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function makeTwitchRequest(arg0, query) {
  const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
  let obj = { url: "https://api.twitch.tv/helix" + arg0, query };
  obj = { "Client-ID": "33kozedd0zs6fbauka98psnc7zwom2s", Authorization: "Bearer " + arg2 };
  obj.headers = obj;
  obj.rejectWithError = false;
  return HTTP.get(obj);
}
function _getTwitchGame() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback3(tmp);
  return obj(...arguments);
}
function streamerModeUpdate() {
  if (enabled.enabled) {
    obj.start();
  } else {
    obj.stop();
  }
}
const MINUTE = require("set").Millis.MINUTE;
let closure_13 = 5 * require("set").Millis.MINUTE;
const re14 = /live_user_(.*)-\{width\}/;
let c15 = null;
let c16 = 0;
let c17 = null;
let set = new Set();
let closure_19 = {};
let tmp3 = (() => {
  class StreamingPoller {
    constructor() {
      tmp = outer1_6(this, StreamingPoller);
      this._started = false;
      return;
    }
  }
  let obj = {
    key: "start",
    value() {
      const self = this;
      if (!this._started) {
        self._started = true;
        if (outer1_9.isFetching()) {
          const response = callback2(StreamingPoller[11]).fetch();
          const obj = callback2(StreamingPoller[11]);
        } else {
          self._check();
        }
      }
    }
  };
  let items = [obj, , , , , ];
  obj = {
    key: "stop",
    value() {
      this._started = false;
      const outer1_17 = null;
      const outer1_16 = 0;
      if (null != this._nextCheck) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp._nextCheck);
      }
      callback2(StreamingPoller[12]).dispatch({ type: "STREAMING_UPDATE", stream: null });
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
      let self = this;
      self = this;
      if (this._started) {
        const accounts = outer1_9.getAccounts();
        if (null != accounts) {
          if (null != self._nextCheck) {
            const _clearTimeout = clearTimeout;
            clearTimeout(self._nextCheck);
          }
          const items = [outer1_11.TWITCH];
          const _Date = Date;
          const timestamp = Date.now();
          if (outer1_16 <= timestamp) {
            items.push(outer1_11.YOUTUBE);
            outer1_16 = timestamp + outer1_13;
          }
          const found = accounts.filter((type) => items.includes(type.type));
          Promise.allSettled(found.map((type) => {
            if (type.type === outer2_11.TWITCH) {
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
                tmp3 = null != outer2_17;
              }
              if (tmp3) {
                value = outer2_17;
              }
              let obj = items(StreamingPoller[12]);
              obj = { type: "STREAMING_UPDATE", stream: value };
              obj.dispatch(obj);
            }
            self._scheduleCheck();
          });
          const allSettledResult = Promise.allSettled(found.map((type) => {
            if (type.type === outer2_11.TWITCH) {
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
      const self = this;
      if (this._started) {
        const _setTimeout = setTimeout;
        tmp._nextCheck = setTimeout(() => self._check(), outer1_12);
      }
    }
  };
  return callback2(StreamingPoller, items);
})();
tmp3 = new tmp3();
let closure_20 = tmp3;
let tmp5 = ((Store) => {
  class ExternalStreamingStore {
    constructor() {
      self = this;
      tmp = outer1_6(this, ExternalStreamingStore);
      obj = outer1_4(ExternalStreamingStore);
      tmp2 = outer1_3;
      if (outer1_21()) {
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
  callback(ExternalStreamingStore, Store);
  let obj = {
    key: "initialize",
    value() {
      outer1_24();
      this.waitFor(outer1_9, outer1_10);
      const items = [outer1_10];
      this.syncWith(items, outer1_24);
    }
  };
  let items = [obj, ];
  obj = {
    key: "getStream",
    value() {
      return outer1_15;
    }
  };
  items[1] = obj;
  return callback2(ExternalStreamingStore, items);
})(require("initialize").Store);
tmp5.displayName = "ExternalStreamingStore";
tmp5 = new tmp5(require("dispatcher"), {
  STREAMING_UPDATE: function streamUpdate(stream) {
    if (importDefault(636)(stream.stream, c15)) {
      return false;
    } else {
      stream = stream.stream;
      let tmp = null;
      if (null != stream) {
        tmp = stream;
      }
      c15 = tmp;
    }
  },
  USER_CONNECTIONS_UPDATE() {
    return tmp3._check();
  }
});
let result = set.fileFinishedImporting("stores/ExternalStreamingStore.tsx");

export default tmp5;
