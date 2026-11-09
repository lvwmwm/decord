// Module ID: 1743
// Function ID: 1744
// Name: FormData
// Dependencies: [32, 41, 42, 1740, 1741]

// Module 1743 (FormData)
import _createClassDefault from "_createClass" /* 42 */;
import _mod1740 from "module_1740" /* 1740 */;
import utf8Encode from "utf8Encode" /* 1741 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let closure_1, closure_3, closure_4;

class FormData {
  constructor() {
    _classCallCheck(this, FormData);
    this.formEntries = [];
  }
}
let obj = {
  key: Symbol.toStringTag,
  get() {
    return "FormData";
  }
};
let items = [
  obj,
  {
    key: "append",
    value: function append(arg0, obj) {
      if (null !== obj) {
        if (typeof obj === "object") {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError("[Worklets] Failed to execute 'append' on 'FormData': only string values are supported.");
          throw typeError;
        }
      }
      const formEntries = this.formEntries;
      const push = formEntries.push;
      const items = [String(arg0), String(obj)];
      push(items);
    }
  },
  {
    key: "set",
    value: function set(arg0, arg1) {
      this.delete(arg0);
      this.append(arg0, arg1);
    }
  },
  {
    key: "get",
    value: function get(arg0) {
      let closure_0 = arg0;
      const formEntries = this.formEntries;
      const found = formEntries.find((item) => {
        let tmp;
        [tmp] = item;
        return tmp === String(closure_0);
      });
      let tmp2 = null;
      if (undefined !== found) {
        tmp2 = found[1];
      }
      return tmp2;
    }
  },
  {
    key: "getAll",
    value: function getAll(arg0) {
      let closure_0 = arg0;
      const formEntries = this.formEntries;
      const found = formEntries.filter((item) => {
        let tmp;
        [tmp] = item;
        return tmp === String(closure_0);
      });
      return found.map((item) => {
        let tmp;
        [, tmp] = item;
        return tmp;
      });
    }
  },
  {
    key: "has",
    value: function has(arg0) {
      let closure_0 = arg0;
      const formEntries = this.formEntries;
      return formEntries.some((item) => {
        let tmp;
        [tmp] = item;
        return tmp === String(closure_0);
      });
    }
  },
  {
    key: "delete",
    value: function _delete(arg0) {
      let closure_0 = arg0;
      const formEntries = this.formEntries;
      this.formEntries = formEntries.filter((item) => {
        let tmp;
        [tmp] = item;
        return tmp !== String(closure_0);
      });
    }
  },
  {
    key: "forEach",
    value: function forEach(fn) {
      const tmp = this.formEntries[Symbol.iterator]();
      while (tmp !== undefined) {
        let tmp4 = _slicedToArray(tmp2, 2);
        let tmp5 = fn(tmp4[1], tmp4[0], this);
        continue;
      }
    }
  },
  {
    key: "entries",
    value: function entries() {
      const self = this;
      let c7 = 0;
      let c8 = 0;
      let c6 = 0;
      return (function* entries(arg0, value) {
        if (c8 === 2) {
          c8 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          while (true) {
            let c0;
            let closure_2;
            c8 = 2;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                closure_4 = tmp;
                c0 = undefined;
                closure_2 = undefined;
                closure_3 = undefined;
                formEntries = self.formEntries;
                closure_1 = formEntries[Symbol.iterator]();
              }
            } else if (1 === tmp5) {
              c6 = 0;
              closure_1.return();
              throw closure_1_5;
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              closure_1.return();
              c8 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              c6 = 0;
            }
            if (closure_1 === undefined) {
              c8 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              c6 = 1;
              c0 = tmp12;
              closure_1 = formEntries(c0, 2);
              closure_2 = closure_1[0];
              closure_3 = closure_1[1];
              let items = [closure_2, ];
              items[1] = closure_3;
              c7 = 2;
              c8 = 1;
              let obj4 = { value: items, done: false };
              return obj4;
            }
          }
        }
      })();
    }
  },
  {
    key: "keys",
    value: function keys() {
      const self = this;
      let c7 = 0;
      let c8 = 0;
      let c6 = 0;
      return (function* keys(arg0, value) {
        if (c8 === 2) {
          c8 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          while (true) {
            let c0;
            c8 = 2;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                closure_4 = tmp;
                closure_3 = tmp2;
                c0 = undefined;
                formEntries = self.formEntries;
                value = formEntries[Symbol.iterator]();
              }
            } else if (1 === tmp5) {
              c6 = 0;
              value.return();
              throw closure_1_5;
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              value.return();
              c8 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              c6 = 0;
            }
            if (value === undefined) {
              c8 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              c6 = 1;
              c0 = tmp12;
              value = formEntries(c0, 1)[0];
              c7 = 2;
              c8 = 1;
              let obj4 = { value, done: false };
              return obj4;
            }
          }
        }
      })();
    }
  },
  {
    key: "values",
    value: function values() {
      const self = this;
      let c7 = 0;
      let c8 = 0;
      let c6 = 0;
      return (function* values(arg0, value) {
        if (c8 === 2) {
          c8 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          while (true) {
            let c0;
            c8 = 2;
            if (0 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                closure_4 = tmp;
                closure_3 = tmp2;
                c0 = undefined;
                formEntries = self.formEntries;
                value = formEntries[Symbol.iterator]();
              }
            } else if (1 === tmp5) {
              c6 = 0;
              value.return();
              throw closure_1_5;
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              value.return();
              c8 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              c6 = 0;
            }
            if (value === undefined) {
              c8 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              c6 = 1;
              c0 = tmp12;
              value = formEntries(c0, 2)[1];
              c7 = 2;
              c8 = 1;
              let obj4 = { value, done: false };
              return obj4;
            }
          }
        }
      })();
    }
  },
,
,

];
const entry = {
  key: Symbol.iterator,
  value() {
    return this.entries();
  }
};
items[11] = entry;
items[12] = {
  key: "getParts",
  value: function getParts() {
    const formEntries = this.formEntries;
    return formEntries.map((item) => {
      let obj2;
      let str;
      let str3;
      let tmp;
      [str, tmp] = item;
      const obj = { string: tmp, fieldName: str, headers: obj2 };
      obj2 = { "content-disposition": "form-data; name=\"" + str3.replace(/"/g, "%22") + "\"" };
      const str2 = str.replace(/\r/g, "%0D");
      str3 = str2.replace(/\n/g, "%0A");
      return obj;
    });
  }
};
items[13] = {
  key: "__encodeMultipart",
  value: function __encodeMultipart() {
    let obj2;
    let tmp3;
    let toArrayBuffer;
    function pickBoundary(mapped) {
      let tmp3;
      do {
        let _Math = Math;
        let str = Math.random();
        let str1 = str.toString(36);
        let substr = str1.slice(2);
        let _Math2 = Math;
        let padEndResult = substr.padEnd(11, "0");
        let str2 = Math.random();
        let str3 = str2.toString(36);
        let substr1 = str3.slice(2);
        let _HermesInternal = HermesInternal;
        let combined = "----WorkletsFormDataBoundary" + padEndResult + substr1.padEnd(11, "0");
        tmp3 = undefined;
        if (!mapped.some((arr) => arr.includes(combined))) {
          let obj = { v: combined };
          tmp3 = obj;
        }
      } while (!tmp3);
      return tmp3.v;
    }
    const formEntries = this.formEntries;
    const mapped = formEntries.map((item) => {
      let str;
      let tmp;
      [str, tmp] = item;
      const str2 = str.replace(/\r/g, "%0D");
      const str3 = str2.replace(/\n/g, "%0A");
      return "content-disposition: form-data; name=\"" + str3.replace(/"/g, "%22") + "\"\r\n\r\n" + tmp;
    });
    const tmp2 = pickBoundary(mapped);
    let str = "";
    const iter = mapped[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let _HermesInternal = HermesInternal;
      let str2 = "--";
      let str3 = "\r\n";
      let str4 = "\r\n";
      str = `${"--" + tmp2 + "\r\n" + tmp3 + "\r\n"}`;
      continue;
    }
    const sum = str + "--" + tmp2 + "--\r\n";
    let obj = { body: toArrayBuffer(obj2.utf8Encode(sum)), contentType: "multipart/form-data; boundary=" + tmp2 };
    toArrayBuffer = _mod1740.toArrayBuffer;
    _mod1740;
    obj2 = utf8Encode;
    return obj;
  }
};
const FormData_export = _createClassDefault(FormData, items);

export { FormData_export as FormData };
