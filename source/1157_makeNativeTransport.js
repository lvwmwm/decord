// Module ID: 1157
// Function ID: 13169
// Name: makeNativeTransport
// Dependencies: [6, 7, 794, 977]
// Exports: makeNativeTransportFactory

// Module 1157 (makeNativeTransport)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
function makeNativeTransport() {
  let tmp = closure_4;
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const prototype = tmp.prototype;
    tmp = new tmp(first);
    return tmp;
  }
  first = {};
}
const tmp2 = (() => {
  class NativeTransport {
    constructor() {
      self = this;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          first = arguments[0];
        }
        tmp2 = outer1_2;
        tmp3 = NativeTransport;
        tmp4 = outer1_2(self, NativeTransport);
        tmp5 = NativeTransport;
        tmp6 = outer1_1;
        num = 2;
        obj = NativeTransport(outer1_1[2]);
        num2 = {}.bufferSize;
        if (!num2) {
          num2 = 30;
        }
        self._buffer = obj.makePromiseBuffer(num2);
        return;
      }
      return;
    }
  }
  let obj = {
    key: "send",
    value: function send(arg0) {
      let closure_0 = arg0;
      const _buffer = this._buffer;
      return _buffer.add(() => {
        const NATIVE = NativeTransport(outer2_1[3]).NATIVE;
        return NATIVE.sendEnvelope(closure_0);
      }).then(() => ({}));
    }
  };
  const items = [obj, ];
  obj = {
    key: "flush",
    value: function flush(arg0) {
      const _buffer = this._buffer;
      return _buffer.drain(arg0);
    }
  };
  items[1] = obj;
  return callback(NativeTransport, items);
})();
let closure_4 = tmp2;

export const DEFAULT_BUFFER_SIZE = 30;
export const NativeTransport = tmp2;
export { makeNativeTransport };
export const makeNativeTransportFactory = function makeNativeTransportFactory(enableNative) {
  let tmp = null;
  if (enableNative.enableNative) {
    const NATIVE = require(977) /* getRNSentryModule */.NATIVE;
    tmp = null;
    if (NATIVE.isNativeAvailable()) {
      tmp = makeNativeTransport;
    }
  }
  return tmp;
};
