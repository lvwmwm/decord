// Module ID: 13359
// Function ID: 102185
// Name: URLImpl
// Dependencies: [6, 7, 13360, 13364, 13363]

// Module 13359 (URLImpl)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";


export const implementation = (() => {
  class URLImpl {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_2(this, URLImpl);
      first = arg1[0];
      tmp3 = arg1[1];
      basicURLParseResult = null;
      if (undefined !== tmp3) {
        tmp5 = URLImpl;
        tmp6 = outer1_1;
        num = 2;
        obj = URLImpl(outer1_1[2]);
        basicURLParseResult = obj.basicURLParse(tmp3);
        if (null === basicURLParseResult) {
          tmp16 = globalThis;
          _TypeError2 = TypeError;
          _HermesInternal2 = HermesInternal;
          str3 = "Invalid base URL: ";
          prototype2 = TypeError.prototype;
          tmp17 = new.target;
          tmp18 = new.target;
          typeError = new TypeError("Invalid base URL: " + tmp3);
          tmp20 = typeError;
          throw typeError;
        }
      }
      obj2 = URLImpl(outer1_1[2]);
      obj = {};
      obj.baseURL = basicURLParseResult;
      basicURLParseResult1 = obj2.basicURLParse(first, obj);
      if (null === basicURLParseResult1) {
        tmp11 = globalThis;
        _TypeError = TypeError;
        _HermesInternal = HermesInternal;
        str2 = "Invalid URL: ";
        prototype = TypeError.prototype;
        tmp12 = new.target;
        tmp13 = new.target;
        typeError1 = new TypeError("Invalid URL: " + first);
        tmp15 = typeError1;
        throw typeError1;
      } else {
        str = "";
        if (null !== basicURLParseResult1.query) {
          str = basicURLParseResult1.query;
        }
        self._url = basicURLParseResult1;
        tmp8 = URLImpl;
        tmp9 = outer1_1;
        num2 = 3;
        obj4 = URLImpl(outer1_1[3]);
        items = [];
        items[0] = str;
        obj1 = {};
        flag = true;
        obj1.doNotStripQMark = true;
        tmp10 = arg0;
        self._query = obj4.createImpl(arg0, items, obj1);
        self._query._url = self;
        return;
      }
    }
  }
  let obj = {
    key: "href",
    get() {
      return URLImpl(outer1_1[2]).serializeURL(this._url);
    },
    set(arg0) {
      const self = this;
      const basicURLParseResult = URLImpl(outer1_1[2]).basicURLParse(arg0);
      if (null === basicURLParseResult) {
        const _TypeError = TypeError;
        const _HermesInternal = HermesInternal;
        const typeError = new TypeError("Invalid URL: " + arg0);
        throw typeError;
      } else {
        self._url = basicURLParseResult;
        const _list = self._query._list;
        _list.splice(0);
        const query = basicURLParseResult.query;
        if (null !== query) {
          self._query._list = URLImpl(outer1_1[4]).parseUrlencoded(query);
          const obj2 = URLImpl(outer1_1[4]);
        }
      }
      const obj = URLImpl(outer1_1[2]);
    }
  };
  let items = [obj, , , , , , , , , , , , ];
  obj = {
    key: "origin",
    get() {
      return URLImpl(outer1_1[2]).serializeURLOrigin(this._url);
    }
  };
  items[1] = obj;
  obj = {
    key: "protocol",
    get() {
      return this._url.scheme + ":";
    },
    set(arg0) {
      let obj = URLImpl(outer1_1[2]);
      obj = { url: this._url, stateOverride: "scheme start" };
      obj.basicURLParse(`${arg0}:`, obj);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "username",
    get() {
      return this._url.username;
    },
    set(arg0) {
      if (!obj.cannotHaveAUsernamePasswordPort(this._url)) {
        URLImpl(outer1_1[2]).setTheUsername(this._url, arg0);
        const obj2 = URLImpl(outer1_1[2]);
      }
    }
  };
  items[4] = {
    key: "password",
    get() {
      return this._url.password;
    },
    set(arg0) {
      if (!obj.cannotHaveAUsernamePasswordPort(this._url)) {
        URLImpl(outer1_1[2]).setThePassword(this._url, arg0);
        const obj2 = URLImpl(outer1_1[2]);
      }
    }
  };
  items[5] = {
    key: "host",
    get() {
      let host = this._url;
      if (null === host.host) {
        return "";
      } else if (null === host.port) {
        host = host.host;
        let serializeHostResult = URLImpl(outer1_1[2]).serializeHost(host);
        const obj3 = URLImpl(outer1_1[2]);
      } else {
        const obj = URLImpl(outer1_1[2]);
        const text = `${obj.serializeHost(host.host)}:`;
        serializeHostResult = `${obj.serializeHost(host.host)}:${URLImpl(outer1_1[2]).serializeInteger(host.port)}`;
        const obj2 = URLImpl(outer1_1[2]);
      }
    },
    set(arg0) {
      if (!this._url.cannotBeABaseURL) {
        let obj = URLImpl(outer1_1[2]);
        obj = { url: tmp._url, stateOverride: "host" };
        obj.basicURLParse(arg0, obj);
      }
    }
  };
  items[6] = {
    key: "hostname",
    get() {
      let str = "";
      if (null !== this._url.host) {
        str = URLImpl(outer1_1[2]).serializeHost(tmp._url.host);
        const obj = URLImpl(outer1_1[2]);
      }
      return str;
    },
    set(arg0) {
      if (!this._url.cannotBeABaseURL) {
        let obj = URLImpl(outer1_1[2]);
        obj = { url: tmp._url, stateOverride: "hostname" };
        obj.basicURLParse(arg0, obj);
      }
    }
  };
  items[7] = {
    key: "port",
    get() {
      let str = "";
      if (null !== this._url.port) {
        str = URLImpl(outer1_1[2]).serializeInteger(tmp._url.port);
        const obj = URLImpl(outer1_1[2]);
      }
      return str;
    },
    set(arg0) {
      const self = this;
      let obj = URLImpl(outer1_1[2]);
      if (!obj.cannotHaveAUsernamePasswordPort(this._url)) {
        if ("" === arg0) {
          self._url.port = null;
        } else {
          obj = { url: self._url, stateOverride: "port" };
          URLImpl(outer1_1[2]).basicURLParse(arg0, obj);
          const obj2 = URLImpl(outer1_1[2]);
        }
      }
    }
  };
  items[8] = {
    key: "pathname",
    get() {
      let path = this._url.path;
      if (this._url.cannotBeABaseURL) {
        let str = path[0];
      } else {
        str = "";
        if (0 !== path.length) {
          path = tmp._url.path;
          str = `/${path.join("/")}`;
        }
      }
      return str;
    },
    set(arg0) {
      const self = this;
      if (!this._url.cannotBeABaseURL) {
        self._url.path = [];
        let obj = URLImpl(outer1_1[2]);
        obj = { url: self._url, stateOverride: "path start" };
        obj.basicURLParse(arg0, obj);
      }
    }
  };
  items[9] = {
    key: "search",
    get() {
      const self = this;
      let str = "";
      if (null !== this._url.query) {
        str = "";
        if ("" !== self._url.query) {
          str = `?${self._url.query}`;
        }
      }
      return str;
    },
    set(first) {
      const self = this;
      const _url = this._url;
      if ("" === first) {
        _url.query = null;
        self._query._list = [];
      } else {
        let substr = first;
        if ("?" === first[0]) {
          substr = first.substring(1);
        }
        _url.query = "";
        let obj = URLImpl(outer1_1[2]);
        obj = { url: _url, stateOverride: "query" };
        obj.basicURLParse(substr, obj);
        self._query._list = URLImpl(outer1_1[4]).parseUrlencoded(substr);
      }
    }
  };
  items[10] = {
    key: "searchParams",
    get() {
      return this._query;
    }
  };
  items[11] = {
    key: "hash",
    get() {
      const self = this;
      let str = "";
      if (null !== this._url.fragment) {
        str = "";
        if ("" !== self._url.fragment) {
          str = `#${self._url.fragment}`;
        }
      }
      return str;
    },
    set(str) {
      const self = this;
      if ("" !== str) {
        let substr = str;
        if ("#" === str[0]) {
          substr = str.substring(1);
        }
        self._url.fragment = "";
        let obj = URLImpl(outer1_1[2]);
        obj = { url: self._url, stateOverride: "fragment" };
        obj.basicURLParse(substr, obj);
      } else {
        self._url.fragment = null;
      }
    }
  };
  items[12] = {
    key: "toJSON",
    value: function toJSON() {
      return this.href;
    }
  };
  return _defineProperties(URLImpl, items);
})();
