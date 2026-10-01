// Module ID: 5527
// Function ID: 5528
// Dependencies: [41, 42]

// Module 5527
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class DataView {
  constructor(buffer) {
    const self = this;
    _classCallCheck(this, DataView);
    const tmp2 = typeof buffer !== "object" || undefined === buffer.length || undefined === buffer.readUInt8 || undefined === buffer.readUInt16LE || undefined === buffer.readUInt16BE || undefined === buffer.readUInt32LE || undefined === buffer.readUInt32BE || undefined === buffer.readInt32LE || undefined === buffer.readInt32BE;
    if (tmp2) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("DataView: Passed buffer type is unsupported.");
      throw error;
    } else {
      self.buffer = buffer;
      self.byteLength = self.buffer.length;
    }
  }
}
const entry = {
  key: "getUint8",
  value: function getUint8(sum) {
    const buffer = this.buffer;
    return buffer.readUInt8(sum);
  }
};
const items = [
  entry,
  {
    key: "getUint16",
    value: function getUint16(c5, arg1) {
      let uInt16LE;
      const buffer = this.buffer;
      const tmp = arg1;
      if (tmp) {
        uInt16LE = buffer.readUInt16LE(c5);
      } else {
        uInt16LE = buffer.readUInt16BE(c5);
      }
      return uInt16LE;
    }
  },
  {
    key: "getUint32",
    value: function getUint32(sum, arg1) {
      let uInt32LE;
      const buffer = this.buffer;
      const tmp = arg1;
      if (tmp) {
        uInt32LE = buffer.readUInt32LE(sum);
      } else {
        uInt32LE = buffer.readUInt32BE(sum);
      }
      return uInt32LE;
    }
  },
  {
    key: "getInt32",
    value: function getInt32(sum, arg1) {
      let int32LE;
      const buffer = this.buffer;
      const tmp = arg1;
      if (tmp) {
        int32LE = buffer.readInt32LE(sum);
      } else {
        int32LE = buffer.readInt32BE(sum);
      }
      return int32LE;
    }
  }
];

export default _createClassDefault(DataView, items);
