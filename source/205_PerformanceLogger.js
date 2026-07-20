// Module ID: 205
// Function ID: 2896
// Name: PerformanceLogger
// Dependencies: []
// Exports: default

// Module 205 (PerformanceLogger)
let closure_1 = importDefault(dependencyMap[0]);
let closure_2 = importDefault(dependencyMap[1]);
let fn = global.nativeQPLTimestamp;
if (null == fn) {
  fn = () => {
    const _performance = global.performance;
    return _performance.now();
  };
}
let closure_4 = () => {
  class PerformanceLogger {
    constructor() {
      tmp = closure_1(this, PerformanceLogger);
      this._timespans = {};
      this._extras = {};
      this._points = {};
      this._pointExtras = {};
      this._closed = false;
      return;
    }
  }
  const global = PerformanceLogger;
  let obj = {
    key: "addTimespan",
    value: function addTimespan(arg0, arg1, endTime, startExtras, endExtras) {
      let num = arg1;
      const self = this;
      if (!tmp) {
        const obj = { startTime: num, endTime };
        if (!num) {
          num = 0;
        }
        obj.totalTime = endTime - num;
        obj.startExtras = startExtras;
        obj.endExtras = endExtras;
        self._timespans[arg0] = obj;
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , ];
  obj = {
    key: "append",
    value: function append(getTimespans) {
      this._timespans = Object.assign({}, getTimespans.getTimespans(), this._timespans);
      this._extras = Object.assign({}, getTimespans.getExtras(), this._extras);
      this._points = Object.assign({}, getTimespans.getPoints(), this._points);
      this._pointExtras = Object.assign({}, getTimespans.getPointExtras(), this._pointExtras);
    }
  };
  items[1] = obj;
  obj = {
    key: "clear",
    value: function clear() {
      this._timespans = {};
      this._extras = {};
      this._points = {};
    }
  };
  items[2] = obj;
  items[3] = {
    key: "clearCompleted",
    value: function clearCompleted() {
      const self = this;
      for (const key10005 in this._timespans) {
        let tmp2 = key10005;
        let tmp3 = self._timespans[key10005];
        let totalTime;
        if (null != tmp3) {
          totalTime = tmp3.totalTime;
        }
        if (null == totalTime) {
          continue;
        } else {
          let _timespans = self._timespans;
          delete r8[r9];
          // continue
        }
        continue;
      }
      self._extras = {};
      self._points = {};
    }
  };
  items[4] = {
    key: "close",
    value: function close() {
      this._closed = true;
    }
  };
  items[5] = {
    key: "currentTimestamp",
    value: function currentTimestamp() {
      return callback2();
    }
  };
  items[6] = {
    key: "getExtras",
    value: function getExtras() {
      return this._extras;
    }
  };
  items[7] = {
    key: "getPoints",
    value: function getPoints() {
      return this._points;
    }
  };
  items[8] = {
    key: "getPointExtras",
    value: function getPointExtras() {
      return this._pointExtras;
    }
  };
  items[9] = {
    key: "getTimespans",
    value: function getTimespans() {
      return this._timespans;
    }
  };
  items[10] = {
    key: "hasTimespan",
    value: function hasTimespan(arg0) {
      return this._timespans[arg0];
    }
  };
  items[11] = {
    key: "isClosed",
    value: function isClosed() {
      return this._closed;
    }
  };
  items[12] = {
    key: "logEverything",
    value: function logEverything() {

    }
  };
  items[13] = {
    key: "markPoint",
    value: function markPoint(initializeCore_end, arg1) {
      const self = this;
      if (arguments.length > 1) {
        if (undefined !== arguments[1]) {
          let tmp = arguments[1];
        }
        if (arguments.length > 2) {
          const tmp2 = arguments[2];
        }
        if (!self._closed) {
          if (null == self._points[initializeCore_end]) {
            self._points[initializeCore_end] = tmp;
            if (tmp2) {
              self._pointExtras[initializeCore_end] = tmp2;
            }
          }
        }
      }
      tmp = callback2();
    }
  };
  items[14] = {
    key: "removeExtra",
    value: function removeExtra(arg0) {
      delete r1[r2];
      return this._extras[arg0];
    }
  };
  items[15] = {
    key: "setExtra",
    value: function setExtra(arg0, arg1) {
      const self = this;
      let _closed = this._closed;
      if (!_closed) {
        const _extras = self._extras;
        _closed = _extras.hasOwnProperty(arg0);
      }
      if (!_closed) {
        self._extras[arg0] = arg1;
      }
    }
  };
  items[16] = {
    key: "startTimespan",
    value: function startTimespan(_perfKey) {
      const self = this;
      if (arguments.length > 1) {
        if (undefined !== arguments[1]) {
          let tmp = arguments[1];
        }
        if (arguments.length > 2) {
          const tmp2 = arguments[2];
        }
        if (!tmp3) {
          const obj = { startTime: tmp, startExtras: tmp2 };
          self._timespans[_perfKey] = obj;
        }
      }
      tmp = callback2();
    }
  };
  items[17] = {
    key: "stopTimespan",
    value: function stopTimespan(_perfKey) {
      let endTime;
      let startTime;
      const self = this;
      if (arguments.length > 1) {
        if (undefined !== arguments[1]) {
          let tmp = arguments[1];
        }
        if (arguments.length > 2) {
          const tmp2 = arguments[2];
        }
        if (!self._closed) {
          let tmp5 = tmp4;
          if (self._timespans[_perfKey]) {
            tmp5 = null != tmp4.startTime;
          }
          if (tmp5) {
            tmp5 = null == tmp4.endTime;
          }
          if (tmp5) {
            tmp4.endExtras = tmp2;
            tmp4.endTime = tmp;
            ({ startTime, endTime } = tmp4);
            if (!startTime) {
              startTime = 0;
            }
            tmp4.totalTime = endTime - startTime;
          }
        }
      }
      tmp = callback2();
    }
  };
  return callback(PerformanceLogger, items);
}();

export default function createPerformanceLogger() {
  return new closure_4();
};
export const getCurrentTimestamp = fn;
