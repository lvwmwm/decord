// Module ID: 1744
// Function ID: 1745
// Name: FileReader
// Dependencies: [41, 42, 1740, 1741]

// Module 1744 (FileReader)
import _createClassDefault from "_createClass" /* 42 */;
import _mod1740 from "module_1740" /* 1740 */;
import utf8Encode from "utf8Encode" /* 1741 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

function invoke(fn) {
  try {
    if (fn != null) {
      fn();
    }
  } catch (tmp4) {
    const _console = console;
    console.error(tmp4);
  }
}
const re3 = /;\s*charset\s*=\s*("([^"]*)"|([^;\s]*))/i;
class FileReader {
  constructor() {
    _classCallCheck(this, FileReader);
    this.EMPTY = 0;
    this.LOADING = 1;
    this.DONE = 2;
    this.readyState = 0;
    this.result = null;
    this.error = null;
    this.onload = null;
    this.onerror = null;
    this.onloadend = null;
  }
}
const entry = {
  key: "readAsArrayBuffer",
  value: function readAsArrayBuffer(arg0) {
    let closure_0 = arg0;
    this.read(function() {
      let __getBytes;
      const toArrayBuffer = _mod1740.toArrayBuffer;
      _mod1740;
      if (closure_0 != null) {
        __getBytes = obj.__getBytes;
      }
      if (typeof __getBytes !== "function") {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("[Worklets] FileReader can only read a Blob created by the Worklets networking module.");
        throw error;
      } else {
        return toArrayBuffer(closure_0.__getBytes());
      }
    });
  }
};
const items = [
  entry,
  {
    key: "readAsText",
    value: function readAsText(arg0, arg1) {
      let closure_0 = arg0;
      let closure_1 = arg1;
      this.read(function() {
        let __getBytes;
        if (closure_0 != null) {
          __getBytes = obj.__getBytes;
        }
        if (typeof __getBytes !== "function") {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("[Worklets] FileReader can only read a Blob created by the Worklets networking module.");
          throw error;
        } else {
          let decodeTextResult;
          const __getBytesResult = closure_0.__getBytes();
          let tmp6 = closure_1;
          if (closure_1 == null) {
            const match = re3.exec(obj.type);
            let tmp4;
            if (null !== match) {
              let str = match[2];
              if (str == null) {
                str = match[3];
              }
              if (str == null) {
                str = "";
              }
              let tmp5;
              if ("" !== str) {
                tmp5 = str;
              }
              tmp4 = tmp5;
            }
            tmp6 = tmp4;
          }
          const _globalThis = globalThis;
          if (undefined !== __workletsNetworking) {
            const decodeText = __workletsNetworking.decodeText;
            const obj3 = _mod1740;
            decodeTextResult = decodeText(obj3.toArrayBuffer(__getBytesResult), tmp6);
          } else {
            const obj2 = utf8Encode;
            decodeTextResult = obj2.utf8Decode(__getBytesResult);
          }
          return decodeTextResult;
        }
      });
    }
  },
  {
    key: "read",
    value: function read(arg0) {
      const self = this;
      let closure_0 = arg0;
      if (1 === this.readyState) {
        const tmp4 = globalThis;
        const _Error = Error;
        const self2 = this;
        const self3 = this;
        const error = new Error("[Worklets] Failed to execute 'read' on 'FileReader': the object is already loading.");
        throw error;
      } else {
        self.result = null;
        self.error = null;
        self.readyState = 1;
        let tmp2 = globalThis;
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          let flag;
          let tmp2;
          try {
            tmp2 = self;
            self.result = closure_0();
            flag = false;
          } catch (tmp4) {
            tmp2 = self;
            self.error = tmp4;
            flag = true;
          }
          tmp2.readyState = 2;
          invoke(flag ? tmp2.onerror : tmp2.onload);
          invoke(tmp2.onloadend);
        });
      }
    }
  }
];
let tmp2 = _createClassDefault(FileReader, items);
tmp2.EMPTY = 0;
tmp2.LOADING = 1;
tmp2.DONE = 2;
const FileReader_export = tmp2;

export { FileReader_export as FileReader };
