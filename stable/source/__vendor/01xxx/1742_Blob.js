// Module ID: 1742
// Function ID: 1743
// Name: Blob
// Dependencies: [41, 42, 1743, 1744]

// Module 1742 (Blob)
import _createClassDefault from "_createClass" /* 42 */;
import _mod1743 from "module_1743" /* 1743 */;
import utf8Encode from "utf8Encode" /* 1744 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let size;

function toUint8Array(__getBytes) {
  let utf8EncodeResult;
  if (typeof __getBytes === "string") {
    const obj2 = utf8Encode;
    utf8EncodeResult = obj2.utf8Encode(__getBytes);
  } else if (__getBytes instanceof closure_3) {
    utf8EncodeResult = __getBytes.__getBytes();
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (ArrayBuffer.isView(__getBytes)) {
      const _Uint8Array2 = Uint8Array;
      const buffer = __getBytes.buffer;
      const self3 = this;
      const self4 = this;
      utf8EncodeResult = new Uint8Array(buffer.slice(__getBytes.byteOffset, __getBytes.byteOffset + __getBytes.byteLength));
    } else {
      const _ArrayBuffer2 = ArrayBuffer;
      if (__getBytes instanceof ArrayBuffer) {
        const _Uint8Array = Uint8Array;
        const self = this;
        const self2 = this;
        utf8EncodeResult = new Uint8Array(__getBytes.slice(0));
      } else {
        const _String = String;
        const obj = utf8Encode;
        utf8EncodeResult = obj.utf8Encode(String(__getBytes));
      }
    }
  }
  return utf8EncodeResult;
}
class Blob {
  constructor() {
    let items = arg0;
    if (arg0 === undefined) {
      items = [];
    }
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const self = this;
    _classCallCheck(this, Blob);
    const mapped = items.map(toUint8Array);
    const uint8Array = new Uint8Array(mapped.reduce((acc, item) => acc + item.length, 0));
    let num = 0;
    for (const item10025 of mapped) {
      let result = uint8Array.set(item10025, num);
      num = num + item10025.length;
      continue;
    }
    self.bytes = uint8Array;
    let str = obj.type;
    const _String = String;
    if (str == null) {
      str = "";
    }
    const str2 = _String(str);
    self.type = str2.toLowerCase();
  }
}
let obj = {
  key: "size",
  get() {
    return this.bytes.byteLength;
  }
};
let items = [obj, , , , , ];
let obj2 = {
  key: Symbol.toStringTag,
  get() {
    return "Blob";
  }
};
items[1] = obj2;
items[2] = {
  key: "slice",
  value: function slice() {
    let bound;
    let bound1;
    let num = arg0;
    if (arg0 === undefined) {
      num = 0;
    }
    const self = this;
    size = arg1;
    if (arg1 === undefined) {
      size = self.size;
    }
    let str = arg2;
    if (arg2 === undefined) {
      str = "";
    }
    const size2 = self.size;
    if (num < 0) {
      const _Math2 = Math;
      bound = Math.max(size2 + num, 0);
    } else {
      const _Math = Math;
      bound = Math.min(num, size2);
    }
    if (size < 0) {
      const _Math4 = Math;
      bound1 = Math.max(size2 + size, 0);
    } else {
      const _Math3 = Math;
      bound1 = Math.min(size, size2);
    }
    const bound2 = Math.max(bound1 - bound, 0);
    const obj = Object.create(Blob.prototype);
    Blob([], { type: str });
    const bytes = self.bytes;
    obj.bytes = bytes.slice(bound, bound + bound2);
    return obj;
  }
};
items[3] = {
  key: "arrayBuffer",
  value: function arrayBuffer() {
    const obj = _mod1743;
    return resolve(obj.toArrayBuffer(this.bytes));
  }
};
items[4] = {
  key: "text",
  value: function text() {
    const utf8Decode = utf8Encode.utf8Decode;
    utf8Encode;
    const obj = utf8Encode;
    return resolve(utf8Decode(obj.stripUtf8Bom(this.bytes)));
  }
};
items[5] = {
  key: "__getBytes",
  value: function __getBytes() {
    return this.bytes;
  }
};
let tmp2 = _createClassDefault(Blob, items);
let closure_3 = tmp2;
const Blob_export = tmp2;

export { Blob_export as Blob };
