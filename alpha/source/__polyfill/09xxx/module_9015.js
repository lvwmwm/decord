// Module ID: 9015
// Function ID: 9016
// Dependencies: [5, 41, 42, 9011, 9012, 9013]

// Module 9015
import NitroHeaders2 from "NitroHeaders" /* 9011 */;
import stringToUTF8 from "stringToUTF8" /* 9012 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let _self, byteLength, byteLength2, bytesToBlob, closure_1, closure_2;

function decodeFormComponent(str) {
  const replaced = str.replace(/\+/g, " ");
  try {
    const _decodeURIComponent = decodeURIComponent;
    return decodeURIComponent(replaced);
  } catch (err) {
    return replaced;
  }
}
function parseFormData(value, headers) {
  let formatted;
  if (headers != null) {
    const str2 = headers.split(";")[0];
    if (str2 != null) {
      const str3 = str2.trim();
      formatted = str3.toLowerCase();
    }
  }
  if ("application/x-www-form-urlencoded" !== formatted) {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("formData() only supports application/x-www-form-urlencoded bodies");
    throw typeError;
  } else {
    const _FormData = FormData;
    const self3 = this;
    const self4 = this;
    const formData = new FormData();
    const parts = value.split("&");
    const iter = parts[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let arr = nextResult;
      if (arr) {
        let substr;
        let index = arr.indexOf("=");
        let tmp7 = index;
        let tmp8 = decodeFormComponent;
        let append = formData.append;
        if (index < 0) {
          substr = nextResult;
        } else {
          substr = arr.slice(0, tmp7);
        }
        let str4 = "";
        let tmp8Result = tmp8(substr);
        if (tmp7 >= 0) {
          str4 = arr.slice(tmp7 + 1);
        }
        let appendResult = append(tmp8Result, tmp8(str4));
      }
      continue;
    }
    return formData;
  }
}
let React2;
let closure_3;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
class NitroResponse {
  constructor(response, headers) {
    let type;
    const self = this;
    _classCallCheck(this, NitroResponse);
    this._bodyUsed = false;
    const tmp2 = null != response && typeof response === "object" && "url" in response && "status" in response && "ok" in response;
    if (tmp2) {
      ({ url: self.url, ok: self.ok, status: self.status, statusText: self.statusText, redirected: self.redirected, type } = response);
      if (type == null) {
        type = "basic";
      }
      self.type = type;
      const tmp14 = require;
      if (response.headers instanceof NitroHeaders2.NitroHeaders) {
        self.headers = response.headers;
      } else {
        const self4 = this;
        const self5 = this;
        const nitroHeaders = new tmp14(9011).NitroHeaders(response.headers);
        self.headers = nitroHeaders;
      }
      ({ bodyBytes: self._bodyBytes, bodyString: self._bodyString, body: self._bodyStream } = response);
    } else {
      let num;
      if (headers != null) {
        num = headers.status;
      }
      if (num == null) {
        num = 200;
      }
      self.status = num;
      let str4;
      if (headers != null) {
        str4 = headers.statusText;
      }
      if (str4 == null) {
        str4 = "";
      }
      self.statusText = str4;
      const tmp4 = self.status >= 200 && self.status < 300;
      self.ok = tmp4;
      self.url = "";
      self.redirected = false;
      self.type = "default";
      let headers1;
      const NitroHeaders = NitroHeaders2.NitroHeaders;
      if (headers != null) {
        headers1 = headers.headers;
      }
      const self2 = this;
      const self3 = this;
      const nitroHeaders1 = new NitroHeaders(headers1);
      self.headers = nitroHeaders1;
      if (null != response) {
        if (typeof response === "string") {
          self._bodyString = response;
        } else {
          const _ArrayBuffer2 = ArrayBuffer;
          if (response instanceof ArrayBuffer) {
            self._bodyBytes = response;
          } else {
            const _ArrayBuffer = ArrayBuffer;
            if (ArrayBuffer.isView(response)) {
              const buffer = response.buffer;
              self._bodyBytes = buffer.slice(response.byteOffset, response.byteOffset + response.byteLength);
            } else {
              const _ReadableStream = ReadableStream;
              if (typeof ReadableStream !== "undefined") {
                const _ReadableStream2 = ReadableStream;
                if (response instanceof ReadableStream) {
                  self._bodyStream = response;
                }
              }
              const _URLSearchParams = URLSearchParams;
              if (typeof URLSearchParams !== "undefined") {
                const _URLSearchParams2 = URLSearchParams;
                if (response instanceof URLSearchParams) {
                  self._bodyString = response.toString();
                  headers = self.headers;
                  if (!headers.has("content-type")) {
                    const headers2 = self.headers;
                    const result = headers2.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
                  }
                }
              }
              const _Blob = Blob;
              let tmp11 = typeof Blob !== "undefined";
              if (typeof Blob !== "undefined") {
                const _Blob2 = Blob;
                tmp11 = response instanceof Blob;
              }
              if (tmp11) {
                self._bodyString = "";
                const stream = response.stream;
                let streamResult;
                if (stream != null) {
                  streamResult = stream();
                }
                self._bodyStream = streamResult;
              }
            }
          }
        }
      }
    }
  }
}
let obj = {
  key: "bodyUsed",
  get() {
    return this._bodyUsed;
  }
};
let items = [
  obj,
  {
    key: "body",
    get() {
      const self = this;
      if (this._bodyStream) {
        return self._bodyStream;
      } else {
        const _getBodyBytesResult = self._getBodyBytes();
        require = _getBodyBytesResult;
        let readableStream = null;
        if (_getBodyBytesResult) {
          const _ReadableStream = ReadableStream;
          const self2 = this;
          const self3 = this;
          const obj = {
            start(enqueue) {
                  enqueue = enqueue.enqueue;
                  const uint8Array = new Uint8Array(require);
                  enqueue(uint8Array);
                  enqueue.close();
                }
          };
          readableStream = new ReadableStream(obj);
        }
        return readableStream;
      }
    }
  },
  {
    key: "_throwIfBodyUsed",
    value: function _throwIfBodyUsed() {
      if (this._bodyUsed) {
        const _TypeError = TypeError;
        const self = this;
        const self2 = this;
        const typeError = new TypeError("Body has already been consumed.");
        throw typeError;
      }
    }
  },
  {
    key: "_getBodyBytes",
    value: function _getBodyBytes() {
      const self = this;
      if (null != this._bodyBytes) {
        return self._bodyBytes;
      } else if (null != self._bodyString) {
        const obj = stringToUTF8;
        const stringToUTF8Result = obj.stringToUTF8(self._bodyString);
        const buffer = stringToUTF8Result.buffer;
        return buffer.slice(stringToUTF8Result.byteOffset, stringToUTF8Result.byteOffset + stringToUTF8Result.byteLength);
      }
    }
  },
  {
    key: "_getBodyString",
    value: function _getBodyString() {
      let str;
      const self = this;
      if (null != this._bodyString) {
        str = self._bodyString;
      } else {
        str = "";
        if (self._bodyBytes) {
          const _Uint8Array = Uint8Array;
          const self2 = this;
          const self3 = this;
          const utf8ToString = stringToUTF8.utf8ToString;
          stringToUTF8;
          const uint8Array = new Uint8Array(self._bodyBytes);
          str = utf8ToString(uint8Array);
        }
      }
      return str;
    }
  },
,
,
,
,
,
,
,

];
const entry = {
  key: "text",
  value: function text() {
    return closure_7(...arguments);
  }
};
closure_7 = _asyncToGenerator(async function() {
  let self = this;
  let c9 = 0;
  let c10 = 0;
  let c8 = 0;
  return (async function(arg0, value) {
    let self;
    if (c10 === 2) {
      c10 = 3;
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
        let done;
        let uint8Array;
        let closure_8;
        c10 = 2;
        let tmp5 = byteLength2;
        if (0 === byteLength2) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let obj8 = self;
            closure_6 = tmp;
            _self = undefined;
            closure_1 = undefined;
            closure_2 = undefined;
            done = undefined;
            value = undefined;
            closure_5 = undefined;
            byteLength = undefined;
            uint8Array = undefined;
            closure_8 = undefined;
            byteLength2 = undefined;
            let _throwIfBodyUsedResult = self._throwIfBodyUsed();
            self._bodyUsed = true;
            if (self._bodyStream) {
              if (!obj8._bodyBytes) {
                if (null == obj8._bodyString) {
                  let _bodyStream = obj8._bodyStream;
                  _self = _bodyStream.getReader();
                  closure_1 = [];
                }
              }
            }
            c10 = 3;
            let obj4 = { value: obj8._getBodyString(), done: true };
            return obj4;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            closure_2 = value;
            done = closure_2.done;
            value = closure_2.value;
            if (done) {
              closure_5 = 0;
              closure_2 = closure_1;
              closure_1 = closure_1[Symbol.iterator]();
              while (closure_1 !== undefined) {
                byteLength = tmp20;
                closure_5 = closure_5 + byteLength.byteLength;
                c8 = 0;
                continue;
              }
              let _Uint8Array = Uint8Array;
              self = this;
              let self2 = this;
              uint8Array = new Uint8Array(closure_5);
              closure_8 = 0;
              closure_4 = closure_1;
              closure_3 = closure_1[Symbol.iterator]();
              while (closure_3 !== undefined) {
                byteLength2 = tmp32;
                let result = uint8Array.set(byteLength2, closure_8);
                closure_8 = closure_8 + byteLength2.byteLength;
                c8 = 0;
                continue;
              }
              let obj = self(closure_1[4]);
              c10 = 3;
              let obj6 = { value: obj.utf8ToString(uint8Array), done: true };
              return obj6;
            } else {
              let tmp12 = value;
              if (tmp12) {
                let arr = closure_1.push(value);
              }
            }
          }
        } else if (2 === tmp5) {
          c8 = 0;
          closure_1.return();
          throw closure_1_7;
        } else {
          c8 = 0;
          closure_3.return();
          throw closure_1_7;
        }
        byteLength2 = 1;
        c10 = 1;
        let obj7 = { value: _self.read(), done: false };
        return obj7;
      }
    }
  })();
});
items[5] = entry;
const entry1 = {
  key: "json",
  value: function json() {
    return closure_6(...arguments);
  }
};
closure_6 = _asyncToGenerator(async function() {
  const self = this;
  let c1 = 0;
  return (async (arg0, value) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          return { value, done: true };
        } else {
          self._throwIfBodyUsed();
          self._bodyUsed = true;
          let str = self._getBodyString();
          const _JSON = JSON;
          if (!str) {
            str = "{}";
          }
          c1 = 3;
          const obj = { value: parse(str), done: true };
          return obj;
        }
      } catch (tmp6) {
        c1 = 3;
        throw tmp6;
      }
    }
  })();
});
items[6] = entry1;
const entry2 = {
  key: "arrayBuffer",
  value: function arrayBuffer() {
    return closure_5(...arguments);
  }
};
closure_5 = _asyncToGenerator(async function() {
  let self = this;
  let c7 = 0;
  let c10 = 0;
  let c9 = 0;
  return (async function(arg0, value) {
    let self;
    if (c10 === 2) {
      c10 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        let done;
        let uint8Array;
        let closure_8;
        c10 = 2;
        let tmp4 = c7;
        if (0 === c7) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let obj7 = self;
            closure_6 = tmp;
            _self = undefined;
            arrayBuffer = undefined;
            closure_2 = undefined;
            done = undefined;
            value = undefined;
            closure_5 = undefined;
            byteLength = undefined;
            uint8Array = undefined;
            closure_8 = undefined;
            byteLength2 = undefined;
            let _throwIfBodyUsedResult = self._throwIfBodyUsed();
            self._bodyUsed = true;
            if (self._bodyStream) {
              if (!obj7._bodyBytes) {
                if (null == obj7._bodyString) {
                  let _bodyStream = obj7._bodyStream;
                  _self = _bodyStream.getReader();
                  arrayBuffer = [];
                }
              }
            }
            let _getBodyBytesResult = obj7._getBodyBytes();
            arrayBuffer = _getBodyBytesResult;
            if (_getBodyBytesResult == null) {
              let _ArrayBuffer = ArrayBuffer;
              let self3 = this;
              let self4 = this;
              arrayBuffer = new ArrayBuffer(0);
            }
            c10 = 3;
            let obj4 = { value: arrayBuffer, done: true };
            return obj4;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            let obj5 = { value, done: true };
            return obj5;
          } else {
            closure_2 = value;
            done = closure_2.done;
            value = closure_2.value;
            if (done) {
              closure_5 = 0;
              closure_3 = arrayBuffer;
              closure_2 = arrayBuffer[Symbol.iterator]();
              while (closure_2 !== undefined) {
                byteLength = tmp19;
                closure_5 = closure_5 + byteLength.byteLength;
                byteLength2 = 0;
                continue;
              }
              let _Uint8Array = Uint8Array;
              self = this;
              let self2 = this;
              uint8Array = new Uint8Array(closure_5);
              closure_8 = 0;
              closure_5 = arrayBuffer;
              closure_4 = arrayBuffer[Symbol.iterator]();
              while (closure_4 !== undefined) {
                byteLength2 = tmp31;
                let result = uint8Array.set(byteLength2, closure_8);
                closure_8 = closure_8 + byteLength2.byteLength;
                byteLength2 = 0;
                continue;
              }
              let buffer = uint8Array.buffer;
              c10 = 3;
              let obj = { value: buffer.slice(uint8Array.byteOffset, uint8Array.byteOffset + uint8Array.byteLength), done: true };
              return obj;
            } else {
              let tmp11 = value;
              if (tmp11) {
                let arr = arrayBuffer.push(value);
              }
            }
          }
        } else if (2 === tmp4) {
          byteLength2 = 0;
          closure_2.return();
          throw closure_1_8;
        } else {
          byteLength2 = 0;
          closure_4.return();
          throw closure_1_8;
        }
        c7 = 1;
        c10 = 1;
        let obj6 = { value: _self.read(), done: false };
        return obj6;
      }
    }
  })();
});
items[7] = entry2;
const entry3 = {
  key: "_drainStream",
  value: function _drainStream() {
    return closure_4(...arguments);
  }
};
closure_4 = _asyncToGenerator(async function() {
  let self = this;
  let c6 = 0;
  let c9 = 0;
  let c8 = 0;
  return (async function(arg0, value) {
    let self;
    if (byteLength2 === 2) {
      byteLength2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      while (true) {
        let done;
        let uint8Array;
        let closure_8;
        byteLength2 = 2;
        let tmp4 = byteLength;
        if (0 === byteLength) {
          if (arg0 === 1) {
            byteLength2 = 3;
            throw value;
          } else if (arg0 === 2) {
            byteLength2 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = undefined;
            done = undefined;
            value = undefined;
            closure_5 = undefined;
            byteLength = undefined;
            uint8Array = undefined;
            closure_8 = undefined;
            byteLength2 = undefined;
            let _bodyStream = self._bodyStream;
            _self = _bodyStream.getReader();
            closure_1 = [];
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            byteLength2 = 3;
            throw value;
          } else if (arg0 === 2) {
            byteLength2 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = value;
            done = closure_2.done;
            value = closure_2.value;
            if (done) {
              closure_5 = 0;
              closure_2 = closure_1;
              closure_1 = closure_1[Symbol.iterator]();
              while (closure_1 !== undefined) {
                byteLength = tmp19;
                closure_5 = closure_5 + byteLength.byteLength;
                c8 = 0;
                continue;
              }
              let _Uint8Array = Uint8Array;
              self = this;
              let self2 = this;
              uint8Array = new Uint8Array(closure_5);
              closure_8 = 0;
              closure_4 = closure_1;
              closure_3 = closure_1[Symbol.iterator]();
              while (closure_3 !== undefined) {
                byteLength2 = tmp31;
                let result = uint8Array.set(byteLength2, closure_8);
                closure_8 = closure_8 + byteLength2.byteLength;
                c8 = 0;
                continue;
              }
              let buffer = uint8Array.buffer;
              byteLength2 = 3;
              let obj = { value: buffer.slice(uint8Array.byteOffset, uint8Array.byteOffset + uint8Array.byteLength), done: true };
              return obj;
            } else {
              let tmp11 = value;
              if (tmp11) {
                let arr = closure_1.push(value);
              }
            }
          }
        } else if (2 === tmp4) {
          c8 = 0;
          closure_1.return();
          throw closure_1_7;
        } else {
          c8 = 0;
          closure_3.return();
          throw closure_1_7;
        }
        byteLength = 1;
        byteLength2 = 1;
        let obj5 = { value: _self.read(), done: false };
        return obj5;
      }
    }
  })();
});
items[8] = entry3;
const entry4 = {
  key: "blob",
  value: function blob() {
    return closure_3(...arguments);
  }
};
closure_3 = _asyncToGenerator(async function() {
  let self = this;
  let c5 = 0;
  let c6 = 0;
  return (async function(arg0, value) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let closure_0;
        let tmp9;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            let bytesToBlobResult;
            closure_4 = tmp;
            closure_0 = undefined;
            self._throwIfBodyUsed();
            self._bodyUsed = true;
            const headers = self.headers;
            value = headers.get("content-type");
            type = value;
            if (value == null) {
              type = "";
            }
            closure_0 = type;
            if (self._bodyStream) {
              if (!self._bodyBytes) {
                if (null == self._bodyString) {
                  const tmp13 = self(type[5]);
                  closure_3 = tmp13;
                  bytesToBlob = tmp13.bytesToBlob;
                  c5 = 1;
                  c6 = 1;
                  const obj5 = { value: self._drainStream(), done: false };
                  return obj5;
                }
              }
            }
            if (null != self._bodyBytes) {
              const obj4 = self(type[5]);
              bytesToBlobResult = obj4.bytesToBlob(obj8._bodyBytes, tmp10);
            } else {
              const _Blob = Blob;
              const items = [self._getBodyString()];
              self = this;
              const self2 = this;
              const obj6 = { type };
              bytesToBlobResult = new Blob(items, obj6);
            }
            tmp9 = bytesToBlobResult;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          return { value, done: true };
        } else {
          tmp9 = bytesToBlob(value, closure_0);
        }
        c6 = 3;
        return { value: tmp9, done: true };
      } catch (tmp20) {
        c6 = 3;
        throw tmp20;
      }
    }
  })();
});
items[9] = entry4;
const entry5 = {
  key: "bytes",
  value: function bytes() {
    return closure_2(...arguments);
  }
};
React2 = _asyncToGenerator(async function() {
  let self = this;
  let c2 = 0;
  return (async function(arg0, value) {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          return { value, done: true };
        } else {
          self._throwIfBodyUsed();
          self._bodyUsed = true;
          const _getBodyBytesResult = self._getBodyBytes();
          arrayBuffer = _getBodyBytesResult;
          if (_getBodyBytesResult == null) {
            const _ArrayBuffer = ArrayBuffer;
            self = this;
            const self2 = this;
            arrayBuffer = new ArrayBuffer(0);
          }
          const _Uint8Array = Uint8Array;
          const self3 = this;
          const self4 = this;
          const uint8Array = new Uint8Array(arrayBuffer);
          c2 = 3;
          return { value: uint8Array, done: true };
        }
      } catch (tmp10) {
        c2 = 3;
        throw tmp10;
      }
    }
  })();
});
items[10] = entry5;
items[11] = {
  key: "clone",
  value: function clone() {
    if (this._bodyUsed) {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("Cannot clone a Response whose body has been used.");
      throw typeError;
    } else {
      const response = { url: null, status: null, statusText: null, ok: null, redirected: null, headers: null, bodyBytes: null, bodyString: null, type: null };
      ({ url: obj.url, status: obj.status, statusText: obj.statusText, ok: obj.ok, redirected: obj.redirected, headers: obj.headers, _bodyBytes: obj.bodyBytes, _bodyString: obj.bodyString, type: obj.type } = this);
      const obj2 = Object.create(NitroResponse.prototype);
      NitroResponse(response);
      return obj2;
    }
  }
};
const entry6 = {
  key: "formData",
  value: function formData() {
    return closure_1(...arguments);
  }
};
_asyncToGenerator(async function() {
  const self = this;
  let c3 = 0;
  let c4 = 0;
  return (async () => {
    headers = self;
    await self.text();
    headers = headers.headers;
    return closure_1(value, headers.get("content-type"));
  })();
});
items[12] = entry6;
const entry7 = {
  key: "error",
  value: function error() {
    const obj = Object.create(NitroResponse.prototype);
    NitroResponse({ url: "", status: 0, statusText: "", ok: false, redirected: false, headers: [], type: "error" });
    return obj;
  }
};
const items1 = [
  entry7,
  {
    key: "json",
    value: function json(arg0, headers) {
      let str2;
      let tmp5;
      const json = JSON.stringify(arg0);
      headers = undefined;
      const NitroHeaders = NitroHeaders2.NitroHeaders;
      if (headers != null) {
        headers = headers.headers;
      }
      const nitroHeaders = new NitroHeaders(headers);
      if (!nitroHeaders.has("content-type")) {
        const result = nitroHeaders.set("content-type", "application/json");
      }
      let num;
      if (headers != null) {
        num = headers.status;
      }
      if (num == null) {
        num = 200;
      }
      const response = { url: "", status: num, statusText: str2, ok: tmp5, redirected: false, headers: nitroHeaders, bodyString: json };
      str2 = undefined;
      if (headers != null) {
        str2 = headers.statusText;
      }
      if (str2 == null) {
        str2 = "";
      }
      let num2;
      if (headers != null) {
        num2 = headers.status;
      }
      if (num2 == null) {
        num2 = 200;
      }
      tmp5 = num2 >= 200;
      if (tmp5) {
        let num3;
        if (headers != null) {
          num3 = headers.status;
        }
        if (num3 == null) {
          num3 = 200;
        }
        tmp5 = num3 < 300;
      }
      const obj = Object.create(NitroResponse.prototype);
      NitroResponse(response);
      return obj;
    }
  },
  {
    key: "redirect",
    value: function redirect(_loadingFrameUrl) {
      let num = arg1;
      if (arg1 === undefined) {
        num = 302;
      }
      const items = [301, 302, 303, 307, 308];
      if (items.includes(num)) {
        const self3 = this;
        const self4 = this;
        const nitroHeaders = new NitroHeaders2.NitroHeaders();
        const result = nitroHeaders.set("location", _loadingFrameUrl);
        const response = { url: "", status: num, statusText: "", ok: false, redirected: false, headers: nitroHeaders };
        const obj = Object.create(NitroResponse.prototype);
        NitroResponse(response);
        return obj;
      } else {
        const _RangeError = RangeError;
        const _HermesInternal = HermesInternal;
        const self = this;
        const self2 = this;
        const rangeError = new RangeError("Invalid redirect status: " + num + ". Must be one of " + items.join(", "));
        throw rangeError;
      }
    }
  }
];
const importDefaultResult1Result = _createClass(NitroResponse, items, items1);
Object.defineProperty(importDefaultResult1Result.prototype, Symbol.toStringTag, { value: "Response", configurable: true });
const NitroResponse_export = importDefaultResult1Result;

export { parseFormData };
export { NitroResponse_export as NitroResponse };
