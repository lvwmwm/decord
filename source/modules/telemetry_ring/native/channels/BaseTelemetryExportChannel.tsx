// Module ID: 13006
// Function ID: 98954
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 13006 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const tmp2 = (arg0) => {
  class BaseTelemetryExportChannel {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = BaseTelemetryExportChannel(this, BaseTelemetryExportChannel);
      items1 = [...items];
      obj = closure_7(BaseTelemetryExportChannel);
      tmp2 = closure_6;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result._initialized = false;
      tmp2Result._timer = null;
      tmp2Result._inflight = null;
      tmp2Result._resetting = false;
      tmp7 = closure_1(closure_2[6]);
      tmp7 = new tmp7("TelemetryRing");
      tmp2Result._logger = tmp7;
      return tmp2Result;
    }
  }
  let closure_4 = BaseTelemetryExportChannel;
  callback3(BaseTelemetryExportChannel, arg0);
  let obj = {
    key: "getIntervalMs",
    value() {
      return 500;
    }
  };
  const items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "getExportBatchSize",
    value() {
      return null;
    }
  };
  items[1] = obj;
  obj = {
    key: "initialize",
    value() {
      if (!this._initialized) {
        tmp._initialized = true;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "reset",
    value() {
      const self = this;
      let closure_0 = this;
      this.stop();
      if (!this._resetting) {
        self._resetting = true;
        self._clearAckedEndOffset();
        const _inflight = self._inflight;
        if (null == _inflight) {
          self._resetting = false;
        } else {
          _inflight.finally(() => {
            self._resetting = false;
          });
        }
      }
    }
  };
  items[4] = {
    key: "start",
    value() {
      const self = this;
      let closure_0 = this;
      let shouldRunResult = this.shouldRun();
      if (shouldRunResult) {
        shouldRunResult = null == self._timer;
      }
      if (shouldRunResult) {
        self._kick({ "Null": "30", "Null": "true" });
        const _setInterval = setInterval;
        self._timer = setInterval(() => self._kick({ "Null": null, "Null": null }), self.getIntervalMs());
      }
    }
  };
  items[5] = {
    key: "stop",
    value() {
      const self = this;
      if (null != this._timer) {
        const _clearInterval = clearInterval;
        clearInterval(self._timer);
        self._timer = null;
      }
    }
  };
  const obj4 = { key: "flushNow" };
  // CreateGeneratorClosureLongIndex (0x67)
  const callback = callback(tmp);
  obj4.value = function flushNow() {
    return callback4(...arguments);
  };
  items[6] = obj4;
  items[7] = {
    key: "_readAckedEndOffset",
    value() {
      const Storage = callback(closure_2[7]).Storage;
      const value = Storage.get(this.getAckedEndOffsetStorageKey());
      let num = -1;
      if ("number" === typeof value) {
        const _Number = Number;
        num = -1;
        if (Number.isFinite(value)) {
          num = value;
        }
      }
      return num;
    }
  };
  items[8] = {
    key: "_writeAckedEndOffset",
    value(arg0) {
      const Storage = callback(closure_2[7]).Storage;
      const result = Storage.set(this.getAckedEndOffsetStorageKey(), arg0);
    }
  };
  items[9] = {
    key: "_clearAckedEndOffset",
    value() {
      const Storage = callback(closure_2[7]).Storage;
      Storage.remove(this.getAckedEndOffsetStorageKey());
    }
  };
  items[10] = {
    key: "_kick",
    value(arg0) {
      const self = this;
      let closure_0 = this;
      if (this.shouldRun()) {
        if (null == self._inflight) {
          const _drainOnceResult = self._drainOnce(arg0);
          self._inflight = self._drainOnce(arg0).catch((arg0) => {
            const _logger = self._logger;
            _logger.warn("TelemetryRing export failed", arg0);
          }).finally(() => {
            self._inflight = null;
          });
          const catchPromise = self._drainOnce(arg0).catch((arg0) => {
            const _logger = self._logger;
            _logger.warn("TelemetryRing export failed", arg0);
          });
        }
        let _inflight = self._inflight;
      } else {
        _inflight = Promise.resolve();
      }
      return _inflight;
    }
  };
  const obj9 = { key: "_drainOnce" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_2 = callback("_drainOnce");
  obj9.value = function _drainOnce(arg0) {
    return callback3(...arguments);
  };
  items[11] = obj9;
  const obj10 = { key: "_collectPages" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_1 = callback("_collectPages");
  obj10.value = function _collectPages(budget, arg1) {
    return callback2(...arguments);
  };
  items[12] = obj10;
  const obj11 = { key: "_exportPages" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback("_exportPages");
  obj11.value = function _exportPages(arr, flush) {
    return callback(...arguments);
  };
  items[13] = obj11;
  return callback2(BaseTelemetryExportChannel, items);
}(importDefault(dependencyMap[8]));
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/telemetry_ring/native/channels/BaseTelemetryExportChannel.tsx");

export default tmp2;
