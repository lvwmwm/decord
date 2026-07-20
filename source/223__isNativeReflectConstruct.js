// Module ID: 223
// Function ID: 3084
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 223 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const tmp2 = (arg0) => {
  class FileReader {
    constructor() {
      self = this;
      tmp = closure_3(this, FileReader);
      obj = closure_6(FileReader);
      tmp2 = closure_5;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, [], closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, undefined);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.EMPTY = 0;
      tmp2Result.LOADING = 1;
      tmp2Result.DONE = 2;
      tmp2Result._aborted = false;
      _resetResult = tmp2Result._reset();
      return tmp2Result;
    }
  }
  const arg1 = FileReader;
  callback2(FileReader, arg0);
  let obj = {
    key: "_reset",
    value: function _reset() {
      this._readyState = 0;
      this._error = null;
      this._result = null;
    }
  };
  const items = [obj, , , , , , , , , , , , , , ];
  obj = {
    key: "_setReadyState",
    value: function _setReadyState(_readyState) {
      const self = this;
      this._readyState = _readyState;
      let num = 5;
      let tmp = callback(closure_2[5]);
      tmp = new tmp("readystatechange");
      this.dispatchEvent(tmp);
      if (2 === _readyState) {
        if (self._aborted) {
          let tmp7 = callback(closure_2[num]);
          const prototype2 = tmp7.prototype;
          let tmp8 = new.target;
          tmp7 = new tmp7("abort");
          self.dispatchEvent(tmp7);
          num = callback(closure_2[num]);
          const prototype3 = num.prototype;
          num = new num("loadend");
          self.dispatchEvent(num);
          const tmp4 = new.target;
        } else {
          tmp7 = callback(closure_2[num]);
          const prototype = tmp7.prototype;
          tmp8 = new.target;
          if (!self._error) {
            tmp7 = new tmp7("load");
            self.dispatchEvent(tmp7);
          }
        }
        const tmp71 = new tmp7("error");
        tmp4(tmp71);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "readAsArrayBuffer",
    value: function readAsArrayBuffer(data) {
      const FileReader = this;
      this._aborted = false;
      if (null == data) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Failed to execute 'readAsArrayBuffer' on 'FileReader': parameter 1 is not of type 'Blob'");
        throw typeError;
      } else {
        const asDataURL = callback(closure_2[6]).readAsDataURL(data.data);
        asDataURL.then((arg0) => {
          if (!self._aborted) {
            self._result = self(closure_2[7]).toByteArray(arg0.split(",")[1]).buffer;
            self._setReadyState(2);
            const obj = self(closure_2[7]);
          }
        }, (_error) => {
          if (!self._aborted) {
            self._error = _error;
            self._setReadyState(2);
          }
        });
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "readAsDataURL",
    value: function readAsDataURL(data) {
      const FileReader = this;
      this._aborted = false;
      if (null == data) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Failed to execute 'readAsDataURL' on 'FileReader': parameter 1 is not of type 'Blob'");
        throw typeError;
      } else {
        const asDataURL = callback(closure_2[6]).readAsDataURL(data.data);
        asDataURL.then((_result) => {
          if (!self._aborted) {
            self._result = _result;
            self._setReadyState(2);
          }
        }, (_error) => {
          if (!self._aborted) {
            self._error = _error;
            self._setReadyState(2);
          }
        });
      }
    }
  };
  items[4] = {
    key: "readAsText",
    value: function readAsText(_bodyBlob, arg1) {
      const FileReader = this;
      let str = "UTF-8";
      if (arguments.length > 1) {
        str = "UTF-8";
        if (undefined !== arguments[1]) {
          str = arguments[1];
        }
      }
      this._aborted = false;
      if (null == _bodyBlob) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Failed to execute 'readAsText' on 'FileReader': parameter 1 is not of type 'Blob'");
        throw typeError;
      } else {
        const asText = callback(closure_2[6]).readAsText(_bodyBlob.data, str);
        asText.then((_result) => {
          if (!self._aborted) {
            self._result = _result;
            self._setReadyState(2);
          }
        }, (_error) => {
          if (!self._aborted) {
            self._error = _error;
            self._setReadyState(2);
          }
        });
      }
    }
  };
  items[5] = {
    key: "abort",
    value: function abort() {
      const self = this;
      this._aborted = true;
      let tmp = 0 !== this._readyState;
      if (tmp) {
        tmp = 2 !== self._readyState;
      }
      if (tmp) {
        self._reset();
        self._setReadyState(2);
      }
      self._reset();
    }
  };
  items[6] = {
    key: "readyState",
    get() {
      return this._readyState;
    }
  };
  items[7] = {
    key: "error",
    get() {
      return this._error;
    }
  };
  items[8] = {
    key: "result",
    get() {
      return this._result;
    }
  };
  items[9] = {
    key: "onabort",
    get() {
      return FileReader(closure_2[8]).getEventHandlerAttribute(this, "abort");
    },
    set(handleEvent) {
      const result = FileReader(closure_2[8]).setEventHandlerAttribute(this, "abort", handleEvent);
    }
  };
  items[10] = {
    key: "onerror",
    get() {
      return FileReader(closure_2[8]).getEventHandlerAttribute(this, "error");
    },
    set(handleEvent) {
      const result = FileReader(closure_2[8]).setEventHandlerAttribute(this, "error", handleEvent);
    }
  };
  items[11] = {
    key: "onload",
    get() {
      return FileReader(closure_2[8]).getEventHandlerAttribute(this, "load");
    },
    set(handleEvent) {
      const result = FileReader(closure_2[8]).setEventHandlerAttribute(this, "load", handleEvent);
    }
  };
  items[12] = {
    key: "onloadstart",
    get() {
      return FileReader(closure_2[8]).getEventHandlerAttribute(this, "loadstart");
    },
    set(handleEvent) {
      const result = FileReader(closure_2[8]).setEventHandlerAttribute(this, "loadstart", handleEvent);
    }
  };
  items[13] = {
    key: "onloadend",
    get() {
      return FileReader(closure_2[8]).getEventHandlerAttribute(this, "loadend");
    },
    set(handleEvent) {
      const result = FileReader(closure_2[8]).setEventHandlerAttribute(this, "loadend", handleEvent);
    }
  };
  items[14] = {
    key: "onprogress",
    get() {
      return FileReader(closure_2[8]).getEventHandlerAttribute(this, "progress");
    },
    set(handleEvent) {
      const result = FileReader(closure_2[8]).setEventHandlerAttribute(this, "progress", handleEvent);
    }
  };
  return callback(FileReader, items);
}(importDefault(dependencyMap[9]));
tmp2.EMPTY = 0;
tmp2.LOADING = 1;
tmp2.DONE = 2;

export default tmp2;
