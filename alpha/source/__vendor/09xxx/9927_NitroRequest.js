// Module ID: 9927
// Function ID: 9928
// Name: NitroRequest
// Dependencies: [5, 41, 42, 9928, 9929, 9930, 9932]
// Exports: rawBodyOf

// Module 9927 (NitroRequest)
import NitroHeaders7 from "NitroHeaders" /* 9928 */;
import stringToUTF8 from "stringToUTF8" /* 9929 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

let closure_2, parseFormData, type;

let React2;
let closure_3;
let closure_4;
let closure_5;
let closure_6;
class NitroRequest {
  constructor(url, arg1) {
    const self = this;
    _classCallCheck(this, NitroRequest);
    this._bodyUsed = false;
    if (url instanceof NitroRequest) {
      let headers4;
      let _body;
      self.url = url.url;
      let method;
      if (arg1 != null) {
        method = arg1.method;
      }
      if (method == null) {
        method = url.method;
      }
      self.method = method.toUpperCase();
      let headers1;
      const NitroHeaders5 = NitroHeaders7.NitroHeaders;
      const tmp27 = require;
      if (arg1 != null) {
        headers1 = arg1.headers;
      }
      if (headers1) {
        const headers5 = arg1.headers;
        const NitroHeaders6 = tmp27(9928).NitroHeaders;
        headers4 = arg1.headers;
      } else {
        headers4 = url.headers;
      }
      const self8 = this;
      const self9 = this;
      const nitroHeaders5 = new NitroHeaders5(headers4);
      self.headers = nitroHeaders5;
      let redirect;
      if (arg1 != null) {
        redirect = arg1.redirect;
      }
      if (redirect == null) {
        redirect = url.redirect;
      }
      self.redirect = redirect;
      let signal;
      if (arg1 != null) {
        signal = arg1.signal;
      }
      if (signal == null) {
        signal = url.signal;
      }
      self.signal = signal;
      let cache;
      if (arg1 != null) {
        cache = arg1.cache;
      }
      if (cache == null) {
        cache = url.cache;
      }
      self.cache = cache;
      let credentials;
      if (arg1 != null) {
        credentials = arg1.credentials;
      }
      if (credentials == null) {
        credentials = url.credentials;
      }
      self.credentials = credentials;
      let mode;
      if (arg1 != null) {
        mode = arg1.mode;
      }
      if (mode == null) {
        mode = url.mode;
      }
      self.mode = mode;
      let referrer;
      if (arg1 != null) {
        referrer = arg1.referrer;
      }
      if (referrer == null) {
        referrer = url.referrer;
      }
      self.referrer = referrer;
      let referrerPolicy;
      if (arg1 != null) {
        referrerPolicy = arg1.referrerPolicy;
      }
      if (referrerPolicy == null) {
        referrerPolicy = url.referrerPolicy;
      }
      self.referrerPolicy = referrerPolicy;
      let integrity;
      if (arg1 != null) {
        integrity = arg1.integrity;
      }
      if (integrity == null) {
        integrity = url.integrity;
      }
      self.integrity = integrity;
      let keepalive;
      if (arg1 != null) {
        keepalive = arg1.keepalive;
      }
      if (keepalive == null) {
        keepalive = url.keepalive;
      }
      self.keepalive = keepalive;
      let body;
      if (arg1 != null) {
        body = arg1.body;
      }
      if (undefined !== body) {
        let body1 = arg1.body;
        if (body1 == null) {
          body1 = null;
        }
        _body = body1;
      } else {
        _body = url._body;
      }
      self._body = _body;
    } else {
      if (typeof url === "object") {
        if (null !== url) {
          if ("url" in url) {
            if ("method" in url) {
              if ("headers" in url) {
                const _URL = URL;
                if (!(url instanceof URL)) {
                  let headers;
                  self.url = url.url;
                  let method1;
                  if (arg1 != null) {
                    method1 = arg1.method;
                  }
                  if (method1 == null) {
                    method1 = url.method;
                  }
                  self.method = method1.toUpperCase();
                  let headers6;
                  const NitroHeaders = NitroHeaders7.NitroHeaders;
                  const tmp4 = require;
                  if (arg1 != null) {
                    headers6 = arg1.headers;
                  }
                  if (headers6) {
                    const headers2 = arg1.headers;
                    const NitroHeaders2 = tmp4(9928).NitroHeaders;
                    headers = arg1.headers;
                  } else {
                    headers = url.headers;
                  }
                  const self2 = this;
                  const self3 = this;
                  const nitroHeaders = new NitroHeaders(headers);
                  self.headers = nitroHeaders;
                  let str3;
                  if (arg1 != null) {
                    str3 = arg1.redirect;
                  }
                  if (str3 == null) {
                    str3 = url.redirect;
                  }
                  if (str3 == null) {
                    str3 = "follow";
                  }
                  self.redirect = str3;
                  let signal1;
                  if (arg1 != null) {
                    signal1 = arg1.signal;
                  }
                  if (signal1 == null) {
                    signal1 = url.signal;
                  }
                  self.signal = signal1;
                  let str4;
                  if (arg1 != null) {
                    str4 = arg1.cache;
                  }
                  if (str4 == null) {
                    str4 = url.cache;
                  }
                  if (str4 == null) {
                    str4 = "default";
                  }
                  self.cache = str4;
                  let str5;
                  if (arg1 != null) {
                    str5 = arg1.credentials;
                  }
                  if (str5 == null) {
                    str5 = url.credentials;
                  }
                  if (str5 == null) {
                    str5 = "same-origin";
                  }
                  self.credentials = str5;
                  let str6;
                  if (arg1 != null) {
                    str6 = arg1.mode;
                  }
                  if (str6 == null) {
                    str6 = url.mode;
                  }
                  if (str6 == null) {
                    str6 = "cors";
                  }
                  self.mode = str6;
                  let str7;
                  if (arg1 != null) {
                    str7 = arg1.referrer;
                  }
                  if (str7 == null) {
                    str7 = url.referrer;
                  }
                  if (str7 == null) {
                    str7 = "about:client";
                  }
                  self.referrer = str7;
                  let str8;
                  if (arg1 != null) {
                    str8 = arg1.referrerPolicy;
                  }
                  if (str8 == null) {
                    str8 = url.referrerPolicy;
                  }
                  if (str8 == null) {
                    str8 = "";
                  }
                  self.referrerPolicy = str8;
                  let str9;
                  if (arg1 != null) {
                    str9 = arg1.integrity;
                  }
                  if (str9 == null) {
                    str9 = url.integrity;
                  }
                  if (str9 == null) {
                    str9 = "";
                  }
                  self.integrity = str9;
                  let flag;
                  if (arg1 != null) {
                    flag = arg1.keepalive;
                  }
                  if (flag == null) {
                    flag = url.keepalive;
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  self.keepalive = flag;
                  let body2;
                  if (arg1 != null) {
                    body2 = arg1.body;
                  }
                  if (body2 == null) {
                    body2 = null;
                  }
                  self._body = body2;
                }
              }
            }
          }
        }
      }
      const _String = String;
      self.url = String(url);
      let str10;
      if (arg1 != null) {
        str10 = arg1.method;
      }
      if (str10 == null) {
        str10 = "GET";
      }
      self.method = str10.toUpperCase();
      let headers7;
      const NitroHeaders3 = NitroHeaders7.NitroHeaders;
      const tmp14 = require;
      if (arg1 != null) {
        headers7 = arg1.headers;
      }
      let headers8;
      if (headers7) {
        const headers3 = arg1.headers;
        const NitroHeaders4 = tmp14(9928).NitroHeaders;
        headers8 = arg1.headers;
      }
      const self4 = this;
      const self5 = this;
      const nitroHeaders3 = new NitroHeaders3(headers8);
      self.headers = nitroHeaders3;
      let str11;
      if (arg1 != null) {
        str11 = arg1.redirect;
      }
      if (str11 == null) {
        str11 = "follow";
      }
      self.redirect = str11;
      let signal2;
      if (arg1 != null) {
        signal2 = arg1.signal;
      }
      if (signal2 == null) {
        const _AbortController = AbortController;
        const self6 = this;
        const self7 = this;
        const abortController = new AbortController();
        signal2 = abortController.signal;
      }
      self.signal = signal2;
      let str12;
      if (arg1 != null) {
        str12 = arg1.cache;
      }
      if (str12 == null) {
        str12 = "default";
      }
      self.cache = str12;
      let str13;
      if (arg1 != null) {
        str13 = arg1.credentials;
      }
      if (str13 == null) {
        str13 = "same-origin";
      }
      self.credentials = str13;
      let str14;
      if (arg1 != null) {
        str14 = arg1.mode;
      }
      if (str14 == null) {
        str14 = "cors";
      }
      self.mode = str14;
      let str15;
      if (arg1 != null) {
        str15 = arg1.referrer;
      }
      if (str15 == null) {
        str15 = "about:client";
      }
      self.referrer = str15;
      let str16;
      if (arg1 != null) {
        str16 = arg1.referrerPolicy;
      }
      if (str16 == null) {
        str16 = "";
      }
      self.referrerPolicy = str16;
      let str17;
      if (arg1 != null) {
        str17 = arg1.integrity;
      }
      if (str17 == null) {
        str17 = "";
      }
      self.integrity = str17;
      let flag2;
      if (arg1 != null) {
        flag2 = arg1.keepalive;
      }
      if (flag2 == null) {
        flag2 = false;
      }
      self.keepalive = flag2;
      let body3;
      if (arg1 != null) {
        body3 = arg1.body;
      }
      if (body3 == null) {
        body3 = null;
      }
      self._body = body3;
    }
    self.destination = "";
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
      if (null == this._body) {
        return null;
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
      if (null != this._body) {
        if (typeof self._body === "string") {
          const obj = stringToUTF8;
          const stringToUTF8Result = obj.stringToUTF8(self._body);
          const buffer = stringToUTF8Result.buffer;
          return buffer.slice(stringToUTF8Result.byteOffset, stringToUTF8Result.byteOffset + stringToUTF8Result.byteLength);
        } else {
          const _ArrayBuffer2 = ArrayBuffer;
          if (self._body instanceof ArrayBuffer) {
            return self._body;
          } else {
            const _ArrayBuffer = ArrayBuffer;
            if (ArrayBuffer.isView(self._body)) {
              const _body = self._body;
              const buffer1 = _body.buffer;
              return buffer1.slice(_body.byteOffset, _body.byteOffset + _body.byteLength);
            }
          }
        }
      }
    }
  },
  {
    key: "_getBodyString",
    value: function _getBodyString() {
      const self = this;
      if (null == this._body) {
        return "";
      } else if (typeof self._body === "string") {
        return self._body;
      } else {
        const _getBodyBytesResult = self._getBodyBytes();
        let str = "";
        if (_getBodyBytesResult) {
          const _Uint8Array = Uint8Array;
          const self2 = this;
          const self3 = this;
          const utf8ToString = stringToUTF8.utf8ToString;
          stringToUTF8;
          const uint8Array = new Uint8Array(_getBodyBytesResult);
          str = utf8ToString(uint8Array);
        }
        return str;
      }
    }
  },
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
          c1 = 3;
          const obj = { value: self._getBodyString(), done: true };
          return obj;
        }
      } catch (tmp5) {
        c1 = 3;
        throw tmp5;
      }
    }
  })();
});
items[5] = entry;
const entry1 = {
  key: "json",
  value: function json() {
    return closure_5(...arguments);
  }
};
closure_5 = _asyncToGenerator(async function() {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
    return closure_4(...arguments);
  }
};
closure_4 = _asyncToGenerator(async function() {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
          c2 = 3;
          return { value: arrayBuffer, done: true };
        }
      } catch (tmp10) {
        c2 = 3;
        throw tmp10;
      }
    }
  })();
});
items[7] = entry2;
const entry3 = {
  key: "blob",
  value: function blob() {
    return closure_3(...arguments);
  }
};
closure_3 = _asyncToGenerator(async function() {
  let self = this;
  let c3 = 0;
  return (async function(arg0, value) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          return { value, done: true };
        } else {
          let blob;
          self._throwIfBodyUsed();
          self._bodyUsed = true;
          const headers = self.headers;
          value = headers.get("content-type");
          type = value;
          if (value == null) {
            type = "";
          }
          if (null == self._body) {
            const _Blob2 = Blob;
            const self5 = this;
            const self6 = this;
            const obj4 = { type };
            blob = new Blob([], obj4);
          } else if (typeof self._body === "string") {
            const _Blob = Blob;
            const items = [self._body];
            const self3 = this;
            const self4 = this;
            const obj = { type };
            blob = new Blob(items, obj);
          } else {
            const bytesToBlob = self(type[5]).bytesToBlob;
            self(type[5]);
            const _getBodyBytesResult = self._getBodyBytes();
            arrayBuffer = _getBodyBytesResult;
            if (_getBodyBytesResult == null) {
              const _ArrayBuffer = ArrayBuffer;
              self = this;
              const self2 = this;
              arrayBuffer = new ArrayBuffer(0);
            }
            blob = bytesToBlob(arrayBuffer, tmp3);
          }
          c3 = 3;
          return { value: blob, done: true };
        }
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  })();
});
items[8] = entry3;
const entry4 = {
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
items[9] = entry4;
items[10] = {
  key: "clone",
  value: function clone() {
    if (this._bodyUsed) {
      const _TypeError = TypeError;
      const self = this;
      const self2 = this;
      const typeError = new TypeError("Cannot clone a Request whose body has been used.");
      throw typeError;
    } else {
      const obj = Object.create(NitroRequest.prototype);
      NitroRequest(tmp);
      return obj;
    }
  }
};
const entry5 = {
  key: "formData",
  value: function formData() {
    return closure_1(...arguments);
  }
};
_asyncToGenerator(async function() {
  const self = this;
  let c4 = 0;
  let c5 = 0;
  return (async () => {
    headers = self;
    const tmp10 = self(parseFormData[6]);
    closure_2 = tmp10;
    parseFormData = tmp10.parseFormData;
    await self.text();
    headers = headers.headers;
    return parseFormData(value, headers.get("content-type"));
  })();
});
items[11] = entry5;
const NitroRequest_export = _createClass(NitroRequest, items);

export { NitroRequest_export as NitroRequest };
export function rawBodyOf(_body) {
  return _body._body;
}
