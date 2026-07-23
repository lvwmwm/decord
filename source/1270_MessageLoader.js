// Module ID: 1270
// Function ID: 14335
// Name: MessageLoader
// Dependencies: [57, 6, 7, 1269]
// Exports: createLoader, loadAllMessagesInLocale, waitForAllDefaultIntlMessagesLoaded

// Module 1270 (MessageLoader)
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let _Promise = arg2;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_3 = arg3;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      let closure_0 = arg0;
      let closure_1 = arg1;
      function fulfilled(arg0) {
        step(iter.next(arg0));
      }
      let iter = function rejected(arg0) {
        step(iter.throw(arg0));
      };
      function step(iter) {
        if (iter.done) {
          callback(iter.value);
        } else {
          (function adopt(value) {
            let tmp = value;
            let closure_0 = value;
            if (!(value instanceof fulfilled)) {
              const prototype = fulfilled.prototype;
              tmp = new fulfilled((arg0) => {
                arg0(closure_0);
              });
            }
            return tmp;
          })(iter.value).then(fulfilled, iter);
          const promise = (function adopt(value) {
            let tmp = value;
            let closure_0 = value;
            if (!(value instanceof fulfilled)) {
              const prototype = fulfilled.prototype;
              tmp = new fulfilled((arg0) => {
                arg0(closure_0);
              });
            }
            return tmp;
          })(iter.value);
        }
      }
      let items = closure_1;
      if (!closure_1) {
        items = [];
      }
      iter = iter.apply(closure_0, items);
      step(iter.next());
    });
    return _Promise;
  };
}
let tmp2 = (() => {
  class MessageLoader {
    constructor(arg0, arg1) {
      self = this;
      tmp = outer1_4(this, self);
      this.messages = {};
      this.localeImportMap = arg0;
      this.supportedLocales = Object.keys(arg0);
      this.defaultLocale = arg1;
      this._localeLoadingPromises = {};
      this._parseCache = {};
      set = new Set();
      this._subscribers = set;
      internalIntlMessage = new MessageLoader(outer1_2[3]).InternalIntlMessage([], this.defaultLocale);
      this.fallbackMessage = internalIntlMessage;
      if (outer1_1.hot) {
        _loop = function _loop(arg0) {
          let closure_0 = arg0;
          const hot = outer2_1.hot;
          hot.accept(closure_1, () => outer3_6(closure_0, undefined, undefined, function*() {
            const self = this;
            yield self._loadLocale(outer2_0);
            self._parseCache = {};
          }));
        };
        _Object = Object;
        entries = Object.entries(arg0);
        tmp5 = entries;
        tmp6 = entries[Symbol.iterator]();
        num = 2;
        num2 = 0;
        num3 = 1;
        tmp8 = tmp6;
        while (tmp6 !== undefined) {
          tmp9 = outer1_3;
          tmp10 = outer1_3(tmp7, 2);
          closure_1 = tmp10[1];
          tmp11 = _loop;
          _loopResult = _loop(tmp10[0]);
          continue;
        }
      }
      return;
    }
  }
  let obj = {
    key: "withDebugValues",
    value: function withDebugValues(_debugKeyMap, _localeFileMap) {
      this._debugKeyMap = _debugKeyMap;
      this._localeFileMap = _localeFileMap;
    }
  };
  const items = [obj, , , , , , , , , , ];
  obj = {
    key: "fallbackWith",
    value: function fallbackWith($$loader) {
      const self = this;
      let self2 = this;
      if (null != this) {
        self2 = self2._parentLoader;
        const _Error = Error;
        const error = new Error("Setting `fallbackWith` on MessageLoader created a circular chain that would never resolve");
        throw error;
      }
      self.fallbackLoader = $$loader;
      $$loader._parentLoader = self;
    }
  };
  items[1] = obj;
  obj = {
    key: "get",
    value: function get(arg0, defaultLocale) {
      const self = this;
      const messageValue = this.getMessageValue(arg0, defaultLocale);
      if (null != messageValue) {
        return messageValue;
      } else {
        if (self.isLocaleLoading(defaultLocale)) {
          if (!self.isLocaleLoaded(self.defaultLocale)) {
            return self.fallbackMessage;
          }
        }
        const messageValue1 = self.getMessageValue(arg0, self.defaultLocale);
        if (null != messageValue1) {
          return messageValue1;
        } else {
          const fallbackLoader = self.fallbackLoader;
          let value;
          if (null !== fallbackLoader) {
            if (undefined !== fallbackLoader) {
              value = fallbackLoader.get(arg0, defaultLocale);
            }
          }
          if (null != value) {
            return value;
          } else {
            let combined = arg0;
            if (null != self._debugKeyMap) {
              const _HermesInternal = HermesInternal;
              combined = "\"" + self._debugKeyMap[arg0] + "\" (" + arg0 + ")";
            }
            let combined1 = defaultLocale;
            if (null != self._localeFileMap) {
              const _HermesInternal2 = HermesInternal;
              combined1 = "" + defaultLocale + " (" + self._localeFileMap[defaultLocale] + ")";
            }
            if (null != self._localeFileMap) {
              const _HermesInternal3 = HermesInternal;
              defaultLocale = "" + self.defaultLocale + " (" + self._localeFileMap[self.defaultLocale] + ")";
            } else {
              defaultLocale = self.defaultLocale;
            }
            const _console = console;
            const _HermesInternal4 = HermesInternal;
            console.warn("Requested message " + combined + " does not have a value in the requested locale " + combined1 + " nor the default locale " + defaultLocale);
            return self.fallbackMessage;
          }
        }
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMessageValue",
    value: function getMessageValue(arg0, defaultLocale) {
      const self = this;
      let tmp2;
      if (null !== this._parseCache[defaultLocale]) {
        if (undefined !== tmp) {
          tmp2 = tmp[arg0];
        }
      }
      if (tmp2) {
        return tmp2;
      } else if (null != self.messages[defaultLocale]) {
        if (null != self.messages[defaultLocale][arg0]) {
          const InternalIntlMessage = MessageLoader(outer1_2[3]).InternalIntlMessage;
          const prototype = InternalIntlMessage.prototype;
          const internalIntlMessage = new InternalIntlMessage(tmp4, defaultLocale);
          const _parseCache = self._parseCache;
          let tmp13 = _parseCache[defaultLocale];
          if (null === tmp13) {
            const obj = {};
            _parseCache[defaultLocale] = obj;
            tmp13 = obj;
          }
          tmp13[arg0] = internalIntlMessage;
          return internalIntlMessage;
        }
      } else {
        const supportedLocales = self.supportedLocales;
        if (supportedLocales.includes(defaultLocale)) {
          self._loadLocale(defaultLocale);
        }
      }
    }
  };
  items[4] = {
    key: "_loadLocale",
    value: function _loadLocale(outer2_0) {
      let closure_0 = outer2_0;
      return outer1_6(this, undefined, undefined, function*() {
        const self = this;
        if (null == self.messages[outer1_0]) {
          let current;
          if (null !== self._localeLoadingPromises[outer1_0]) {
            if (undefined !== tmp21) {
              current = tmp21.current;
            }
          }
          if (null == current) {
            if (null != self.localeImportMap[outer1_0]) {
              const localeImportMap = self.localeImportMap;
              const tmp13 = localeImportMap[outer1_0]();
              let initialized;
              if (null !== self._localeLoadingPromises[outer1_0]) {
                if (undefined !== tmp14) {
                  initialized = tmp14.initialized;
                }
              }
              let obj = { initialized: null !== initialized && undefined !== initialized && initialized, current: tmp13 };
              self._localeLoadingPromises[outer1_0] = obj;
              self.messages[outer1_0] = yield tmp13.default;
              obj = { initialized: true, current: undefined };
              self._localeLoadingPromises[outer1_0] = obj;
              self.emitChange();
              const tmp16 = null !== initialized && undefined !== initialized && initialized;
              const tmp17 = outer1_0;
            } else {
              const supportedLocales = self.supportedLocales;
              if (supportedLocales.includes(outer1_0)) {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const error = new Error("Requested to load locale " + outer1_0 + ", which should be supported, but no source for translation data was provided.");
                throw error;
              }
            }
          } else {
            if (null !== self._localeLoadingPromises[outer1_0]) {
              if (undefined !== tmp3) {
                current = tmp3.current;
              }
            }
            return yield current;
          }
        }
      });
    }
  };
  items[5] = {
    key: "emitChange",
    value: function emitChange() {
      const _subscribers = this._subscribers;
      const values = _subscribers.values();
      for (const item10007 of values) {
        let item10007Result = item10007();
        continue;
      }
    }
  };
  items[6] = {
    key: "onChange",
    value: function onChange(arg0) {
      let closure_0 = arg0;
      const self = this;
      let _subscribers = this._subscribers;
      _subscribers.add(arg0);
      return () => {
        const _subscribers = self._subscribers;
        return _subscribers.delete(closure_0);
      };
    }
  };
  items[7] = {
    key: "isLocaleLoading",
    value: function isLocaleLoading(defaultLocale) {
      let current;
      if (null !== this._localeLoadingPromises[defaultLocale]) {
        if (undefined !== tmp) {
          current = tmp.current;
        }
      }
      return null != current;
    }
  };
  items[8] = {
    key: "isLocaleLoaded",
    value: function isLocaleLoaded(currentLocale) {
      let tmp3 = null != tmp2;
      if (tmp3) {
        tmp3 = 0 != tmp2.initialized;
      }
      if (tmp3) {
        tmp3 = !tmp || null == tmp2.current;
        const tmp4 = !tmp || null == tmp2.current;
      }
      return tmp3;
    }
  };
  items[9] = {
    key: "waitForLocaleLoaded",
    value: function waitForLocaleLoaded(defaultLocale, outer1_1) {
      return outer1_6(this, arguments, undefined, function(arg0) {
        let closure_0 = arg0;
        const self = this;
        let closure_2 = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
        return (function*() {
          if (null == outer1_1._localeLoadingPromises[outer1_0]) {
            return outer1_1._loadLocale(outer1_0);
          } else {
            let initialized = tmp.initialized;
            if (initialized) {
              initialized = !outer1_2;
            }
            return initialized ? undefined : yield tmp.current;
          }
        })();
      });
    }
  };
  items[10] = {
    key: "waitForDefaultLocale",
    value: function waitForDefaultLocale() {
      return outer1_6(this, arguments, undefined, function() {
        const self = this;
        let closure_1 = arguments.length > 0 && undefined !== arguments[0] && arguments[0];
        return (function*() {
          if (obj) {
            return obj.resume();
          } else {
            return outer1_0.waitForLocaleLoaded(outer1_0.defaultLocale, outer1_1);
          }
        })();
      });
    }
  };
  return _defineProperties(MessageLoader, items);
})();
let closure_7 = tmp2;
let closure_8 = [];

export const loadAllMessagesInLocale = function loadAllMessagesInLocale(outer1_0) {
  let closure_0 = outer1_0;
  return fn(this, undefined, undefined, function*() {
    yield Promise.all(outer2_8.map((_loadLocale) => _loadLocale._loadLocale(outer2_0)));
  });
};
export const waitForAllDefaultIntlMessagesLoaded = function waitForAllDefaultIntlMessagesLoaded() {
  return fn(this, undefined, undefined, function*() {
    yield Promise.all(outer2_8.map((waitForDefaultLocale) => waitForDefaultLocale.waitForDefaultLocale()));
  });
};
export const createLoader = function createLoader(arg0, arg1) {
  const tmp = new closure_7(arg0, arg1);
  return tmp;
};
export const MessageLoader = tmp2;
