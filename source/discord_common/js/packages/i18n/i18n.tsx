// Module ID: 15953
// Function ID: 123268
// Name: _callSuper
// Dependencies: [15, 17, 18, 6, 7, 15954, 15963, 15964, 15965, 15966, 15967, 15968, 15969, 15970, 15971, 15972, 15973, 15974, 15975, 15976, 15977, 15978, 15979, 15980, 15981, 15982, 15983, 15984, 15985, 15986, 15987, 15988, 15989, 15990, 15991, 15995, 15999, 642, 631, 2]

// Module 15953 (_callSuper)
import closure_2 from "module_15972";
import closure_3 from "module_15974";
import closure_4 from "module_15975";
import closure_5 from "module_15963";
import closure_6 from "module_15964";
import module_15963 from "module_15963";
import module_15964 from "module_15964";
import module_15965 from "module_15965";
import module_15966 from "module_15966";
import module_15967 from "module_15967";
import module_15968 from "module_15968";
import module_15969 from "module_15969";
import module_15970 from "module_15970";
import module_15971 from "module_15971";
import module_15972 from "module_15972";
import module_15973 from "module_15973";
import module_15974 from "module_15974";
import module_15975 from "module_15975";
import module_15976 from "module_15976";
import module_15977 from "module_15977";
import module_15978 from "module_15978";
import module_15979 from "module_15979";
import module_15980 from "module_15980";
import pluralRuleFunction from "pluralRuleFunction";
import module_15982 from "module_15982";
import module_15983 from "module_15983";
import module_15984 from "module_15984";
import module_15985 from "module_15985";
import module_15986 from "module_15986";
import module_15987 from "module_15987";
import module_15988 from "module_15988";
import module_15989 from "module_15989";
import module_15990 from "module_15990";

