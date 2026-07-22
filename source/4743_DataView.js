// Module ID: 4743
// Function ID: 41221
// Name: DataView
// Dependencies: []

// Module 4743 (DataView)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);

export default () => {
  class DataView {
    constructor(arg0) {
      self = this;
      tmp = DataView(this, DataView);
      tmp2 = "object" !== typeof arg0 || undefined === arg0.length || undefined === arg0.readUInt8 || undefined === arg0.readUInt16LE || undefined === arg0.readUInt16BE || undefined === arg0.readUInt32LE || undefined === arg0.readUInt32BE || undefined === arg0.readInt32LE || undefined === arg0.readInt32BE;
      if (tmp2) {
        tmp3 = globalThis;
        _Error = Error;
        prototype = Error.prototype;
        tmp4 = new.target;
        str = "DataView: Passed buffer type is unsupported.";
        tmp5 = new.target;
        error = new Error("DataView: Passed buffer type is unsupported.");
        tmp7 = error;
        throw error;
      } else {
        self.buffer = arg0;
        self.byteLength = self.buffer.length;
        return;
      }
    }
  }
  let closure_0 = DataView;
  let obj = {
    key: "getUint8",
    value: function getUint8(offset) {
      const buffer = this.buffer;
      return buffer.readUInt8(offset);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getUint16",
    value: function getUint16(sum1, arg1) {
      const buffer = this.buffer;
      if (arg1) {
        let uInt16LE = buffer.readUInt16LE(sum1);
      } else {
        uInt16LE = buffer.readUInt16BE(sum1);
      }
      return uInt16LE;
    }
  };
  items[1] = obj;
  obj = {
    key: "getUint32",
    value: function getUint32(sum, arg1) {
      const buffer = this.buffer;
      if (arg1) {
        let uInt32LE = buffer.readUInt32LE(sum);
      } else {
        uInt32LE = buffer.readUInt32BE(sum);
      }
      return uInt32LE;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getInt32",
    value: function getInt32(arg0, arg1) {
      const buffer = this.buffer;
      if (arg1) {
        let int32LE = buffer.readInt32LE(arg0);
      } else {
        int32LE = buffer.readInt32BE(arg0);
      }
      return int32LE;
    }
  };
  return callback(DataView, items);
}();
