// Module ID: 2027
// Function ID: 2028
// Name: i18n
// Dependencies: [2028, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 568, 2065, 1348, 2]

// Module 2027 (i18n)
import _mod568 from "module_568" /* 568 */;
import react_native from "react-native" /* 1348 */;
import _modDef2028 from "module_2028" /* 2028 */;
import parse from "parse" /* 2065 */;
import module_2037 from "module_2037" /* 2037 */;
import module_2038 from "module_2038" /* 2038 */;
import module_2039 from "module_2039" /* 2039 */;
import module_2040 from "module_2040" /* 2040 */;
import module_2041 from "module_2041" /* 2041 */;
import module_2042 from "module_2042" /* 2042 */;
import module_2043 from "module_2043" /* 2043 */;
import module_2044 from "module_2044" /* 2044 */;
import module_2045 from "module_2045" /* 2045 */;
import module_2046 from "module_2046" /* 2046 */;
import module_2047 from "module_2047" /* 2047 */;
import module_2048 from "module_2048" /* 2048 */;
import module_2049 from "module_2049" /* 2049 */;
import module_2050 from "module_2050" /* 2050 */;
import module_2051 from "module_2051" /* 2051 */;
import module_2052 from "module_2052" /* 2052 */;
import module_2053 from "module_2053" /* 2053 */;
import module_2054 from "module_2054" /* 2054 */;
import module_2055 from "module_2055" /* 2055 */;
import module_2056 from "module_2056" /* 2056 */;
import module_2057 from "module_2057" /* 2057 */;
import module_2058 from "module_2058" /* 2058 */;
import module_2059 from "module_2059" /* 2059 */;
import module_2060 from "module_2060" /* 2060 */;
import module_2061 from "module_2061" /* 2061 */;
import module_2062 from "module_2062" /* 2062 */;
import module_2063 from "module_2063" /* 2063 */;
import module_2064 from "module_2064" /* 2064 */;
import size from "module_2" /* 2 */;

let _instance_members_initializer_I18N_;

