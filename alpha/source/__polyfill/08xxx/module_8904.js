// Module ID: 8904
// Function ID: 8905
// Dependencies: [8905]

// Module 8904
import _modDef8905 from "module_8905" /* 8905 */;


export default {
  decode(arg0, buffer) {
    function decodeAsciiValue(arg0) {
      try {
        const _decodeURIComponent = decodeURIComponent;
        const _escape = escape;
        return decodeURIComponent(escape(arg0));
      } catch (err) {
        return arg0;
      }
    }
    const obj = _modDef8905;
    const value = obj.get();
    if (undefined !== value) {
      if (undefined !== arg0) {
        try {
          const self = this;
          const self2 = this;
          const value1 = new value(arg0);
          const _DataView = DataView;
          const decode = value1.decode;
          if (buffer instanceof DataView) {
            buffer = buffer.buffer;
          } else {
            const _Uint8Array = Uint8Array;
            buffer = Uint8Array.from(buffer);
          }
          return decode(buffer);
        } catch (err) {
        }
      }
    }
    const mapped = buffer.map((item) => String.fromCharCode(item));
    return decodeAsciiValue(mapped.join(""));
  },
  TAG_HEADER_SIZE: 5
};