const require = arg1;
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_2(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
global.IntlMessageFormat = require("module_15954");
delete tmp.IntlMessageFormat;
if ("undefined" === typeof Intl) {
  require("_default2");
}
let c7 = "en-US";
const tmp32 = (() => {
  class Provider {
    constructor(arg0) {
      tmp = outer1_5(this, Provider);
      obj = { messages: {}, defaultMessages: {}, locale: outer1_7 };
      this._context = obj;
      this._parsedMessages = {};
      this._getParsedMessages = arg0;
      return;
    }
  }
  const items = [
    {
      key: "getMessages",
      value() {
        return this._parsedMessages;
      }
    }
  ];
  return callback3(Provider, items);
})();
let closure_8 = ((arg0) => {
  class LazyPropertyProvider {
    constructor(arg0) {
      items = [...arguments];
      tmp = outer1_5(this, LazyPropertyProvider);
      items1 = [...items];
      tmp2 = outer1_10(this, LazyPropertyProvider, items1);
      LazyPropertyProvider = tmp2;
      tmp2._refresh = (defaultMessages) => {
        let obj = arg1;
        let closure_0 = defaultMessages;
        if (arg1 === undefined) {
          obj = {};
        }
        const keys = Object.keys(defaultMessages.defaultMessages);
        const item = keys.forEach((arg0) => {
          let closure_0 = arg0;
          const obj = {
            configurable: true,
            get() {
              delete tmp2[tmp];
              const _getParsedMessagesResult = closure_0._getParsedMessages(closure_0, closure_0, closure_0._refresh);
              outer1_1[closure_0] = _getParsedMessagesResult;
              return _getParsedMessagesResult;
            }
          };
          Object.defineProperty(obj, arg0, obj);
        });
        return obj;
      };
      return tmp2;
    }
  }
  callback2(LazyPropertyProvider, arg0);
  let items = [
    {
      key: "refresh",
      value(_context) {
        this._context = _context;
        this._refresh(_context, this._parsedMessages);
      }
    }
  ];
  return callback3(LazyPropertyProvider, items);
})(tmp32);
let closure_9 = ((arg0) => {
  class ProxyProvider {
    constructor(arg0) {
      tmp = outer1_5(this, ProxyProvider);
      items = [];
      items[0] = arg0;
      obj = outer1_10(this, ProxyProvider, items);
      ProxyProvider = obj;
      obj._createProxy = () => {
        let _context = arg0;
        if (arg0 === undefined) {
          _context = _context._context;
        }
        const proxy = new Proxy({}, {
          get(arg0, arg1) {
            let tmp = arg0[arg1];
            if (!tmp) {
              const _getParsedMessagesResult = _context._getParsedMessages(_context, arg1, _context._createProxy);
              arg0[arg1] = _getParsedMessagesResult;
              tmp = _getParsedMessagesResult;
            }
            return tmp;
          }
        });
        return proxy;
      };
      obj._parsedMessages = obj._createProxy(obj._context);
      return obj;
    }
  }
  callback2(ProxyProvider, arg0);
  let items = [
    {
      key: "refresh",
      value(arg0) {
        const self = this;
        const merged = Object.assign(this._context, arg0);
        const keys = Object.keys(this._parsedMessages);
        const item = keys.forEach((arg0) => {
          delete tmp2[tmp];
        });
      }
    }
  ];
  return callback3(ProxyProvider, items);
})(tmp32);
const tmp33 = ((EventEmitter) => {
  class I18N {
    constructor(arg0) {
      initialLocale = EventEmitter.initialLocale;
      ({ getMessages, getLanguages } = EventEmitter);
      tmp = outer1_5(this, I18N);
      obj = outer1_10(this, I18N);
      obj2 = obj;
      I18N = obj;
      obj.loadPromise = Promise.resolve();
      obj.resolveLanguageLoaded = () => {

      };
      obj._languages = [];
      obj._chosenLocale = "";
      obj._getParsedMessages = (arg0, arg1, arg2) => {
        let defaultMessages;
        let locale;
        ({ defaultMessages, locale } = arg0);
        let tmp2 = arg0.messages[arg1];
        if (!tmp2) {
          tmp2 = defaultMessages[tmp];
        }
        if ("object" === typeof tmp2) {
          let obj = { messages: tmp2, defaultMessages: defaultMessages[arg1], locale };
          return arg2(obj);
        } else {
          obj = I18N(outer2_1[35]);
          return obj.getMessage(tmp5, locale);
        }
      };
      obj._handleNewListener = (arg0) => {
        if ("locale" === arg0) {
          obj.emit(arg0, obj._chosenLocale);
        }
      };
      promise = new Promise((resolveLanguageLoaded) => {
        obj.resolveLanguageLoaded = resolveLanguageLoaded;
      });
      obj.initialLanguageLoad = promise;
      if (Intl.__addLocaleData) {
        _Intl = Intl;
        tmp3 = I18N;
        tmp4 = outer1_1;
        num = 36;
        __addLocaleDataResult = Intl.__addLocaleData(I18N(outer1_1[36]));
      }
      obj2._languages = getLanguages();
      if (null != window.Proxy) {
        tmp11 = outer1_9;
        tmp12 = obj;
        prototype2 = outer1_9.prototype;
        tmp13 = new.target;
        tmp14 = new.target;
        tmp10 = new outer1_9(obj2._getParsedMessages);
      } else {
        tmp6 = outer1_8;
        tmp7 = obj;
        prototype = outer1_8.prototype;
        tmp8 = new.target;
        tmp9 = new.target;
        tmp10 = new outer1_8(obj2._getParsedMessages);
      }
      obj2._provider = tmp10;
      _provider = obj2._provider;
      obj2.Messages = _provider.getMessages();
      obj2._getMessages = getMessages;
      numberFormat = new Intl.NumberFormat(initialLocale, {});
      defaultLocale = initialLocale;
      if (!initialLocale) {
        tmp17 = obj;
        defaultLocale = obj2.getDefaultLocale();
      }
      setLocaleResult = obj2.setLocale(defaultLocale);
      onResult = obj.on("newListener", obj._handleNewListener);
      return;
    }
  }
  callback2(I18N, EventEmitter);
  let obj = {
    key: "updateMessagesForExperiment",
    value(arg0, arg1) {
      let self = this;
      self = this;
      let closure_1 = arg0;
      let closure_2 = arg1;
      const _fetchMessagesResult = this._fetchMessages(arg0);
      if (_fetchMessagesResult instanceof Promise) {
        _fetchMessagesResult.then((arg0) => {
          const result = self._applyMessagesForLocale(callback(arg0), closure_1);
        });
      } else {
        let result = self._applyMessagesForLocale(arg1(_fetchMessagesResult), arg0);
      }
    }
  };
  const items = [obj, , , , , , , , , , , ];
  obj = {
    key: "setLocale",
    value(_requestedLocale) {
      const self = this;
      if (this._chosenLocale !== _requestedLocale) {
        self._requestedLocale = _requestedLocale;
        self._chosenLocale = _requestedLocale;
        self.loadPromise = self._loadMessagesForLocale(_requestedLocale);
        self.emit("locale", self._chosenLocale, self._chosenLocale);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "setUpdateRules",
    value(arg0) {
      I18N(outer1_1[35]).setUpdateRules(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLanguages",
    value() {
      return this._languages;
    }
  };
  items[4] = {
    key: "getAvailableLocales",
    value() {
      const self = this;
      const _languages = this._languages;
      const found = _languages.filter((enabled) => enabled.enabled);
      const mapped = found.map((arg0) => {
        let code;
        let name;
        ({ code, name } = arg0);
        const obj = { value: code, name };
        if (null != self.Messages[code]) {
          name = tmp;
        }
        obj.localizedName = name;
        return obj;
      });
      return mapped.sort((name, name2) => {
        const formatted = name.name.toLowerCase();
        const formatted1 = name2.name.toLowerCase();
        let num = -1;
        if (formatted >= formatted1) {
          let num2 = 0;
          if (formatted > formatted1) {
            num2 = 1;
          }
          num = num2;
        }
        return num;
      });
    }
  };
  items[5] = {
    key: "getLocale",
    value() {
      return this._chosenLocale;
    }
  };
  items[6] = {
    key: "getLocaleInfo",
    value() {
      const self = this;
      const _languages = this._languages;
      return _languages.find((code) => code.code === self._chosenLocale);
    }
  };
  items[7] = {
    key: "getDefaultLocale",
    value() {
      let str = I18N(outer1_1[37]).getSystemLocale();
      if (null == str) {
        str = outer1_7;
      }
      const _languages = this._languages;
      const found = _languages.filter((enabled) => enabled.enabled);
      const mapped = found.map((code) => code.code);
      if (mapped.includes(str)) {
        return str;
      } else {
        const parts = str.split("-");
        const first = parts[0];
        if (mapped.includes(parts[0])) {
          let found2 = first;
        } else {
          if ("zh" === first) {
            if (parts.length > 1) {
              if ("Hant" === parts[1]) {
                let found1 = mapped.find((arg0) => "zh-TW" === arg0);
                if (null == found1) {
                  found1 = outer1_7;
                }
                found2 = found1;
              }
            }
          }
          found2 = mapped.find((arg0) => arg0.split("-")[0] === parts[0]);
          if (null == found2) {
            found2 = outer1_7;
          }
        }
        return found2;
      }
      const obj = I18N(outer1_1[37]);
    }
  };
  items[8] = {
    key: "_loadMessagesForLocale",
    value(arg0) {
      let self = this;
      self = this;
      let closure_1 = arg0;
      const _fetchMessagesResult = this._fetchMessages(arg0);
      if (_fetchMessagesResult instanceof Promise) {
        let nextPromise = _fetchMessagesResult.then((arg0) => self._applyMessagesForLocale(arg0, closure_1));
      } else {
        const result = self._applyMessagesForLocale(_fetchMessagesResult, arg0);
        nextPromise = Promise.resolve();
      }
      return nextPromise;
    }
  };
  items[9] = {
    key: "_applyMessagesForLocale",
    value(messages, locale) {
      let _findMessagesResult = arg2;
      const self = this;
      if (arg2 === undefined) {
        _findMessagesResult = self._findMessages(outer1_7);
      }
      if (self._requestedLocale === locale) {
        const _provider = self._provider;
        const obj = { messages, defaultMessages: _findMessagesResult, locale };
        _provider.refresh(obj);
        const languageLoaded = self.resolveLanguageLoaded();
      }
    }
  };
  items[10] = {
    key: "_findMessages",
    value(arg0) {
      const _fetchMessagesResult = this._fetchMessages(arg0);
      if (_fetchMessagesResult instanceof Promise) {
        const _Error = Error;
        const error = new Error("Messages are still loading.");
        throw error;
      } else {
        return _fetchMessagesResult;
      }
    }
  };
  items[11] = {
    key: "_fetchMessages",
    value(arg0) {
      let self = this;
      self = this;
      let closure_1 = arg0;
      const tmp = arg0 === outer1_7 ? (() => {
        const error = new Error("Error Loading " + outer2_7);
        throw error;
      }) : (() => {
        if (-1 === closure_1.indexOf("-")) {
          let _fetchMessagesResult = self._fetchMessages(outer2_7);
        } else {
          _fetchMessagesResult = self._fetchMessages(closure_1.split("-")[0]);
        }
        return _fetchMessagesResult;
      });
      const _getMessagesResult = self._getMessages(arg0);
      if (_getMessagesResult instanceof Promise) {
        let catchPromise = promise.catch(tmp);
      } else {
        catchPromise = promise;
      }
      return catchPromise;
    }
  };
  return callback3(I18N, items);
})(require("EventEmitter").EventEmitter);
let result = require("_inherits").fileFinishedImporting("../discord_common/js/packages/i18n/i18n.tsx");

export const getSystemLocale = require("getSystemLocale").getSystemLocale;
export const I18N = tmp33;
