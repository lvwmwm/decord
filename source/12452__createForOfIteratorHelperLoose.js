// Module ID: 12452
// Function ID: 95153
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: getCompressionHandler

// Module 12452 (_createForOfIteratorHelperLoose)
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
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_3(arg0, constructResult);
}
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
const NativeModules = arg1(dependencyMap[5]).NativeModules;
const items = [];
const tmp2 = () => {
  class BaseGatewayCompressionHandler {
    constructor(arg0) {
      tmp = closure_6(this, BaseGatewayCompressionHandler);
      this._onDataReady = null;
      this._gatewayEncoding = arg0;
      return;
    }
  }
  const arg1 = BaseGatewayCompressionHandler;
  let obj = {
    key: "bindWebSocket",
    value() {

    }
  };
  const items = [obj, , ];
  obj = {
    key: "feed",
    value() {

    }
  };
  items[1] = obj;
  obj = {
    key: "dataReady",
    value(_onDataReady) {
      this._onDataReady = _onDataReady;
    }
  };
  items[2] = obj;
  const items1 = [
    {
      key: "canUse",
      value() {
        return false;
      }
    }
  ];
  return callback3(BaseGatewayCompressionHandler, items, items1);
}();
items.push((arg0) => {
  class DesktopZstdGatewayCompressionHandler {
    constructor(arg0) {
      tmp = closure_6(this, DesktopZstdGatewayCompressionHandler);
      items = [];
      items[0] = arg0;
      tmp2 = closure_13(this, DesktopZstdGatewayCompressionHandler, items);
      tmp2._decoder = null;
      _gatewayEncoding = tmp2._gatewayEncoding;
      if (_gatewayEncoding.wantsString()) {
        tmp3 = globalThis;
        _TextDecoder = TextDecoder;
        prototype = TextDecoder.prototype;
        tmp4 = new.target;
        str = "utf-8";
        tmp5 = new.target;
        textDecoder = new TextDecoder("utf-8");
        tmp7 = textDecoder;
        tmp2._decoder = textDecoder;
      } else {
        tmp2._decoder = null;
      }
      obj = DesktopZstdGatewayCompressionHandler(closure_2[6]);
      tmp2._stream = obj.createZstdContextWeb();
      return tmp2;
    }
  }
  const arg1 = DesktopZstdGatewayCompressionHandler;
  callback2(DesktopZstdGatewayCompressionHandler, arg0);
  let obj = {
    key: "getAlgorithm",
    value() {
      return "zstd-stream";
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "usesLegacyCompression",
    value() {
      return false;
    }
  };
  items[1] = obj;
  obj = {
    key: "feed",
    value(dataView) {
      const self = this;
      if (null == this._stream) {
        const _Error2 = Error;
        const error = new Error("Trying to decompress with zstd but did not initialize with it");
        throw error;
      } else {
        const _ArrayBuffer = ArrayBuffer;
        if (dataView instanceof ArrayBuffer) {
          const _stream = self._stream;
          const decompressResult = _stream.decompress(dataView);
          let decodeResult = decompressResult;
          if (null != self._decoder) {
            const _decoder = self._decoder;
            decodeResult = _decoder.decode(decompressResult);
          }
          if (null != self._onDataReady) {
            self._onDataReady(decodeResult);
          }
        } else {
          const _Error = Error;
          const error1 = new Error("Expected array buffer, but got " + typeof dataView);
          throw error1;
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "close",
    value() {

    }
  };
  const items1 = [
    {
      key: "canUse",
      value() {
        return false;
      }
    }
  ];
  return callback3(DesktopZstdGatewayCompressionHandler, items, items1);
}(tmp2));
items.push((arg0) => {
  class PakoStreamGatewayCompressionHandler {
    constructor(arg0) {
      tmp = closure_6(this, PakoStreamGatewayCompressionHandler);
      items = [];
      items[0] = arg0;
      tmp2 = closure_13(this, PakoStreamGatewayCompressionHandler, items);
      tmp2._pako = PakoStreamGatewayCompressionHandler(closure_2[7]);
      tmp2._usesZstd = false;
      tmp2._zstdDecoder = null;
      tmp2._zstdStream = null;
      obj = { chunkSize: 65536 };
      _gatewayEncoding = tmp2._gatewayEncoding;
      str = "";
      if (_gatewayEncoding.wantsString()) {
        str = "string";
      }
      obj.to = str;
      inflate = new tmp2._pako.Inflate(obj);
      tmp2._inflate = inflate;
      ({ handleFlushEnd, _inflate } = tmp2);
      _inflate.onEnd = handleFlushEnd.bind(tmp2);
      return tmp2;
    }
  }
  const arg1 = PakoStreamGatewayCompressionHandler;
  callback2(PakoStreamGatewayCompressionHandler, arg0);
  let obj = {
    key: "getAlgorithm",
    value() {
      return "zlib-stream";
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "usesLegacyCompression",
    value() {
      return false;
    }
  };
  items[1] = obj;
  obj = {
    key: "feed",
    value(buffer) {
      const self = this;
      if (null == this._inflate) {
        const _Error3 = Error;
        const error = new Error("Trying to feed to closed compression adapter");
        throw error;
      } else if (null === self._onDataReady) {
        const _Error2 = Error;
        const error1 = new Error("Cannot feed unless a data ready callback is registered.");
        throw error1;
      } else {
        const _ArrayBuffer = ArrayBuffer;
        if (buffer instanceof ArrayBuffer) {
          const _DataView = DataView;
          const dataView = new DataView(buffer);
          let tmp9 = dataView.byteLength >= 4;
          if (tmp9) {
            tmp9 = 65535 === dataView.getUint32(dataView.byteLength - 4, false);
          }
          const _inflate = self._inflate;
          let Z_SYNC_FLUSH = tmp9;
          if (tmp9) {
            Z_SYNC_FLUSH = self._pako.Z_SYNC_FLUSH;
          }
          _inflate.push(buffer, Z_SYNC_FLUSH);
        } else {
          const _Error = Error;
          const error2 = new Error("Expected array buffer, but got " + typeof buffer);
          throw error2;
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "close",
    value() {
      const self = this;
      if (null != this._inflate) {
        self._inflate.onEnd = null;
        self._inflate.chunks = [];
      }
      self._inflate = null;
    }
  };
  items[4] = {
    key: "handleFlushEnd",
    value(arg0) {
      const self = this;
      const _inflate = this._inflate;
      if (null != _inflate) {
        if (arg0 !== this._pako.Z_OK) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("zlib error, " + arg0 + ", " + _inflate.strm.msg);
          throw error;
        } else {
          const chunks = _inflate.chunks;
          const _gatewayEncoding = self._gatewayEncoding;
          if (_gatewayEncoding.wantsString()) {
            if (length > 1) {
              let joined = chunks.join("");
            } else {
              joined = chunks[0];
            }
          } else {
            if (length > 1) {
              let num4 = 0;
              let num5 = 0;
              let num6 = 0;
              if (0 < length) {
                do {
                  num4 = num4 + chunks[num5].length;
                  num5 = num5 + 1;
                  num6 = num4;
                } while (num5 < length);
              }
              const _Uint8Array = Uint8Array;
              const uint8Array = new Uint8Array(num6);
              let num7 = 0;
              let num8 = 0;
              let first = uint8Array;
              if (0 < length) {
                do {
                  let arr = chunks[num8];
                  let result = uint8Array.set(arr, num7);
                  num7 = num7 + arr.length;
                  num8 = num8 + 1;
                  first = uint8Array;
                } while (num8 < length);
              }
            } else {
              first = chunks[0];
            }
            chunks.length = 0;
            if (null != self._onDataReady) {
              self._onDataReady(first);
            }
          }
        }
      } else {
        let tmp3 = callback(closure_2[8]);
        const prototype = tmp3.prototype;
        tmp3 = new tmp3("GatewayCompressionHandler");
        tmp3.error("flush end happened on closed compression adapter");
      }
    }
  };
  const items1 = [
    {
      key: "canUse",
      value() {
        return false;
      }
    }
  ];
  return callback3(PakoStreamGatewayCompressionHandler, items, items1);
}(tmp2));
items.push((arg0) => {
  class PakoGatewayCompressionHandler {
    constructor(arg0) {
      items = [...arguments];
      tmp = closure_6(this, PakoGatewayCompressionHandler);
      items1 = [...items];
      tmp2 = closure_13(this, PakoGatewayCompressionHandler, items1);
      tmp2._pako = PakoGatewayCompressionHandler(closure_2[7]);
      return tmp2;
    }
  }
  const arg1 = PakoGatewayCompressionHandler;
  callback2(PakoGatewayCompressionHandler, arg0);
  let obj = {
    key: "getAlgorithm",
    value() {
      return null;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "usesLegacyCompression",
    value() {
      return true;
    }
  };
  items[1] = obj;
  obj = {
    key: "feed",
    value(arg0) {
      const self = this;
      const _pako = this._pako;
      let wantsStringResult = arg0 instanceof ArrayBuffer;
      if (wantsStringResult) {
        const _gatewayEncoding = self._gatewayEncoding;
        wantsStringResult = _gatewayEncoding.wantsString();
      }
      let inflateResult = arg0;
      if (wantsStringResult) {
        const obj = { to: "string" };
        inflateResult = _pako.inflate(arg0, obj);
      }
      if (null == self._onDataReady) {
        const _Error = Error;
        const error = new Error("Cannot feed unless a data ready callback is registered.");
        throw error;
      } else {
        self._onDataReady(inflateResult);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "close",
    value() {

    }
  };
  const items1 = [
    {
      key: "canUse",
      value() {
        return false;
      }
    }
  ];
  return callback3(PakoGatewayCompressionHandler, items, items1);
}(tmp2));
items.push((arg0) => {
  class MobileGatewayCompressionHandler {
    constructor(arg0) {
      tmp = closure_6(this, MobileGatewayCompressionHandler);
      items = [];
      items[0] = arg0;
      tmp2 = closure_13(this, MobileGatewayCompressionHandler, items);
      tmp2._socketId = null;
      return tmp2;
    }
  }
  const arg1 = MobileGatewayCompressionHandler;
  callback2(MobileGatewayCompressionHandler, arg0);
  let obj = {
    key: "bindWebSocket",
    value(_socketId) {
      const self = this;
      this.close();
      this._socketId = _socketId._socketId;
      const obj = MobileGatewayCompressionHandler(closure_2[6]);
      const supportsZstdResult = MobileGatewayCompressionHandler(closure_2[6]).supportsZstd();
      const isAndroidResult = MobileGatewayCompressionHandler(closure_2[9]).isAndroid();
      if (supportsZstdResult) {
        if (isAndroidResult) {
          if (null != MobileGatewayCompressionHandler(closure_2[10]).default) {
            const result = MobileGatewayCompressionHandler(closure_2[10]).default.enableZstdStreamSupport(self._socketId);
            const _default = MobileGatewayCompressionHandler(closure_2[10]).default;
          }
        } else {
          const DCDCompressionManager2 = closure_8.DCDCompressionManager;
          const result1 = DCDCompressionManager2.enableZstdStreamSupport(self._socketId, 0);
        }
      } else if (isAndroidResult) {
        if (null != MobileGatewayCompressionHandler(closure_2[10]).default) {
          const result2 = MobileGatewayCompressionHandler(closure_2[10]).default.enableZlibStreamSupport(self._socketId);
          const _default2 = MobileGatewayCompressionHandler(closure_2[10]).default;
        }
      } else {
        const DCDCompressionManager = closure_8.DCDCompressionManager;
        const result3 = DCDCompressionManager.enableZlibStreamSupport(self._socketId);
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getAlgorithm",
    value() {
      let str = "zlib-stream";
      if (obj.supportsZstd()) {
        str = "zstd-stream";
      }
      return str;
    }
  };
  items[1] = obj;
  obj = {
    key: "usesLegacyCompression",
    value() {
      return false;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "feed",
    value(arg0) {
      const self = this;
      if (null == this._onDataReady) {
        const _Error = Error;
        const error = new Error("Cannot feed unless a data ready callback is registered.");
        throw error;
      } else if (null !== arg0) {
        self._onDataReady(arg0);
      }
    }
  };
  items[4] = {
    key: "close",
    value() {
      const _socketId = this._socketId;
      this._socketId = null;
      if (null !== _socketId) {
        if (obj.isAndroid()) {
          if (null != MobileGatewayCompressionHandler(closure_2[10]).default) {
            const result = MobileGatewayCompressionHandler(closure_2[10]).default.disableZlibStreamSupport(_socketId);
            const _default = MobileGatewayCompressionHandler(closure_2[10]).default;
          }
        } else {
          const DCDCompressionManager = closure_8.DCDCompressionManager;
          const result1 = DCDCompressionManager.disableZlibStreamSupport(_socketId);
        }
        const obj = MobileGatewayCompressionHandler(closure_2[9]);
      }
    }
  };
  const items1 = [
    {
      key: "canUse",
      value() {
        if (obj.isAndroid()) {
          let tmp3 = null != MobileGatewayCompressionHandler(closure_2[10]).default;
        } else {
          tmp3 = null != closure_8.DCDCompressionManager;
        }
        return tmp3;
      }
    }
  ];
  return callback3(MobileGatewayCompressionHandler, items, items1);
}(tmp2));
const tmp7 = (arg0) => {
  class NullGatewayCompressionHandler {
    constructor() {
      tmp = closure_6(this, NullGatewayCompressionHandler);
      return closure_13(this, NullGatewayCompressionHandler, arguments);
    }
  }
  const arg1 = NullGatewayCompressionHandler;
  callback2(NullGatewayCompressionHandler, arg0);
  let obj = {
    key: "getAlgorithm",
    value() {
      return null;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "usesLegacyCompression",
    value() {
      return false;
    }
  };
  items[1] = obj;
  obj = {
    key: "feed",
    value(arg0) {
      const self = this;
      if (null == this._onDataReady) {
        const _Error = Error;
        const error = new Error("Cannot feed unless a data ready callback is registered.");
        throw error;
      } else {
        self._onDataReady(arg0);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "close",
    value() {

    }
  };
  const items1 = [
    {
      key: "canUse",
      value() {
        return true;
      }
    }
  ];
  return callback3(NullGatewayCompressionHandler, items, items1);
}(tmp2);
items.push(tmp7);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/gateway/GatewayCompressionHandler.tsx");

export const getCompressionHandler = function getCompressionHandler(closure_15) {
  const ProcessArgs = arg1(dependencyMap[11]).ProcessArgs;
  if (ProcessArgs.isDiscordGatewayPlaintextSet()) {
    const prototype3 = tmp7.prototype;
    const tmp19 = new tmp7(closure_15);
    return tmp19;
  } else {
    const tmp3 = _createForOfIteratorHelperLoose(items);
    const iter = tmp3();
    let iter2 = iter;
    if (!iter.done) {
      let value = iter2.value;
      while (!value.canUse()) {
        let iter3 = tmp3();
        iter2 = iter3;
      }
      const prototype = value.prototype;
      value = new value(closure_15);
      return value;
    }
    const prototype2 = tmp7.prototype;
    const tmp13 = new tmp7(closure_15);
    return tmp13;
  }
};
