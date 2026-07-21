// Module ID: 1157
// Function ID: 13167
// Name: makeNativeTransport
// Dependencies: []
// Exports: makeNativeTransportFactory

// Module 1157 (makeNativeTransport)
function makeNativeTransport() {
  let tmp = tmp2;
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class NativeTransport {
    constructor() {
      self = this;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          first = arguments[0];
        }
        tmp2 = closure_2;
        tmp3 = NativeTransport;
        tmp4 = closure_2(self, NativeTransport);
        tmp5 = NativeTransport;
        tmp6 = closure_1;
        num = 2;
        obj = NativeTransport(closure_1[2]);
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
  const arg1 = NativeTransport;
  let obj = {
    key: "send",
    value: function send(arg0) {
      const NativeTransport = arg0;
      const _buffer = this._buffer;
      return _buffer.add(() => {
        const NATIVE = arg0(closure_1[3]).NATIVE;
        return NATIVE.sendEnvelope(arg0);
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
}();

export const DEFAULT_BUFFER_SIZE = 30;
export const NativeTransport = tmp2;
export { makeNativeTransport };
export const makeNativeTransportFactory = function makeNativeTransportFactory(enableNative) {
  let tmp = null;
  if (enableNative.enableNative) {
    const NATIVE = arg1(dependencyMap[3]).NATIVE;
    tmp = null;
    if (NATIVE.isNativeAvailable()) {
      tmp = makeNativeTransport;
    }
  }
  return tmp;
};
