// Module ID: 15969
// Function ID: 122485
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 4294967295, 0, 0, 0, 0, 0, 0]

// Module 15969 (_isNativeReflectConstruct)
import "__exportStarResult1";
import "__exportStarResult1";
import "__exportStarResult1";
import "__exportStarResult1";
import "__exportStarResult1";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_4 = require(dependencyMap[2]);
function empty() {

}
const timeoutError = new require("__exportStarResult1").TimeoutError();

export default (arg0) => {
  class PQueue {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, PQueue);
      obj = closure_6(PQueue);
      tmp2 = closure_5;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result._intervalCount = 0;
      tmp2Result._intervalEnd = 0;
      tmp2Result._pendingCount = 0;
      tmp2Result._resolveEmpty = closure_8;
      tmp2Result._resolveIdle = closure_8;
      obj = { queueClass: closure_0(closure_1[7]).default };
      merged = Object.assign(obj, arg0);
      if ("number" === typeof merged.intervalCap) {
        num = 1;
        if (merged.intervalCap >= 1) {
          if (undefined !== merged.interval) {
            _Number = Number;
            if (Number.isFinite(merged.interval)) {
              if (merged.interval >= 0) {
                tmp2Result._carryoverConcurrencyCount = merged.carryoverConcurrencyCount;
                tmp2Result._isIntervalIgnored = merged.intervalCap === Infinity || 0 === merged.interval;
                ({ intervalCap: tmp6._intervalCap, interval: tmp6._interval, queueClass } = merged);
                prototype = queueClass.prototype;
                tmp10 = new.target;
                tmp11 = new.target;
                queueClass = new queueClass();
                tmp13 = queueClass;
                tmp2Result._queue = queueClass;
                ({ queueClass: tmp6._queueClass, concurrency: tmp6.concurrency, timeout: tmp6._timeout } = merged);
                tmp2Result._throwOnTimeout = true === merged.throwOnTimeout;
                tmp2Result._isPaused = false === merged.autoStart;
                return tmp2Result;
              }
            }
          }
          _TypeError = TypeError;
          str3 = merged.interval;
          tmp14 = null;
          str = undefined;
          if (null !== str3) {
            if (undefined !== str3) {
              str = str3.toString();
            }
          }
          str4 = "";
          str5 = "";
          if (null !== str) {
            str5 = "";
            if (undefined !== str) {
              str5 = str;
            }
          }
          _HermesInternal = HermesInternal;
          str6 = "Expected `interval` to be a finite number >= 0, got `";
          str7 = "` (";
          str8 = ")";
          tmp16 = str5;
          prototype2 = _TypeError.prototype;
          tmp17 = new.target;
          tmp18 = new.target;
          _TypeError = new _TypeError("Expected `interval` to be a finite number >= 0, got `" + str5 + "` (" + typeof merged.interval + ")");
          tmp20 = _TypeError;
          throw _TypeError;
        }
      }
      str = merged.intervalCap;
      str1 = undefined;
      if (null !== str) {
        if (undefined !== str) {
          str1 = str.toString();
        }
      }
      str2 = "";
      if (null !== str1) {
        str2 = "";
        if (undefined !== str1) {
          str2 = str1;
        }
      }
      typeError = new TypeError("Expected `intervalCap` to be a number from 1 and up, got `" + str2 + "` (" + typeof merged.intervalCap + ")");
      throw typeError;
    }
  }
  const callback = PQueue;
  __exportStarResult1(PQueue, arg0);
  let obj = {
    key: "_doesIntervalAllowAnother",
    get() {
      const self = this;
      return this._isIntervalIgnored || self._intervalCount < self._intervalCap;
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "_doesConcurrentAllowAnother",
    get() {
      return this._pendingCount < this._concurrency;
    }
  };
  items[1] = obj;
  obj = {
    key: "_next",
    value: function _next() {
      this._pendingCount = this._pendingCount - 1;
      this._tryToStartAnother();
      this.emit("next");
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_resolvePromises",
    value: function _resolvePromises() {
      const self = this;
      this._resolveEmpty();
      this._resolveEmpty = closure_8;
      if (0 === this._pendingCount) {
        self._resolveIdle();
        self._resolveIdle = closure_8;
        self.emit("idle");
      }
    }
  };
  items[4] = {
    key: "_onResumeInterval",
    value: function _onResumeInterval() {
      this._onInterval();
      const result = this._initializeIntervalIfNeeded();
      this._timeoutId = undefined;
    }
  };
  items[5] = {
    key: "_isIntervalPaused",
    value: function _isIntervalPaused() {
      const self = this;
      let closure_0 = this;
      if (undefined === this._intervalId) {
        const diff = self._intervalEnd - tmp;
        if (diff < 0) {
          let num2 = 0;
          if (self._carryoverConcurrencyCount) {
            num2 = self._pendingCount;
          }
          self._intervalCount = num2;
        } else {
          if (undefined === self._timeoutId) {
            const _setTimeout = setTimeout;
            self._timeoutId = setTimeout(() => {
              self._onResumeInterval();
            }, diff);
          }
          return true;
        }
      }
      return false;
    }
  };
  items[6] = {
    key: "_tryToStartAnother",
    value: function _tryToStartAnother() {
      const self = this;
      if (0 === this._queue.size) {
        if (self._intervalId) {
          const _clearInterval = clearInterval;
          clearInterval(self._intervalId);
        }
        self._intervalId = undefined;
        self._resolvePromises();
        return false;
      } else {
        if (!self._isPaused) {
          if (self._doesIntervalAllowAnother) {
            if (self._doesConcurrentAllowAnother) {
              const _queue = self._queue;
              const dequeueResult = _queue.dequeue();
              let flag = !tmp3;
              if (!!dequeueResult) {
                self.emit("active");
                dequeueResult();
                flag = true;
                if (tmp) {
                  const result = self._initializeIntervalIfNeeded();
                  flag = true;
                }
              }
              return flag;
            }
          }
        }
        return false;
      }
    }
  };
  items[7] = {
    key: "_initializeIntervalIfNeeded",
    value: function _initializeIntervalIfNeeded() {
      const self = this;
      let closure_0 = this;
      let _isIntervalIgnored = this._isIntervalIgnored;
      if (!_isIntervalIgnored) {
        _isIntervalIgnored = undefined !== self._intervalId;
      }
      if (!_isIntervalIgnored) {
        const _setInterval = setInterval;
        self._intervalId = setInterval(() => {
          self._onInterval();
        }, self._interval);
        const _Date = Date;
        self._intervalEnd = Date.now() + self._interval;
      }
    }
  };
  items[8] = {
    key: "_onInterval",
    value: function _onInterval() {
      const self = this;
      if (tmp) {
        const _clearInterval = clearInterval;
        clearInterval(self._intervalId);
        self._intervalId = undefined;
      }
      let num = 0;
      if (self._carryoverConcurrencyCount) {
        num = self._pendingCount;
      }
      self._intervalCount = num;
      self._processQueue();
    }
  };
  items[9] = {
    key: "_processQueue",
    value: function _processQueue() {
      let _tryToStartAnotherResult;
      const self = this;
      if (this._tryToStartAnother()) {
        do {
          _tryToStartAnotherResult = self._tryToStartAnother();
        } while (_tryToStartAnotherResult);
      }
    }
  };
  items[10] = {
    key: "concurrency",
    get() {
      return this._concurrency;
    },
    set(_concurrency) {
      const self = this;
      if ("number" === typeof _concurrency) {
        if (_concurrency >= 1) {
          self._concurrency = _concurrency;
          self._processQueue();
        }
      }
      const typeError = new TypeError("Expected `concurrency` to be a number from 1 and up, got `" + _concurrency + "` (" + tmp + ")");
      throw typeError;
    }
  };
  const obj9 = { key: "add" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_3 = __exportStarResult1(tmp);
  obj9.value = function add(arg0) {
    return callback4(...arguments);
  };
  items[11] = obj9;
  const obj10 = { key: "addAll" };
  // CreateGeneratorClosureLongIndex (0x67)
  const __exportStarResult1 = __exportStarResult1("addAll");
  obj10.value = function addAll(arg0, arg1) {
    return callback3(...arguments);
  };
  items[12] = obj10;
  items[13] = {
    key: "start",
    value: function start() {
      const self = this;
      if (this._isPaused) {
        self._isPaused = false;
        self._processQueue();
      }
      return self;
    }
  };
  items[14] = {
    key: "pause",
    value: function pause() {
      this._isPaused = true;
    }
  };
  items[15] = {
    key: "clear",
    value: function clear() {
      const _queueClass = new this._queueClass();
      this._queue = _queueClass;
    }
  };
  const obj14 = { key: "onEmpty" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_1 = __exportStarResult1("onEmpty");
  obj14.value = function onEmpty() {
    return callback2(...arguments);
  };
  items[16] = obj14;
  const obj15 = { key: "onIdle" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = __exportStarResult1("onIdle");
  obj15.value = function onIdle() {
    return callback(...arguments);
  };
  items[17] = obj15;
  items[18] = {
    key: "size",
    get() {
      return this._queue.size;
    }
  };
  items[19] = {
    key: "sizeBy",
    value: function sizeBy(arg0) {
      const _queue = this._queue;
      return _queue.filter(arg0).length;
    }
  };
  items[20] = {
    key: "pending",
    get() {
      return this._pendingCount;
    }
  };
  items[21] = {
    key: "isPaused",
    get() {
      return this._isPaused;
    }
  };
  items[22] = {
    key: "timeout",
    get() {
      return this._timeout;
    },
    set(_timeout) {
      this._timeout = _timeout;
    }
  };
  return callback(PQueue, items);
}(require("__exportStarResult1"));
