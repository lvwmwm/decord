// Module ID: 1046
// Function ID: 1047
// Name: DEFAULT_BUFFER_SIZE
// Dependencies: [41, 42, 682, 866]
// Exports: makeNativeTransportFactory

// Module 1046 (DEFAULT_BUFFER_SIZE)
import _createClassDefault from "_createClass" /* 42 */;
import _mod682 from "module_682" /* 682 */;
import _mod866 from "module_866" /* 866 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

function makeNativeTransport() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const tmp = new closure_3(obj);
  return tmp;
}
class NativeTransport {
  constructor() {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    _classCallCheck(this, NativeTransport);
    let num = obj.bufferSize;
    const makePromiseBuffer = _mod682.makePromiseBuffer;
    if (!num) {
      num = 30;
    }
    this._buffer = makePromiseBuffer(num);
  }
}
const entry = {
  key: "send",
  value: function send(arg0) {
    let closure_0 = arg0;
    const _buffer = this._buffer;
    const addResult = _buffer.add(() => {
      const NATIVE = _mod866.NATIVE;
      return NATIVE.sendEnvelope(closure_0);
    });
    return addResult.then(() => ({}));
  }
};
const items = [
  entry,
  {
    key: "flush",
    value: function flush(arg0) {
      const _buffer = this._buffer;
      return _buffer.drain(arg0);
    }
  }
];
const tmp2 = _createClassDefault(NativeTransport, items);
let closure_3 = tmp2;
const NativeTransport_export = tmp2;

export const DEFAULT_BUFFER_SIZE = 30;
export { NativeTransport_export as NativeTransport };
export { makeNativeTransport };
export const makeNativeTransportFactory = function makeNativeTransportFactory(enableNative) {
  let tmp = null;
  if (enableNative.enableNative) {
    const NATIVE = _mod866.NATIVE;
    tmp = null;
    if (NATIVE.isNativeAvailable()) {
      tmp = makeNativeTransport;
    }
  }
  return tmp;
};