global.IntlMessageFormat = _modDef2028;
delete global["IntlMessageFormat"];
const React2 = "en-US";
class Provider {
  constructor(_getParsedMessages) {
    const merged = Object.assign({ _context: null, _parsedMessages: null });
    const obj = { messages: {}, defaultMessages: {}, locale };
    merged[0] = obj;
    merged[1] = {};
    merged._getParsedMessages = _getParsedMessages;
    return merged;
  }
  getMessages() {
    return this._parsedMessages;
  }
}
const prototype = Provider.prototype;
class LazyPropertyProvider extends Provider {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult._refresh = function _refresh(defaultMessages, _parsedMessages) {
      let closure_0 = defaultMessages;
      let obj = _parsedMessages;
      if (_parsedMessages === undefined) {
        obj = {};
      }
      const keys = Object.keys(defaultMessages.defaultMessages);
      const item = keys.forEach((item) => {
        let closure_0 = item;
        obj = {
          configurable: true,
          get() {
            delete obj[item];
            const _getParsedMessagesResult = applyArgumentsResult._getParsedMessages(item, item, applyArgumentsResult._refresh);
            obj[item] = _getParsedMessagesResult;
            return _getParsedMessagesResult;
          }
        };
        Object.defineProperty(obj, item, obj);
      });
      return obj;
    };
    return applyArgumentsResult;
  }
  refresh(_context) {
    this._context = _context;
    this._refresh(_context, this._parsedMessages);
  }
}
const prototype2 = LazyPropertyProvider.prototype;
class ProxyProvider extends Provider {
  constructor(_getParsedMessages) {
    let tmp;
    const tmp2 = new tmp(_getParsedMessages, new.target);
    let closure_0 = tmp2;
    tmp2._createProxy = function _createProxy(_context) {
      if (_context === undefined) {
        let tmp = _context;
        _context = _context._context;
      }
      const obj = {
        get(arg0, arg1) {
          let tmp = arg0[arg1];
          if (!tmp) {
            const _getParsedMessagesResult = _context._getParsedMessages(_context, arg1, _context._createProxy);
            arg0[arg1] = _getParsedMessagesResult;
            tmp = _getParsedMessagesResult;
          }
          return tmp;
        }
      };
      const proxy = new Proxy({}, obj);
      return proxy;
    };
    tmp2._parsedMessages = tmp2._createProxy(tmp2._context);
    return tmp2;
  }
  refresh(arg0) {
    const self = this;
    const merged = Object.assign(this._context, arg0);
    const keys = Object.keys(this._parsedMessages);
    const item = keys.forEach((item) => {
      delete self._parsedMessages[item];
    });
  }
}
const prototype3 = ProxyProvider.prototype;
const EventEmitter = _mod568.EventEmitter;
_instance_members_initializer_I18N_ = function() {
  const self = this;
  this.loadPromise = Promise.resolve();
  this.resolveLanguageLoaded = function resolveLanguageLoaded() {

  };
  this._languages = [];
  this._chosenLocale = "";
  this._getParsedMessages = function _getParsedMessages(_context, arg1, _createProxy) {
    let defaultMessages;
    ({ defaultMessages, locale } = _context);
    if (typeof _context.messages[arg1] || defaultMessages[arg1] === "object") {
      const obj3 = { messages: _context.messages[arg1] || defaultMessages[arg1], defaultMessages: defaultMessages[arg1], locale };
      return _createProxy(obj3);
    } else {
      try {
        const obj = self(dependencyMap[30]);
        return obj.getMessage(_context.messages[arg1] || defaultMessages[arg1], locale);
      } catch (err) {
        if (typeof defaultMessages[arg1] === "string") {
          const obj2 = self(dependencyMap[30]);
          return obj2.getMessage(defaultMessages[arg1], locale);
        } else {
          return "";
        }
      }
    }
  };
  this._handleNewListener = function _handleNewListener(arg0) {
    if ("locale" === arg0) {
      self.emit(arg0, self._chosenLocale);
    }
  };
};
class I18N extends EventEmitter {
  constructor(getMessages) {
    let getLanguages;
    let initialLocale;
    let tmp8;
    const f84315 = (resolveLanguageLoaded) => {
      obj.resolveLanguageLoaded = resolveLanguageLoaded;
    };
    ({ initialLocale, getLanguages } = getMessages);
    getMessages = getMessages.getMessages;
    const obj = new I18N(tmp4, tmp3, new.target, this, tmp2, tmp, getLanguages);
    _instance_members_initializer_I18N_();
    obj.initialLanguageLoad = new Promise(f84315);
    new Promise(f84315);
    obj._languages = getLanguages();
    if (null != window.Proxy) {
      const self2 = this;
      tmp8 = new ProxyProvider(obj._getParsedMessages);
    } else {
      const self = this;
      tmp8 = new LazyPropertyProvider(obj._getParsedMessages);
    }
    obj._provider = tmp8;
    const _provider = obj._provider;
    obj.Messages = _provider.getMessages();
    obj._getMessages = getMessages;
    try {
      const _Intl = Intl;
      const self3 = this;
      const numberFormat = new Intl.NumberFormat(initialLocale, {});
      const setLocale = obj.setLocale;
      if (!initialLocale) {
        initialLocale = obj.getDefaultLocale();
      }
      setLocale(initialLocale);
    } catch (err) {
      obj.setLocale(obj.getDefaultLocale());
    }
    obj.on("newListener", obj._handleNewListener);
    return obj;
  }
  updateMessagesForExperiment(c2, fn) {
    const self = this;
    let closure_1 = c2;
    let closure_0 = fn;
    const _fetchMessagesResult = this._fetchMessages(c2);
    if (_fetchMessagesResult instanceof Promise) {
      _fetchMessagesResult.then((result) => {
        result = self._applyMessagesForLocale(fn(result), closure_1);
      });
    } else {
      let result = self._applyMessagesForLocale(fn(_fetchMessagesResult), c2);
    }
  }
  setLocale(_requestedLocale) {
    const self = this;
    if (this._chosenLocale !== _requestedLocale) {
      self._requestedLocale = _requestedLocale;
      self._chosenLocale = _requestedLocale;
      const _chosenLocale = self._chosenLocale;
      self.loadPromise = self._loadMessagesForLocale(_requestedLocale);
      self.emit("locale", self._chosenLocale, _chosenLocale);
    }
  }
  setUpdateRules(arg0) {
    const obj = parse;
    obj.setUpdateRules(arg0);
  }
  getLanguages() {
    return this._languages;
  }
  getAvailableLocales() {
    const self = this;
    const _languages = this._languages;
    const found = _languages.filter((enabled) => enabled.enabled);
    const mapped = found.map((item) => {
      let code;
      let name;
      let tmp;
      ({ code, name } = item);
      const obj = { value: code, name, localizedName: tmp };
      tmp = self.Messages[code];
      if (tmp == null) {
        tmp = name;
      }
      return obj;
    });
    return mapped.sort((name, name2) => {
      const str = name.name;
      const str2 = name2.name;
      const formatted = str.toLowerCase();
      const formatted1 = str2.toLowerCase();
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
  getLocale() {
    return this._chosenLocale;
  }
  getLocaleInfo() {
    const self = this;
    const _languages = this._languages;
    return _languages.find((code) => code.code === self._chosenLocale);
  }
  getDefaultLocale() {
    const obj = react_native;
    let str = obj.getSystemLocale();
    if (str == null) {
      str = c2;
    }
    const _languages = this._languages;
    const found = _languages.filter((enabled) => enabled.enabled);
    const mapped = found.map((code) => code.code);
    if (mapped.includes(str)) {
      return str;
    } else {
      let found2;
      const parts = str.split("-");
      const first = parts[0];
      if (mapped.includes(parts[0])) {
        found2 = first;
      } else {
        if ("zh" === first) {
          if (parts.length > 1) {
            if ("Hant" === parts[1]) {
              let found1 = mapped.find((item) => "zh-TW" === item);
              if (found1 == null) {
                found1 = c2;
              }
              found2 = found1;
            }
          }
        }
        found2 = mapped.find((item) => item.split("-")[0] === parts[0]);
        if (found2 == null) {
          found2 = c2;
        }
      }
      return found2;
    }
  }
  _loadMessagesForLocale(_requestedLocale) {
    let nextPromise;
    const self = this;
    let closure_0 = _requestedLocale;
    const _fetchMessagesResult = this._fetchMessages(_requestedLocale);
    if (_fetchMessagesResult instanceof Promise) {
      nextPromise = _fetchMessagesResult.then((result) => self._applyMessagesForLocale(result, _requestedLocale));
    } else {
      const result = self._applyMessagesForLocale(_fetchMessagesResult, _requestedLocale);
      nextPromise = Promise.resolve();
    }
    return nextPromise;
  }
  _applyMessagesForLocale(_fetchMessagesResult, locale) {
    const self = this;
    let _findMessagesResult = arg2;
    if (arg2 === undefined) {
      _findMessagesResult = self._findMessages(c2);
    }
    if (self._requestedLocale === locale) {
      const _provider = self._provider;
      const obj = { messages: _fetchMessagesResult, defaultMessages: _findMessagesResult, locale };
      _provider.refresh(obj);
      const languageLoaded = self.resolveLanguageLoaded();
    }
  }
  _findMessages(c2) {
    const _fetchMessagesResult = this._fetchMessages(c2);
    if (_fetchMessagesResult instanceof Promise) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Messages are still loading.");
      throw error;
    } else {
      return _fetchMessagesResult;
    }
  }
  _fetchMessages(c2) {
    const self = this;
    let closure_0 = c2;
    const tmp = c2 === c2 ? (() => {
      const error = new Error("Error Loading " + locale);
      throw error;
    }) : (() => {
      let _fetchMessagesResult;
      const str = closure_0;
      if (-1 === closure_0.indexOf("-")) {
        _fetchMessagesResult = self._fetchMessages(c2);
      } else {
        _fetchMessagesResult = self._fetchMessages(str.split("-")[0]);
      }
      return _fetchMessagesResult;
    });
    try {
      let catchPromise;
      const _getMessagesResult = self._getMessages(c2);
      if (_getMessagesResult instanceof Promise) {
        catchPromise = promise.catch(tmp);
      } else {
        catchPromise = promise;
      }
      return catchPromise;
    } catch (err) {
      return tmp();
    }
  }
}
const prototype4 = I18N.prototype;
let result = size.fileFinishedImporting("../discord_common/js/packages/i18n/i18n.tsx");

export const getSystemLocale = react_native.getSystemLocale;
export { I18N };
