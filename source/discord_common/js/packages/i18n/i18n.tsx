// Module ID: 15781
// Function ID: 120730
// Name: _callSuper
// Dependencies: []

// Module 15781 (_callSuper)
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
global.IntlMessageFormat = importDefault(dependencyMap[5]);
arg1(dependencyMap[6]);
arg1(dependencyMap[7]);
arg1(dependencyMap[8]);
arg1(dependencyMap[9]);
arg1(dependencyMap[10]);
arg1(dependencyMap[11]);
arg1(dependencyMap[12]);
arg1(dependencyMap[13]);
arg1(dependencyMap[14]);
arg1(dependencyMap[15]);
arg1(dependencyMap[16]);
arg1(dependencyMap[17]);
arg1(dependencyMap[18]);
arg1(dependencyMap[19]);
arg1(dependencyMap[20]);
arg1(dependencyMap[21]);
arg1(dependencyMap[22]);
arg1(dependencyMap[23]);
arg1(dependencyMap[24]);
arg1(dependencyMap[25]);
arg1(dependencyMap[26]);
arg1(dependencyMap[27]);
arg1(dependencyMap[28]);
arg1(dependencyMap[29]);
arg1(dependencyMap[30]);
arg1(dependencyMap[31]);
arg1(dependencyMap[32]);
arg1(dependencyMap[33]);
delete r6.IntlMessageFormat;
if ("undefined" === typeof Intl) {
  arg1(dependencyMap[34]);
}
let closure_7 = "en-US";
const tmp31 = () => {
  class Provider {
    constructor(arg0) {
      tmp = closure_5(this, Provider);
      obj = { messages: {}, defaultMessages: {}, locale: closure_7 };
      this._context = obj;
      this._parsedMessages = {};
      this._getParsedMessages = arg0;
      return;
    }
  }
  const arg1 = Provider;
  const items = [
    {
      key: "getMessages",
      value() {
        return this._parsedMessages;
      }
    }
  ];
  return callback3(Provider, items);
}();
let closure_8 = (arg0) => {
  class LazyPropertyProvider {
    constructor(arg0) {
      items = [...arguments];
      tmp = closure_5(this, LazyPropertyProvider);
      items1 = [...items];
      tmp2 = closure_10(this, LazyPropertyProvider, items1);
      LazyPropertyProvider = tmp2;
      tmp2._refresh = (defaultMessages) => {
        let obj = arg1;
        if (arg1 === undefined) {
          obj = {};
        }
        const keys = Object.keys(defaultMessages.defaultMessages);
        const item = keys.forEach((arg0) => {
          const obj = {
            configurable: true,
            get(self) {
              delete r2[r1];
              const _getParsedMessagesResult = self._getParsedMessages(self, self, self._refresh);
              closure_1[self] = _getParsedMessagesResult;
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
  const arg1 = LazyPropertyProvider;
  callback2(LazyPropertyProvider, arg0);
  const items = [
    {
      key: "refresh",
      value(_context) {
        this._context = _context;
        this._refresh(_context, this._parsedMessages);
      }
    }
  ];
  return callback3(LazyPropertyProvider, items);
}(tmp31);
let closure_9 = (arg0) => {
  class ProxyProvider {
    constructor(arg0) {
      tmp = closure_5(this, ProxyProvider);
      items = [];
      items[0] = arg0;
      obj = closure_10(this, ProxyProvider, items);
      ProxyProvider = obj;
      obj._createProxy = () => {
        let _context = arg0;
        if (arg0 === undefined) {
          _context = obj._context;
        }
        let obj = _context;
        obj = {
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
      obj._parsedMessages = obj._createProxy(obj._context);
      return obj;
    }
  }
  const arg1 = ProxyProvider;
  callback2(ProxyProvider, arg0);
  const items = [
    {
      key: "refresh",
      value(arg0) {
        const ProxyProvider = this;
        const merged = Object.assign(this._context, arg0);
        const keys = Object.keys(this._parsedMessages);
        const item = keys.forEach((arg0) => {
          delete r1[r0];
        });
      }
    }
  ];
  return callback3(ProxyProvider, items);
}(tmp31);
const tmp32 = (EventEmitter) => {
  class I18N {
    constructor(arg0) {
      initialLocale = EventEmitter.initialLocale;
      ({ getMessages, getLanguages } = EventEmitter);
      tmp = closure_5(this, I18N);
      obj = closure_10(this, I18N);
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
          obj = obj(closure_1[35]);
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
        tmp4 = closure_1;
        num = 36;
        __addLocaleDataResult = Intl.__addLocaleData(I18N(closure_1[36]));
      }
      obj2._languages = getLanguages();
      if (null != window.Proxy) {
        tmp11 = closure_9;
        tmp12 = obj;
        prototype2 = closure_9.prototype;
        tmp13 = new.target;
        tmp14 = new.target;
        tmp10 = new closure_9(obj2._getParsedMessages);
      } else {
        tmp6 = closure_8;
        tmp7 = obj;
        prototype = closure_8.prototype;
        tmp8 = new.target;
        tmp9 = new.target;
        tmp10 = new closure_8(obj2._getParsedMessages);
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
  const arg1 = I18N;
  callback2(I18N, EventEmitter);
  let obj = {
    key: "updateMessagesForExperiment",
    value(arg0, arg1) {
      const self = this;
      const I18N = this;
      const _fetchMessagesResult = this._fetchMessages(arg0);
      if (_fetchMessagesResult instanceof Promise) {
        _fetchMessagesResult.then((arg0) => {
          const result = self._applyMessagesForLocale(arg1(arg0), arg0);
        });
      } else {
        const result = self._applyMessagesForLocale(arg1(_fetchMessagesResult), arg0);
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
      I18N(closure_1[35]).setUpdateRules(arg0);
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
      const I18N = this;
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
      const I18N = this;
      const _languages = this._languages;
      return _languages.find((code) => code.code === self._chosenLocale);
    }
  };
  items[7] = {
    key: "getDefaultLocale",
    value() {
      let str = I18N(closure_1[37]).getSystemLocale();
      if (null == str) {
        str = closure_7;
      }
      const _languages = this._languages;
      const found = _languages.filter((enabled) => enabled.enabled);
      const mapped = found.map((code) => code.code);
      if (mapped.includes(str)) {
        return str;
      } else {
        const parts = str.split("-");
        const I18N = parts;
        const first = parts[0];
        if (mapped.includes(parts[0])) {
          let found2 = first;
        } else {
          if ("zh" === first) {
            if (parts.length > 1) {
              if ("Hant" === parts[1]) {
                let found1 = mapped.find((arg0) => "zh-TW" === arg0);
                if (null == found1) {
                  found1 = closure_7;
                }
                found2 = found1;
              }
            }
          }
          found2 = mapped.find((arg0) => arg0.split("-")[0] === parts[0]);
          if (null == found2) {
            found2 = closure_7;
          }
        }
        return found2;
      }
      const obj = I18N(closure_1[37]);
    }
  };
  items[8] = {
    key: "_loadMessagesForLocale",
    value(arg0) {
      const self = this;
      const I18N = this;
      const _fetchMessagesResult = this._fetchMessages(arg0);
      if (_fetchMessagesResult instanceof Promise) {
        let nextPromise = _fetchMessagesResult.then((arg0) => self._applyMessagesForLocale(arg0, arg0));
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
        _findMessagesResult = self._findMessages(closure_7);
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
      const self = this;
      const I18N = this;
      const tmp = arg0 === closure_7 ? () => {
        const error = new Error("Error Loading " + closure_7);
        throw error;
      } : () => {
        if (-1 === arg0.indexOf("-")) {
          let _fetchMessagesResult = self._fetchMessages(closure_7);
        } else {
          _fetchMessagesResult = self._fetchMessages(arg0.split("-")[0]);
        }
        return _fetchMessagesResult;
      };
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
}(arg1(dependencyMap[38]).EventEmitter);
const result = arg1(dependencyMap[39]).fileFinishedImporting("../discord_common/js/packages/i18n/i18n.tsx");

export const getSystemLocale = arg1(dependencyMap[37]).getSystemLocale;
export const I18N = tmp32;
