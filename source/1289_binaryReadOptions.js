// Module ID: 1289
// Function ID: 15064
// Name: binaryReadOptions
// Dependencies: [57, 164, 65, 6, 7, 1290, 1288, 1291]
// Exports: binaryReadOptions

// Module 1289 (binaryReadOptions)
import _slicedToArray from "_slicedToArray";
import _construct from "_construct";
import _toConsumableArray from "_toConsumableArray";
import _classCallCheck from "onRead";
import _defineProperties from "_callSuper";

let closure_7 = {
  readUnknownField: true,
  readerFactory(arg0) {
    return new closure_8(arg0);
  }
};
const tmp2 = (() => {
  class BinaryReader {
    constructor(arg0, arg1) {
      textDecoder = arg1;
      tmp2 = outer1_5(this, BinaryReader);
      this.varint64 = BinaryReader(outer1_1[5]).varint64read;
      this.uint32 = BinaryReader(outer1_1[5]).varint32read;
      this.buf = arg0;
      this.len = arg0.length;
      this.pos = 0;
      dataView = new DataView(arg0.buffer, arg0.byteOffset, arg0.byteLength);
      this.view = dataView;
      if (null == arg1) {
        _TextDecoder = TextDecoder;
        prototype = TextDecoder.prototype;
        tmp4 = new.target;
        str = "utf-8";
        tmp5 = new.target;
        textDecoder = new TextDecoder("utf-8", { fatal: true, ignoreBOM: true });
      }
      this.textDecoder = textDecoder;
      return;
    }
  }
  let obj = {
    key: "tag",
    value: function tag() {
      const uint32Result = this.uint32();
      if (uint32Result >>> 3 > 0) {
        if (tmp3 >= 0) {
          if (tmp3 <= 5) {
            const items = [tmp2, tmp3];
            return items;
          }
        }
      }
      const error = new Error("illegal tag: field no " + tmp2 + " wire type " + tmp3);
      throw error;
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , ];
  obj = {
    key: "skip",
    value: function skip(arg0) {
      let EndGroup;
      let tmp14;
      const self = this;
      if (BinaryReader(outer1_1[6]).WireType.Varint === arg0) {
        self.pos = +self.pos + 1;
        if (128 & self.buf[+self.pos]) {
          do {
            let tmp13 = +self.pos;
            self.pos = tmp13 + 1;
            tmp14 = 128 & self.buf[tmp13];
          } while (tmp14);
        }
      } else {
        if (BinaryReader(outer1_1[6]).WireType.Bit64 === arg0) {
          self.pos = self.pos + 4;
        } else if (BinaryReader(outer1_1[6]).WireType.Bit32 !== arg0) {
          if (BinaryReader(outer1_1[6]).WireType.LengthDelimited === arg0) {
            self.pos = self.pos + self.uint32();
          } else if (BinaryReader(outer1_1[6]).WireType.StartGroup === arg0) {
            const tmp6 = self.tag()[1];
            if (tmp6 !== BinaryReader(outer1_1[6]).WireType.EndGroup) {
              do {
                let skipResult = self.skip(self.tag()[1]);
                let tmp10 = BinaryReader;
                let tmp11 = outer1_1;
                EndGroup = BinaryReader(outer1_1[6]).WireType.EndGroup;
              } while (tmp6 !== EndGroup);
            }
          } else {
            const _Error = Error;
            const error = new Error("cant skip wire type " + arg0);
            throw error;
          }
        }
        self.pos = self.pos + 4;
      }
      self.assertBounds();
      const buf = self.buf;
      return buf.subarray(this.pos, self.pos);
    }
  };
  items[1] = obj;
  obj = {
    key: "assertBounds",
    value: function assertBounds() {
      if (this.pos > this.len) {
        const _RangeError = RangeError;
        const rangeError = new RangeError("premature EOF");
        throw rangeError;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "int32",
    value: function int32() {
      return this.uint32() | 0;
    }
  };
  items[4] = {
    key: "sint32",
    value: function sint32() {
      const uint32Result = this.uint32();
      return uint32Result >>> 1 ^ -1 & uint32Result;
    }
  };
  items[5] = {
    key: "int64",
    value: function int64() {
      return outer1_3(BinaryReader(outer1_1[7]).PbLong, outer1_4(this.varint64()));
    }
  };
  items[6] = {
    key: "uint64",
    value: function uint64() {
      return outer1_3(BinaryReader(outer1_1[7]).PbULong, outer1_4(this.varint64()));
    }
  };
  items[7] = {
    key: "sint64",
    value: function sint64() {
      const tmp = outer1_2(this.varint64(), 2);
      const first = tmp[0];
      const pbLong = new BinaryReader(outer1_1[7]).PbLong((first >>> 1 | (1 & tmp[1]) << 31) ^ tmp4, tmp[1] >>> 1 ^ tmp4);
      return pbLong;
    }
  };
  items[8] = {
    key: "bool",
    value: function bool() {
      const tmp = outer1_2(this.varint64(), 2);
      return 0 !== tmp[0] || 0 !== tmp[1];
    }
  };
  items[9] = {
    key: "fixed32",
    value: function fixed32() {
      const view = this.view;
      const sum = this.pos + 4;
      this.pos = sum;
      return view.getUint32(sum - 4, true);
    }
  };
  items[10] = {
    key: "sfixed32",
    value: function sfixed32() {
      const view = this.view;
      const sum = this.pos + 4;
      this.pos = sum;
      return view.getInt32(sum - 4, true);
    }
  };
  items[11] = {
    key: "fixed64",
    value: function fixed64() {
      const pbULong = new BinaryReader(outer1_1[7]).PbULong(this.sfixed32(), this.sfixed32());
      return pbULong;
    }
  };
  items[12] = {
    key: "sfixed64",
    value: function sfixed64() {
      const pbLong = new BinaryReader(outer1_1[7]).PbLong(this.sfixed32(), this.sfixed32());
      return pbLong;
    }
  };
  items[13] = {
    key: "float",
    value: function float() {
      const view = this.view;
      const sum = this.pos + 4;
      this.pos = sum;
      return view.getFloat32(sum - 4, true);
    }
  };
  items[14] = {
    key: "double",
    value: function double() {
      const view = this.view;
      const sum = this.pos + 8;
      this.pos = sum;
      return view.getFloat64(sum - 8, true);
    }
  };
  items[15] = {
    key: "bytes",
    value: function bytes() {
      const uint32Result = this.uint32();
      const pos = this.pos;
      this.pos = this.pos + uint32Result;
      this.assertBounds();
      const buf = this.buf;
      return buf.subarray(pos, pos + uint32Result);
    }
  };
  items[16] = {
    key: "string",
    value: function string() {
      const textDecoder = this.textDecoder;
      return textDecoder.decode(this.bytes());
    }
  };
  return _defineProperties(BinaryReader, items);
})();
let closure_8 = tmp2;

export const binaryReadOptions = function binaryReadOptions(BINARY_READ_OPTIONS) {
  if (BINARY_READ_OPTIONS) {
    const _Object = Object;
    const _Object2 = Object;
    let merged = Object.assign(Object.assign({}, closure_7), BINARY_READ_OPTIONS);
  } else {
    merged = closure_7;
  }
  return merged;
};
export const BinaryReader = tmp2;
