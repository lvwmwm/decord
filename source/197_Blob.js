// Module ID: 197
// Function ID: 2827
// Name: Blob
// Dependencies: [6, 7, 194]

// Module 197 (Blob)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;

export default (() => {
  class Blob {
    constructor() {
      self = this;
      if (arguments.length > 0) {
        if (undefined !== arguments[0]) {
          first = arguments[0];
        }
        num = 1;
        tmp2 = undefined;
        if (arguments.length > 1) {
          tmp2 = arguments[1];
        }
        tmp3 = outer1_2;
        tmp4 = Blob;
        tmp5 = outer1_2(self, Blob);
        tmp6 = Blob;
        tmp7 = outer1_1;
        num2 = 2;
        _default = Blob(outer1_1[2]).default;
        self.data = _default.createFromParts([], tmp2).data;
        return;
      }
      return;
    }
  }
  let obj = {
    key: "data",
    get() {
      if (this._data) {
        return this._data;
      } else {
        const _Error = Error;
        const error = new Error("Blob has been closed and is no longer available");
        throw error;
      }
    },
    set(_data) {
      this._data = _data;
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "slice",
    value: function slice(arg0, arg1) {
      let offset;
      let size;
      let tmp = arg0;
      const self = this;
      let str = "";
      if (arguments.length > 2) {
        str = "";
        if (undefined !== arguments[2]) {
          str = arguments[2];
        }
      }
      ({ offset, size } = self.data);
      let tmp2 = offset;
      let tmp3 = size;
      if ("number" === typeof tmp) {
        if (tmp > size) {
          tmp = size;
        }
        let diff = size - tmp;
        const sum = offset + tmp;
        if ("number" === typeof arg1) {
          let size2 = arg1;
          if (arg1 < 0) {
            size2 = self.size + arg1;
          }
          if (size2 > self.size) {
            size2 = self.size;
          }
          diff = size2 - tmp;
        }
        tmp3 = diff;
        tmp2 = sum;
      }
      const obj = { blobId: self.data.blobId, offset: tmp2, size: tmp3, type: str, __collector: self.data.__collector };
      return Blob(outer1_1[2]).default.createFromOptions(obj);
    }
  };
  items[1] = obj;
  obj = {
    key: "close",
    value: function close() {
      Blob(outer1_1[2]).default.release(this.data.blobId);
      this.data = null;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "size",
    get() {
      return this.data.size;
    }
  };
  items[4] = {
    key: "type",
    get() {
      return this.data.type || "";
    }
  };
  return callback(Blob, items);
})();
