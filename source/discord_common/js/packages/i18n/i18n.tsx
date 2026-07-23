// Module ID: 15906
// Function ID: 122946
// Name: _callSuper
// Dependencies: [15, 17, 18, 6, 7, 15907, 15916, 15917, 15918, 15919, 15920, 15921, 15922, 15923, 15924, 15925, 15926, 15927, 15928, 15929, 15930, 15931, 15932, 15933, 15934, 15935, 15936, 15937, 15938, 15939, 15940, 15941, 15942, 15943, 15944, 15948, 15952, 642, 631, 2]

// Module 15906 (_callSuper)
import closure_2 from "module_15925";
import closure_3 from "module_15927";
import closure_4 from "module_15928";
import closure_5 from "module_15916";
import closure_6 from "module_15917";
import module_15916 from "module_15916";
import module_15917 from "module_15917";
import module_15918 from "module_15918";
import module_15919 from "module_15919";
import module_15920 from "module_15920";
import module_15921 from "module_15921";
import module_15922 from "module_15922";
import module_15923 from "module_15923";
import module_15924 from "module_15924";
import module_15925 from "module_15925";
import module_15926 from "module_15926";
import module_15927 from "module_15927";
import module_15928 from "module_15928";
import module_15929 from "module_15929";
import module_15930 from "module_15930";
import module_15931 from "module_15931";
import module_15932 from "module_15932";
import module_15933 from "module_15933";
import pluralRuleFunction from "pluralRuleFunction";
import module_15935 from "module_15935";
import module_15936 from "module_15936";
import module_15937 from "module_15937";
import module_15938 from "module_15938";
import module_15939 from "module_15939";
import module_15940 from "module_15940";
import module_15941 from "module_15941";
import module_15942 from "module_15942";
import module_15943 from "module_15943";

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
global.IntlMessageFormat = require("module_15907");
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
