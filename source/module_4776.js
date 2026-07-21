// Module ID: 4776
// Function ID: 41489
// Dependencies: []

// Module 4776
arg5.default = {
  decode(arg0, buffer) {
    const value = arg2(arg6[0]).get();
    let tmp2 = value;
    if (undefined !== value) {
      if (undefined !== arg0) {
        const prototype = tmp2.prototype;
        tmp2 = new tmp2(arg0);
        const _DataView = DataView;
        if (buffer instanceof DataView) {
          buffer = buffer.buffer;
        } else {
          const _Uint8Array = Uint8Array;
          buffer = Uint8Array.from(buffer);
        }
        return tmp2.decode(buffer);
      }
    }
    const mapped = buffer.map((arg0) => String.fromCharCode(arg0));
    const joined = mapped.join("");
    decodeURIComponent(escape(joined));
  },
  TAG_HEADER_SIZE: 5
};
