// Module ID: 226
// Function ID: 3119
// Name: validateBaseUrl
// Dependencies: []

// Module 226 (validateBaseUrl)
function validateBaseUrl(arg0) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)*(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/.test(arg0);
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = null;
if (importDefault(dependencyMap[2])) {
  if ("string" === typeof importDefaultResult.getConstants().BLOB_URI_SCHEME) {
    const constants = importDefault(dependencyMap[2]).getConstants();
    closure_2 = `${tmp2.BLOB_URI_SCHEME}:`;
    if ("string" === typeof constants.BLOB_URI_HOST) {
      const _HermesInternal = HermesInternal;
      closure_2 = `${tmp2.BLOB_URI_SCHEME}:` + "//" + constants.BLOB_URI_HOST + "/";
    }
    const importDefaultResult1 = importDefault(dependencyMap[2]);
  }
  const importDefaultResult = importDefault(dependencyMap[2]);
}

export const URLSearchParams = arg1(dependencyMap[3]).URLSearchParams;
export const URL = () => {
  class URL {
    constructor(arg0, arg1) {
      self = this;
      tmp = URL(this, URL);
      this._searchParamsInstance = null;
      if (arg1) {
        tmp2 = closure_3;
        if (!closure_3(arg0)) {
          str = "string";
          if ("string" === typeof arg1) {
            tmp3 = closure_3;
            str = arg1;
            if (!closure_3(arg1)) {
              tmp4 = globalThis;
              _TypeError = TypeError;
              _HermesInternal = HermesInternal;
              str2 = "Invalid base URL: ";
              prototype = TypeError.prototype;
              tmp5 = new.target;
              tmp6 = new.target;
              typeError = new TypeError("Invalid base URL: " + arg1);
              tmp8 = typeError;
              throw typeError;
            }
          } else {
            str = arg1.toString();
          }
          str3 = "/";
          tmp9 = str;
          substr = str;
          if (str.endsWith("/")) {
            num = 1;
            num2 = 0;
            substr = str.slice(0, str.length - 1);
          }
          combined = arg0;
          if (!arg0.startsWith("/")) {
            tmp11 = globalThis;
            _HermesInternal2 = HermesInternal;
            combined = "/" + arg0;
          }
          str4 = combined;
          if (substr.endsWith(combined)) {
            str4 = "";
          }
          tmp12 = globalThis;
          _HermesInternal3 = HermesInternal;
          str5 = "";
          self._url = "" + substr + str4;
        }
        return;
      }
      self._url = arg0;
      _url = self._url;
      if (_url.includes("#")) {
        str6 = self._url;
        parts = str6.split("#");
        num3 = 0;
        str7 = parts[0];
        str8 = "://";
        num4 = 1;
        obj3 = str7.split("://")[1];
        str9 = "/";
        if (!obj3.includes("/")) {
          str10 = "/#";
          self._url = parts.join("/#");
        }
      }
      _url2 = self._url;
      endsWithResult = _url2.endsWith("/");
      if (!endsWithResult) {
        _url3 = self._url;
        str11 = "?";
        endsWithResult = _url3.includes("?");
      }
      if (!endsWithResult) {
        _url4 = self._url;
        endsWithResult = _url4.includes("#");
      }
      if (!endsWithResult) {
        self._url = `${self._url}/`;
      }
      return;
    }
  }
  let closure_0 = URL;
  let obj = {
    key: "hash",
    get() {
      const match = this._url.match(/#([^/]*)/);
      let str2 = "";
      if (match) {
        const _HermesInternal = HermesInternal;
        str2 = "#" + match[1];
      }
      return str2;
    }
  };
  const items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "host",
    get() {
      const match = this._url.match(/^https?:\/\/(?:[^@]+@)?([^:/?#]+)/);
      const match1 = this._url.match(/:(\d+)(?=[/?#]|$)/);
      let str3 = "";
      let str4 = "";
      if (match) {
        if (match1) {
          const _HermesInternal = HermesInternal;
          str3 = ":" + match1[1];
        }
        str4 = match[1] + str3;
      }
      return str4;
    }
  };
  items[1] = obj;
  obj = {
    key: "hostname",
    get() {
      const match = this._url.match(/^https?:\/\/(?:[^@]+@)?([^:/?#]+)/);
      let str2 = "";
      if (match) {
        str2 = match[1];
      }
      return str2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "href",
    get() {
      return this.toString();
    }
  };
  items[4] = {
    key: "origin",
    get() {
      const match = this._url.match(/^(https?:\/\/[^/]+)/);
      let str2 = "";
      if (match) {
        str2 = match[1];
      }
      return str2;
    }
  };
  items[5] = {
    key: "password",
    get() {
      const match = this._url.match(/https?:\/\/.*:(.*)@/);
      let str2 = "";
      if (match) {
        str2 = match[1];
      }
      return str2;
    }
  };
  items[6] = {
    key: "pathname",
    get() {
      const match = this._url.match(/https?:\/\/[^/]+(\/[^?#]*)?/);
      let str2 = match;
      if (match) {
        str2 = match[1];
      }
      if (!str2) {
        str2 = "/";
      }
      return str2;
    }
  };
  items[7] = {
    key: "port",
    get() {
      const match = this._url.match(/:(\d+)(?=[/?#]|$)/);
      let str2 = "";
      if (match) {
        str2 = match[1];
      }
      return str2;
    }
  };
  items[8] = {
    key: "protocol",
    get() {
      const match = this._url.match(/^([a-zA-Z][a-zA-Z\d+\-.]*):/);
      let str2 = "";
      if (match) {
        str2 = `${tmp[1]}:`;
      }
      return str2;
    }
  };
  items[9] = {
    key: "search",
    get() {
      const match = this._url.match(/\?([^#]*)/);
      let str2 = "";
      if (match) {
        const _HermesInternal = HermesInternal;
        str2 = "?" + match[1];
      }
      return str2;
    }
  };
  items[10] = {
    key: "searchParams",
    get() {
      const self = this;
      if (null == this._searchParamsInstance) {
        const _URLSearchParams = URLSearchParams;
        const uRLSearchParams = new URLSearchParams(self.search);
        self._searchParamsInstance = uRLSearchParams;
      }
      return self._searchParamsInstance;
    }
  };
  items[11] = {
    key: "toJSON",
    value: function toJSON() {
      return this.toString();
    }
  };
  items[12] = {
    key: "toString",
    value: function toString() {
      let _searchParamsInstance;
      let _url;
      const self = this;
      if (null === this._searchParamsInstance) {
        return self._url;
      } else {
        ({ _searchParamsInstance, _url } = self);
        let str = "?";
        str = _searchParamsInstance.toString();
        if (_url.indexOf("?") > -1) {
          str = "&";
        }
        return self._url + str + str;
      }
    }
  };
  items[13] = {
    key: "username",
    get() {
      const match = this._url.match(/^https?:\/\/([^:@]+)(?::[^@]*)?@/);
      let str2 = "";
      if (match) {
        str2 = match[1];
      }
      return str2;
    }
  };
  const items1 = [
    {
      key: "createObjectURL",
      value: function createObjectURL(data) {
        if (null === closure_2) {
          const _Error = Error;
          const error = new Error("Cannot create URL for blob!");
          throw error;
        } else {
          const _HermesInternal = HermesInternal;
          return "" + closure_2 + data.data.blobId + "?offset=" + data.data.offset + "&size=" + data.size;
        }
      }
    },
    {
      key: "revokeObjectURL",
      value: function revokeObjectURL(arg0) {

      }
    }
  ];
  return callback(URL, items, items1);
}();
