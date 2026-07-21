// Module ID: 3795
// Function ID: 29605
// Name: r
// Dependencies: []

// Module 3795 (r)
const fn = () => {
  const fn = function r(arg0, arg1, arg2) {
    let length;
    let fn = arg0;
    fn = function o(arg0) {
      if (!arg1[arg0]) {
        if (arg0[arg0]) {
          const obj = { exports: {} };
          arg1[arg0] = obj;
          const first = arg0[arg0][0];
          first.call(obj.exports, (arg0) => {
            let tmp2 = arg0[closure_0][1][arg0];
            if (!tmp2) {
              tmp2 = arg0;
            }
            return closure_4(tmp2);
          }, obj, obj.exports, arg0, arg0, arg1, arg2);
        } else {
          if (!arg1) {
            if (tmp3) {
              return tmp3(arg0, true);
            }
          }
          if (callback) {
            return callback(arg0, true);
          } else {
            const _Error = Error;
            const error = new Error("Cannot find module '" + arg0 + "'");
            error.code = "MODULE_NOT_FOUND";
            throw error;
          }
        }
      }
      return arg1[arg0].exports;
    };
    let closure_3 = "function" === typeof fn && fn;
    let num = 0;
    if (0 < arg2.length) {
      do {
        let fnResult = fn(arg2[num]);
        num = num + 1;
        length = arg2.length;
      } while (num < length);
    }
    return fn;
  };
  const require = fn;
  let items = [
    (arg0, arg1, arg2) => {
      function loadScript(forceScriptReload) {
        let closure_0 = forceScriptReload;
        const json = JSON.stringify(forceScriptReload);
        if (!forceScriptReload.forceScriptReload) {
          if (closure_0[json]) {
            return tmp3;
          }
        }
        const element = <script />;
        const tmp4 = forceScriptReload.dataAttributes || {};
        let head = forceScriptReload.container;
        if (!head) {
          const _document = document;
          head = document.head;
        }
        element.src = forceScriptReload.src;
        element.id = forceScriptReload.id || "";
        element.async = true;
        if (forceScriptReload.type) {
          const concat = "".concat;
          const attr = element.setAttribute("type", "".concat(forceScriptReload.type));
        }
        if (forceScriptReload.crossorigin) {
          const concat2 = "".concat;
          const attr1 = element.setAttribute("crossorigin", "".concat(forceScriptReload.crossorigin));
        }
        const keys = Object.keys(tmp4);
        const item = keys.forEach((arg0) => {
          const combined = "data-".concat(arg0);
          const attr = element.setAttribute(combined, "".concat(tmp4[arg0]));
        });
        const promise = new Promise((arg0, arg1) => {
          const element = arg1;
          const listener = element.addEventListener("load", () => {
            arg0(arg1);
          });
          const listener1 = element.addEventListener("error", () => {
            const error = new Error("".concat(arg0.src, " failed to load."));
            arg1(error);
          });
          const listener2 = element.addEventListener("abort", () => {
            const error = new Error("".concat(arg0.src, " has aborted."));
            arg1(error);
          });
          head.appendChild(element);
        });
        closure_0[json] = promise;
        return promise;
      }
      let closure_0 = {};
      loadScript.clearCache = () => {
        let closure_0 = {};
      };
      module.exports = loadScript;
    },
    {}
  ];
  const items1 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/load-script");
    },
    { ./dist/load-script: 1 }
  ];
  const items2 = [
    (arg0, arg1, arg2) => {
      module.exports = function isAndroid(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return /Android/i.test(userAgent);
      };
    },
    {}
  ];
  const items3 = [
    (arg0, arg1, arg2) => {
      module.exports = function isChromeOS(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return /CrOS/i.test(userAgent);
      };
    },
    {}
  ];
  const items4 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-edge");
      let closure_1 = global("./is-samsung");
      let closure_2 = global("./is-duckduckgo");
      let closure_3 = global("./is-opera");
      let closure_4 = global("./is-silk");
      module.exports = function isChrome(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        let tmp2 = -1 === userAgent.indexOf("Chrome");
        if (tmp2) {
          tmp2 = -1 === userAgent.indexOf("CriOS");
        }
        if (!tmp2) {
          tmp2 = callback(userAgent);
        }
        if (!tmp2) {
          tmp2 = callback2(userAgent);
        }
        if (!tmp2) {
          tmp2 = callback3(userAgent);
        }
        if (!tmp2) {
          tmp2 = callback4(userAgent);
        }
        if (!tmp2) {
          tmp2 = callback5(userAgent);
        }
        return !tmp2;
      };
    },
    { "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001092662051426, "Bool(true)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001103437811564, <string:3750547948>: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011670976853, <string:2262967719>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001230757559037, <string:150164119>: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000127319747487 }
  ];
  const items5 = [
    (arg0, arg1, arg2) => {
      module.exports = function isDuckDuckGo(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return -1 !== userAgent.indexOf("DuckDuckGo/");
      };
    },
    {}
  ];
  const items6 = [
    (arg0, arg1, arg2) => {
      module.exports = function isEdge(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        let tmp2 = -1 !== userAgent.indexOf("Edge/");
        if (!tmp2) {
          tmp2 = -1 !== userAgent.indexOf("Edg/");
        }
        return tmp2;
      };
    },
    {}
  ];
  const items7 = [
    (arg0, arg1, arg2) => {
      module.exports = function isFirefox(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return /Firefox/i.test(userAgent);
      };
    },
    {}
  ];
  const items8 = [
    (arg0, arg1, arg2) => {
      module.exports = function isIosFirefox(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return /FxiOS/i.test(userAgent);
      };
    },
    {}
  ];
  const items9 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-ios");
      module.exports = function isIosGoogleSearchApp(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        let isMatch = callback(userAgent);
        if (isMatch) {
          isMatch = /\bGSA\b/.test(userAgent);
          const obj = /\bGSA\b/;
        }
        return isMatch;
      };
    },
    { ./is-ios: 14 }
  ];
  const items10 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-ios");
      let closure_1 = global("./is-ios-firefox");
      let closure_2 = /webkit/i;
      module.exports = function isIosSafari(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        let isMatch = callback(userAgent);
        if (isMatch) {
          isMatch = regex.test(userAgent);
        }
        if (isMatch) {
          isMatch = userAgent.indexOf("CriOS") <= -1;
        }
        if (isMatch) {
          isMatch = !callback2(userAgent);
        }
        if (isMatch) {
          isMatch = userAgent.indexOf("FBAN") <= -1;
        }
        return isMatch;
      };
    },
    { ./dist/is-chrome-os: 0.00000000000000000000000000002524355423328707, dup: 0.00000000000000000010842024107846067 }
  ];
  const items11 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-ios");
      let closure_1 = global("./is-ios-google-search-app");
      module.exports = function isIosWebview(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        const tmp2 = !callback(userAgent);
        let tmp3 = !tmp2;
        if (!tmp2) {
          const tmp5 = !callback2(userAgent);
          let isMatch = !tmp5;
          if (tmp5) {
            isMatch = /.+AppleWebKit(?!.*Safari)/i.test(userAgent);
            const obj = /.+AppleWebKit(?!.*Safari)/i;
          }
          tmp3 = isMatch;
        }
        return tmp3;
      };
    },
    {}
  ];
  const items12 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-ios-webview");
      module.exports = function isIosWKWebview(arg0, arg1) {
        let visible = arg1;
        if (undefined === arg1) {
          const _window = window;
          visible = window.statusbar.visible;
        }
        return callback(arg0) && visible;
      };
    },
    { ./is-ios-webview: 12 }
  ];
  const items13 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./is-ipados");
      module.exports = function isIos(arg0, arg1, arg2) {
        let userAgent = arg0;
        let flag = arg1;
        if (undefined === arg1) {
          flag = true;
        }
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        const isMatch = /iPhone|iPod|iPad/i.test(userAgent);
        let tmp3 = isMatch;
        if (flag) {
          let tmp4 = isMatch;
          if (!isMatch) {
            tmp4 = callback(userAgent, arg2);
          }
          tmp3 = tmp4;
        }
        return tmp3;
      };
    },
    { ./is-ipados: 15 }
  ];
  const items14 = [
    (arg0, arg1, arg2) => {
      module.exports = function isIpadOS(arg0, arg1) {
        let userAgent = arg0;
        let _document = arg1;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        if (!_document) {
          const _window2 = window;
          _document = window.document;
        }
        let isMatch = /Mac|iPad/i.test(userAgent);
        if (isMatch) {
          isMatch = "ontouchend" in _document;
        }
        return isMatch;
      };
    },
    {}
  ];
  const items15 = [
    (arg0, arg1, arg2) => {
      module.exports = function isOpera(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        let tmp2 = -1 !== userAgent.indexOf("OPR/");
        if (!tmp2) {
          tmp2 = -1 !== userAgent.indexOf("Opera/");
        }
        if (!tmp2) {
          tmp2 = -1 !== userAgent.indexOf("OPT/");
        }
        return tmp2;
      };
    },
    {}
  ];
  const items16 = [
    (arg0, arg1, arg2) => {
      module.exports = function isSamsungBrowser(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return /SamsungBrowser/i.test(userAgent);
      };
    },
    {}
  ];
  const items17 = [
    (arg0, arg1, arg2) => {
      module.exports = function isSilk(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return -1 !== userAgent.indexOf("Silk/");
      };
    },
    {}
  ];
  const items18 = [
    (arg0, arg1, arg2) => {
      function isOperaMini(userAgent) {
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return userAgent.indexOf("Opera Mini") > -1;
      }
      let closure_0 = global("./is-android");
      let closure_1 = global("./is-ios-firefox");
      let closure_2 = global("./is-ios-webview");
      let closure_3 = global("./is-chrome");
      let closure_4 = global("./is-samsung");
      let closure_5 = global("./is-duckduckgo");
      module.exports = function supportsPopups(userAgent) {
        if (!userAgent) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        let tmp2 = callback3(userAgent);
        if (!tmp2) {
          tmp2 = callback2(userAgent);
        }
        if (!tmp2) {
          let userAgent2 = userAgent;
          if (!userAgent) {
            const _window2 = window;
            userAgent2 = window.navigator.userAgent;
          }
          const tmp6 = !callback(userAgent2);
          let isMatch = !tmp6;
          if (!tmp6) {
            isMatch = /Version\/[\d.]+/i.test(userAgent2);
            const obj = /Version\/[\d.]+/i;
          }
          if (isMatch) {
            isMatch = !isOperaMini(userAgent2);
          }
          if (isMatch) {
            isMatch = !callback6(userAgent2);
          }
          tmp2 = isMatch;
        }
        if (!tmp2) {
          tmp2 = isOperaMini(userAgent);
        }
        if (!tmp2) {
          let str = userAgent;
          if (!userAgent) {
            const _window3 = window;
            str = window.navigator.userAgent;
          }
          const match = str.match(/CriOS\/(\d+)\./);
          let tmp14 = !tmp13;
          if (!!match) {
            const _parseInt = parseInt;
            tmp14 = parseInt(match[1], 10) < 48;
          }
          tmp2 = tmp14;
        }
        if (!tmp2) {
          let isMatch1 = !callback4(userAgent);
          if (isMatch1) {
            isMatch1 = !callback5(userAgent);
          }
          if (isMatch1) {
            isMatch1 = /samsung/i.test(userAgent);
            const obj2 = /samsung/i;
          }
          tmp2 = isMatch1;
        }
        return !tmp2;
      };
    },
    {}
  ];
  const items19 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-android");
    },
    { ./dist/is-android: 3 }
  ];
  const items20 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-chrome-os");
    },
    { ./dist/is-chrome-os: 4 }
  ];
  const items21 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-chrome");
    },
    { ./dist/is-chrome: 5 }
  ];
  const items22 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-firefox");
    },
    { ./dist/is-firefox: 8 }
  ];
  const items23 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-ios-safari");
    },
    { ./dist/is-ios-safari: 11 }
  ];
  const items24 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-ios-webview");
    },
    { ./dist/is-ios-webview: 12 }
  ];
  const items25 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-ios-wkwebview");
    },
    { ./dist/is-ios-wkwebview: 13 }
  ];
  const items26 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-ios");
    },
    { ./dist/is-ios: 14 }
  ];
  const items27 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-samsung");
    },
    { ./dist/is-samsung: 17 }
  ];
  const items28 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/supports-popups");
    },
    { ./dist/supports-popups: 19 }
  ];
  const items29 = [
    (arg0, arg1, arg2) => {
      module.exports = () => {
        class EventEmitter {
          constructor() {
            this._events = {};
            return;
          }
          on(arg0, arg1) {
            _events = this._events;
            if (this._events[arg0]) {
              arr2 = _events[arg0];
              arr = arr2.push(arg1);
            } else {
              items = [];
              items[0] = arg1;
              _events[arg0] = items;
            }
            return;
          }
          off(arg0, arg1) {
            arr = this._events[arg0];
            if (arr) {
              tmp = arg1;
              num = 1;
              spliceResult = arr.splice(arr.indexOf(arg1), 1);
            }
            return;
          }
          _emit(arg0) {
            items = [];
            EventEmitter = items;
            num = 1;
            if (1 < arguments.length) {
              do {
                items[num - 1] = arguments[num];
                num = num + 1;
                length = arguments.length;
              } while (num < length);
            }
            arr2 = this._events[arg0];
            if (arr2) {
              item = arr2.forEach((apply) => {
                apply.apply(undefined, items);
              });
            }
            return;
          }
          hasListener(arg0) {
            arr = this._events[arg0];
            tmp = !arr;
            tmp2 = !tmp;
            if (!tmp) {
              num = 0;
              tmp2 = arr.length > 0;
            }
            return tmp2;
          }
          static createChild(arg0) {
            obj = { constructor: arg0 };
            arg0.prototype = Object.create(EventEmitter.prototype, obj);
            return;
          }
        }
        return EventEmitter;
      }();
    },
    {}
  ];
  const items30 = [
    (arg0, arg1, arg2) => {
      let _Promise = null;
      if ("undefined" !== typeof Promise) {
        _Promise = Promise;
      }
      module.exports = () => {
        class ExtendedPromise {
          constructor(arg0) {
            self = this;
            ExtendedPromise = this;
            if ("function" !== typeof arg0) {
              tmp7 = ExtendedPromise;
              _Promise2 = ExtendedPromise.Promise;
              prototype2 = _Promise2.prototype;
              tmp8 = new.target;
              tmp9 = new.target;
              _Promise2 = new _Promise2((_resolveFunction, _rejectFunction) => {
                self._resolveFunction = _resolveFunction;
                self._rejectFunction = _rejectFunction;
              });
              tmp11 = _Promise2;
              self._promise = _Promise2;
              obj = arg0;
              if (!arg0) {
                obj = {};
              }
              defaultOnResolve = obj.onResolve;
              if (!defaultOnResolve) {
                tmp12 = ExtendedPromise;
                defaultOnResolve = ExtendedPromise.defaultOnResolve;
              }
              self._onResolve = defaultOnResolve;
              defaultOnReject = obj.onReject;
              if (!defaultOnReject) {
                tmp13 = ExtendedPromise;
                defaultOnReject = ExtendedPromise.defaultOnReject;
              }
              self._onReject = defaultOnReject;
              tmp14 = ExtendedPromise;
              if (ExtendedPromise.shouldCatchExceptions(obj)) {
                _promise = self._promise;
                catchPromise = _promise.catch(() => {

                });
              }
              _resetStateResult = self._resetState();
            } else {
              tmp = ExtendedPromise;
              _Promise = ExtendedPromise.Promise;
              prototype = _Promise.prototype;
              tmp2 = new.target;
              tmp3 = new.target;
              tmp4 = arg0;
              _Promise = new _Promise(arg0);
              tmp6 = _Promise;
              self._promise = _Promise;
            }
            return;
          }
          static defaultOnResolve(arg0) {
            _Promise = ExtendedPromise.Promise;
            return _Promise.resolve(arg0);
          }
          static defaultOnReject(arg0) {
            _Promise = ExtendedPromise.Promise;
            return _Promise.reject(arg0);
          }
          static setPromise(arg0) {
            ExtendedPromise.Promise = arg0;
            return;
          }
          static shouldCatchExceptions(arg0) {
            _Boolean = Boolean;
            if (arg0.hasOwnProperty("suppressUnhandledPromiseMessage")) {
              _BooleanResult = _Boolean(arg0.suppressUnhandledPromiseMessage);
            } else {
              tmp = ExtendedPromise;
              _BooleanResult = _Boolean(ExtendedPromise.suppressUnhandledPromiseMessage);
            }
            return _BooleanResult;
          }
          static all(arg0) {
            _Promise = ExtendedPromise.Promise;
            return _Promise.all(arg0);
          }
          static allSettled(arg0) {
            _Promise = ExtendedPromise.Promise;
            return _Promise.allSettled(arg0);
          }
          static race(arg0) {
            _Promise = ExtendedPromise.Promise;
            return _Promise.race(arg0);
          }
          static reject(arg0) {
            _Promise = ExtendedPromise.Promise;
            return _Promise.reject(arg0);
          }
          static resolve(arg0) {
            _Promise = ExtendedPromise.Promise;
            return _Promise.resolve(arg0);
          }
          then() {
            items = [];
            num = 0;
            if (0 < arguments.length) {
              do {
                items[num] = arguments[num];
                num = num + 1;
                length = arguments.length;
              } while (num < length);
            }
            _promise = this._promise;
            then = _promise.then;
            return then.apply(_promise, items);
          }
          catch() {
            items = [];
            num = 0;
            if (0 < arguments.length) {
              do {
                items[num] = arguments[num];
                num = num + 1;
                length = arguments.length;
              } while (num < length);
            }
            _promise = this._promise;
            _catch = _promise.catch;
            return _catch.apply(_promise, items);
          }
          resolve(arg0) {
            self = this;
            ExtendedPromise = arg0;
            self = this;
            if (!this.isFulfilled) {
              _setResolvedResult = self._setResolved();
              tmp2 = ExtendedPromise;
              _Promise = ExtendedPromise.Promise;
              resolveResult = _Promise.resolve();
              nextPromise = resolveResult.then(() => self._onResolve(arg0));
              nextPromise1 = nextPromise.then((arg0) => {
                self._resolveFunction(arg0);
              });
              catchPromise = nextPromise1.catch((arg0) => {
                self._resetState();
                self.reject(arg0);
              });
            }
            return self;
          }
          reject(arg0) {
            self = this;
            ExtendedPromise = arg0;
            self = this;
            if (!this.isFulfilled) {
              _setRejectedResult = self._setRejected();
              tmp2 = ExtendedPromise;
              _Promise = ExtendedPromise.Promise;
              resolveResult = _Promise.resolve();
              nextPromise = resolveResult.then(() => self._onReject(arg0));
              nextPromise1 = nextPromise.then((arg0) => {
                self._setResolved();
                self._resolveFunction(arg0);
              });
              catchPromise = nextPromise1.catch((arg0) => self._rejectFunction(arg0));
            }
            return self;
          }
          _resetState() {
            this.isFulfilled = false;
            this.isResolved = false;
            this.isRejected = false;
            return;
          }
          _setResolved() {
            this.isFulfilled = true;
            this.isResolved = true;
            this.isRejected = false;
            return;
          }
          _setRejected() {
            this.isFulfilled = true;
            this.isResolved = false;
            this.isRejected = true;
            return;
          }
        }
        ExtendedPromise.Promise = ExtendedPromise;
        return ExtendedPromise;
      }();
    },
    {}
  ];
  const items31 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./lib/set-attributes");
      let closure_1 = global("./lib/default-attributes");
      let closure_2 = global("./lib/assign");
      module.exports = function createFrame(arg0) {
        let obj = arg0;
        if (undefined === arg0) {
          obj = {};
        }
        const element = <iframe />;
        obj = closure_2.assign({}, defaultAttributes.defaultAttributes, obj);
        let style = obj.style;
        if (style) {
          style = "string" !== typeof obj.style;
        }
        if (style) {
          obj = closure_2.assign(element.style, obj.style);
          delete r2.style;
        }
        attributes.setAttributes(element, obj);
        if (!element.getAttribute("id")) {
          element.id = element.name;
        }
        return element;
      };
    },
    {}
  ];
  const items32 = [
    (arg0, arg1, arg2) => {
      arg2.assign = function assign(arg0) {
        let length;
        const items = [];
        let num = 1;
        if (1 < arguments.length) {
          do {
            items[num - 1] = arguments[num];
            num = num + 1;
            length = arguments.length;
          } while (num < length);
        }
        const item = items.forEach((arg0) => {
          if ("object" === typeof arg0) {
            const _Object = Object;
            const keys = Object.keys(arg0);
            const item = keys.forEach((arg0) => {
              arg0[arg0] = arg0[arg0];
            });
          }
        });
        return arg0;
      };
    },
    {}
  ];
  const items33 = [
    (arg0, arg1, arg2) => {
      arg2.defaultAttributes = { 0: null, 0: null, 0: null, 0: null };
    },
    {}
  ];
  const items34 = [
    (arg0, arg1, arg2) => {
      arg2.setAttributes = function setAttributes(removeAttribute, obj) {
        for (const key10007 in arg1) {
          let tmp6 = key10007;
          if (!arg1.hasOwnProperty(key10007)) {
            continue;
          } else {
            let tmp = arg1[key10007];
            if (null == tmp) {
              let removeAttributeResult = arg0.removeAttribute(key10007);
              let tmp5 = tmp;
              // continue
            } else {
              let attr = arg0.setAttribute(key10007, tmp);
              let tmp3 = tmp;
              // continue
            }
            continue;
          }
          continue;
        }
      };
    },
    {}
  ];
  const items35 = [
    (arg0, arg1, arg2) => {
      module.exports = function uuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (arg0) => {
          const tmp = 16 * Math.random() | 0;
          let str = tmp;
          if ("x" !== arg0) {
            str = 3 & tmp | 8;
          }
          return str.toString(16);
        });
      };
    },
    {}
  ];
  const items36 = [
    (arg0, arg1, arg2) => {
      arg2.deferred = function deferred(items) {
        return () => {
          let length;
          const items = [];
          const arg0 = items;
          let num = 0;
          if (0 < arguments.length) {
            do {
              items[num] = arguments[num];
              num = num + 1;
              length = arguments.length;
            } while (num < length);
          }
          const timerId = setTimeout(() => {
            items.apply(undefined, items);
          }, 1);
        };
      };
    },
    {}
  ];
  const items37 = [
    (arg0, arg1, arg2) => {
      arg2.once = function once(arg0) {
        let closure_1 = false;
        return () => {
          let length;
          const items = [];
          let num = 0;
          if (0 < arguments.length) {
            do {
              items[num] = arguments[num];
              num = num + 1;
              length = arguments.length;
            } while (num < length);
          }
          if (!closure_1) {
            closure_1 = true;
            arg0.apply(undefined, items);
          }
        };
      };
    },
    {}
  ];
  const items38 = [
    (arg0, arg1, arg2) => {
      arg2.promiseOrCallback = function promiseOrCallback(promise, onceResult) {
        if (onceResult) {
          promise.then((arg0) => arg1(null, arg0)).catch((arg0) => arg1(arg0));
        } else {
          return promise;
        }
      };
    },
    {}
  ];
  const items39 = [
    (arg0, arg1, arg2) => {
      function wrapPromise(arg0) {
        let closure_0 = arg0;
        return function(self) {
          let length;
          const items = [];
          let num = 0;
          if (0 < arguments.length) {
            do {
              items[num] = arguments[num];
              num = num + 1;
              length = arguments.length;
            } while (num < length);
          }
          let onceResult;
          if ("function" === typeof items[items.length - 1]) {
            onceResult = closure_1.once(self.deferred(items.pop()));
          }
          return closure_2.promiseOrCallback(self.apply(this, items), onceResult);
        };
      }
      let closure_0 = global("./lib/deferred");
      let closure_1 = global("./lib/once");
      let closure_2 = global("./lib/promise-or-callback");
      wrapPromise.wrapPrototype = (arg0, arg1) => {
        let obj = arg1;
        let closure_0 = arg0;
        if (undefined === arg1) {
          obj = {};
        }
        let closure_1 = obj.ignoreMethods || [];
        let closure_2 = true === obj.transformPrivateMethods;
        const ownPropertyNames = Object.getOwnPropertyNames(arg0.prototype);
        const found = ownPropertyNames.filter((str) => {
          let tmp = "constructor" !== str;
          if (tmp) {
            tmp = "function" === typeof str.prototype[str];
          }
          let tmp4 = closure_2;
          if (!closure_2) {
            tmp4 = "_" !== str.charAt(0);
          }
          if (tmp) {
            tmp = tmp4;
          }
          if (tmp) {
            tmp = tmp3;
          }
          return tmp;
        });
        const item = found.forEach((arg0) => {
          arg0.prototype[arg0] = callback(arg0.prototype[arg0]);
        });
        return arg0;
      };
      module.exports = wrapPromise;
    },
    {}
  ];
  const items40 = [
    function(arg0, arg1, arg2) {
      let self = this;
      const fn = (arg0) => {
        let concat;
        let concat2;
        function __awaiter(arg0, arg1, arg2, arg3) {
          let closure_0 = arg0;
          return new Promise((arg0, arg1) => {
            function fulfilled() { ... }
            let arg3 = function rejected() { ... };
            function step() { ... }
            let items = arg1;
            if (!arg1) {
              items = [];
            }
            const iter = arg3.apply(arg0, items);
            arg3 = iter;
            step(iter.next());
          });
        }
        function __generator(arg0, arg1) {
          let closure_0 = arg0;
          const loadScript$1 = arg1;
          function verb(arg0) {
            return () => { ... };
          }
          let obj = {
            label: 0,
            sent() {
              if (1 & closure_4[0]) {
                throw tmp;
              } else {
                return tmp;
              }
            },
            trys: [],
            ops: []
          };
          const __awaiter = obj;
          obj = { next: verb(0), throw: verb(1), return: verb(2) };
          if ("function" === typeof Symbol) {
            const _Symbol = Symbol;
            obj[Symbol.iterator] = function() {
              return this;
            };
          }
          return obj;
        }
        function loadScript$1(forceScriptReload) {
          let closure_0 = forceScriptReload;
          const json = JSON.stringify(forceScriptReload);
          if (!forceScriptReload.forceScriptReload) {
            if (closure_0[json]) {
              return tmp3;
            }
          }
          const element = <script />;
          const loadScript$1 = element;
          const tmp4 = forceScriptReload.dataAttributes || {};
          let closure_2 = tmp4;
          let head = forceScriptReload.container;
          if (!head) {
            const _document = document;
            head = document.head;
          }
          element.src = forceScriptReload.src;
          element.id = forceScriptReload.id || "";
          element.async = true;
          if (forceScriptReload.type) {
            const concat = "".concat;
            const attr = element.setAttribute("type", "".concat(forceScriptReload.type));
          }
          if (forceScriptReload.crossorigin) {
            const concat2 = "".concat;
            const attr1 = element.setAttribute("crossorigin", "".concat(forceScriptReload.crossorigin));
          }
          const keys = Object.keys(tmp4);
          const item = keys.forEach((arg0) => {
            const combined = "data-".concat(arg0);
            const attr = element.setAttribute(combined, "".concat(tmp4[arg0]));
          });
          const promise = new Promise((arg0, arg1) => {
            const element = arg1;
            const listener = element.addEventListener("load", () => { ... });
            const listener1 = element.addEventListener("error", () => { ... });
            const listener2 = element.addEventListener("abort", () => { ... });
            head.appendChild(element);
          });
          closure_0[json] = promise;
          return promise;
        }
        function isAmdEnv() {
          let amd = "function" === typeof window.define;
          if (amd) {
            const _window = window;
            amd = window.define.amd;
          }
          return amd;
        }
        function safeLoadBtModule(arg0, arg1, arg2) {
          let closure_0 = arg0;
          const loadScript$1 = arg1;
          let closure_2 = arg2;
          if (undefined === arg2) {
            closure_2 = true;
          }
          return __awaiter(this, undefined, undefined, function() {
            return callback(this, () => { ... });
          });
        }
        function loadBtModule(amdModule) {
          let flag = arg2;
          if (undefined === arg2) {
            flag = true;
          }
          if (isAmdEnv()) {
            amdModule = amdModule.amdModule;
            let closure_0 = flag ? amdModule.minified : amdModule.unminified;
            const promise = new Promise((arg0, arg1) => {
              const items = [closure_0];
              const _module = window.require(items, arg0, arg1);
            });
            return promise;
          } else {
            const script = amdModule.script;
            const obj = {};
            const concat = "".concat;
            const combined = "".concat(amdModule.id, "-");
            obj.id = combined.concat(arg1);
            const concat2 = "https://js.braintreegateway.com/web/".concat;
            const combined1 = "https://js.braintreegateway.com/web/".concat(arg1, "/js/");
            obj.src = combined1.concat(flag ? script.minified : script.unminified);
            return loadScript$1(obj);
          }
        }
        function loadAXOScript(src) {
          let flag = arg1;
          if (undefined === arg1) {
            flag = true;
          }
          if (isAmdEnv()) {
            let tmp3 = isAmdEnv();
            if (tmp3) {
              const _window = window;
              tmp3 = "function" === typeof window.requirejs;
            }
            if (tmp3) {
              const _window2 = window;
              tmp3 = "function" === typeof window.requirejs.config;
            }
            if (tmp3) {
              let obj = {};
              obj = {};
              obj[closure_2] = src;
              obj.paths = obj;
              globalThis.requirejs.config(obj);
            }
            const concat = "".concat;
            const combined = "".concat(closure_2, "/");
            const AXO_ASSET_NAME = obj.AXO_ASSET_NAME;
            let closure_0 = combined.concat(flag ? AXO_ASSET_NAME.minified : AXO_ASSET_NAME.unminified);
            const promise = new Promise((arg0, arg1) => {
              const items = [closure_0];
              const _module = window.require(items, arg0, arg1);
            });
            return promise;
          } else {
            obj = { src };
            return loadScript$1(obj);
          }
        }
        function generateAssetUrl(arg0) {
          let assetUrl;
          let bundleId;
          ({ assetUrl, bundleId } = arg0);
          if (bundleId) {
            const concat2 = "https://cdn-".concat;
            const combined = "https://cdn-".concat(bundleId, ".static.engineering.dev.paypalinc.com/");
            let combined1 = combined.concat(assetUrl);
          } else {
            const concat = "".concat;
            const combined2 = "".concat(obj.CDNX_PROD, "/");
            combined1 = combined2.concat(assetUrl);
          }
          return combined1;
        }
        let obj = {};
        let closure_0 = {};
        loadScript$1.clearCache = () => {
          let closure_0 = {};
        };
        obj.loadScript = undefined;
        loadScript$1 = undefined;
        obj.loadStylesheet = undefined;
        obj.loadScript = loadScript$1;
        obj.loadStylesheet = function loadStylesheet(href) {
          const element = document.querySelector("link[href=\"".concat(href.href, "\"]"));
          if (element) {
            return Promise.resolve(element);
          } else {
            const _document = document;
            const element1 = <link />;
            let head = href.container;
            if (!head) {
              const _document2 = document;
              head = document.head;
            }
            const attr = element1.setAttribute("rel", "stylesheet");
            const attr1 = element1.setAttribute("type", "text/css");
            const attr2 = element1.setAttribute("href", href.href);
            const attr3 = element1.setAttribute("id", href.id);
            if (head.firstChild) {
              head.insertBefore(element1, head.firstChild);
            } else {
              head.appendChild(element1);
            }
            return Promise.resolve(element1);
          }
        };
        let closure_2 = "fastlane";
        obj = { AXO_ASSET_NAME: {}, AXO_ASSET_PATH: "connect-boba", LOCALE_PATH: "".concat("connect-boba", "/locales/"), CDNX_PROD: "https://www.paypalobjects.com" };
        obj = { client: "client", hostedFields: "hosted-fields" };
        const obj1 = {};
        const obj2 = {};
        const obj3 = {};
        const combined = "".concat("braintree", "/");
        obj3.unminified = combined.concat(obj.client);
        const combined1 = "".concat("braintree", "/");
        obj3.minified = combined1.concat(obj.client, ".min");
        obj2.amdModule = obj3;
        obj2.script = { unminified: "".concat(obj.client, ".js"), minified: "".concat(obj.client, ".min.js") };
        obj1.client = obj2;
        const obj5 = { <string:2876810395>: "A network error occurred when processing the Apple Pay payment.", <string:283421561>: null };
        const obj6 = {};
        const combined2 = "".concat("braintree", "/");
        obj6.unminified = combined2.concat(obj.hostedFields);
        const combined3 = "".concat("braintree", "/");
        obj6.minified = combined3.concat(obj.hostedFields, ".min");
        obj5.amdModule = obj6;
        const obj4 = { unminified: "".concat(obj.client, ".js"), minified: "".concat(obj.client, ".min.js") };
        ({ concat, concat: concat2 } = "");
        obj5.script = { unminified: "".concat(obj.hostedFields, ".js"), minified: "".concat(obj.hostedFields, ".min.js") };
        obj1.hostedFields = obj5;
        arg0.constants = obj;
        arg0.loadAxo = function loadAxo(arg0) {
          let closure_0 = arg0;
          return __awaiter(this, undefined, undefined, function() {
            return callback(this, () => { ... });
          });
        };
      };
      if ("object" === typeof arg2) {
        if (undefined !== arg1) {
          fn(arg2);
        }
      }
      if ("undefined" !== typeof globalThis) {
        self = globalThis;
      }
      const obj = {};
      self.loadAxo = obj;
      fn(obj);
    },
    {}
  ];
  const items41 = [
    function(arg0, arg1, arg2) {
      function findType(arg0) {
        let tmp = closure_6[arg0];
        if (!tmp) {
          tmp = closure_1[arg0];
        }
        return tmp;
      }
      function getCardPosition(type, arg1) {
        let flag = arg1;
        if (undefined === arg1) {
          flag = false;
        }
        const index = arr.indexOf(type);
        if (!flag) {
          if (-1 === index) {
            const _Error = Error;
            const error = new Error("\"" + type + "\" is not a supported card type.");
            throw error;
          }
        }
        return index;
      }
      function creditCardType(arg0) {
        let items = [];
        let closure_1 = items;
        if (validInputType.isValidInputType(arg0)) {
          if (0 === arg0.length) {
            return function getAllCardTypes() {
              return closure_8.map((arg0) => closure_5.clone(callback(arg0)));
            }();
          } else {
            const item = arr.forEach((arg0) => {
              const result = closure_2.addMatchingCardsToResults(arg0, callback(arg0), items);
            });
            const findBestMatchResult = closure_4.findBestMatch(items);
            if (findBestMatchResult) {
              const items1 = [findBestMatchResult];
              items = items1;
            }
            return items;
          }
        } else {
          return items;
        }
      }
      let fn = this;
      if (this) {
        fn = this.__assign;
      }
      if (!fn) {
        fn = function() {
          const obj = Object.assign || (arg0) => {
            for (let num = 1; num < length; num = num + 1) {
              let tmp3 = arguments[num];
              let tmp4 = tmp3;
              let tmp5 = tmp2;
              let keys = Object.keys();
              if (keys !== undefined) {
                let tmp2 = tmp5;
                let tmp7 = keys[tmp];
                while (tmp7 !== undefined) {
                  let tmp8 = tmp7;
                  let _Object = Object;
                  tmp5 = tmp7;
                  if (!hasOwnProperty.call(tmp3, tmp7)) {
                    continue;
                  } else {
                    arg0[tmp7] = tmp3[tmp7];
                    tmp5 = tmp7;
                    // continue
                  }
                  continue;
                }
              }
            }
            return arg0;
          };
          return obj(...arguments);
        };
      }
      let closure_1 = global("./lib/card-types");
      let closure_2 = global("./lib/add-matching-cards-to-results");
      let closure_3 = global("./lib/is-valid-input-type");
      let closure_4 = global("./lib/find-best-match");
      const globalResult = global("./lib/clone");
      let closure_6 = {};
      const obj = {};
      const items = [, , , , , , , , , , , ];
      ({ VISA: arr[0], MASTERCARD: arr[1], AMERICAN_EXPRESS: arr[2], DINERS_CLUB: arr[3], DISCOVER: arr[4], JCB: arr[5], UNIONPAY: arr[6], MAESTRO: arr[7], ELO: arr[8], MIR: arr[9], HIPER: arr[10], HIPERCARD: arr[11] } = obj);
      let closure_8 = globalResult.clone(items);
      creditCardType.getTypeInfo = (arg0) => globalResult.clone(findType(arg0));
      creditCardType.removeCard = (type) => {
        arr.splice(getCardPosition(type), 1);
      };
      creditCardType.addCard = (type) => {
        closure_6[type.type] = type;
        if (-1 === getCardPosition(type.type, true)) {
          const arr = arr.push(type.type);
        }
      };
      creditCardType.updateCard = (arg0, type) => {
        let tmp = closure_6[arg0];
        if (!tmp) {
          tmp = closure_1[arg0];
        }
        if (tmp) {
          if (type.type) {
            if (tmp.type !== type.type) {
              const _Error2 = Error;
              const error = new Error("Cannot overwrite type parameter.");
              throw error;
            }
          }
          const tmp10 = fn(fn({}, globalResult.clone(tmp)), type);
          closure_6[tmp10.type] = tmp10;
        } else {
          const _Error = Error;
          const concat = "\"".concat;
          const error1 = new Error("\"".concat(arg0, "\" is not a recognized type. Use `addCard` instead.'"));
          throw error1;
        }
      };
      creditCardType.changeOrder = (type) => {
        arr.splice(getCardPosition(type), 1);
        arr.splice(arg1, 0, type);
      };
      creditCardType.resetModifications = () => {
        let closure_8 = globalResult.clone(items);
        let closure_6 = {};
      };
      creditCardType.types = obj;
      module.exports = creditCardType;
    },
    {}
  ];
  const items42 = [
    (arg0, arg1, arg2) => {
      arg2.addMatchingCardsToResults = undefined;
      let closure_0 = arg0("./clone");
      let closure_1 = arg0("./matches");
      arg2.addMatchingCardsToResults = function addMatchingCardsToResults(arg0, patterns, items) {
        let num = 0;
        if (0 < patterns.patterns.length) {
          while (!closure_1.matches(arg0, patterns.patterns[num])) {
            num = num + 1;
          }
          const cloneResult = closure_0.clone(patterns);
          const _Array = Array;
          const _String = String;
          if (Array.isArray(patterns.patterns[num])) {
            let length = _String(tmp[0]).length;
          } else {
            length = _String(tmp).length;
          }
          if (arg0.length >= length) {
            cloneResult.matchStrength = length;
          }
          items.push(cloneResult);
        }
      };
    },
    {}
  ];
  const items43 = [
    (arg0, arg1, arg2) => {
      const items = [[], [true, true], [null, null], ["length", "prototype"], ["<string:1912604603>", "<string:506779>"], 2720];
      const items1 = [[0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000264586350186, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002970794108], 36, 38, 39];
      const items2 = [, [], 65];
      const items3 = [, , [false, false]];
      const items4 = [-5274396850859547000000000000000000000000, ["<string:130559744>", "<string:3945755136>"], ["isArray", "LIGHT"], ["isArray", "WireType"], ["isArray", "options"], ["isArray", "HTTP"], 622018, ["isArray", "channelId"], [], 6270, 6272, 6276, ["isArray", "slice"], ["isArray", "style"], ["isArray", "sr"], 6291, 6292, 810, [166829824, -23563776], [167684864, -22187520], [167694848, 144208384], [null, null]];
      const items5 = [null, [null, null], [null, null], [null, null], [], 63, 67, 6];
      const items6 = [-0.00000000000000000000000000000000000000000008971968326531819, -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005616388538215783, -45023027809255430000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000654301519730164, 0, 0, 0, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006662949912491275, 4538018037391271000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, [], [], 627780, 636297, 636368, [], [8, 152], [67108864, -1728053248], [], [], [], [], [], [null, null], [false, false], ["WATCH_VIDEO", "WATCH_VIDEO_ON_MOBILE"]];
      const items7 = [[null, null]];
      module.exports = { visa: { patterns: ["%Math%"], gaps: ["y", "expiredImage", "PbULong"], lengths: [], code: { 0: "<string:1908422910>", 42: "a" } }, mastercard: { patterns: items, gaps: ["y", "expiredImage", "PbULong"], lengths: ["Array"], code: { 0: "google_sku_ids", 42: "r" } }, american-express: { patterns: ["<string:1912604612>", "ct"], gaps: [-331340691140688250000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006901700131209], lengths: [true], code: { 0: "message_previews", 42: "message" } }, diners-club: { patterns: items1, gaps: [-331340691140688250000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006901700131209], lengths: [null, null, null], code: { 0: "<string:1908422910>", 42: "a" } }, discover: { patterns: items2, gaps: ["y", "expiredImage", "PbULong"], lengths: [], code: { 0: null, 42: null } }, jcb: { patterns: items3, gaps: ["y", "expiredImage", "PbULong"], lengths: ["isArray", "length", "warn", "apply"], code: { 0: "<string:1908422910>", 42: "a" } }, unionpay: { patterns: items4, gaps: ["y", "expiredImage", "PbULong"], lengths: [-17268353450222796000000000000000000000000000000000000000000000, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008454144864388582, 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008470271626079527, -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000982033894815424, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001433732009829347, 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003155641161031735], code: { 0: "<string:70471936>", 42: "<string:39822657>" } }, maestro: { patterns: items5, gaps: ["y", "expiredImage", "PbULong"], lengths: ["time", false, false, false, false, false, false, false], code: { 0: "google_sku_ids", 42: "r" } }, elo: { patterns: items6, gaps: ["y", "expiredImage", "PbULong"], lengths: ["Array"], code: { 0: 0, 42: null } }, mir: { patterns: items7, gaps: ["y", "expiredImage", "PbULong"], lengths: ["isArray", "length", "warn", "apply"], code: { 0: true, 42: true } }, hiper: { patterns: ["Array", "../shared/errors", "r", "localpart", "Array", null, null], gaps: ["y", "expiredImage", "PbULong"], lengths: ["Array"], code: { 0: "google_sku_ids", 42: "r" } }, hipercard: { patterns: [false], gaps: ["y", "expiredImage", "PbULong"], lengths: ["Array"], code: { 0: "google_sku_ids", 42: "r" } } };
    },
    {}
  ];
  const items44 = [
    (arg0, arg1, arg2) => {
      arg2.clone = function clone(arg0) {
        let parsed = null;
        if (arg0) {
          const _JSON = JSON;
          const _JSON2 = JSON;
          parsed = JSON.parse(JSON.stringify(arg0));
        }
        return parsed;
      };
    },
    {}
  ];
  const items45 = [
    (arg0, arg1, arg2) => {
      arg2.findBestMatch = function findBestMatch(arr) {
        let reduced = null;
        if (function hasEnoughResultsToDetermineBestMatch(arr) {
          const length = arr.filter((matchStrength) => matchStrength.matchStrength).length;
          return length > 0 && length === arr.length;
        }(arr)) {
          reduced = arr.reduce((arg0, matchStrength) => {
            let tmp = arg0;
            let tmp2 = matchStrength;
            if (arg0) {
              const _Number = Number;
              const _Number2 = Number;
              if (NumberResult < Number(matchStrength.matchStrength)) {
                tmp = matchStrength;
              }
              tmp2 = tmp;
              const NumberResult = Number(tmp.matchStrength);
            }
            return tmp2;
          });
        }
        return reduced;
      };
    },
    {}
  ];
  const items46 = [
    (arg0, arg1, arg2) => {
      arg2.isValidInputType = function isValidInputType(arg0) {
        let tmp = "string" === typeof arg0;
        if (!tmp) {
          const _String = String;
          tmp = arg0 instanceof String;
        }
        return tmp;
      };
    },
    {}
  ];
  const items47 = [
    (arg0, arg1, arg2) => {
      arg2.matches = function matches(str) {
        if (Array.isArray(arg1)) {
          const first = arg1[0];
          const _String2 = String;
          const substr = str.substr(0, String(first).length);
          const _parseInt = parseInt;
          const parsed = parseInt(substr, 10);
          const _parseInt2 = parseInt;
          const _String3 = String;
          const _parseInt3 = parseInt;
          const _String4 = String;
          const parsed1 = parseInt(String(first).substr(0, substr.length), 10);
          const str2 = String(first);
          const str3 = String(arg1[1]);
          let tmp2 = parsed >= parsed1 && parsed <= parseInt(String(arg1[1]).substr(0, substr.length), 10);
          const tmp6 = parsed >= parsed1 && parsed <= parseInt(String(arg1[1]).substr(0, substr.length), 10);
        } else {
          const _String = String;
          str = String(arg1);
          const substr1 = str.substring(0, str.length);
          tmp2 = substr1 === str.substring(0, str.length);
        }
        return tmp2;
      };
    },
    {}
  ];
  const items48 = [
    (arg0, arg1, arg2) => {
      arg2.Framebus = undefined;
      let closure_0 = arg0("./lib");
      let _Promise = "undefined" !== typeof window;
      if (_Promise) {
        const _window = window;
        _Promise = window.Promise;
      }
      arg2.Framebus = () => {
        class Framebus {
          constructor(arg0) {
            obj = arg0;
            self = this;
            if (undefined === arg0) {
              obj = {};
            }
            self.origin = obj.origin || "*";
            self.channel = obj.channel || "";
            self.verifyDomain = obj.verifyDomain;
            self.targetFrames = obj.targetFrames || [];
            self.limitBroadcastToFramesArray = Boolean(obj.targetFrames);
            self.isDestroyed = false;
            self.listeners = [];
            limitBroadcastToFramesArray = self.verifyDomain;
            if (!limitBroadcastToFramesArray) {
              limitBroadcastToFramesArray = self.limitBroadcastToFramesArray;
            }
            self.hasAdditionalChecksForOnListeners = Boolean(limitBroadcastToFramesArray);
            return;
          }
          static setPromise(arg0) {
            Framebus.Promise = arg0;
            return;
          }
          static target(arg0) {
            tmp = new Framebus(arg0);
            return tmp;
          }
          addTargetFrame(arg0) {
            if (this.limitBroadcastToFramesArray) {
              targetFrames = this.targetFrames;
              tmp = arg0;
              arr = targetFrames.push(arg0);
            }
            return;
          }
          include(arg0) {
            tmp = null != arg0;
            if (tmp) {
              tmp2 = null != arg0.Window;
              if (tmp2) {
                flag = arg0.constructor === arg0.Window;
                if (flag) {
                  tmp3 = Framebus;
                  childWindows = Framebus.childWindows;
                  arr = childWindows.push(arg0);
                  flag = true;
                }
                tmp2 = flag;
              }
              tmp = tmp2;
            }
            return tmp;
          }
          target(arg0) {
            return Framebus.target(arg0);
          }
          emit(arg0, arg1, arg2) {
            tmp = arg2;
            self = this;
            if (this.isDestroyed) {
              flag4 = false;
              return false;
            } else {
              origin = self.origin;
              Framebus = origin;
              tmp2 = arg0;
              namespaceEventResult = self.namespaceEvent(arg0);
              tmp4 = Framebus;
              if (Framebus.isntString(namespaceEventResult)) {
                flag3 = false;
                return false;
              } else {
                tmp5 = Framebus;
                if (Framebus.isntString(origin)) {
                  flag2 = false;
                  return false;
                } else {
                  str = "function";
                  tmp6 = arg1;
                  if ("function" === typeof arg1) {
                    tmp = arg1;
                  }
                  tmp7 = Framebus;
                  tmp8 = namespaceEventResult;
                  tmp9 = origin;
                  tmp10 = tmp6;
                  tmp11 = tmp;
                  packagePayloadResult = Framebus.packagePayload(namespaceEventResult, origin, tmp6, tmp);
                  closure_1 = packagePayloadResult;
                  tmp13 = !packagePayloadResult;
                  flag = !tmp13;
                  if (!tmp13) {
                    if (self.limitBroadcastToFramesArray) {
                      result = self.targetFramesAsWindows();
                      item = result.forEach((arg0) => {
                        origin.sendMessage(arg0, packagePayloadResult, origin);
                      });
                      flag = true;
                    } else {
                      tmp14 = Framebus;
                      obj = {};
                      obj.origin = origin;
                      tmp15 = globalThis;
                      _window = window;
                      _self = window.top;
                      if (!_self) {
                        _window2 = window;
                        _self = window.self;
                      }
                      obj.frame = _self;
                      broadcastResult = Framebus.broadcast(packagePayloadResult, obj);
                      flag = true;
                    }
                  }
                  return flag;
                }
              }
            }
          }
          emitAsPromise(arg0, arg1) {
            Framebus = arg0;
            arg1 = arg1;
            self = this;
            promise = new Framebus.Promise((arg0, arg1) => {
              if (!self.emit(arg0, arg1, (arg0) => {
                arg0(arg0);
              })) {
                const _Error = Error;
                const concat = "Listener not added for \"".concat;
                const error = new Error("Listener not added for \"".concat(arg0, "\""));
                arg1(error);
              }
            });
            return promise;
          }
          on(arg0, arg1) {
            self = this;
            Framebus = arg1;
            if (this.isDestroyed) {
              flag2 = false;
              return false;
            } else {
              origin = self.origin;
              tmp = arg0;
              namespaceEventResult = self.namespaceEvent(arg0);
              tmp3 = Framebus;
              flag = !Framebus.subscriptionArgsInvalid(namespaceEventResult, arg1, origin);
              if (flag) {
                handler = arg1;
                if (self.hasAdditionalChecksForOnListeners) {
                  handler = function handler() {
                    let length;
                    const self = this;
                    const items = [];
                    let num = 0;
                    if (0 < arguments.length) {
                      do {
                        items[num] = arguments[num];
                        num = num + 1;
                        length = arguments.length;
                      } while (num < length);
                    }
                    let origin = self;
                    if (self) {
                      origin = self.origin;
                    }
                    let result = self.passesVerifyDomainCheck(origin);
                    if (result) {
                      let source = self;
                      if (self) {
                        source = self.source;
                      }
                      result = self.hasMatchingTargetFrame(source);
                    }
                    if (result) {
                      arg1.apply(undefined, items);
                    }
                  };
                }
                listeners = self.listeners;
                obj = {};
                obj.eventName = namespaceEventResult;
                obj.handler = handler;
                obj.originalHandler = arg1;
                arr = listeners.push(obj);
                tmp5 = Framebus;
                obj = Framebus.subscribers[origin];
                if (!obj) {
                  obj = {};
                }
                Framebus.subscribers[origin] = obj;
                tmp6 = Framebus;
                items = Framebus.subscribers[origin][namespaceEventResult];
                if (!items) {
                  items = [];
                }
                Framebus.subscribers[origin][namespaceEventResult] = items;
                tmp7 = Framebus;
                arr3 = Framebus.subscribers[origin][namespaceEventResult];
                arr1 = arr3.push(handler);
                flag = true;
              }
              return flag;
            }
          }
          off(arg0, arg1) {
            self = this;
            if (this.isDestroyed) {
              flag5 = false;
              return false;
            } else {
              tmp = arg1;
              if (self.verifyDomain) {
                num = 0;
                handler = arg1;
                tmp = arg1;
                if (0 < self.listeners.length) {
                  do {
                    tmp2 = self.listeners[num];
                    if (tmp2.originalHandler === arg1) {
                      handler = tmp2.handler;
                    }
                    num = num + 1;
                    tmp = handler;
                  } while (num < self.listeners.length);
                }
              }
              tmp3 = arg0;
              namespaceEventResult = self.namespaceEvent(arg0);
              origin = self.origin;
              tmp5 = Framebus;
              if (Framebus.subscriptionArgsInvalid(namespaceEventResult, tmp, origin)) {
                flag4 = false;
                return false;
              } else {
                tmp6 = Framebus;
                arr = Framebus.subscribers[origin];
                if (arr) {
                  tmp7 = Framebus;
                  arr = Framebus.subscribers[origin][namespaceEventResult];
                }
                if (arr) {
                  num2 = 0;
                  if (0 < arr.length) {
                    tmp8 = num2;
                    while (arr[num2] !== tmp) {
                      num2 = num2 + 1;
                    }
                    num3 = 1;
                    spliceResult = arr.splice(num2, 1);
                    flag3 = true;
                    return true;
                  }
                  flag2 = false;
                  return false;
                } else {
                  flag = false;
                  return false;
                }
              }
            }
          }
          teardown() {
            self = this;
            if (!this.isDestroyed) {
              flag = true;
              self.isDestroyed = true;
              num = 0;
              num2 = 0;
              if (0 < self.listeners.length) {
                do {
                  tmp = self.listeners[num2];
                  offResult = self.off(tmp.eventName, tmp.handler);
                  num2 = num2 + 1;
                  length = self.listeners.length;
                } while (num2 < length);
              }
              self.listeners.length = 0;
            }
            return;
          }
          passesVerifyDomainCheck(arg0) {
            self = this;
            checkOriginResult = !this.verifyDomain;
            if (!checkOriginResult) {
              tmp2 = arg0;
              checkOriginResult = self.checkOrigin(arg0);
            }
            return checkOriginResult;
          }
          targetFramesAsWindows() {
            if (this.limitBroadcastToFramesArray) {
              targetFrames = this.targetFrames;
              mapped = targetFrames.map((contentWindow) => {
                if (contentWindow instanceof globalThis.HTMLIFrameElement) {
                  contentWindow = contentWindow.contentWindow;
                }
                return contentWindow;
              });
              found = mapped.filter((arg0) => arg0);
            } else {
              found = [];
            }
            return found;
          }
          hasMatchingTargetFrame(arg0) {
            self = this;
            Framebus = arg0;
            if (this.limitBroadcastToFramesArray) {
              result = self.targetFramesAsWindows();
              tmp = globalThis;
              _Boolean = Boolean;
              return Boolean(result.find((arg0) => arg0 === arg0));
            } else {
              flag = true;
              return true;
            }
          }
          checkOrigin(arg0) {
            self = this;
            url = document.createElement("a");
            url.href = location.href;
            if ("https:" === url.protocol) {
              str4 = url.host;
              str5 = "";
              host = str4.replace(/:443$/, "");
            } else {
              str = "http:";
              if ("http:" === url.protocol) {
                str2 = url.host;
                str3 = "";
                host = str2.replace(/:80$/, "");
              } else {
                host = url.host;
              }
            }
            tmp = `${url.protocol}//${host}` === arg0;
            if (!tmp) {
              tmp2 = !self.verifyDomain || self.verifyDomain(arg0);
              tmp = tmp2;
            }
            return tmp;
          }
          namespaceEvent(arg0) {
            combined1 = arg0;
            if (this.channel) {
              str = "";
              concat = "".concat;
              str2 = ":";
              combined = "".concat(tmp.channel, ":");
              combined1 = combined.concat(arg0);
            }
            return combined1;
          }
        }
        let closure_0 = Framebus;
        Framebus.Promise = _Promise;
        return Framebus;
      }();
    },
    { ./lib: 57 }
  ];
  const items49 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("./lib");
      globalResult.attach();
      module.exports = global("./framebus").Framebus;
    },
    {}
  ];
  const items50 = [
    (arg0, arg1, arg2) => {
      arg2.attach = undefined;
      arg2.detach = undefined;
      let closure_0 = arg0("./");
      let closure_1 = false;
      arg2.attach = function attach(closure_1, file, filename) {
        let tmp = closure_1;
        if (!closure_1) {
          const _window = window;
          tmp = "undefined" === typeof window;
        }
        if (!tmp) {
          closure_1 = true;
          const _window2 = window;
          const listener = window.addEventListener("message", closure_0.onMessage, false);
        }
      };
      arg2.detach = function detach() {
        let closure_1 = false;
        const removed = window.removeEventListener("message", closure_0.onMessage, false);
      };
    },
    { ./: 57 }
  ];
  const items51 = [
    (arg0, arg1, arg2) => {
      arg2.broadcastToChildWindows = undefined;
      let closure_0 = arg0("./");
      arg2.broadcastToChildWindows = function broadcastToChildWindows(data, origin, source) {
        let childWindows;
        let diff = childWindows.childWindows.length - 1;
        if (diff >= 0) {
          do {
            let tmp2 = closure_0;
            let tmp3 = closure_0.childWindows[diff];
            if (tmp3.closed) {
              let tmp6 = closure_0;
              childWindows = closure_0.childWindows;
              let spliceResult = childWindows.splice(diff, 1);
            } else if (source !== tmp3) {
              let tmp4 = closure_0;
              let obj = { origin, frame: tmp3.top };
              let broadcastResult = closure_0.broadcast(data, obj);
            }
            diff = diff - 1;
          } while (diff >= 0);
        }
      };
    },
    { ./: 57 }
  ];
  const items52 = [
    (arg0, arg1, arg2) => {
      arg2.broadcast = undefined;
      let closure_0 = arg0("./");
      function broadcast(packagePayloadResult, arg1) {
        let frame;
        let origin;
        let num = 0;
        ({ origin, frame } = arg1);
        frame.postMessage(packagePayloadResult, origin);
        const hasOpenerResult = closure_0.hasOpener(frame);
        let tmp3 = hasOpenerResult;
        if (hasOpenerResult) {
          const _window = window;
          tmp3 = frame.opener.top !== window.top;
        }
        if (tmp3) {
          let obj = { origin, frame: frame.opener.top };
          broadcast(packagePayloadResult, obj);
        }
        let tmp12 = tmp11;
        if (frame.frames[num]) {
          do {
            let tmp13 = closure_1;
            let tmp14 = packagePayloadResult;
            obj = {};
            let tmp15 = origin;
            obj.origin = origin;
            let tmp16 = tmp12;
            obj.frame = tmp12;
            let tmp17 = closure_1(packagePayloadResult, obj);
            let tmp18 = num;
            let sum = num + 1;
            num = sum;
            let tmp20 = frame;
            tmp12 = frame.frames[sum];
          } while (tmp21);
        }
      }
      arg2.broadcast = broadcast;
    },
    { ./: 57 }
  ];
  const items53 = [
    (arg0, arg1, arg2) => {
      arg2.prefix = undefined;
      arg2.childWindows = undefined;
      arg2.subscribers = undefined;
      arg2.prefix = "/*framebus*/";
      arg2.childWindows = [];
      arg2.subscribers = {};
    },
    {}
  ];
  const items54 = [
    (arg0, arg1, arg2) => {
      arg2.dispatch = undefined;
      let closure_0 = arg0("./");
      arg2.dispatch = function dispatch(arg0, arg1, arg2, arg3, arg4) {
        let length;
        if (closure_0.subscribers[arg0]) {
          if (closure_0.subscribers[arg0][arg1]) {
            const items = [];
            if (arg2) {
              items.push(arg2);
            }
            if (arg3) {
              items.push(arg3);
            }
            let num = 0;
            if (0 < closure_0.subscribers[arg0][arg1].length) {
              do {
                let tmp5 = closure_0;
                let obj = closure_0.subscribers[arg0][arg1][num];
                let applyResult = obj.apply(arg4, items);
                num = num + 1;
                length = closure_0.subscribers[arg0][arg1].length;
              } while (num < length);
            }
          }
        }
      };
    },
    { ./: 57 }
  ];
  const items55 = [
    (arg0, arg1, arg2) => {
      arg2.hasOpener = function hasOpener(frame) {
        let tmp = frame.top === frame;
        if (tmp) {
          let tmp3 = null != frame.opener;
          if (tmp3) {
            let tmp4 = frame.opener !== frame;
            if (tmp4) {
              tmp4 = true !== frame.opener.closed;
            }
            tmp3 = tmp4;
          }
          tmp = tmp3;
        }
        return tmp;
      };
    },
    {}
  ];
  const items56 = [
    function(arg0, arg1, arg2) {
      const self = this;
      let self2 = this;
      if (this) {
        self2 = self.__createBinding;
      }
      if (self2) {
        let fn = self2;
        fn = self;
        if (self) {
          fn = self.__exportStar;
        }
        if (!fn) {
          fn = (obj, arg1) => {
            for (const key10007 in arg0) {
              let tmp4 = key10007;
              let callResult = "default" === key10007;
              if (!callResult) {
                let _Object = Object;
                callResult = hasOwnProperty.call(arg1, key10007);
              }
              if (callResult) {
                continue;
              } else {
                let tmp2 = closure_0;
                let tmp3 = closure_0(arg1, arg0, key10007);
                // continue
              }
              continue;
            }
          };
        }
        const _Object2 = Object;
        const obj = { value: true };
        fn(arg0("./attach"), arg2);
        fn(arg0("./broadcast-to-child-windows"), arg2);
        fn(arg0("./broadcast"), arg2);
        fn(arg0("./constants"), arg2);
        fn(arg0("./dispatch"), arg2);
        fn(arg0("./has-opener"), arg2);
        fn(arg0("./is-not-string"), arg2);
        fn(arg0("./message"), arg2);
        fn(arg0("./package-payload"), arg2);
        fn(arg0("./send-message"), arg2);
        fn(arg0("./subscribe-replier"), arg2);
        fn(arg0("./subscription-args-invalid"), arg2);
        fn(arg0("./types"), arg2);
        fn(arg0("./unpack-payload"), arg2);
      } else {
        const _Object = Object;
      }
    },
    {}
  ];
  const items57 = [
    (arg0, arg1, arg2) => {
      arg2.isntString = function isntString(data) {
        return "string" !== typeof data;
      };
    },
    {}
  ];
  const items58 = [
    (arg0, arg1, arg2) => {
      arg2.onMessage = undefined;
      let closure_0 = arg0("./");
      arg2.onMessage = function onMessage(data) {
        let eventData;
        let reply;
        if (!closure_0.isntString(data.data)) {
          const unpackPayloadResult = closure_0.unpackPayload(data);
          if (unpackPayloadResult) {
            ({ eventData, reply } = unpackPayloadResult);
            closure_0.dispatch("*", unpackPayloadResult.event, eventData, reply, data);
            closure_0.dispatch(data.origin, unpackPayloadResult.event, eventData, reply, data);
            const result = closure_0.broadcastToChildWindows(data.data, unpackPayloadResult.origin, data.source);
          }
        }
      };
    },
    { ./: 57 }
  ];
  const items59 = [
    (arg0, arg1, arg2) => {
      arg2.packagePayload = undefined;
      let closure_0 = arg0("./");
      arg2.packagePayload = function packagePayload(namespaceEventResult, closure_0, eventData, eventData) {
        const obj = { event: namespaceEventResult, origin: closure_0 };
        if ("function" === typeof eventData) {
          tmp.reply = closure_0.subscribeReplier(eventData, closure_0);
        }
        obj.eventData = eventData;
        return closure_0.prefix + JSON.stringify(obj);
      };
    },
    { ./: 57 }
  ];
  const items60 = [
    (arg0, arg1, arg2) => {
      arg2.sendMessage = function sendMessage(postMessage) {
        postMessage.postMessage(arg1, arg2);
      };
    },
    {}
  ];
  const items61 = [
    function(arg0, arg1, arg2) {
      let fn = this;
      if (this) {
        fn = this.__importDefault;
      }
      if (!fn) {
        fn = (__esModule) => {
          if (!__esModule) {
            const obj = { default: __esModule };
            let tmp = obj;
          } else {
            tmp = __esModule;
          }
          return tmp;
        };
      }
      arg2.subscribeReplier = undefined;
      let closure_0 = arg0("../framebus");
      let closure_1 = fn(arg0("@braintree/uuid"));
      arg2.subscribeReplier = function subscribeReplier(eventData, origin) {
        let Framebus = eventData;
        let closure_1 = origin;
        const defaultResult = closure_1.default();
        Framebus = Framebus.Framebus;
        function replier(arg0, arg1) {
          arg0(arg0, arg1);
          const Framebus = arg0.Framebus;
          Framebus.target({ origin: arg1 }).off(defaultResult, replier);
        }
        Framebus.target({ origin }).on(defaultResult, replier);
        return defaultResult;
      };
    },
    {}
  ];
  const items62 = [
    (arg0, arg1, arg2) => {
      arg2.subscriptionArgsInvalid = undefined;
      let closure_0 = arg0("./");
      arg2.subscriptionArgsInvalid = function subscriptionArgsInvalid(namespaceEventResult, originalHandler, origin) {
        const tmp = !closure_0.isntString(namespaceEventResult);
        let tmp2 = !tmp;
        if (tmp) {
          let isntStringResult = "function" !== typeof originalHandler;
          if (!isntStringResult) {
            isntStringResult = closure_0.isntString(origin);
          }
          tmp2 = isntStringResult;
        }
        return tmp2;
      };
    },
    { ./: 57 }
  ];
  const items63 = [
    (arg0, arg1, arg2) => {

    },
    {}
  ];
  const items64 = [
    (arg0, arg1, arg2) => {
      arg2.unpackPayload = undefined;
      let closure_0 = arg0("./");
      arg2.unpackPayload = function unpackPayload(data) {
        data = data.data;
        if (data.slice(0, closure_0.prefix.length) !== closure_0.prefix) {
          return false;
        } else {
          const _JSON = JSON;
          const data1 = tmp.data;
          const parsed = JSON.parse(data1.slice(closure_0.prefix.length));
          if (parsed.reply) {
            ({ origin: closure_0, source: closure_1 } = data);
            const reply = parsed.reply;
            parsed.reply = function reply(eventData) {
              if (closure_1) {
                const packagePayloadResult = closure_0.packagePayload(reply, closure_0, eventData);
                if (packagePayloadResult) {
                  closure_1.postMessage(packagePayloadResult, closure_0);
                }
              }
            };
          }
          return parsed;
        }
        const tmp = data;
      };
    },
    { ./: 57 }
  ];
  const items65 = [
    (arg0, arg1, arg2) => {
      module.exports = function uuid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (arg0) => {
          const tmp = 16 * Math.random() | 0;
          let str = tmp;
          if ("x" !== arg0) {
            str = 3 & tmp | 8;
          }
          return str.toString(16);
        });
      };
    },
    {}
  ];
  const items66 = [
    (arg0, arg1, arg2) => {
      arg2.isKitKatWebview = undefined;
      arg2.isAndroidChrome = undefined;
      arg2.isSamsungBrowser = undefined;
      arg2.isIE9 = undefined;
      arg2.isIos = undefined;
      let userAgent = "undefined" !== typeof window;
      if (userAgent) {
        const _window = window;
        userAgent = window.navigator;
      }
      if (userAgent) {
        const _window2 = window;
        userAgent = window.navigator.userAgent;
      }
      let closure_1 = arg0("@braintree/browser-detection/is-android");
      let closure_2 = arg0("@braintree/browser-detection/is-chrome-os");
      let closure_3 = arg0("@braintree/browser-detection/is-chrome");
      arg2.isIos = arg0("@braintree/browser-detection/is-ios");
      arg2.isIE9 = arg0("@braintree/browser-detection/is-ie9");
      let closure_4 = /Version\/\d\.\d* Chrome\/\d*\.0\.0\.0/;
      arg2.isKitKatWebview = function isKitKatWebview(arg0) {
        let tmp = arg0;
        if (undefined === arg0) {
          tmp = userAgent;
        }
        let isMatch = callback(tmp);
        if (isMatch) {
          isMatch = regex.test(tmp);
        }
        return isMatch;
      };
      arg2.isAndroidChrome = function isAndroidChrome(arg0) {
        let tmp = arg0;
        if (undefined === arg0) {
          tmp = userAgent;
        }
        let tmp2 = callback(tmp);
        if (!tmp2) {
          tmp2 = callback2(tmp);
        }
        if (tmp2) {
          tmp2 = callback3(tmp);
        }
        return tmp2;
      };
      arg2.isSamsungBrowser = function isSamsungBrowser(arg0) {
        let arr = arg0;
        if (undefined === arg0) {
          arr = userAgent;
        }
        let isMatch = /SamsungBrowser/.test(arr);
        if (!isMatch) {
          let tmp3 = !callback3(arr);
          if (tmp3) {
            tmp3 = arr.indexOf("Samsung") > -1;
          }
          isMatch = tmp3;
        }
        return isMatch;
      };
    },
    {}
  ];
  const items67 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./lib/device");
      module.exports = function supportsInputFormatting() {
        return !samsungBrowser.isSamsungBrowser();
      };
    },
    { ./lib/device: 67 }
  ];
  const items68 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][3][0];
      first(...arguments);
    },
    { dup: 3 }
  ];
  const items69 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][4][0];
      first(...arguments);
    },
    { dup: 4 }
  ];
  const items70 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][5][0];
      first(...arguments);
    },
    {}
  ];
  const items71 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][6][0];
      first(...arguments);
    },
    { dup: 6 }
  ];
  const items72 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][7][0];
      first(...arguments);
    },
    { dup: 7 }
  ];
  const items73 = [
    (arg0, arg1, arg2) => {
      module.exports = function isIe9(arg0) {
        let userAgent = arg0;
        if (!arg0) {
          const _window = window;
          userAgent = window.navigator.userAgent;
        }
        return -1 !== userAgent.indexOf("MSIE 9");
      };
    },
    {}
  ];
  const items74 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][14][0];
      first(...arguments);
    },
    { "Null": 143, "Null": 154 }
  ];
  const items75 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][15][0];
      first(...arguments);
    },
    { dup: 15 }
  ];
  const items76 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][16][0];
      first(...arguments);
    },
    { dup: 16 }
  ];
  const items77 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][17][0];
      first(...arguments);
    },
    { dup: 17 }
  ];
  const items78 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][18][0];
      first(...arguments);
    },
    { dup: 18 }
  ];
  const items79 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][20][0];
      first(...arguments);
    },
    {}
  ];
  const items80 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][21][0];
      first(...arguments);
    },
    {}
  ];
  const items81 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][22][0];
      first(...arguments);
    },
    {}
  ];
  const items82 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/is-ie9");
    },
    { ./dist/is-ie9: 74 }
  ];
  const items83 = [
    (arg0, arg1, arg2) => {
      const first = arguments[4][27][0];
      first(...arguments);
    },
    {}
  ];
  const items84 = [
    (arg0, arg1, arg2) => {
      module.exports = global("./dist/supports-input-formatting");
    },
    { ./dist/supports-input-formatting: 68 }
  ];
  const items85 = [
    (arg0, arg1, arg2) => {
      class AmericanExpress {
        constructor(arg0) {
          this._client = global.client;
          return;
        }
        getRewardsBalance(arg0) {
          nonce = global.nonce;
          if (nonce) {
            tmp10 = assign;
            obj = {};
            obj1 = {};
            str2 = "american-express";
            obj1.source = "american-express";
            obj._meta = obj1;
            obj.paymentMethodNonce = nonce;
            tmp11 = assign(obj, global);
            delete r4.nonce;
            self = this;
            _client = this._client;
            obj2 = { 0: false, 0: false };
            obj2.data = tmp11;
            requestResult = _client.request(obj2);
            catchPromise = requestResult.catch((originalError) => {
              let obj = { type: constants.AMEX_NETWORK_ERROR.type, code: constants.AMEX_NETWORK_ERROR.code, message: "A network error occurred when getting the American Express rewards balance.", details: obj };
              obj = { originalError };
              return Promise.reject(new closure_0(obj));
            });
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = closure_0;
            obj = {};
            tmp3 = closure_1;
            obj.type = closure_1.AMEX_NONCE_REQUIRED.type;
            obj.code = closure_1.AMEX_NONCE_REQUIRED.code;
            str = "getRewardsBalance must be called with a nonce.";
            obj.message = "getRewardsBalance must be called with a nonce.";
            prototype = closure_0.prototype;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = obj;
            tmp7 = new closure_0(obj);
            tmp8 = tmp7;
            catchPromise = Promise.reject(tmp7);
          }
          return catchPromise;
        }
        getExpressCheckoutProfile(arg0) {
          if (global.nonce) {
            self = this;
            _client = this._client;
            obj = {};
            str2 = "get";
            obj.method = "get";
            str3 = "payment_methods/amex_express_checkout_cards/";
            obj.endpoint = `payment_methods/amex_express_checkout_cards/${global.nonce}`;
            obj1 = {};
            obj2 = {};
            str4 = "american-express";
            obj2.source = "american-express";
            obj1._meta = obj2;
            obj1.paymentMethodNonce = global.nonce;
            obj.data = obj1;
            requestResult = _client.request(obj);
            catchPromise = requestResult.catch((originalError) => {
              let obj = { type: constants.AMEX_NETWORK_ERROR.type, code: constants.AMEX_NETWORK_ERROR.code, message: "A network error occurred when getting the American Express Checkout nonce profile.", details: obj };
              obj = { originalError };
              return Promise.reject(new closure_0(obj));
            });
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = closure_0;
            obj = {};
            tmp3 = closure_1;
            obj.type = closure_1.AMEX_NONCE_REQUIRED.type;
            obj.code = closure_1.AMEX_NONCE_REQUIRED.code;
            str = "getExpressCheckoutProfile must be called with a nonce.";
            obj.message = "getExpressCheckoutProfile must be called with a nonce.";
            prototype = closure_0.prototype;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = obj;
            tmp7 = new closure_0(obj);
            tmp8 = tmp7;
            catchPromise = Promise.reject(tmp7);
          }
          return catchPromise;
        }
        teardown() {
          tmp = closure_4(this, closure_3(AmericanExpress.prototype));
          return Promise.resolve();
        }
      }
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("./errors");
      const assign = global("../lib/assign").assign;
      let closure_3 = global("../lib/methods");
      let closure_4 = global("../lib/convert-methods-to-error");
      module.exports = global("@braintree/wrap-promise").wrapPrototype(AmericanExpress);
    },
    {}
  ];
  const items86 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "AMEX_NONCE_REQUIRED" };
      obj = { type: globalResult.types.NETWORK, code: "AMEX_NETWORK_ERROR" };
      module.exports = { AMEX_NONCE_REQUIRED: obj, AMEX_NETWORK_ERROR: obj };
    },
    { ../lib/braintree-error: 143 }
  ];
  const items87 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./american-express");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          const obj = { name: "American Express", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify({ name: "American Express", client: client.client, authorization: client.authorization });
          return closure_1.verify({ name: "American Express", client: client.client, authorization: client.authorization }).then((self) => closure_2.create({ authorization: self.authorization, client: self.client, debug: self.debug, assetsUrl: closure_3.create(self.authorization), name: "American Express" })).then((client) => {
            client.client = client;
            return new client(client);
          });
        }),
        VERSION: "3.112.1"
      };
    },
    {}
  ];
  const items88 = [
    (arg0, arg1, arg2) => {
      class ApplePay {
        constructor(arg0) {
          self = this;
          this._instantiatedWithClient = Boolean(!global.useDeferredClient);
          ({ client: this._client, createPromise: this._createPromise } = global);
          if (this._client) {
            result = self._setMerchantIdentifier();
          }
          return;
        }
        _waitForClient() {
          self = this;
          if (this._client) {
            tmp2 = globalThis;
            _Promise = Promise;
            resolved = Promise.resolve();
          } else {
            _createPromise = self._createPromise;
            fn = function(_client) {
              this._client = _client;
              const result = this._setMerchantIdentifier();
            };
            resolved = _createPromise.then(fn.bind(self));
          }
          return resolved;
        }
        _setMerchantIdentifier() {
          _client = this._client;
          applePayWeb = _client.getConfiguration().gatewayConfiguration.applePayWeb;
          if (applePayWeb) {
            tmp = globalThis;
            _Object = Object;
            obj = { "Null": "absolute", "Null": -1, "Null": -1 };
            obj.value = applePayWeb.merchantIdentifier;
            str = "merchantIdentifier";
            definePropertyResult = Object.defineProperty(this, "merchantIdentifier", obj);
          }
          return;
        }
        createPaymentRequest(arg0) {
          self = this;
          closure_0 = global;
          if (this._instantiatedWithClient) {
            result = self._createPaymentRequestSynchronously(global);
          } else {
            _waitForClientResult = self._waitForClient();
            fn = function() {
              return this._createPaymentRequestSynchronously(arg0);
            };
            result = _waitForClientResult.then(fn.bind(self));
          }
          return result;
        }
        _createPaymentRequestSynchronously(arg0) {
          _client = this._client;
          applePayWeb = _client.getConfiguration().gatewayConfiguration.applePayWeb;
          obj = {
            countryCode: applePayWeb.countryCode,
            currencyCode: applePayWeb.currencyCode,
            merchantCapabilities: tmp,
            supportedNetworks: supportedNetworks.map((arg0) => {
                  let str = "masterCard";
                  if ("mastercard" !== arg0) {
                    str = arg0;
                  }
                  return str;
                })
          };
          tmp = applePayWeb.merchantCapabilities || [];
          supportedNetworks = applePayWeb.supportedNetworks;
          return Object.assign({}, obj, global);
        }
        performValidation(arg0) {
          self = this;
          closure_0 = global;
          closure_1 = this;
          if (global) {
            if (global.validationURL) {
              _waitForClientResult = self._waitForClient();
              nextPromise = _waitForClientResult.then((self) => {
                let obj = { validationUrl: self.validationURL };
                let hostname = self.domainName;
                if (!hostname) {
                  const _window = window;
                  hostname = window.location.hostname;
                }
                obj.domainName = hostname;
                let merchantIdentifier = self.merchantIdentifier;
                if (!merchantIdentifier) {
                  merchantIdentifier = self.merchantIdentifier;
                }
                obj.merchantIdentifier = merchantIdentifier;
                if (null != self.displayName) {
                  obj.displayName = self.displayName;
                }
                const _client = self._client;
                obj = { 0: "query ClientConfiguration {   clientConfiguration {     analyticsUrl     environment     merchantId     assetsUrl     clientApiUrl     creditCard {       supportedCardBrands       challenges       threeDSecureEnabled       threeDSecure {         cardinalAuthenticationJWT       }     }     applePayWeb {       countryCode       currencyCode       merchantIdentifier       supportedCardBrands     }     fastlane {       enabled     }     googlePay {       displayName       supportedCardBrands       environment       googleAuthorization       paypalClientId     }     ideal {       routeId       assetsUrl     }     kount {       merchantId     }     masterpass {       merchantCheckoutId       supportedCardBrands     }     paypal {       displayName       clientId       assetsUrl       environment       environmentNoNetwork       unvettedMerchant       braintreeClientId       billingAgreementsEnabled       merchantAccountId       currencyCode       payeeEmail     }     unionPay {       merchantAccountId     }     usBankAccount {       routeId       plaidPublicKey     }     venmo {       merchantId       accessToken       environment       enrichedCustomerDataEnabled    }     visaCheckout {       apiKey       externalClientId       supportedCardBrands     }     braintreeApi {       accessToken       url     }     supportedFeatures   } }", 0: "ClientConfiguration" };
                obj.data = { _meta: { source: "apple-pay" }, applePayWebSession: obj };
                return _client.request(obj);
              });
              nextPromise1 = nextPromise.then((arg0) => {
                self.sendEvent(self._client, "applepay.performValidation.succeeded");
                return Promise.resolve(arg0);
              });
              catchPromise = nextPromise1.catch((code) => {
                self.sendEvent(self._client, "applepay.performValidation.failed");
                if ("CLIENT_REQUEST_ERROR" === code.code) {
                  let obj = { type: constants.APPLE_PAY_MERCHANT_VALIDATION_FAILED.type, code: constants.APPLE_PAY_MERCHANT_VALIDATION_FAILED.code, message: constants.APPLE_PAY_MERCHANT_VALIDATION_FAILED.message };
                  obj = { originalError: code.details.originalError };
                  obj.details = obj;
                  const prototype2 = code.prototype;
                  const tmp17 = new code(obj);
                  let rejectResult = Promise.reject(tmp17);
                } else {
                  obj = { type: constants.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.type, code: constants.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.code, message: constants.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.message };
                  const obj1 = { originalError: code };
                  obj.details = obj1;
                  const prototype = code.prototype;
                  const tmp8 = new code(obj);
                  rejectResult = Promise.reject(tmp8);
                }
                return rejectResult;
              });
            }
            return catchPromise;
          }
          tmp = new closure_0(closure_2.APPLE_PAY_VALIDATION_URL_REQUIRED);
          catchPromise = Promise.reject(tmp);
          return;
        }
        tokenize(arg0) {
          self = this;
          closure_0 = global;
          closure_1 = this;
          if (global.token) {
            _waitForClientResult = self._waitForClient();
            nextPromise = _waitForClientResult.then(() => {
              const _client = self._client;
              let obj = { 0: null, 0: null };
              obj = { _meta: { source: "apple-pay" } };
              obj = { paymentData: btoa(JSON.stringify(arg0.token.paymentData)) };
              obj.applePaymentToken = Object.assign({}, arg0.token, obj);
              obj.data = obj;
              return _client.request(obj);
            });
            nextPromise1 = nextPromise.then((arg0) => {
              self.sendEvent(self._client, "applepay.tokenize.succeeded");
              return Promise.resolve(arg0.applePayCards[0]);
            });
            catchPromise = nextPromise1.catch((originalError) => {
              self.sendEvent(self._client, "applepay.tokenize.failed");
              let obj = { type: constants.APPLE_PAY_TOKENIZATION.type, code: constants.APPLE_PAY_TOKENIZATION.code, message: constants.APPLE_PAY_TOKENIZATION.message, details: obj };
              obj = { originalError };
              return Promise.reject(new originalError(obj));
            });
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = closure_0;
            tmp3 = closure_2;
            prototype = closure_0.prototype;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = new closure_0(closure_2.APPLE_PAY_PAYMENT_TOKEN_REQUIRED);
            tmp7 = tmp6;
            catchPromise = Promise.reject(tmp6);
          }
          return catchPromise;
        }
        teardown() {
          tmp = closure_4(this, closure_3(ApplePay.prototype));
          return Promise.resolve();
        }
      }
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("../lib/analytics");
      let closure_2 = global("./errors");
      let closure_3 = global("../lib/methods");
      let closure_4 = global("../lib/convert-methods-to-error");
      module.exports = global("@braintree/wrap-promise").wrapPrototype(ApplePay);
    },
    {}
  ];
  const items89 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      let obj = { placeholder: null, live-guild-stage: null, guild-event: null, type: globalResult.types.MERCHANT };
      obj = { placeholder: true, live-guild-stage: true, guild-event: true, type: globalResult.types.MERCHANT };
      obj = { type: globalResult.types.NETWORK };
      const obj2 = { placeholder: 0.7187510760704756, live-guild-stage: 41813922387048243000000000000000000000000000, guild-event: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005307471300244092, type: globalResult.types.MERCHANT };
      const obj3 = { placeholder: true, live-guild-stage: true, guild-event: true, type: globalResult.types.NETWORK };
      module.exports = { APPLE_PAY_NOT_ENABLED: obj, APPLE_PAY_VALIDATION_URL_REQUIRED: obj, APPLE_PAY_MERCHANT_VALIDATION_NETWORK: obj, APPLE_PAY_MERCHANT_VALIDATION_FAILED: { type: globalResult.types.MERCHANT }, APPLE_PAY_PAYMENT_TOKEN_REQUIRED: obj2, APPLE_PAY_TOKENIZATION: obj3 };
    },
    { ../lib/braintree-error: 143 }
  ];
  const items90 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./apple-pay");
      let closure_1 = global("../lib/analytics");
      let closure_2 = global("../lib/braintree-error");
      let closure_3 = global("../lib/basic-component-verification");
      let closure_4 = global("../lib/create-assets-url");
      let closure_5 = global("../lib/create-deferred-client");
      let closure_6 = global("./errors");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          return closure_3.verify({ name: "Apple Pay", client: client.client, authorization: client.authorization }).then((self) => {
            let obj = { authorization: self.authorization, client: self.client, debug: self.debug, assetsUrl: closure_4.create(self.authorization), name: "Apple Pay" };
            obj = closure_5.create(obj);
            const nextPromise = obj.then((getConfiguration) => {
              if (getConfiguration.getConfiguration().gatewayConfiguration.applePayWeb) {
                closure_1.sendEvent(getConfiguration, "applepay.initialized");
                let rejectResult = getConfiguration;
              } else {
                const prototype = ctor.prototype;
                const tmp6 = new ctor(constants.APPLE_PAY_NOT_ENABLED);
                rejectResult = Promise.reject(tmp6);
              }
              return rejectResult;
            });
            self.createPromise = nextPromise;
            const tmp = new self(self);
            let nextPromise1 = tmp;
            self = tmp;
            if (!self.useDeferredClient) {
              nextPromise1 = nextPromise.then((_client) => {
                tmp._client = _client;
                return tmp;
              });
            }
            return nextPromise1;
          });
        }),
        VERSION: "3.112.1"
      };
    },
    {}
  ];
  const items91 = [
    (arg0, arg1, arg2) => {
      class Client {
        constructor(arg0) {
          obj = global;
          self = this;
          if (!global) {
            obj = {};
          }
          BRAINTREE_VERSION = JSON.stringify(obj);
          gatewayConfiguration = obj.gatewayConfiguration;
          closure_1 = gatewayConfiguration;
          if (gatewayConfiguration) {
            items = [];
            item = items.forEach((arg0) => {
              if (arg0 in gatewayConfiguration) {
                if (!callback(gatewayConfiguration[arg0])) {
                  const obj = { type: constants.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type, code: constants.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code, message: `${arg0} property is on an invalid domain.` };
                  const prototype = ctor.prototype;
                  const tmp9 = new ctor(obj);
                  throw tmp9;
                }
              }
            });
            self.getConfiguration = () => JSON.parse(closure_0);
            tmp8 = closure_2;
            self._request = closure_2;
            self._configuration = self.getConfiguration();
            str = "/v1/";
            self._clientApiBaseUrl = `${gatewayConfiguration.clientApiUrl}/v1/`;
            if (gatewayConfiguration.graphQL) {
              tmp9 = closure_3;
              if (closure_3(gatewayConfiguration.graphQL.url)) {
                tmp18 = closure_1;
                obj = {};
                obj.graphQL = gatewayConfiguration.graphQL;
                prototype3 = closure_1.prototype;
                tmp19 = new.target;
                tmp20 = new.target;
                tmp21 = obj;
                tmp22 = new closure_1(obj);
                tmp23 = tmp22;
                self._graphQL = tmp22;
              } else {
                tmp10 = closure_4;
                obj1 = {};
                tmp11 = closure_13;
                obj1.type = closure_13.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type;
                tmp12 = closure_13;
                obj1.code = closure_13.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code;
                str2 = "graphQL.url property is on an invalid domain.";
                obj1.message = "graphQL.url property is on an invalid domain.";
                prototype2 = closure_4.prototype;
                tmp13 = new.target;
                tmp14 = new.target;
                tmp15 = obj1;
                tmp16 = new closure_4(obj1);
                tmp17 = tmp16;
                throw tmp16;
              }
            }
            return;
          } else {
            tmp = closure_4;
            tmp2 = closure_13;
            prototype = closure_4.prototype;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = new closure_4(closure_13.CLIENT_MISSING_GATEWAY_CONFIGURATION);
            tmp6 = tmp5;
            throw tmp5;
          }
        }
        static initialize(arg0) {
          BRAINTREE_VERSION = global;
          tmp2 = FRAUDNET_URL[global.authorization];
          if (tmp2) {
            tmp12 = closure_12;
            str2 = "custom.client.load.cached";
            sendEventResult = closure_12.sendEvent(tmp2, "custom.client.load.cached");
            return tmp2;
          } else {
            tmp3 = closure_7;
            tmp4 = global;
            tmp5 = closure_7(tmp.authorization);
            tmp6 = getConfiguration;
            tmp7 = tmp5;
            promise = getConfiguration(tmp5, global.sessionId);
            nextPromise = promise.then((self) => {
              if (self.debug) {
                self.isDebug = true;
              }
              self.authorization = self.authorization;
              const tmp = new closure_23(self);
              return tmp;
            });
            tmp8 = nextPromise;
            tmp9 = FRAUDNET_URL;
            FRAUDNET_URL[global.authorization] = nextPromise;
            tmp10 = closure_12;
            str = "custom.client.load.initialized";
            sendEventResult1 = closure_12.sendEvent(nextPromise, "custom.client.load.initialized");
            nextPromise1 = nextPromise.then((arg0) => {
              closure_12.sendEvent(closure_1, "custom.client.load.succeeded");
              return arg0;
            });
            return nextPromise1.catch((arg0) => {
              delete r1[r0];
              return Promise.reject(arg0);
            });
          }
        }
        static clearCache() {
          FRAUDNET_URL = {};
          return;
        }
        _findOrCreateFraudnetJSON(arg0) {
          self = this;
          element = document.querySelector(`script[fncls="${closure_19}"]`);
          if (!element) {
            _document = document;
            body = document.body;
            _document2 = document;
            str = "script";
            appendChildResult = body.appendChild(document.createElement("script"));
            str2 = "application/json";
            appendChildResult.type = "application/json";
            tmp2 = FRAUDNET_FNCLS;
            str3 = "fncls";
            attr = appendChildResult.setAttribute("fncls", FRAUDNET_FNCLS);
            element = appendChildResult;
          }
          configuration = self.getConfiguration();
          obj = { rda_tenant: "bt_card", mid: configuration.gatewayConfiguration.merchantId };
          BRAINTREE_VERSION = obj;
          str4 = configuration.authorizationFingerprint;
          if (str4) {
            str5 = "&";
            parts = str4.split("&");
            item = parts.forEach((str) => {
              const parts = str.split("=");
              let tmp = "customer_id" === parts[0];
              if (tmp) {
                tmp = parts.length > 1;
              }
              if (tmp) {
                obj.cid = parts[1];
              }
            });
          }
          obj1 = { f: global.substr(0, 32), fp: obj, bu: false, s: FRAUDNET_SOURCE };
          element.text = JSON.stringify(obj1);
          return;
        }
        request(arg0, arg1) {
          BRAINTREE_VERSION = global;
          closure_1 = module;
          closure_2 = this;
          promise = new Promise((self) => {
            let closure_1 = arg1;
            let collectDeviceData = "payment_methods/credit_cards" === self.endpoint;
            if (collectDeviceData) {
              collectDeviceData = self.getConfiguration().gatewayConfiguration.creditCards.collectDeviceData;
            }
            let closure_3 = Boolean(collectDeviceData);
            let tmp2;
            if ("graphQLApi" !== self.api) {
              let str = "options.method";
              if (self.method) {
                let str2;
                if (!self.endpoint) {
                  str2 = "options.endpoint";
                }
                str = str2;
              }
              tmp2 = str;
            }
            if (tmp2) {
              let obj = { type: constants.CLIENT_OPTION_REQUIRED.type, code: constants.CLIENT_OPTION_REQUIRED.code, message: `${tmp2} is required when making a request.` };
              const prototype2 = ctor.prototype;
              const tmp31 = new ctor(obj);
              throw tmp31;
            } else {
              let str5 = "clientApi";
              if ("api" in self) {
                str5 = self.api;
              }
              self = str5;
              obj = { method: self.method, graphQL: self._graphQL, timeout: self.timeout, metadata: self._configuration.analyticsMetadata };
              if ("clientApi" === str5) {
                let _clientApiBaseUrl = self._clientApiBaseUrl;
                obj.data = closure_8.addMetadata(self._configuration, self.data);
              } else if ("graphQLApi" !== str5) {
                obj = { type: constants.CLIENT_OPTION_INVALID.type, code: constants.CLIENT_OPTION_INVALID.code, message: "options.api is invalid." };
                const prototype = ctor.prototype;
                const tmp17 = new ctor(obj);
                throw tmp17;
              } else {
                _clientApiBaseUrl = closure_15[closure_2._configuration.gatewayConfiguration.environment];
                self.endpoint = "";
                obj.method = "post";
                const obj1 = {};
                const obj2 = { platform: self._configuration.analyticsMetadata.platform, source: self._configuration.analyticsMetadata.source, integration: self._configuration.analyticsMetadata.integration, sessionId: self._configuration.analyticsMetadata.sessionId, version: closure_14 };
                obj1.clientSdkMetadata = obj2;
                obj.data = callback2(obj1, self.data);
                const _configuration = self._configuration;
                const obj3 = { Authorization: `Bearer ${_configuration.authorizationFingerprint || _configuration.authorization}`, Braintree-Version: self };
                obj.headers = obj3;
                const tmp9 = _configuration.authorizationFingerprint || _configuration.authorization;
              }
              obj.url = _clientApiBaseUrl + self.endpoint;
              obj.sendAnalyticsEvent = (arg0) => {
                closure_12.sendEvent(str5, arg0);
              };
              self._request(obj, (arg0, errors, httpStatus) => {
                if (-1 === httpStatus) {
                  const prototype5 = ctor.prototype;
                  let tmp2 = new ctor(constants.CLIENT_REQUEST_TIMEOUT);
                } else if (401 === httpStatus) {
                  const prototype4 = ctor.prototype;
                  tmp2 = new ctor(constants.CLIENT_AUTHORIZATION_INVALID);
                } else if (403 === httpStatus) {
                  const prototype3 = ctor.prototype;
                  tmp2 = new ctor(constants.CLIENT_AUTHORIZATION_INSUFFICIENT);
                } else if (429 === httpStatus) {
                  const prototype2 = ctor.prototype;
                  tmp2 = new ctor(constants.CLIENT_RATE_LIMITED);
                } else if (httpStatus >= 500) {
                  const prototype = ctor.prototype;
                  tmp2 = new ctor(constants.CLIENT_GATEWAY_NETWORK);
                } else {
                  let tmp = httpStatus < 200;
                  if (!tmp) {
                    tmp = httpStatus >= 400;
                  }
                  if (tmp) {
                    let obj = { type: constants.CLIENT_REQUEST_ERROR.type, code: constants.CLIENT_REQUEST_ERROR.code, message: constants.CLIENT_REQUEST_ERROR.message };
                    tmp2 = callback(arg0, obj);
                  }
                }
                let tmp28;
                if (tmp2) {
                  tmp2.details = tmp2.details || {};
                  tmp2.details.httpStatus = httpStatus;
                  tmp28 = tmp2;
                }
                if (tmp28) {
                  errors(tmp28);
                } else {
                  if ("graphQLApi" === str5) {
                    if (errors.errors) {
                      obj = { type: constants.CLIENT_GRAPHQL_REQUEST_ERROR.type, code: constants.CLIENT_GRAPHQL_REQUEST_ERROR.code, message: constants.CLIENT_GRAPHQL_REQUEST_ERROR.message };
                      errors(callback(errors.errors, obj));
                    }
                  }
                  obj = { _httpStatus: httpStatus };
                  const tmp31 = callback2(obj, errors);
                  let creditCards = closure_3;
                  if (closure_3) {
                    creditCards = tmp31.creditCards;
                  }
                  if (creditCards) {
                    creditCards = tmp31.creditCards.length > 0;
                  }
                  if (creditCards) {
                    const result = str5._findOrCreateFraudnetJSON(tmp31.creditCards[0].nonce);
                    const obj1 = { src: closure_21, forceScriptReload: true };
                    const script = closure_18.loadScript(obj1);
                  }
                  arg0(tmp31);
                }
              });
            }
          });
          tmp = promise;
          if ("function" === typeof module) {
            tmp2 = closure_9;
            tmp3 = closure_10;
            closure_1 = closure_9(closure_10(module));
            nextPromise = promise.then((_httpStatus) => {
              callback(null, _httpStatus, _httpStatus._httpStatus);
            });
            catchPromise = nextPromise.catch((details) => {
              let httpStatus = details;
              if (details) {
                httpStatus = details.details;
              }
              if (httpStatus) {
                httpStatus = details.details.httpStatus;
              }
              callback(details, null, httpStatus);
            });
          }
          return tmp;
        }
        toJSON() {
          return this.getConfiguration();
        }
        getVersion() {
          return VERSION;
        }
      }
      global("./constants").BRAINTREE_VERSION;
      let closure_1 = global("./request/graphql");
      let closure_2 = global("./request");
      let closure_3 = global("../lib/is-verified-domain");
      let closure_4 = global("../lib/braintree-error");
      let closure_5 = global("../lib/convert-to-braintree-error");
      const getConfiguration = global("./get-configuration").getConfiguration;
      let closure_7 = global("../lib/create-authorization-data");
      let closure_8 = global("../lib/add-metadata");
      let closure_9 = global("../lib/once");
      let closure_10 = global("../lib/deferred");
      const assign = global("../lib/assign").assign;
      let closure_12 = global("../lib/analytics");
      let closure_13 = global("./errors");
      const VERSION = global("../lib/constants").VERSION;
      const GRAPHQL_URLS = global("../lib/constants").GRAPHQL_URLS;
      let closure_16 = global("../lib/methods");
      let closure_17 = global("../lib/convert-methods-to-error");
      let closure_18 = global("../lib/assets");
      const FRAUDNET_FNCLS = global("../lib/constants").FRAUDNET_FNCLS;
      const FRAUDNET_SOURCE = global("../lib/constants").FRAUDNET_SOURCE;
      const FRAUDNET_URL = global("../lib/constants").FRAUDNET_URL;
      let closure_22 = {};
      Client.prototype.teardown = global("@braintree/wrap-promise")(function() {
        const authorization = this.getConfiguration().authorization;
        delete r2[r1];
        callback6(this, callback5(Client.prototype));
        return Promise.resolve();
      });
      module.exports = Client;
    },
    {}
  ];
  const items92 = [
    (arg0, arg1, arg2) => {
      module.exports = { BRAINTREE_VERSION: "2018-05-10" };
    },
    {}
  ];
  const items93 = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN" };
      obj = { type: globalResult.types.MERCHANT, code: "CLIENT_OPTION_REQUIRED" };
      obj = { type: globalResult.types.MERCHANT, code: "CLIENT_OPTION_INVALID" };
      const obj3 = { placeholder: "_createV1PaymentDataRequest", live-guild-stage: "_createV2PaymentDataRequest", guild-event: "focus", type: globalResult.types.NETWORK };
      const obj4 = { placeholder: "focus", live-guild-stage: "blur", guild-event: "empty", type: globalResult.types.NETWORK };
      const obj5 = { placeholder: true, live-guild-stage: true, guild-event: true, type: globalResult.types.NETWORK };
      const obj9 = { placeholder: "braintree-hosted-fields-focused", live-guild-stage: "braintree-hosted-fields-invalid", guild-event: "braintree-hosted-fields-valid", type: globalResult.types.MERCHANT };
      module.exports = { CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN: obj, CLIENT_OPTION_REQUIRED: obj, CLIENT_OPTION_INVALID: obj, CLIENT_MISSING_GATEWAY_CONFIGURATION: { type: globalResult.types.INTERNAL }, CLIENT_INVALID_AUTHORIZATION: { type: globalResult.types.MERCHANT }, CLIENT_GATEWAY_NETWORK: obj3, CLIENT_REQUEST_TIMEOUT: obj4, CLIENT_REQUEST_ERROR: obj5, CLIENT_GRAPHQL_REQUEST_ERROR: { type: globalResult.types.NETWORK }, CLIENT_RATE_LIMITED: { type: globalResult.types.MERCHANT }, CLIENT_AUTHORIZATION_INSUFFICIENT: { type: globalResult.types.MERCHANT }, CLIENT_AUTHORIZATION_INVALID: obj9 };
    },
    { ../lib/braintree-error: 143 }
  ];
  const items94 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("./request");
      let closure_2 = global("@braintree/uuid");
      let closure_3 = global("../lib/constants");
      let closure_4 = global("./errors");
      let closure_5 = global("./request/graphql");
      const GRAPHQL_URLS = global("../lib/constants").GRAPHQL_URLS;
      let closure_7 = global("../lib/is-date-string-before-or-on");
      const BRAINTREE_VERSION = global("./constants").BRAINTREE_VERSION;
      const globalResult = global("@braintree/wrap-promise");
      module.exports = {
        getConfiguration: global("@braintree/wrap-promise")(function getConfiguration(arg0, sessionId) {
          let closure_0 = arg0;
          let closure_1 = sessionId;
          return new Promise((self) => {
            let tmp = arg1;
            if (!arg1) {
              tmp = attrs();
            }
            let obj = { merchantAppId: window.location.host, platform: obj.PLATFORM, sdkVersion: obj.VERSION, source: obj.SOURCE, integration: obj.INTEGRATION, integrationType: obj.INTEGRATION, sessionId: tmp };
            const attrs = self.attrs;
            attrs._meta = obj;
            attrs.braintreeLibraryVersion = obj.BRAINTREE_LIBRARY_VERSION;
            attrs.configVersion = "3";
            obj = { url: self.configUrl, method: "GET", data: attrs };
            if (attrs.authorizationFingerprint) {
              if (self.graphQL) {
                if (callback(self.graphQL.date, closure_8)) {
                  obj = {};
                  const obj1 = { url: self.graphQL.url, features: [null] };
                  obj.graphQL = obj1;
                  const prototype2 = ctor.prototype;
                  const tmp20 = new ctor(obj);
                  obj.graphQL = tmp20;
                }
                obj.metadata = obj;
              }
              arg1(obj, (originalError, gatewayConfiguration) => {
                if (originalError) {
                  if (403 === arg2) {
                    let CLIENT_GATEWAY_NETWORK = constants.CLIENT_AUTHORIZATION_INSUFFICIENT;
                  } else if (401 === arg2) {
                    CLIENT_GATEWAY_NETWORK = constants.CLIENT_AUTHORIZATION_INVALID;
                  } else {
                    CLIENT_GATEWAY_NETWORK = constants.CLIENT_GATEWAY_NETWORK;
                  }
                  let obj = {};
                  ({ type: obj2.type, code: obj2.code, message: obj2.message } = CLIENT_GATEWAY_NETWORK);
                  obj = { originalError };
                  obj.details = obj;
                  const prototype = originalError.prototype;
                  const tmp15 = new originalError(obj);
                  gatewayConfiguration(tmp15);
                } else {
                  obj = {};
                  let str = "CLIENT_TOKEN";
                  if (attrs.tokenizationKey) {
                    str = "TOKENIZATION_KEY";
                  }
                  obj.authorizationType = str;
                  obj.authorizationFingerprint = attrs.authorizationFingerprint;
                  obj.analyticsMetadata = obj;
                  obj.gatewayConfiguration = gatewayConfiguration;
                  originalError(obj);
                }
              });
            }
            if (attrs.tokenizationKey) {
              const obj2 = {};
              const obj3 = { url: closure_6[closure_0.environment], features: [null] };
              obj2.graphQL = obj3;
              const prototype = ctor.prototype;
              const tmp10 = new ctor(obj2);
              obj.graphQL = tmp10;
              obj.metadata = obj;
            }
          });
        })
      };
    },
    {}
  ];
  const items95 = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("./client");
      let closure_2 = global("../lib/errors");
      const globalResult = global("@braintree/wrap-promise");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(authorization) {
          if (authorization.authorization) {
            let initializeResult = closure_1.initialize(authorization);
          } else {
            const obj = { type: constants.INSTANTIATION_OPTION_REQUIRED.type, code: constants.INSTANTIATION_OPTION_REQUIRED.code, message: "options.authorization is required when instantiating a client." };
            const prototype = ctor.prototype;
            const tmp7 = new ctor(obj);
            initializeResult = Promise.reject(tmp7);
          }
          return initializeResult;
        }),
        VERSION: "3.112.1"
      };
    },
    {}
  ];
  const items96 = [
    (arg0, arg1, arg2) => {
      function _requestWithRetry(timeout, arg1, arg2) {
        let graphQL;
        let url;
        let closure_0 = timeout;
        const assign = arg1;
        const callback = arg2;
        ({ url, graphQL } = timeout);
        const requestObject = globalResult.getRequestObject();
        const _requestWithRetry = requestObject;
        let isGraphQLRequestResult = graphQL;
        if (graphQL) {
          isGraphQLRequestResult = graphQL.isGraphQLRequest(url, tmp.data);
        }
        const BooleanResult = Boolean(isGraphQLRequestResult);
        timeout.headers = assign({ Content-Type: "application/json" }, timeout.headers);
        if (BooleanResult) {
          const prototype2 = ctor.prototype;
          let obj2 = new ctor(tmp);
        } else {
          const prototype = ctor2.prototype;
          obj2 = new ctor2(tmp);
        }
        const isAvailable = obj2;
        url = obj2.getUrl();
        let body = obj2.getBody();
        const method = obj2.getMethod();
        const headers = obj2.getHeaders();
        const ctor = headers;
        if ("GET" === method) {
          url = closure_0.queryify(url, body);
          body = null;
        }
        if (isAvailable) {
          obj.onreadystatechange = () => {
            if (4 === requestObject.readyState) {
              if (0 === requestObject.status) {
                if (BooleanResult) {
                  delete r4.graphQL;
                  requestObject(arg0, arg1, arg2);
                }
              }
              const data = determineStatusResult(requestObject.responseText);
              let closure_4 = obj2.adaptResponseBody(data);
              const determineStatusResult = obj2.determineStatus(requestObject.status, data);
              if (determineStatusResult < 400) {
                if (determineStatusResult >= 200) {
                  arg2(null, closure_4, determineStatusResult);
                }
              }
              if (BooleanResult) {
                let tmp18 = "UNKNOWN" === tmp17;
                if (!tmp18) {
                  tmp18 = "INTERNAL" === tmp17;
                }
                if (tmp18) {
                  delete r4.graphQL;
                  requestObject(arg0, arg1, arg2);
                }
              }
              if (arg1 < 1) {
                let tmp21 = !determineStatusResult;
                if (!tmp21) {
                  tmp21 = 408 === tmp20;
                }
                if (tmp21) {
                  const sum = arg1 + 1;
                  const arg1 = sum;
                  requestObject(arg0, sum, arg2);
                }
              }
              let str3 = closure_4;
              if (!closure_4) {
                str3 = "error";
              }
              let num5 = determineStatusResult;
              if (!determineStatusResult) {
                num5 = 500;
              }
              arg2(str3, null, num5);
              const tmp22 = arg2;
            }
          };
        } else {
          if (tmp.headers) {
            url = closure_0.queryify(url, headers);
          }
          obj.onload = () => {
            arg2(null, callback(requestObject.responseText), requestObject.status);
          };
          obj.onerror = () => {
            arg2("error", null, 500);
          };
          obj.onprogress = () => {

          };
          obj.ontimeout = () => {
            arg2("timeout", null, -1);
          };
        }
        requestObject.open(method, url, true);
        requestObject.timeout = timeout.timeout;
        if (isAvailable) {
          const _Object = Object;
          const keys = Object.keys(headers);
          const item = keys.forEach((baggage) => {
            requestObject.setRequestHeader(baggage, headers[baggage]);
          });
        }
        requestObject.send(callback(method, body));
      }
      let closure_0 = global("../../lib/querystring");
      const assign = global("../../lib/assign").assign;
      let closure_2 = global("./prep-body");
      let closure_3 = global("./parse-body");
      const globalResult = global("./xhr");
      const isAvailable = globalResult.isAvailable;
      let closure_6 = global("./graphql/request");
      let closure_7 = global("./default-request");
      module.exports = {
        request(timeout) {
          _requestWithRetry(timeout, 0, arg1);
        }
      };
    },
    {}
  ];
  const items97 = [
    (arg0, arg1, arg2) => {
      class DefaultRequest {
        constructor(arg0) {
          ({ url: this._url, data: this._data, method: this._method, headers: this._headers } = global);
          return;
        }
        getUrl() {
          return this._url;
        }
        getBody() {
          return this._data;
        }
        getMethod() {
          return this._method;
        }
        getHeaders() {
          return this._headers;
        }
        adaptResponseBody(arg0) {
          return global;
        }
        determineStatus(arg0) {
          return global;
        }
      }
      module.exports = DefaultRequest;
    },
    {}
  ];
  const items98 = [
    (arg0, arg1, arg2) => {
      function mapCardTypes(arr) {
        let closure_0 = arg1;
        return arr.reduce((arr) => {
          let combined = arr;
          if (arg1.hasOwnProperty(arg1)) {
            combined = arr.concat(arg1[arg1]);
          }
          return combined;
        }, []);
      }
      let closure_0 = global("./error");
      const assign = global("../../../../lib/assign").assign;
      let closure_2 = {};
      let closure_3 = {};
      let closure_4 = {};
      let closure_5 = {};
      let closure_6 = { cvv: true, postal-code: true, border: true, display: true, height: true, left: true, opacity: true };
      module.exports = function configurationResponseAdapter(data, _graphQL) {
        if (data.data) {
          if (!data.errors) {
            let tmp2 = function adaptConfigurationResponseBody(data, _graphQL) {
              const clientConfiguration = data.data.clientConfiguration;
              let obj = { environment: str.toLowerCase(), clientApiUrl: clientConfiguration.clientApiUrl, assetsUrl: clientConfiguration.assetsUrl, analytics: obj, merchantId: clientConfiguration.merchantId, venmo: "off" };
              obj = { url: clientConfiguration.analyticsUrl };
              if (clientConfiguration.supportedFeatures) {
                obj = { url: _graphQL._graphQL._config.url };
                const supportedFeatures = clientConfiguration.supportedFeatures;
                obj.features = supportedFeatures.map((str) => str.toLowerCase());
                obj.graphQL = obj;
              }
              if (clientConfiguration.braintreeApi) {
                obj.braintreeApi = clientConfiguration.braintreeApi;
              }
              if (clientConfiguration.applePayWeb) {
                obj.applePayWeb = clientConfiguration.applePayWeb;
                obj.applePayWeb.supportedNetworks = callback2(clientConfiguration.applePayWeb.supportedCardBrands, closure_3);
                const applePayWeb = obj.applePayWeb;
                delete r2.supportedCardBrands;
              }
              if (clientConfiguration.fastlane) {
                obj.fastlane = clientConfiguration.fastlane;
              }
              if (clientConfiguration.ideal) {
                obj.ideal = clientConfiguration.ideal;
              }
              if (clientConfiguration.kount) {
                const obj1 = { kountMerchantId: clientConfiguration.kount.merchantId };
                obj.kount = obj1;
              }
              if (clientConfiguration.creditCard) {
                const challenges = clientConfiguration.creditCard.challenges;
                obj.challenges = challenges.map((str) => str.toLowerCase());
                const obj2 = { supportedCardTypes: callback2(clientConfiguration.creditCard.supportedCardBrands, closure_2) };
                obj.creditCards = obj2;
                obj.threeDSecureEnabled = clientConfiguration.creditCard.threeDSecureEnabled;
                obj.threeDSecure = clientConfiguration.creditCard.threeDSecure;
              } else {
                obj.challenges = [];
                const obj3 = { supportedCardTypes: [] };
                obj.creditCards = obj3;
                obj.threeDSecureEnabled = false;
              }
              if (clientConfiguration.googlePay) {
                const obj4 = { displayName: clientConfiguration.googlePay.displayName, enabled: true, environment: clientConfiguration.googlePay.environment.toLowerCase(), googleAuthorizationFingerprint: clientConfiguration.googlePay.googleAuthorization, paypalClientId: clientConfiguration.googlePay.paypalClientId, supportedNetworks: callback2(clientConfiguration.googlePay.supportedCardBrands, closure_5) };
                obj.androidPay = obj4;
                const str2 = clientConfiguration.googlePay.environment;
              }
              if (clientConfiguration.venmo) {
                const obj5 = { merchantId: clientConfiguration.venmo.merchantId, accessToken: clientConfiguration.venmo.accessToken, environment: clientConfiguration.venmo.environment.toLowerCase(), enrichedCustomerDataEnabled: clientConfiguration.venmo.enrichedCustomerDataEnabled };
                obj.payWithVenmo = obj5;
                const str3 = clientConfiguration.venmo.environment;
              }
              if (clientConfiguration.paypal) {
                obj.paypalEnabled = true;
                obj.paypal = callback({}, clientConfiguration.paypal);
                obj.paypal.currencyIsoCode = obj.paypal.currencyCode;
                obj.paypal.environment = obj.paypal.environment.toLowerCase();
                const paypal = obj.paypal;
                delete r1.currencyCode;
                const str4 = obj.paypal.environment;
              } else {
                obj.paypalEnabled = false;
              }
              if (clientConfiguration.unionPay) {
                const obj6 = { enabled: true, merchantAccountId: clientConfiguration.unionPay.merchantAccountId };
                obj.unionPay = obj6;
              }
              if (clientConfiguration.visaCheckout) {
                const obj7 = { apikey: clientConfiguration.visaCheckout.apiKey, encryptionKey: clientConfiguration.visaCheckout.encryptionKey, externalClientId: clientConfiguration.visaCheckout.externalClientId, supportedCardTypes: callback2(clientConfiguration.visaCheckout.supportedCardBrands, closure_4) };
                obj.visaCheckout = obj7;
              }
              if (clientConfiguration.masterpass) {
                const obj8 = { merchantCheckoutId: clientConfiguration.masterpass.merchantCheckoutId, supportedNetworks: callback2(clientConfiguration.masterpass.supportedCardBrands, closure_6) };
                obj.masterpass = obj8;
              }
              if (clientConfiguration.usBankAccount) {
                const obj9 = { routeId: clientConfiguration.usBankAccount.routeId };
                const obj10 = { publicKey: clientConfiguration.usBankAccount.plaidPublicKey };
                obj9.plaid = obj10;
                obj.usBankAccount = obj9;
              }
              return obj;
            }(data, _graphQL);
          }
          return tmp2;
        }
        tmp2 = callback(data);
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./error");
      let closure_1 = {};
      let closure_2 = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null };
      let closure_3 = { PSDTWO: "psd2" };
      module.exports = function creditCardTokenizationFastlaneResponseAdapter(data) {
        if (data.data) {
          if (!data.errors) {
            let tmp = function adaptTokenizeCreditCardForFastlaneResponseBody(data) {
              const tokenizeCreditCardForPayPalConnect = data.data.tokenizeCreditCardForPayPalConnect;
              const details = tokenizeCreditCardForPayPalConnect.paymentMethod.details;
              let str = "";
              if (details.last4) {
                str = details.last4.substr(2, 4);
                const str2 = details.last4;
              }
              const binData = details.binData;
              if (binData) {
                const items = [-0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008649006011193397, -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008969343599667368, -441671388477542750000000000000000000, 0.000000000000000000000000000000000000000000009809094802573727, -10775049755396236000000000000000, "outline"];
                const item = items.forEach((arg0) => {
                  if (binData[arg0]) {
                    tmp[arg0] = closure_2[tmp[arg0]];
                  } else {
                    tmp[arg0] = "Unknown";
                  }
                });
                const items1 = [];
                const item1 = items1.forEach((arg0) => {
                  if (!binData[arg0]) {
                    binData[arg0] = "Unknown";
                  }
                });
              }
              let obj = {};
              obj = { binData, consumed: false };
              let str3 = "";
              if (str) {
                str3 = `ending in ${str}`;
              }
              obj.description = str3;
              obj.nonce = tokenizeCreditCardForPayPalConnect.paymentMethod.id;
              obj = { cardholderName: details.cardholderName, expirationMonth: details.expirationMonth, expirationYear: details.expirationYear, bin: tmp3, cardType: tmp4, lastFour: tmp5, lastTwo: str };
              obj.details = obj;
              obj.type = "CreditCard";
              obj.threeDSecureInfo = null;
              const items2 = [obj];
              obj.creditCards = items2;
              if (tokenizeCreditCardForPayPalConnect.authenticationInsight) {
                const obj1 = {};
                let formatted = closure_3[str5];
                if (!formatted) {
                  formatted = str5.toLowerCase();
                }
                obj1.regulationEnvironment = formatted;
                obj.creditCards[0].authenticationInsight = obj1;
              }
              return obj;
            }(data);
          }
          return tmp;
        }
        tmp = callback(data);
      };
    },
    { ./error: 102 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./error");
      let closure_1 = {};
      let closure_2 = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null };
      let closure_3 = { PSDTWO: "psd2" };
      module.exports = function creditCardTokenizationResponseAdapter(data) {
        if (data.data) {
          if (!data.errors) {
            let tmp = function adaptTokenizeCreditCardResponseBody(data) {
              const tokenizeCreditCard = data.data.tokenizeCreditCard;
              const creditCard = tokenizeCreditCard.creditCard;
              let str = "";
              if (creditCard.last4) {
                str = creditCard.last4.substr(2, 4);
                const str2 = creditCard.last4;
              }
              const binData = creditCard.binData;
              if (binData) {
                const items = [-0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008649006011193397, -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008969343599667368, -441671388477542750000000000000000000, 0.000000000000000000000000000000000000000000009809094802573727, -10775049755396236000000000000000, "outline"];
                const item = items.forEach((arg0) => {
                  if (binData[arg0]) {
                    tmp[arg0] = closure_2[tmp[arg0]];
                  } else {
                    tmp[arg0] = "Unknown";
                  }
                });
                const items1 = [];
                const item1 = items1.forEach((arg0) => {
                  if (!binData[arg0]) {
                    binData[arg0] = "Unknown";
                  }
                });
              }
              let obj = {};
              obj = { binData, consumed: false };
              let str3 = "";
              if (str) {
                str3 = `ending in ${str}`;
              }
              obj.description = str3;
              obj.nonce = tokenizeCreditCard.token;
              obj = { cardholderName: creditCard.cardholderName, expirationMonth: creditCard.expirationMonth, expirationYear: creditCard.expirationYear, bin: tmp3, cardType: tmp4, lastFour: tmp5, lastTwo: str };
              obj.details = obj;
              obj.type = "CreditCard";
              obj.threeDSecureInfo = null;
              const items2 = [obj];
              obj.creditCards = items2;
              if (tokenizeCreditCard.authenticationInsight) {
                const obj1 = {};
                let formatted = closure_3[str5];
                if (!formatted) {
                  formatted = str5.toLowerCase();
                }
                obj1.regulationEnvironment = formatted;
                obj.creditCards[0].authenticationInsight = obj1;
              }
              return obj;
            }(data);
          }
          return tmp;
        }
        tmp = callback(data);
      };
    },
    { ./error: 102 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      function addFieldError(arr, message, fieldErrors) {
        const first = arr[0];
        const getLegacyMessage = first;
        if (1 !== arr.length) {
          const item = fieldErrors.forEach((field) => {

          });
          if (!addFieldError) {
            let obj = { field: first, fieldErrors: [] };
            const addFieldError = obj;
            fieldErrors.push(addFieldError);
          }
          addFieldError(arr.slice(1), message, addFieldError.fieldErrors);
        } else {
          obj = { code: tmp, field: first, message: message.message };
          fieldErrors.push(obj);
        }
      }
      function getLegacyMessage(arg0) {
        return { creditCard: "Credit card is invalid" }[arg0[0].field];
      }
      module.exports = function errorResponseAdapter(errors) {
        let errorClass = errors.errors;
        if (errorClass) {
          errorClass = errors.errors[0];
        }
        if (errorClass) {
          errorClass = errors.errors[0].extensions;
        }
        if (errorClass) {
          errorClass = errors.errors[0].extensions.errorClass;
        }
        if ("VALIDATION" === errorClass) {
          let tmp = function userErrorResponseAdapter(errors) {
            const arr = function buildFieldErrors(errors) {
              const items = [];
              const item = errors.forEach(() => { ... });
              return items;
            }(errors.errors);
            if (0 === arr.length) {
              let obj = {};
              obj = { message: errors.errors[0].message };
              obj.error = obj;
              return obj;
            } else {
              obj = {};
              const obj1 = { message: callback(arr) };
              obj.error = obj1;
              obj.fieldErrors = arr;
              return obj;
            }
          }(errors);
        } else {
          let obj = {};
          obj = {};
          if (errorClass) {
            obj.message = errors.errors[0].message;
            obj.error = obj;
            obj.fieldErrors = [];
            tmp = obj;
          } else {
            obj.message = "There was a problem serving your request";
            obj.error = obj;
            obj.fieldErrors = [];
            tmp = obj;
          }
        }
        return tmp;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = function configuration() {
        return {};
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      function createCreditCardForFastlaneTokenizationBody(creditCard, hasAuthenticationInsight) {
        creditCard = creditCard.creditCard;
        const tmp = creditCard.fastlane || {};
        let termsAndConditionsVersion = "fastlane" in creditCard;
        if (termsAndConditionsVersion) {
          termsAndConditionsVersion = "termsAndConditionsVersion" in creditCard.fastlane;
        }
        if (termsAndConditionsVersion) {
          termsAndConditionsVersion = creditCard.fastlane.termsAndConditionsVersion;
        }
        let hasBuyerConsent = "hasBuyerConsent" in tmp;
        if (hasBuyerConsent) {
          hasBuyerConsent = tmp.hasBuyerConsent;
        }
        const shippingAddress = creditCard.shippingAddress;
        const obj = { email: creditCard.email, optIn: hasBuyerConsent, phone: creditCard.phone, termsAndConditionsVersion };
        const input = assign({}, function createCreditCardTokenizationBody(creditCard, hasAuthenticationInsight) {
          creditCard = creditCard.creditCard;
          let billingAddress = creditCard;
          if (creditCard) {
            billingAddress = creditCard.billingAddress;
          }
          let str = creditCard;
          if (creditCard) {
            str = creditCard.expirationDate;
          }
          let tmp = creditCard;
          if (creditCard) {
            let expirationMonth = creditCard.expirationMonth;
            if (!expirationMonth) {
              let trimmed = str;
              if (str) {
                trimmed = str.split("/")[0].trim();
                const str3 = str.split("/")[0];
              }
              expirationMonth = trimmed;
            }
            tmp = expirationMonth;
          }
          let tmp3 = creditCard;
          if (creditCard) {
            let expirationYear = creditCard.expirationYear;
            if (!expirationYear) {
              let trimmed1 = str;
              if (str) {
                trimmed1 = str.split("/")[1].trim();
                const str5 = str.split("/")[1];
              }
              expirationYear = trimmed1;
            }
            tmp3 = expirationYear;
          }
          let obj = {};
          obj = {};
          obj = {};
          let number = creditCard;
          if (creditCard) {
            number = creditCard.number;
          }
          obj.number = number;
          obj.expirationMonth = tmp;
          obj.expirationYear = tmp3;
          let cvv = creditCard;
          if (creditCard) {
            cvv = creditCard.cvv;
          }
          obj.cvv = cvv;
          let cardholderName = creditCard;
          if (creditCard) {
            cardholderName = creditCard.cardholderName;
          }
          obj.cardholderName = cardholderName;
          obj.creditCard = obj;
          obj.options = {};
          obj.input = obj;
          if (hasAuthenticationInsight.hasAuthenticationInsight) {
            const obj1 = { merchantAccountId: creditCard.merchantAccountId };
            obj.authenticationInsightInput = obj1;
          }
          if (billingAddress) {
            obj.input.creditCard.billingAddress = billingAddress;
          }
          const input = obj.input;
          if (creditCard.creditCard) {
            if (creditCard.creditCard.options) {
              if ("boolean" === typeof creditCard.creditCard.options.validate) {
                let flag = creditCard.creditCard.options.validate;
              }
              if ("boolean" === typeof flag) {
                const obj2 = { validate: flag };
                input.options = callback(obj2, input.options);
              }
              obj.input = input;
              return obj;
            }
          }
          if (!creditCard.authorizationFingerprint) {
            flag = true;
            if (!creditCard.authorizationFingerprint) {
              if (creditCard.tokenizationKey) {
                flag = false;
              }
            }
          } else {
            flag = true;
          }
        }(creditCard, hasAuthenticationInsight).input, obj);
        if ("authAssertion" in tmp) {
          input.authAssertion = tmp.authAssertion;
        }
        if (shippingAddress) {
          input.shippingAddress = shippingAddress;
        }
        return { input };
      }
      global("../../../../lib/assign").assign;
      module.exports = function creditCardForFastlaneTokenization(authenticationInsight) {
        let obj = {};
        let merchantAccountId = authenticationInsight.authenticationInsight;
        if (merchantAccountId) {
          merchantAccountId = authenticationInsight.merchantAccountId;
        }
        obj.hasAuthenticationInsight = Boolean(merchantAccountId);
        obj = {};
        const hasAuthenticationInsight = obj.hasAuthenticationInsight;
        let str = "mutation TokenizeCreditCardForPayPalConnect($input: TokenizeCreditCardForPayPalConnectInput!";
        if (hasAuthenticationInsight) {
          str = "mutation TokenizeCreditCardForPayPalConnect($input: TokenizeCreditCardForPayPalConnectInput!, $authenticationInsightInput: AuthenticationInsightInput!";
        }
        const text = `${str}) {   tokenizeCreditCardForPayPalConnect(input: $input) {     clientMutationId     paymentMethod {       id       details {         ... on CreditCardDetails {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }         }       }     }`;
        let text1 = text;
        if (hasAuthenticationInsight) {
          text1 = `${str}) {   tokenizeCreditCardForPayPalConnect(input: $input) {     clientMutationId     paymentMethod {       id       details {         ... on CreditCardDetails {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }         }       }     }    authenticationInsight(input: $authenticationInsightInput) {      customerAuthenticationRegulationEnvironment    }`;
        }
        obj.query = `${tmp2}  } }`;
        obj.variables = createCreditCardForFastlaneTokenizationBody(authenticationInsight, obj);
        obj.operationName = "TokenizeCreditCardForPayPalConnect";
        return obj;
      };
    },
    { ../../../../lib/assign: 140 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      function createCreditCardTokenizationBody(creditCard, hasAuthenticationInsight) {
        creditCard = creditCard.creditCard;
        let billingAddress = creditCard;
        if (creditCard) {
          billingAddress = creditCard.billingAddress;
        }
        let str = creditCard;
        if (creditCard) {
          str = creditCard.expirationDate;
        }
        let tmp = creditCard;
        if (creditCard) {
          let expirationMonth = creditCard.expirationMonth;
          if (!expirationMonth) {
            let trimmed = str;
            if (str) {
              trimmed = str.split("/")[0].trim();
              const str3 = str.split("/")[0];
            }
            expirationMonth = trimmed;
          }
          tmp = expirationMonth;
        }
        let tmp3 = creditCard;
        if (creditCard) {
          let expirationYear = creditCard.expirationYear;
          if (!expirationYear) {
            let trimmed1 = str;
            if (str) {
              trimmed1 = str.split("/")[1].trim();
              const str5 = str.split("/")[1];
            }
            expirationYear = trimmed1;
          }
          tmp3 = expirationYear;
        }
        let obj = {};
        obj = {};
        obj = {};
        let number = creditCard;
        if (creditCard) {
          number = creditCard.number;
        }
        obj.number = number;
        obj.expirationMonth = tmp;
        obj.expirationYear = tmp3;
        let cvv = creditCard;
        if (creditCard) {
          cvv = creditCard.cvv;
        }
        obj.cvv = cvv;
        let cardholderName = creditCard;
        if (creditCard) {
          cardholderName = creditCard.cardholderName;
        }
        obj.cardholderName = cardholderName;
        obj.creditCard = obj;
        obj.options = {};
        obj.input = obj;
        if (hasAuthenticationInsight.hasAuthenticationInsight) {
          const obj1 = { merchantAccountId: creditCard.merchantAccountId };
          obj.authenticationInsightInput = obj1;
        }
        if (billingAddress) {
          obj.input.creditCard.billingAddress = billingAddress;
        }
        const input = obj.input;
        if (creditCard.creditCard) {
          if (creditCard.creditCard.options) {
            if ("boolean" === typeof creditCard.creditCard.options.validate) {
              let flag = creditCard.creditCard.options.validate;
            }
            if ("boolean" === typeof flag) {
              const obj2 = { validate: flag };
              input.options = assign(obj2, input.options);
            }
            obj.input = input;
            return obj;
          }
        }
        if (!creditCard.authorizationFingerprint) {
          flag = true;
          if (!creditCard.authorizationFingerprint) {
            if (creditCard.tokenizationKey) {
              flag = false;
            }
          }
        } else {
          flag = true;
        }
      }
      global("../../../../lib/assign").assign;
      module.exports = function creditCardTokenization(authenticationInsight) {
        let obj = {};
        let merchantAccountId = authenticationInsight.authenticationInsight;
        if (merchantAccountId) {
          merchantAccountId = authenticationInsight.merchantAccountId;
        }
        obj.hasAuthenticationInsight = Boolean(merchantAccountId);
        obj = {};
        const hasAuthenticationInsight = obj.hasAuthenticationInsight;
        let str = "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!";
        if (hasAuthenticationInsight) {
          str = "mutation TokenizeCreditCard($input: TokenizeCreditCardInput!, $authenticationInsightInput: AuthenticationInsightInput!";
        }
        const text = `${str}) {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     } `;
        let text1 = text;
        if (hasAuthenticationInsight) {
          text1 = `${str}) {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     }     authenticationInsight(input: $authenticationInsightInput) {      customerAuthenticationRegulationEnvironment    }`;
        }
        obj.query = `${tmp2}  } }`;
        obj.variables = createCreditCardTokenizationBody(authenticationInsight, obj);
        obj.operationName = "TokenizeCreditCard";
        return obj;
      };
    },
    { ../../../../lib/assign: 140 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class GraphQL {
        constructor(arg0) {
          this._config = global.graphQL;
          return;
        }
        getGraphQLEndpoint() {
          return this._config.url;
        }
        isGraphQLRequest(arg0, arg1) {
          clientApiPath = this.getClientApiPath(global);
          global = clientApiPath;
          tmp2 = !this._isGraphQLEnabled() || !clientApiPath;
          tmp3 = !tmp2;
          if (!tmp2) {
            features = this._config.features;
            tmp5 = module;
            someResult = features.some((arg0) => clientApiPath[arg0] === clientApiPath);
            tmp6 = !function containsDisallowedlistedKeys(arg0) {
              const clientApiPath = arg0;
              return closure_1.some((str) => {
                const parts = str.split(".");
                return undefined !== parts.reduce((arg0, arg1) => {
                  let tmp = arg0;
                  if (arg0) {
                    tmp = arg0[arg1];
                  }
                  return tmp;
                }, str);
              });
            }(module) && someResult;
            tmp3 = tmp6;
          }
          return tmp3;
        }
        getClientApiPath(arg0) {
          parts = global.split("/client_api/v1/");
          first = undefined;
          if (parts.length > 1) {
            str = parts[1];
            str2 = "?";
            num = 0;
            first = str.split("?")[0];
          }
          return first;
        }
        _isGraphQLEnabled() {
          return Boolean(this._config);
        }
      }
      let closure_0 = { 9223372036854775807: 0.6, -9223372036854775808: "BounceInLeft" };
      let closure_1 = [null];
      module.exports = GraphQL;
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class GraphQLRequest {
        constructor(arg0) {
          self = this;
          graphQL = global.graphQL;
          clientApiPath = graphQL.getClientApiPath(global.url);
          ({ graphQL: this._graphQL, data: this._data, method: this._method, headers: this._headers } = global);
          this._clientSdkMetadata = { source: global.metadata.source, integration: global.metadata.integration, sessionId: global.metadata.sessionId };
          prototype = global.sendAnalyticsEvent;
          if (!prototype) {
            tmp2 = globalThis;
            _Function = Function;
            prototype = Function.prototype;
          }
          self._sendAnalyticsEvent = prototype;
          self._generator = closure_8[clientApiPath];
          self._adapter = closure_9[clientApiPath];
          _sendAnalyticsEventResult = self._sendAnalyticsEvent("graphql.init");
          return;
        }
        getUrl() {
          _graphQL = this._graphQL;
          return _graphQL.getGraphQLEndpoint();
        }
        getBody() {
          tmp = formatBodyKeys(this._data);
          obj = { clientSdkMetadata: this._clientSdkMetadata };
          return JSON.stringify(assign(obj, this._generator(tmp, closure_3(this._data.creditCard))));
        }
        getMethod() {
          return "POST";
        }
        getHeaders() {
          self = this;
          _sendAnalyticsEvent = this._sendAnalyticsEvent;
          if (this._data.authorizationFingerprint) {
            str2 = "graphql.authorization-fingerprint";
            _sendAnalyticsEventResult = _sendAnalyticsEvent("graphql.authorization-fingerprint");
            tokenizationKey = self._data.authorizationFingerprint;
          } else {
            str = "graphql.tokenization-key";
            _sendAnalyticsEventResult1 = _sendAnalyticsEvent("graphql.tokenization-key");
            tokenizationKey = self._data.tokenizationKey;
          }
          obj = { Authorization: `Bearer ${tokenizationKey}`, Braintree-Version: BRAINTREE_VERSION };
          return assign({}, self._headers, obj);
        }
        adaptResponseBody(arg0) {
          self = this;
          tmp = "creditCard" in this._data;
          if (tmp) {
            tmp2 = closure_3;
            tmp = closure_3(self._data.creditCard);
          }
          return this._adapter(global, self, tmp);
        }
        determineStatus(arg0, arg1) {
          self = this;
          num = 200;
          if (200 === global) {
            errorClass = module.errors;
            if (errorClass) {
              num3 = 0;
              errorClass = module.errors[0];
            }
            if (errorClass) {
              num4 = 0;
              errorClass = module.errors[0].extensions;
            }
            if (errorClass) {
              num5 = 0;
              errorClass = module.errors[0].extensions.errorClass;
            }
            if (!module.data) {
              num6 = 422;
              str = "VALIDATION";
              if ("VALIDATION" !== errorClass) {
                num7 = 403;
                str2 = "AUTHORIZATION";
                num8 = 403;
                if ("AUTHORIZATION" !== errorClass) {
                  num9 = 401;
                  str3 = "AUTHENTICATION";
                  if ("AUTHENTICATION" !== errorClass) {
                    message = !errorClass;
                    if (message) {
                      num10 = 0;
                      message = module.errors[0].message;
                    }
                    num11 = 500;
                    if (message) {
                      num11 = 403;
                    }
                    num9 = num11;
                  }
                  num8 = num9;
                }
                num6 = num8;
              }
              num = num6;
            }
            num2 = num;
          } else {
            num2 = global;
            if (!global) {
              num2 = 500;
            }
          }
          _sendAnalyticsEventResult = self._sendAnalyticsEvent(`graphql.status.${global}`);
          _sendAnalyticsEventResult1 = self._sendAnalyticsEvent(`graphql.determinedStatus.${num2}`);
          return num2;
        }
      }
      function formatBodyKeys(_data) {
        const BRAINTREE_VERSION = _data;
        const obj = {};
        const assign = obj;
        const keys = Object.keys(_data);
        const item = keys.forEach((arg0) => {
          const tmp = callback(arg0);
          if ("object" === typeof arg0[arg0]) {
            obj[tmp] = callback2(arg0[arg0]);
          } else if ("number" === typeof arg0[arg0]) {
            const _String = String;
            obj[tmp] = String(arg0[arg0]);
          } else {
            obj[tmp] = arg0[arg0];
          }
        });
        return obj;
      }
      global("../../constants").BRAINTREE_VERSION;
      const assign = global("../../../lib/assign").assign;
      let closure_2 = global("../../../lib/snake-case-to-camel-case");
      let closure_3 = global("../../../lib/is-fastlane-checkout");
      let closure_4 = global("./generators/credit-card-tokenization");
      let closure_5 = global("./adapters/credit-card-tokenization");
      let closure_6 = global("./adapters/credit-card-tokenization-fastlane");
      let closure_7 = global("./generators/credit-card-for-fastlane-tokenization");
      let closure_8 = {
        payment_methods/credit_cards: function payment_methods_credit_cards(arg0, arg1) {
          if (arg1) {
            let tmp2 = callback5(arg0);
          } else {
            tmp2 = callback2(arg0);
          }
          return tmp2;
        },
        configuration: global("./generators/configuration")
      };
      const obj = {
        payment_methods/credit_cards: function payment_methods_credit_cards(arg0, arg1, arg2) {
          if (arg2) {
            let tmp2 = callback4(arg0, arg1);
          } else {
            tmp2 = callback3(arg0, arg1);
          }
          return tmp2;
        },
        configuration: global("./adapters/configuration")
      };
      module.exports = GraphQLRequest;
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../../lib/once");
      let closure_1 = global("./ajax-driver");
      module.exports = (method) => {
        let prototype = arg1;
        if (!arg1) {
          const _Function = Function;
          prototype = Function.prototype;
        }
        let str = method.method;
        if (!str) {
          str = "GET";
        }
        method.method = str.toUpperCase();
        let num = 60000;
        if (null != method.timeout) {
          num = method.timeout;
        }
        method.timeout = num;
        method.data = method.data || {};
        closure_1.request(method, closure_0(prototype));
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = (arg0) => {
        const parsed = JSON.parse(arg0);
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = (str) => {
        if ("string" !== typeof str) {
          const _Error = Error;
          const error = new Error("Method must be a string");
          throw error;
        } else {
          let tmp = "get" !== str.toLowerCase();
          if (tmp) {
            tmp = null != arg1;
          }
          let tmp3 = arg1;
          if (tmp) {
            let json = arg1;
            if ("string" !== typeof arg1) {
              const _JSON = JSON;
              json = JSON.stringify(arg1);
            }
            tmp3 = json;
          }
          return tmp3;
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let _XMLHttpRequest = "undefined" !== typeof window;
      if (_XMLHttpRequest) {
        const _window = window;
        _XMLHttpRequest = window.XMLHttpRequest;
      }
      if (_XMLHttpRequest) {
        const _window2 = window;
        let _XMLHttpRequest2 = window.XMLHttpRequest;
        const prototype = _XMLHttpRequest2.prototype;
        _XMLHttpRequest2 = new _XMLHttpRequest2();
        _XMLHttpRequest = "withCredentials" in _XMLHttpRequest2;
      }
      const obj = {
        isAvailable: _XMLHttpRequest,
        getRequestObject() {
          const _window = window;
          if (_XMLHttpRequest) {
            let _XMLHttpRequest = _window.XMLHttpRequest;
            const prototype2 = _XMLHttpRequest.prototype;
            _XMLHttpRequest = new _XMLHttpRequest();
          } else {
            const XDomainRequest = _window.XDomainRequest;
            const prototype = XDomainRequest.prototype;
            _XMLHttpRequest = new XDomainRequest();
          }
          return _XMLHttpRequest;
        }
      };
      module.exports = obj;
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT };
      obj = { type: globalResult.types.MERCHANT, code: "DATA_COLLECTOR_KOUNT_ERROR" };
      obj = { type: globalResult.types.MERCHANT };
      module.exports = { DATA_COLLECTOR_KOUNT_NOT_ENABLED: obj, DATA_COLLECTOR_KOUNT_ERROR: obj, DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS: obj };
    },
    { ../lib/braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class Fraudnet {
        constructor() {
          return;
        }
        initialize(arg0) {
          self = this;
          sessionId = this;
          ({ sessionId, environment } = global);
          if (!sessionId) {
            sessionId = global.clientSessionId;
          }
          self.sessionId = sessionId;
          if (self.sessionId) {
            str = self.sessionId;
            num = 0;
            num2 = 32;
            self.sessionId = str.substring(0, 32);
          }
          if (!global.sessionId) {
            sessionId = self.sessionId;
          }
          date = new Date();
          self._beaconId = `https://b.stats.paypal.com/counter.cgi?i=127.0.0.1&p=${tmp}&t=${obj.getTime() / 1000}&a=14`;
          body = document.body;
          ({ sessionId: sessionId2, _beaconId } = self);
          appendChildResult = body.appendChild(document.createElement("script"));
          obj = { f: sessionId2, s: FRAUDNET_SOURCE, b: _beaconId };
          if ("production" !== environment) {
            flag = true;
            obj.sandbox = true;
          }
          appendChildResult.type = "application/json";
          attr = appendChildResult.setAttribute("fncls", FRAUDNET_FNCLS);
          appendChildResult.text = JSON.stringify(obj);
          self._parameterBlock = appendChildResult;
          obj1 = { src: FRAUDNET_URL };
          promise = loadScript(obj1);
          nextPromise = promise.then((_thirdPartyBlock) => {
            sessionId._thirdPartyBlock = _thirdPartyBlock;
            return sessionId;
          });
          return nextPromise.catch(() => null);
        }
        teardown() {
          tmp = removeElementIfOnPage(document.querySelector("iframe[title=\"ppfniframe\"]"));
          tmp2 = removeElementIfOnPage(document.querySelector("iframe[title=\"pbf\"]"));
          tmp3 = removeElementIfOnPage(this._parameterBlock);
          tmp4 = removeElementIfOnPage(this._thirdPartyBlock);
          return;
        }
      }
      function removeElementIfOnPage(_parameterBlock) {
        let parentNode = _parameterBlock;
        if (_parameterBlock) {
          parentNode = _parameterBlock.parentNode;
        }
        if (parentNode) {
          const parentNode2 = _parameterBlock.parentNode;
          parentNode2.removeChild(_parameterBlock);
        }
      }
      const FRAUDNET_FNCLS = global("../lib/constants").FRAUDNET_FNCLS;
      const FRAUDNET_SOURCE = global("../lib/constants").FRAUDNET_SOURCE;
      const FRAUDNET_URL = global("../lib/constants").FRAUDNET_URL;
      const loadScript = global("../lib/assets").loadScript;
      module.exports = {
        setup(arg0) {
          let obj = arg0;
          const obj2 = new Fraudnet();
          if (!arg0) {
            obj = {};
          }
          if (!obj.sessionId) {
            if (closure_0) {
              obj2.sessionId = closure_0;
              let resolved = Promise.resolve(obj2);
            }
            return resolved;
          }
          resolved = obj2.initialize(obj);
        },
        clearSessionIdCache() {
          let closure_0 = null;
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./kount");
      let closure_1 = global("./fraudnet");
      let closure_2 = global("../lib/braintree-error");
      let closure_3 = global("../lib/basic-component-verification");
      let closure_4 = global("../lib/create-deferred-client");
      let closure_5 = global("../lib/create-assets-url");
      let closure_6 = global("../lib/methods");
      let closure_7 = global("../lib/convert-methods-to-error");
      const globalResult = global("@braintree/wrap-promise");
      let closure_9 = global("./errors");
      module.exports = {
        create: globalResult(function create(client) {
          let closure_0 = client;
          let closure_2 = { _instances: [] };
          return closure_3.verify({ name: "Data Collector", client: client.client, authorization: client.authorization }).then((self) => {
            obj._instantiatedWithAClient = !self.useDeferredClient;
            let obj = { authorization: self.authorization, client: self.client, debug: self.debug, assetsUrl: closure_5.create(self.authorization), name: "Data Collector" };
            obj = closure_4.create(obj);
            const nextPromise = obj.then((getConfiguration) => {
              const configuration = getConfiguration.getConfiguration();
              if (true === closure_0.kount) {
                if (configuration.gatewayConfiguration.kount) {
                  const obj = { environment: configuration.gatewayConfiguration.environment, merchantId: configuration.gatewayConfiguration.kount.kountMerchantId };
                  const setupResult = closure_0.setup(obj);
                  let deviceData = setupResult.deviceData;
                  const _instances = ctor._instances;
                  _instances.push(setupResult);
                }
                return Promise.resolve(getConfiguration);
              }
              deviceData = {};
            });
            obj._createPromise = obj.then((getConfiguration) => {
              const configuration = getConfiguration.getConfiguration();
              if (true === closure_0.kount) {
                if (configuration.gatewayConfiguration.kount) {
                  const obj = { environment: configuration.gatewayConfiguration.environment, merchantId: configuration.gatewayConfiguration.kount.kountMerchantId };
                  const setupResult = closure_0.setup(obj);
                  let deviceData = setupResult.deviceData;
                  const _instances = ctor._instances;
                  _instances.push(setupResult);
                }
                return Promise.resolve(getConfiguration);
              }
              deviceData = {};
            }).then((getConfiguration) => {
              const configuration = getConfiguration.getConfiguration();
              const obj = {};
              let correlationId = closure_0.riskCorrelationId;
              if (!correlationId) {
                correlationId = closure_0.clientMetadataId;
              }
              if (!correlationId) {
                correlationId = closure_0.correlationId;
              }
              obj.sessionId = correlationId;
              obj.clientSessionId = configuration.analyticsMetadata.sessionId;
              obj.environment = configuration.gatewayConfiguration.environment;
              return closure_1.setup(obj).then(() => { ... });
            }).then(() => {
              if (0 === ctor._instances.length) {
                const prototype = ctor.prototype;
                const tmp10 = new ctor(constants.DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS);
                let rejectResult = Promise.reject(tmp10);
              } else {
                rejectResult = ctor;
                const _JSON = JSON;
                ctor.deviceData = JSON.stringify(closure_1);
                ctor.rawDeviceData = closure_1;
              }
              return rejectResult;
            });
            obj.teardown = function createTeardownMethod(closure_2) {
              return callback(function teardown() { ... });
            }(obj);
            obj.getDeviceData = function createGetDeviceDataMethod(closure_2) {
              return callback(function getDeviceData() { ... });
            }(obj);
            return obj._instantiatedWithAClient ? obj._createPromise : obj;
          });
        }),
        VERSION: "3.112.1"
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class Kount {
        constructor(arg0) {
          self = this;
          cachedDeviceData = Kount.getCachedDeviceData(global.merchantId);
          if (cachedDeviceData) {
            self.deviceData = cachedDeviceData;
            flag = true;
            self._isCached = true;
            return;
          } else {
            self._currentEnvironment = self._initializeEnvironment(global);
            tmp2 = closure_0;
            random = closure_0.random;
            startCollectorsResult = random.startCollectors();
            self._deviceSessionId = self._generateDeviceSessionId();
            self.deviceData = self._getDeviceData();
            tmp4 = Kount;
            setCachedDeviceDataResult = Kount.setCachedDeviceData(global.merchantId, self.deviceData);
            self._iframe = self._setupIFrame();
            return;
          }
        }
        static getCachedDeviceData(arg0) {
          return global[global];
        }
        static setCachedDeviceData(arg0, arg1) {
          global[global] = module;
          return;
        }
        teardown() {
          self = this;
          if (!this._isCached) {
            tmp = closure_0;
            random = closure_0.random;
            stopCollectorsResult = random.stopCollectors();
            _removeIframeResult = self._removeIframe();
          }
          return;
        }
        _removeIframe() {
          parentNode = this._iframe.parentNode;
          removeChildResult = parentNode.removeChild(this._iframe);
          return;
        }
        _getDeviceData() {
          obj = { deviceSessionId: this._deviceSessionId, fraudMerchantId: this._currentEnvironment.id };
          return closure_1(obj);
        }
        _generateDeviceSessionId() {
          random = closure_0.random;
          hex = closure_0.codec.hex;
          return hex.fromBits(random.randomWords(4, 0));
        }
        _setupIFrame() {
          closure_2 = this;
          closure_0 = `?m=${this._currentEnvironment.id}&s=${this._deviceSessionId}`;
          element = document.createElement("iframe");
          closure_1 = element;
          element.width = 1;
          element.id = `braintreeDataFrame-${this._deviceSessionId}`;
          element.height = 1;
          element.frameBorder = 0;
          element.scrolling = "no";
          element.style.position = "fixed";
          element.style.left = "-999999px";
          element.style.top = "-999999px";
          element.title = "Braintree-Kount-iframe";
          attr = element.setAttribute("aria-hidden", "true");
          body = document.body;
          appendChildResult = body.appendChild(element);
          timerId = setTimeout(() => {
            element.src = `${closure_2._currentEnvironment.url}/logo.htm${closure_0}`;
            element.innerHTML = `<img src="${closure_2._currentEnvironment.url}/logo.gif${closure_0}" alt="" />`;
          }, 10);
          return element;
        }
        _initializeEnvironment(arg0) {
          tmp = closure_2[global.environment];
          if (null == tmp) {
            tmp2 = globalThis;
            _Error = Error;
            str = " is not a valid environment for kount.environment";
            prototype = Error.prototype;
            tmp3 = new.target;
            tmp4 = new.target;
            error = new Error(global.environment + " is not a valid environment for kount.environment");
            tmp6 = error;
            throw error;
          } else {
            obj = {};
            obj.url = tmp;
            ({ environment: obj.name, merchantId: obj.id } = global);
            return obj;
          }
        }
      }
      let closure_0 = global("./vendor/sjcl");
      let closure_1 = global("../lib/camel-case-to-snake-case");
      let obj = {};
      let closure_3 = {};
      obj = {
        setup(arg0) {
          let obj = arg0;
          let tmp = Kount;
          if (null == arg0) {
            obj = {};
          }
          tmp = new tmp(obj);
          return tmp;
        },
        Kount,
        environmentUrls: obj
      };
      module.exports = obj;
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      function t(arg0, arg1, arg2) {
        let tmp5;
        let tmp6;
        let tmp7;
        let tmp8;
        let tmp9;
        if (4 !== arg1.length) {
          let invalid = obj.exception.invalid;
          const prototype = invalid.prototype;
          invalid = new invalid("invalid aes block size");
          throw invalid;
        } else {
          let num = 1;
          if (arg2) {
            num = 3;
          }
          let num4 = 3;
          if (arg2) {
            num4 = 1;
          }
          let tmp3 = arg1[num4] ^ arr2[3];
          const diff = arr2.length / 4 - 2;
          const items = ["<string:1014759426>", "<string:340852738>", "<string:1612335631>", "<string:1612447746>"];
          [tmp5, tmp6, tmp7, tmp8, tmp9] = arg0.l[arg2];
          let tmp10 = tmp28;
          let tmp11 = tmp;
          let tmp12 = tmp2;
          let num9 = 0;
          let num10 = 4;
          let tmp13 = tmp3;
          let tmp14 = tmp28;
          let tmp15 = tmp;
          let tmp16 = tmp2;
          let num11 = 4;
          if (0 < diff) {
            do {
              let tmp17 = tmp5[tmp10 >>> 24] ^ tmp6[tmp11 >> 16 & 255] ^ tmp7[tmp12 >> 8 & 255] ^ tmp8[255 & tmp3] ^ arr2[num10];
              let tmp18 = tmp5[tmp11 >>> 24] ^ tmp6[tmp12 >> 16 & 255] ^ tmp7[tmp3 >> 8 & 255] ^ tmp8[255 & tmp10] ^ arr2[num10 + 1];
              let tmp19 = tmp5[tmp12 >>> 24] ^ tmp6[tmp3 >> 16 & 255] ^ tmp7[tmp10 >> 8 & 255] ^ tmp8[255 & tmp11] ^ arr2[num10 + 2];
              tmp3 = tmp5[tmp3 >>> 24] ^ tmp6[tmp10 >> 16 & 255] ^ tmp7[tmp11 >> 8 & 255] ^ tmp8[255 & tmp12] ^ arr2[num10 + 3];
              num10 = num10 + 4;
              num9 = num9 + 1;
              tmp10 = tmp17;
              tmp11 = tmp18;
              tmp12 = tmp19;
              tmp13 = tmp3;
              tmp14 = tmp17;
              tmp15 = tmp18;
              tmp16 = tmp19;
              num11 = num10;
            } while (num9 < diff);
          }
          let num12 = 0;
          do {
            let tmp21 = num12;
            let tmp20 = tmp13;
            if (arg2) {
              tmp21 = 3 & -num12;
            }
            let tmp22 = +num11;
            num11 = tmp22 + 1;
            items[tmp21] = tmp9[tmp14 >>> 24] << 24 ^ tmp9[tmp15 >> 16 & 255] << 16 ^ tmp9[tmp16 >> 8 & 255] << 8 ^ tmp9[255 & tmp13] ^ arr2[tmp22];
            num12 = num12 + 1;
            tmp13 = tmp14;
            tmp14 = tmp15;
            tmp15 = tmp16;
            tmp16 = tmp20;
          } while (4 > num12);
          return items;
        }
      }
      function u(u) {
        let tmp10;
        let tmp11;
        let tmp12;
        let tmp13;
        let tmp14;
        let tmp15;
        let tmp18;
        let tmp19;
        u = u.u;
        let first = u[0];
        let tmp3 = u[1];
        let tmp4 = u[2];
        let tmp5 = u[3];
        let tmp6 = u[4];
        let tmp7 = u[5];
        let tmp8 = u[6];
        let tmp9 = u[7];
        let num = 0;
        do {
          tmp10 = first;
          tmp11 = tmp3;
          tmp12 = tmp4;
          tmp13 = tmp6;
          tmp14 = tmp7;
          tmp15 = tmp8;
          if (16 > num) {
            let tmp16 = arg1[num];
          } else {
            let tmp20 = arg1[num + 1 & 15];
            let tmp21 = arg1[num + 14 & 15];
            tmp16 = (tmp20 >>> 7 ^ tmp20 >>> 18 ^ tmp20 >>> 3 ^ tmp20 << 25 ^ tmp20 << 14) + (tmp21 >>> 17 ^ tmp21 >>> 19 ^ tmp21 >>> 10 ^ tmp21 << 15 ^ tmp21 << 13) + arg1[15 & num] + arg1[num + 9 & 15] | 0;
            arg1[15 & num] = tmp16;
          }
          let sum = tmp16 + tmp9 + (tmp6 >>> 6 ^ tmp6 >>> 11 ^ tmp6 >>> 25 ^ tmp6 << 26 ^ tmp6 << 21 ^ tmp6 << 7) + (tmp8 ^ tmp6 & (tmp7 ^ tmp8)) + tmp[num];
          tmp18 = tmp5 + sum | 0;
          tmp19 = sum + (first & tmp3 ^ tmp4 & (first ^ tmp3)) + (first >>> 2 ^ first >>> 13 ^ first >>> 22 ^ first << 30 ^ first << 19 ^ first << 10) | 0;
          num = num + 1;
          first = tmp19;
          tmp3 = tmp10;
          tmp4 = tmp11;
          tmp5 = tmp12;
          tmp6 = tmp18;
          tmp7 = tmp13;
          tmp8 = tmp14;
          tmp9 = tmp15;
        } while (64 > num);
        u[0] = u[0] + tmp19 | 0;
        u[1] = u[1] + tmp10 | 0;
        u[2] = u[2] + tmp11 | 0;
        u[3] = u[3] + tmp12 | 0;
        u[4] = u[4] + tmp18 | 0;
        u[5] = u[5] + tmp13 | 0;
        u[6] = u[6] + tmp14 | 0;
        u[7] = u[7] + tmp15 | 0;
      }
      function A(arg0, arg1) {
        let length;
        const items = [];
        for (const key10009 in obj) {
          let tmp3 = key10009;
          if (!obj.hasOwnProperty(key10009)) {
            continue;
          } else {
            let arr = items.push(obj[key10009]);
            // continue
          }
          continue;
        }
        let num = 0;
        if (0 < items.length) {
          do {
            let tmp2 = items[num](arg1);
            num = num + 1;
            length = items.length;
          } while (num < length);
        }
      }
      function C(addEntropy) {
        if ("undefined" !== typeof window) {
          const _window = window;
          if (window.performance) {
            const _window2 = window;
            if ("function" === typeof window.performance.now) {
              const _window3 = window;
              const _performance = window.performance;
              addEntropy.addEntropy(_performance.now(), arg1, "loadtime");
            }
          }
        }
        addEntropy.addEntropy(new Date().valueOf(), arg1, "loadtime");
      }
      function y(arg0) {
        const obj = z(arg0);
        arg0.b = obj.concat(z(arg0));
        const aes = new obj.cipher.aes(arg0.b);
        arg0.C = aes;
      }
      function z(g) {
        let num = 0;
        g.g[0] = g.g[0] + 1 | 0;
        if (!g.g[0]) {
          num = num + 1;
          while (4 > num) {
            g.g[num] = g.g[num] + 1 | 0;
            if (g.g[num]) {
              break;
            }
          }
        }
        const C = g.C;
        return C.encrypt(g.g);
      }
      function B(arg0, arg1) {
        const t = arg1;
        return () => {
          arg1(...arguments);
        };
      }
      let obj = { cipher: {}, hash: {}, keyexchange: {}, mode: {}, misc: {}, codec: {}, exception: obj };
      obj = {
        corrupt(message) {
          this.toString = function() {
            return "CORRUPT: " + this.message;
          };
          this.message = message;
        },
        invalid(message) {
          this.toString = function() {
            return "INVALID: " + this.message;
          };
          this.message = message;
        },
        bug(message) {
          this.toString = function() {
            return "BUG: " + this.message;
          };
          this.message = message;
        },
        notReady(message) {
          this.toString = function() {
            return "NOT READY: " + this.message;
          };
          this.message = message;
        }
      };
      obj.cipher.aes = function(arr) {
        const self = this;
        if (!this.l[0][0][0]) {
          self.G();
        }
        if (4 !== arr.length) {
          if (6 !== length) {
            if (8 !== length) {
              let invalid = obj.exception.invalid;
              const prototype = invalid.prototype;
              invalid = new invalid("invalid aes key size");
              throw invalid;
            }
          }
        }
        const substr = arr.slice(0);
        const items = [substr, ];
        const items1 = [];
        items[1] = items1;
        self.b = items;
        let sum = length;
        let num3 = 1;
        let diff1 = length;
        if (arr.length < 4 * arr.length + 28) {
          do {
            let tmp8 = substr[sum - 1];
            let tmp9 = 0 == sum % length;
            if (!tmp9) {
              let tmp10 = tmp5;
              if (tmp5) {
                tmp10 = 4 == sum % length;
              }
              tmp9 = tmp10;
            }
            let tmp11 = tmp8;
            let tmp12 = num3;
            if (tmp9) {
              let tmp13 = tmp2[tmp8 >>> 24] << 24 ^ tmp2[tmp8 >> 16 & 255] << 16 ^ tmp2[tmp8 >> 8 & 255] << 8 ^ tmp2[255 & tmp8];
              let tmp14 = tmp13;
              let tmp15 = num3;
              if (0 == sum % length) {
                tmp14 = tmp13 << 8 ^ tmp13 >>> 24 ^ num3 << 24;
                tmp15 = num3 << 1 ^ 283 * (num3 >> 7);
              }
              tmp11 = tmp14;
              tmp12 = tmp15;
            }
            substr[sum] = substr[sum - length] ^ tmp11;
            sum = sum + 1;
            num3 = tmp12;
            diff1 = sum;
          } while (sum < 4 * length + 28);
        }
        let num4 = 0;
        while (diff1) {
          let diff = diff1;
          if (!(3 & num4)) {
            diff = diff1 - 4;
          }
          let tmp17 = substr[diff];
          let tmp18 = tmp17;
          if (4 < diff1) {
            tmp18 = tmp17;
            if (4 <= num4) {
              tmp18 = tmp3[0][tmp2[tmp17 >>> 24]] ^ tmp3[1][tmp2[tmp17 >> 16 & 255]] ^ tmp3[2][tmp2[tmp17 >> 8 & 255]] ^ tmp3[3][tmp2[255 & tmp17]];
            }
          }
          items1[num4] = tmp18;
          num4 = num4 + 1;
          diff1 = diff1 - 1;
        }
      };
      obj = {
        encrypt(g) {
          return t(this, g, 0);
        },
        decrypt(arg0) {
          return t(this, arg0, 1);
        },
        l: items1,
        G() {
          const first = this.l[0];
          const tmp2 = this.l[1];
          const items = [];
          const items1 = [];
          let num = 0;
          do {
            let tmp4 = num << 1 ^ 283 * (num >> 7);
            items[num] = tmp4;
            items1[tmp4 ^ num] = num;
            num = num + 1;
          } while (256 > num);
          let num2 = 0;
          let num3 = 0;
          let num4 = 0;
          if (!first[4][0]) {
            tmp3[num2] = (num3 ^ num3 << 1 ^ num3 << 2 ^ num3 << 3 ^ num3 << 4) >> 8 ^ 255 & (num3 ^ num3 << 1 ^ num3 << 2 ^ num3 << 3 ^ num3 << 4) ^ 99;
            tmp2[4][(num3 ^ num3 << 1 ^ num3 << 2 ^ num3 << 3 ^ num3 << 4) >> 8 ^ 255 & (num3 ^ num3 << 1 ^ num3 << 2 ^ num3 << 3 ^ num3 << 4) ^ 99] = num2;
            let num5 = items[num2];
            let tmp8 = 16843009 * items[tmp7] ^ 65537 * tmp7 ^ 257 * num5 ^ 16843008 * num2;
            let tmp9 = 257 * items[tmp6] ^ 16843008 * tmp6;
            let num6 = 0;
            do {
              do {
                tmp9 = tmp9 << 24 ^ tmp9 >>> 8;
                first[num6][num2] = tmp9;
                tmp8 = tmp8 << 24 ^ tmp8 >>> 8;
                tmp2[num6][tmp6] = tmp8;
                num6 = num6 + 1;
              } while (4 > num6);
              if (!num5) {
                num5 = 1;
              }
              num2 = num2 ^ num5;
              num3 = items1[num3] || 1;
              num4 = 0;
            } while (!tmp3[num2]);
          }
          do {
            let arr3 = first[num4];
            first[num4] = arr3.slice(0);
            let arr4 = tmp2[num4];
            tmp2[num4] = arr4.slice(0);
            num4 = num4 + 1;
            let num7 = 5;
          } while (5 > num4);
        }
      };
      const items = [[], [], [], [], []];
      const items1 = [items, ];
      const items2 = [[], [], [], [], []];
      items1[1] = items2;
      obj.cipher.aes.prototype = obj;
      obj.bitArray = {
        bitSlice(arr) {
          const bitArray = obj.bitArray;
          const substr = bitArray.M(arr.slice(arg1 / 32), 32 - (31 & arg1)).slice(1);
          let clampResult = substr;
          if (undefined !== arg2) {
            const bitArray2 = obj.bitArray;
            clampResult = bitArray2.clamp(substr, arg2 - arg1);
          }
          return clampResult;
        },
        extract(arg0, arg1, arg2) {
          const rounded = Math.floor(-arg1 - arg2 & 31);
          if (-32 & (arg1 + arg2 - 1 ^ arg1)) {
            let tmp3 = tmp2 << 32 - rounded ^ arg0[arg1 / 32 + 1 | 0] >>> rounded;
          } else {
            tmp3 = tmp2 >>> rounded;
          }
          return tmp3 & (1 << arg2) - 1;
        },
        concat(arr) {
          if (0 !== arr.length) {
            if (0 !== arg1.length) {
              const bitArray = obj.bitArray;
              const partial = bitArray.getPartial(tmp);
              if (32 === partial) {
                let combined = arr.concat(arg1);
              } else {
                const bitArray2 = obj.bitArray;
                combined = bitArray2.M(arg1, partial, tmp | 0, arr.slice(0, arr.length - 1));
                const tmp5 = tmp | 0;
              }
              return combined;
            }
          }
          return arr.concat(arg1);
        },
        bitLength(toBitsResult) {
          let num = 0;
          if (0 !== toBitsResult.length) {
            const bitArray = obj.bitArray;
            const diff = length - 1;
            num = 32 * diff + bitArray.getPartial(toBitsResult[length - 1]);
          }
          return num;
        },
        clamp(arr) {
          if (32 * arr.length < arg1) {
            return arr;
          } else {
            const _Math = Math;
            const substr = arr.slice(0, Math.ceil(arg1 / 32));
            if (tmp) {
              const bitArray = obj.bitArray;
              const diff = length - 1;
              substr[diff] = bitArray.partial(tmp5, substr[length - 1] & 2147483648 >> tmp5 - 1, 1);
            }
            return substr;
          }
        },
        partial(arg0, arr1, arg2) {
          let result = arr1;
          if (32 === arg0) {
            return result;
          } else {
            if (arg2) {
              let tmp3 = result | 0;
            } else {
              tmp3 = result << 32 - arg0;
            }
            result = 1099511627776 * arg0;
            const sum = tmp3 + result;
          }
        },
        getPartial(arr) {
          return Math.round(arr / 1099511627776) || 32;
        },
        equal(json, toBitsResult) {
          let length;
          const bitArray = obj.bitArray;
          const bitArray2 = obj.bitArray;
          if (bitLengthResult !== bitArray2.bitLength(toBitsResult)) {
            return false;
          } else {
            let num2 = 0;
            let num3 = 0;
            let num4 = 0;
            if (0 < json.length) {
              do {
                num3 = num3 | json[num2] ^ toBitsResult[num2];
                num2 = num2 + 1;
                num4 = num3;
                length = json.length;
              } while (num2 < length);
            }
            return 0 === num4;
          }
          const bitLengthResult = bitArray.bitLength(json);
        },
        M(arr) {
          let length;
          let items = arg3;
          if (undefined === arg3) {
            items = [];
          }
          let diff = arg1;
          let num = arg2;
          let num2 = arg2;
          let tmp2 = arg1;
          if (32 <= arg1) {
            do {
              arr = items.push(num);
              diff = diff - 32;
              num = 0;
              num2 = 0;
              tmp2 = diff;
            } while (32 <= diff);
          }
          if (0 === tmp2) {
            return items.concat(arr);
          } else {
            let tmp5 = num2;
            let num3 = 0;
            let arr1 = num2;
            if (0 < arr.length) {
              do {
                arr = items.push(tmp5 | arr[num3] >>> tmp2);
                tmp5 = arr[num3] << 32 - tmp2;
                num3 = num3 + 1;
                arr1 = tmp5;
                length = arr.length;
              } while (num3 < length);
            }
            let num4 = 0;
            if (arr.length) {
              num4 = arr[arr.length - 1];
            }
            const bitArray = obj.bitArray;
            const partial = bitArray.getPartial(num4);
            const bitArray2 = obj.bitArray;
            if (32 >= tmp2 + partial) {
              arr1 = items.pop();
            }
            items.push(bitArray2.partial(tmp2 + partial & 31, arr1, 1));
            return items;
          }
        },
        Y(arg0, arg1) {
          const items = [arg0[0] ^ arg1[0], arg0[1] ^ arg1[1], arg0[2] ^ arg1[2], arg0[3] ^ arg1[3]];
          return items;
        },
        byteswapM(arg0) {
          let length;
          let num = 0;
          if (0 < arg0.length) {
            do {
              let tmp = arg0[num];
              arg0[num] = tmp >>> 24 | tmp >>> 8 & 65280 | (65280 & tmp) << 8 | tmp << 24;
              num = num + 1;
              length = arg0.length;
            } while (num < length);
          }
          return arg0;
        }
      };
      obj.codec.utf8String = {
        fromBits(toBitsResult) {
          const bitArray = obj.bitArray;
          const bitLengthResult = bitArray.bitLength(toBitsResult);
          let str = "";
          let str2 = "";
          let num = 0;
          if (0 < bitLengthResult / 8) {
            do {
              if (!(3 & num)) {
                let tmp2 = toBitsResult[num / 4];
              }
              let _String = String;
              str = str + String.fromCharCode(tmp2 >>> 8 >>> 8 >>> 8);
              tmp2 = tmp2 << 8;
              num = num + 1;
              str2 = str;
            } while (num < bitLengthResult / 8);
          }
          return decodeURIComponent(escape(str2));
        },
        toBits(arg0) {
          const unescapeResult = unescape(encodeURIComponent(arg0));
          const items = [];
          let num = 0;
          let num2 = 0;
          let num3 = 0;
          let num4 = 0;
          if (0 < unescapeResult.length) {
            do {
              let tmp = num2 << 8 | unescapeResult.charCodeAt(num);
              let tmp2 = num;
              let num5 = tmp;
              if (!(3 & ~num)) {
                let arr = items.push(tmp);
                num5 = 0;
              }
              num = num + 1;
              num2 = num5;
              num4 = num5;
              num3 = num;
            } while (num < unescapeResult.length);
          }
          if (3 & num3) {
            const bitArray = obj.bitArray;
            items.push(bitArray.partial(8 * (3 & num3), num4));
          }
          return items;
        }
      };
      obj.codec.hex = {
        fromBits(toBitsResult) {
          let length;
          let str = "";
          let num = 0;
          let str2 = "";
          if (0 < toBitsResult.length) {
            do {
              let str3 = 263882790666240 + (toBitsResult[num] | 0);
              let str4 = str3.toString(16);
              str = `${str4.substr(4)}`;
              num = num + 1;
              str2 = str;
              length = toBitsResult.length;
            } while (num < length);
          }
          const bitArray = obj.bitArray;
          return str2.substr(0, bitArray.bitLength(toBitsResult) / 4);
        },
        toBits(str) {
          let length;
          const items = [];
          const replaced = str.replace(/\s|0x/g, "");
          let num = 0;
          if (0 < `${arr2}00000000`.length) {
            do {
              let _parseInt = parseInt;
              let arr = items.push(0 ^ parseInt(`${arr2}00000000`.substr(num, 8), 16));
              num = num + 8;
              length = `${arr2}00000000`.length;
            } while (num < length);
          }
          const bitArray = obj.bitArray;
          return bitArray.clamp(items, 4 * replaced.length);
        }
      };
      obj.hash.sha256 = function(u) {
        const self = this;
        if (!this.b[0]) {
          self.G();
        }
        if (u) {
          u = u.u;
          self.u = u.slice(0);
          const o = u.o;
          self.o = o.slice(0);
          self.h = u.h;
        } else {
          self.reset();
        }
      };
      obj.hash.sha256.hash = (arg0) => {
        const sha256 = new obj.hash.sha256();
        return sha256.update(arg0).finalize();
      };
      obj.hash.sha256.prototype = {
        blockSize: 512,
        reset() {
          const K = this.K;
          this.u = K.slice(0);
          this.o = [];
          this.h = 0;
          return this;
        },
        update(toBitsResult) {
          const self = this;
          if ("string" === typeof toBitsResult) {
            const utf8String = obj.codec.utf8String;
            toBitsResult = utf8String.toBits(toBitsResult);
          }
          const bitArray = obj.bitArray;
          const combined = bitArray.concat(self.o, toBitsResult);
          self.o = combined;
          const h = self.h;
          const bitArray2 = obj.bitArray;
          const sum = h + bitArray2.bitLength(toBitsResult);
          self.h = sum;
          if (9007199254740991 < sum) {
            let invalid = obj.exception.invalid;
            const prototype2 = invalid.prototype;
            invalid = new invalid("Cannot hash more than 2^53 - 1 bits");
            throw invalid;
          } else {
            const _Uint32Array2 = Uint32Array;
            if ("undefined" !== typeof Uint32Array) {
              const _Uint32Array = Uint32Array;
              const uint32Array = new Uint32Array(combined);
              let diff = 512 + h - (512 + h & 511);
              let num10 = 0;
              let num11 = 0;
              if (diff <= sum) {
                do {
                  let tmp12 = closure_2;
                  let sum1 = num10 + 1;
                  let tmp14 = closure_2(self, uint32Array.subarray(16 * num10, 16 * sum1));
                  diff = diff + 512;
                  num10 = sum1;
                  num11 = sum1;
                } while (diff <= sum);
              }
              combined.splice(0, 16 * num11);
            } else {
              let diff1 = 512 + h - (512 + h & 511);
              if (diff1 <= sum) {
                do {
                  let tmp5 = closure_2;
                  let tmp6 = closure_2(self, combined.splice(0, 16));
                  diff1 = diff1 + 512;
                } while (diff1 <= sum);
              }
            }
            return self;
          }
        },
        finalize() {
          let length;
          let o;
          let tmp3;
          let u;
          const self = this;
          const bitArray = obj.bitArray;
          const bitArray2 = obj.bitArray;
          ({ o, u } = this);
          const items = [bitArray2.partial(1, 1)];
          const combined = bitArray.concat(o, items);
          let sum = combined.length + 2;
          if (15 & sum) {
            do {
              let arr = combined.push(0);
              sum = sum + 1;
              tmp3 = 15 & sum;
            } while (tmp3);
          }
          combined.push(Math.floor(self.h / 4294967296));
          combined.push(self.h | 0);
          if (combined.length) {
            do {
              let tmp6 = closure_2;
              let tmp7 = closure_2(self, combined.splice(0, 16));
              length = combined.length;
            } while (length);
          }
          self.reset();
          return u;
        },
        K: [],
        b: [],
        G() {
          let sum;
          const self = this;
          const fn = function a(arg0) {
            return 4294967296 * (arg0 - Math.floor(arg0)) | 0;
          };
          let num = 0;
          let num2 = 2;
          do {
            let num3 = 2;
            let flag = true;
            if (4 <= num2) {
              flag = false;
              while (0 != num2 % num3) {
                num3 = num3 + 1;
                flag = true;
                if (num3 * num3 > num2) {
                  break;
                }
              }
            }
            sum = num;
            if (flag) {
              if (8 > num) {
                let _Math = Math;
                self.K[num] = fn(Math.pow(num2, 0.5));
              }
              let _Math2 = Math;
              self.b[num] = fn(Math.pow(num2, 0.3333333333333333));
              sum = num + 1;
            }
            num2 = num2 + 1;
            num = sum;
          } while (64 > sum);
        }
      };
      obj.prng = function(D) {
        const sha256 = new obj.hash.sha256();
        const items = [sha256];
        this.c = items;
        this.i = [0.229];
        this.H = 0;
        this.v = {};
        this.F = 0;
        this.J = {};
        this.T = 0;
        this.j = 0;
        this.f = 0;
        this.L = 0;
        this.b = [];
        this.g = ["<string:1014759426>", "<string:340852738>", "<string:1612335631>", "<string:1612447746>"];
        this.C = undefined;
        this.D = D;
        this.s = false;
        this.B = { progress: {}, seeded: {} };
        this.S = 0;
        this.m = 0;
        this.w = 1;
        this.A = 2;
        this.O = 65536;
        this.I = ["<string:1442261319>", "<string:124666765>", "<string:1047141467>", "<string:42473292>", "<string:21020672>", "<string:36716032>", "<string:42472192>", "<string:21211392>", "<string:28802816>", "<string:56018432>", "<string:33858048>"];
        this.P = 30000;
        this.N = 80;
      };
      obj.prng.prototype = {
        randomWords(arg0, arg1) {
          const self = this;
          const items = [];
          const isReadyResult = this.isReady(arg1);
          if (isReadyResult === this.m) {
            let notReady = obj.exception.notReady;
            const prototype4 = notReady.prototype;
            notReady = new notReady("generator isn't seeded");
            throw notReady;
          } else {
            if (isReadyResult & self.A) {
              const items1 = [];
              const _Date = Date;
              const date = new Date();
              const sum = date.valueOf() + self.P;
              items1[0] = sum;
              self.L = sum;
              let num4 = 0;
              do {
                let _Math = Math;
                let arr = items1.push(4294967296 * Math.random() | 0);
                num4 = num4 + 1;
              } while (16 > num4);
              let tmp9 = items1;
              let num5 = 0;
              if (0 < self.c.length) {
                const first = self.c[0];
                const combined = items1.concat(first.finalize());
                const first1 = self.i[0];
                self.i[0] = 0;
                let obj3 = combined;
                let num7 = 0;
                let tmp12 = first1;
                if (!tmp2) {
                  const sum1 = num7 + 1;
                  tmp9 = obj3;
                  num5 = tmp12;
                  while (sum1 < self.c.length) {
                    let obj4 = self.c[sum1];
                    let combined1 = obj3.concat(obj4.finalize());
                    let sum2 = tmp12 + self.i[sum1];
                    self.i[sum1] = 0;
                    obj3 = combined1;
                    num7 = sum1;
                    tmp12 = sum2;
                    if (!tmp2) {
                      continue;
                    } else {
                      obj3 = combined1;
                      num7 = sum1;
                      tmp12 = sum2;
                      tmp9 = combined1;
                      num5 = sum2;
                      if (self.H & 1 << sum1) {
                        break;
                      }
                    }
                    continue;
                  }
                } else {
                  obj3 = combined;
                  num7 = 0;
                  tmp12 = first1;
                  tmp9 = combined;
                  num5 = first1;
                }
              }
              if (self.H >= 1 << self.c.length) {
                const c = self.c;
                let sha256 = obj.hash.sha256;
                const prototype2 = sha256.prototype;
                sha256 = new sha256();
                c.push(sha256);
                const i = self.i;
                i.push(0);
              }
              self.f = self.f - num5;
              if (num5 > self.j) {
                self.j = num5;
              }
              self.H = self.H + 1;
              const sha2562 = obj.hash.sha256;
              const b = self.b;
              self.b = sha2562.hash(b.concat(tmp9));
              let aes = obj.cipher.aes;
              const prototype3 = aes.prototype;
              aes = new aes(self.b);
              self.C = aes;
              self.g[0] = self.g[0] + 1 | 0;
              let num10 = 0;
              if (!self.g[0]) {
                num10 = num10 + 1;
                while (4 > num10) {
                  self.g[num10] = self.g[num10] + 1 | 0;
                  if (self.g[num10]) {
                    break;
                  }
                }
              }
            }
            for (let num16 = 0; num16 < arg0; num16 = num16 + 4) {
              if (0 === (num16 + 1) % self.O) {
                let tmp29 = y;
                let tmp30 = y(self);
              }
              let tmp31 = z;
              let tmp32 = z(self);
              let tmp33 = items;
              let arr2 = items.push(tmp32[0], tmp32[1], tmp32[2], tmp32[3]);
            }
            y(self);
            return items.slice(0, arg0);
          }
        },
        setDefaultParanoia(D) {
          if (0 === D) {
            if ("Setting paranoia=0 will ruin your security; use it only for testing" !== arg1) {
              let invalid = obj.exception.invalid;
              const prototype = invalid.prototype;
              invalid = new invalid("Setting paranoia=0 will ruin your security; use it only for testing");
              throw invalid;
            }
          }
          this.D = D;
        },
        addEntropy(items, arg1, accelerometer) {
          let tmp13;
          let str = accelerometer;
          const self = this;
          if (!accelerometer) {
            str = "user";
          }
          const valueOfResult = new Date().valueOf();
          let num = self.v[str];
          let tmp3 = self.J[str];
          const date = new Date();
          if (undefined === tmp3) {
            self.T = +self.T + 1;
            self.J[str] = +self.T;
            tmp3 = tmp4;
          }
          if (undefined === num) {
            self.v[str] = 0;
            num = 0;
          }
          self.v[str] = (self.v[str] + 1) % self.c.length;
          if ("number" === typeof items) {
            let num17 = arg1;
            if (undefined === arg1) {
              num17 = 1;
            }
            items = [tmp3, , , , , , ];
            self.F = +self.F + 1;
            items[1] = +self.F;
            items[2] = 1;
            items[3] = num17;
            items[4] = valueOfResult;
            items[5] = 1;
            items[6] = items | 0;
            self.c[num].update(items);
            let num4 = 0;
            let tmp9 = num17;
            const obj5 = self.c[num];
          } else if ("object" === tmp5) {
            const _Object = Object;
            const callResult = toString.call(items);
            if ("[object Uint32Array]" === callResult) {
              const items1 = [];
              let num11 = 0;
              let arr2 = items1;
              let num7 = 0;
              if (0 < items.length) {
                do {
                  let arr = items1.push(items[num11]);
                  num11 = num11 + 1;
                  arr2 = items1;
                  num7 = 0;
                  tmp13 = num11 < items.length;
                } while (tmp13);
              }
            } else {
              let num6 = 0;
              if ("[object Array]" !== callResult) {
                num6 = 1;
              }
              arr2 = items;
              num7 = num6;
              if (0 < items.length) {
                let num9 = 0;
                let num8 = num6;
                arr2 = items;
                num7 = num6;
                if (!num6) {
                  while (true) {
                    if ("number" !== typeof items[num9]) {
                      num8 = 1;
                    }
                    num9 = num9 + 1;
                    arr2 = items;
                    num7 = num8;
                    if (num9 >= items.length) {
                      break;
                    } else {
                      arr2 = items;
                      num7 = num8;
                      if (tmp11) {
                        break;
                      } else {
                        // continue
                      }
                    }
                  }
                }
              }
            }
            tmp9 = arg1;
            num4 = num7;
            if (!num7) {
              let num12 = arg1;
              if (undefined === arg1) {
                let num14 = 0;
                let num15 = 0;
                num12 = 0;
                if (0 < arr2.length) {
                  do {
                    let tmp14 = arr2[num15];
                    let sum = num14;
                    let tmp16 = num14;
                    if (0 < tmp14) {
                      do {
                        sum = sum + 1;
                        tmp14 = tmp14 >>> 1;
                        tmp16 = sum;
                      } while (0 < tmp14);
                    }
                    num15 = num15 + 1;
                    num14 = tmp16;
                    num12 = tmp16;
                  } while (num15 < arr2.length);
                }
              }
              const items2 = [tmp3, , , , , ];
              self.F = +self.F + 1;
              items2[1] = +self.F;
              items2[2] = 2;
              items2[3] = num12;
              items2[4] = valueOfResult;
              items2[5] = arr2.length;
              self.c[num].update(items2.concat(arr2));
              tmp9 = num12;
              num4 = num7;
              const obj4 = self.c[num];
            }
          } else {
            tmp9 = arg1;
            num4 = 1;
            if ("string" === tmp5) {
              let length = arg1;
              if (undefined === arg1) {
                length = items.length;
              }
              const items3 = [tmp3, , , , , ];
              self.F = +self.F + 1;
              items3[1] = +self.F;
              items3[2] = 3;
              items3[3] = length;
              items3[4] = valueOfResult;
              items3[5] = items.length;
              self.c[num].update(items3);
              self.c[num].update(items);
              num4 = 0;
              tmp9 = length;
              const obj2 = self.c[num];
              const obj3 = self.c[num];
            }
          }
          if (num4) {
            let bug = obj.exception.bug;
            const prototype = bug.prototype;
            bug = new bug("random: addEntropy only supports number, array of numbers or string");
            throw bug;
          } else {
            const i = self.i;
            i[num] = i[num] + tmp9;
            self.f = self.f + tmp9;
            if (isReadyResult === self.m) {
              if (self.isReady() !== self.m) {
                const _Math = Math;
                A("seeded", Math.max(self.j, self.f));
              }
              A("progress", self.getProgress());
            }
          }
          const isReadyResult = self.isReady();
        },
        isReady(arg0) {
          let A;
          let w;
          let D = arg0;
          w = this;
          if (undefined === arg0) {
            D = w.D;
          }
          const tmp = this.I[D];
          if (w.j) {
            if (w.j >= tmp) {
              if (w.i[0] <= w.N) {
                const w2 = w.w;
              } else {
                const _Date = Date;
                const date = new Date();
              }
              ({ A, w } = w);
            }
          }
          if (w.f >= tmp) {
            let m = w.A | w.m;
          } else {
            m = w.m;
          }
          return m;
        },
        getProgress(id) {
          let D = id;
          const self = this;
          if (!id) {
            D = self.D;
          }
          const tmp = this.I[D];
          let num = 1;
          if (self.j < tmp) {
            num = 1;
            if (self.f <= tmp) {
              num = self.f / tmp;
            }
          }
          return num;
        },
        startCollectors() {
          const self = this;
          if (!this.s) {
            const obj = { loadTimeCollector: B(self, self.V), mouseCollector: B(self, self.W), keyboardCollector: B(self, self.U), accelerometerCollector: B(self, self.R), touchCollector: B(self, self.X) };
            self.a = obj;
            let flag = globalThis;
            const _window = window;
            if (window.addEventListener) {
              const _window2 = flag.window;
              const listener = _window2.addEventListener("load", self.a.loadTimeCollector, false);
              const _window3 = flag.window;
              const listener1 = _window3.addEventListener("mousemove", self.a.mouseCollector, false);
              const _window4 = flag.window;
              const listener2 = _window4.addEventListener("keypress", self.a.keyboardCollector, false);
              const _window5 = flag.window;
              const listener3 = _window5.addEventListener("devicemotion", self.a.accelerometerCollector, false);
              const _window6 = flag.window;
              const listener4 = _window6.addEventListener("touchmove", self.a.touchCollector, false);
            } else {
              const _document = document;
              if (document.attachEvent) {
                const _document2 = document;
                document.attachEvent("onload", self.a.loadTimeCollector);
                const _document3 = document;
                document.attachEvent("onmousemove", self.a.mouseCollector);
                const _document4 = document;
                document.attachEvent("keypress", self.a.keyboardCollector);
              } else {
                let bug = obj.exception.bug;
                const prototype = bug.prototype;
                bug = new bug("can't attach event");
                throw bug;
              }
            }
            flag = true;
            self.s = true;
          }
        },
        stopCollectors() {
          const self = this;
          if (this.s) {
            let flag = globalThis;
            const _window = window;
            if (window.removeEventListener) {
              const _window2 = flag.window;
              const removed = _window2.removeEventListener("load", self.a.loadTimeCollector, false);
              const _window3 = flag.window;
              const removed1 = _window3.removeEventListener("mousemove", self.a.mouseCollector, false);
              const _window4 = flag.window;
              const removed2 = _window4.removeEventListener("keypress", self.a.keyboardCollector, false);
              const _window5 = flag.window;
              const removed3 = _window5.removeEventListener("devicemotion", self.a.accelerometerCollector, false);
              const _window6 = flag.window;
              const removed4 = _window6.removeEventListener("touchmove", self.a.touchCollector, false);
            } else {
              const _document = document;
              if (document.detachEvent) {
                const _document2 = document;
                document.detachEvent("onload", self.a.loadTimeCollector);
                const _document3 = document;
                document.detachEvent("onmousemove", self.a.mouseCollector);
                const _document4 = document;
                document.detachEvent("keypress", self.a.keyboardCollector);
              }
            }
            flag = false;
            self.s = false;
          }
        },
        addEventListener(arg0, arg1) {
          const tmp = +this.S;
          this.S = tmp + 1;
          this.B[arg0][tmp] = arg1;
        },
        removeEventListener(arg0, arg1) {
          let length;
          const obj = this.B[arg0];
          const items = [];
          for (const key10008 in obj) {
            let tmp4 = key10008;
            let hasOwnPropertyResult = obj.hasOwnProperty(key10008);
            if (hasOwnPropertyResult) {
              hasOwnPropertyResult = obj[key10008] === arg1;
            }
            if (!hasOwnPropertyResult) {
              continue;
            } else {
              let arr = items.push(key10008);
              // continue
            }
            continue;
          }
          let num = 0;
          if (0 < items.length) {
            do {
              let tmp3 = items[num];
              delete r3[r0];
              num = num + 1;
              length = items.length;
            } while (num < length);
          }
        },
        U() {
          C(this, 1);
        },
        W(arg0) {
          const self = this;
          const x = arg0.x;
          let clientX = x;
          if (!x) {
            clientX = arg0.clientX;
          }
          let offsetX = clientX;
          if (!clientX) {
            offsetX = arg0.offsetX;
          }
          let num = offsetX;
          if (!offsetX) {
            num = 0;
          }
          const y = arg0.y;
          let clientY = y;
          if (!y) {
            clientY = arg0.clientY;
          }
          let offsetY = clientY;
          if (!clientY) {
            offsetY = arg0.offsetY;
          }
          let num2 = offsetY;
          if (!offsetY) {
            num2 = 0;
          }
          while (true) {
            let tmp6 = tmp3;
            let num3 = 0;
            let tmp7 = 0 != tmp3;
            let tmp8 = tmp7;
            if (!tmp7) {
              break;
            } else {
              let tmp9 = tmp5;
              tmp8 = 0 != tmp5;
              // break
            }
            if (tmp8) {
              let items = [tmp3, tmp5];
              let num4 = 2;
              let str = "mouse";
              let addEntropyResult = self.addEntropy(items, 2, "mouse");
            }
            let tmp11 = C;
            let tmp12 = C(self, 0);
          }
        },
        X(arg0) {
          const self = this;
          let clientX = tmp.pageX;
          if (!clientX) {
            clientX = tmp.clientX;
          }
          const items = [clientX, arg0.touches[0] || arg0.changedTouches[0].pageY || arg0.touches[0] || arg0.changedTouches[0].clientY];
          self.addEntropy(items, 1, "touch");
          C(self, 0);
        },
        V() {
          C(this, 2);
        },
        R(accelerationIncludingGravity) {
          const self = this;
          if (window.orientation) {
            const _window = window;
            if ("number" === typeof orientation) {
              self.addEntropy(orientation, 1, "accelerometer");
            }
          }
          if (accelerationIncludingGravity.accelerationIncludingGravity.x || accelerationIncludingGravity.accelerationIncludingGravity.y || accelerationIncludingGravity.accelerationIncludingGravity.z) {
            self.addEntropy(tmp, 2, "accelerometer");
          }
          C(self, 0);
        }
      };
      const prng = new obj.prng(6);
      obj.random = prng;
      let _exports = tmp3;
      if (undefined !== module) {
        _exports = module.exports;
      }
      if (!_exports) {
        if (_exports) {
          if (undefined.randomBytes) {
            const _Uint32Array = Uint32Array;
            const _Uint8Array = Uint8Array;
            const uint8Array = new Uint8Array(undefined.randomBytes(128));
            const uint32Array = new Uint32Array(uint8Array.buffer);
            const random2 = tmp.random;
            random2.addEntropy(uint32Array, 1024, "crypto['randomBytes']");
          }
          while (true) {
            let tmp29 = module;
            let tmp30 = undefined !== module;
            let _exports2 = tmp30;
            if (!tmp30) {
              break;
            } else {
              let tmp31 = module;
              _exports2 = module.exports;
              // break
            }
            if (_exports2) {
              module.exports = obj;
            }
          }
        }
        const _window = window;
        if ("undefined" !== typeof window) {
          const _Uint32Array2 = Uint32Array;
          if ("undefined" !== typeof Uint32Array) {
            const _Uint32Array3 = Uint32Array;
            const uint32Array1 = new Uint32Array(32);
            const _window7 = window;
            if (window.crypto) {
              const _window2 = window;
              if (window.crypto.getRandomValues) {
                const _window6 = window;
                const _crypto = window.crypto;
                const randomValues = _crypto.getRandomValues(tmp35);
                const random = tmp.random;
                random.addEntropy(tmp35, 1024, "crypto['getRandomValues']");
              }
            }
            const _window3 = window;
            if (window.msCrypto) {
              const _window4 = window;
              if (window.msCrypto.getRandomValues) {
                const _window5 = window;
                const randomValues1 = msCrypto.getRandomValues(tmp35);
              }
            }
          }
        }
      } else {
        let globalResult = global("crypto");
        while (true) {
          let tmp7 = __exception;
          globalResult = null;
          // continue
        }
      }
    },
    { crypto: undefined }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let obj = {};
      obj = { type: global("../lib/braintree-error").types.MERCHANT, code: "FASTLANE_SDK_LOAD_ERROR" };
      obj.FASTLANE_SDK_LOAD_ERROR = obj;
      module.exports = obj;
    },
    { ../lib/braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("./errors");
      const loadFastlane = global("../lib/assets").loadFastlane;
      const assign = global("../lib/assign").assign;
      module.exports = global("@braintree/wrap-promise")(function fastlane(arg0) {
        let client;
        let client2;
        let closure_0 = arg0;
        ({ client, client: client2 } = arg0);
        const configuration = client.getConfiguration();
        let flag = true;
        const version = client2.getVersion();
        if ("production" !== configuration.gatewayConfiguration.environment) {
          flag = false;
        }
        const obj = { platform: "BT", btSdkVersion: version, minified: flag };
        const promise = loadFastlane(assign(obj, arg0));
        return loadFastlane(assign(obj, arg0)).then((metadata) => {
          const platformOptions = { platform: "BT", authorization: metadata.authorization, client: metadata.client, deviceData: metadata.deviceData };
          delete r6.authorization;
          delete r6.client;
          delete r6.deviceData;
          delete r6.minified;
          delete r6.btSdkVersion;
          return fastlane.create(callback({ platformOptions }, metadata, metadata.metadata));
        }).catch((message) => Promise.reject(new message({ type: constants.FASTLANE_SDK_LOAD_ERROR.type, code: constants.FASTLANE_SDK_LOAD_ERROR.code, message: message.message })));
      });
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/basic-component-verification");
      let closure_1 = global("./fastlane");
      let closure_2 = global("../lib/create-assets-url");
      let closure_3 = global("../lib/create-deferred-client");
      const assign = global("../lib/assign").assign;
      const globalResult = global("@braintree/wrap-promise");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          const obj = { name: "fastlane", client: client.client, authorization: client.authorization };
          const verifyResult = closure_0.verify({ name: "fastlane", client: client.client, authorization: client.authorization });
          return closure_0.verify({ name: "fastlane", client: client.client, authorization: client.authorization }).then((self) => closure_3.create({ authorization: self.authorization, client: self.client, assetsUrl: closure_2.create(self.authorization), name: "fastlane" })).then((client) => callback(callback2({ client, deviceData: client.deviceData }, client)));
        }),
        VERSION: "3.112.1"
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT };
      obj = { enabled: "<string:1902313473>", channel_id: "<string:3611557889>", type: globalResult.types.UNKNOWN };
      obj = { code: "GOOGLE_PAYMENT_UNSUPPORTED_VERSION", type: globalResult.types.MERCHANT };
      module.exports = { GOOGLE_PAYMENT_NOT_ENABLED: obj, GOOGLE_PAYMENT_GATEWAY_ERROR: obj, GOOGLE_PAYMENT_UNSUPPORTED_VERSION: obj };
    },
    { ../lib/braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class GooglePayment {
        constructor(arg0) {
          self = this;
          ({ createPromise: this._createPromise, client: this._client, useDeferredClient: this._useDeferredClient } = global);
          self._googlePayVersion = global.googlePayVersion || 1;
          self._googleMerchantId = global.googleMerchantId;
          if (self._isUnsupportedGooglePayAPIVersion()) {
            tmp = closure_5;
            obj = {};
            tmp2 = closure_6;
            obj.code = closure_6.GOOGLE_PAYMENT_UNSUPPORTED_VERSION.code;
            str = "The Braintree SDK does not support Google Pay version ";
            str2 = ". Please upgrade the version of your Braintree SDK and contact support if this error persists.";
            obj.message = `The Braintree SDK does not support Google Pay version ${self._googlePayVersion}. Please upgrade the version of your Braintree SDK and contact support if this error persists.`;
            tmp3 = closure_6;
            obj.type = closure_6.GOOGLE_PAYMENT_UNSUPPORTED_VERSION.type;
            prototype = closure_5.prototype;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = obj;
            tmp7 = new closure_5(obj);
            tmp8 = tmp7;
            throw tmp7;
          } else {
            return;
          }
        }
        _waitForClient() {
          self = this;
          if (this._client) {
            tmp2 = globalThis;
            _Promise = Promise;
            resolved = Promise.resolve();
          } else {
            _createPromise = self._createPromise;
            fn = function(_client) {
              this._client = _client;
            };
            resolved = _createPromise.then(fn.bind(self));
          }
          return resolved;
        }
        _isUnsupportedGooglePayAPIVersion() {
          return !(this._googlePayVersion in global);
        }
        _getDefaultConfig() {
          self = this;
          if (!this._defaultConfig) {
            tmp = closure_4;
            _client = self._client;
            self._defaultConfig = closure_4(_client.getConfiguration(), self._googlePayVersion, self._googleMerchantId);
          }
          return self._defaultConfig;
        }
        _createV1PaymentDataRequest(arg0) {
          _getDefaultConfigResult = this._getDefaultConfig();
          tmp2 = global.cardRequirements && global.cardRequirements.allowedCardNetworks || _getDefaultConfigResult.cardRequirements.allowedCardNetworks;
          tmp3 = assign({}, _getDefaultConfigResult, global);
          tmp3.cardRequirements.allowedCardNetworks = tmp2;
          return tmp3;
        }
        _createV2PaymentDataRequest(arg0) {
          _getDefaultConfigResult = this._getDefaultConfig();
          closure_0 = _getDefaultConfigResult;
          if (global.allowedPaymentMethods) {
            prop = global.allowedPaymentMethods;
            item = prop.forEach((type) => {
              const tmp = callback(_getDefaultConfigResult.allowedPaymentMethods, "type", type.type);
              if (tmp) {
                function applyDefaultsToPaymentMethodConfiguration(type, arg1) {
                  const keys = Object.keys(arg1);
                  const item = keys.forEach((arg0) => {
                    if ("object" === typeof arg1[arg0]) {
                      arg0[arg0] = arg1({}, arg1[arg0], arg0[arg0]);
                    } else {
                      let tmp2 = arg0[arg0];
                      if (!tmp2) {
                        tmp2 = arg1[arg0];
                      }
                      arg0[arg0] = tmp2;
                      const tmp = arg0;
                    }
                  });
                }(type, tmp);
              }
            });
          }
          return assign({}, _getDefaultConfigResult, global);
        }
        createPaymentDataRequest(arg0) {
          self = this;
          closure_0 = global;
          if (this._useDeferredClient) {
            _waitForClientResult = self._waitForClient();
            fn = function() {
              return this._createPaymentDataRequestSyncronously(arg0);
            };
            nextPromise = _waitForClientResult.then(fn.bind(self));
          } else {
            nextPromise = self._createPaymentDataRequestSyncronously(global);
          }
          return nextPromise;
        }
        _createPaymentDataRequestSyncronously(arg0) {
          self = this;
          tmp = assign({}, global);
          _googlePayVersion = this._googlePayVersion;
          totalPrice = tmp.transactionInfo;
          if (totalPrice) {
            totalPrice = tmp.transactionInfo.totalPrice;
          }
          if (totalPrice) {
            str = tmp.transactionInfo.totalPrice;
            tmp.transactionInfo.totalPrice = str.toString();
          }
          sendEventResult = closure_0.sendEvent(self._createPromise, `google-payment.v${_googlePayVersion}.createPaymentDataRequest`);
          return self[closure_8[_googlePayVersion]](tmp);
        }
        parseResponse(arg0) {
          closure_0 = global;
          assign = this;
          resolved = Promise.resolve();
          nextPromise = resolved.then((self) => {
            if (2 === self.apiVersion) {
              let token = self.paymentMethodData.tokenizationData.token;
            } else {
              token = self.paymentMethodToken.token;
            }
            const parsed = JSON.parse(token);
            const error = parsed.error;
            if (error) {
              let rejectResult = Promise.reject(error);
            } else {
              self.sendEvent(self._createPromise, "google-payment.parseResponse.succeeded");
              if (parsed.paypalAccounts) {
                self.sendEvent(self._createPromise, "google-payment.parseResponse.succeeded.paypal");
                let obj = {};
                ({ nonce: obj3.nonce, type: obj3.type, description: obj3.description } = parsed.paypalAccounts[0]);
                rejectResult = Promise.resolve(obj);
              } else {
                const first = parsed.androidPayCards[0];
                self.sendEvent(self._createPromise, "google-payment.parseResponse.succeeded.google-payment");
                obj = {};
                ({ nonce: obj.nonce, type: obj.type, description: obj.description } = first);
                obj = { cardType: first.details.cardType, lastFour: first.details.lastFour, lastTwo: first.details.lastTwo, isNetworkTokenized: first.details.isNetworkTokenized, bin: first.details.bin };
                obj.details = obj;
                obj.binData = first.binData;
                rejectResult = Promise.resolve(obj);
              }
            }
            return rejectResult;
          });
          return nextPromise.catch((originalError) => {
            originalError.sendEvent(self._createPromise, "google-payment.parseResponse.failed");
            let obj = { code: constants.GOOGLE_PAYMENT_GATEWAY_ERROR.code, message: constants.GOOGLE_PAYMENT_GATEWAY_ERROR.message, type: constants.GOOGLE_PAYMENT_GATEWAY_ERROR.type, details: obj };
            obj = { originalError };
            return Promise.reject(new closure_5(obj));
          });
        }
        teardown() {
          tmp = closure_2(this, closure_7(GooglePayment.prototype));
          return Promise.resolve();
        }
      }
      let closure_0 = global("../lib/analytics");
      const assign = global("../lib/assign").assign;
      let closure_2 = global("../lib/convert-methods-to-error");
      let closure_3 = global("../lib/find");
      let closure_4 = global("../lib/generate-google-pay-configuration");
      let closure_5 = global("../lib/braintree-error");
      let closure_6 = global("./errors");
      let closure_7 = global("../lib/methods");
      let closure_8 = { skuId: "<string:1157628375>", apply: "<string:1090519511>" };
      module.exports = global("@braintree/wrap-promise").wrapPrototype(GooglePayment);
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./google-payment");
      let closure_1 = global("../lib/braintree-error");
      let closure_2 = global("../lib/create-assets-url");
      let closure_3 = global("../lib/create-deferred-client");
      let closure_4 = global("../lib/basic-component-verification");
      let closure_5 = global("./errors");
      const globalResult = global("@braintree/wrap-promise");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          return closure_4.verify({ name: "Google Pay", client: client.client, authorization: client.authorization }).then((self) => {
            let obj = { authorization: self.authorization, client: self.client, debug: self.debug, assetsUrl: closure_2.create(self.authorization), name: "Google Pay" };
            obj = closure_3.create(obj);
            const nextPromise = obj.then((client) => {
              let rejectResult = client;
              tmp.client = client;
              if (!client.getConfiguration().gatewayConfiguration.androidPay) {
                const prototype = ctor.prototype;
                const tmp7 = new ctor(constants.GOOGLE_PAYMENT_NOT_ENABLED);
                rejectResult = Promise.reject(tmp7);
              }
              return rejectResult;
            });
            self.createPromise = nextPromise;
            const tmp = new self(self);
            let nextPromise1 = tmp;
            self = tmp;
            if (!self.useDeferredClient) {
              nextPromise1 = nextPromise.then((_client) => {
                tmp._client = _client;
                return tmp;
              });
            }
            return nextPromise1;
          });
        }),
        VERSION: "3.112.1"
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../../lib/braintree-error");
      let closure_1 = global("../shared/errors");
      const allowedAttributes = global("../shared/constants").allowedAttributes;
      module.exports = function attributeValidationError(arg0, arg1) {
        if (allowedAttributes.hasOwnProperty(arg0)) {
          if (null == arg1) {
            if (!tmp8) {
              let obj = { type: constants.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.type, code: constants.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.code, message: `Value "${arg1}" is not allowed for "${arg0}" attribute.` };
              const prototype2 = ctor.prototype;
              let tmp6 = new ctor(obj);
            }
          } else {
            let str3 = "string";
            if ("string" === allowedAttributes[arg0]) {
              str3 = `string` === tmp13;
              if (!str3) {
                str3 = "number" === tmp13;
              }
              let flag = str3;
            } else {
              flag = false;
              if ("boolean" === allowedAttributes[arg0]) {
                const _String = String;
                let tmp12 = "true" === String(arg1);
                if (!tmp12) {
                  const _String2 = String;
                  tmp12 = "false" === String(arg1);
                }
                flag = tmp12;
              }
            }
          }
        } else {
          obj = { type: constants.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.type, code: constants.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.code, message: `The "${arg0}" attribute is not supported in Hosted Fields.` };
          const prototype = ctor.prototype;
          tmp6 = new ctor(obj);
        }
        return tmp6;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../shared/constants");
      let closure_1 = global("../../lib/use-min");
      module.exports = function composeUrl(arg0, arg1, arg2) {
        const text = `${arg0}/web/${closure_0.VERSION}`;
        return text + "/html/hosted-fields-frame" + callback(arg2) + ".html#" + arg1;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      function _isUserFocusableElement(tagName) {
        if (closure_1.hasSoftwareKeyboard()) {
          let tmp3 = closure_4.indexOf(tagName.tagName) > -1;
          if (tmp3) {
            tmp3 = closure_5.indexOf(tagName.type) < 0;
          }
          let tmp = tmp3;
        } else {
          tmp = "hidden" !== tagName.type;
        }
        return tmp;
      }
      function _findFirstFocusableElement(callResult) {
        let num = 0;
        if (0 < callResult.length) {
          while (!_isUserFocusableElement(callResult[num])) {
            num = num + 1;
          }
          return callResult[num];
        }
        return null;
      }
      global("../shared/constants").navigationDirections;
      let closure_1 = global("../shared/browser-detection");
      let closure_2 = global("../shared/focus-intercept");
      let closure_3 = global("../shared/find-parent-tags");
      let closure_4 = [null, null, null];
      let closure_5 = [];
      module.exports = {
        removeExtraFocusElements(first, fn) {
          const navigationDirections = fn;
          const callResult = slice.call(first.elements);
          const items = [_findFirstFocusableElement(callResult), _findFirstFocusableElement(callResult.reverse())];
          const item = items.forEach((getAttribute) => {
            let matchFocusElementResult = getAttribute;
            if (getAttribute) {
              matchFocusElementResult = closure_2.matchFocusElement(getAttribute.getAttribute("id"));
            }
            if (matchFocusElementResult) {
              arg1(getAttribute.getAttribute("id"));
            }
          });
        },
        createFocusChangeHandler(arg0, arg1) {
          const navigationDirections = arg0;
          let closure_1 = arg1;
          return (direction, self) => {
            const element = document.getElementById(`bt-${direction.field}-${direction.direction}-${closure_0}`);
            if (element) {
              const first = callback(element, "form")[0];
              const _document = document;
              if (document.forms.length >= 1) {
                if (first) {
                  const slice = [].slice;
                  const callResult = slice.call(first.elements);
                  const index = callResult.indexOf(element);
                  const obj = function _createNavigationHelper(direction, length) {
                    if (length.BACK === direction) {
                      let obj = { checkIndexBounds() { ... }, indexChange: -1 };
                      return obj;
                    } else if (length.FORWARD === direction) {
                      obj = { checkIndexBounds() { ... }, indexChange: 1 };
                      return obj;
                    } else {
                      return {};
                    }
                  }(direction.direction, callResult.length);
                  let tmp5 = index;
                  const sum = tmp5 + obj.indexChange;
                  while (!obj.checkIndexBounds(sum)) {
                    let obj2 = callResult[sum];
                    let tmp7 = callback2;
                    tmp5 = sum;
                    if (!callback2(obj2)) {
                      continue;
                    } else {
                      let tmp8 = closure_2;
                      let str2 = "id";
                      if (closure_2.matchFocusElement(obj2.getAttribute("id"))) {
                        let tmp10 = self;
                        let str3 = "data-braintree-type";
                        let onTriggerInputFocusResult = self.onTriggerInputFocus(obj2.getAttribute("data-braintree-type"));
                      } else {
                        let focusResult = obj2.focus();
                      }
                    }
                  }
                }
              }
              const result = self.onRemoveFocusIntercepts();
            }
          };
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      global("../shared/constants").allowedStyles;
      module.exports = function getStylesFromClass(str) {
        const element = <input />;
        const obj = {};
        let substr = str;
        if ("." === str[0]) {
          substr = str.substring(1);
        }
        element.className = substr;
        element.style.display = "none !important";
        element.style.position = "fixed !important";
        element.style.left = "-99999px !important";
        element.style.top = "-99999px !important";
        body.appendChild(element);
        const allowedStyles = window.getComputedStyle(element);
        const item = allowedStyles.forEach((arg0) => {
          if (closure_0[arg0]) {
            obj[arg0] = tmp;
          }
        });
        body2.removeChild(element);
        return obj;
      };
    },
    { ../shared/constants: 131 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class HostedFields {
        constructor(arg0) {
          self = this;
          assign = global;
          closure_3 = this;
          obj = {};
          closure_4 = obj;
          closure_5 = {};
          items = [];
          closure_6 = items;
          tmp = closure_13();
          closure_7 = tmp;
          sessionId = global.sessionId;
          this._merchantConfigurationOptions = assign({}, global);
          if (global.client) {
            client = global.client;
            configuration = client.getConfiguration(undefined, sessionId);
            assetsUrl = configuration.gatewayConfiguration.assetsUrl;
            isDebug = configuration.isDebug;
          } else {
            tmp2 = f30184;
            tmp4 = globalThis;
            _Boolean = Boolean;
            obj = f30184.create(global.authorization);
            assetsUrl = obj;
            isDebug = Boolean(global.isDebug);
          }
          obj1 = { client: global.client, authorization: global.authorization };
          obj1.debug = isDebug;
          obj1.assetsUrl = assetsUrl;
          obj1.name = "Hosted Fields";
          obj1.sessionId = sessionId;
          self._clientPromise = closure_6.create(obj1);
          closure_2 = closure_8(assetsUrl, tmp, isDebug);
          if (global.fields) {
            tmp6 = globalThis;
            _Object = Object;
            num = 0;
            if (0 !== Object.keys(global.fields).length) {
              tmp32 = closure_17;
              callResult = closure_17.call(self);
              self._injectedNodes = [];
              tmp34 = closure_3;
              prototype = closure_3.prototype;
              tmp35 = new.target;
              tmp36 = new.target;
              tmp37 = new closure_3();
              tmp38 = tmp37;
              self._destructor = tmp37;
              self._fields = obj;
              obj2 = {};
              obj2.fields = {};
              tmp39 = closure_26;
              str3 = "";
              obj2.cards = closure_26("");
              self._state = obj2;
              tmp40 = closure_5;
              obj3 = {};
              obj3.channel = tmp;
              tmp41 = closure_2;
              obj3.verifyDomain = closure_2;
              _window = window;
              items1 = [];
              items1[0] = window;
              obj3.targetFrames = items1;
              prototype2 = closure_5.prototype;
              tmp42 = new.target;
              tmp43 = new.target;
              tmp44 = obj3;
              tmp45 = new closure_5(obj3);
              tmp46 = tmp45;
              self._bus = tmp45;
              _destructor4 = self._destructor;
              result = _destructor4.registerFunctionForTeardown(() => {
                const _bus = self._bus;
                _bus.teardown();
              });
              tmp48 = closure_19;
              sendEvent = closure_19.sendEvent;
              _clientPromise = self._clientPromise;
              if (global.client) {
                str2 = "custom.hosted-fields.initialized";
                sendEventResult = sendEvent(_clientPromise, "custom.hosted-fields.initialized");
              } else {
                str = "custom.hosted-fields.initialized.deferred-client";
                sendEventResult1 = sendEvent(_clientPromise, "custom.hosted-fields.initialized.deferred-client");
              }
              _Object2 = Object;
              keys = Object.keys(global.fields);
              fn = function(fieldKey) {
                const self = this;
                const allowedFields = closure_10.allowedFields;
                if (allowedFields.hasOwnProperty(fieldKey)) {
                  let element = tmp11;
                  if ("string" === typeof fieldKey.fields[fieldKey].container || fieldKey.fields[fieldKey].selector) {
                    const _document = document;
                    element = document.querySelector(tmp11);
                  }
                  if (element) {
                    if (1 === element.nodeType) {
                      if (element.querySelector("iframe[name^=\"braintree-\"]")) {
                        let obj = { type: constants.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.type, code: constants.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.code, message: constants.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.message };
                        obj = {};
                        ({ selector: obj11.fieldSelector, container: obj11.fieldContainer } = tmp10);
                        obj.fieldKey = fieldKey;
                        obj.details = obj;
                        const prototype5 = tmp.prototype;
                        const tmp59 = new tmp(obj);
                        throw tmp59;
                      } else {
                        let transformToSlotResult = element;
                        if (closure_22.isShadowElement(element)) {
                          transformToSlotResult = closure_22.transformToSlot(element, "height: 100%");
                        }
                        if (tmp10.maxlength) {
                          if ("number" !== typeof tmp10.maxlength) {
                            const obj1 = { type: constants.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type, code: constants.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code, message: "The value for maxlength must be a number." };
                            const obj2 = { fieldKey };
                            obj1.details = obj2;
                            const prototype4 = tmp.prototype;
                            const tmp50 = new tmp(obj1);
                            throw tmp50;
                          }
                        }
                        if (tmp10.minlength) {
                          if ("number" !== typeof tmp10.minlength) {
                            const obj3 = { type: constants.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type, code: constants.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code, message: "The value for minlength must be a number." };
                            const obj4 = { fieldKey };
                            obj3.details = obj4;
                            const prototype3 = tmp.prototype;
                            const tmp42 = new tmp(obj3);
                            throw tmp42;
                          }
                        }
                        const obj5 = { type: fieldKey, name: `braintree-hosted-field-${fieldKey}`, style: closure_10.defaultIFrameStyle };
                        let iframeTitle = tmp10.iframeTitle;
                        if (!iframeTitle) {
                          iframeTitle = `Secure Credit Card Frame - ${closure_10.allowedFields[fieldKey].label}`;
                        }
                        obj5.title = iframeTitle;
                        const tmp16Result = obj(obj5);
                        let closure_1 = tmp16Result;
                        const _bus = self._bus;
                        _bus.addTargetFrame(tmp16Result);
                        const push = self._injectedNodes.push;
                        push.apply(self._injectedNodes, callback2(tmp, tmp16Result, transformToSlotResult, () => {
                          closure_3.focus(arg0);
                        }));
                        self._setupLabelFocus(fieldKey, element);
                        const obj6 = { frameElement: tmp16Result, containerElement: element };
                        obj[fieldKey] = obj6;
                        const promise = new Promise((arg0) => {
                          closure_5[arg0] = arg0;
                        });
                        items.push(promise);
                        const obj7 = { EpisodeBadge: null, ClydeShieldSpotIllustration: null, STREAM_FEEDBACK_MODAL: "start", "Bool(true)": "experimental_premium-primary", container: element };
                        self._state.fields[fieldKey] = obj7;
                        const _setTimeout = setTimeout;
                        const timerId = setTimeout(() => {
                          tmp16Result.src = closure_2;
                        }, 0);
                      }
                    }
                  }
                  const obj8 = { type: constants.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.type, code: constants.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.code, message: constants.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.message };
                  const obj9 = {};
                  ({ selector: obj13.fieldSelector, container: obj13.fieldContainer } = fieldKey.fields[fieldKey]);
                  obj9.fieldKey = fieldKey;
                  obj8.details = obj9;
                  const prototype6 = tmp.prototype;
                  const tmp68 = new tmp(obj8);
                  throw tmp68;
                } else {
                  obj = { type: constants.HOSTED_FIELDS_INVALID_FIELD_KEY.type, code: constants.HOSTED_FIELDS_INVALID_FIELD_KEY.code, message: `"${fieldKey}" is not a valid field.` };
                  const prototype = tmp.prototype;
                  const tmp7 = new tmp(obj);
                  throw tmp7;
                }
              };
              item = keys.forEach(fn.bind(self));
              if (self._merchantConfigurationOptions.styles) {
                _Object3 = Object;
                keys1 = Object.keys(self._merchantConfigurationOptions.styles);
                item1 = keys1.forEach((arg0) => {
                  if ("string" === typeof self._merchantConfigurationOptions.styles[arg0]) {
                    self._merchantConfigurationOptions.styles[arg0] = callback(tmp);
                  }
                });
              }
              _bus = self._bus;
              tmp11 = events;
              onResult = _bus.on(events.REMOVE_FOCUS_INTERCEPTS, (id) => {
                if (id) {
                  id = id.id;
                }
                closure_29(id);
              });
              _bus2 = self._bus;
              tmp13 = events;
              tmp14 = closure_28;
              obj4 = {};
              obj4.onRemoveFocusIntercepts = function onRemoveFocusIntercepts(id) {
                const _bus = self._bus;
                _bus.emit(constants2.REMOVE_FOCUS_INTERCEPTS, { id });
              };
              obj4.onTriggerInputFocus = function onTriggerInputFocus(attribute) {
                self.focus(attribute);
              };
              onResult1 = _bus2.on(events.TRIGGER_FOCUS_CHANGE, closure_28.createFocusChangeHandler(tmp, obj4));
              _bus3 = self._bus;
              tmp16 = events;
              onResult2 = _bus3.on(events.READY_FOR_CLIENT, (arg0) => {
                self._clientPromise.then((arg0) => {
                  arg0(arg0);
                });
              });
              _bus4 = self._bus;
              tmp18 = events;
              onResult3 = _bus4.on(events.CARD_FORM_ENTRY_HAS_BEGUN, () => {
                closure_19.sendEvent(self._clientPromise, "hosted-fields.input.started");
              });
              _bus5 = self._bus;
              tmp20 = events;
              onResult4 = _bus5.on(events.BIN_AVAILABLE, (bin) => {
                self._emit("binAvailable", { bin });
              });
              _setTimeout = setTimeout;
              tmp22 = INTEGRATION_TIMEOUT_MS;
              f30184 = setTimeout(() => {
                closure_19.sendEvent(self._clientPromise, "custom.hosted-fields.load.timed-out");
                self._emit("timeout");
              }, INTEGRATION_TIMEOUT_MS);
              _Promise = Promise;
              allPromises = Promise.all(items);
              nextPromise = allPromises.then((arg0) => {
                clearTimeout(closure_1);
                arg0[0](function formatMerchantConfigurationForIframes(_merchantConfigurationOptions) {
                  const tmp = tmp({}, _merchantConfigurationOptions);
                  tmp.fields = tmp({}, tmp.fields);
                  const keys = Object.keys(tmp.fields);
                  const item = keys.forEach((arg0) => {
                    tmp.fields[arg0] = tmp({}, tmp.fields[arg0]);
                    delete r1.container;
                  });
                  return tmp;
                }(self._merchantConfigurationOptions));
                const result = self._cleanUpFocusIntercepts();
                self._emit("ready");
              });
              _bus6 = self._bus;
              tmp24 = events;
              onResult5 = _bus6.on(events.FRAME_READY, (arg0, arg1) => {
                closure_5[arg0.field](arg1);
              });
              _bus7 = self._bus;
              tmp26 = events;
              obj4 = function createInputEventHandler(arg0) {
                return function(merchantPayload) {
                  merchantPayload = merchantPayload.merchantPayload;
                  const emittedBy = merchantPayload.emittedBy;
                  const containerElement = merchantPayload[emittedBy].containerElement;
                  const keys = Object.keys(merchantPayload.fields);
                  const item = keys.forEach((arg0) => {
                    merchantPayload.fields[arg0].container = merchantPayload[arg0].containerElement;
                  });
                  const classList = containerElement.classList;
                  classList.toggle(closure_10.externalClasses.FOCUSED, merchantPayload.fields[emittedBy].isFocused);
                  const classList2 = containerElement.classList;
                  classList2.toggle(closure_10.externalClasses.VALID, merchantPayload.fields[emittedBy].isValid);
                  const classList3 = containerElement.classList;
                  classList3.toggle(closure_10.externalClasses.INVALID, !merchantPayload.fields[emittedBy].isPotentiallyValid);
                  this._state = { cards: merchantPayload.cards, fields: merchantPayload.fields };
                  this._emit(merchantPayload.type, merchantPayload);
                };
              }(obj);
              onResult6 = _bus7.on(events.INPUT_EVENT, obj4.bind(self));
              _destructor = self._destructor;
              result1 = _destructor.registerFunctionForTeardown(() => {
                let length;
                let num = 0;
                if (0 < self._injectedNodes.length) {
                  do {
                    let tmp = closure_3;
                    let tmp2 = closure_3._injectedNodes[num];
                    let parentNode = tmp2.parentNode;
                    let removeChildResult = parentNode.removeChild(tmp2);
                    let classList = parentNode.classList;
                    let tmp4 = closure_10;
                    let tmp5 = closure_10;
                    let tmp6 = closure_10;
                    let removeResult = classList.remove(closure_10.externalClasses.FOCUSED, closure_10.externalClasses.INVALID, closure_10.externalClasses.VALID);
                    num = num + 1;
                    length = closure_3._injectedNodes.length;
                  } while (num < length);
                }
              });
              _destructor2 = self._destructor;
              result2 = _destructor2.registerFunctionForTeardown(() => {
                callback5();
              });
              _destructor3 = self._destructor;
              result3 = _destructor3.registerFunctionForTeardown(() => {
                callback4(self, callback3(ctor2.prototype).concat(callback3(ctor.prototype)));
              });
              return;
            }
          }
          obj5 = { type: closure_25.INSTANTIATION_OPTION_REQUIRED.type, code: closure_25.INSTANTIATION_OPTION_REQUIRED.code, message: "options.fields is required when instantiating Hosted Fields." };
          tmp31 = new closure_7(obj5);
          throw tmp31;
        }
        _setupLabelFocus(arg0, arg1) {
          assign = global;
          triggerFocus = function triggerFocus() {
            self.focus(arg0);
          };
          closure_3 = this;
          obj = closure_23(module);
          if (null != module.id) {
            tmp8 = globalThis;
            _Array2 = Array;
            slice2 = Array.prototype.slice;
            _document = document;
            str3 = "label[for=\"";
            str4 = "\"]";
            callResult = slice2.call(document.querySelectorAll(`label[for="${module.id}"]`));
            closure_1 = callResult;
            _document2 = document;
            obj2 = callResult;
            if (obj !== document) {
              _Array = Array;
              slice = Array.prototype.slice;
              combined = callResult.concat(slice.call(obj.querySelectorAll(`label[for="${module.id}"]`)));
              closure_1 = combined;
              obj2 = combined;
            }
            tmp2 = closure_14;
            str = "label";
            combined1 = obj2.concat(closure_14(module, "label"));
            closure_1 = combined1;
            found = combined1.filter((arg0, arg1, arr) => arr.indexOf(arg0) === arg1);
            closure_1 = found;
            num = 0;
            closure_2 = 0;
            str2 = "click";
            flag = false;
            if (0 < found.length) {
              do {
                tmp3 = closure_2;
                obj3 = found[closure_2];
                listener = obj3.addEventListener("click", triggerFocus, false);
                tmp5 = closure_2;
                sum = closure_2 + 1;
                closure_2 = sum;
                length = found.length;
              } while (sum < length);
            }
            _destructor = this._destructor;
            result = _destructor.registerFunctionForTeardown(() => {
              let length;
              let sum;
              let closure_2 = 0;
              if (0 < found.length) {
                do {
                  let tmp = closure_1;
                  let tmp2 = closure_2;
                  let obj = closure_1[closure_2];
                  let tmp3 = closure_4;
                  let removed = obj.removeEventListener("click", closure_4, false);
                  let tmp5 = closure_2;
                  sum = closure_2 + 1;
                  closure_2 = sum;
                  let tmp7 = closure_1;
                  length = closure_1.length;
                } while (sum < length);
              }
            });
          }
          return;
        }
        _getAnyFieldContainer() {
          assign = this;
          keys = Object.keys(this._fields);
          return keys.reduce((arg0, arg1) => {
            let containerElement = arg0;
            if (!arg0) {
              containerElement = self._fields[arg1].containerElement;
            }
            return containerElement;
          }, null);
        }
        _cleanUpFocusIntercepts() {
          self = this;
          if (document.forms.length < 1) {
            _bus2 = self._bus;
            tmp7 = events;
            emitResult = _bus2.emit(events.REMOVE_FOCUS_INTERCEPTS);
          } else {
            tmp = closure_14;
            str = "form";
            num = 0;
            first = closure_14(self._getAnyFieldContainer(), "form")[0];
            if (first) {
              tmp5 = closure_28;
              fn = function(id) {
                const _bus = this._bus;
                _bus.emit(constants.REMOVE_FOCUS_INTERCEPTS, { id });
              };
              result = closure_28.removeExtraFocusElements(first, fn.bind(self));
            } else {
              _bus = self._bus;
              tmp3 = events;
              emitResult1 = _bus.emit(events.REMOVE_FOCUS_INTERCEPTS);
            }
          }
          return;
        }
        _attachInvalidFieldContainersToError(arg0) {
          assign = global;
          tmp = global.details && global.details.invalidFieldKeys;
          if (tmp) {
            num = 0;
            tmp = global.details.invalidFieldKeys.length > 0;
          }
          if (tmp) {
            global.details.invalidFields = {};
            invalidFieldKeys = global.details.invalidFieldKeys;
            fn = function(arg0) {
              arg0.details.invalidFields[arg0] = this._fields[arg0].containerElement;
            };
            self = this;
            item = invalidFieldKeys.forEach(fn.bind(this));
          }
          return;
        }
        getChallenges() {
          _clientPromise = this._clientPromise;
          return _clientPromise.then((getConfiguration) => getConfiguration.getConfiguration().gatewayConfiguration.challenges);
        }
        getSupportedCardTypes() {
          _clientPromise = this._clientPromise;
          return _clientPromise.then((getConfiguration) => {
            const supportedCardTypes = getConfiguration.getConfiguration().gatewayConfiguration.creditCards.supportedCardTypes;
            return supportedCardTypes.map((arg0) => {
              let str = "Mastercard";
              if ("MasterCard" !== arg0) {
                str = arg0;
              }
              return str;
            });
          });
        }
        teardown() {
          assign = this;
          promise = new Promise((arg0, arg1) => {
            const self = arg0;
            const _destructor = self._destructor;
            _destructor.teardown((arg0) => {
              closure_19.sendEvent(arg0._clientPromise, "custom.hosted-fields.teardown-completed");
              if (arg0) {
                arg1(arg0);
              } else {
                arg0();
              }
            });
          });
          return promise;
        }
        tokenize(arg0) {
          assign = global;
          closure_1 = this;
          if (!global) {
            assign = {};
          }
          promise = new Promise((arg0, arg1) => {
            let closure_0 = arg0;
            const self = arg1;
            const _bus = self._bus;
            _bus.emit(constants.TOKENIZATION_REQUEST, closure_0, (arg0) => {
              const first = arg0[0];
              if (first) {
                const result = arg1._attachInvalidFieldContainersToError(first);
                const prototype = ctor.prototype;
                const tmp12 = new ctor(first);
                arg1(tmp12);
              } else {
                arg0(tmp2);
              }
            });
          });
          return promise;
        }
        addClass(arg0, arg1) {
          self = this;
          if (allowedFields.hasOwnProperty(global)) {
            _fields = self._fields;
            if (_fields.hasOwnProperty(global)) {
              _bus = self._bus;
              tmp14 = events;
              obj = {};
              obj.field = global;
              tmp15 = module;
              obj.classname = module;
              emitResult = _bus.emit(events.ADD_CLASS, obj);
            } else {
              tmp8 = closure_7;
              obj1 = {};
              tmp9 = closure_11;
              obj1.type = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.type;
              tmp10 = closure_11;
              obj1.code = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.code;
              str3 = "Cannot add class to \"";
              str4 = "\" field because it is not part of the current Hosted Fields options.";
              obj1.message = `Cannot add class to "${global}" field because it is not part of the current Hosted Fields options.`;
              prototype2 = closure_7.prototype;
              tmp11 = new.target;
              tmp12 = new.target;
              tmp13 = obj1;
              tmp7 = new closure_7(obj1);
            }
          } else {
            tmp = closure_7;
            obj = {};
            tmp2 = closure_11;
            obj.type = closure_11.HOSTED_FIELDS_FIELD_INVALID.type;
            tmp3 = closure_11;
            obj.code = closure_11.HOSTED_FIELDS_FIELD_INVALID.code;
            str = "\"";
            str2 = "\" is not a valid field. You must use a valid field option when adding a class.";
            obj.message = `"${global}" is not a valid field. You must use a valid field option when adding a class.`;
            prototype = closure_7.prototype;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = obj;
            tmp7 = new closure_7(obj);
          }
          _Promise = Promise;
          if (tmp7) {
            rejectResult = _Promise.reject(tmp7);
          } else {
            rejectResult = _Promise.resolve();
          }
          return rejectResult;
        }
        removeClass(arg0, arg1) {
          self = this;
          if (allowedFields.hasOwnProperty(global)) {
            _fields = self._fields;
            if (_fields.hasOwnProperty(global)) {
              _bus = self._bus;
              tmp14 = events;
              obj = {};
              obj.field = global;
              tmp15 = module;
              obj.classname = module;
              emitResult = _bus.emit(events.REMOVE_CLASS, obj);
            } else {
              tmp8 = closure_7;
              obj1 = {};
              tmp9 = closure_11;
              obj1.type = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.type;
              tmp10 = closure_11;
              obj1.code = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.code;
              str3 = "Cannot remove class from \"";
              str4 = "\" field because it is not part of the current Hosted Fields options.";
              obj1.message = `Cannot remove class from "${global}" field because it is not part of the current Hosted Fields options.`;
              prototype2 = closure_7.prototype;
              tmp11 = new.target;
              tmp12 = new.target;
              tmp13 = obj1;
              tmp7 = new closure_7(obj1);
            }
          } else {
            tmp = closure_7;
            obj = {};
            tmp2 = closure_11;
            obj.type = closure_11.HOSTED_FIELDS_FIELD_INVALID.type;
            tmp3 = closure_11;
            obj.code = closure_11.HOSTED_FIELDS_FIELD_INVALID.code;
            str = "\"";
            str2 = "\" is not a valid field. You must use a valid field option when removing a class.";
            obj.message = `"${global}" is not a valid field. You must use a valid field option when removing a class.`;
            prototype = closure_7.prototype;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = obj;
            tmp7 = new closure_7(obj);
          }
          _Promise = Promise;
          if (tmp7) {
            rejectResult = _Promise.reject(tmp7);
          } else {
            rejectResult = _Promise.resolve();
          }
          return rejectResult;
        }
        setAttribute(arg0) {
          self = this;
          if (allowedFields.hasOwnProperty(global.field)) {
            _fields = self._fields;
            if (_fields.hasOwnProperty(global.field)) {
              tmp14 = closure_27;
              tmp7 = closure_27(global.attribute, global.value);
              if (!tmp7) {
                _bus = self._bus;
                tmp15 = events;
                obj = {};
                ({ field: obj3.field, attribute: obj3.attribute, value: obj3.value } = global);
                emitResult = _bus.emit(events.SET_ATTRIBUTE, obj);
              }
            } else {
              tmp8 = closure_7;
              obj1 = {};
              tmp9 = closure_11;
              obj1.type = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.type;
              tmp10 = closure_11;
              obj1.code = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.code;
              str3 = "Cannot set attribute for \"";
              str4 = "\" field because it is not part of the current Hosted Fields options.";
              obj1.message = `Cannot set attribute for "${global.field}" field because it is not part of the current Hosted Fields options.`;
              prototype2 = closure_7.prototype;
              tmp11 = new.target;
              tmp12 = new.target;
              tmp13 = obj1;
              tmp7 = new closure_7(obj1);
            }
          } else {
            tmp = closure_7;
            obj = {};
            tmp2 = closure_11;
            obj.type = closure_11.HOSTED_FIELDS_FIELD_INVALID.type;
            tmp3 = closure_11;
            obj.code = closure_11.HOSTED_FIELDS_FIELD_INVALID.code;
            str = "\"";
            str2 = "\" is not a valid field. You must use a valid field option when setting an attribute.";
            obj.message = `"${global.field}" is not a valid field. You must use a valid field option when setting an attribute.`;
            prototype = closure_7.prototype;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = obj;
            tmp7 = new closure_7(obj);
          }
          _Promise = Promise;
          if (tmp7) {
            rejectResult = _Promise.reject(tmp7);
          } else {
            rejectResult = _Promise.resolve();
          }
          return rejectResult;
        }
        setMonthOptions(arg0) {
          assign = global;
          closure_1 = this;
          fields = this._merchantConfigurationOptions.fields;
          str = "Expiration month field must exist to use setMonthOptions.";
          if (fields.expirationMonth) {
            if (!fields.expirationMonth.select) {
              str = "Expiration month field must be a select element.";
            }
          }
          _Promise = Promise;
          if (str) {
            tmp4 = closure_7;
            obj = {};
            tmp5 = closure_11;
            obj.type = closure_11.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type;
            tmp6 = closure_11;
            obj.code = closure_11.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code;
            obj.message = str;
            prototype2 = closure_7.prototype;
            tmp7 = new.target;
            tmp8 = new.target;
            tmp9 = obj;
            tmp10 = new closure_7(obj);
            tmp11 = tmp10;
            rejectResult = _Promise.reject(tmp10);
          } else {
            prototype = _Promise.prototype;
            tmp = new.target;
            tmp2 = new.target;
            rejectResult = new _Promise((arg0) => {
              const _bus = self._bus;
              _bus.emit(constants.SET_MONTH_OPTIONS, arg0, arg0);
            });
          }
          return rejectResult;
        }
        setMessage(arg0) {
          _bus = this._bus;
          obj = { field: global.field, message: global.message };
          emitResult = _bus.emit(events.SET_MESSAGE, obj);
          return;
        }
        removeAttribute(arg0) {
          self = this;
          if (allowedFields.hasOwnProperty(global.field)) {
            _fields = self._fields;
            if (_fields.hasOwnProperty(global.field)) {
              tmp14 = closure_27;
              tmp7 = closure_27(global.attribute);
              if (!tmp7) {
                _bus = self._bus;
                tmp15 = events;
                obj = {};
                ({ field: obj3.field, attribute: obj3.attribute } = global);
                emitResult = _bus.emit(events.REMOVE_ATTRIBUTE, obj);
              }
            } else {
              tmp8 = closure_7;
              obj1 = {};
              tmp9 = closure_11;
              obj1.type = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.type;
              tmp10 = closure_11;
              obj1.code = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.code;
              str3 = "Cannot remove attribute for \"";
              str4 = "\" field because it is not part of the current Hosted Fields options.";
              obj1.message = `Cannot remove attribute for "${global.field}" field because it is not part of the current Hosted Fields options.`;
              prototype2 = closure_7.prototype;
              tmp11 = new.target;
              tmp12 = new.target;
              tmp13 = obj1;
              tmp7 = new closure_7(obj1);
            }
          } else {
            tmp = closure_7;
            obj = {};
            tmp2 = closure_11;
            obj.type = closure_11.HOSTED_FIELDS_FIELD_INVALID.type;
            tmp3 = closure_11;
            obj.code = closure_11.HOSTED_FIELDS_FIELD_INVALID.code;
            str = "\"";
            str2 = "\" is not a valid field. You must use a valid field option when removing an attribute.";
            obj.message = `"${global.field}" is not a valid field. You must use a valid field option when removing an attribute.`;
            prototype = closure_7.prototype;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = obj;
            tmp7 = new closure_7(obj);
          }
          _Promise = Promise;
          if (tmp7) {
            rejectResult = _Promise.reject(tmp7);
          } else {
            rejectResult = _Promise.resolve();
          }
          return rejectResult;
        }
        setPlaceholder(arg0, arg1) {
          obj = { field: global, attribute: "placeholder", value: module };
          return this.setAttribute(obj);
        }
        clear(arg0) {
          self = this;
          if (allowedFields.hasOwnProperty(global)) {
            _fields = self._fields;
            if (_fields.hasOwnProperty(global)) {
              _bus = self._bus;
              tmp14 = events;
              obj = {};
              obj.field = global;
              emitResult = _bus.emit(events.CLEAR_FIELD, obj);
            } else {
              tmp8 = closure_7;
              obj1 = {};
              tmp9 = closure_11;
              obj1.type = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.type;
              tmp10 = closure_11;
              obj1.code = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.code;
              str3 = "Cannot clear \"";
              str4 = "\" field because it is not part of the current Hosted Fields options.";
              obj1.message = `Cannot clear "${global}" field because it is not part of the current Hosted Fields options.`;
              prototype2 = closure_7.prototype;
              tmp11 = new.target;
              tmp12 = new.target;
              tmp13 = obj1;
              tmp7 = new closure_7(obj1);
            }
          } else {
            tmp = closure_7;
            obj = {};
            tmp2 = closure_11;
            obj.type = closure_11.HOSTED_FIELDS_FIELD_INVALID.type;
            tmp3 = closure_11;
            obj.code = closure_11.HOSTED_FIELDS_FIELD_INVALID.code;
            str = "\"";
            str2 = "\" is not a valid field. You must use a valid field option when clearing a field.";
            obj.message = `"${global}" is not a valid field. You must use a valid field option when clearing a field.`;
            prototype = closure_7.prototype;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = obj;
            tmp7 = new closure_7(obj);
          }
          _Promise = Promise;
          if (tmp7) {
            rejectResult = _Promise.reject(tmp7);
          } else {
            rejectResult = _Promise.resolve();
          }
          return rejectResult;
        }
        focus(arg0) {
          self = this;
          tmp = this._fields[global];
          assign = tmp;
          if (allowedFields.hasOwnProperty(global)) {
            _fields = self._fields;
            if (_fields.hasOwnProperty(global)) {
              frameElement = tmp.frameElement;
              focusResult = frameElement.focus();
              _bus = self._bus;
              tmp16 = events;
              obj = {};
              obj.field = global;
              emitResult = _bus.emit(events.TRIGGER_INPUT_FOCUS, obj);
              tmp18 = closure_15;
              if (closure_15.isIos()) {
                tmp19 = globalThis;
                _setTimeout = setTimeout;
                num = 5;
                timerId = setTimeout(() => {
                  const containerElement = tmp.containerElement;
                  const size = containerElement.getBoundingClientRect();
                  const rounded = Math.floor(size.height / 2);
                  const rounded1 = Math.floor(size.width / 2);
                  let diff = window.innerHeight - rounded;
                  if (!diff) {
                    const _document = document;
                    diff = document.documentElement.clientHeight - rounded;
                  }
                  let tmp4 = size.top < diff && size.right > rounded1 && size.bottom > rounded;
                  if (tmp4) {
                    const _window = window;
                    let diff1 = window.innerWidth - rounded1;
                    if (!diff1) {
                      const _document2 = document;
                      diff1 = document.documentElement.clientWidth - rounded1;
                    }
                    tmp4 = size.left < diff1;
                  }
                  if (!tmp4) {
                    const containerElement2 = tmp.containerElement;
                    containerElement2.scrollIntoView();
                  }
                }, 5);
              }
            } else {
              tmp9 = closure_7;
              obj1 = {};
              tmp10 = closure_11;
              obj1.type = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.type;
              tmp11 = closure_11;
              obj1.code = closure_11.HOSTED_FIELDS_FIELD_NOT_PRESENT.code;
              str3 = "Cannot focus \"";
              str4 = "\" field because it is not part of the current Hosted Fields options.";
              obj1.message = `Cannot focus "${global}" field because it is not part of the current Hosted Fields options.`;
              prototype2 = closure_7.prototype;
              tmp12 = new.target;
              tmp13 = new.target;
              tmp14 = obj1;
              tmp8 = new closure_7(obj1);
            }
          } else {
            tmp2 = closure_7;
            obj = {};
            tmp3 = closure_11;
            obj.type = closure_11.HOSTED_FIELDS_FIELD_INVALID.type;
            tmp4 = closure_11;
            obj.code = closure_11.HOSTED_FIELDS_FIELD_INVALID.code;
            str = "\"";
            str2 = "\" is not a valid field. You must use a valid field option when focusing a field.";
            obj.message = `"${global}" is not a valid field. You must use a valid field option when focusing a field.`;
            prototype = closure_7.prototype;
            tmp5 = new.target;
            tmp6 = new.target;
            tmp7 = obj;
            tmp8 = new closure_7(obj);
          }
          _Promise = Promise;
          if (tmp8) {
            rejectResult = _Promise.reject(tmp8);
          } else {
            rejectResult = _Promise.resolve();
          }
          return rejectResult;
        }
        getState() {
          return this._state;
        }
      }
      global("../../lib/assign").assign;
      let closure_1 = global("../../lib/create-assets-url");
      let closure_2 = global("../../lib/is-verified-domain");
      let closure_3 = global("../../lib/destructor");
      let closure_4 = global("@braintree/iframer");
      let closure_5 = global("framebus");
      let closure_6 = global("../../lib/create-deferred-client");
      let closure_7 = global("../../lib/braintree-error");
      let closure_8 = global("./compose-url");
      let closure_9 = global("./get-styles-from-class");
      const globalResult = global("../shared/constants");
      let closure_11 = global("../shared/errors");
      const INTEGRATION_TIMEOUT_MS = global("../../lib/constants").INTEGRATION_TIMEOUT_MS;
      let closure_13 = global("@braintree/uuid");
      let closure_14 = global("../shared/find-parent-tags");
      let closure_15 = global("../shared/browser-detection");
      const events = globalResult.events;
      const globalResult1 = global("@braintree/event-emitter");
      let closure_18 = global("./inject-frame");
      let closure_19 = global("../../lib/analytics");
      const allowedFields = globalResult.allowedFields;
      let closure_21 = global("../../lib/methods");
      let closure_22 = global("../../lib/shadow");
      let closure_23 = global("../../lib/find-root-node");
      let closure_24 = global("../../lib/convert-methods-to-error");
      let closure_25 = global("../../lib/errors");
      let closure_26 = global("../shared/get-card-types");
      let closure_27 = global("./attribute-validation-error");
      let closure_28 = global("./focus-change");
      const destroy = global("../shared/focus-intercept").destroy;
      const child = globalResult1.createChild(HostedFields);
      module.exports = global("@braintree/wrap-promise").wrapPrototype(HostedFields);
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../shared/focus-intercept");
      const navigationDirections = global("../shared/constants").navigationDirections;
      module.exports = function injectFrame(arg0, getAttribute, appendChild) {
        const attr = getAttribute.getAttribute("type");
        const element = <div />;
        const documentFragment = document.createDocumentFragment();
        element.style.clear = "both";
        const generateResult = closure_0.generate(arg0, attr, navigationDirections.BACK, arg3);
        documentFragment.appendChild(generateResult);
        documentFragment.appendChild(getAttribute);
        documentFragment.appendChild(closure_0.generate(arg0, attr, navigationDirections.FORWARD, arg3));
        documentFragment.appendChild(element);
        appendChild.appendChild(documentFragment);
        const items = [getAttribute, element];
        return items;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./external/hosted-fields");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("./shared/errors");
      const globalResult = global("restricted-input/supports-input-formatting");
      let closure_3 = global("../lib/braintree-error");
      const globalResult1 = global("@braintree/wrap-promise");
      module.exports = {
        supportsInputFormatting: globalResult,
        create: global("@braintree/wrap-promise")(function create(authorization) {
          let closure_0 = authorization;
          return closure_1.verify({ name: "Hosted Fields", authorization: authorization.authorization, client: authorization.client }).then(() => {
            const arg0 = new arg0(arg0);
            const tmp = new arg0(arg0);
            return new Promise((arg0, arg1) => {
              arg0.on("ready", () => { ... });
              arg0.on("timeout", () => { ... });
            });
          });
        }),
        VERSION: "3.112.1"
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("@braintree/browser-detection/is-android");
      const globalResult1 = global("@braintree/browser-detection/is-chrome-os");
      const globalResult2 = global("@braintree/browser-detection/is-ios");
      let closure_3 = global("@braintree/browser-detection/is-chrome");
      module.exports = {
        isAndroid: globalResult,
        isChromeOS: globalResult1,
        isChromeIos() {
          let tmp = callback();
          if (tmp) {
            tmp = globalResult2();
          }
          return tmp;
        },
        isFirefox: global("@braintree/browser-detection/is-firefox"),
        isIos: globalResult2,
        isIosWebview: global("@braintree/browser-detection/is-ios-webview"),
        hasSoftwareKeyboard() {
          let tmp = globalResult();
          if (!tmp) {
            tmp = globalResult1();
          }
          if (!tmp) {
            tmp = globalResult2();
          }
          return tmp;
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult1 = global("./errors");
      const obj = { "Null": "isArray", "Null": "key", externalEvents: { scrolling: 131072.97677803042, height: 58732941586179230000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, width: -23359743342250077000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, style: 216210102068770900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, title: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010385870445933191, position: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000807390794495646 }, defaultMaxLengths: { -9223372036854775808: true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true }, externalClasses: { 1261008781: true, 2005931140: true, 78286913: true }, navigationDirections: {}, defaultIFrameStyle: { "Null": null, "Null": "\u{1F44E}\u{1F3FE}", "Null": true, "Null": null }, tokenizationErrorCodes: { [81724]: globalResult1.HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE, [81736]: globalResult1.HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED }, allowedStyles: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], allowedFields: { cardholderName: {}, number: { "Null": -19018633055177936000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007293677432139991 }, cvv: { "Null": "trackNsfwSpaceWarningModalClicked", "Null": "VIDEO_EFFECTS" }, expirationDate: { "Null": -0.0000000000000000000000000008584778844267997, "Null": 21714766409155640000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 }, expirationMonth: { "Null": "CLIENT_SCRIPT_FAILED_TO_LOAD", "Null": "Braintree client script could not be loaded." }, expirationYear: { "Null": 1979712610, "Null": 0 }, postalCode: {} }, allowedAttributes: {}, allowedBillingAddressFields: [1095192037, 120436, 1371432034, -700380263, 1358955237, 1700122310, 620198609, -1449693283, 409223586, 1682112514, 872415768, 285213343], allowedShippingAddressFields: [1095192037, 120436, 1371432034, -700380263, 1358955237, 1700122310, 620198609, -1449693283, 409223586, 1682112514, 872415768, 285213343], autocompleteMappings: {}, events: global("../../lib/enumerate")([], "hosted-fields:") };
      module.exports = obj;
    },
    { width: false, height: false }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      let obj = { placeholder: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000406163389, live-guild-stage: 187907176775098770000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, guild-event: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012416371051953502, type: globalResult.types.UNKNOWN };
      obj = { type: globalResult.types.MERCHANT, code: "HOSTED_FIELDS_INVALID_FIELD_KEY" };
      obj = { type: globalResult.types.MERCHANT };
      const obj4 = { placeholder: null, live-guild-stage: null, guild-event: null, type: globalResult.types.NETWORK };
      const obj5 = { placeholder: "braintree-dispatch-frame", live-guild-stage: "resizable,scrollbars", guild-event: 450, type: globalResult.types.CUSTOMER };
      const obj6 = { placeholder: 450, live-guild-stage: 535, guild-event: 100, type: globalResult.types.CUSTOMER };
      const obj7 = { placeholder: "isArray", live-guild-stage: "isArray", guild-event: "isArray", type: globalResult.types.CUSTOMER };
      const obj8 = { placeholder: 1724662103, live-guild-stage: 1359020033, guild-event: -750707512, type: globalResult.types.CUSTOMER };
      const obj9 = { placeholder: true, live-guild-stage: true, guild-event: true, type: globalResult.types.CUSTOMER };
      module.exports = { HOSTED_FIELDS_TIMEOUT: obj, HOSTED_FIELDS_INVALID_FIELD_KEY: obj, HOSTED_FIELDS_INVALID_FIELD_SELECTOR: obj, HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME: { type: globalResult.types.MERCHANT }, HOSTED_FIELDS_FIELD_INVALID: { type: globalResult.types.MERCHANT, code: "HOSTED_FIELDS_FIELD_INVALID" }, HOSTED_FIELDS_FIELD_NOT_PRESENT: { type: globalResult.types.MERCHANT, code: "HOSTED_FIELDS_FIELD_NOT_PRESENT" }, HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR: obj4, HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE: obj5, HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED: obj6, HOSTED_FIELDS_FAILED_TOKENIZATION: obj7, HOSTED_FIELDS_FIELDS_EMPTY: obj8, HOSTED_FIELDS_FIELDS_INVALID: obj9, HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED: { type: globalResult.types.MERCHANT, code: "HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED" }, HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED: { type: globalResult.types.MERCHANT, code: "HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED" }, HOSTED_FIELDS_FIELD_PROPERTY_INVALID: { type: globalResult.types.MERCHANT, code: "HOSTED_FIELDS_FIELD_PROPERTY_INVALID" } };
    },
    { ../../lib/braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = function findParentTags(parentNode) {
        parentNode = parentNode.parentNode;
        const items = [];
        if (null != parentNode) {
          do {
            let tmp = null != parentNode.tagName;
            if (tmp) {
              let str = parentNode.tagName;
              tmp = str.toLowerCase() === arg1;
            }
            if (tmp) {
              let arr = items.push(parentNode);
            }
            parentNode = parentNode.parentNode;
          } while (null != parentNode);
        }
        return items;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./browser-detection");
      const globalResult = global("./constants");
      let closure_1 = Object.keys(globalResult.allowedFields);
      const navigationDirections = globalResult.navigationDirections;
      const obj = {
        generate(arg0, arg1, arg2, arg3) {
          let closure_0 = arg3;
          const element = <input />;
          let closure_1 = element;
          if (!closure_0.hasSoftwareKeyboard()) {
            if (!closure_0.isFirefox()) {
              const _document = document;
              let documentFragment = document.createDocumentFragment();
            }
            return documentFragment;
          }
          const attr = element.setAttribute("aria-hidden", "true");
          const attr1 = element.setAttribute("autocomplete", "off");
          const attr2 = element.setAttribute("data-braintree-direction", arg2);
          const attr3 = element.setAttribute("data-braintree-type", arg1);
          const attr4 = element.setAttribute("id", `bt-${arg1}-${arg2}-${arg0}`);
          const str = JSON.stringify({});
          const attr5 = element.setAttribute("style", JSON.stringify({}).replace(/[{}"]/g, "").replace(/,/g, ";"));
          const classList = element.classList;
          classList.add("focus-intercept");
          const listener = element.addEventListener("focus", (arg0) => {
            arg3(arg0);
            if (!arg3.hasSoftwareKeyboard()) {
              element.blur();
            }
          });
          documentFragment = element;
        },
        destroy(arg0) {
          const _document = document;
          if (arg0) {
            const items = [_document.getElementById(arg0)];
            let callResult = items;
          } else {
            const slice = [].slice;
            callResult = slice.call(_document.querySelectorAll("[data-braintree-direction]"));
          }
          const item = callResult.forEach((nodeType) => {
            let matchFocusElementResult = nodeType;
            if (nodeType) {
              matchFocusElementResult = 1 === nodeType.nodeType;
            }
            if (matchFocusElementResult) {
              matchFocusElementResult = closure_3.matchFocusElement(nodeType.getAttribute("id"));
            }
            if (matchFocusElementResult) {
              const parentNode = nodeType.parentNode;
              parentNode.removeChild(nodeType);
            }
          });
        },
        matchFocusElement(attribute) {
          let tmp2 = !tmp;
          if (!!attribute) {
            const parts = attribute.split("-");
            let BooleanResult = !tmp3;
            if (parts.length >= 4) {
              let tmp5 = "bt" === parts[0];
              let tmp9 = parts[2] === navigationDirections.BACK;
              if (!tmp9) {
                tmp9 = parts[2] === navigationDirections.FORWARD;
              }
              if (tmp5) {
                tmp5 = tmp7;
              }
              if (tmp5) {
                tmp5 = tmp9;
              }
              BooleanResult = Boolean(tmp5);
              const tmp7 = closure_1.indexOf(parts[1]) > -1;
            }
            tmp2 = BooleanResult;
          }
          return tmp2;
        }
      };
      module.exports = obj;
    },
    { "Bool(false)": true, "Bool(false)": true }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("credit-card-type");
      module.exports = (arg0) => {
        const arr = callback(arg0);
        const item = arr.forEach((type) => {
          if ("mastercard" === type.type) {
            type.type = "master-card";
          }
        });
        return arr;
      };
    },
    { credit-card-type: 42 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("./american-express");
      const globalResult1 = global("./apple-pay");
      const globalResult2 = global("./client");
      const globalResult3 = global("./fastlane");
      const globalResult4 = global("./data-collector");
      const globalResult5 = global("./hosted-fields");
      const globalResult6 = global("./local-payment");
      const globalResult7 = global("./masterpass");
      const globalResult8 = global("./payment-request");
      const globalResult9 = global("./paypal");
      const globalResult10 = global("./paypal-checkout");
      const globalResult11 = global("./google-payment");
      const globalResult12 = global("./sepa");
      const globalResult13 = global("./three-d-secure");
      const globalResult14 = global("./unionpay");
      const globalResult15 = global("./us-bank-account");
      const globalResult16 = global("./vault-manager");
      const globalResult17 = global("./venmo");
      const globalResult18 = global("./visa-checkout");
      module.exports = { fastlane: globalResult3, americanExpress: globalResult, applePay: globalResult1, client: globalResult2, dataCollector: globalResult4, hostedFields: globalResult5, localPayment: globalResult6, masterpass: globalResult7, googlePayment: globalResult11, paymentRequest: globalResult8, paypal: globalResult9, paypalCheckout: globalResult10, threeDSecure: globalResult13, unionpay: globalResult14, usBankAccount: globalResult15, vaultManager: globalResult16, venmo: globalResult17, visaCheckout: global("./visa-checkout"), sepa: globalResult12, preferredPaymentMethods: global("./preferred-payment-methods"), VERSION: "3.112.1" };
    },
    { "Null": true, "Null": true, "Null": true, "Null": true, "Null": true, ./external/local-payment: true, ./shared/errors: true, @braintree/wrap-promise: true, lastShownAtMs: true, numTimesShown: true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./create-authorization-data");
      let closure_1 = global("./json-clone");
      let closure_2 = global("./constants");
      module.exports = {
        addMetadata(_configuration, data) {
          if (data) {
            let obj = callback2(data);
          } else {
            obj = {};
          }
          const attrs = callback(_configuration.authorization).attrs;
          const tmp2 = callback2(_configuration.analyticsMetadata);
          obj.braintreeLibraryVersion = constants.BRAINTREE_LIBRARY_VERSION;
          for (const key10017 in obj._meta) {
            let tmp3 = key10017;
            let _meta = obj._meta;
            if (!_meta.hasOwnProperty(key10017)) {
              continue;
            } else {
              tmp2[key10017] = obj._meta[key10017];
              // continue
            }
            continue;
          }
          obj._meta = tmp2;
          if (attrs.tokenizationKey) {
            obj.tokenizationKey = attrs.tokenizationKey;
          } else {
            obj.authorizationFingerprint = attrs.authorizationFingerprint;
          }
          return obj;
        },
        addEventMetadata(getConfiguration, arg1) {
          const configuration = getConfiguration.getConfiguration();
          const attrs = callback(configuration.authorization).attrs;
          const obj = { api_integration_type: configuration.analyticsMetadata.integrationType, app_id: window.location.host, c_sdk_ver: constants.VERSION, component: "braintreeclientsdk" };
          let str = "sandbox";
          if ("production" === configuration.gatewayConfiguration.environment) {
            str = "production";
          }
          obj.merchant_sdk_env = str;
          obj.merchant_id = configuration.gatewayConfiguration.merchantId;
          obj.event_source = "web";
          obj.platform = constants.PLATFORM;
          obj.platform_version = window.navigator.userAgent;
          obj.session_id = configuration.analyticsMetadata.sessionId;
          obj.client_session_id = configuration.analyticsMetadata.sessionId;
          obj.tenant_name = "braintree";
          if (attrs.tokenizationKey) {
            obj.tokenization_key = attrs.tokenizationKey;
          } else {
            obj.auth_fingerprint = attrs.authorizationFingerprint;
          }
          return obj;
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./constants");
      let closure_1 = global("./add-metadata");
      module.exports = {
        sendEvent: function sendPaypalEvent(arg0, arg1, arg2) {
          let closure_0 = arg1;
          let closure_1 = arg2;
          let closure_2 = Date.now();
          const resolved = Promise.resolve(arg0);
          return resolved.then((getConfiguration, self) => {
            const sum = self.ANALYTICS_PREFIX + self;
            let obj = { events: [], tracking: [] };
            const addEventMetadataResult = arg2.addEventMetadata(getConfiguration, obj);
            addEventMetadataResult.event_name = sum;
            addEventMetadataResult.t = closure_2;
            obj = { level: "info", event: sum };
            obj = {};
            let str = "sandbox";
            if ("production" === getConfiguration.getConfiguration().gatewayConfiguration.environment) {
              str = "production";
            }
            obj.env = str;
            obj.timestamp = closure_2;
            obj.payload = obj;
            const items = [obj];
            obj.events = items;
            const items1 = [addEventMetadataResult];
            obj.tracking = items1;
            return getConfiguration._request({ url: self.ANALYTICS_URL, method: "post", data: obj, timeout: self.ANALYTICS_REQUEST_TIMEOUT_MS }, arg2);
          }).catch((arg0) => {
            if (arg2) {
              arg2(arg0);
            }
          });
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("@braintree/asset-loader/load-script");
      module.exports = { loadScript: global("@braintree/asset-loader/load-script"), loadFastlane: global("@paypal/accelerated-checkout-loader").loadAxo };
    },
    { ../lib/basic-component-verification: null, ../lib/create-assets-url: null }
  ];
  items = [
    (arg0, arg1, arg2) => {
      function assignPolyfill(arg0) {
        for (let num = 1; num < arguments.length; num = num + 1) {
          let obj = arguments[num];
          let tmp3 = obj;
          let tmp4 = tmp2;
          let keys = Object.keys();
          if (keys !== undefined) {
            let tmp2 = tmp4;
            let tmp6 = keys[tmp];
            while (tmp6 !== undefined) {
              let tmp7 = tmp6;
              tmp4 = tmp6;
              if (!obj.hasOwnProperty(tmp6)) {
                continue;
              } else {
                arg0[tmp6] = obj[tmp6];
                tmp4 = tmp6;
                // continue
              }
              continue;
            }
          }
        }
        return arg0;
      }
      let assign = assignPolyfill;
      if ("function" === typeof Object.assign) {
        const _Object = Object;
        assign = Object.assign;
      }
      const obj = { assign, _assign: assignPolyfill };
      module.exports = obj;
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./braintree-error");
      let closure_1 = global("./errors");
      module.exports = {
        verify: function basicComponentVerification(arg0) {
          let authorization;
          let client;
          let name;
          if (arg0) {
            ({ name, client, authorization } = arg0);
            if (!client) {
              if (!authorization) {
                let obj = { type: constants.INSTANTIATION_OPTION_REQUIRED.type, code: constants.INSTANTIATION_OPTION_REQUIRED.code, message: `options.client is required when instantiating ${name}.` };
                const prototype2 = ctor.prototype;
                const tmp15 = new ctor(obj);
                Promise.reject(tmp15);
              }
            }
            if (!authorization) {
              if (client.getVersion() !== "3.112.1") {
                obj = { type: constants.INCOMPATIBLE_VERSIONS.type, code: constants.INCOMPATIBLE_VERSIONS.code, message: `Client (version ${client.getVersion()}) and ${name} (version 3.112.1) components must be from the same SDK version.` };
                const prototype3 = ctor.prototype;
                const tmp27 = new ctor(obj);
                let rejectResult1 = Promise.reject(tmp27);
              }
            }
            rejectResult1 = Promise.resolve();
          } else {
            obj = { type: constants.INVALID_USE_OF_INTERNAL_FUNCTION.type, code: constants.INVALID_USE_OF_INTERNAL_FUNCTION.code, message: "Options must be passed to basicComponentVerification function." };
            const prototype = ctor.prototype;
            const tmp7 = new ctor(obj);
            return Promise.reject(tmp7);
          }
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      function call(arg0, arg1) {
        if (0 === arg0.length) {
          arg0();
          arg1(null);
        } else {
          arg0(arg1);
        }
      }
      let closure_0 = global("./once");
      module.exports = (arg0, arg1) => {
        const callback = length;
        function finish(arg0) {
          if (arg0) {
            tmp(arg0);
          } else {
            const diff = length - 1;
            if (0 === diff) {
              tmp(null);
            }
          }
        }
        const tmp = callback(arg1);
        const call = tmp;
        if (0 !== arg0.length) {
          for (let num = 0; num < length; num = num + 1) {
            let tmp4 = call;
            let tmp5 = call(arg0[num], finish);
          }
        } else {
          tmp(null);
        }
      };
    },
    { ./once: 176 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class BraintreeError {
        constructor(arg0) {
          self = this;
          types = BraintreeError.types;
          if (types.hasOwnProperty(global.type)) {
            if (global.code) {
              if (global.message) {
                str4 = "BraintreeError";
                self.name = "BraintreeError";
                ({ code: self.code, message: self.message, type: self.type, details: self.details } = global);
                return;
              } else {
                tmp11 = globalThis;
                _Error3 = Error;
                prototype3 = Error.prototype;
                tmp12 = new.target;
                str3 = "Error message required.";
                tmp13 = new.target;
                error = new Error("Error message required.");
                tmp15 = error;
                throw error;
              }
            } else {
              tmp6 = globalThis;
              _Error2 = Error;
              prototype2 = Error.prototype;
              tmp7 = new.target;
              str2 = "Error code required.";
              tmp8 = new.target;
              error1 = new Error("Error code required.");
              tmp10 = error1;
              throw error1;
            }
          } else {
            tmp = globalThis;
            _Error = Error;
            str = " is not a valid type.";
            prototype = Error.prototype;
            tmp2 = new.target;
            tmp3 = new.target;
            error2 = new Error(global.type + " is not a valid type.");
            tmp5 = error2;
            throw error2;
          }
        }
        static findRootError(arg0) {
          findRootErrorResult = global;
          if (global instanceof BraintreeError) {
            findRootErrorResult = global;
            if (global.details) {
              findRootErrorResult = global;
              if (global.details.originalError) {
                tmp2 = BraintreeError;
                findRootErrorResult = BraintreeError.findRootError(global.details.originalError);
              }
            }
          }
          return findRootErrorResult;
        }
      }
      BraintreeError.prototype = Object.create(Error.prototype);
      BraintreeError.prototype.constructor = BraintreeError;
      BraintreeError.types = global("./enumerate")(["toString", "r", "isArray", "WireType", "toString"]);
      module.exports = BraintreeError;
    },
    { ./enumerate: 153 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      function camelCaseToSnakeCase(arr) {
        const camelCaseToSnakeCase = arr;
        if (null === arr) {
          let reduced = null;
          reduced = null;
        } else {
          const _Array = Array;
          if (Array.isArray(arr)) {
            const items = [];
            reduced = items;
            const item = arr.forEach((arg0) => {
              reduced.push(arg0(arg0));
            });
            reduced = items;
          } else {
            reduced = arr;
            if ("object" === typeof arr) {
              const _Object = Object;
              const keys = Object.keys(arr);
              reduced = keys.reduce((arg0, str) => {
                str = str.replace(/([a-z\d])([A-Z])/g, "$1_$2");
                const formatted = str.replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1_$2").toLowerCase();
                if ("object" === typeof arg0[str]) {
                  arg0[formatted] = arg0(arg0[str]);
                } else {
                  arg0[formatted] = arg0[str];
                }
                return arg0;
              }, {});
            }
          }
        }
        return reduced;
      }
      module.exports = camelCaseToSnakeCase;
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { ASSETS_URLS: { zIndex: null, width: "LOCAL_PAYMENT_START_PAYMENT_FAILED" }, CLIENT_API_URLS: { zIndex: 1359020033, width: -398365612 }, GRAPHQL_URLS: { zIndex: 1359020033, width: 1480679288 } };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./braintree-error");
      let closure_1 = global("./errors");
      module.exports = (arg0, arr) => {
        let closure_0 = arg0;
        const item = arr.forEach((arg0) => {
          arg0[arg0] = () => {
            throw new arg0({ type: constants.METHOD_CALLED_AFTER_TEARDOWN.type, code: constants.METHOD_CALLED_AFTER_TEARDOWN.code, message: `${closure_0} cannot be called after teardown.` });
          };
        });
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./braintree-error");
      module.exports = function convertToBraintreeError(originalError) {
        let tmp = originalError;
        if (!(originalError instanceof ctor)) {
          let obj = {};
          ({ type: obj.type, code: obj.code, message: obj.message } = arg1);
          obj = { originalError };
          obj.details = obj;
          const prototype = ctor.prototype;
          tmp = new ctor(obj);
        }
        return tmp;
      };
    },
    { ./braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      global("./constants").ASSETS_URLS;
      module.exports = {
        create: function createAssetsUrl(arg0) {
          return ASSETS_URLS.production;
        }
      };
    },
    { ./constants: 145 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      global("../lib/vendor/polyfill").atob;
      const CLIENT_API_URLS = global("../lib/constants").CLIENT_API_URLS;
      module.exports = function createAuthorizationData(placeholder) {
        let obj = { attrs: {}, configUrl: "" };
        if (obj2.test(placeholder)) {
          const parts = placeholder.split("_");
          obj = {};
          const substr = parts.slice(2);
          obj.merchantId = substr.join("_");
          obj.environment = parts[0];
          obj.environment = obj.environment;
          obj.attrs.tokenizationKey = placeholder;
          obj.configUrl = `${closure_1[obj3.environment]}/merchants/${obj3.merchantId}/client_api/v1/configuration`;
        } else {
          const _JSON = JSON;
          const parsed = JSON.parse(atob(placeholder));
          ({ environment: obj.environment, authorizationFingerprint: obj.attrs.authorizationFingerprint, configUrl: obj.configUrl, graphQL: obj.graphQL } = parsed);
        }
        return obj;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./braintree-error");
      let closure_1 = global("./assets");
      let closure_2 = global("./errors");
      module.exports = {
        create: function createDeferredClient(client) {
          let closure_0 = client;
          let resolved = Promise.resolve();
          if (client.client) {
            let resolved1 = Promise.resolve(client.client);
          } else {
            const _window = window;
            client = window.braintree;
            if (client) {
              const _window2 = window;
              client = window.braintree.client;
            }
            if (!client) {
              const obj = { src: `${client.assetsUrl}/web/3.112.1/js/client.min.js` };
              const script = closure_1.loadScript(obj);
              resolved = script.catch((originalError) => {
                let obj = { type: constants.CLIENT_SCRIPT_FAILED_TO_LOAD.type, code: constants.CLIENT_SCRIPT_FAILED_TO_LOAD.code, message: constants.CLIENT_SCRIPT_FAILED_TO_LOAD.message, details: obj };
                obj = { originalError };
                return Promise.reject(new originalError(obj));
              });
            }
            resolved1 = resolved.then(() => {
              if (window.braintree.client.VERSION !== "3.112.1") {
                let obj = { type: constants.INCOMPATIBLE_VERSIONS.type, code: constants.INCOMPATIBLE_VERSIONS.code };
                const _window2 = window;
                obj.message = `Client (version ${window.braintree.client.VERSION}) and ${closure_0.name} (version 3.112.1) components must be from the same SDK version.`;
                const prototype = arg0.prototype;
                const tmp9 = new arg0(obj);
                let rejectResult = Promise.reject(tmp9);
              } else {
                const _window = window;
                obj = {};
                ({ authorization: obj.authorization, debug: obj.debug } = arg0);
                rejectResult = client.create(obj);
              }
              return rejectResult;
            });
          }
          return resolved1;
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = (arg0) => () => {
        let closure_0 = arguments;
        const timerId = setTimeout(() => {
          callback.apply(null, callback);
        }, 1);
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class Destructor {
        constructor() {
          this._teardownRegistry = [];
          this._isTearingDown = false;
          return;
        }
        registerFunctionForTeardown(arg0) {
          if ("function" === typeof global) {
            self = this;
            _teardownRegistry = this._teardownRegistry;
            arr = _teardownRegistry.push(global);
          }
          return;
        }
        teardown(arg0) {
          self = this;
          closure_0 = global;
          if (this._isTearingDown) {
            tmp3 = globalThis;
            _Error = Error;
            prototype = Error.prototype;
            tmp4 = new.target;
            str = "Destructor is already tearing down";
            tmp5 = new.target;
            error = new Error("Destructor is already tearing down");
            tmp7 = error;
            tmp8 = global(error);
          } else {
            flag = true;
            self._isTearingDown = true;
            tmp = closure_0;
            fn = function(arg0) {
              this._teardownRegistry = [];
              this._isTearingDown = false;
              if ("function" === typeof arg0) {
                arg0(arg0);
              }
            };
            tmp2 = closure_0(self._teardownRegistry, fn.bind(self));
          }
          return;
        }
      }
      let closure_0 = global("./batch-execute-functions");
      module.exports = Destructor;
    },
    { ./batch-execute-functions: 142 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = function enumerate(arr) {
        let str = arg1;
        str = "";
        if (null != arg1) {
          str = arg1;
        }
        return arr.reduce((arg0, arg1) => {
          arg0[arg1] = str + arg1;
          return arg0;
        }, {});
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("./braintree-error");
      let obj = { type: globalResult.types.INTERNAL, code: "INVALID_USE_OF_INTERNAL_FUNCTION" };
      obj = { type: globalResult.types.MERCHANT, code: "INSTANTIATION_OPTION_REQUIRED" };
      obj = { type: globalResult.types.MERCHANT, code: "INCOMPATIBLE_VERSIONS" };
      const obj1 = { placeholder: "Array", live-guild-stage: null, guild-event: "LOCAL_PAYMENT_INVALID_PAYMENT_OPTION", type: globalResult.types.NETWORK };
      module.exports = { INVALID_USE_OF_INTERNAL_FUNCTION: obj, INSTANTIATION_OPTION_REQUIRED: obj, INCOMPATIBLE_VERSIONS: obj, CLIENT_SCRIPT_FAILED_TO_LOAD: obj1, METHOD_CALLED_AFTER_TEARDOWN: { type: globalResult.types.MERCHANT, code: "METHOD_CALLED_AFTER_TEARDOWN" } };
    },
    { ./braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = function findRootNode(parentNode) {
        let parentNode2;
        let tmp = parentNode;
        let tmp2 = parentNode;
        if (parentNode.parentNode) {
          do {
            parentNode = tmp.parentNode;
            tmp = parentNode;
            tmp2 = parentNode;
            parentNode2 = parentNode.parentNode;
          } while (parentNode2);
        }
        return tmp2;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = (arg0, arg1, arg2) => {
        let num = 0;
        if (0 < arg0.length) {
          while (true) {
            let obj = arg0[num];
            let tmp = num;
            if (obj.hasOwnProperty(arg1)) {
              if (arg0[num][arg1] === arg2) {
                break;
              }
            }
            num = num + 1;
          }
          return arg0[num];
        }
        return null;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      function noop() {

      }
      class FrameService {
        constructor(arg0) {
          self = this;
          tmp = function _validateFrameConfiguration(name) {
            if (name) {
              const item = closure_13.forEach((arg0) => {
                if (!arg0.hasOwnProperty(arg0)) {
                  const _Error = Error;
                  const error = new Error("A valid frame " + arg0 + " must be provided");
                  throw error;
                }
              });
              if (!obj.test(name.name)) {
                const _Error2 = Error;
                const error = new Error("A valid frame name must be provided");
                throw error;
              }
              const obj = /^[\w_]+$/;
            } else {
              const _Error = Error;
              const error1 = new Error("Valid configuration is required");
              throw error1;
            }
          }(global);
          str = closure_7();
          this._serviceId = str.replace(/-/g, "");
          obj = { name: `${global.name}_${this._serviceId}`, dispatchFrameUrl: global.dispatchFrameUrl, openFrameUrl: global.openFrameUrl, height: global.height, width: global.width, top: global.top, left: global.left };
          this._options = obj;
          self.state = global.state || {};
          obj = { channel: self._serviceId };
          tmp2 = new closure_3(obj);
          self._bus = tmp2;
          _setBusEventsResult = self._setBusEvents();
          return;
        }
        initialize(arg0) {
          closure_0 = global;
          fn = function() {
            arg0();
            const _bus = this._bus;
            _bus.off(constants.DISPATCH_FRAME_READY, bindResult);
          };
          bindResult = fn.bind(this);
          closure_1 = bindResult;
          _bus = this._bus;
          onResult = _bus.on(closure_4.DISPATCH_FRAME_READY, bindResult);
          _writeDispatchFrameResult = this._writeDispatchFrame();
          return;
        }
        _writeDispatchFrame() {
          text = `${closure_6.DISPATCH_FRAME_NAME}_${this._serviceId}`;
          obj = { aria-hidden: true, name: text, title: text, src: this._options.dispatchFrameUrl, class: closure_6.DISPATCH_FRAME_CLASS, height: 0, width: 0, style: { position: 1359020035, shadowRadius: 208863798 } };
          this._dispatchFrame = closure_8(obj);
          body = document.body;
          appendChildResult = body.appendChild(this._dispatchFrame);
          return;
        }
        _setBusEvents() {
          _bus = this._bus;
          fn = function(err) {
            const self = this;
            if (this._onCompleteCallback) {
              self._onCompleteCallback.call(null, err.err, err.payload);
              const _onCompleteCallback = self._onCompleteCallback;
            }
            const _frame = self._frame;
            _frame.close();
            self._onCompleteCallback = null;
            if (arg1) {
              arg1();
            }
          };
          onResult = _bus.on(closure_4.DISPATCH_FRAME_REPORT, fn.bind(this));
          _bus2 = this._bus;
          fn2 = function(arg0) {
            arg0(this.state);
          };
          onResult1 = _bus2.on(closure_12, fn2.bind(this));
          return;
        }
        open(arg0, arg1) {
          obj = global;
          self = this;
          if (!global) {
            obj = {};
          }
          self._frame = self._getFrameForEnvironment(obj);
          _frame = self._frame;
          initializeResult = _frame.initialize(module);
          if (!(self._frame instanceof closure_1)) {
            tmp2 = assign;
            tmp3 = assign(self.state, obj.state);
            self._onCompleteCallback = module;
            _frame2 = self._frame;
            openResult = _frame2.open();
            if (self.isFrameClosed()) {
              _cleanupFrameResult = self._cleanupFrame();
              tmp7 = module;
              if (module) {
                tmp8 = closure_9;
                tmp9 = closure_5;
                prototype = closure_9.prototype;
                tmp10 = new.target;
                tmp11 = new.target;
                tmp12 = new closure_9(closure_5.FRAME_SERVICE_FRAME_OPEN_FAILED);
                tmp13 = tmp12;
                tmp14 = module(tmp12);
              }
              return;
            } else {
              _pollForPopupCloseResult = self._pollForPopupClose();
            }
          }
          return;
        }
        redirect(arg0) {
          self = this;
          tmp = this._frame && !self.isFrameClosed();
          if (tmp) {
            _frame = self._frame;
            tmp2 = global;
            redirectResult = _frame.redirect(global);
          }
          return;
        }
        close() {
          if (!this.isFrameClosed()) {
            _frame = this._frame;
            closeResult = _frame.close();
          }
          return;
        }
        focus() {
          if (!this.isFrameClosed()) {
            _frame = this._frame;
            focusResult = _frame.focus();
          }
          return;
        }
        createHandler(arg0) {
          obj = global;
          self = this;
          closure_0 = global;
          if (!global) {
            obj = {};
          }
          closure_0 = obj;
          obj = { close: fn.bind(self), focus: fn2.bind(self) };
          fn = function() {
            const self = this;
            if (obj.beforeClose) {
              obj.beforeClose();
            }
            self.close();
          };
          fn2 = function() {
            const self = this;
            if (obj.beforeFocus) {
              obj.beforeFocus();
            }
            self.focus();
          };
          return obj;
        }
        createNoopHandler() {
          obj = { close: noop, focus: noop };
          return obj;
        }
        teardown() {
          closeResult = this.close();
          parentNode = this._dispatchFrame.parentNode;
          removeChildResult = parentNode.removeChild(this._dispatchFrame);
          this._dispatchFrame = null;
          _cleanupFrameResult = this._cleanupFrame();
          return;
        }
        isFrameClosed() {
          isClosedResult = null == this._frame;
          if (!isClosedResult) {
            _frame = this._frame;
            isClosedResult = _frame.isClosed();
          }
          return isClosedResult;
        }
        _cleanupFrame() {
          this._frame = null;
          clearIntervalResult = clearInterval(this._popupInterval);
          this._popupInterval = null;
          return;
        }
        _pollForPopupClose() {
          fn = function() {
            const self = this;
            if (this.isFrameClosed()) {
              self._cleanupFrame();
              if (self._onCompleteCallback) {
                const prototype = ctor.prototype;
                const tmp6 = new ctor(constants.FRAME_SERVICE_FRAME_CLOSED);
                self._onCompleteCallback(tmp6);
              }
            }
          };
          this._popupInterval = setInterval(fn.bind(this), closure_6.POPUP_POLL_INTERVAL);
          return this._popupInterval;
        }
        _getFrameForEnvironment(arg0) {
          supportsPopupsResult = closure_10.supportsPopups();
          BooleanResult = Boolean(window.popupBridge);
          tmp3 = assign({}, this._options, global);
          if (BooleanResult) {
            tmp13 = closure_1;
            prototype3 = closure_1.prototype;
            tmp14 = new.target;
            tmp15 = new.target;
            tmp16 = tmp3;
            tmp8 = new closure_1(tmp3);
          } else if (supportsPopupsResult) {
            tmp9 = closure_0;
            prototype2 = closure_0.prototype;
            tmp10 = new.target;
            tmp11 = new.target;
            tmp12 = tmp3;
            tmp8 = new closure_0(tmp3);
          } else {
            tmp4 = closure_2;
            prototype = closure_2.prototype;
            tmp5 = new.target;
            tmp6 = new.target;
            tmp7 = tmp3;
            tmp8 = new closure_2(tmp3);
          }
          return tmp8;
        }
      }
      let closure_0 = global("./strategies/popup");
      let closure_1 = global("./strategies/popup-bridge");
      let closure_2 = global("./strategies/modal");
      let closure_3 = global("framebus");
      let closure_4 = global("../shared/events");
      let closure_5 = global("../shared/errors");
      let closure_6 = global("../shared/constants");
      let closure_7 = global("@braintree/uuid");
      let closure_8 = global("@braintree/iframer");
      let closure_9 = global("../../braintree-error");
      let closure_10 = global("../shared/browser-detection");
      const assign = global("./../../assign").assign;
      let closure_12 = global("../../constants").BUS_CONFIGURATION_REQUEST_EVENT;
      let closure_13 = [true, true, true];
      module.exports = FrameService;
    },
    { "Null": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008787286022329628, "Null": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023763657237975366, "Null": -0.0000000000000000000000016543621495524287, "Null": -0.00003051759961181233, "Null": 1277337988440385000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002970794108033, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003098113855516, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000371349263502, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004116671835367, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000679038653257, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000848798316564, sgn-BE-NL: -26815615859885490000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, embedded_activity_config: -36537540933273410000000000000000000000000000000 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./frame-service");
      module.exports = {
        create: function createFrameService(arg0, arg1) {
          let closure_0 = arg1;
          const obj = new closure_0(arg0);
          obj.initialize(() => {
            arg1(obj);
          });
        }
      };
    },
    { ./frame-service: 157 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      function noop() {

      }
      class Modal {
        constructor(arg0) {
          obj = global;
          self = this;
          this._closed = null;
          this._frame = null;
          if (!global) {
            obj = {};
          }
          self._options = obj;
          body = self._options.container;
          if (!body) {
            tmp = globalThis;
            _document = document;
            body = document.body;
          }
          self._container = body;
          return;
        }
        open() {
          self = this;
          obj = { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005003167947119002, "Null": -0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003750912039366003, "Null": 823114898545675900000000000000000000000000000000000000000000000, "Null": 187809123758219500000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.00000000000012248202846988487, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009532406124, "Null": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008487983165 };
          obj.src = this._options.openFrameUrl;
          obj.name = this._options.name;
          obj.style = assign({}, closure_3);
          if (closure_2.isIos()) {
            tmp3 = closure_2;
            if (closure_2.isIosWKWebview()) {
              _lockScrollingResult = self._lockScrolling();
              obj.style = {};
            }
            tmp5 = globalThis;
            _document = document;
            str = "div";
            self._el = document.createElement("div");
            tmp6 = assign;
            tmp7 = closure_3;
            tmp8 = assign(self._el.style, closure_3, { y: "Text", isArray: "_oneway", y: "accessibilityRole", IS_GUEST: "Array" });
            tmp9 = closure_0;
            self._frame = closure_0(obj);
            _el = self._el;
            appendChildResult = _el.appendChild(self._frame);
          } else {
            tmp = closure_0;
            tmp2 = closure_0(obj);
            self._frame = tmp2;
            self._el = tmp2;
          }
          self._closed = false;
          _container = self._container;
          appendChildResult1 = _container.appendChild(self._el);
          return;
        }
        close() {
          self = this;
          _container = this._container;
          removeChildResult = _container.removeChild(this._el);
          this._frame = null;
          this._closed = true;
          if (closure_2.isIosWKWebview()) {
            _unlockScrollingResult = self._unlockScrolling();
          }
          return;
        }
        isClosed() {
          return Boolean(this._closed);
        }
        redirect(arg0) {
          this._frame.src = global;
          return;
        }
        _unlockScrolling() {
          document.body.style.overflow = this._savedBodyProperties.overflowStyle;
          document.body.style.position = this._savedBodyProperties.positionStyle;
          scrollToResult = window.scrollTo(this._savedBodyProperties.left, this._savedBodyProperties.top);
          delete r0._savedBodyProperties;
          return;
        }
        _lockScrolling() {
          documentElement = document.documentElement;
          obj = { left: tmp - tmp2, top: tmp3 - tmp4, overflowStyle: document.body.style.overflow, positionStyle: document.body.style.position };
          tmp = window.pageXOffset || documentElement.scrollLeft;
          tmp2 = documentElement.clientLeft || 0;
          tmp3 = window.pageYOffset || documentElement.scrollTop;
          tmp4 = documentElement.clientTop || 0;
          this._savedBodyProperties = obj;
          document.body.style.overflow = "hidden";
          document.body.style.position = "fixed";
          scrollToResult = window.scrollTo(0, 0);
          return;
        }
      }
      let closure_0 = global("@braintree/iframer");
      const assign = global("../../../assign").assign;
      let closure_2 = global("../../shared/browser-detection");
      let closure_3 = { <string:702697358>: -900661247, <string:1636690513>: -1831845481, <string:2656129297>: -717160447, <string:1422352681>: 1912602917, "Null": 450, "Null": 660, "Null": "v6", "Null": null, "Null": "MASTERPASS_BROWSER_NOT_SUPPORTED", "Null": "Browser is not supported." };
      Modal.prototype.initialize = noop;
      Modal.prototype.focus = noop;
      module.exports = Modal;
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      function noop() {

      }
      class PopupBridge {
        constructor(arg0) {
          this._closed = null;
          this._options = global;
          return;
        }
        initialize(arg0) {
          closure_0 = global;
          closure_1 = this;
          window.popupBridge.onComplete = (arg0, arg1) => {
            self._closed = true;
            if (!arg0) {
              if (!tmp) {
                arg0(null, arg1);
              }
            }
            arg0(new arg0(self.FRAME_SERVICE_FRAME_CLOSED));
          };
          return;
        }
        open(arg0) {
          obj = global;
          self = this;
          if (!global) {
            obj = {};
          }
          tmp = obj.openFrameUrl || self._options.openFrameUrl;
          self._closed = false;
          popupBridge = window.popupBridge;
          openResult = popupBridge.open(tmp);
          return;
        }
        isClosed() {
          return Boolean(this._closed);
        }
        redirect(arg0) {
          obj = { openFrameUrl: global };
          openResult = this.open(obj);
          return;
        }
      }
      let closure_0 = global("../../../braintree-error");
      let closure_1 = global("../../shared/errors");
      PopupBridge.prototype.focus = noop;
      PopupBridge.prototype.close = noop;
      module.exports = PopupBridge;
    },
    { "Bool(false)": "guild_id", "Bool(false)": "guildId" }
  ];
  items = [
    (arg0, arg1, arg2) => {
      function calculatePosition(top, top2, DEFAULT_POPUP_HEIGHT) {
        let tmp = top2;
        if (undefined === top2) {
          tmp = closure_1[top](DEFAULT_POPUP_HEIGHT);
        }
        return tmp;
      }
      let closure_0 = global("../../../shared/constants");
      let closure_1 = global("./position");
      module.exports = function composePopupOptions(height) {
        let DEFAULT_POPUP_HEIGHT = height.height;
        if (!DEFAULT_POPUP_HEIGHT) {
          DEFAULT_POPUP_HEIGHT = constants.DEFAULT_POPUP_HEIGHT;
        }
        let DEFAULT_POPUP_WIDTH = height.width;
        if (!DEFAULT_POPUP_WIDTH) {
          DEFAULT_POPUP_WIDTH = constants.DEFAULT_POPUP_WIDTH;
        }
        const items = [constants.POPUP_BASE_OPTIONS, `height=${DEFAULT_POPUP_HEIGHT}`, `width=${DEFAULT_POPUP_WIDTH}`, `top=${calculatePosition("top", height.top, DEFAULT_POPUP_HEIGHT)}`, `left=${closure_2("left", height.left, DEFAULT_POPUP_WIDTH)}`];
        return items.join(",");
      };
    },
    { 0: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080398176545984, 11783966218: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000104300337136497 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class Popup {
        constructor(arg0) {
          obj = global;
          this._frame = null;
          if (!global) {
            obj = {};
          }
          this._options = obj;
          return;
        }
        initialize() {
          return;
        }
        open() {
          this._frame = window.open(this._options.openFrameUrl, this._options.name, closure_0(this._options));
          return;
        }
        focus() {
          _frame = this._frame;
          focusResult = _frame.focus();
          return;
        }
        close() {
          if (!this._frame.closed) {
            _frame = this._frame;
            closeResult = _frame.close();
          }
          return;
        }
        isClosed() {
          BooleanResult = !this._frame;
          if (!BooleanResult) {
            tmp3 = globalThis;
            _Boolean = Boolean;
            BooleanResult = Boolean(tmp._frame.closed);
          }
          return BooleanResult;
        }
        redirect(arg0) {
          this._frame.location.href = global;
          return;
        }
      }
      let closure_0 = global("./compose-options");
      module.exports = Popup;
    },
    { ./compose-options: 161 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      function center(arg0, arg1, arg2) {
        return (arg0 - arg1) / 2 + arg2;
      }
      module.exports = {
        top(arg0) {
          let clientHeight = window.outerHeight;
          if (!clientHeight) {
            const _document = document;
            clientHeight = document.documentElement.clientHeight;
          }
          if (null == window.screenY) {
            const _window2 = window;
            let screenY = window.screenTop;
          } else {
            const _window = window;
            screenY = window.screenY;
          }
          return center(clientHeight, arg0, screenY);
        },
        left(arg0) {
          let clientWidth = window.outerWidth;
          if (!clientWidth) {
            const _document = document;
            clientWidth = document.documentElement.clientWidth;
          }
          if (null == window.screenX) {
            const _window2 = window;
            let screenX = window.screenLeft;
          } else {
            const _window = window;
            screenX = window.screenX;
          }
          return center(clientWidth, arg0, screenX);
        },
        center
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { isIos: global("@braintree/browser-detection/is-ios"), isIosWKWebview: global("@braintree/browser-detection/is-ios-wkwebview"), supportsPopups: global("@braintree/browser-detection/supports-popups") };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = {};
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../braintree-error");
      let obj = { placeholder: "MASTERPASS_POPUP_MISSING_REQUIRED_PARAMETERS", live-guild-stage: "Masterpass popup failed to return all required parameters needed to continue tokenization.", guild-event: null, type: globalResult.types.INTERNAL };
      obj = { placeholder: "MASTERPASS_POPUP_CLOSED", live-guild-stage: "Customer closed Masterpass popup before authorizing.", guild-event: null, type: globalResult.types.INTERNAL };
      module.exports = { FRAME_SERVICE_FRAME_CLOSED: obj, FRAME_SERVICE_FRAME_OPEN_FAILED: obj };
    },
    { ../../braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = global("../../enumerate")(["captureStackTrace", "%Function.prototype.apply%"], "frameService:");
    },
    { ../../enumerate: 153 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      function generateTokenizationParameters(analyticsMetadata, arg1) {
        analyticsMetadata = analyticsMetadata.analyticsMetadata;
        let obj = { braintree:merchantId: analyticsMetadata.gatewayConfiguration.merchantId, braintree:metadata: JSON.stringify(obj) };
        obj = { source: analyticsMetadata.source, integration: analyticsMetadata.integration, sessionId: analyticsMetadata.sessionId, version: "3.112.1", platform: analyticsMetadata.platform };
        return assign({}, obj, arg1);
      }
      global("./assign").assign;
      module.exports = (gatewayConfiguration, apiVersion, merchantId) => {
        const androidPay = gatewayConfiguration.gatewayConfiguration.androidPay;
        let str = "TEST";
        if ("production" === gatewayConfiguration.gatewayConfiguration.environment) {
          str = "PRODUCTION";
        }
        if (2 === apiVersion) {
          let obj = { getCellMetrics: "MASTERPASS_FLOW_FAILED", showChannel: "Could not initialize Masterpass flow.", environment: str };
          obj = { type: "CARD" };
          obj = { allowedAuthMethods: [274202625, -1135542271] };
          const supportedNetworks = androidPay.supportedNetworks;
          obj.allowedCardNetworks = supportedNetworks.map((str) => str.toUpperCase());
          obj.parameters = obj;
          const obj1 = { type: "PAYMENT_GATEWAY" };
          const obj2 = { braintree:authorizationFingerprint: androidPay.googleAuthorizationFingerprint };
          obj1.parameters = generateTokenizationParameters(gatewayConfiguration, obj2);
          obj.tokenizationSpecification = obj1;
          const items = [obj];
          obj.allowedPaymentMethods = items;
          if (merchantId) {
            const obj3 = { merchantId };
            obj.merchantInfo = obj3;
          }
          let tmp = obj;
          if (androidPay.paypalClientId) {
            const obj4 = { type: "PAYPAL" };
            const obj5 = {};
            const obj6 = {};
            const obj7 = {};
            const obj8 = { client_id: androidPay.paypalClientId };
            obj7.payee = obj8;
            obj7.recurring_payment = true;
            const items1 = [obj7];
            obj6.purchase_units = items1;
            obj5.purchase_context = obj6;
            obj4.parameters = obj5;
            const obj9 = { type: "PAYMENT_GATEWAY" };
            const obj10 = { braintree:paypalClientId: androidPay.paypalClientId };
            obj9.parameters = generateTokenizationParameters(gatewayConfiguration, obj10);
            obj4.tokenizationSpecification = obj9;
            const prop = obj.allowedPaymentMethods;
            prop.push(obj4);
            tmp = obj;
          }
        } else {
          const obj11 = { environment: str, allowedPaymentMethods: [true, true] };
          const obj12 = { tokenizationType: "PAYMENT_GATEWAY" };
          const obj13 = { braintree:authorizationFingerprint: androidPay.googleAuthorizationFingerprint };
          obj12.parameters = generateTokenizationParameters(gatewayConfiguration, obj13);
          obj11.paymentMethodTokenizationParameters = obj12;
          const obj14 = {};
          const supportedNetworks1 = androidPay.supportedNetworks;
          obj14.allowedCardNetworks = supportedNetworks1.map((str) => str.toUpperCase());
          obj11.cardRequirements = obj14;
          if ("TOKENIZATION_KEY" === gatewayConfiguration.authorizationType) {
            obj11.paymentMethodTokenizationParameters.parameters.braintree:clientKey = gatewayConfiguration.authorization;
          }
          if (merchantId) {
            obj11.merchantId = merchantId;
          }
          tmp = obj11;
          if (apiVersion) {
            obj11.apiVersion = apiVersion;
            tmp = obj11;
          }
        }
        return tmp;
      };
    },
    { ./assign: 140 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = function inIframe(arg0) {
        let _window = arg0;
        if (!arg0) {
          _window = window;
        }
        return _window.self !== _window.top;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      function convertDateStringToDate(str) {
        const parts = str.split("-");
        return new Date(parts[0], parts[1], parts[2]);
      }
      module.exports = function isDateStringBeforeOrOn(arg0, arg1) {
        return convertDateStringToDate(arg0) <= convertDateStringToDate(arg1);
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = (fastlane) => {
        if (fastlane) {
          fastlane = fastlane.hasOwnProperty("fastlane");
        }
        if (fastlane) {
          fastlane = fastlane.fastlane;
        }
        return fastlane;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = {
        isHTTPS(arg0) {
          let protocol = arg0;
          if (!arg0) {
            const _window = window;
            protocol = window.location.protocol;
          }
          return "https:" === protocol;
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_1 = {};
      module.exports = function isVerifiedDomain(str) {
        const formatted = str.toLowerCase();
        const tmp2 = !/^https:/.test(formatted);
        let hasOwnPropertyResult = !tmp2;
        if (!tmp2) {
          if (!element) {
            const _document = document;
            const element = <a />;
          }
          element.href = formatted;
          const parts = element.hostname.split(".");
          const substr = parts.slice(-2);
          hasOwnPropertyResult = closure_1.hasOwnProperty(substr.join("."));
          const str2 = element.hostname;
        }
        return hasOwnPropertyResult;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = (arg0) => JSON.parse(JSON.stringify(arg0));
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = (arg0) => {
        const keys = Object.keys(arg0);
        return keys.filter((arg0) => "function" === typeof arg0[arg0]);
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = function once(arg0) {
        let closure_1 = false;
        return () => {
          if (!closure_1) {
            closure_1 = true;
            arg0(...arguments);
          }
        };
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      function hasQueryParams(arg0) {
        let href = arg0;
        if (!arg0) {
          const _window = window;
          href = window.location.href;
        }
        return /\?/.test(href);
      }
      function stringify(arg0, arg1) {
        const items = [];
        const keys = Object.keys();
        if (keys !== undefined) {
          while (keys[tmp] !== undefined) {
            let tmp20 = tmp6;
            if (!arg0.hasOwnProperty(tmp6)) {
              continue;
            } else {
              let tmp7 = arg0[tmp6];
              let tmp8 = tmp6;
              if (!arg1) {
                if ("object" === typeof tmp7) {
                  let tmp16 = stringify;
                  let arr = items.push(stringify(tmp7, tmp20));
                  let tmp18 = tmp20;
                  let tmp19 = tmp7;
                  let tmp3 = tmp5;
                  // continue
                } else {
                  let _encodeURIComponent = encodeURIComponent;
                  let _encodeURIComponent2 = encodeURIComponent;
                  let text = `${encodeURIComponent(tmp20)}=`;
                  arr = items.push(`${encodeURIComponent(tmp20)}=` + encodeURIComponent(tmp7));
                  let tmp14 = tmp20;
                  let tmp15 = tmp7;
                  tmp3 = tmp5;
                  // continue
                }
                continue;
              } else {
                if (arg0) {
                  if ("object" === tmp2) {
                    if ("number" === typeof arg0.length) {
                      let _Object = Object;
                      let tmp10 = text1;
                      let tmp11 = arg0;
                    }
                    let text1 = `${arg1}[]`;
                  }
                }
                text1 = `${arg1 + "[" + tmp6}]`;
              }
            }
            continue;
          }
        }
        return items.join("&");
      }
      module.exports = {
        parse(arg0) {
          let str = arg0;
          if (!arg0) {
            const _window = window;
            str = window.location.href;
          }
          if (hasQueryParams(str)) {
            const str3 = str.split("?")[1] || "";
            const parts = str.split("?")[1] || "".replace(/#.*$/, "").split("&");
            let reduced = parts.reduce((arg0, str) => {
              const parts = str.split("=");
              arg0[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
              return arg0;
            }, {});
            const str5 = str.split("?")[1] || "".replace(/#.*$/, "");
          } else {
            reduced = {};
          }
          return reduced;
        },
        stringify,
        queryify(url, body) {
          let str = url;
          if (!url) {
            str = "";
          }
          let tmp2 = null != body;
          if (tmp2) {
            tmp2 = "object" === typeof body;
          }
          if (tmp2) {
            let flag = false;
            const keys = Object.keys();
            if (keys !== undefined) {
              flag = false;
              while (keys[tmp] !== undefined) {
                let tmp8 = tmp5;
                flag = true;
                if (body.hasOwnProperty(tmp5)) {
                  break;
                }
              }
            }
            tmp2 = flag;
          }
          let sum1 = str;
          if (tmp2) {
            let str4 = "";
            let str5 = "";
            if (-1 === str.indexOf("?")) {
              str5 = "?";
            }
            const sum = str + str5;
            if (-1 !== sum.indexOf("=")) {
              str4 = "&";
            }
            sum1 = sum + str4 + stringify(body);
          }
          return sum1;
        },
        hasQueryParams
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      function isShadowElement(element) {
        return "[object ShadowRoot]" === callback(element).toString();
      }
      function getShadowHost(arg0) {
        const tmp = callback(arg0);
        let host = null;
        if (isShadowElement(tmp)) {
          host = tmp.host;
        }
        return host;
      }
      let closure_0 = global("@braintree/uuid");
      let closure_1 = global("./find-root-node");
      function transformToSlot(element, arg1) {
        element = callback(element).querySelector("style");
        const obj2 = getShadowHost(element);
        const text = `shadow-slot-${closure_0()}`;
        const element1 = <slot />;
        const element2 = <div />;
        const attr = element1.setAttribute("name", `shadow-slot-${closure_0()}`);
        element.appendChild(element1);
        const attr1 = element2.setAttribute("slot", `shadow-slot-${closure_0()}`);
        obj2.appendChild(element2);
        if (arg1) {
          if (!element) {
            const _document = document;
            const element3 = <style />;
            element.appendChild(element3);
            element = element3;
          }
          const sheet = element.sheet;
          sheet.insertRule(`::slotted([slot="${tmp2}"]) { ${arg1} }`);
        }
        let tmp10 = element2;
        if (isShadowElement(obj2)) {
          tmp10 = transformToSlot(element2, arg1);
        }
        return tmp10;
      }
      module.exports = { isShadowElement, getShadowHost, transformToSlot };
    },
    { "Null": 153, "Null": 195 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = (arr) => {
        let replaced = arr;
        if (-1 !== arr.indexOf("_")) {
          replaced = arr.toLowerCase().replace(/(\_\w)/g, (arg0) => arg0[1].toUpperCase());
          const str = arr.toLowerCase();
        }
        return replaced;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./querystring");
      module.exports = {
        getUrlParams() {
          return closure_0.parse(window.location.href);
        }
      };
    },
    { ./querystring: 177 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = function useMin(arg0) {
        let str = ".min";
        if (arg0) {
          str = "";
        }
        return str;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      function atobPolyfill(str) {
        let sum1;
        const regExp = new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$");
        let num = 0;
        str = "";
        if (regExp.test(str)) {
          do {
            let indexOf = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf;
            let tmp5 = +num;
            let indexOf2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf;
            let tmp7 = +tmp5 + 1;
            let tmp6 = 63 & "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(str.charAt(tmp5));
            let index = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(str.charAt(tmp7));
            let indexOf3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf;
            let tmp11 = +tmp7 + 1;
            let tmp9 = index >> 4;
            let tmp10 = 15 & index;
            let index1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(str.charAt(tmp11));
            let tmp13 = tmp10 << 4 | index1 >> 2 & 15;
            let indexOf4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf;
            let tmp15 = +tmp11 + 1;
            num = tmp15 + 1;
            let tmp14 = 3 & index1;
            let tmp16 = tmp14 << 6 | 63 & "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(str.charAt(tmp15));
            let _String = String;
            let str3 = "";
            let fromCharCodeResult = String.fromCharCode(tmp6 << 2 | tmp9 & 3);
            if (tmp13) {
              let _String2 = String;
              str3 = String.fromCharCode(tmp13);
            }
            let str4 = "";
            let sum = fromCharCodeResult + str3;
            if (tmp16) {
              let _String3 = String;
              str4 = String.fromCharCode(tmp16);
            }
            sum1 = str + (sum + str4);
            str = sum1;
          } while (num < str.length);
          return sum1;
        } else {
          const _Error = Error;
          const error = new Error("Non base64 encoded input passed to window.atob polyfill");
          throw error;
        }
      }
      let _atob = atobPolyfill;
      if ("function" === typeof atob) {
        _atob = atob;
      }
      module.exports = {
        atob(placeholder) {
          return _atob.call(window, placeholder);
        },
        _atob: atobPolyfill
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { REQUIRED_OPTIONS_FOR_START_PAYMENT: [true, true, true, true, true, true], REQUIRED_OPTIONS_FOR_PAY_UPON_INVOICE_PAYMENT_TYPE: ["<string:2386624516>", "<string:1124074594>", "HOSTED_FIELDS_FETCH_CAPABILITIES", "HOSTED_FIELDS_ENROLL", "HOSTED_FIELDS_TOKENIZE", "<string:38120516>", "<string:38569216>", "<string:17296896>", "<string:38237184>", "<string:563036416>", "<string:2420178945>", "<string:1090519619>", "+355", "<string:17544513>", "<string:1283145984>", "<string:2302738434>"], REQUIRED_OPTIONS_FOR_ADDRESS: [true, true, true, true], REQUIRED_OPTIONS_FOR_LINE_ITEMS: [], REQUIRED_OPTIONS_FOR_BLIK_SEAMLESS_PAYMENT_TYPE: [null, null, null, null, null], REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_LEVEL_0: [null], REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_FIRST: [], REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_SUBSEQUENT: [true, true] };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class LocalPayment {
        constructor(arg0) {
          self = this;
          ({ client: this._client, client } = global);
          this._assetsUrl = `${client.getConfiguration().gatewayConfiguration.assetsUrl}/web/3.112.1`;
          client2 = global.client;
          this._isDebug = client2.getConfiguration().isDebug;
          this._loadingFrameUrl = `${`${this._assetsUrl}/html/local-payment-landing-frame`}${closure_2(this._isDebug)}.html`;
          this._authorizationInProgress = false;
          this._paymentType = "unknown";
          this._merchantAccountId = global.merchantAccountId;
          if (global.redirectUrl) {
            self._redirectUrl = global.redirectUrl;
            flag = true;
            self._isRedirectFlow = true;
          }
          return;
        }
        _initialize() {
          closure_0 = this;
          closure_1 = this._client;
          f30423 = setTimeout(() => {
            closure_4.sendEvent(_client, "local-payment.load.timed-out");
          }, INTEGRATION_TIMEOUT_MS);
          promise = new Promise((arg0) => {
            const self = arg0;
            let obj = { name: "localpaymentlandingpage", dispatchFrameUrl: `${`${closure_0._assetsUrl}/html/dispatch-frame`}${closure_2(closure_0._isDebug)}.html`, openFrameUrl: self._loadingFrameUrl };
            obj = self.create(obj, (_frameService) => {
              _frameService._frameService = _frameService;
              clearTimeout(closure_2);
              closure_4.sendEvent(closure_1, "local-payment.load.succeeded");
              _frameService(_frameService);
            });
          });
          return promise;
        }
        startPayment(arg0) {
          self = this;
          closure_0 = global;
          INTEGRATION_TIMEOUT_MS = this;
          if (this._isRedirectFlow) {
            global.redirectUrl = self._redirectUrl;
          } else {
            _serviceId = self._frameService._serviceId;
          }
          tmp = function hasMissingOption(paymentType) {
            if (paymentType) {
              if (callback2(paymentType)) {
                if ("pay_upon_invoice" === paymentType.paymentType || "".toLowerCase()) {
                  let num7 = 0;
                  if (0 < closure_10.REQUIRED_OPTIONS_FOR_PAY_UPON_INVOICE_PAYMENT_TYPE.length) {
                    while (paymentType.hasOwnProperty(closure_10.REQUIRED_OPTIONS_FOR_PAY_UPON_INVOICE_PAYMENT_TYPE[num7])) {
                      if ("address" !== tmp28) {
                        if ("billingAddress" !== tmp28) {
                          let tmp29 = tmp25;
                          let tmp30 = tmp26;
                          if ("lineItems" === tmp28) {
                            let tmp31 = callback4;
                            let tmp32 = callback4(paymentType[tmp28]);
                            tmp29 = tmp25;
                            tmp30 = tmp32;
                            if (tmp32) {
                              let str17 = ".";
                              return tmp28 + "." + tmp32;
                            }
                          }
                        }
                        num7 = num7 + 1;
                        let tmp35 = closure_10;
                        let tmp25 = tmp29;
                        let tmp26 = tmp30;
                      }
                      let tmp33 = callback3;
                      let tmp34 = callback3(paymentType[tmp28]);
                      tmp30 = tmp26;
                      tmp29 = tmp34;
                      if (tmp34) {
                        let str18 = ".";
                        return tmp28 + "." + tmp34;
                      }
                    }
                    return closure_10.REQUIRED_OPTIONS_FOR_PAY_UPON_INVOICE_PAYMENT_TYPE[num7];
                  }
                } else if ("blik" === str5.toLowerCase()) {
                  const obj = paymentType.blikOptions || {};
                  if (!paymentType.redirectUrl) {
                    const prop = closure_10.REQUIRED_OPTIONS_FOR_BLIK_SEAMLESS_PAYMENT_TYPE;
                    prop.push("onPaymentStart");
                  }
                  let num3 = 0;
                  if (0 >= closure_10.REQUIRED_OPTIONS_FOR_BLIK_SEAMLESS_PAYMENT_TYPE.length) {
                    if (obj.hasOwnProperty("level_0")) {
                      let num6 = 0;
                      let flag3 = false;
                      if (0 < closure_10.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_LEVEL_0.length) {
                        const level_0 = obj.level_0;
                        while (level_0.hasOwnProperty(closure_10.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_LEVEL_0[num6])) {
                          num6 = num6 + 1;
                          let tmp23 = closure_10;
                          flag3 = false;
                        }
                        flag3 = `blikOptions.level_0.${tmp22}`;
                      }
                    } else {
                      flag3 = false;
                      if (obj.hasOwnProperty("oneClick")) {
                        const obj2 = obj.oneClick || {};
                        if (obj2.hasOwnProperty("aliasKey")) {
                          let num5 = 0;
                          flag3 = false;
                          if (0 < tmp13.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_SUBSEQUENT.length) {
                            while (obj2.hasOwnProperty(closure_10.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_SUBSEQUENT[num5])) {
                              num5 = num5 + 1;
                              let tmp19 = closure_10;
                              flag3 = false;
                            }
                            flag3 = `blikOptions.oneClick.${tmp18}`;
                          }
                        } else {
                          let num4 = 0;
                          flag3 = false;
                          if (0 < tmp13.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_FIRST.length) {
                            while (obj2.hasOwnProperty(closure_10.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_FIRST[num4])) {
                              num4 = num4 + 1;
                              let tmp16 = closure_10;
                              flag3 = false;
                            }
                            flag3 = `blikOptions.oneClick.${tmp15}`;
                          }
                        }
                      }
                    }
                  } else {
                    while (paymentType.hasOwnProperty(flag3)) {
                      num3 = num3 + 1;
                      let tmp12 = closure_10;
                      break;
                    }
                  }
                  return flag3;
                }
              } else {
                if (!paymentType.redirectUrl) {
                  const prop1 = closure_10.REQUIRED_OPTIONS_FOR_START_PAYMENT;
                  prop1.push("onPaymentStart");
                }
                let num = 0;
                if (0 < closure_10.REQUIRED_OPTIONS_FOR_START_PAYMENT.length) {
                  while (paymentType.hasOwnProperty(closure_10.REQUIRED_OPTIONS_FOR_START_PAYMENT[num])) {
                    num = num + 1;
                    let tmp7 = closure_10;
                  }
                  return closure_10.REQUIRED_OPTIONS_FOR_START_PAYMENT[num];
                }
                if (paymentType.fallback.url) {
                  if (paymentType.fallback.buttonText) {
                    if (true === paymentType.recurrent) {
                      if (!paymentType.customerId) {
                        return "customerId";
                      }
                    }
                  } else {
                    return "fallback.buttonText";
                  }
                } else {
                  return "fallback.url";
                }
              }
              return false;
            } else {
              return true;
            }
          }(global);
          if (tmp) {
            tmp35 = closure_1;
            tmp36 = closure_11;
            prototype3 = closure_1.prototype;
            tmp37 = new.target;
            tmp38 = new.target;
            tmp39 = new closure_1(closure_11.LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION);
            tmp40 = tmp39;
            str6 = "string";
            if ("string" === typeof tmp) {
              str7 = "Missing required '";
              str8 = "' option.";
              tmp39.details = `Missing required '${tmp}' option.`;
            }
            tmp41 = globalThis;
            _Promise2 = Promise;
            rejectResult = Promise.reject(tmp39);
          } else {
            size = global.windowOptions || {};
            tmp2 = global.address || {};
            tmp3 = global.fallback || {};
            tmp4 = global.billingAddress || {};
            obj = {};
            obj.amount = global.amount;
            obj = {};
            ({ streetAddress: obj2.line1, extendedAddress: obj2.line2, locality: obj2.city, region: obj2.state, postalCode: obj2.postalCode, countryCode: obj2.countryCode } = tmp4);
            obj.billingAddress = obj;
            ({ birthDate: obj.birthDate, blikOptions: obj.blikOptions } = global);
            obj.city = tmp2.locality;
            obj.correlationId = global.correlationId;
            obj.countryCode = tmp2.countryCode;
            ({ currencyCode: obj.currencyIsoCode, discountAmount: obj.discountAmount } = global);
            obj1 = {};
            ({ displayName: obj3.brandName, customerServiceInstructions: obj3.customerServiceInstructions, locale: obj3.locale } = global);
            obj1.noShipping = !global.shippingAddressRequired;
            obj.experienceProfile = obj1;
            ({ givenName: obj.firstName, paymentType: obj.fundingSource } = global);
            str = "sale";
            obj.intent = "sale";
            obj.lastName = global.surname;
            ({ streetAddress: obj.line1, extendedAddress: obj.line2 } = tmp2);
            obj.lineItems = global.lineItems;
            obj.merchantAccountId = self._merchantAccountId;
            ({ customerId: obj.merchantOrPartnerCustomerId, email: obj.payerEmail, paymentTypeCountryCode: obj.paymentTypeCountryCode, phone: obj.phone, phoneCountryCode: obj.phoneCountryCode } = global);
            obj.postalCode = tmp2.postalCode;
            ({ recurrent: obj.recurrent, shippingAmount: obj.shippingAmount } = global);
            obj.state = tmp2.region;
            tmp5 = closure_9;
            queryify = closure_9.queryify;
            if (self._isRedirectFlow) {
              obj2 = {};
              flag = true;
              obj2.wasCanceled = true;
              queryifyResult = queryify(self._redirectUrl, obj2);
              _redirectUrl = self._redirectUrl;
            } else {
              str2 = "/html/local-payment-redirect-frame";
              tmp7 = closure_2;
              text = `${self._assetsUrl}/html/local-payment-redirect-frame`;
              obj3 = {};
              obj3.channel = _serviceId;
              url = tmp3.cancelUrl;
              text1 = `${self._assetsUrl}/html/local-payment-redirect-frame${closure_2(self._isDebug)}`;
              if (!url) {
                url = tmp3.url;
              }
              obj3.r = url;
              obj3.t = tmp3.cancelButtonText || tmp3.buttonText;
              num = 1;
              obj3.c = 1;
              str3 = ".html";
              tmp10 = closure_9;
              tmp12 = closure_2;
              queryifyResult1 = queryify(`${tmp8}.html`, obj3);
              text2 = `${self._assetsUrl}/html/local-payment-redirect-frame`;
              obj4 = {};
              obj4.channel = _serviceId;
              ({ url: obj5.r, buttonText: obj5.t } = tmp3);
              _redirectUrl = closure_9.queryify(`${`${self._assetsUrl}/html/local-payment-redirect-frame`}${closure_2(self._isDebug)}.html`, obj4);
              queryifyResult = queryifyResult1;
            }
            tmp14 = assign;
            obj5 = {};
            obj5.cancelUrl = queryifyResult;
            obj5.returnUrl = _redirectUrl;
            tmp15 = assign(obj, obj5);
            str4 = global.paymentType;
            self._paymentType = str4.toLowerCase();
            if (self._authorizationInProgress) {
              if (!self._isRedirectFlow) {
                tmp16 = closure_4;
                str5 = ".local-payment.start-payment.error.already-opened";
                sendEventResult = closure_4.sendEvent(self._client, `${self._paymentType}.local-payment.start-payment.error.already-opened`);
                tmp18 = globalThis;
                _Promise = Promise;
                tmp19 = closure_1;
                tmp20 = closure_11;
                prototype = closure_1.prototype;
                tmp21 = new.target;
                tmp22 = new.target;
                tmp23 = new closure_1(closure_11.LOCAL_PAYMENT_ALREADY_IN_PROGRESS);
                tmp24 = tmp23;
                rejectResult = Promise.reject(tmp23);
              }
            }
            flag2 = true;
            self._authorizationInProgress = true;
            tmp26 = closure_8;
            prototype2 = closure_8.prototype;
            tmp27 = new.target;
            tmp28 = new.target;
            tmp29 = new closure_8();
            tmp30 = tmp29;
            closure_1 = tmp29;
            tmp31 = isDeferredPaymentTypeOptions;
            tmp32 = isDeferredPaymentTypeOptions(global) || self._isRedirectFlow;
            if (!tmp32) {
              self._startPaymentCallback = self._createStartPaymentCallback((arg0) => {
                tmp29.resolve(arg0);
              }, (arg0) => {
                tmp29.reject(arg0);
              });
              _frameService = self._frameService;
              obj6 = {};
              num2 = size.width;
              if (!num2) {
                num2 = 1282;
              }
              obj6.width = num2;
              obj6.height = size.height || 720;
              openResult = _frameService.open(obj6, self._startPaymentCallback);
            }
            _client = self._client;
            obj7 = { 0: null, 0: null };
            obj7.data = obj;
            requestResult = _client.request(obj7);
            nextPromise = requestResult.then((paymentResource) => {
              let _client;
              let _paymentType;
              const redirectUrl = paymentResource.paymentResource.redirectUrl;
              const sendEvent = sendEvent.sendEvent;
              ({ _client, _paymentType } = self);
              if (self._isRedirectFlow) {
                sendEvent(_client, `${_paymentType}.local-payment.start-payment.redirected`);
              } else {
                sendEvent(_client, `${_paymentType}.local-payment.start-payment.opened`);
              }
              self._startPaymentOptions = paymentResource;
              if (callback2(paymentResource)) {
                tmp4._authorizationInProgress = false;
                if ("string" === typeof redirectUrl) {
                  if (redirectUrl.length) {
                    const prototype = tmp29.prototype;
                    const tmp20 = new tmp29(constants.LOCAL_PAYMENT_START_PAYMENT_DEFERRED_PAYMENT_FAILED);
                    tmp29.reject(tmp20);
                  }
                }
                let obj = { paymentId: paymentResource.paymentResource.paymentToken };
                const onPaymentStartResult = paymentResource.onPaymentStart(obj);
                if (onPaymentStartResult instanceof Promise) {
                  onPaymentStartResult.then(() => {
                    closure_1.resolve();
                  });
                } else {
                  tmp29.resolve();
                }
              } else if (tmp4._isRedirectFlow) {
                const _window = window;
                window.location.href = paymentResource.paymentResource.redirectUrl;
              } else {
                obj = { paymentId: paymentResource.paymentResource.paymentToken };
                paymentResource.onPaymentStart(obj, () => {
                  const _frameService = _frameService._frameService;
                  _frameService.redirect(arg0.paymentResource.redirectUrl);
                });
              }
            });
            catchPromise = nextPromise.catch((details) => {
              if (!self._isRedirectFlow) {
                const _frameService = self._frameService;
                _frameService.close();
              }
              self._authorizationInProgress = false;
              if (422 !== tmp) {
                let obj = { type: constants.LOCAL_PAYMENT_START_PAYMENT_FAILED.type, code: constants.LOCAL_PAYMENT_START_PAYMENT_FAILED.code, message: constants.LOCAL_PAYMENT_START_PAYMENT_FAILED.message };
                tmp29.reject(callback(details, obj));
              } else {
                obj = { type: constants.LOCAL_PAYMENT_INVALID_PAYMENT_OPTION.type, code: constants.LOCAL_PAYMENT_INVALID_PAYMENT_OPTION.code, message: constants.LOCAL_PAYMENT_INVALID_PAYMENT_OPTION.message };
                obj = { originalError: details };
                obj.details = obj;
                const prototype = tmp29.prototype;
                const tmp10 = new tmp29(obj);
                tmp29.reject(tmp10);
              }
            });
            rejectResult = tmp29;
          }
          return rejectResult;
        }
        tokenize(arg0) {
          parsed = global;
          self = this;
          closure_0 = this;
          _client = this._client;
          closure_1 = _client;
          if (!global) {
            tmp2 = closure_9;
            parsed = closure_9.parse();
          }
          queryItems = parsed;
          if (parsed.queryItems) {
            queryItems = parsed.queryItems;
          }
          if (!queryItems.c) {
            if (!queryItems.wasCanceled) {
              if (queryItems.errorcode) {
                tmp4 = globalThis;
                _Promise = Promise;
                tmp5 = closure_1;
                obj = {};
                tmp6 = closure_11;
                obj.type = closure_11.LOCAL_PAYMENT_START_PAYMENT_FAILED.type;
                obj.code = closure_11.LOCAL_PAYMENT_START_PAYMENT_FAILED.code;
                obj.message = closure_11.LOCAL_PAYMENT_START_PAYMENT_FAILED.message;
                obj1 = {};
                obj2 = {};
                ({ errorcode: obj4.errorcode, btLpToken: obj4.token } = queryItems);
                obj1.originalError = obj2;
                obj.details = obj1;
                prototype = closure_1.prototype;
                tmp7 = new.target;
                tmp8 = new.target;
                tmp9 = obj;
                tmp10 = new closure_1(obj);
                tmp11 = tmp10;
                rejectResult = Promise.reject(tmp10);
              } else {
                obj = {};
                obj.data = self._formatTokenizeData(queryItems);
                requestResult = _client.request(obj);
                nextPromise = requestResult.then((arg0) => {
                  const sendEvent = closure_4.sendEvent;
                  const _paymentType = self._paymentType;
                  const result = self._formatTokenizePayload(arg0);
                  if (window.popupBridge) {
                    sendEvent(tmp3, `${_paymentType}.local-payment.tokenization.success-popupbridge`);
                  } else {
                    sendEvent(tmp3, `${_paymentType}.local-payment.tokenization.success`);
                  }
                  return result;
                });
                rejectResult = nextPromise.catch((arg0) => {
                  closure_4.sendEvent(_client, `${closure_0._paymentType}.local-payment.tokenization.failed`);
                  return Promise.reject(callback(arg0, { type: constants.LOCAL_PAYMENT_TOKENIZATION_FAILED.type, code: constants.LOCAL_PAYMENT_TOKENIZATION_FAILED.code, message: constants.LOCAL_PAYMENT_TOKENIZATION_FAILED.message }));
                });
              }
            }
            return rejectResult;
          }
          obj3 = { type: closure_11.LOCAL_PAYMENT_CANCELED.type, code: closure_11.LOCAL_PAYMENT_CANCELED.code, message: closure_11.LOCAL_PAYMENT_CANCELED.message, details: { originalError: obj4 } };
          obj4 = {};
          ({ errorcode: obj6.errorcode, btLpToken: obj6.token } = queryItems);
          tmp12 = new closure_1(obj3);
          rejectResult = Promise.reject(tmp12);
          return;
        }
        closeWindow() {
          self = this;
          if (this._authoriztionInProgress) {
            tmp = closure_4;
            str = ".local-payment.start-payment.closed.by-merchant";
            sendEventResult = closure_4.sendEvent(self._client, `${self._paymentType}.local-payment.start-payment.closed.by-merchant`);
          }
          _frameService = self._frameService;
          closeResult = _frameService.close();
          return;
        }
        focusWindow() {
          _frameService = this._frameService;
          focusResult = _frameService.focus();
          return;
        }
        _createStartPaymentCallback(arg0, arg1) {
          closure_0 = global;
          closure_1 = module;
          closure_2 = this;
          INTEGRATION_TIMEOUT_MS = this._client;
          return (code, errorcode) => {
            self._authorizationInProgress = false;
            if (code) {
              if ("FRAME_SERVICE_FRAME_CLOSED" === code.code) {
                if (errorcode) {
                  if ("processing_error" === errorcode.errorcode) {
                    closure_4.sendEvent(_client, `${closure_2._paymentType}.local-payment.failed-in-window`);
                    const prototype3 = errorcode.prototype;
                    const tmp38 = new errorcode(constants.LOCAL_PAYMENT_START_PAYMENT_FAILED);
                    errorcode(tmp38);
                  }
                }
                closure_4.sendEvent(_client, `${closure_2._paymentType}.local-payment.tokenization.closed.by-user`);
                const prototype2 = errorcode.prototype;
                const tmp26 = new errorcode(constants.LOCAL_PAYMENT_WINDOW_CLOSED);
                errorcode(tmp26);
              } else {
                code = code.code;
                if (code) {
                  code = code.code;
                  code = code.indexOf("FRAME_SERVICE_FRAME_OPEN_FAILED") > -1;
                }
                if (code) {
                  let obj = { code: constants.LOCAL_PAYMENT_WINDOW_OPEN_FAILED.code, type: constants.LOCAL_PAYMENT_WINDOW_OPEN_FAILED.type, message: constants.LOCAL_PAYMENT_WINDOW_OPEN_FAILED.message };
                  obj = { originalError: code };
                  obj.details = obj;
                  const prototype = errorcode.prototype;
                  const tmp14 = new errorcode(obj);
                  errorcode(tmp14);
                }
              }
            } else if (errorcode) {
              const _window = window;
              if (!window.popupBridge) {
                const _frameService = self._frameService;
                _frameService.redirect(self._loadingFrameUrl);
              }
              const tokenizeResult = self.tokenize(errorcode);
              const nextPromise = self.tokenize(errorcode).then(code);
              self.tokenize(errorcode).then(code).catch(errorcode).then(() => {
                const _frameService = _frameService._frameService;
                _frameService.close();
              });
              const catchPromise = self.tokenize(errorcode).then(code).catch(errorcode);
            }
          };
        }
        _formatTokenizePayload(arg0) {
          first = {};
          if (global.paypalAccounts) {
            num = 0;
            first = global.paypalAccounts[0];
          }
          obj = {};
          obj.nonce = first.nonce;
          obj.details = {};
          obj.type = first.type;
          if (first.details) {
            if (first.details.payerInfo) {
              obj.details = first.details.payerInfo;
            }
            if (first.details.correlationId) {
              obj.correlationId = first.details.correlationId;
            }
          }
          return obj;
        }
        hasTokenizationParams() {
          parsed = closure_9.parse();
          tmp2 = !parsed.errorcode;
          BooleanResult = !tmp2;
          if (tmp2) {
            tmp4 = globalThis;
            btLpPayerId = parsed.btLpToken;
            if (btLpPayerId) {
              btLpPayerId = parsed.btLpPaymentId;
            }
            if (btLpPayerId) {
              btLpPayerId = parsed.btLpPayerId;
            }
            BooleanResult = Boolean(btLpPayerId);
          }
          return BooleanResult;
        }
        _formatTokenizeData(arg0) {
          _client = this._client;
          obj = { merchantAccountId: this._merchantAccountId };
          obj = {};
          token = global.btLpToken;
          if (!token) {
            token = global.token;
          }
          obj.correlationId = token;
          obj.paymentToken = global.btLpPaymentId || global.paymentId;
          obj.payerId = global.btLpPayerId || global.PayerID;
          obj.unilateral = _client.getConfiguration().gatewayConfiguration.paypal.unvettedMerchant;
          obj.intent = "sale";
          obj.paypalAccount = obj;
          return obj;
        }
        teardown() {
          self = this;
          if (!this._isRedirectFlow) {
            _frameService = self._frameService;
            teardownResult = _frameService.teardown();
          }
          tmp2 = closure_6(self, closure_5(LocalPayment.prototype));
          sendEventResult = closure_4.sendEvent(self._client, "local-payment.teardown-completed");
          return Promise.resolve();
        }
      }
      function isDeferredPaymentTypeOptions(blikOptions) {
        const obj = blikOptions.blikOptions || {};
        if ("string" === typeof blikOptions.paymentType) {
          let paymentType = blikOptions.paymentType.toLowerCase();
          const str = blikOptions.paymentType;
        } else {
          paymentType = blikOptions.paymentType;
        }
        if ("blik" === paymentType) {
          let hasOwnPropertyResult = obj.hasOwnProperty("level_0");
          if (!hasOwnPropertyResult) {
            hasOwnPropertyResult = obj.hasOwnProperty("oneClick");
          }
          let hasItem = hasOwnPropertyResult;
        } else {
          const items = ["+61", "+43", "+994"];
          hasItem = items.includes(paymentType);
        }
        return hasItem;
      }
      function hasMissingAddressOption(arg0) {
        let num = 0;
        if (0 < constants.REQUIRED_OPTIONS_FOR_ADDRESS.length) {
          while (arg0.hasOwnProperty(constants.REQUIRED_OPTIONS_FOR_ADDRESS[num])) {
            num = num + 1;
            let tmp3 = constants;
          }
          return constants.REQUIRED_OPTIONS_FOR_ADDRESS[num];
        }
        return false;
      }
      function hasMissingLineItemsOption(arg0) {
        let num = 0;
        if (0 < arg0.length) {
          while (true) {
            let obj = arg0[num];
            let tmp = constants;
            let num2 = 0;
            if (0 < constants.REQUIRED_OPTIONS_FOR_LINE_ITEMS.length) {
              let tmp2 = constants;
              let tmp3 = constants.REQUIRED_OPTIONS_FOR_LINE_ITEMS[num2];
              while (obj.hasOwnProperty(tmp3)) {
                num2 = num2 + 1;
                let tmp4 = constants;
                let tmp5 = tmp3;
                continue;
              }
              return tmp3;
            }
            num = num + 1;
          }
        }
        return false;
      }
      let closure_0 = global("../../lib/frame-service/external");
      let closure_1 = global("../../lib/braintree-error");
      let closure_2 = global("../../lib/use-min");
      const INTEGRATION_TIMEOUT_MS = global("../../lib/constants").INTEGRATION_TIMEOUT_MS;
      let closure_4 = global("../../lib/analytics");
      let closure_5 = global("../../lib/methods");
      let closure_6 = global("../../lib/convert-methods-to-error");
      let closure_7 = global("../../lib/convert-to-braintree-error");
      const globalResult = global("@braintree/extended-promise");
      let closure_9 = global("../../lib/querystring");
      let closure_10 = global("./constants");
      let closure_11 = global("../shared/errors");
      const assign = global("../../lib/assign").assign;
      globalResult.suppressUnhandledPromiseMessage = true;
      module.exports = global("@braintree/wrap-promise").wrapPrototype(LocalPayment);
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      let closure_4 = global("./external/local-payment");
      let closure_5 = global("../lib/braintree-error");
      let closure_6 = global("./shared/errors");
      const parse = global("../lib/querystring").parse;
      const globalResult = global("@braintree/wrap-promise");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          const obj = { name: "Local Payment", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify({ name: "Local Payment", client: client.client, authorization: client.authorization });
          return closure_1.verify({ name: "Local Payment", client: client.client, authorization: client.authorization }).then((self) => closure_2.create({ authorization: self.authorization, client: self.client, debug: self.debug, assetsUrl: closure_3.create(self.authorization), name: "Local Payment" })).then((client) => {
            client.client = client;
            if (true !== client.getConfiguration().gatewayConfiguration.paypalEnabled) {
              const prototype = ctor2.prototype;
              const tmp11 = new ctor2(constants.LOCAL_PAYMENT_NOT_ENABLED);
              let rejectResult = Promise.reject(tmp11);
            } else {
              client.sendEvent(client, "local-payment.initialized");
              const prototype2 = ctor.prototype;
              const obj = new ctor(client);
              client = obj;
              if (client.redirectUrl) {
                const _window = window;
                const tmp4 = callback(window.location.href);
                if (tmp4.token) {
                  const tokenizeResult = obj.tokenize(tmp4);
                  let catchPromise = obj.tokenize(tmp4).then((tokenizePayload) => {
                    obj.tokenizePayload = tokenizePayload;
                    return obj;
                  }).catch((arg0) => {
                    console.log("Error while tokenizing: ", arg0);
                    return obj;
                  });
                  const nextPromise = obj.tokenize(tmp4).then((tokenizePayload) => {
                    obj.tokenizePayload = tokenizePayload;
                    return obj;
                  });
                } else {
                  catchPromise = obj;
                }
                rejectResult = catchPromise;
              } else {
                rejectResult = obj._initialize();
              }
            }
            return rejectResult;
          });
        }),
        VERSION: "3.112.1"
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      let obj = { placeholder: null, live-guild-stage: null, guild-event: null, type: globalResult.types.MERCHANT };
      obj = { placeholder: false, live-guild-stage: false, guild-event: false, type: globalResult.types.MERCHANT };
      obj = { type: globalResult.types.CUSTOMER };
      const obj1 = { placeholder: null, live-guild-stage: "PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS", guild-event: "There are no supported payment methods associated with this account.", type: globalResult.types.CUSTOMER };
      const obj2 = { placeholder: null, live-guild-stage: "PAYMENT_REQUEST_CANCELED", guild-event: "Payment request was canceled.", type: globalResult.types.MERCHANT };
      const obj3 = { placeholder: null, live-guild-stage: "PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED", guild-event: "Something went wrong when configuring the payment request.", type: globalResult.types.NETWORK };
      const obj4 = { placeholder: null, live-guild-stage: "PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED", guild-event: "Something went wrong when calling `canMakePayment`", type: globalResult.types.MERCHANT };
      const obj5 = { placeholder: null, live-guild-stage: "PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED", guild-event: "Something went wrong when calling `canMakePayment`. Most likely, `canMakePayment` was called multiple times with different supportedMethods configurations.", type: globalResult.types.UNKNOWN };
      const obj6 = { placeholder: null, live-guild-stage: "PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE", guild-event: "Something went wrong when tokenizing the Google Pay card.", type: globalResult.types.NETWORK };
      const obj7 = { placeholder: null, live-guild-stage: "PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR", guild-event: "Something went wrong when tokenizing the Google Pay card.", type: globalResult.types.MERCHANT };
      module.exports = { LOCAL_PAYMENT_NOT_ENABLED: obj, LOCAL_PAYMENT_ALREADY_IN_PROGRESS: obj, LOCAL_PAYMENT_CANCELED: obj, LOCAL_PAYMENT_WINDOW_CLOSED: obj1, LOCAL_PAYMENT_WINDOW_OPEN_FAILED: obj2, LOCAL_PAYMENT_START_PAYMENT_FAILED: obj3, LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION: obj4, LOCAL_PAYMENT_START_PAYMENT_DEFERRED_PAYMENT_FAILED: obj5, LOCAL_PAYMENT_TOKENIZATION_FAILED: obj6, LOCAL_PAYMENT_INVALID_PAYMENT_OPTION: obj7 };
    },
    { ../../lib/braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class Masterpass {
        constructor(arg0) {
          self = this;
          client = global.client;
          configuration = client.getConfiguration();
          this._client = global.client;
          this._assetsUrl = `${tmp.gatewayConfiguration.assetsUrl}/web/3.112.1`;
          this._isDebug = configuration.isDebug;
          this._authInProgress = false;
          if (window.popupBridge) {
            _window = window;
            str = "function";
            if ("function" === typeof window.popupBridge.getReturnUrlPrefix) {
              _window2 = window;
              popupBridge = window.popupBridge;
              str3 = "return";
              self._callbackUrl = `${popupBridge.getReturnUrlPrefix()}return`;
            }
            return;
          }
          str2 = ".min";
          text = `${self._assetsUrl}/html/redirect-frame`;
          if (self._isDebug) {
            str2 = "";
          }
          self._callbackUrl = `${tmp2}${str2}.html`;
          return;
        }
        _initialize() {
          closure_0 = this;
          promise = new Promise((arg0) => {
            const self = arg0;
            const timeout = setTimeout(() => {
              closure_4.sendEvent(arg0._client, "masterpass.load.timed-out");
            }, closure_8);
            let obj = { name: constants.LANDING_FRAME_NAME, height: constants.POPUP_HEIGHT, width: constants.POPUP_WIDTH };
            let str = ".min";
            let str2 = ".min";
            const text = `${closure_0._assetsUrl}/html/dispatch-frame`;
            if (self._isDebug) {
              str2 = "";
            }
            obj.dispatchFrameUrl = `${tmp2}${str2}.html`;
            const text1 = `${closure_0._assetsUrl}/html/masterpass-landing-frame`;
            if (self._isDebug) {
              str = "";
            }
            obj.openFrameUrl = `${tmp3}${str}.html`;
            obj = self.create(obj, (_frameService) => {
              _frameService._frameService = _frameService;
              clearTimeout(closure_1);
              closure_4.sendEvent(_frameService._client, "masterpass.load.succeeded");
              _frameService(_frameService);
            });
          });
          return promise;
        }
        tokenize(arg0) {
          closure_0 = global;
          closure_1 = this;
          if (global) {
            tmp2 = closure_7;
            num = 0;
            flag = false;
            if (0 < closure_7.REQUIRED_OPTIONS_FOR_TOKENIZE.length) {
              tmp3 = closure_7;
              flag = true;
              while (global.hasOwnProperty(closure_7.REQUIRED_OPTIONS_FOR_TOKENIZE[num])) {
                num = num + 1;
                tmp4 = closure_7;
                flag = false;
                if (num >= closure_7.REQUIRED_OPTIONS_FOR_TOKENIZE.length) {
                  break;
                }
              }
            }
            if (!flag) {
              tmp5 = globalThis;
              _Promise = Promise;
              if (tmp._authInProgress) {
                tmp9 = closure_1;
                tmp10 = closure_2;
                prototype2 = closure_1.prototype;
                tmp11 = new.target;
                tmp12 = new.target;
                tmp13 = new closure_1(closure_2.MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS);
                tmp14 = tmp13;
                rejectResult = _Promise.reject(tmp13);
              } else {
                prototype = _Promise.prototype;
                tmp6 = new.target;
                tmp7 = new.target;
                rejectResult = new _Promise((arg0, arg1) => {
                  const result = self._navigateFrameToLoadingPage(arg0);
                  result.catch(arg1);
                  const _frameService = self._frameService;
                  _frameService.open(arg0.frameOptions, self._createFrameOpenHandler(arg0, arg1));
                });
              }
            }
            return rejectResult;
          }
          tmp15 = new closure_1(closure_2.MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION);
          rejectResult = Promise.reject(tmp15);
          return;
        }
        _navigateFrameToLoadingPage(arg0) {
          closure_0 = global;
          closure_1 = this;
          this._authInProgress = true;
          _client = this._client;
          obj = { 0: "PAYMENT_REQUEST_NOT_COMPLETED", 0: "Payment request could not be completed." };
          obj = { originUrl: `${window.location.protocol}//${window.location.hostname}`, subtotal: global.subtotal, currencyCode: global.currencyCode, callbackUrl: this._callbackUrl };
          obj.data = { requestToken: obj };
          requestResult = _client.request(obj);
          nextPromise = requestResult.then((requestToken) => {
            let str = ".min";
            const text = `${closure_1._assetsUrl}/html/masterpass-loading-frame`;
            if (self._isDebug) {
              str = "";
            }
            const _client = self._client;
            const gatewayConfiguration = _client.getConfiguration().gatewayConfiguration;
            const tmp2 = requestToken.config || {};
            const self = tmp2;
            const obj = { environment: gatewayConfiguration.environment, requestToken: requestToken.requestToken, callbackUrl: self._callbackUrl, merchantCheckoutId: gatewayConfiguration.masterpass.merchantCheckoutId, allowedCardTypes: gatewayConfiguration.masterpass.supportedNetworks, version: constants2.MASTERPASS_VERSION };
            requestToken = obj;
            const keys = Object.keys(tmp2);
            const item = keys.forEach((arg0) => {
              if ("function" !== typeof tmp2[arg0]) {
                obj[arg0] = tmp2[arg0];
              }
            });
            const keys1 = Object.keys(obj);
            const mapped = keys1.map((arg0) => arg0 + "=" + obj[arg0]);
            const _frameService = self._frameService;
            _frameService.redirect(`${tmp}${str}.html?${obj2.join("&")}`);
          });
          return nextPromise.catch((details) => {
            self._closeWindow();
            if (422 === tmp) {
              let rejectResult = Promise.reject(callback(details, constants.MASTERPASS_INVALID_PAYMENT_OPTION));
            } else {
              rejectResult = Promise.reject(callback(details, constants.MASTERPASS_FLOW_FAILED));
            }
            return rejectResult;
          });
        }
        _createFrameOpenHandler(arg0, arg1) {
          closure_0 = global;
          closure_1 = module;
          closure_2 = this;
          return window.popupBridge ? (arg0, queryItems) => {
            self._authInProgress = false;
            if (arg0) {
              closure_4.sendEvent(self._client, "masterpass.tokenization.closed-popupbridge.by-user");
              queryItems(callback(arg0, self.MASTERPASS_POPUP_CLOSED));
            } else if (queryItems.queryItems) {
              const _tokenizeMasterpassResult = self._tokenizeMasterpass(queryItems.queryItems);
              self._tokenizeMasterpass(queryItems.queryItems).then(arg0).catch(queryItems);
              const nextPromise = self._tokenizeMasterpass(queryItems.queryItems).then(arg0);
            } else {
              closure_4.sendEvent(self._client, "masterpass.tokenization.failed-popupbridge");
              const prototype = queryItems.prototype;
              const tmp9 = new queryItems(self.MASTERPASS_FLOW_FAILED);
              queryItems(tmp9);
            }
            return tmp12;
          } : (code) => {
            let obj = self;
            if (code) {
              obj._authInProgress = false;
              if ("FRAME_SERVICE_FRAME_CLOSED" === code.code) {
                closure_4.sendEvent(self._client, "masterpass.tokenization.closed.by-user");
                const prototype2 = arg1.prototype;
                const tmp34 = new arg1(self.MASTERPASS_POPUP_CLOSED);
                arg1(tmp34);
              } else {
                if (code.code) {
                  code = code.code;
                  if (code.indexOf("FRAME_SERVICE_FRAME_OPEN_FAILED") > -1) {
                    closure_4.sendEvent(self._client, "masterpass.tokenization.failed.to-open");
                    obj = { code: self.MASTERPASS_POPUP_OPEN_FAILED.code, type: self.MASTERPASS_POPUP_OPEN_FAILED.type, message: self.MASTERPASS_POPUP_OPEN_FAILED.message };
                    obj = { originalError: code };
                    obj.details = obj;
                    const prototype = arg1.prototype;
                    const tmp23 = new arg1(obj);
                    arg1(tmp23);
                  }
                }
                closure_4.sendEvent(self._client, "masterpass.tokenization.failed");
                self._closeWindow();
                arg1(callback(code, self.MASTERPASS_FLOW_FAILED));
              }
              return tmp13;
            } else {
              const _tokenizeMasterpassResult = obj._tokenizeMasterpass(arg1);
              obj._tokenizeMasterpass(arg1).then(code).catch(arg1);
            }
          };
        }
        _tokenizeMasterpass(arg0) {
          self = this;
          closure_0 = this;
          if ("success" !== global.mpstatus) {
            tmp12 = closure_4;
            str2 = "masterpass.tokenization.closed.by-user";
            sendEventResult = closure_4.sendEvent(self._client, "masterpass.tokenization.closed.by-user");
            _closeWindowResult = self._closeWindow();
            tmp15 = globalThis;
            _Promise2 = Promise;
            tmp16 = closure_1;
            tmp17 = closure_2;
            prototype2 = closure_1.prototype;
            tmp18 = new.target;
            tmp19 = new.target;
            tmp20 = new closure_1(closure_2.MASTERPASS_POPUP_CLOSED);
            tmp21 = tmp20;
            rejectResult = Promise.reject(tmp20);
          } else if (function isMissingRequiredPayload(mpstatus) {
            const items = [, , ];
            ({ oauth_verifier: arr[0], oauth_token: arr[1], checkout_resource_url: arr[2] } = mpstatus);
            return items.some((arg0) => {
              let tmp = null == arg0;
              if (!tmp) {
                tmp = "null" === arg0;
              }
              return tmp;
            });
          }(global)) {
            tmp2 = closure_4;
            str = "masterpass.tokenization.closed.missing-payload";
            sendEventResult1 = closure_4.sendEvent(self._client, "masterpass.tokenization.closed.missing-payload");
            _closeWindowResult1 = self._closeWindow();
            tmp5 = globalThis;
            _Promise = Promise;
            tmp6 = closure_1;
            tmp7 = closure_2;
            prototype = closure_1.prototype;
            tmp8 = new.target;
            tmp9 = new.target;
            tmp10 = new closure_1(closure_2.MASTERPASS_POPUP_MISSING_REQUIRED_PARAMETERS);
            tmp11 = tmp10;
            rejectResult = Promise.reject(tmp10);
          } else {
            _client = self._client;
            obj = {};
            obj = {};
            obj1 = {};
            ({ checkout_resource_url: obj3.checkoutResourceUrl, oauth_token: obj3.requestToken, oauth_verifier: obj3.verifierToken } = global);
            obj.masterpassCard = obj1;
            obj.data = obj;
            requestResult = _client.request(obj);
            nextPromise = requestResult.then((arg0) => {
              self._closeWindow();
              const sendEvent = closure_4.sendEvent;
              const _client = self._client;
              if (window.popupBridge) {
                sendEvent(_client, "masterpass.tokenization.success-popupbridge");
              } else {
                sendEvent(_client, "masterpass.tokenization.success");
              }
              return arg0.masterpassCards[0];
            });
            rejectResult = nextPromise.catch((arg0) => {
              self._closeWindow();
              const sendEvent = closure_4.sendEvent;
              const _client = self._client;
              if (window.popupBridge) {
                sendEvent(_client, "masterpass.tokenization.failed-popupbridge");
              } else {
                sendEvent(_client, "masterpass.tokenization.failed");
              }
              return Promise.reject(callback(arg0, constants.MASTERPASS_ACCOUNT_TOKENIZATION_FAILED));
            });
          }
          return rejectResult;
        }
        _closeWindow() {
          this._authInProgress = false;
          _frameService = this._frameService;
          closeResult = _frameService.close();
          return;
        }
        teardown() {
          closure_0 = this;
          promise = new Promise((arg0) => {
            const _frameService = self._frameService;
            _frameService.teardown();
            callback2(self, callback(ctor.prototype));
            closure_4.sendEvent(self._client, "masterpass.teardown-completed");
            arg0();
          });
          return promise;
        }
      }
      let closure_0 = global("../../lib/frame-service/external");
      let closure_1 = global("../../lib/braintree-error");
      let closure_2 = global("../shared/errors");
      let closure_3 = global("../../lib/methods");
      let closure_4 = global("../../lib/analytics");
      let closure_5 = global("../../lib/convert-methods-to-error");
      let closure_6 = global("../../lib/convert-to-braintree-error");
      let closure_7 = global("../shared/constants");
      const INTEGRATION_TIMEOUT_MS = global("../../lib/constants").INTEGRATION_TIMEOUT_MS;
      module.exports = global("@braintree/wrap-promise").wrapPrototype(Masterpass);
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      function isSupported() {
        if (!popupBridge) {
          popupBridge = closure_2.supportsPopups();
        }
        return Boolean(popupBridge);
      }
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("./shared/browser-detection");
      let closure_3 = global("./external/masterpass");
      let closure_4 = global("../lib/create-deferred-client");
      let closure_5 = global("../lib/create-assets-url");
      let closure_6 = global("./shared/errors");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          const obj = { name: "Masterpass", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify({ name: "Masterpass", client: client.client, authorization: client.authorization });
          const nextPromise = closure_1.verify({ name: "Masterpass", client: client.client, authorization: client.authorization }).then(() => {
            if (callback()) {
              let resolveResult = _Promise.resolve();
            } else {
              const prototype = arg0.prototype;
              const tmp5 = new arg0(constants.MASTERPASS_BROWSER_NOT_SUPPORTED);
              resolveResult = _Promise.reject(tmp5);
            }
            return resolveResult;
          });
          return closure_1.verify({ name: "Masterpass", client: client.client, authorization: client.authorization }).then(() => {
            if (callback()) {
              let resolveResult = _Promise.resolve();
            } else {
              const prototype = arg0.prototype;
              const tmp5 = new arg0(constants.MASTERPASS_BROWSER_NOT_SUPPORTED);
              resolveResult = _Promise.reject(tmp5);
            }
            return resolveResult;
          }).then((self) => closure_4.create({ authorization: self.authorization, client: self.client, debug: self.debug, assetsUrl: closure_5.create(self.authorization), name: "Masterpass" })).then((client) => {
            client.client = client;
            client = client.client;
            if (client.getConfiguration().gatewayConfiguration.masterpass) {
              const prototype2 = ctor.prototype;
              const obj = new ctor(client);
              let _initializeResult = obj._initialize();
            } else {
              const prototype = client.prototype;
              const tmp6 = new client(constants.MASTERPASS_NOT_ENABLED);
              _initializeResult = Promise.reject(tmp6);
            }
            return _initializeResult;
          });
        }),
        isSupported,
        VERSION: "3.112.1"
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { supportsPopups: global("@braintree/browser-detection/supports-popups") };
    },
    { @braintree/browser-detection/supports-popups: 29 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const obj = { "Bool(false)": null, "Bool(false)": "PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE", "Bool(false)": "createSupportedPaymentMethodsConfiguration must include a type parameter.", "Bool(false)": null, REQUIRED_OPTIONS_FOR_TOKENIZE: [] };
      module.exports = obj;
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      let obj = { placeholder: "PAYPAL_NOT_ENABLED", live-guild-stage: "PayPal is not enabled for this merchant.", guild-event: null, type: globalResult.types.CUSTOMER };
      obj = { placeholder: "PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED", live-guild-stage: "A linked PayPal Sandbox account is required to use PayPal Checkout in Sandbox. See https://developer.paypal.com/braintree/docs/guides/paypal/testing-go-live#linked-paypal-testing for details on linking your PayPal sandbox with Braintree.", guild-event: null, type: globalResult.types.MERCHANT };
      obj = { placeholder: "PAYPAL_ACCOUNT_TOKENIZATION_FAILED", live-guild-stage: "Could not tokenize user's PayPal account.", guild-event: null, type: globalResult.types.MERCHANT };
      const obj1 = { placeholder: "PAYPAL_FLOW_FAILED", live-guild-stage: "Could not initialize PayPal flow.", guild-event: null, type: globalResult.types.MERCHANT };
      const obj2 = { placeholder: "PAYPAL_FLOW_OPTION_REQUIRED", live-guild-stage: "PayPal flow property is invalid or missing.", guild-event: null, type: globalResult.types.NETWORK };
      const obj3 = { placeholder: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED", live-guild-stage: "Something went wrong when setting up the checkout workflow.", guild-event: null, type: globalResult.types.MERCHANT };
      const obj4 = { placeholder: null, live-guild-stage: "PAYPAL_INVALID_PAYMENT_OPTION", guild-event: "PayPal payment options are invalid.", type: globalResult.types.MERCHANT };
      const obj5 = { placeholder: null, live-guild-stage: "PAYPAL_MISSING_REQUIRED_OPTION", guild-event: "Missing required option.", type: globalResult.types.CUSTOMER };
      const obj6 = { placeholder: "create_payment_resource", live-guild-stage: "setup_billing_agreement", guild-event: null, type: globalResult.types.MERCHANT };
      const obj7 = { placeholder: null, live-guild-stage: "PAYPAL_TOKENIZATION_REQUEST_ACTIVE", guild-event: "Another tokenization request is active.", type: globalResult.types.NETWORK };
      module.exports = { MASTERPASS_BROWSER_NOT_SUPPORTED: obj, MASTERPASS_NOT_ENABLED: obj, MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION: obj, MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS: obj1, MASTERPASS_ACCOUNT_TOKENIZATION_FAILED: obj2, MASTERPASS_POPUP_OPEN_FAILED: obj3, MASTERPASS_POPUP_MISSING_REQUIRED_PARAMETERS: obj4, MASTERPASS_POPUP_CLOSED: obj5, MASTERPASS_INVALID_PAYMENT_OPTION: obj6, MASTERPASS_FLOW_FAILED: obj7 };
    },
    { ../../lib/braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class PaymentRequestComponent {
        constructor(arg0) {
          self = this;
          tmp = global.enabledPaymentMethods || {};
          callResult = closure_9.call(self);
          self._componentId = closure_6();
          self._client = global.client;
          obj = { basicCard: false !== tmp.basicCard, googlePay: false !== tmp.googlePay };
          self._enabledPaymentMethods = obj;
          num = 1;
          if (2 === global.googlePayVersion) {
            num = 2;
          }
          self._googlePayVersion = num;
          self._googleMerchantId = "18278000977346790994";
          self._supportedPaymentMethods = self._constructDefaultSupportedPaymentMethods();
          keys = Object.keys(self._supportedPaymentMethods);
          fn = function(arg0) {
            return this._supportedPaymentMethods[arg0];
          };
          self._defaultSupportedPaymentMethods = keys.map(fn.bind(self));
          obj = { channel: self._componentId };
          tmp3 = new closure_2(obj);
          self._bus = tmp3;
          return;
        }
        _constructDefaultSupportedPaymentMethods() {
          self = this;
          _client = this._client;
          configuration = _client.getConfiguration();
          androidPay = configuration.gatewayConfiguration.androidPay;
          creditCards = configuration.gatewayConfiguration.creditCards;
          obj = {};
          tmp2 = this._enabledPaymentMethods.basicCard && creditCards;
          if (tmp2) {
            num = 0;
            tmp2 = creditCards.supportedCardTypes.length > 0;
          }
          if (tmp2) {
            obj = {};
            str = "basic-card";
            obj.supportedMethods = "basic-card";
            obj1 = {};
            supportedCardTypes = creditCards.supportedCardTypes;
            obj1.supportedNetworks = supportedCardTypes.reduce((arr) => {
              if (arg1 in closure_14) {
                arr.push(closure_14[arg1]);
              }
              return arr;
            }, []);
            obj.data = obj1;
            obj.basicCard = obj;
          }
          tmp3 = self._enabledPaymentMethods.googlePay && androidPay && androidPay.enabled;
          if (tmp3) {
            obj2 = {};
            str2 = "https://google.com/pay";
            obj2.supportedMethods = "https://google.com/pay";
            tmp4 = closure_4;
            obj2.data = closure_4(configuration, self._googlePayVersion, self._googleMerchantId);
            obj.googlePay = obj2;
          }
          return obj;
        }
        initialize() {
          _client = this._client;
          closure_0 = _client.getConfiguration();
          assign = this;
          obj = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null };
          obj.style = { position: 1359020035, shadowRadius: 208863798 };
          this._frame = closure_5(obj);
          if (0 === this._defaultSupportedPaymentMethods.length) {
            tmp5 = globalThis;
            _Promise2 = Promise;
            tmp6 = closure_10;
            tmp7 = errors;
            prototype2 = closure_10.prototype;
            tmp8 = new.target;
            tmp9 = new.target;
            tmp10 = new closure_10(errors.PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS);
            tmp11 = tmp10;
            rejectResult = Promise.reject(tmp10);
          } else {
            tmp = globalThis;
            _Promise = Promise;
            prototype = Promise.prototype;
            tmp2 = new.target;
            tmp3 = new.target;
            rejectResult = new Promise((arg0) => {
              let _componentId;
              let _frame;
              let closure_0 = arg0;
              const _bus = self._bus;
              _bus.on(constants.FRAME_READY, (arg0) => {
                arg0(closure_1._client);
              });
              const _bus2 = self._bus;
              _bus2.on(constants.FRAME_CAN_MAKE_REQUESTS, () => {
                arg0.sendEvent(closure_1._client, "payment-request.initialized");
                const _bus = closure_1._bus;
                _bus.on(constants.SHIPPING_ADDRESS_CHANGE, (shippingAddress) => {
                  let obj = { target: obj, updateWith() { ... } };
                  obj = { shippingAddress };
                  closure_1._emit("shippingAddressChange", obj);
                  closure_1._emit("shippingaddresschange", obj);
                });
                const _bus2 = closure_1._bus;
                _bus2.on(constants.SHIPPING_OPTION_CHANGE, (shippingOption) => {
                  let obj = { target: obj, updateWith() { ... } };
                  obj = { shippingOption };
                  closure_1._emit("shippingOptionChange", obj);
                  closure_1._emit("shippingoptionchange", obj);
                });
                arg0(closure_1);
              });
              ({ _frame, _componentId } = self);
              _frame.src = `${`${closure_0.gatewayConfiguration.assetsUrl}/web/3.112.1/html/payment-request-frame`}${closure_7(closure_0.isDebug)}.html#${_componentId}`;
              body.appendChild(self._frame);
            });
          }
          return rejectResult;
        }
        createSupportedPaymentMethodsConfiguration(arg0, arg1) {
          self = this;
          if (global) {
            if (self._enabledPaymentMethods[global]) {
              tmp13 = assign;
              tmp14 = assign({}, self._supportedPaymentMethods[global]);
              tmp15 = module;
              tmp14.data = assign({}, tmp14.data, module);
              return tmp14;
            } else {
              tmp7 = closure_10;
              tmp8 = errors;
              prototype2 = closure_10.prototype;
              tmp9 = new.target;
              tmp10 = new.target;
              tmp11 = new closure_10(errors.PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED);
              tmp12 = tmp11;
              throw tmp11;
            }
          } else {
            tmp = closure_10;
            tmp2 = errors;
            prototype = closure_10.prototype;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = new closure_10(errors.PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE);
            tmp6 = tmp5;
            throw tmp5;
          }
        }
        tokenize(arg0) {
          closure_0 = global;
          assign = this;
          promise = new Promise((arg0, arg1) => {
            const self = arg1;
            const _bus = self._bus;
            const obj = {};
            let _defaultSupportedPaymentMethods = arg0.supportedPaymentMethods;
            if (!_defaultSupportedPaymentMethods) {
              _defaultSupportedPaymentMethods = self._defaultSupportedPaymentMethods;
            }
            obj.supportedPaymentMethods = _defaultSupportedPaymentMethods;
            ({ details: obj.details, options: obj.options } = arg0);
            _bus.emit(constants.PAYMENT_REQUEST_INITIALIZED, obj, (arg0, self) => {
              const first = arg0[0];
              if (first) {
                self(self._formatTokenizationError(first));
              } else {
                arg0.sendEvent(self._client, "payment-request.tokenize.succeeded");
                let obj = {};
                ({ nonce: obj.nonce, type: obj.type, description: obj.description } = tmp2);
                obj = { rawPaymentResponse: tmp2.details.rawPaymentResponse, cardType: tmp2.details.cardType, lastFour: tmp2.details.lastFour, lastTwo: tmp2.details.lastTwo };
                obj.details = obj;
                obj.binData = tmp2.binData;
                arg0(obj);
              }
            });
          });
          return promise;
        }
        canMakePayment(arg0) {
          closure_0 = global;
          closure_2 = this;
          tmp2 = globalThis;
          if (window.PaymentRequest) {
            if (!global.supportedPaymentMethods) {
              _Promise2 = Promise;
              prototype = Promise.prototype;
              tmp7 = new.target;
              tmp8 = new.target;
              promise = new Promise((arg0, arg1) => {
                const _bus = self._bus;
                const obj = {};
                let _defaultSupportedPaymentMethods = arg0.supportedPaymentMethods;
                if (!_defaultSupportedPaymentMethods) {
                  _defaultSupportedPaymentMethods = self._defaultSupportedPaymentMethods;
                }
                obj.supportedPaymentMethods = _defaultSupportedPaymentMethods;
                ({ details: obj.details, options: obj.options } = arg0);
                _bus.emit(constants2.CAN_MAKE_PAYMENT, obj, (arg0) => {
                  const first = arg0[0];
                  if (first) {
                    arg1(closure_2._formatCanMakePaymentError(first));
                  } else {
                    arg0.sendEvent(closure_2._client, `payment-request.can-make-payment.${tmp2}`);
                    arg0(tmp2);
                  }
                });
              });
              tmp17 = promise;
            } else {
              prop = global.supportedPaymentMethods;
              item = prop.forEach((supportedMethods) => {
                supportedMethods = supportedMethods.supportedMethods;
              });
              tmp6 = assign;
            }
            _Promise3 = tmp2.Promise;
            tmp10 = closure_10;
            obj = {};
            tmp11 = errors;
            obj.type = errors.PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD.type;
            obj.code = errors.PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD.code;
            tmp12 = assign;
            str2 = " is not a supported payment method.";
            obj.message = `${closure_1} is not a supported payment method.`;
            prototype2 = closure_10.prototype;
            tmp13 = new.target;
            tmp14 = new.target;
            tmp15 = obj;
            tmp16 = new closure_10(obj);
            tmp2 = tmp16;
            promise = _Promise3.reject(tmp16);
          } else {
            tmp3 = closure_0;
            str = "payment-request.can-make-payment.not-available";
            sendEventResult = closure_0.sendEvent(tmp._client, "payment-request.can-make-payment.not-available");
            _Promise = Promise;
            flag = false;
            return Promise.resolve(false);
          }
          return;
        }
        teardown() {
          _bus = this._bus;
          teardownResult = _bus.teardown();
          parentNode = this._frame.parentNode;
          removeChildResult = parentNode.removeChild(this._frame);
          tmp3 = closure_3(this, closure_8(PaymentRequestComponent.prototype));
          sendEventResult = closure_0.sendEvent(this._client, "payment-request.teardown-completed");
          return Promise.resolve();
        }
        _formatTokenizationError(arg0) {
          self = this;
          name = global.name;
          if ("AbortError" === name) {
            tmp26 = closure_10;
            obj = {};
            tmp27 = errors;
            obj.type = errors.PAYMENT_REQUEST_CANCELED.type;
            obj.code = errors.PAYMENT_REQUEST_CANCELED.code;
            obj.message = errors.PAYMENT_REQUEST_CANCELED.message;
            obj1 = {};
            obj1.originalError = global;
            obj.details = obj1;
            prototype5 = closure_10.prototype;
            tmp28 = new.target;
            tmp29 = new.target;
            tmp30 = obj;
            tmp31 = new closure_10(obj);
            tmp32 = tmp31;
            tmp33 = closure_0;
            str2 = "payment-request.tokenize.canceled";
            sendEventResult = closure_0.sendEvent(self._client, "payment-request.tokenize.canceled");
            return tmp31;
          } else {
            str3 = "PAYMENT_REQUEST_INITIALIZATION_FAILED";
            if ("PAYMENT_REQUEST_INITIALIZATION_FAILED" === name) {
              tmp19 = closure_10;
              obj2 = {};
              tmp20 = errors;
              obj2.type = errors.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.type;
              obj2.code = errors.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.code;
              obj2.message = errors.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.message;
              obj3 = {};
              obj3.originalError = global;
              obj2.details = obj3;
              prototype4 = closure_10.prototype;
              tmp21 = new.target;
              tmp22 = new.target;
              tmp23 = obj2;
              tmp = new closure_10(obj2);
            } else {
              str4 = "BRAINTREE_GATEWAY_GOOGLE_PAYMENT_TOKENIZATION_ERROR";
              if ("BRAINTREE_GATEWAY_GOOGLE_PAYMENT_TOKENIZATION_ERROR" === name) {
                tmp14 = closure_10;
                obj4 = {};
                tmp15 = errors;
                obj4.type = errors.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.type;
                obj4.code = errors.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.code;
                obj4.message = errors.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.message;
                obj5 = {};
                obj5.originalError = global;
                obj4.details = obj5;
                prototype3 = closure_10.prototype;
                tmp16 = new.target;
                tmp17 = new.target;
                tmp18 = obj4;
                tmp = new closure_10(obj4);
              } else {
                str5 = "BRAINTREE_GATEWAY_GOOGLE_PAYMENT_PARSING_ERROR";
                if ("BRAINTREE_GATEWAY_GOOGLE_PAYMENT_PARSING_ERROR" === name) {
                  tmp9 = closure_10;
                  obj6 = {};
                  tmp10 = errors;
                  obj6.type = errors.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.type;
                  obj6.code = errors.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.code;
                  obj6.message = errors.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.message;
                  obj7 = {};
                  obj7.originalError = global;
                  obj6.details = obj7;
                  prototype2 = closure_10.prototype;
                  tmp11 = new.target;
                  tmp12 = new.target;
                  tmp13 = obj6;
                  tmp = new closure_10(obj6);
                } else {
                  tmp = closure_10;
                  obj = {};
                  tmp2 = errors;
                  obj.code = errors.PAYMENT_REQUEST_NOT_COMPLETED.code;
                  CUSTOMER = global.type;
                  if (!CUSTOMER) {
                    tmp3 = closure_10;
                    CUSTOMER = closure_10.types.CUSTOMER;
                  }
                  obj.type = CUSTOMER;
                  tmp4 = errors;
                  obj.message = errors.PAYMENT_REQUEST_NOT_COMPLETED.message;
                  obj8 = {};
                  obj8.originalError = global;
                  obj.details = obj8;
                  prototype = tmp.prototype;
                  tmp5 = new.target;
                  tmp6 = new.target;
                  tmp7 = obj;
                  tmp = new tmp(obj);
                }
              }
            }
            tmp24 = closure_0;
            str = "payment-request.tokenize.failed";
            sendEventResult1 = closure_0.sendEvent(self._client, "payment-request.tokenize.failed");
            return tmp;
          }
        }
        _formatCanMakePaymentError(arg0) {
          name = global.name;
          if ("PAYMENT_REQUEST_INITIALIZATION_FAILED" === name) {
            tmp12 = closure_10;
            obj = {};
            tmp13 = errors;
            obj.type = errors.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.type;
            obj.code = errors.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.code;
            obj.message = errors.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.message;
            obj1 = {};
            obj1.originalError = global;
            obj.details = obj1;
            prototype3 = closure_10.prototype;
            tmp14 = new.target;
            tmp15 = new.target;
            tmp16 = obj;
            tmp6 = new closure_10(obj);
          } else {
            str = "NotAllowedError";
            if ("NotAllowedError" === name) {
              tmp7 = closure_10;
              obj2 = {};
              tmp8 = errors;
              obj2.type = errors.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED.type;
              obj2.code = errors.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED.code;
              obj2.message = errors.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED.message;
              obj3 = {};
              obj3.originalError = global;
              obj2.details = obj3;
              prototype2 = closure_10.prototype;
              tmp9 = new.target;
              tmp10 = new.target;
              tmp11 = obj2;
              tmp6 = new closure_10(obj2);
            } else {
              tmp = closure_10;
              obj = {};
              tmp2 = errors;
              obj.code = errors.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED.code;
              obj.type = errors.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED.type;
              obj.message = errors.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED.message;
              obj4 = {};
              obj4.originalError = global;
              obj.details = obj4;
              prototype = closure_10.prototype;
              tmp3 = new.target;
              tmp4 = new.target;
              tmp5 = obj;
              tmp6 = new closure_10(obj);
            }
          }
          sendEventResult = closure_0.sendEvent(this._client, "payment-request.can-make-payment.failed");
          return tmp6;
        }
      }
      let closure_0 = global("../../lib/analytics");
      const assign = global("../../lib/assign").assign;
      let closure_2 = global("framebus");
      let closure_3 = global("../../lib/convert-methods-to-error");
      let closure_4 = global("../../lib/generate-google-pay-configuration");
      let closure_5 = global("@braintree/iframer");
      let closure_6 = global("@braintree/uuid");
      let closure_7 = global("../../lib/use-min");
      let closure_8 = global("../../lib/methods");
      const globalResult = global("@braintree/event-emitter");
      let closure_10 = global("../../lib/braintree-error");
      const globalResult1 = global("../shared/constants");
      ({ events: closure_12, errors: closure_13 } = globalResult1);
      let closure_14 = { "Bool(true)": null, "Bool(true)": "PAYPAL_POPUP_OPEN_FAILED", "Bool(true)": "PayPal popup failed to open, make sure to tokenize in response to a user action.", "Bool(true)": null, "Bool(true)": "PAYPAL_POPUP_CLOSED", "Bool(true)": "Customer closed PayPal popup before authorizing.", "Bool(true)": "clientApi", "Bool(true)": "post" };
      const child = globalResult.createChild(PaymentRequestComponent);
      module.exports = global("@braintree/wrap-promise").wrapPrototype(PaymentRequestComponent);
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./external/payment-request");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          const obj = { name: "Payment Request", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify({ name: "Payment Request", client: client.client, authorization: client.authorization });
          return closure_1.verify({ name: "Payment Request", client: client.client, authorization: client.authorization }).then((self) => closure_2.create({ authorization: self.authorization, client: self.client, debug: self.debug, assetsUrl: closure_3.create(self.authorization), name: "Payment Request" })).then((client) => {
            client.client = client;
            return new client(client).initialize();
          });
        }),
        VERSION: "3.112.1"
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const obj = {};
      const globalResult = global("../../lib/enumerate");
      obj.events = globalResult([], "payment-request:");
      obj.errors = global("./errors");
      obj.SUPPORTED_METHODS = { 1557685196: null, -1432290462: null };
      module.exports = obj;
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      let obj = { placeholder: "User canceled SEPA authorization", live-guild-stage: "customer-canceled", guild-event: null, type: globalResult.types.MERCHANT };
      obj = { placeholder: null, live-guild-stage: "SEPA_INVALID_MANDATE_TYPE", guild-event: "SEPA mandate type is invalid", type: globalResult.types.CUSTOMER };
      obj = { placeholder: null, live-guild-stage: "SEPA_TOKENIZATION_FAILED", guild-event: "SEPA encountered a problem", type: globalResult.types.MERCHANT };
      const obj1 = { placeholder: false, live-guild-stage: false, guild-event: false, type: globalResult.types.UNKNOWN };
      const obj2 = { placeholder: 1359020033, live-guild-stage: -1086160942, guild-event: 1358954831, type: globalResult.types.MERCHANT };
      const obj4 = { placeholder: 14169555525878416000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, live-guild-stage: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008487983165837, guild-event: 38241977507830670000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, type: globalResult.types.MERCHANT };
      const obj5 = { placeholder: 400, live-guild-stage: 400, guild-event: null, type: globalResult.types.UNKNOWN };
      const obj6 = { placeholder: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002871124056445369, live-guild-stage: 16125685661271263000000000000000000000000000000000000000000000000000000000000000000, guild-event: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007293102510613146, type: globalResult.types.MERCHANT };
      const obj7 = { placeholder: true, live-guild-stage: "<string:18714945>", guild-event: "<string:1582366976>", type: globalResult.types.MERCHANT };
      module.exports = { PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS: obj, PAYMENT_REQUEST_CANCELED: obj, PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED: obj, PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED: obj1, PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED: obj2, PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD: { type: globalResult.types.MERCHANT, code: "PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD" }, PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE: obj4, PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR: obj5, PAYMENT_REQUEST_NOT_COMPLETED: { enabled: null, channel_id: "3D Secure Authorization Frame" }, PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE: obj6, PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED: obj7 };
    },
    { ../../lib/braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      let obj = { placeholder: "useDueInString", live-guild-stage: "_user", guild-event: "Array", type: globalResult.types.MERCHANT };
      obj = { placeholder: null, live-guild-stage: null, guild-event: null, type: globalResult.types.MERCHANT };
      obj = { placeholder: true, live-guild-stage: true, guild-event: "<string:19854401>", type: globalResult.types.NETWORK };
      const obj1 = { placeholder: "Text", live-guild-stage: "from", guild-event: "default", type: globalResult.types.NETWORK };
      const obj2 = { placeholder: "mutedBackground", live-guild-stage: "%ArrayProto_values%", guild-event: "isArrayBuffer", type: globalResult.types.MERCHANT };
      const obj4 = { placeholder: 16125687773536794000000000000000000000000000000000000000000000000000000000000000000, live-guild-stage: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007293182365559334, guild-event: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000163273262130048, type: globalResult.types.NETWORK };
      const obj5 = { placeholder: "<string:19418945>", live-guild-stage: "<string:4266721536>", guild-event: "<string:747585828>", type: globalResult.types.MERCHANT };
      const obj6 = { placeholder: 19697473, live-guild-stage: 1934688512, guild-event: 1112949052, type: globalResult.types.CUSTOMER };
      const obj7 = { placeholder: 1112949052, live-guild-stage: 1359020033, guild-event: -2092876662, type: globalResult.types.MERCHANT };
      const obj8 = { placeholder: null, live-guild-stage: null, guild-event: null, type: globalResult.types.MERCHANT };
      const obj9 = { placeholder: -27377348, live-guild-stage: 1359020033, guild-event: 490803807, type: globalResult.types.MERCHANT };
      module.exports = { PAYPAL_NOT_ENABLED: obj, PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED: obj, PAYPAL_ACCOUNT_TOKENIZATION_FAILED: obj, PAYPAL_FLOW_FAILED: obj1, PAYPAL_FLOW_OPTION_REQUIRED: obj2, PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED: { type: globalResult.types.MERCHANT, code: "PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED" }, PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED: obj4, PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED: obj5, PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED: obj6, PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS: obj7, PAYPAL_INVALID_PAYMENT_OPTION: obj8, PAYPAL_MISSING_REQUIRED_OPTION: obj9 };
    },
    { ../lib/braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/basic-component-verification");
      let closure_1 = global("./paypal-checkout");
      const globalResult = global("@braintree/wrap-promise");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          return closure_0.verify({ name: "PayPal Checkout", client: client.client, authorization: client.authorization }).then(() => new closure_1(arg0)._initialize(arg0));
        }),
        isSupported() {
          return true;
        },
        VERSION: "3.112.1"
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class PayPalCheckout {
        constructor(arg0) {
          this._merchantAccountId = global.merchantAccountId;
          this._autoSetDataUserIdToken = Boolean(global.autoSetDataUserIdToken);
          return;
        }
        _initialize(arg0) {
          self = this;
          if (global.client) {
            client = global.client;
            configuration = client.getConfiguration();
            obj = {};
            obj.fingerprint = configuration.authorizationFingerprint;
            obj.environment = configuration.gatewayConfiguration.environment;
            self._authorizationInformation = obj;
          } else {
            tmp = closure_10;
            tmp2 = closure_10(global.authorization);
            obj = {};
            obj.fingerprint = tmp2.attrs.authorizationFingerprint;
            obj.environment = tmp2.environment;
            self._authorizationInformation = obj;
          }
          obj1 = { authorization: global.authorization, client: global.client, debug: global.debug, assetsUrl: closure_3.create(global.authorization), name: "PayPal Checkout" };
          obj2 = closure_2.create(obj1);
          fn = function(getConfiguration) {
            let rejectResult = getConfiguration;
            const self = this;
            this._configuration = getConfiguration.getConfiguration();
            if (!this._merchantAccountId) {
              if (self._configuration.gatewayConfiguration.paypalEnabled) {
                if (true === self._configuration.gatewayConfiguration.paypal.environmentNoNetwork) {
                  const prototype2 = ctor.prototype;
                  const tmp12 = new ctor(constants.PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED);
                  self._setupError = tmp12;
                }
              } else {
                const prototype = ctor.prototype;
                const tmp6 = new ctor(constants.PAYPAL_NOT_ENABLED);
                self._setupError = tmp6;
              }
            }
            if (self._setupError) {
              rejectResult = Promise.reject(self._setupError);
            } else {
              closure_0.sendEvent(rejectResult, "paypal-checkout.initialized");
              self._frameServicePromise = self._setupFrameService(rejectResult);
            }
            return rejectResult;
          };
          self._clientPromise = obj2.then(fn.bind(self));
          if (global.client) {
            _clientPromise = self._clientPromise;
            fn2 = function() {
              return this;
            };
            nextPromise = _clientPromise.then(fn2.bind(self));
          } else {
            tmp4 = globalThis;
            _Promise = Promise;
            nextPromise = Promise.resolve(self);
          }
          return nextPromise;
        }
        _setupFrameService(arg0) {
          closure_0 = global;
          tmp = new closure_4();
          assign = tmp;
          configuration = global.getConfiguration();
          f30527 = setTimeout(() => {
            arg0.sendEvent(arg0, "paypal-checkout.frame-service.timed-out");
            tmp.reject(new closure_5(constants.PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED));
          }, INTEGRATION_TIMEOUT_MS);
          this._assetsUrl = `${tmp2.gatewayConfiguration.paypal.assetsUrl}/web/3.112.1`;
          this._isDebug = configuration.isDebug;
          this._loadingFrameUrl = `${`${this._assetsUrl}/html/paypal-landing-frame`}${closure_12(this._isDebug)}.html`;
          obj = { name: "braintreepaypallanding", dispatchFrameUrl: `${`${this._assetsUrl}/html/dispatch-frame`}${closure_12(this._isDebug)}.html`, openFrameUrl: this._loadingFrameUrl };
          fn = function(_frameService) {
            this._frameService = _frameService;
            clearTimeout(closure_2);
            tmp.resolve();
          };
          obj = closure_9.create(obj, fn.bind(this));
          return tmp;
        }
        createPayment(arg0) {
          self = this;
          closure_0 = global;
          if (global) {
            tmp = closure_8;
            FLOW_ENDPOINTS = closure_8.FLOW_ENDPOINTS;
            if (FLOW_ENDPOINTS.hasOwnProperty(global.flow)) {
              tmp4 = closure_0;
              str = "paypal-checkout.createPayment";
              sendEventResult = closure_0.sendEvent(self._clientPromise, "paypal-checkout.createPayment");
              result = self._createPaymentResource(global);
              nextPromise = result.then((paymentResource) => {
                if ("checkout" === paymentResource.flow) {
                  let tokenId = closure_14.parse(paymentResource.paymentResource.redirectUrl).token;
                } else {
                  tokenId = paymentResource.agreementSetup.tokenId;
                }
                return tokenId;
              });
            }
            return nextPromise;
          }
          tmp2 = new closure_5(closure_7.PAYPAL_FLOW_OPTION_REQUIRED);
          nextPromise = Promise.reject(tmp2);
          return;
        }
        _createPaymentResource(arg0, arg1) {
          obj = module;
          self = this;
          closure_0 = global;
          assign = module;
          closure_2 = this;
          closure_3 = `paypal_hermes/${closure_8.FLOW_ENDPOINTS[global.flow]}`;
          this._flow = global.flow;
          delete r1.intentFromCreatePayment;
          if (!module) {
            obj = {};
          }
          assign = obj;
          if (true === global.offerCredit) {
            tmp = closure_0;
            str = "paypal-checkout.credit.offered";
            sendEventResult = closure_0.sendEvent(self._clientPromise, "paypal-checkout.credit.offered");
          }
          _clientPromise = self._clientPromise;
          nextPromise = _clientPromise.then((request) => {
            const obj = { endpoint: closure_3, method: "post", data: self._formatPaymentResourceData(request, obj) };
            return request.request(obj).then((arg0) => {
              closure_2.intentFromCreatePayment = intent.intent;
              return arg0;
            });
          });
          return nextPromise.catch((details) => {
            if (self._setupError) {
              let rejectResult = Promise.reject(self._setupError);
            } else {
              if (422 === tmp) {
                let obj = { type: constants.PAYPAL_INVALID_PAYMENT_OPTION.type, code: constants.PAYPAL_INVALID_PAYMENT_OPTION.code, message: constants.PAYPAL_INVALID_PAYMENT_OPTION.message };
                obj = { originalError: details };
                obj.details = obj;
                const prototype = ctor.prototype;
                const tmp12 = new ctor(obj);
                rejectResult = Promise.reject(tmp12);
              } else {
                obj = { type: constants.PAYPAL_FLOW_FAILED.type, code: constants.PAYPAL_FLOW_FAILED.code, message: constants.PAYPAL_FLOW_FAILED.message };
                rejectResult = Promise.reject(callback(details, obj));
              }
              const tmp = details.details && details.details.httpStatus;
            }
            return rejectResult;
          });
        }
        updatePayment(arg0) {
          self = this;
          closure_0 = global;
          assign = this;
          if (global) {
            tmp = closure_8;
            if (!self._hasMissingOption(global, closure_8.REQUIRED_OPTIONS)) {
              tmp2 = closure_0;
              sendEvent = closure_0.sendEvent;
              _clientPromise = self._clientPromise;
              if (self._verifyConsistentCurrency(global)) {
                str3 = "paypal-checkout.updatePayment";
                sendEventResult = sendEvent(_clientPromise, "paypal-checkout.updatePayment");
                _clientPromise = self._clientPromise;
                nextPromise = _clientPromise.then((request) => {
                  const obj = { month: true, dayOfYear: true, data: self._formatUpdatePaymentData(request) };
                  return request.request(obj);
                });
                catchPromise = nextPromise.catch((details) => {
                  if (422 === tmp) {
                    details.sendEvent(self._clientPromise, "paypal-checkout.updatePayment.invalid");
                    let obj = { type: constants.PAYPAL_INVALID_PAYMENT_OPTION.type, code: constants.PAYPAL_INVALID_PAYMENT_OPTION.code, message: constants.PAYPAL_INVALID_PAYMENT_OPTION.message };
                    obj = { originalError: details };
                    obj.details = obj;
                    const prototype = ctor.prototype;
                    const tmp11 = new ctor(obj);
                    let rejectResult = Promise.reject(tmp11);
                  } else {
                    details.sendEvent(self._clientPromise, `paypal-checkout.updatePayment.${closure_7.PAYPAL_FLOW_FAILED.code}`);
                    obj = { type: constants.PAYPAL_FLOW_FAILED.type, code: constants.PAYPAL_FLOW_FAILED.code, message: constants.PAYPAL_FLOW_FAILED.message };
                    rejectResult = Promise.reject(callback(details, obj));
                  }
                  return rejectResult;
                });
              } else {
                str = "paypal-checkout.updatePayment.inconsistent-currencies";
                sendEventResult1 = sendEvent(_clientPromise, "paypal-checkout.updatePayment.inconsistent-currencies");
                tmp4 = globalThis;
                _Promise = Promise;
                tmp5 = closure_5;
                obj = {};
                tmp6 = closure_7;
                obj.type = closure_7.PAYPAL_INVALID_PAYMENT_OPTION.type;
                obj.code = closure_7.PAYPAL_INVALID_PAYMENT_OPTION.code;
                obj.message = closure_7.PAYPAL_INVALID_PAYMENT_OPTION.message;
                obj = {};
                _Error = Error;
                prototype = Error.prototype;
                tmp7 = new.target;
                str2 = "One or more shipping option currencies differ from checkout currency.";
                tmp8 = new.target;
                error = new Error("One or more shipping option currencies differ from checkout currency.");
                tmp10 = error;
                obj.originalError = error;
                obj.details = obj;
                prototype2 = closure_5.prototype;
                tmp11 = new.target;
                tmp12 = new.target;
                tmp13 = obj;
                tmp14 = new closure_5(obj);
                tmp15 = tmp14;
                catchPromise = Promise.reject(tmp14);
              }
            }
            return catchPromise;
          }
          sendEventResult2 = closure_0.sendEvent(self._clientPromise, "paypal-checkout.updatePayment.missing-options");
          tmp19 = new closure_5(closure_7.PAYPAL_MISSING_REQUIRED_OPTION);
          catchPromise = Promise.reject(tmp19);
          return;
        }
        startVaultInitiatedCheckout(arg0) {
          self = this;
          closure_0 = global;
          closure_2 = this;
          if (this._vaultInitiatedCheckoutInProgress) {
            tmp18 = closure_0;
            str5 = "paypal-checkout.startVaultInitiatedCheckout.error.already-in-progress";
            sendEventResult = closure_0.sendEvent(self._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.error.already-in-progress");
            tmp20 = globalThis;
            _Promise2 = Promise;
            tmp21 = closure_5;
            tmp22 = closure_7;
            prototype2 = closure_5.prototype;
            tmp23 = new.target;
            tmp24 = new.target;
            tmp25 = new closure_5(closure_7.PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS);
            tmp26 = tmp25;
            rejectResult = Promise.reject(tmp25);
          } else {
            tmp = INTEGRATION_TIMEOUT_MS;
            item = INTEGRATION_TIMEOUT_MS.forEach((arg0) => {

            });
            tmp3 = assign;
            if (assign) {
              tmp9 = globalThis;
              _Promise = Promise;
              tmp10 = closure_5;
              obj = {};
              tmp11 = closure_7;
              obj.type = closure_7.PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED.type;
              obj.code = closure_7.PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED.code;
              tmp12 = assign;
              str3 = "Required param ";
              str4 = " is missing.";
              obj.message = `Required param ${closure_1} is missing.`;
              prototype = closure_5.prototype;
              tmp13 = new.target;
              tmp14 = new.target;
              tmp15 = obj;
              tmp16 = new closure_5(obj);
              tmp17 = tmp16;
              rejectResult = Promise.reject(tmp16);
            } else {
              flag = true;
              self._vaultInitiatedCheckoutInProgress = true;
              _addModalBackdropResult = self._addModalBackdrop(global);
              tmp5 = assign;
              obj = {};
              str = "checkout";
              obj.flow = "checkout";
              closure_0 = assign({}, global, obj);
              tmp6 = closure_0;
              str2 = "paypal-checkout.startVaultInitiatedCheckout.started";
              sendEventResult1 = closure_0.sendEvent(self._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.started");
              result = self._waitForVaultInitiatedCheckoutDependencies();
              nextPromise = result.then(() => {
                const tmp = new closure_4();
                let closure_0 = tmp;
                const result = self._createPaymentResource(closure_0, { returnUrl: self._constructVaultCheckutUrl("redirect-frame"), cancelUrl: self._constructVaultCheckutUrl("cancel-frame") });
                const _frameService = self._frameService;
                const obj = { returnUrl: self._constructVaultCheckutUrl("redirect-frame"), cancelUrl: self._constructVaultCheckutUrl("cancel-frame") };
                _frameService.open({}, self._createFrameServiceCallback(tmp));
                return result.then((paymentResource) => {
                  const _frameService = _frameService._frameService;
                  _frameService.redirect(paymentResource.paymentResource.redirectUrl);
                  return tmp;
                });
              });
              catchPromise = nextPromise.catch((code) => {
                self._vaultInitiatedCheckoutInProgress = false;
                self._removeModalBackdrop();
                if ("FRAME_SERVICE_FRAME_CLOSED" === code.code) {
                  closure_0.sendEvent(self._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.canceled.by-customer");
                  const prototype2 = ctor.prototype;
                  const tmp25 = new ctor(constants.PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED);
                  let rejectResult = Promise.reject(tmp25);
                } else {
                  if (self._frameService) {
                    const _frameService = self._frameService;
                    _frameService.close();
                  }
                  if (code.code) {
                    code = code.code;
                    if (code.indexOf("FRAME_SERVICE_FRAME_OPEN_FAILED") > -1) {
                      closure_0.sendEvent(self._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.failed.popup-not-opened");
                      let obj = { code: constants.PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED.code, type: constants.PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED.type, message: constants.PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED.message };
                      obj = { originalError: code };
                      obj.details = obj;
                      const prototype = ctor.prototype;
                      const tmp15 = new ctor(obj);
                      rejectResult = Promise.reject(tmp15);
                    }
                  }
                  rejectResult = Promise.reject(code);
                }
                return rejectResult;
              });
              rejectResult = catchPromise.then((arg0) => {
                const _frameService = self._frameService;
                _frameService.close();
                self._vaultInitiatedCheckoutInProgress = false;
                self._removeModalBackdrop();
                closure_0.sendEvent(self._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.succeeded");
                return Promise.resolve(arg0);
              });
            }
          }
          return rejectResult;
        }
        _addModalBackdrop(arg0) {
          self = this;
          if (!global.optOutOfModalBackdrop) {
            if (!self._modalBackdrop) {
              tmp = globalThis;
              _document = document;
              str = "div";
              self._modalBackdrop = document.createElement("div");
              _modalBackdrop = self._modalBackdrop;
              str2 = "data-braintree-paypal-vault-initiated-checkout-modal";
              flag = true;
              attr = _modalBackdrop.setAttribute("data-braintree-paypal-vault-initiated-checkout-modal", true);
              str3 = "fixed";
              self._modalBackdrop.style.position = "fixed";
              num = 0;
              self._modalBackdrop.style.top = 0;
              self._modalBackdrop.style.bottom = 0;
              self._modalBackdrop.style.left = 0;
              self._modalBackdrop.style.right = 0;
              num2 = 9999;
              self._modalBackdrop.style.zIndex = 9999;
              str4 = "black";
              self._modalBackdrop.style.background = "black";
              str5 = "0.7";
              self._modalBackdrop.style.opacity = "0.7";
              _modalBackdrop2 = self._modalBackdrop;
              fn = function() {
                const result = this.focusVaultInitiatedCheckoutWindow();
              };
              str6 = "click";
              listener = _modalBackdrop2.addEventListener("click", fn.bind(self));
            }
            tmp4 = globalThis;
            _document2 = document;
            body = document.body;
            appendChildResult = body.appendChild(self._modalBackdrop);
          }
          return;
        }
        _removeModalBackdrop() {
          self = this;
          tmp = this._modalBackdrop && self._modalBackdrop.parentNode;
          if (tmp) {
            parentNode = self._modalBackdrop.parentNode;
            removeChildResult = parentNode.removeChild(self._modalBackdrop);
          }
          return;
        }
        closeVaultInitiatedCheckoutWindow() {
          self = this;
          if (this._vaultInitiatedCheckoutInProgress) {
            tmp = closure_0;
            str = "paypal-checkout.startVaultInitiatedCheckout.canceled.by-merchant";
            sendEventResult = closure_0.sendEvent(self._clientPromise, "paypal-checkout.startVaultInitiatedCheckout.canceled.by-merchant");
          }
          result = self._waitForVaultInitiatedCheckoutDependencies();
          fn = function() {
            const _frameService = this._frameService;
            _frameService.close();
          };
          return result.then(fn.bind(self));
        }
        focusVaultInitiatedCheckoutWindow() {
          result = this._waitForVaultInitiatedCheckoutDependencies();
          fn = function() {
            const _frameService = this._frameService;
            _frameService.focus();
          };
          return result.then(fn.bind(this));
        }
        _createFrameServiceCallback(arg0) {
          closure_0 = global;
          assign = this;
          return (arg0, arg1) => {
            if (arg0) {
              arg0.reject(arg0);
            } else if (arg1) {
              const _frameService = self._frameService;
              _frameService.redirect(self._loadingFrameUrl);
              const obj = {};
              ({ token: obj.paymentToken, PayerID: obj.payerID, paymentId: obj.paymentID, orderId: obj.orderID } = arg1);
              const tokenizePaymentResult = self.tokenizePayment(obj);
              self.tokenizePayment(obj).then((arg0) => {
                closure_0.resolve(arg0);
              }).catch((arg0) => {
                closure_0.reject(arg0);
              });
              const nextPromise = self.tokenizePayment(obj).then((arg0) => {
                closure_0.resolve(arg0);
              });
            }
          };
        }
        _waitForVaultInitiatedCheckoutDependencies() {
          closure_0 = this;
          _clientPromise = this._clientPromise;
          return _clientPromise.then(() => self._frameServicePromise);
        }
        _constructVaultCheckutUrl(arg0) {
          text = `${this._assetsUrl}/html/${global}`;
          return text + closure_12(this._isDebug) + ".html?channel=" + this._frameService._serviceId;
        }
        tokenizePayment(arg0) {
          self = this;
          assign = this;
          obj = { flow: this._flow, intent: tmp };
          tmp = global.intent || self.intentFromCreatePayment;
          closure_2 = obj;
          closure_3 = { ecToken: global.paymentToken, billingToken: global.billingToken, payerId: global.payerID, paymentId: global.paymentID, orderId: global.orderID, shippingOptionsId: global.shippingOptionsId };
          flag = true;
          if (global.hasOwnProperty("vault")) {
            flag = global.vault;
          }
          obj.vault = flag;
          sendEventResult = closure_0.sendEvent(self._clientPromise, "paypal-checkout.tokenization.started");
          _clientPromise = self._clientPromise;
          nextPromise = _clientPromise.then((request) => {
            const obj = { data: self._formatTokenizeData(obj, closure_3) };
            return request.request(obj);
          });
          nextPromise1 = nextPromise.then((arg0) => {
            let closure_0 = self._formatTokenizePayload(arg0);
            closure_0.sendEvent(self._clientPromise, "paypal-checkout.tokenization.success");
            if (closure_0.creditFinancingOffered) {
              closure_0.sendEvent(self._clientPromise, "paypal-checkout.credit.accepted");
            }
            return closure_0;
          });
          return nextPromise1.catch((arg0) => {
            if (self._setupError) {
              let rejectResult = Promise.reject(self._setupError);
            } else {
              closure_0.sendEvent(self._clientPromise, "paypal-checkout.tokenization.failed");
              const obj = { type: constants.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.type, code: constants.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.code, message: constants.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.message };
              rejectResult = Promise.reject(callback(arg0, obj));
            }
            return rejectResult;
          });
        }
        getClientId() {
          _clientPromise = this._clientPromise;
          return _clientPromise.then((getConfiguration) => getConfiguration.getConfiguration().gatewayConfiguration.paypal.clientId);
        }
        loadPayPalSDK(arg0) {
          self = this;
          closure_0 = global;
          promise = new closure_4();
          assign = promise;
          dataAttributes = global;
          if (global) {
            dataAttributes = global.dataAttributes;
          }
          if (!dataAttributes) {
            dataAttributes = {};
          }
          closure_2 = dataAttributes;
          tmp = dataAttributes.user-id-token || dataAttributes.data-user-id-token;
          closure_3 = tmp;
          if (!self._configuration) {
            if (!tmp) {
              fingerprint = self._authorizationInformation.fingerprint;
              if (fingerprint) {
                str = self._authorizationInformation.fingerprint;
                str2 = "?";
                num = 0;
                fingerprint = str.split("?")[0];
              }
              closure_3 = fingerprint;
            }
            tmp2 = globalThis;
            _document = document;
            str3 = "script";
            self._paypalScript = document.createElement("script");
            tmp3 = assign;
            obj = {};
            str4 = "buttons";
            obj.components = "buttons";
            tmp4 = assign({}, obj, global);
            closure_0 = tmp4;
            delete r1.dataAttributes;
            str5 = tmp4.intent;
            if (tmp4.vault) {
              if (!str5) {
                str5 = "tokenize";
              }
              tmp4.intent = str5;
            } else {
              str6 = str5;
              if (!str5) {
                str6 = "authorize";
              }
              tmp4.intent = str6;
              tmp4.currency = tmp4.currency || "USD";
            }
            self._paypalScript.onload = () => {
              promise.resolve();
            };
            _Object = Object;
            keys = Object.keys(dataAttributes);
            fn = function(arg0) {
              const _paypalScript = this._paypalScript;
              const attr = _paypalScript.setAttribute(`data-${arg0.replace(/^data\-/, "")}`, dataAttributes[arg0]);
            };
            item = keys.forEach(fn.bind(self));
            if (tmp4.client-id) {
              _Promise = Promise;
              resolved = Promise.resolve(tmp4.client-id);
            } else {
              resolved = self.getClientId();
            }
            fn2 = function(client-id) {
              const self = this;
              tmp4.client-id = client_id;
              if (tmp) {
                const _paypalScript = self._paypalScript;
                const attr = _paypalScript.setAttribute("data-user-id-token", fingerprint);
                const obj = { id: client_id, userIdToken: fingerprint, amount: dataAttributes.amount, currency: fingerprint.currency, merchantId: fingerprint.merchant-id };
                self._attachPreloadPixel(obj);
              }
              self._paypalScript.src = closure_14.queryify("https://www.paypal.com/sdk/js?", tmp4);
              head.insertBefore(self._paypalScript, document.head.firstElementChild);
            };
            nextPromise = resolved.then(fn2.bind(self));
            fn3 = function() {
              return this;
            };
            return promise.then(fn3.bind(self));
          } else {
            if (dataAttributes.client-metadata-id) {
              sessionId = dataAttributes.client-metadata-id;
            } else {
              sessionId = self._configuration.analyticsMetadata.sessionId;
            }
            dataAttributes.client-metadata-id = sessionId;
          }
          return;
        }
        _attachPreloadPixel(arg0) {
          str = "sandbox.";
          ({ id, userIdToken } = global);
          if ("production" === this._authorizationInformation.environment) {
            str = "";
          }
          obj = { client-id: id, user-id-token: userIdToken };
          replaced = "https://www.{ENV}paypal.com/smart/buttons/preload".replace("{ENV}", str);
          if (global.amount) {
            obj.amount = global.amount;
          }
          if (global.currency) {
            obj.currency = global.currency;
          }
          if (global.merchantId) {
            obj.merchant-id = global.merchantId;
          }
          xMLHttpRequest = new XMLHttpRequest();
          openResult = xMLHttpRequest.open("GET", closure_14.queryify(replaced, obj));
          sendResult = xMLHttpRequest.send();
          return;
        }
        _formatPaymentResourceData(arg0, arg1) {
          self = this;
          str = global.intent;
          obj = {};
          str2 = module.returnUrl;
          if (!str2) {
            str2 = "https://www.paypal.com/checkoutnow/error";
          }
          obj.returnUrl = str2;
          obj.cancelUrl = module.cancelUrl || "https://www.paypal.com/checkoutnow/error";
          obj.offerPaypalCredit = true === global.offerCredit;
          obj.merchantAccountId = self._merchantAccountId;
          obj = { brandName: tmp, localeCode: global.locale, noShipping: str3.toString(), addressOverride: false === global.shippingAddressEditable, landingPageType: global.landingPageType };
          tmp = global.displayName || this._configuration.gatewayConfiguration.paypal.displayName;
          str3 = !global.enableShippingAddress;
          obj.experienceProfile = obj;
          ({ shippingOptions: obj.shippingOptions, userAuthenticationEmail: obj.payer_email } = global);
          if ("checkout" === global.flow) {
            ({ amount: obj.amount, currency: obj.currencyIsoCode, requestBillingAgreement: obj.requestBillingAgreement } = global);
            if (str) {
              str4 = "capture";
              if ("capture" === str) {
                str = "sale";
              }
              obj.intent = str;
            }
            str5 = "lineItems";
            if (global.hasOwnProperty("lineItems")) {
              obj.lineItems = global.lineItems;
            }
            str6 = "vaultInitiatedCheckoutPaymentMethodToken";
            if (global.hasOwnProperty("vaultInitiatedCheckoutPaymentMethodToken")) {
              obj.vaultInitiatedCheckoutPaymentMethodToken = global.vaultInitiatedCheckoutPaymentMethodToken;
            }
            str7 = "shippingOptions";
            if (global.hasOwnProperty("shippingOptions")) {
              obj.shippingOptions = global.shippingOptions;
            }
            for (const key10057 in arg0.shippingAddressOverride) {
              tmp3 = key10057;
              shippingAddressOverride = arg0.shippingAddressOverride;
              if (!shippingAddressOverride.hasOwnProperty(key10057)) {
                continue;
              } else {
                obj[key10057] = arg0.shippingAddressOverride[key10057];
                // continue
              }
              continue;
            }
            str8 = "billingAgreementDetails";
            if (global.hasOwnProperty("billingAgreementDetails")) {
              obj.billingAgreementDetails = global.billingAgreementDetails;
            }
          } else {
            obj.shippingAddress = global.shippingAddressOverride;
            if (global.billingAgreementDescription) {
              obj.description = global.billingAgreementDescription;
            }
            if (global.planType) {
              obj.plan_type = global.planType;
              if (global.planMetadata) {
                tmp2 = closure_15;
                obj.plan_metadata = closure_15(global.planMetadata);
              }
            }
          }
          self._riskCorrelationId = global.riskCorrelationId;
          if (global.riskCorrelationId) {
            obj.correlationId = self._riskCorrelationId;
          }
          return obj;
        }
        _verifyConsistentCurrency(arg0) {
          closure_0 = global;
          currency = global.currency;
          if (currency) {
            str = "shippingOptions";
            currency = global.hasOwnProperty("shippingOptions");
          }
          if (currency) {
            tmp = globalThis;
            _Array = Array;
            currency = Array.isArray(global.shippingOptions);
          }
          everyResult = !currency;
          if (!everyResult) {
            shippingOptions = global.shippingOptions;
            everyResult = shippingOptions.every((amount) => {
              let tmp = amount.amount && amount.amount.currency;
              if (tmp) {
                const formatted = amount.currency.toLowerCase();
                tmp = formatted === amount.amount.currency.toLowerCase();
                const str = amount.currency;
                const str2 = amount.amount.currency;
              }
              return tmp;
            });
          }
          return everyResult;
        }
        _hasMissingOption(arg0, arg1) {
          items = module;
          if (!module) {
            items = [];
          }
          if (!global.hasOwnProperty("amount")) {
            str = "lineItems";
            if (!global.hasOwnProperty("lineItems")) {
              flag = true;
              return true;
            }
          }
          num = 0;
          if (0 < items.length) {
            while (global.hasOwnProperty(items[num])) {
              num = num + 1;
            }
            flag2 = true;
            return true;
          }
          return false;
        }
        _formatUpdatePaymentData(arg0) {
          obj = { merchantAccountId: this._merchantAccountId };
          orderId = global.paymentId;
          if (!orderId) {
            orderId = global.orderId;
          }
          obj.paymentId = orderId;
          obj.currencyIsoCode = global.currency;
          if (global.hasOwnProperty("amount")) {
            obj.amount = global.amount;
          }
          if (global.hasOwnProperty("lineItems")) {
            obj.lineItems = global.lineItems;
          }
          if (global.hasOwnProperty("shippingOptions")) {
            obj.shippingOptions = global.shippingOptions;
          }
          if (global.hasOwnProperty("amountBreakdown")) {
            obj.amountBreakdown = global.amountBreakdown;
          }
          if (global.hasOwnProperty("shippingAddress")) {
            tmp = closure_0;
            str = "paypal-checkout.updatePayment.shippingAddress.provided.by-the-merchant";
            sendEventResult = closure_0.sendEvent(this._clientPromise, "paypal-checkout.updatePayment.shippingAddress.provided.by-the-merchant");
            obj.line1 = global.shippingAddress.line1;
            shippingAddress = global.shippingAddress;
            str2 = "line2";
            if (shippingAddress.hasOwnProperty("line2")) {
              obj.line2 = global.shippingAddress.line2;
            }
            obj.city = global.shippingAddress.city;
            obj.state = global.shippingAddress.state;
            obj.postalCode = global.shippingAddress.postalCode;
            obj.countryCode = global.shippingAddress.countryCode;
            shippingAddress2 = global.shippingAddress;
            str3 = "phone";
            if (shippingAddress2.hasOwnProperty("phone")) {
              obj.phone = global.shippingAddress.phone;
            }
            shippingAddress3 = global.shippingAddress;
            str4 = "recipientName";
            if (shippingAddress3.hasOwnProperty("recipientName")) {
              obj.recipientName = global.shippingAddress.recipientName;
            }
          }
          return obj;
        }
        _formatTokenizeData(arg0, arg1) {
          self = this;
          tmp = "vault" === global.flow;
          obj = {};
          obj = {};
          ecToken = this._riskCorrelationId;
          ({ gatewayConfiguration, authorizationType } = this._configuration);
          if (!ecToken) {
            ecToken = module.billingToken;
          }
          if (!ecToken) {
            ecToken = module.ecToken;
          }
          obj.correlationId = ecToken;
          obj1 = {};
          vault = tmp;
          if (tmp) {
            str = "TOKENIZATION_KEY";
            vault = "TOKENIZATION_KEY" !== authorizationType;
          }
          if (vault) {
            vault = global.vault;
          }
          obj1.validate = vault;
          obj.options = obj1;
          obj.paypalAccount = obj;
          paypalAccount = obj.paypalAccount;
          if (tmp) {
            paypalAccount.billingAgreementToken = module.billingToken;
          } else {
            paypalAccount.paymentToken = module.paymentId || module.orderId;
            obj.paypalAccount.payerId = module.payerId;
            obj.paypalAccount.unilateral = gatewayConfiguration.paypal.unvettedMerchant;
            if (global.intent) {
              obj.paypalAccount.intent = global.intent;
            }
          }
          if (self._merchantAccountId) {
            obj.merchantAccountId = self._merchantAccountId;
          }
          return obj;
        }
        _formatTokenizePayload(arg0) {
          first = {};
          if (global.paypalAccounts) {
            num = 0;
            first = global.paypalAccounts[0];
          }
          obj = {};
          obj.nonce = first.nonce;
          obj.details = {};
          obj.type = first.type;
          tmp = first.details && first.details.payerInfo;
          if (tmp) {
            obj.details = first.details.payerInfo;
          }
          tmp2 = first.details && first.details.creditFinancingOffered;
          if (tmp2) {
            obj.creditFinancingOffered = first.details.creditFinancingOffered;
          }
          tmp3 = first.details && first.details.shippingOptionId;
          if (tmp3) {
            obj.shippingOptionId = first.details.shippingOptionId;
          }
          tmp4 = first.details && first.details.cobrandedCardLabel;
          if (tmp4) {
            obj.cobrandedCardLabel = first.details.cobrandedCardLabel;
          }
          return obj;
        }
        teardown() {
          self = this;
          closure_0 = this;
          tmp = closure_13(this, closure_11(PayPalCheckout.prototype));
          tmp2 = this._paypalScript && self._paypalScript.parentNode;
          if (tmp2) {
            parentNode = self._paypalScript.parentNode;
            removeChildResult = parentNode.removeChild(self._paypalScript);
          }
          _frameServicePromise = self._frameServicePromise;
          catchPromise = _frameServicePromise.catch(() => {

          });
          return catchPromise.then(() => {
            if (self._frameService) {
              const _frameService = self._frameService;
              let teardownResult = _frameService.teardown();
            } else {
              teardownResult = Promise.resolve();
            }
            return teardownResult;
          });
        }
      }
      let closure_0 = global("../lib/analytics");
      const assign = global("../lib/assign").assign;
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      const globalResult = global("@braintree/extended-promise");
      let closure_5 = global("../lib/braintree-error");
      let closure_6 = global("../lib/convert-to-braintree-error");
      let closure_7 = global("./errors");
      let closure_8 = global("../paypal/shared/constants");
      let closure_9 = global("../lib/frame-service/external");
      let closure_10 = global("../lib/create-authorization-data");
      let closure_11 = global("../lib/methods");
      let closure_12 = global("../lib/use-min");
      let closure_13 = global("../lib/convert-methods-to-error");
      let closure_14 = global("../lib/querystring");
      let closure_15 = global("../lib/camel-case-to-snake-case");
      const INTEGRATION_TIMEOUT_MS = global("../lib/constants").INTEGRATION_TIMEOUT_MS;
      let closure_17 = [null, null, null];
      globalResult.suppressUnhandledPromiseMessage = true;
      module.exports = global("@braintree/wrap-promise").wrapPrototype(PayPalCheckout);
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class PayPal {
        constructor(arg0) {
          ({ client: this._client, client } = global);
          this._assetsUrl = `${client.getConfiguration().gatewayConfiguration.paypal.assetsUrl}/web/${closure_5}`;
          client2 = global.client;
          this._isDebug = client2.getConfiguration().isDebug;
          this._loadingFrameUrl = `${`${this._assetsUrl}/html/paypal-landing-frame`}${closure_3(this._isDebug)}.html`;
          this._authorizationInProgress = false;
          return;
        }
        _initialize() {
          closure_0 = this;
          closure_1 = this._client;
          f30583 = setTimeout(() => {
            closure_8.sendEvent(_client, "paypal.load.timed-out");
          }, INTEGRATION_TIMEOUT_MS);
          promise = new Promise((arg0) => {
            const self = arg0;
            let obj = { name: constants.LANDING_FRAME_NAME, dispatchFrameUrl: `${`${closure_0._assetsUrl}/html/dispatch-frame`}${closure_3(closure_0._isDebug)}.html`, openFrameUrl: self._loadingFrameUrl };
            obj = self.create(obj, (_frameService) => {
              _frameService._frameService = _frameService;
              clearTimeout(closure_2);
              closure_8.sendEvent(closure_1, "paypal.load.succeeded");
              _frameService(_frameService);
            });
          });
          return promise;
        }
        tokenize(arg0, arg1) {
          self = this;
          closure_0 = global;
          closure_1 = module;
          closure_2 = this;
          closure_3 = this._client;
          tmp = module;
          if (module) {
            tmp2 = closure_4;
            tmp3 = closure_10;
            tmp4 = closure_4(closure_10(module));
            closure_1 = tmp4;
            tmp = tmp4;
          }
          if (global) {
            tmp5 = closure_6;
            FLOW_ENDPOINTS = closure_6.FLOW_ENDPOINTS;
            if (FLOW_ENDPOINTS.hasOwnProperty(global.flow)) {
              tmp10 = globalThis;
              _Promise2 = Promise;
              prototype = Promise.prototype;
              tmp11 = new.target;
              tmp12 = new.target;
              promise = new Promise((self) => {
                if (self._authorizationInProgress) {
                  closure_8.sendEvent(_client, "paypal.tokenization.error.already-opened");
                  const prototype = tmp4.prototype;
                  const tmp26 = new tmp4(constants.PAYPAL_TOKENIZATION_REQUEST_ACTIVE);
                  arg1(tmp26);
                } else {
                  self._authorizationInProgress = true;
                  const _window = window;
                  if (!window.popupBridge) {
                    closure_8.sendEvent(_client, "paypal.tokenization.opened");
                  }
                  if (true === self.offerCredit) {
                    closure_8.sendEvent(_client, "paypal.credit.offered");
                  }
                  if (true === self.offerPayLater) {
                    closure_8.sendEvent(_client, "paypal.paylater.offered");
                  }
                  self._navigateFrameToAuth(self).catch(arg1);
                  const _frameService = self._frameService;
                  _frameService.open({}, self._createFrameServiceCallback(self, self, arg1));
                  const _navigateFrameToAuthResult = self._navigateFrameToAuth(self);
                }
              });
              tmp13 = promise;
              handler = promise;
              if (tmp) {
                nextPromise = promise.then((arg0) => {
                  tmp4(null, arg0);
                });
                catchPromise = nextPromise.catch(tmp);
                _frameService2 = self._frameService;
                obj = {};
                obj.beforeClose = function beforeClose() {
                  closure_8.sendEvent(_client, "paypal.tokenization.closed.by-merchant");
                };
                handler = _frameService2.createHandler(obj);
              }
              noopHandler = handler;
            }
            return noopHandler;
          }
          tmp6 = new closure_1(closure_11.PAYPAL_FLOW_OPTION_REQUIRED);
          if (tmp) {
            tmpResult = tmp(tmp6);
            _frameService = self._frameService;
            noopHandler = _frameService.createNoopHandler();
          } else {
            tmp7 = globalThis;
            _Promise = Promise;
            noopHandler = Promise.reject(tmp6);
          }
          return;
        }
        _createFrameServiceCallback(arg0, arg1, arg2) {
          closure_0 = global;
          closure_1 = module;
          closure_2 = exports;
          closure_3 = this;
          closure_4 = this._client;
          return window.popupBridge ? (arg0, path) => {
            if (path) {
              path = path.path;
            }
            if (path) {
              path = "/cancel" === path.path.substring(0, 7);
              const str = path.path;
            }
            self._authorizationInProgress = false;
            if (!arg0) {
              if (!path) {
                if (path) {
                  const _tokenizePayPalResult = self._tokenizePayPal(arg0, path.queryItems);
                  self._tokenizePayPal(arg0, path.queryItems).then(path).catch(arg2);
                  const nextPromise = self._tokenizePayPal(arg0, path.queryItems).then(path);
                }
              }
            }
            closure_8.sendEvent(_client, "paypal.tokenization.closed-popupbridge.by-user");
            arg2(new path(constants.PAYPAL_POPUP_CLOSED));
          } : (code) => {
            self._authorizationInProgress = false;
            if (code) {
              if ("FRAME_SERVICE_FRAME_CLOSED" === code.code) {
                closure_8.sendEvent(_client, "paypal.tokenization.closed.by-user");
                const prototype2 = arg1.prototype;
                const tmp23 = new arg1(constants.PAYPAL_POPUP_CLOSED);
                arg2(tmp23);
              } else {
                code = code.code;
                if (code) {
                  code = code.code;
                  code = code.indexOf("FRAME_SERVICE_FRAME_OPEN_FAILED") > -1;
                }
                if (code) {
                  let obj = { code: constants.PAYPAL_POPUP_OPEN_FAILED.code, type: constants.PAYPAL_POPUP_OPEN_FAILED.type, message: constants.PAYPAL_POPUP_OPEN_FAILED.message };
                  obj = { originalError: code };
                  obj.details = obj;
                  const prototype = arg1.prototype;
                  const tmp12 = new arg1(obj);
                  arg2(tmp12);
                }
              }
            } else if (arg1) {
              const _tokenizePayPalResult = self._tokenizePayPal(code, arg1);
              self._tokenizePayPal(code, arg1).then(arg1).catch(arg2);
              const nextPromise = self._tokenizePayPal(code, arg1).then(arg1);
            }
          };
        }
        _tokenizePayPal(arg0, arg1) {
          self = this;
          closure_0 = this;
          _client = this._client;
          closure_1 = _client;
          if (!window.popupBridge) {
            _frameService = self._frameService;
            redirectResult = _frameService.redirect(self._loadingFrameUrl);
          }
          obj = { data: self._formatTokenizeData(global, module) };
          requestResult = _client.request(obj);
          nextPromise = requestResult.then((arg0) => {
            const result = self._formatTokenizePayload(arg0);
            const sendEvent = closure_8.sendEvent;
            if (window.popupBridge) {
              sendEvent(tmp3, "paypal.tokenization.success-popupbridge");
            } else {
              sendEvent(tmp3, "paypal.tokenization.success");
            }
            if (result.creditFinancingOffered) {
              closure_8.sendEvent(_client, "paypal.credit.accepted");
            }
            const _frameService = self._frameService;
            _frameService.close();
            return result;
          });
          return nextPromise.catch((arg0) => {
            const sendEvent = closure_8.sendEvent;
            if (window.popupBridge) {
              sendEvent(tmp2, "paypal.tokenization.failed-popupbridge");
            } else {
              sendEvent(tmp2, "paypal.tokenization.failed");
            }
            const _frameService = self._frameService;
            _frameService.close();
            return Promise.reject(callback(arg0, { type: constants.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.type, code: constants.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.code, message: constants.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.message }));
          });
        }
        _formatTokenizePayload(arg0) {
          first = {};
          if (global.paypalAccounts) {
            num = 0;
            first = global.paypalAccounts[0];
          }
          obj = {};
          obj.nonce = first.nonce;
          obj.details = {};
          obj.type = first.type;
          tmp = first.details && first.details.payerInfo;
          if (tmp) {
            obj.details = first.details.payerInfo;
          }
          tmp2 = first.details && first.details.creditFinancingOffered;
          if (tmp2) {
            obj.creditFinancingOffered = first.details.creditFinancingOffered;
          }
          return obj;
        }
        _formatTokenizeData(arg0, arg1) {
          _client = this._client;
          configuration = _client.getConfiguration();
          obj = {};
          obj = {};
          token = module.ba_token;
          ({ gatewayConfiguration, authorizationType } = configuration);
          if (!token) {
            token = module.token;
          }
          obj.correlationId = token;
          obj1 = {};
          tmp2 = "vault" === global.flow;
          if (tmp2) {
            str = "TOKENIZATION_KEY";
            tmp2 = "TOKENIZATION_KEY" !== authorizationType;
          }
          obj1.validate = tmp2;
          obj.options = obj1;
          obj.paypalAccount = obj;
          paypalAccount = obj.paypalAccount;
          if (module.ba_token) {
            paypalAccount.billingAgreementToken = module.ba_token;
          } else {
            ({ paymentId: paypalAccount.paymentToken, PayerID: obj.paypalAccount.payerId } = module);
            obj.paypalAccount.unilateral = gatewayConfiguration.paypal.unvettedMerchant;
            str2 = "intent";
            if (global.hasOwnProperty("intent")) {
              obj.paypalAccount.intent = global.intent;
            }
          }
          return obj;
        }
        _navigateFrameToAuth(arg0) {
          closure_0 = global;
          closure_1 = this;
          _client = this._client;
          closure_2 = _client;
          obj = { endpoint: `paypal_hermes/${closure_6.FLOW_ENDPOINTS[global.flow]}`, method: "post", data: this._formatPaymentResourceData(global) };
          requestResult = _client.request(obj);
          nextPromise = requestResult.then((paymentResource) => {
            if ("checkout" === paymentResource.flow) {
              let approvalUrl = paymentResource.paymentResource.redirectUrl;
            } else {
              approvalUrl = paymentResource.agreementSetup.approvalUrl;
            }
            let queryifyResult = approvalUrl;
            if ("commit" === paymentResource.useraction) {
              const obj = { useraction: "commit" };
              queryifyResult = closure_13.queryify(approvalUrl, obj);
            }
            if (window.popupBridge) {
              closure_8.sendEvent(_client, "paypal.tokenization.opened-popupbridge");
            }
            const _frameService = self._frameService;
            _frameService.redirect(queryifyResult);
          });
          return nextPromise.catch((details) => {
            const _frameService = self._frameService;
            _frameService.close();
            self._authorizationInProgress = false;
            if (422 === tmp) {
              let obj = { type: constants.PAYPAL_INVALID_PAYMENT_OPTION.type, code: constants.PAYPAL_INVALID_PAYMENT_OPTION.code, message: constants.PAYPAL_INVALID_PAYMENT_OPTION.message };
              obj = { originalError: details };
              obj.details = obj;
              const prototype = self.prototype;
              const tmp13 = new self(obj);
              let rejectResult = Promise.reject(tmp13);
            } else {
              obj = { type: constants.PAYPAL_FLOW_FAILED.type, code: constants.PAYPAL_FLOW_FAILED.code, message: constants.PAYPAL_FLOW_FAILED.message };
              rejectResult = Promise.reject(_client(details, obj));
            }
            return rejectResult;
          });
        }
        _formatPaymentResourceData(arg0) {
          _client = this._client;
          gatewayConfiguration = _client.getConfiguration().gatewayConfiguration;
          _serviceId = this._frameService._serviceId;
          obj = { returnUrl: `${tmp}/html/redirect-frame${closure_3(this._isDebug)}.html?channel=${_serviceId}`, cancelUrl: `${tmp2}/html/cancel-frame${closure_3(this._isDebug)}.html?channel=${_serviceId}`, offerPaypalCredit: true === global.offerCredit, offerPayLater: true === global.offerPayLater };
          text = `${gatewayConfiguration.paypal.assetsUrl}/web/${closure_5}`;
          text1 = `${gatewayConfiguration.paypal.assetsUrl}/web/${closure_5}`;
          obj = { brandName: tmp3, localeCode: global.locale, noShipping: str.toString() };
          tmp3 = global.displayName || gatewayConfiguration.paypal.displayName;
          str = !global.enableShippingAddress;
          shippingAddressEditable = global.shippingAddressEditable;
          obj.addressOverride = false === shippingAddressEditable;
          obj.landingPageType = global.landingPageType;
          obj.experienceProfile = obj;
          popupBridge = window.popupBridge;
          if (popupBridge) {
            _window = window;
            str2 = "function";
            shippingAddressEditable = typeof window.popupBridge.getReturnUrlPrefix;
            popupBridge = "function" === shippingAddressEditable;
          }
          if (popupBridge) {
            _window2 = window;
            popupBridge2 = window.popupBridge;
            shippingAddressEditable = popupBridge2.getReturnUrlPrefix();
            str3 = "return";
            obj.returnUrl = `${shippingAddressEditable}return`;
            _window3 = window;
            popupBridge3 = window.popupBridge;
            str4 = "cancel";
            obj.cancelUrl = `${popupBridge3.getReturnUrlPrefix()}cancel`;
          }
          if ("checkout" === global.flow) {
            ({ amount: obj.amount, currency: obj.currencyIsoCode } = global);
            str5 = "intent";
            if (global.hasOwnProperty("intent")) {
              obj.intent = global.intent;
            }
            for (const key10086 in arg0.shippingAddressOverride) {
              tmp4 = key10086;
              shippingAddressOverride = arg0.shippingAddressOverride;
              if (!shippingAddressOverride.hasOwnProperty(key10086)) {
                continue;
              } else {
                obj[key10086] = arg0.shippingAddressOverride[key10086];
                // continue
              }
              continue;
            }
          } else {
            obj.shippingAddress = global.shippingAddressOverride;
            if (global.billingAgreementDescription) {
              obj.description = global.billingAgreementDescription;
            }
          }
          return obj;
        }
        closeWindow() {
          self = this;
          if (this._authorizationInProgress) {
            tmp = closure_8;
            str = "paypal.tokenize.closed.by-merchant";
            sendEventResult = closure_8.sendEvent(self._client, "paypal.tokenize.closed.by-merchant");
          }
          _frameService = self._frameService;
          closeResult = _frameService.close();
          return;
        }
        focusWindow() {
          _frameService = this._frameService;
          focusResult = _frameService.focus();
          return;
        }
      }
      let closure_0 = global("../../lib/frame-service/external");
      let closure_1 = global("../../lib/braintree-error");
      let closure_2 = global("../../lib/convert-to-braintree-error");
      let closure_3 = global("../../lib/use-min");
      let closure_4 = global("../../lib/once");
      let closure_5 = "3.112.1";
      let closure_6 = global("../shared/constants");
      const INTEGRATION_TIMEOUT_MS = global("../../lib/constants").INTEGRATION_TIMEOUT_MS;
      let closure_8 = global("../../lib/analytics");
      let closure_9 = global("../../lib/methods");
      let closure_10 = global("../../lib/deferred");
      let closure_11 = global("../shared/errors");
      let closure_12 = global("../../lib/convert-methods-to-error");
      let closure_13 = global("../../lib/querystring");
      PayPal.prototype.teardown = global("@braintree/wrap-promise")(function() {
        const _frameService = this._frameService;
        _frameService.teardown();
        callback4(this, callback2(PayPal.prototype));
        closure_8.sendEvent(this._client, "paypal.teardown-completed");
        return Promise.resolve();
      });
      module.exports = PayPal;
    },
    { "Null": true, "Null": true, "Null": true, "Null": true, "Null": true, "Null": true, "Null": true, "Null": true, "Null": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      let closure_4 = global("../lib/braintree-error");
      let closure_5 = global("./shared/errors");
      let closure_6 = global("./external/paypal");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          const obj = { name: "PayPal", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify({ name: "PayPal", client: client.client, authorization: client.authorization });
          return closure_1.verify({ name: "PayPal", client: client.client, authorization: client.authorization }).then((self) => closure_2.create({ authorization: self.authorization, client: self.client, debug: self.debug, assetsUrl: closure_3.create(self.authorization), name: "PayPal" })).then((client) => {
            client.client = client;
            if (true !== client.getConfiguration().gatewayConfiguration.paypalEnabled) {
              const prototype2 = ctor.prototype;
              const tmp15 = new ctor(constants.PAYPAL_NOT_ENABLED);
              let rejectResult = Promise.reject(tmp15);
            } else {
              client.sendEvent(client.client, "paypal.initialized");
              const prototype = ctor2.prototype;
              const obj = new ctor2(client);
              rejectResult = obj._initialize();
            }
            return rejectResult;
          });
        }),
        isSupported() {
          return true;
        },
        VERSION: "3.112.1"
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { LANDING_FRAME_NAME: "braintreepaypallanding", FLOW_ENDPOINTS: { "Bool(false)": "NEW_THREAD_PERMISSIONS", "Bool(false)": "APPLICATION_DIRECTORY_SIMILAR" }, REQUIRED_OPTIONS: [false, false] };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      let obj = { placeholder: "useDueInString", live-guild-stage: "_user", guild-event: "Array", type: globalResult.types.MERCHANT };
      obj = { placeholder: false, live-guild-stage: false, guild-event: false, type: globalResult.types.MERCHANT };
      obj = { placeholder: true, live-guild-stage: true, guild-event: "<string:19854401>", type: globalResult.types.NETWORK };
      const obj1 = { placeholder: "Text", live-guild-stage: "from", guild-event: "default", type: globalResult.types.NETWORK };
      const obj2 = { placeholder: "mutedBackground", live-guild-stage: "%ArrayProto_values%", guild-event: "isArrayBuffer", type: globalResult.types.MERCHANT };
      const obj3 = { placeholder: "_cardinalEvents", live-guild-stage: "%ArrayProto_values%", guild-event: "isArrayBuffer", type: globalResult.types.MERCHANT };
      const obj4 = { placeholder: true, live-guild-stage: true, guild-event: "<string:21395009>", type: globalResult.types.CUSTOMER };
      const obj5 = { placeholder: null, live-guild-stage: null, guild-event: null, type: globalResult.types.MERCHANT };
      module.exports = { PAYPAL_NOT_ENABLED: obj, PAYPAL_TOKENIZATION_REQUEST_ACTIVE: obj, PAYPAL_ACCOUNT_TOKENIZATION_FAILED: obj, PAYPAL_FLOW_FAILED: obj1, PAYPAL_FLOW_OPTION_REQUIRED: obj2, PAYPAL_POPUP_OPEN_FAILED: obj3, PAYPAL_POPUP_CLOSED: obj4, PAYPAL_INVALID_PAYMENT_OPTION: obj5 };
    },
    { ../../lib/braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/basic-component-verification");
      let closure_1 = global("./preferred-payment-methods");
      const globalResult = global("@braintree/wrap-promise");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          return closure_0.verify({ name: "PreferredPaymentMethods", client: client.client, authorization: client.authorization }).then(() => new closure_1().initialize(arg0));
        }),
        VERSION: "3.112.1"
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class PreferredPaymentMethods {
        constructor() {
          return;
        }
        initialize(arg0) {
          closure_0 = this;
          obj = { authorization: global.authorization, client: global.client, debug: global.debug, assetsUrl: closure_1.create(global.authorization), name: "PreferredPaymentMethods" };
          obj = closure_2.create(obj);
          this._clientPromise = obj.catch((_setupError) => {
            self._setupError = _setupError;
            return Promise.reject(_setupError);
          });
          sendEventResult = closure_0.sendEvent(this._clientPromise, "preferred-payment-methods.initialized");
          return Promise.resolve(this);
        }
        fetchPreferredPaymentMethods() {
          closure_1 = this;
          _clientPromise = this._clientPromise;
          nextPromise = _clientPromise.then((request) => request.request({ api: "graphQLApi", data: { query: "query PreferredPaymentMethods { preferredPaymentMethods { paypalPreferred venmoPreferred } }" } }));
          nextPromise1 = nextPromise.then((data) => {
            const paypalPreferred = data.data.preferredPaymentMethods.paypalPreferred;
            const venmoPreferred = data.data.preferredPaymentMethods.venmoPreferred;
            closure_0.sendEvent(closure_0, `preferred-payment-methods.paypal.api-detected.${paypalPreferred}`);
            closure_0.sendEvent(closure_0, `preferred-payment-methods.venmo.api-detected.${venmoPreferred}`);
            return { paypalPreferred, venmoPreferred };
          });
          return nextPromise1.catch(() => {
            if (self._setupError) {
              let rejectResult = Promise.reject(self._setupError);
            } else {
              closure_0.sendEvent(closure_0, "preferred-payment-methods.api-error");
              rejectResult = { <string:3355571494>: null, <string:1644761997>: null };
            }
            return rejectResult;
          });
        }
      }
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("../lib/create-assets-url");
      let closure_2 = global("../lib/create-deferred-client");
      module.exports = global("@braintree/wrap-promise").wrapPrototype(PreferredPaymentMethods);
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      function handleApproval(_client, last_4) {
        let closure_0 = last_4;
        let obj = { sepa_debit_account: obj, merchant_account_id: last_4.merchantAccountId };
        obj = { last_4: last_4.last4, merchant_or_partner_customer_id: last_4.customerId, bank_reference_token: last_4.bankReferenceToken, mandate_type: last_4.mandateType };
        obj = { <string:291637523>: "CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN", <string:3693498740>: "emailToken", <string:720431191>: "Array" };
        obj.data = obj;
        const requestResult = _client.request(obj);
        return _client.request(obj).then((nonce) => {
          if (nonce.nonce) {
            const obj = { nonce: nonce.nonce };
            ({ last4: obj.ibanLastFour, customerId: obj.customerId, mandateType: obj.mandateType } = arg1);
            return obj;
          } else {
            const prototype = arg1.prototype;
            const tmp5 = new arg1(constants.SEPA_TRANSACTION_FAILED);
            throw tmp5;
          }
        }).catch(() => {
          throw new arg1(constants.SEPA_TRANSACTION_FAILED);
        });
      }
      let closure_0 = global("../../lib/braintree-error");
      let closure_1 = global("../shared/errors");
      let closure_2 = global("../../lib/frame-service/external");
      let closure_3 = global("../../lib/analytics");
      let closure_4 = global("../../lib/use-min");
      const BILLING_ADDRESS_OPTIONS = global("../shared/constants").BILLING_ADDRESS_OPTIONS;
      let closure_6 = global("../../lib/snake-case-to-camel-case");
      const assign = global("../../lib/assign").assign;
      module.exports = {
        createMandate(_client, locale) {
          let closure_0 = locale;
          let obj = { sepa_debit: obj, locale: locale.locale, cancel_url: locale.cancelUrl, return_url: locale.returnUrl, merchant_account_id: locale.merchantAccountId };
          obj = { account_holder_name: locale.accountHolderName, billing_address: obj, iban: locale.iban, merchant_or_partner_customer_id: locale.customerId, mandate_type: locale.mandateType };
          obj = { country_code: locale.countryCode };
          let closure_1 = obj;
          if (locale.billingAddress) {
            const item = BILLING_ADDRESS_OPTIONS.forEach((arg0) => {
              const tmp = callback(arg0);
              if (tmp in arg1.billingAddress) {
                obj.sepa_debit.billing_address[arg0] = arg1.billingAddress[tmp];
              }
            });
          }
          const obj1 = { <string:291637523>: 1359020033, <string:3693498740>: -1639892594, <string:720431191>: 16777488, data: obj };
          const requestResult = _client.request(obj1);
          return _client.request(obj1).then((message) => {
            const sepaDebitAccount = message.message.body.sepaDebitAccount;
            if (sepaDebitAccount) {
              const obj = {};
              ({ approvalUrl: obj.approvalUrl, last4: obj.last4, bankReferenceToken: obj.bankReferenceToken } = sepaDebitAccount);
              return obj;
            } else {
              const prototype = arg1.prototype;
              const tmp5 = new arg1(obj.SEPA_CREATE_MANDATE_FAILED);
              throw tmp5;
            }
          }).catch(() => {
            throw new arg1(obj.SEPA_CREATE_MANDATE_FAILED);
          });
        },
        openPopup(arg0, debug) {
          let closure_0 = arg0;
          let closure_1 = debug;
          let closure_2 = `${debug.assetsUrl}/html`;
          let closure_3 = debug.debug || false;
          return new Promise((arg0, arg1) => {
            const sum = Math.round((window.outerHeight - 570) / 2) + window.screenTop;
            const rect = { top: sum, left: Math.round((window.outerWidth - 400) / 2) + window.screenLeft };
            let obj = { name: "sepadirectdebit", dispatchFrameUrl: `${`${closure_2}/dispatch-frame`}${closure_4(closure_3)}.html`, openFrameUrl: `${`${closure_2}/sepa-landing-frame`}${closure_4(closure_3)}.html`, top: rect.top, left: rect.left, height: 570, width: 400 };
            obj = closure_2.create(obj, (open) => {
              closure_3.sendEvent(open, "sepa.popup.initialized");
              open.open({}, () => { ... });
              open.redirect(arg1.approvalUrl);
            });
          });
        },
        handleApproval,
        POPUP_WIDTH: 400,
        POPUP_HEIGHT: 570,
        redirectPage(approvalUrl) {
          window.location.href = approvalUrl;
        },
        handleApprovalForFullPageRedirect(client, closure_0) {
          closure_0 = client;
          let closure_1 = closure_0;
          const obj = { endpoint: `sepa_debit/${closure_0.cart_id}` };
          const requestResult = client.request({ endpoint: `sepa_debit/${closure_0.cart_id}` });
          const nextPromise = client.request({ endpoint: `sepa_debit/${closure_0.cart_id}` }).then((sepaDebitMandateDetail) => {
            sepaDebitMandateDetail = sepaDebitMandateDetail.sepaDebitMandateDetail;
            closure_3.sendEvent(sepaDebitMandateDetail, "sepa.redirect.mandate.approved");
            callback(arg1, { last4: sepaDebitMandateDetail.last4, customerId: sepaDebitMandateDetail.merchantOrPartnerCustomerId, mandateType: sepaDebitMandateDetail.mandateType, bankReferenceToken: sepaDebitMandateDetail.bankReferenceToken });
            return callback2(sepaDebitMandateDetail, arg1);
          });
          return client.request({ endpoint: `sepa_debit/${closure_0.cart_id}` }).then((sepaDebitMandateDetail) => {
            sepaDebitMandateDetail = sepaDebitMandateDetail.sepaDebitMandateDetail;
            closure_3.sendEvent(sepaDebitMandateDetail, "sepa.redirect.mandate.approved");
            callback(arg1, { last4: sepaDebitMandateDetail.last4, customerId: sepaDebitMandateDetail.merchantOrPartnerCustomerId, mandateType: sepaDebitMandateDetail.mandateType, bankReferenceToken: sepaDebitMandateDetail.bankReferenceToken });
            return callback2(sepaDebitMandateDetail, arg1);
          }).then((arg0) => {
            closure_3.sendEvent(arg0, "sepa.redirect.tokenization.success");
            return arg0;
          }).catch(() => {
            closure_3.sendEvent(arg0, "sepa.redirect.handle-approval.failed");
            throw new arg0(arg1.SEPA_TRANSACTION_FAILED);
          });
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class SEPA {
        constructor(arg0) {
          self = this;
          client = global.client;
          configuration = client.getConfiguration();
          this._client = global.client;
          this._assetsUrl = `${tmp.gatewayConfiguration.assetsUrl}/web/3.112.1`;
          this._isDebug = configuration.isDebug;
          if (global.redirectUrl) {
            self._returnUrl = global.redirectUrl;
            str3 = "?cancel=1";
            self._cancelUrl = `${global.redirectUrl}?cancel=1`;
            flag = true;
            self._isRedirectFlow = true;
          } else {
            str = "/html/redirect-frame.html?success=1";
            self._returnUrl = `${self._assetsUrl}/html/redirect-frame.html?success=1`;
            str2 = "/html/redirect-frame.html?cancel=1";
            self._cancelUrl = `${self._assetsUrl}/html/redirect-frame.html?cancel=1`;
          }
          if (global.tokenizePayload) {
            self.tokenizePayload = global.tokenizePayload;
          }
          sendEventResult = closure_5.sendEvent(self._client, "sepa.component.initialized");
          return;
        }
        tokenize(arg0) {
          self = this;
          closure_0 = global;
          closure_1 = this;
          if (global) {
            tmp2 = closure_4;
            tmp3 = closure_2;
            if (!closure_4(global, closure_2.REQUIRED_OPTIONS)) {
              tmp4 = closure_2;
              MANDATE_TYPE_ENUM = closure_2.MANDATE_TYPE_ENUM;
              if (MANDATE_TYPE_ENUM.includes(global.mandateType)) {
                tmp15 = closure_3;
                mandate = closure_3.createMandate(self._client, tmp);
                nextPromise = mandate.then((approvalUrl) => {
                  closure_5.sendEvent(self._client, "sepa.create-mandate.success");
                  if (self._isRedirectFlow) {
                    let redirectPageResult = closure_3.redirectPage(approvalUrl.approvalUrl);
                  } else {
                    ({ last4: closure_0.last4, bankReferenceToken: closure_0.bankReferenceToken } = approvalUrl);
                    const obj = { approvalUrl: approvalUrl.approvalUrl, assetsUrl: self._assetsUrl };
                    redirectPageResult = closure_3.openPopup(self._client, obj);
                  }
                  return redirectPageResult;
                });
                if (self._isRedirectFlow) {
                  tmp17 = globalThis;
                  _Promise2 = Promise;
                  resolved = Promise.resolve();
                } else {
                  nextPromise1 = nextPromise.then((self) => {
                    closure_5.sendEvent(self._client, "sepa.mandate.approved");
                    return closure_3.handleApproval(self._client, { bankReferenceToken: self.bankReferenceToken, last4: self.last4, customerId: self.customerId, mandateType: self.mandateType, merchantAccountId: self.merchantAccountId });
                  });
                  nextPromise2 = nextPromise1.then((arg0) => {
                    closure_5.sendEvent(self._client, "sepa.tokenization.success");
                    return Promise.resolve(arg0);
                  });
                  resolved = nextPromise2.catch((arg0) => {
                    closure_5.sendEvent(self._client, `sepa.${arg0.details}.failed`);
                    return Promise.reject(arg0);
                  });
                }
                tmp18 = resolved;
              } else {
                tmp5 = closure_5;
                str = "sepa.input-validation.invalid-mandate";
                sendEventResult = closure_5.sendEvent(self._client, "sepa.input-validation.invalid-mandate");
                tmp7 = globalThis;
                _Promise = Promise;
                tmp8 = closure_0;
                tmp9 = closure_1;
                prototype = closure_0.prototype;
                tmp10 = new.target;
                tmp11 = new.target;
                tmp12 = new closure_0(closure_1.SEPA_INVALID_MANDATE_TYPE);
                tmp13 = tmp12;
                rejectResult = Promise.reject(tmp12);
              }
            }
            return rejectResult;
          }
          sendEventResult1 = closure_5.sendEvent(self._client, "sepa.input-validation.missing-options");
          tmp20 = new closure_0(closure_1.SEPA_TOKENIZE_MISSING_REQUIRED_OPTION);
          rejectResult = Promise.reject(tmp20);
          return;
        }
      }
      let closure_0 = global("../../lib/braintree-error");
      let closure_1 = global("../shared/errors");
      let closure_2 = global("../shared/constants");
      let closure_3 = global("./mandate");
      let closure_4 = global("../shared/has-missing-option");
      let closure_5 = global("../../lib/analytics");
      const assign = global("../../lib/assign").assign;
      module.exports = global("@braintree/wrap-promise").wrapPrototype(SEPA);
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("./external/sepa");
      let closure_2 = global("../lib/create-assets-url");
      let closure_3 = global("../lib/create-deferred-client");
      let closure_4 = global("../lib/basic-component-verification");
      const parse = global("../lib/querystring").parse;
      const assign = global("../lib/assign").assign;
      let closure_7 = global("./external/mandate");
      const globalResult = global("@braintree/wrap-promise");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          let closure_1 = parse(window.location.href);
          const obj = { name: "SEPA", client: client.client, authorization: client.authorization };
          const verifyResult = closure_4.verify({ name: "SEPA", client: client.client, authorization: client.authorization });
          const nextPromise = closure_4.verify({ name: "SEPA", client: client.client, authorization: client.authorization }).then((self) => closure_3.create({ authorization: self.authorization, client: self.client, debug: self.debug, assetsUrl: closure_2.create(self.authorization), name: "SEPA" }));
          return closure_4.verify({ name: "SEPA", client: client.client, authorization: client.authorization }).then((self) => closure_3.create({ authorization: self.authorization, client: self.client, debug: self.debug, assetsUrl: closure_2.create(self.authorization), name: "SEPA" })).then((client) => {
            client.client = client;
            client.sendEvent(client, "sepa.client.initialized");
            return new closure_1(client);
          }).then((closure_0) => {
            let client = closure_0;
            if (closure_1.success) {
              if ("true" === closure_1.success) {
                if (closure_1.cart_id) {
                  client = callback(client, closure_1);
                  const result = closure_7.handleApprovalForFullPageRedirect(client.client, client);
                  let catchPromise = result.then((tokenizePayload) => {
                    closure_0.tokenizePayload = tokenizePayload;
                    return closure_0;
                  }).catch((arg0) => {
                    console.error("Problem while finishing tokenizing: ", arg0);
                  });
                  const nextPromise = result.then((tokenizePayload) => {
                    closure_0.tokenizePayload = tokenizePayload;
                    return closure_0;
                  });
                }
                return catchPromise;
              }
            }
            catchPromise = closure_0;
            if (closure_1.cancel) {
              client.sendEvent(client.client, "sepa.redirect.customer-canceled.failed");
              catchPromise = closure_0;
            }
          });
        }),
        VERSION: "3.112.1"
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { REQUIRED_OPTIONS: [null, null, null, null, null, null], BILLING_ADDRESS_OPTIONS: ["<string:37814274>", "<string:1090519629>", "+359", "<string:22341697>", "<string:2062303488>"], MANDATE_TYPE_ENUM: [-499056639, 1090519360] };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT };
      obj = { placeholder: "y", live-guild-stage: "calculateJaroWinklerSimilarity", guild-event: "Array", active-channel: "headers", type: globalResult.types.CUSTOMER };
      obj = { placeholder: 1359020033, live-guild-stage: -968812073, guild-event: 16777592, type: globalResult.types.MERCHANT };
      const obj1 = { placeholder: "<string:1359020033>", live-guild-stage: "<string:3644934955>", guild-event: "<string:16777663>", active-channel: "<string:1099382353>", type: globalResult.types.UNKNOWN };
      const obj2 = { placeholder: null, live-guild-stage: "UNIONPAY_NOT_ENABLED", guild-event: "UnionPay is not enabled for this merchant.", type: globalResult.types.MERCHANT };
      const obj3 = { placeholder: null, live-guild-stage: "UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID", guild-event: "Found an invalid Hosted Fields instance. Please use a valid Hosted Fields instance.", active-channel: null, type: globalResult.types.UNKNOWN };
      module.exports = { SEPA_CREATE_MANDATE_FAILED: obj, SEPA_CUSTOMER_CANCELED: obj, SEPA_INVALID_MANDATE_TYPE: obj, SEPA_TOKENIZATION_FAILED: obj1, SEPA_TOKENIZE_MISSING_REQUIRED_OPTION: obj2, SEPA_TRANSACTION_FAILED: obj3 };
    },
    { ../../lib/braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = function hasMissingOption(arg0, arg1) {
        let items = arg1;
        if (!arg1) {
          items = [];
        }
        let num = 0;
        if (0 < items.length) {
          while (arg0.hasOwnProperty(items[num])) {
            num = num + 1;
          }
          return true;
        }
        return false;
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class BaseFramework {
        constructor(arg0) {
          self = this;
          callResult = closure_5.call(this);
          ({ client: this._client, createPromise: this._createPromise } = global);
          this._createOptions = global;
          if (this._client) {
            _client = self._client;
            self._isDebug = _client.getConfiguration().isDebug;
            _client2 = self._client;
            self._assetsUrl = _client2.getConfiguration().gatewayConfiguration.assetsUrl;
          } else {
            tmp2 = globalThis;
            _Boolean = Boolean;
            self._isDebug = Boolean(global.isDebug);
            self._assetsUrl = global.assetsUrl;
          }
          self._assetsUrl = `${self._assetsUrl}/web/${closure_14}`;
          return;
        }
        _waitForClient() {
          self = this;
          if (this._client) {
            tmp2 = globalThis;
            _Promise = Promise;
            resolved = Promise.resolve();
          } else {
            _createPromise = self._createPromise;
            fn = function(_client) {
              this._client = _client;
            };
            resolved = _createPromise.then(fn.bind(self));
          }
          return resolved;
        }
        setUpEventListeners() {
          tmp = new closure_2(closure_6.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
          throw tmp;
        }
        verifyCard(arg0, arg1) {
          obj = module;
          self = this;
          closure_1 = this;
          if (!module) {
            obj = {};
          }
          result = self._checkForVerifyCardError(global, obj);
          if (result) {
            tmp4 = globalThis;
            _Promise = Promise;
            rejectResult = Promise.reject(result);
          } else {
            flag = true;
            self._verifyCardInProgress = true;
            result1 = self._formatVerifyCardOptions(global);
            assign = result1;
            _formatLookupDataResult = self._formatLookupData(result1);
            nextPromise = _formatLookupDataResult.then((arg0) => {
              self.sendEvent(self._createPromise, "three-d-secure.verification-flow.started");
              return self._performLookup(result1.nonce, arg0);
            });
            nextPromise1 = nextPromise.then((arg0) => {
              self.sendEvent(self._createPromise, `three-d-secure.verification-flow.3ds-version.${arg0.lookup.threeDSecureVersion}`);
              return self._onLookupComplete(arg0, result1);
            });
            nextPromise2 = nextPromise1.then((arg0) => self.initializeChallengeWithLookupResponse(arg0, result1));
            nextPromise3 = nextPromise2.then((arg0) => {
              const result = self._resetVerificationState();
              self.sendEvent(self._createPromise, "three-d-secure.verification-flow.completed");
              return arg0;
            });
            rejectResult = nextPromise3.catch((arg0) => {
              const result = self._resetVerificationState();
              self.sendEvent(self._createPromise, "three-d-secure.verification-flow.failed");
              return Promise.reject(arg0);
            });
          }
          return rejectResult;
        }
        _checkForFrameworkSpecificVerifyCardErrors() {
          tmp = new closure_2(closure_6.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
          throw tmp;
        }
        _presentChallenge() {
          tmp = new closure_2(closure_6.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
          throw tmp;
        }
        prepareLookup() {
          tmp = new closure_2(closure_6.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
          throw tmp;
        }
        _resetVerificationState() {
          self = this;
          this._verifyCardInProgress = false;
          this._verifyCardPromisePlus = null;
          if ("function" === typeof this._reloadThreeDSecure) {
            _reloadThreeDSecureResult = self._reloadThreeDSecure();
          }
          return;
        }
        _performLookup(arg0, arg1) {
          assign = module;
          closure_1 = this;
          closure_2 = `payment_methods/${global}/three_d_secure/lookup`;
          _waitForClientResult = this._waitForClient();
          return _waitForClientResult.then(() => {
            const _client = self._client;
            return _client.request({ endpoint: closure_2, method: "post", data: arg1 }).catch((details) => {
              let httpStatus = details;
              if (details) {
                httpStatus = details.details;
              }
              if (httpStatus) {
                httpStatus = details.details.httpStatus;
              }
              if (404 === httpStatus) {
                let THREEDS_LOOKUP_ERROR = constants.THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR;
                let str = "three-d-secure.verification-flow.lookup-failed.404";
              } else if (422 === httpStatus) {
                THREEDS_LOOKUP_ERROR = constants.THREEDS_LOOKUP_VALIDATION_ERROR;
                str = "three-d-secure.verification-flow.lookup-failed.422";
              } else {
                THREEDS_LOOKUP_ERROR = constants.THREEDS_LOOKUP_ERROR;
                str = "three-d-secure.verification-flow.lookup-failed";
              }
              closure_1.sendEvent(closure_1._createPromise, str);
              const obj = {};
              ({ type: obj.type, code: obj.code, message: obj.message } = THREEDS_LOOKUP_ERROR);
              obj.details = { originalError: details };
              return Promise.reject(new closure_2(obj));
            });
          });
        }
        _existsAndIsNumeric(arg0) {
          isArray = null == global;
          if (!isArray) {
            tmp2 = globalThis;
            _Array = Array;
            isArray = Array.isArray(global);
          }
          if (!isArray) {
            str = "boolean";
            isArray = "boolean" === typeof global;
          }
          if (!isArray) {
            str2 = "string";
            tmp3 = "string" === typeof global;
            if (tmp3) {
              str3 = "";
              tmp3 = "" === global.trim();
            }
            isArray = tmp3;
          }
          if (!isArray) {
            tmp4 = globalThis;
            _isNaN = isNaN;
            _Number = Number;
            isArray = isNaN(Number(global));
          }
          return !isArray;
        }
        _checkForVerifyCardError(arg0, arg1) {
          self = this;
          if (true === this._verifyCardInProgress) {
            tmp8 = closure_2;
            tmp9 = closure_6;
            prototype2 = closure_2.prototype;
            tmp10 = new.target;
            tmp11 = new.target;
            tmp2 = new closure_2(closure_6.THREEDS_AUTHENTICATION_IN_PROGRESS);
          } else {
            str = "a nonce";
            if (global.nonce) {
              if (!self._existsAndIsNumeric(global.amount)) {
                str = "an amount";
              }
            }
            if (!str) {
              tmp = module;
              str = self._checkForFrameworkSpecificVerifyCardErrors(global, module);
            }
            tmp2 = null;
            if (str) {
              tmp3 = closure_2;
              obj = {};
              tmp4 = closure_6;
              obj.type = closure_6.THREEDS_MISSING_VERIFY_CARD_OPTION.type;
              obj.code = closure_6.THREEDS_MISSING_VERIFY_CARD_OPTION.code;
              str2 = "verifyCard options must include ";
              str3 = ".";
              obj.message = `verifyCard options must include ${str}.`;
              prototype = closure_2.prototype;
              tmp5 = new.target;
              tmp6 = new.target;
              tmp7 = obj;
              tmp2 = new closure_2(obj);
            }
          }
          return tmp2;
        }
        initializeChallengeWithLookupResponse(arg0, arg1) {
          obj = module;
          self = this;
          assign = this;
          if (!module) {
            obj = {};
          }
          self._lookupPaymentMethod = global.paymentMethod;
          _verifyCardPromisePlus = self._verifyCardPromisePlus;
          if (!_verifyCardPromisePlus) {
            tmp = closure_4;
            prototype = closure_4.prototype;
            tmp2 = new.target;
            tmp3 = new.target;
            _verifyCardPromisePlus = new closure_4();
          }
          self._verifyCardPromisePlus = _verifyCardPromisePlus;
          result = self._handleLookupResponse(global, obj);
          prop = self._verifyCardPromisePlus;
          return prop.then((arg0) => {
            closure_1.sendEvent(self._createPromise, `three-d-secure.verification-flow.liability-shifted.${String(arg0.liabilityShifted)}`);
            closure_1.sendEvent(self._createPromise, `three-d-secure.verification-flow.liability-shift-possible.${String(arg0.liabilityShiftPossible)}`);
            return arg0;
          });
        }
        _handleLookupResponse(arg0, arg1) {
          self = this;
          acsUrl = global.lookup;
          if (acsUrl) {
            acsUrl = global.lookup.acsUrl;
          }
          BooleanResult = Boolean(acsUrl);
          sendEventResult = closure_1.sendEvent(self._createPromise, `three-d-secure.verification-flow.challenge-presented.${String(tmp)}`);
          if (BooleanResult) {
            tmp5 = module;
            _presentChallengeResult = self._presentChallenge(global, module);
          } else {
            _formatAuthResponseResult = self._formatAuthResponse(global.paymentMethod, global.threeDSecureInfo);
            _formatAuthResponseResult.verificationDetails = global.threeDSecureInfo;
            _verifyCardPromisePlus = self._verifyCardPromisePlus;
            resolveResult = _verifyCardPromisePlus.resolve(_formatAuthResponseResult);
          }
          return;
        }
        _onLookupComplete(arg0) {
          this._lookupPaymentMethod = global.paymentMethod;
          tmp = new closure_4();
          this._verifyCardPromisePlus = tmp;
          return Promise.resolve(global);
        }
        _formatAuthResponse(arg0, arg1) {
          obj = { nonce: global.nonce, type: global.type, binData: global.binData, details: global.details };
          description = global.description;
          if (description) {
            str = global.description;
            str2 = " ";
            description = str.replace(/\+/g, " ");
          }
          obj.description = description;
          liabilityShifted = module;
          if (module) {
            liabilityShifted = module.liabilityShifted;
          }
          obj.liabilityShifted = liabilityShifted;
          liabilityShiftPossible = module;
          if (module) {
            liabilityShiftPossible = module.liabilityShiftPossible;
          }
          obj.liabilityShiftPossible = liabilityShiftPossible;
          obj.threeDSecureInfo = global.threeDSecureInfo;
          return obj;
        }
        _formatVerifyCardOptions(arg0) {
          return assign({}, global);
        }
        _formatLookupData(arg0) {
          obj = { amount: global.amount };
          if (true === global.collectDeviceData) {
            tmp = globalThis;
            _window = window;
            obj.browserColorDepth = window.screen.colorDepth;
            _window2 = window;
            _navigator = window.navigator;
            obj.browserJavaEnabled = _navigator.javaEnabled();
            obj.browserJavascriptEnabled = true;
            _window3 = window;
            obj.browserLanguage = window.navigator.language;
            _window4 = window;
            obj.browserScreenHeight = window.screen.height;
            _window5 = window;
            obj.browserScreenWidth = window.screen.width;
            _Date = Date;
            prototype = Date.prototype;
            tmp2 = new.target;
            tmp3 = new.target;
            date = new Date();
            tmp4 = date;
            obj.browserTimeZone = date.getTimezoneOffset();
            str = "Browser";
            obj.deviceChannel = "Browser";
          }
          return Promise.resolve(obj);
        }
        _handleV1AuthResponse(arg0) {
          self = this;
          parsed = JSON.parse(global.auth_response);
          if (parsed.success) {
            _verifyCardPromisePlus3 = self._verifyCardPromisePlus;
            resolveResult = _verifyCardPromisePlus3.resolve(self._formatAuthResponse(parsed.paymentMethod, parsed.threeDSecureInfo));
          } else {
            if (parsed.threeDSecureInfo) {
              if (parsed.threeDSecureInfo.liabilityShiftPossible) {
                _verifyCardPromisePlus2 = self._verifyCardPromisePlus;
                resolveResult1 = _verifyCardPromisePlus2.resolve(self._formatAuthResponse(self._lookupPaymentMethod, parsed.threeDSecureInfo));
              }
            }
            _verifyCardPromisePlus = self._verifyCardPromisePlus;
            tmp2 = closure_2;
            obj = {};
            obj.type = closure_2.types.UNKNOWN;
            str = "UNKNOWN_AUTH_RESPONSE";
            obj.code = "UNKNOWN_AUTH_RESPONSE";
            obj.message = parsed.error.message;
            prototype = closure_2.prototype;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = obj;
            tmp6 = new closure_2(obj);
            tmp7 = tmp6;
            rejectResult = _verifyCardPromisePlus.reject(tmp6);
          }
          return;
        }
        cancelVerifyCard() {
          self = this;
          this._verifyCardInProgress = false;
          if (this._lookupPaymentMethod) {
            threeDSecureInfo = self._lookupPaymentMethod.threeDSecureInfo;
            obj = {};
            liabilityShiftPossible = threeDSecureInfo;
            tmp9 = assign;
            if (threeDSecureInfo) {
              liabilityShiftPossible = threeDSecureInfo.liabilityShiftPossible;
            }
            obj.liabilityShiftPossible = liabilityShiftPossible;
            liabilityShifted = threeDSecureInfo;
            if (threeDSecureInfo) {
              liabilityShifted = threeDSecureInfo.liabilityShifted;
            }
            obj.liabilityShifted = liabilityShifted;
            verificationDetails = threeDSecureInfo;
            if (threeDSecureInfo) {
              verificationDetails = threeDSecureInfo.verificationDetails;
            }
            obj.verificationDetails = verificationDetails;
            tmp10 = globalThis;
            _Promise2 = Promise;
            resolved = Promise.resolve(tmp9({}, self._lookupPaymentMethod, obj));
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = closure_2;
            tmp3 = closure_6;
            prototype = closure_2.prototype;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = new closure_2(closure_6.THREEDS_NO_VERIFICATION_PAYLOAD);
            tmp7 = tmp6;
            resolved = Promise.reject(tmp6);
          }
          return resolved;
        }
        _setupV1Bus(arg0) {
          assign = global;
          _client = this._client;
          closure_1 = _client.getConfiguration();
          str = window.location.href;
          closure_2 = str.split("#")[0];
          closure_3 = global.lookupResponse;
          tmp = closure_10();
          obj = { channel: tmp, verifyDomain: closure_3 };
          obj2 = new closure_8(obj);
          closure_4 = `${`${this._assetsUrl}/html/three-d-secure-authentication-complete-frame.html?channel=`}${encodeURIComponent(tmp)}&`;
          onResult = obj2.on(closure_13, (arg0) => {
            const text = `${closure_3.termUrl}&three_d_secure_version=${closure_14}`;
            arg0({ clientConfiguration: closure_1, nonce: arg0.nonce, acsUrl: lookupResponse.acsUrl, pareq: lookupResponse.pareq, termUrl: `${tmp}&authentication_complete_base_url=${encodeURIComponent(closure_4)}`, md: lookupResponse.md, parentUrl: closure_2 });
          });
          onResult1 = obj2.on(closure_11.AUTHENTICATION_COMPLETE, global.handleAuthResponse);
          return obj2;
        }
        _setupV1Iframe(arg0) {
          obj = { src: `${`${this._assetsUrl}/html/three-d-secure-bank-frame`}${closure_12(this._isDebug)}.html?showLoader=${global.showLoader}`, name: `${closure_9.LANDING_FRAME_NAME}_${this._v1Bus.channel}` };
          return closure_7(obj);
        }
        _setupV1Elements(arg0) {
          this._v1Bus = this._setupV1Bus(global);
          this._v1Iframe = this._setupV1Iframe(global);
          return;
        }
        _teardownV1Elements() {
          self = this;
          if (this._v1Bus) {
            _v1Bus = self._v1Bus;
            teardownResult = _v1Bus.teardown();
            tmp2 = null;
            self._v1Bus = null;
          }
          tmp3 = self._v1Iframe && self._v1Iframe.parentNode;
          if (tmp3) {
            parentNode = self._v1Iframe.parentNode;
            removeChildResult = parentNode.removeChild(self._v1Iframe);
            tmp5 = null;
            self._v1Iframe = null;
          }
          if (self._onV1Keyup) {
            tmp6 = globalThis;
            _document = document;
            str = "keyup";
            removed = document.removeEventListener("keyup", self._onV1Keyup);
            tmp8 = null;
            self._onV1Keyup = null;
          }
          return;
        }
        teardown() {
          sendEventResult = closure_1.sendEvent(this._createPromise, "three-d-secure.teardown-completed");
          _teardownV1ElementsResult = this._teardownV1Elements();
          return Promise.resolve();
        }
      }
      global("../../../lib/assign").assign;
      let closure_1 = global("../../../lib/analytics");
      let closure_2 = global("../../../lib/braintree-error");
      let closure_3 = global("../../../lib/is-verified-domain");
      const globalResult = global("@braintree/extended-promise");
      const globalResult1 = global("@braintree/event-emitter");
      let closure_6 = global("../../shared/errors");
      let closure_7 = global("@braintree/iframer");
      let closure_8 = global("framebus");
      let closure_9 = global("../../shared/constants");
      let closure_10 = global("@braintree/uuid");
      let closure_11 = global("../../shared/events");
      let closure_12 = global("../../../lib/use-min");
      let closure_13 = global("../../../lib/constants").BUS_CONFIGURATION_REQUEST_EVENT;
      let closure_14 = "3.112.1";
      globalResult.suppressUnhandledPromiseMessage = true;
      const child = globalResult1.createChild(BaseFramework);
      module.exports = BaseFramework;
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class Bootstrap3ModalFramework {
        constructor(arg0) {
          callResult = closure_0.call(this, global);
          return;
        }
        _createV1IframeModalElement(arg0) {
          element = document.createElement("div");
          element.innerHTML = "<div class=\"modal fade in\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"CCAFrameModal-label\" aria-hidden=\"true\" style=\"display: block;\"><div class=\"modal-dialog\" style=\"width:440px;z-index:999999;\"><div class=\"modal-content\"><div class=\"modal-body\" data-braintree-v1-fallback-iframe-container><button type=\"button\" data-braintree-v1-fallback-close-button class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\u00D7</button></div></div></div><div data-braintree-v1-fallback-backdrop style=\"position: fixed;cursor: pointer;z-index: 999998;top: 0;left: 0;width: 100%;height: 100%;\"></div></div>";
          element1 = element.querySelector("[data-braintree-v1-fallback-iframe-container]");
          appendChildResult = element1.appendChild(global);
          return element;
        }
        _createCardinalConfigurationOptions(arg0) {
          _createCardinalConfigurationOptions = closure_0.prototype._createCardinalConfigurationOptions;
          callResult = _createCardinalConfigurationOptions.call(this, global);
          callResult.payment.framework = "bootstrap3";
          return callResult;
        }
      }
      const globalResult = global("./songbird");
      Bootstrap3ModalFramework.prototype = Object.create(globalResult.prototype, { constructor: globalResult });
      module.exports = Bootstrap3ModalFramework;
    },
    { ./songbird: 217 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class CardinalModalFramework {
        constructor(arg0) {
          callResult = closure_0.call(this, global);
          return;
        }
        _createV1IframeModalElement(arg0) {
          self = this;
          element = document.createElement("div");
          displayExitButton = this._createOptions;
          if (displayExitButton) {
            displayExitButton = self._createOptions.cardinalSDKConfig;
          }
          if (displayExitButton) {
            displayExitButton = self._createOptions.cardinalSDKConfig.payment;
          }
          if (displayExitButton) {
            displayExitButton = self._createOptions.cardinalSDKConfig.payment.displayExitButton;
          }
          element.innerHTML = "<div style=\"position: fixed;z-index: 999999;top: 50%;left: 50%;padding: 24px 20px;transform: translate(-50%,-50%);border-radius: 2px;background: #fff;max-width: 100%;overflow: auto;\"><div><button data-braintree-v1-fallback-close-button style=\"font-family: Helvetica,Arial,sans-serif;font-size: 25px;line-height: 12px;position: absolute;top: 2px;right: 0px;cursor: pointer;color: #999;border: 0;outline: none;background: none;\" onMouseOver=\"this.style.color='#000'\" onMouseOut=\"this.style.color='#999'\">\u00D7</button></div><div data-braintree-v1-fallback-iframe-container style=\"height: 400px;\"></div></div><div data-braintree-v1-fallback-backdrop style=\"position: fixed;z-index: 999998;cursor: pointer;top: 0;left: 0;width: 100%;height: 100%;transition: opacity 1ms ease;background: rgba(0,0,0,.6);\"></div>";
          if (!Boolean(displayExitButton)) {
            str = "[data-braintree-v1-fallback-close-button]";
            str2 = "none";
            element.querySelector("[data-braintree-v1-fallback-close-button]").style.display = "none";
          }
          element1 = element.querySelector("[data-braintree-v1-fallback-iframe-container]");
          appendChildResult = element1.appendChild(global);
          return element;
        }
      }
      const globalResult = global("./songbird");
      CardinalModalFramework.prototype = Object.create(globalResult.prototype, { constructor: globalResult });
      module.exports = CardinalModalFramework;
    },
    { ./songbird: 217 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("./legacy");
      const globalResult1 = global("./cardinal-modal");
      const globalResult2 = global("./bootstrap3-modal");
      module.exports = { legacy: globalResult, cardinal-modal: globalResult1, bootstrap3-modal: global("./bootstrap3-modal"), inline-iframe: global("./inline-iframe") };
    },
    { datetime-local: true, ENTITY_TYPES_REQUIRED_CHANNEL_ID: true, animated: true, getPasskeyAuthenticator: true }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class InlineIframeFramework {
        constructor(arg0) {
          callResult = closure_0.call(this, global);
          return;
        }
        setUpEventListeners(arg0) {
          setUpEventListeners = global.prototype.setUpEventListeners;
          callResult = setUpEventListeners.call(this, global);
          onResult = this.on(InlineIframeFramework.events.AUTHENTICATION_IFRAME_AVAILABLE, (arg0, arg1) => {
            arg0("authentication-iframe-available", arg0, arg1);
          });
          return;
        }
        _createCardinalConfigurationOptions(arg0) {
          _createCardinalConfigurationOptions = closure_0.prototype._createCardinalConfigurationOptions;
          callResult = _createCardinalConfigurationOptions.call(this, global);
          callResult.payment.framework = "inline";
          return callResult;
        }
        _addV1IframeToPage() {
          obj = { element: this._v1Modal };
          _emitResult = this._emit(InlineIframeFramework.events.AUTHENTICATION_IFRAME_AVAILABLE, obj, () => {

          });
          return;
        }
        _setupFrameworkSpecificListeners() {
          ({ _onInlineSetup, setCardinalListener } = this);
          setCardinalListenerResult = setCardinalListener("ui.inline.setup", _onInlineSetup.bind(this));
          return;
        }
        _onInlineSetup(arg0, arg1, arg2, arg3) {
          self = this;
          flag = true;
          if (global) {
            flag = true;
            if (module) {
              str = "CCA";
              tmp = "CCA" !== module.paymentType;
              if (!tmp) {
                str2 = "suppress";
                tmp2 = "suppress" !== module.data.mode;
                if (tmp2) {
                  str3 = "static";
                  tmp2 = "static" !== module.data.mode;
                }
                tmp = tmp2;
              }
              if (tmp) {
                flag = true;
              }
            }
          }
          if (flag) {
            tmp7 = closure_1;
            tmp8 = closure_2;
            prototype = closure_1.prototype;
            tmp9 = new.target;
            tmp10 = new.target;
            tmp11 = new closure_1(closure_2.THREEDS_INLINE_IFRAME_DETAILS_INCORRECT);
            tmp12 = tmp11;
            tmp13 = arg3;
            tmp14 = arg3(tmp11);
          } else {
            tmp3 = globalThis;
            _document = document;
            str4 = "div";
            element = document.createElement("div");
            element.innerHTML = global;
            str5 = "suppress";
            if ("suppress" === module.data.mode) {
              str7 = "none";
              element.style.display = "none";
              _document2 = document;
              body = document.body;
              appendChildResult = body.appendChild(element);
              tmp6 = exports();
            } else {
              str6 = "static";
              if ("static" === module.data.mode) {
                tmp15 = InlineIframeFramework;
                obj = {};
                obj.element = element;
                _emitResult = self._emit(InlineIframeFramework.events.AUTHENTICATION_IFRAME_AVAILABLE, obj, () => {
                  arg2();
                });
              }
            }
          }
          return;
        }
      }
      const globalResult = global("./songbird");
      let closure_1 = global("../../../lib/braintree-error");
      let closure_2 = global("../../shared/errors");
      InlineIframeFramework.prototype = Object.create(globalResult.prototype, { constructor: globalResult });
      InlineIframeFramework.events = global("../../../lib/enumerate")(["Array"], "inline-iframe-framework:");
      module.exports = InlineIframeFramework;
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class LegacyFramework {
        constructor(arg0) {
          callResult = closure_0.call(this, global);
          return;
        }
        setUpEventListeners() {
          return;
        }
        transformV1CustomerBillingAddress(arg0) {
          global.billingAddress.line1 = global.billingAddress.streetAddress;
          global.billingAddress.line2 = global.billingAddress.extendedAddress;
          global.billingAddress.city = global.billingAddress.locality;
          global.billingAddress.state = global.billingAddress.region;
          global.billingAddress.countryCode = global.billingAddress.countryCodeAlpha2;
          delete r1.streetAddress;
          delete r1.extendedAddress;
          delete r1.locality;
          delete r1.region;
          delete r1.countryCodeAlpha2;
          return global;
        }
        _createIframe(arg0) {
          closure_0 = global;
          closure_1 = this;
          obj = {
            nonce: global.nonce,
            lookupResponse: global.lookupResponse,
            showLoader: global.showLoader,
            handleAuthResponse(arg0) {
                  self._handleAuthResponse(arg0, arg0);
                }
          };
          _setupV1ElementsResult = this._setupV1Elements(obj);
          return this._v1Iframe;
        }
        _handleAuthResponse(arg0, arg1) {
          closure_0 = global;
          _v1Bus = this._v1Bus;
          teardownResult = _v1Bus.teardown();
          removeFrameResult = module.removeFrame();
          fn = function() {
            const result = this._handleV1AuthResponse(arg0);
          };
          tmp3 = closure_1(fn.bind(this))();
          return;
        }
        _checkForFrameworkSpecificVerifyCardErrors(arg0) {
          str = "an addFrame function";
          if ("function" === typeof global.addFrame) {
            if ("function" !== typeof global.removeFrame) {
              str = "a removeFrame function";
            }
          }
          return str;
        }
        _formatVerifyCardOptions(arg0) {
          _formatVerifyCardOptions = closure_0.prototype._formatVerifyCardOptions;
          callResult = _formatVerifyCardOptions.call(this, global);
          callResult.addFrame = closure_1(global.addFrame);
          callResult.removeFrame = closure_1(global.removeFrame);
          callResult.showLoader = false !== global.showLoader;
          return callResult;
        }
        _formatLookupData(arg0) {
          closure_0 = global;
          closure_1 = this;
          _formatLookupData = closure_0.prototype._formatLookupData;
          callResult = _formatLookupData.call(this, global);
          return callResult.then((arg0) => {
            let billingAddress = arg0.customer;
            if (billingAddress) {
              billingAddress = arg0.customer.billingAddress;
            }
            if (billingAddress) {
              arg0.customer = self.transformV1CustomerBillingAddress(arg0.customer);
            }
            return arg0;
          });
        }
        _presentChallenge(arg0, arg1) {
          obj = { showLoader: module.showLoader, lookupResponse: global.lookup, nonce: global.paymentMethod.nonce, removeFrame: module.removeFrame };
          addFrameResult = module.addFrame(null, this._createIframe(obj));
          return;
        }
      }
      const globalResult = global("./base");
      let closure_1 = global("../../../lib/deferred");
      LegacyFramework.prototype = Object.create(globalResult.prototype, { constructor: LegacyFramework });
      module.exports = LegacyFramework;
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class SongbirdFramework {
        constructor(arg0) {
          callResult = closure_0.call(this, global);
          this._songbirdInitFailed = false;
          obj = { requestedThreeDSecureVersion: "2", sdkVersion: `${closure_11}/3.112.1` };
          this._clientMetadata = obj;
          this.originalSetupOptions = global;
          tmp2 = new closure_9();
          this._getDfReferenceIdPromisePlus = tmp2;
          setupSongbirdResult = this.setupSongbird(global);
          this._cardinalEvents = [];
          return;
        }
        setUpEventListeners(arg0) {
          closure_0 = global;
          onResult = this.on(SongbirdFramework.events.LOOKUP_COMPLETE, (arg0, arg1) => {
            arg0("lookup-complete", arg0, arg1);
          });
          onResult1 = this.on(SongbirdFramework.events.CUSTOMER_CANCELED, () => {
            arg0("customer-canceled");
          });
          onResult2 = this.on(SongbirdFramework.events.UI.CLOSE, () => {
            arg0("authentication-modal-close");
          });
          onResult3 = this.on(SongbirdFramework.events.UI.RENDER, () => {
            arg0("authentication-modal-render");
          });
          onResult4 = this.on(SongbirdFramework.events.UI.RENDERHIDDEN, () => {
            arg0("authentication-modal-render-hidden");
          });
          onResult5 = this.on(SongbirdFramework.events.UI.LOADING.CLOSE, () => {
            arg0("authentication-modal-loader-close");
          });
          onResult6 = this.on(SongbirdFramework.events.UI.LOADING.RENDER, () => {
            arg0("authentication-modal-loader-render");
          });
          return;
        }
        prepareLookup(arg0) {
          closure_0 = global;
          assign = assign({}, global);
          closure_2 = this;
          dfReferenceId = this.getDfReferenceId();
          nextPromise = dfReferenceId.then((dfReferenceId) => {
            closure_1.dfReferenceId = dfReferenceId;
          });
          nextPromise1 = nextPromise.then(() => self._triggerCardinalBinProcess(arg0.bin));
          catchPromise = nextPromise1.catch(() => {

          });
          nextPromise2 = catchPromise.then(() => self._waitForClient());
          return nextPromise2.then(() => {
            let _client;
            ({ _clientMetadata: closure_1.clientMetadata, _client } = self);
            closure_1.authorizationFingerprint = _client.getConfiguration().authorizationFingerprint;
            closure_1.braintreeLibraryVersion = "braintree/web/3.112.1";
            return closure_1;
          });
        }
        initializeChallengeWithLookupResponse(arg0, arg1) {
          closure_0 = global;
          assign = module;
          setupSongbirdResult = this.setupSongbird();
          fn = function() {
            const initializeChallengeWithLookupResponse = arg0.prototype.initializeChallengeWithLookupResponse;
            return initializeChallengeWithLookupResponse.call(this, arg0, arg1);
          };
          return setupSongbirdResult.then(fn.bind(this));
        }
        handleSongbirdError(arg0) {
          this._songbirdInitFailed = true;
          result = this._removeSongbirdListeners();
          sendEventResult = closure_5.sendEvent(this._createPromise, `three-d-secure.cardinal-sdk.songbird-error.${global}`);
          if (this._songbirdPromise) {
            _songbirdPromise = this._songbirdPromise;
            resolveResult = _songbirdPromise.resolve();
          }
          return;
        }
        _triggerCardinalBinProcess(arg0) {
          closure_0 = this;
          assign = Date.now();
          Cardinal = window.Cardinal;
          triggerResult = Cardinal.trigger("bin.process", global);
          return triggerResult.then((Status) => {
            self._clientMetadata.issuerDeviceDataCollectionTimeElapsed = Date.now() - closure_1;
            if (Status) {
              Status = Status.Status;
            }
            self._clientMetadata.issuerDeviceDataCollectionResult = Status;
          });
        }
        transformBillingAddress(arg0, arg1) {
          if (module) {
            tmp = extractAddressData;
            str = "billing";
            tmp2 = extractAddressData(module, global, "billing");
            ({ phoneNumber: global.billingPhoneNumber, givenName: global.billingGivenName, surname: global.billingSurname } = module);
          }
          return global;
        }
        transformShippingAddress(arg0) {
          shippingAddress = global.shippingAddress;
          if (shippingAddress) {
            tmp = extractAddressData;
            str = "shipping";
            tmp2 = extractAddressData(shippingAddress, global, "shipping");
            delete r0.shippingAddress;
          }
          return global;
        }
        _createV1IframeModalElement(arg0) {
          element = document.createElement("div");
          element.innerHTML = "<div data-braintree-v1-fallback-iframe-container=\"true\" style=\"height: 400px;\"></div>";
          element1 = element.querySelector("[data-braintree-v1-fallback-iframe-container=\"true\"]");
          appendChildResult = element1.appendChild(global);
          return element;
        }
        _createV1IframeModal(arg0) {
          closeHandler = function closeHandler() {
            const parentNode = result.parentNode;
            parentNode.removeChild(result);
            self.cancelVerifyCard(constants.THREEDS_CARDINAL_SDK_CANCELED);
            const removed = document.removeEventListener("keyup", self._onV1Keyup);
            self._onV1Keyup = null;
          };
          result = this._createV1IframeModalElement(global);
          closure_0 = result;
          element = result.querySelector("[data-braintree-v1-fallback-close-button]");
          element1 = result.querySelector("[data-braintree-v1-fallback-backdrop]");
          assign = this;
          this._onV1Keyup = (key) => {
            let parentNode = "Escape" === key.key;
            if (parentNode) {
              parentNode = result.parentNode;
            }
            if (parentNode) {
              closeHandler();
            }
          };
          if (element) {
            str = "click";
            listener = element.addEventListener("click", closeHandler);
          }
          if (element1) {
            str2 = "click";
            listener1 = element1.addEventListener("click", closeHandler);
          }
          listener2 = document.addEventListener("keyup", this._onV1Keyup);
          return result;
        }
        _addV1IframeToPage() {
          body = document.body;
          appendChildResult = body.appendChild(this._v1Modal);
          return;
        }
        setupSongbird(arg0) {
          obj = global;
          self = this;
          closure_0 = global;
          assign = this;
          closure_2 = Date.now();
          if (!this._songbirdPromise) {
            if (!obj) {
              obj = {};
            }
            closure_0 = obj;
            tmp = closure_9;
            prototype = closure_9.prototype;
            tmp2 = new.target;
            tmp3 = new.target;
            tmp4 = new closure_9();
            tmp5 = tmp4;
            self._songbirdPromise = tmp4;
            str = "reason-unknown";
            self._v2SetupFailureReason = "reason-unknown";
            _loadCardinalScriptResult = self._loadCardinalScript(obj);
            nextPromise = _loadCardinalScriptResult.then(() => {
              let obj = self;
              if (window.Cardinal) {
                obj = {};
                obj.setupOptions = obj;
                obj.setupStartTime = closure_2;
                let result = obj._configureCardinalSdk(obj);
              } else {
                obj._v2SetupFailureReason = "cardinal-global-unavailable";
                const prototype = ctor.prototype;
                const tmp5 = new ctor(constants.THREEDS_CARDINAL_SDK_SETUP_FAILED);
                result = Promise.reject(tmp5);
              }
              return result;
            });
            catchPromise = nextPromise.catch((arg0) => {
              self._getDfReferenceIdPromisePlus.reject(callback(arg0, { type: constants.THREEDS_CARDINAL_SDK_SETUP_FAILED.type, code: constants.THREEDS_CARDINAL_SDK_SETUP_FAILED.code, message: constants.THREEDS_CARDINAL_SDK_SETUP_FAILED.message }));
              window.clearTimeout(self._songbirdSetupTimeoutReference);
              closure_5.sendEvent(self._client, "three-d-secure.cardinal-sdk.init.setup-failed");
              self.handleSongbirdError(`cardinal-sdk-setup-failed.${closure_1._v2SetupFailureReason}`);
            });
          }
          return self._songbirdPromise;
        }
        _configureCardinalSdk(arg0) {
          closure_0 = global;
          assign = this;
          _waitForClientResult = this._waitForClient();
          nextPromise = _waitForClientResult.then(() => {
            const _client = self._client;
            return _client.getConfiguration().gatewayConfiguration.threeDSecure;
          });
          nextPromise1 = nextPromise.then((jwt) => {
            const result = self._createCardinalConfigurationOptions(jwt.setupOptions);
            const item = closure_12.forEach((arg0) => {
              cardinalListener.setCardinalListener(arg0, () => {
                closure_1._emit(events.events[closure_0.toUpperCase(closure_0)]);
              });
            });
            self.setCardinalListener("payments.setupComplete", self._createPaymentsSetupCompleteCallback());
            const result1 = self._setupFrameworkSpecificListeners();
            Cardinal.configure(result);
            Cardinal2.setup("init", { jwt: jwt.cardinalAuthenticationJWT });
            self._clientMetadata.cardinalDeviceDataCollectionTimeElapsed = Date.now() - jwt.setupStartTime;
            self.setCardinalListener("payments.validated", self._createPaymentsValidatedCallback());
          });
          return nextPromise1.catch((arg0) => {
            self._v2SetupFailureReason = "cardinal-configuration-threw-error";
            return Promise.reject(arg0);
          });
        }
        setCardinalListener(arg0, arg1) {
          _cardinalEvents = this._cardinalEvents;
          arr = _cardinalEvents.push(global);
          Cardinal = window.Cardinal;
          onResult = Cardinal.on(global, module);
          return;
        }
        _setupFrameworkSpecificListeners() {
          return;
        }
        _createCardinalConfigurationOptions(arg0) {
          tmp = global.cardinalSDKConfig || {};
          obj = tmp.payment || {};
          tmp2 = !tmp.logging && global.loggingEnabled;
          if (tmp2) {
            obj = {};
            str = "verbose";
            obj.level = "verbose";
            tmp.logging = obj;
          }
          tmp.payment = {};
          if (obj.hasOwnProperty("displayLoading")) {
            tmp.payment.displayLoading = obj.displayLoading;
          }
          if (obj.hasOwnProperty("displayExitButton")) {
            tmp.payment.displayExitButton = obj.displayExitButton;
          }
          return tmp;
        }
        _loadCardinalScript(arg0) {
          closure_0 = global;
          assign = this;
          _waitForClientResult = this._waitForClient();
          nextPromise = _waitForClientResult.then(() => {
            let timeout = arg0.timeout;
            const src = self._getCardinalScriptSource();
            if (!timeout) {
              timeout = closure_10;
            }
            self._songbirdSetupTimeoutReference = window.setTimeout(() => {
              closure_5.sendEvent(closure_1._client, "three-d-secure.cardinal-sdk.init.setup-timeout");
              closure_1.handleSongbirdError("cardinal-sdk-setup-timeout");
            }, timeout);
            return closure_6.loadScript({ src });
          });
          return nextPromise.catch((arg0) => {
            self._v2SetupFailureReason = "songbird-js-failed-to-load";
            return Promise.reject(callback(arg0, constants.THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED));
          });
        }
        _getCardinalScriptSource() {
          _client = this._client;
          gatewayConfiguration = _client.getConfiguration().gatewayConfiguration;
          if (gatewayConfiguration) {
            str = "production";
            if ("production" === gatewayConfiguration.environment) {
              tmp = closure_8;
              sandbox = closure_8.CARDINAL_SCRIPT_SOURCE.production;
            }
            return sandbox;
          }
          sandbox = closure_8.CARDINAL_SCRIPT_SOURCE.sandbox;
          return;
        }
        _createPaymentsSetupCompleteCallback() {
          closure_0 = this;
          return (sessionId) => {
            self._getDfReferenceIdPromisePlus.resolve(sessionId.sessionId);
            window.clearTimeout(self._songbirdSetupTimeoutReference);
            closure_5.sendEvent(self._createPromise, "three-d-secure.cardinal-sdk.init.setup-completed");
            self._songbirdPromise.resolve();
          };
        }
        getDfReferenceId() {
          return this._getDfReferenceIdPromisePlus;
        }
        _performJWTValidation(arg0, arg1) {
          self = this;
          closure_0 = global;
          assign = module;
          closure_2 = this;
          nonce = this._lookupPaymentMethod.nonce;
          closure_3 = nonce;
          closure_4 = `payment_methods/${nonce}/three_d_secure/authenticate_from_jwt`;
          ChallengeCancel = global;
          if (global) {
            ChallengeCancel = global.Payment;
          }
          if (ChallengeCancel) {
            ChallengeCancel = global.Payment.ExtendedData;
          }
          if (ChallengeCancel) {
            ChallengeCancel = global.Payment.ExtendedData.ChallengeCancel;
          }
          if (ChallengeCancel) {
            tmp = closure_5;
            str = "three-d-secure.verification-flow.cardinal-sdk.cancel-code.";
            sendEventResult = closure_5.sendEvent(self._createPromise, `three-d-secure.verification-flow.cardinal-sdk.cancel-code.${ChallengeCancel}`);
            str2 = "01";
            if ("01" === ChallengeCancel) {
              tmp3 = SongbirdFramework;
              _emitResult = self._emit(SongbirdFramework.events.CUSTOMER_CANCELED);
            }
          }
          sendEventResult1 = closure_5.sendEvent(self._createPromise, "three-d-secure.verification-flow.upgrade-payment-method.started");
          _waitForClientResult = self._waitForClient();
          nextPromise = _waitForClientResult.then(() => {
            const _client = self._client;
            let obj = { method: "post", endpoint: closure_4, data: obj };
            obj = { jwt: arg1, paymentMethodNonce: nonce };
            return _client.request(obj);
          });
          nextPromise1 = nextPromise.then((paymentMethod) => {
            let _lookupPaymentMethod = paymentMethod.paymentMethod;
            if (!_lookupPaymentMethod) {
              _lookupPaymentMethod = self._lookupPaymentMethod;
            }
            const _formatAuthResponseResult = self._formatAuthResponse(_lookupPaymentMethod, paymentMethod.threeDSecureInfo);
            _formatAuthResponseResult.rawCardinalSDKVerificationData = paymentMethod;
            closure_5.sendEvent(self._client, "three-d-secure.verification-flow.upgrade-payment-method.succeeded");
            return Promise.resolve(_formatAuthResponseResult);
          });
          return nextPromise1.catch((originalError) => {
            let obj = { type: constants.THREEDS_JWT_AUTHENTICATION_FAILED.type, code: constants.THREEDS_JWT_AUTHENTICATION_FAILED.code, message: constants.THREEDS_JWT_AUTHENTICATION_FAILED.message, details: obj };
            obj = { originalError };
            closure_5.sendEvent(self._client, "three-d-secure.verification-flow.upgrade-payment-method.errored");
            return Promise.reject(new nonce(obj));
          });
        }
        _createPaymentsValidatedCallback() {
          closure_0 = this;
          return (ActionCode) => {
            closure_5.sendEvent(self._createPromise, `three-d-secure.verification-flow.cardinal-sdk.action-code.${ActionCode.ActionCode.toLowerCase()}`);
            if (self._verifyCardPromisePlus) {
              ActionCode = ActionCode.ActionCode;
              if ("SUCCESS" !== ActionCode) {
                if ("NOACTION" !== ActionCode) {
                  if ("FAILURE" !== ActionCode) {
                    if ("ERROR" === ActionCode) {
                      closure_5.sendEvent(self._createPromise, "three-d-secure.verification-flow.canceled");
                      const prototype = ctor.prototype;
                      const tmp4 = new ctor(constants.THREEDS_CARDINAL_SDK_CANCELED);
                      let obj = {};
                      obj = {};
                      ({ ErrorNumber: obj2.code, ErrorDescription: obj2.description } = ActionCode);
                      obj.originalError = obj;
                      tmp4.details = obj;
                      self._verifyCardPromisePlus.reject(tmp4);
                      const _verifyCardPromisePlus = self._verifyCardPromisePlus;
                    }
                  }
                }
              }
              const result = self._performJWTValidation(ActionCode, arg1);
              result.then((arg0) => {
                closure_0._verifyCardPromisePlus.resolve(arg0);
              }).catch((arg0) => {
                closure_0._verifyCardPromisePlus.reject(arg0);
              });
              const nextPromise = result.then((arg0) => {
                closure_0._verifyCardPromisePlus.resolve(arg0);
              });
            } else {
              self.handleSongbirdError(`cardinal-sdk-setup-error.number-${ActionCode.ErrorNumber}`);
            }
          };
        }
        _checkForVerifyCardError(arg0, arg1) {
          if (global.bin) {
            tmp7 = closure_0;
            _checkForVerifyCardError = closure_0.prototype._checkForVerifyCardError;
            self = this;
            tmp8 = module;
            callResult = _checkForVerifyCardError.call(this, global, module);
          } else {
            tmp = closure_3;
            obj = {};
            tmp2 = closure_7;
            obj.type = closure_7.THREEDS_MISSING_VERIFY_CARD_OPTION.type;
            obj.code = closure_7.THREEDS_MISSING_VERIFY_CARD_OPTION.code;
            str = "verifyCard options must include a BIN.";
            obj.message = "verifyCard options must include a BIN.";
            prototype = closure_3.prototype;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = obj;
            callResult = new closure_3(obj);
          }
          return callResult;
        }
        _checkForFrameworkSpecificVerifyCardErrors(arg0, arg1) {
          ignoreOnLookupCompleteRequirement = "function" === typeof global.onLookupComplete;
          if (!ignoreOnLookupCompleteRequirement) {
            tmp = module;
            ignoreOnLookupCompleteRequirement = module.ignoreOnLookupCompleteRequirement;
          }
          str = undefined;
          if (!ignoreOnLookupCompleteRequirement) {
            str = "an onLookupComplete function";
          }
          return str;
        }
        _formatVerifyCardOptions(arg0) {
          self = this;
          _formatVerifyCardOptions = closure_0.prototype._formatVerifyCardOptions;
          callResult = _formatVerifyCardOptions.call(this, global);
          tmp2 = callResult.additionalInformation || {};
          result = self.transformShippingAddress(self.transformBillingAddress(tmp2, global.billingAddress));
          if (global.onLookupComplete) {
            tmp4 = closure_2;
            callResult.onLookupComplete = closure_2(global.onLookupComplete);
          }
          if (global.email) {
            result.email = global.email;
          }
          if (global.mobilePhoneNumber) {
            result.mobilePhoneNumber = global.mobilePhoneNumber;
          }
          callResult.additionalInformation = result;
          return callResult;
        }
        _onLookupComplete(arg0, arg1) {
          closure_0 = module;
          assign = this;
          _onLookupComplete = closure_0.prototype._onLookupComplete;
          callResult = _onLookupComplete.call(this, global);
          return callResult.then((arg0) => {
            const arg1 = arg0;
            return new Promise((self) => {
              function next() {
                arg0(arg0);
              }
              let acsUrl = self.lookup;
              if (acsUrl) {
                acsUrl = self.lookup.acsUrl;
              }
              self.requiresUserAuthentication = Boolean(acsUrl);
              const prop = closure_1._verifyCardPromisePlus;
              prop.catch(arg1);
              if (self.onLookupComplete) {
                self.onLookupComplete(self, next);
              } else {
                closure_1._emit(events.events.LOOKUP_COMPLETE, self, next);
              }
            });
          });
        }
        _presentChallenge(arg0) {
          tmp = !this._songbirdInitFailed && global.lookup.transactionId;
          if (tmp) {
            tmp2 = globalThis;
            _window = window;
            Cardinal = window.Cardinal;
            obj = {};
            obj.AcsUrl = global.lookup.acsUrl;
            obj.Payload = global.lookup.pareq;
            obj = {};
            obj1 = {};
            obj1.TransactionId = global.lookup.transactionId;
            obj.OrderDetails = obj1;
            str = "cca";
            continueResult = Cardinal.continue("cca", obj, obj);
          }
          return;
        }
        _formatLookupData(arg0) {
          closure_0 = global;
          assign = this;
          _formatLookupData = closure_0.prototype._formatLookupData;
          callResult = _formatLookupData.call(this, global);
          return callResult.then((self) => {
            self.additionalInfo = self.additionalInformation;
            if (self.accountType) {
              self.accountType = self.accountType;
            }
            if (self.challengeRequested) {
              self.challengeRequested = self.challengeRequested;
            }
            if (self.requestedExemptionType) {
              if (closure_13.includes(self.requestedExemptionType)) {
                self.requestedExemptionType = self.requestedExemptionType;
              } else {
                const obj = { code: constants.THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID.code, type: constants.THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID.type };
                const text = `requestedExemptionType `${closure_0.requestedExemptionType}`;
                obj.message = `${`requestedExemptionType `${closure_0.requestedExemptionType}`}` is not a valid exemption. The accepted values are: `${closure_13.join("`, `")}``;
                const prototype = ctor.prototype;
                const tmp13 = new ctor(obj);
                throw tmp13;
              }
            }
            if (self.customFields) {
              self.customFields = self.customFields;
            }
            if (self.dataOnlyRequested) {
              self.dataOnlyRequested = self.dataOnlyRequested;
            }
            if (self.exemptionRequested) {
              self.exemptionRequested = self.exemptionRequested;
            }
            if (self.requestVisaDAF) {
              self.requestVisaDAF = self.requestVisaDAF;
            }
            if (self.bin) {
              self.bin = self.bin;
            }
            if (null != self.cardAdd) {
              self.cardAdd = self.cardAdd;
            }
            if (null != self.cardAddChallengeRequested) {
              self.cardAdd = self.cardAddChallengeRequested;
            }
            if (self.merchantName) {
              self.merchantName = self.merchantName;
            }
            return self.prepareLookup(self);
          });
        }
        cancelVerifyCard(arg0) {
          closure_0 = global;
          assign = this;
          cancelVerifyCard = closure_0.prototype.cancelVerifyCard;
          callResult = cancelVerifyCard.call(this);
          return callResult.then((arg0) => {
            if (self._verifyCardPromisePlus) {
              let tmp = arg0;
              if (!arg0) {
                const prototype = ctor.prototype;
                tmp = new ctor(constants.THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT);
              }
              arg0 = tmp;
              self._verifyCardPromisePlus.reject(arg0);
              const _verifyCardPromisePlus = self._verifyCardPromisePlus;
            }
            return arg0;
          });
        }
        _removeSongbirdListeners() {
          _cardinalEvents = this._cardinalEvents;
          item = _cardinalEvents.forEach((arg0) => {
            Cardinal.off(arg0);
          });
          this._cardinalEvents = [];
          return;
        }
        teardown() {
          self = this;
          if (window.Cardinal) {
            result = self._removeSongbirdListeners();
          }
          teardown = closure_0.prototype.teardown;
          return teardown.call(self);
        }
        _reloadThreeDSecure() {
          closure_0 = this;
          assign = Date.now();
          teardownResult = this.teardown();
          return teardownResult.then(() => {
            const result = self._configureCardinalSdk({ setupOptions: self.originalSetupOptions, setupStartTime: closure_1 });
          });
        }
      }
      function extractAddressData(shippingAddress, shippingAddress, billing) {
        shippingAddress[billing + "Line1"] = shippingAddress.streetAddress;
        shippingAddress[billing + "Line2"] = shippingAddress.extendedAddress;
        shippingAddress[billing + "Line3"] = shippingAddress.line3;
        shippingAddress[billing + "City"] = shippingAddress.locality;
        shippingAddress[billing + "State"] = shippingAddress.region;
        shippingAddress[billing + "PostalCode"] = shippingAddress.postalCode;
        shippingAddress[billing + "CountryCode"] = shippingAddress.countryCodeAlpha2;
      }
      const globalResult = global("./base");
      const assign = global("../../../lib/assign").assign;
      let closure_2 = global("../../../lib/deferred");
      let closure_3 = global("../../../lib/braintree-error");
      let closure_4 = global("../../../lib/convert-to-braintree-error");
      let closure_5 = global("../../../lib/analytics");
      let closure_6 = global("../../../lib/assets");
      let closure_7 = global("../../shared/errors");
      let closure_8 = global("../../shared/constants");
      const globalResult2 = global("@braintree/extended-promise");
      const INTEGRATION_TIMEOUT_MS = global("../../../lib/constants").INTEGRATION_TIMEOUT_MS;
      const PLATFORM = global("../../../lib/constants").PLATFORM;
      let closure_12 = ["sledge", "sleigh", "snow", "toboggan", "ice_skate"];
      let closure_13 = [];
      globalResult2.suppressUnhandledPromiseMessage = true;
      SongbirdFramework.prototype = Object.create(globalResult.prototype, { constructor: SongbirdFramework });
      SongbirdFramework.events = global("../../../lib/enumerate")(["hand", "like", "thumb", "up", "yes", "+238", "+1 345"], "songbird-framework:");
      module.exports = SongbirdFramework;
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class ThreeDSecure {
        constructor(arg0) {
          closure_0 = this;
          callResult = closure_2.call(this);
          tmp2 = new closure_3[global.framework](global);
          this._framework = tmp2;
          _framework = this._framework;
          setUpEventListenersResult = _framework.setUpEventListeners(() => {
            const _emit = self._emit;
            _emit(...arguments);
          });
          return;
        }
        verifyCard(arg0) {
          tmp = undefined;
          if (this.hasListener("lookup-complete")) {
            obj = {};
            flag = true;
            obj.ignoreOnLookupCompleteRequirement = true;
            tmp = obj;
          }
          _framework = this._framework;
          return _framework.verifyCard(global, tmp);
        }
        initializeChallengeWithLookupResponse(arg0) {
          parsed = global;
          if ("string" === typeof global) {
            tmp2 = globalThis;
            _JSON = JSON;
            parsed = JSON.parse(global);
          }
          _framework = this._framework;
          return _framework.initializeChallengeWithLookupResponse(parsed);
        }
        prepareLookup(arg0) {
          _framework = this._framework;
          prepareLookupResult = _framework.prepareLookup(global);
          return prepareLookupResult.then((arg0) => JSON.stringify(arg0));
        }
        cancelVerifyCard() {
          _framework = this._framework;
          return _framework.cancelVerifyCard();
        }
        teardown() {
          obj = closure_0(ThreeDSecure.prototype);
          tmp = closure_1(this, obj.concat(closure_0(closure_2.prototype)));
          _framework = this._framework;
          return _framework.teardown();
        }
      }
      let closure_0 = global("../../lib/methods");
      let closure_1 = global("../../lib/convert-methods-to-error");
      const globalResult1 = global("@braintree/event-emitter");
      let closure_3 = global("./frameworks");
      const child = globalResult1.createChild(ThreeDSecure);
      module.exports = global("@braintree/wrap-promise").wrapPrototype(ThreeDSecure);
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./external/three-d-secure");
      const isHTTPS = global("../lib/is-https").isHTTPS;
      let closure_2 = global("../lib/basic-component-verification");
      let closure_3 = global("../lib/create-deferred-client");
      let closure_4 = global("../lib/create-assets-url");
      let closure_5 = global("../lib/braintree-error");
      let closure_6 = global("../lib/analytics");
      let closure_7 = global("./shared/errors");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(version) {
          let closure_0 = version;
          let str = version.version;
          if (!str) {
            str = "";
          }
          const StringResult = String(str);
          if (StringResult) {
            if ("1" !== StringResult) {
              if ("2" !== StringResult) {
                if ("2-cardinal-modal" !== StringResult) {
                  if ("2-bootstrap3-modal" === StringResult) {
                    let str3 = "bootstrap3-modal";
                  } else {
                    str3 = "inline-iframe";
                    if ("2-inline-iframe" !== StringResult) {
                      let obj = { code: constants.THREEDS_UNRECOGNIZED_VERSION.code, type: constants.THREEDS_UNRECOGNIZED_VERSION.type, message: `Version `${version.version}` is not a recognized version. You may need to update the version of your Braintree SDK to support this version.` };
                      const prototype = ctor.prototype;
                      const tmp7 = new ctor(obj);
                      throw tmp7;
                    }
                  }
                }
                const isHTTPS = str3;
                obj = { name: "3D Secure" };
                ({ client: obj2.client, authorization: obj2.authorization } = version);
                return closure_2.verify(obj).then((self) => {
                  let obj = closure_4.create(self.authorization);
                  obj = { authorization: self.authorization, client: self.client, debug: self.debug, assetsUrl: obj, name: "3D Secure" };
                  obj = closure_3.create(obj);
                  const nextPromise = obj.then((getConfiguration) => {
                    let rejectResult = getConfiguration;
                    const configuration = getConfiguration.getConfiguration();
                    const gatewayConfiguration = configuration.gatewayConfiguration;
                    tmp2.client = getConfiguration;
                    let THREEDS_NOT_ENABLED;
                    if (!gatewayConfiguration.threeDSecureEnabled) {
                      THREEDS_NOT_ENABLED = closure_7.THREEDS_NOT_ENABLED;
                    }
                    if ("TOKENIZATION_KEY" === configuration.authorizationType) {
                      THREEDS_NOT_ENABLED = closure_7.THREEDS_CAN_NOT_USE_TOKENIZATION_KEY;
                    }
                    let tmp6 = "production" === gatewayConfiguration.environment;
                    if (tmp6) {
                      tmp6 = !callback();
                    }
                    if (tmp6) {
                      THREEDS_NOT_ENABLED = closure_7.THREEDS_HTTPS_REQUIRED;
                    }
                    let tmp9 = "legacy" === callback;
                    if (!tmp9) {
                      tmp9 = gatewayConfiguration.threeDSecure && gatewayConfiguration.threeDSecure.cardinalAuthenticationJWT;
                      const tmp10 = gatewayConfiguration.threeDSecure && gatewayConfiguration.threeDSecure.cardinalAuthenticationJWT;
                    }
                    if (!tmp9) {
                      closure_6.sendEvent(tmp2.client, "three-d-secure.initialization.failed.missing-cardinalAuthenticationJWT");
                      THREEDS_NOT_ENABLED = closure_7.THREEDS_NOT_ENABLED_FOR_V2;
                    }
                    if (THREEDS_NOT_ENABLED) {
                      const prototype = ctor.prototype;
                      const tmp23 = new ctor(THREEDS_NOT_ENABLED);
                      rejectResult = Promise.reject(tmp23);
                    } else {
                      closure_6.sendEvent(tmp2.client, "three-d-secure.initialized");
                    }
                    return rejectResult;
                  });
                  const tmp2 = new self({ client: self.client, assetsUrl: obj, createPromise: nextPromise, loggingEnabled: self.loggingEnabled, cardinalSDKConfig: self.cardinalSDKConfig, framework: str3 });
                  let nextPromise1 = tmp2;
                  self = tmp2;
                  if (self.client) {
                    nextPromise1 = nextPromise.then(() => tmp2);
                  }
                  return nextPromise1;
                });
              }
              str3 = "cardinal-modal";
            }
          }
          obj = { code: constants.THREEDS_UNSUPPORTED_VERSION.code, type: constants.THREEDS_UNSUPPORTED_VERSION.type, message: constants.THREEDS_UNSUPPORTED_VERSION.message };
          throw new ctor(obj);
        }),
        VERSION: "3.112.1"
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { LANDING_FRAME_NAME: "braintreethreedsecurelanding", CARDINAL_SCRIPT_SOURCE: { zIndex: "UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES", width: "Please supply either a card or a Hosted Fields instance, not both." } };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      let obj = { placeholder: "UNIONPAY_EXPIRATION_DATE_INCOMPLETE", live-guild-stage: "You must supply expiration month and year or neither.", guild-event: null, type: globalResult.types.MERCHANT };
      obj = { placeholder: "UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID", live-guild-stage: "Enrollment failed due to user input error.", guild-event: null, type: globalResult.types.MERCHANT };
      obj = { placeholder: "UNIONPAY_ENROLLMENT_NETWORK_ERROR", live-guild-stage: "Could not enroll UnionPay card.", guild-event: null, type: globalResult.types.MERCHANT };
      const obj1 = { placeholder: "UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR", live-guild-stage: "Could not fetch card capabilities.", guild-event: null, type: globalResult.types.MERCHANT };
      const obj3 = { placeholder: "UNIONPAY_TOKENIZATION_NETWORK_ERROR", live-guild-stage: "A tokenization network error occurred.", guild-event: null, type: globalResult.types.UNKNOWN };
      const obj4 = { placeholder: "UNIONPAY_MISSING_MOBILE_PHONE_DATA", live-guild-stage: "A `mobile` with `countryCode` and `number` is required.", guild-event: null, type: globalResult.types.NETWORK };
      const obj5 = { placeholder: "UNIONPAY_FAILED_TOKENIZATION", live-guild-stage: "The supplied card data failed tokenization.", guild-event: "payment_methods", type: globalResult.types.UNKNOWN };
      const obj6 = { placeholder: "<string:2506162177>", live-guild-stage: "<string:29740865>", guild-event: "<string:2546618624>", type: globalResult.types.UNKNOWN };
      const obj9 = { placeholder: null, live-guild-stage: null, guild-event: null, type: globalResult.types.UNKNOWN };
      const obj10 = { placeholder: null, live-guild-stage: null, guild-event: null, type: globalResult.types.CUSTOMER };
      const obj11 = { placeholder: null, live-guild-stage: null, guild-event: null, type: globalResult.types.MERCHANT };
      const obj12 = { placeholder: 0.000000000000000000000000000000013099332940581592, live-guild-stage: 16125686437800756000000000000000000000000000000000000000000000000000000000000000000, guild-event: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007293646121829153, type: globalResult.types.MERCHANT };
      const obj14 = { placeholder: null, live-guild-stage: null, guild-event: null, type: globalResult.types.UNKNOWN };
      const obj15 = { placeholder: null, live-guild-stage: null, guild-event: null, type: globalResult.types.MERCHANT };
      const obj16 = { placeholder: null, live-guild-stage: null, guild-event: null, type: globalResult.types.CUSTOMER };
      const obj17 = { placeholder: null, live-guild-stage: null, guild-event: null, type: globalResult.types.UNKNOWN };
      const obj19 = { placeholder: "NavigationRoute", live-guild-stage: "isArray", guild-event: "displayNameAccessibilityHint", type: globalResult.types.MERCHANT };
      const obj21 = { placeholder: 0.000000000000007107211129578996, live-guild-stage: 0.000030525239367309004, guild-event: 338546918044753000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, type: globalResult.types.INTERNAL };
      const obj22 = { placeholder: null, live-guild-stage: null, guild-event: null, type: globalResult.types.MERCHANT };
      module.exports = { THREEDS_NOT_ENABLED: obj, THREEDS_CAN_NOT_USE_TOKENIZATION_KEY: obj, THREEDS_HTTPS_REQUIRED: obj, THREEDS_NOT_ENABLED_FOR_V2: obj1, THREEDS_UNRECOGNIZED_VERSION: { type: globalResult.types.MERCHANT, code: "THREEDS_UNRECOGNIZED_VERSION" }, THREEDS_CARDINAL_SDK_SETUP_FAILED: obj3, THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED: obj4, THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT: obj5, THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT: obj6, THREEDS_CARDINAL_SDK_BAD_CONFIG: { type: globalResult.types.MERCHANT }, THREEDS_CARDINAL_SDK_BAD_JWT: { type: globalResult.types.MERCHANT }, THREEDS_CARDINAL_SDK_ERROR: obj9, THREEDS_CARDINAL_SDK_CANCELED: obj10, THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT: obj11, THREEDS_AUTHENTICATION_IN_PROGRESS: obj12, THREEDS_MISSING_VERIFY_CARD_OPTION: { type: globalResult.types.MERCHANT, code: "THREEDS_MISSING_VERIFY_CARD_OPTION" }, THREEDS_JWT_AUTHENTICATION_FAILED: obj14, THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR: obj15, THREEDS_LOOKUP_VALIDATION_ERROR: obj16, THREEDS_LOOKUP_ERROR: obj17, THREEDS_INLINE_IFRAME_DETAILS_INCORRECT: { type: globalResult.types.UNKNOWN }, THREEDS_NO_VERIFICATION_PAYLOAD: obj19, THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN: { type: globalResult.types.INTERNAL }, THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED: obj21, THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID: obj22, THREEDS_UNSUPPORTED_VERSION: { type: globalResult.types.MERCHANT } };
    },
    { ../../lib/braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = global("../../lib/enumerate")(["+1 345"], "threedsecure:");
    },
    { ../../lib/enumerate: 153 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./shared/unionpay");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("../lib/braintree-error");
      let closure_3 = global("../lib/create-deferred-client");
      let closure_4 = global("../lib/create-assets-url");
      let closure_5 = global("../lib/analytics");
      let closure_6 = global("./shared/errors");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          const obj = { name: "UnionPay", client: client.client, authorization: client.authorization };
          const verifyResult = closure_1.verify({ name: "UnionPay", client: client.client, authorization: client.authorization });
          return closure_1.verify({ name: "UnionPay", client: client.client, authorization: client.authorization }).then((self) => closure_3.create({ authorization: self.authorization, client: self.client, debug: self.debug, assetsUrl: closure_4.create(self.authorization), name: "UnionPay" })).then((getConfiguration) => {
            const configuration = getConfiguration.getConfiguration();
            getConfiguration.client = getConfiguration;
            if (configuration.gatewayConfiguration.unionPay) {
              if (true === configuration.gatewayConfiguration.unionPay.enabled) {
                closure_5.sendEvent(getConfiguration.client, "unionpay.initialized");
                const prototype = getConfiguration.prototype;
                let rejectResult = new getConfiguration(getConfiguration);
              }
              return rejectResult;
            }
            rejectResult = Promise.reject(new closure_2(constants.UNIONPAY_NOT_ENABLED));
          });
        }),
        VERSION: "3.112.1"
      };
    },
    { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, <string:2437386343>: true, <string:1717136993>: true, <string:2307925892>: true, <string:1028231033>: true, <string:2028229464>: true }
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { events: global("../../lib/enumerate")(["+236", "+235", "+56"], "union-pay:"), HOSTED_FIELDS_FRAME_NAME: "braintreeunionpayhostedfields" };
    },
    { ../../lib/enumerate: 153 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT };
      obj = { type: globalResult.types.MERCHANT };
      obj = { type: globalResult.types.MERCHANT };
      const obj1 = { placeholder: true, live-guild-stage: true, guild-event: true, type: globalResult.types.MERCHANT };
      const obj2 = { placeholder: -30815656131510185000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, live-guild-stage: 52283936.12500439, guild-event: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000265886814988778, type: globalResult.types.MERCHANT };
      const obj3 = { placeholder: "r", live-guild-stage: "isArray", guild-event: "Array", type: globalResult.types.MERCHANT };
      const obj4 = { placeholder: false, live-guild-stage: false, guild-event: false, type: globalResult.types.CUSTOMER };
      const obj5 = { placeholder: null, live-guild-stage: null, guild-event: null, type: globalResult.types.NETWORK };
      const obj6 = { placeholder: false, live-guild-stage: false, guild-event: false, type: globalResult.types.NETWORK };
      const obj7 = { placeholder: null, live-guild-stage: null, guild-event: null, type: globalResult.types.NETWORK };
      const obj8 = { placeholder: true, live-guild-stage: true, guild-event: true, type: globalResult.types.MERCHANT };
      module.exports = { UNIONPAY_NOT_ENABLED: obj, UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID: obj, UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED: obj, UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED: obj1, UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES: obj2, UNIONPAY_EXPIRATION_DATE_INCOMPLETE: obj3, UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID: obj4, UNIONPAY_ENROLLMENT_NETWORK_ERROR: obj5, UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR: obj6, UNIONPAY_TOKENIZATION_NETWORK_ERROR: obj7, UNIONPAY_MISSING_MOBILE_PHONE_DATA: obj8, UNIONPAY_FAILED_TOKENIZATION: { type: globalResult.types.CUSTOMER } };
    },
    { ../../lib/braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class UnionPay {
        constructor(arg0) {
          this._options = global;
          return;
        }
        fetchCapabilities(arg0) {
          self = this;
          closure_0 = this;
          client = this._options.client;
          closure_1 = client;
          number = null;
          if (global.card) {
            number = global.card.number;
          }
          hostedFields = global.hostedFields;
          closure_2 = hostedFields;
          if (number) {
            if (hostedFields) {
              tmp19 = globalThis;
              _Promise3 = Promise;
              tmp20 = closure_1;
              tmp21 = closure_7;
              prototype3 = closure_1.prototype;
              tmp22 = new.target;
              tmp23 = new.target;
              tmp24 = new closure_1(closure_7.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES);
              tmp25 = tmp24;
              rejectResult = Promise.reject(tmp24);
            }
            return rejectResult;
          }
          if (number) {
            obj = { 0: "VENMO_DESKTOP_UNKNOWN_ERROR", 0: "Something went wrong with the Venmo Desktop flow." };
            obj = {};
            obj1 = {};
            str = "unionpay";
            obj1.source = "unionpay";
            obj._meta = obj1;
            obj2 = {};
            obj2.number = number;
            obj.creditCard = obj2;
            obj.data = obj;
            requestResult = client.request(obj);
            nextPromise = requestResult.then((arg0) => {
              self.sendEvent(client, "unionpay.capabilities-received");
              return arg0;
            });
            rejectResult = nextPromise.catch((details) => {
              self.sendEvent(client, "unionpay.capabilities-failed");
              if (403 === tmp) {
                let rejectResult = Promise.reject(details);
              } else {
                let obj = { type: constants.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.type, code: constants.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.code, message: constants.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.message };
                obj = { originalError: details };
                obj.details = obj;
                const prototype = client.prototype;
                const tmp9 = new client(obj);
                rejectResult = Promise.reject(tmp9);
              }
              return rejectResult;
            });
          } else if (hostedFields) {
            if (hostedFields._bus) {
              result = self._initializeHostedFields();
              self = result.then;
              selfResult = self(() => new Promise((arg0, arg1) => {
                const _bus = arg0._bus;
                _bus.emit(constants.HOSTED_FIELDS_FETCH_CAPABILITIES, { hostedFields: closure_2 }, (err) => {
                  if (err.err) {
                    const prototype = arg1.prototype;
                    const tmp7 = new arg1(err.err);
                    arg1(tmp7);
                  } else {
                    err(err.payload);
                  }
                });
              }));
            } else {
              tmp10 = globalThis;
              _Promise2 = Promise;
              tmp11 = closure_1;
              tmp12 = closure_7;
              prototype2 = closure_1.prototype;
              tmp13 = new.target;
              tmp14 = new.target;
              tmp15 = new closure_1(closure_7.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID);
              tmp16 = tmp15;
              selfResult = Promise.reject(tmp15);
            }
            tmp18 = selfResult;
          } else {
            tmp2 = globalThis;
            _Promise = Promise;
            tmp3 = closure_1;
            tmp4 = closure_7;
            prototype = closure_1.prototype;
            tmp5 = new.target;
            tmp6 = new.target;
            tmp7 = new closure_1(closure_7.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED);
            tmp8 = tmp7;
            rejectResult = Promise.reject(tmp7);
          }
          return;
        }
        enroll(arg0) {
          closure_0 = this;
          client = this._options.client;
          closure_1 = client;
          ({ card, mobile } = global);
          closure_2 = mobile;
          hostedFields = global.hostedFields;
          closure_3 = hostedFields;
          if (mobile) {
            if (hostedFields) {
              tmp22 = globalThis;
              _Promise4 = Promise;
              if (hostedFields._bus) {
                if (card) {
                  tmp32 = closure_1;
                  tmp33 = closure_7;
                  prototype6 = closure_1.prototype;
                  tmp34 = new.target;
                  tmp35 = new.target;
                  tmp36 = new closure_1(closure_7.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES);
                  tmp37 = tmp36;
                  rejectResult = _Promise4.reject(tmp36);
                } else {
                  prototype5 = _Promise4.prototype;
                  tmp29 = new.target;
                  tmp30 = new.target;
                  rejectResult = new _Promise4((arg0, arg1) => {
                    const self = arg0;
                    const client = arg1;
                    const result = self._initializeHostedFields();
                    result.then(() => {
                      const _bus = arg0._bus;
                      _bus.emit(constants.HOSTED_FIELDS_ENROLL, { hostedFields: closure_3, mobile: closure_2 }, (err) => {
                        if (err.err) {
                          const prototype = lib.prototype;
                          const tmp7 = new lib(err.err);
                          lib(tmp7);
                        } else {
                          callback(err.payload);
                        }
                      });
                    });
                  });
                }
                tmp38 = rejectResult;
              } else {
                tmp23 = closure_1;
                tmp24 = closure_7;
                prototype4 = closure_1.prototype;
                tmp25 = new.target;
                tmp26 = new.target;
                tmp27 = new closure_1(closure_7.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID);
                tmp28 = tmp27;
                return _Promise4.reject(tmp27);
              }
            } else {
              if (card) {
                if (card.number) {
                  obj = {};
                  obj = {};
                  str = "unionpay";
                  obj.source = "unionpay";
                  obj._meta = obj;
                  obj1 = {};
                  obj1.number = card.number;
                  ({ countryCode: obj3.mobileCountryCode, number: obj3.mobileNumber } = mobile);
                  obj.unionPayEnrollment = obj1;
                  if (card.expirationDate) {
                    obj.unionPayEnrollment.expirationDate = card.expirationDate;
                  } else if (card.expirationMonth) {
                    if (card.expirationMonth) {
                      if (card.expirationYear) {
                        ({ expirationYear: obj.unionPayEnrollment.expirationYear, expirationMonth: obj.unionPayEnrollment.expirationMonth } = card);
                      }
                    }
                    tmp15 = globalThis;
                    _Promise3 = Promise;
                    tmp16 = closure_1;
                    tmp17 = closure_7;
                    prototype3 = closure_1.prototype;
                    tmp18 = new.target;
                    tmp19 = new.target;
                    tmp20 = new closure_1(closure_7.UNIONPAY_EXPIRATION_DATE_INCOMPLETE);
                    tmp21 = tmp20;
                    return Promise.reject(tmp20);
                  }
                  obj2 = {};
                  obj2.data = obj;
                  requestResult = client.request(obj2);
                  nextPromise = requestResult.then((enrollmentId) => {
                    self.sendEvent(client, "unionpay.enrollment-succeeded");
                    return { enrollmentId: enrollmentId.unionPayEnrollmentId, smsCodeRequired: enrollmentId.smsCodeRequired };
                  });
                  return nextPromise.catch((details) => {
                    let tmp2 = details;
                    if (403 !== (details.details && details.details.httpStatus)) {
                      if (tmp < 500) {
                        const prototype2 = client.prototype;
                        const tmp13 = new client(constants.UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID);
                        let obj = { originalError: details };
                        tmp13.details = obj;
                        tmp2 = tmp13;
                      } else {
                        const prototype = client.prototype;
                        const tmp7 = new client(constants.UNIONPAY_ENROLLMENT_NETWORK_ERROR);
                        obj = { originalError: details };
                        tmp7.details = obj;
                        tmp2 = tmp7;
                      }
                    }
                    self.sendEvent(client, "unionpay.enrollment-failed");
                    return Promise.reject(tmp2);
                  });
                }
              }
              tmp8 = globalThis;
              _Promise2 = Promise;
              tmp9 = closure_1;
              tmp10 = closure_7;
              prototype2 = closure_1.prototype;
              tmp11 = new.target;
              tmp12 = new.target;
              tmp13 = new closure_1(closure_7.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED);
              tmp14 = tmp13;
              return Promise.reject(tmp13);
            }
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = closure_1;
            tmp3 = closure_7;
            prototype = closure_1.prototype;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = new closure_1(closure_7.UNIONPAY_MISSING_MOBILE_PHONE_DATA);
            tmp7 = tmp6;
            return Promise.reject(tmp6);
          }
          return;
        }
        tokenize(arg0) {
          closure_0 = global;
          closure_1 = this;
          client = this._options.client;
          closure_2 = client;
          ({ card, hostedFields } = global);
          if (card) {
            if (hostedFields) {
              tmp20 = globalThis;
              _Promise3 = Promise;
              tmp21 = closure_1;
              tmp22 = closure_7;
              prototype4 = closure_1.prototype;
              tmp23 = new.target;
              tmp24 = new.target;
              tmp25 = new closure_1(closure_7.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES);
              tmp26 = tmp25;
              rejectResult = Promise.reject(tmp25);
            }
            return rejectResult;
          }
          if (card) {
            obj = {};
            obj = {};
            str = "unionpay";
            obj.source = "unionpay";
            obj._meta = obj;
            obj1 = {};
            obj1.number = global.card.number;
            obj2 = {};
            obj3 = {};
            obj3.id = global.enrollmentId;
            obj2.unionPayEnrollment = obj3;
            obj1.options = obj2;
            obj.creditCard = obj1;
            if (global.smsCode) {
              obj.creditCard.options.unionPayEnrollment.smsCode = global.smsCode;
            }
            if (card.expirationDate) {
              obj.creditCard.expirationDate = card.expirationDate;
            } else {
              tmp19 = card.expirationMonth && card.expirationYear;
              if (tmp19) {
                ({ expirationYear: obj.creditCard.expirationYear, expirationMonth: obj.creditCard.expirationMonth } = card);
              }
            }
            if (global.card.cvv) {
              obj.creditCard.cvv = global.card.cvv;
            }
            obj4 = {};
            obj4.data = obj;
            requestResult = client.request(obj4);
            nextPromise = requestResult.then((arg0) => {
              delete r0.consumed;
              delete r0.threeDSecureInfo;
              arg0.sendEvent(client, "unionpay.nonce-received");
              return arg0.creditCards[0];
            });
            rejectResult = nextPromise.catch((details) => {
              details.sendEvent(client, "unionpay.nonce-failed");
              let tmp3 = details;
              if (403 !== (details.details && details.details.httpStatus)) {
                if (tmp < 500) {
                  const prototype2 = self.prototype;
                  const tmp14 = new self(constants.UNIONPAY_FAILED_TOKENIZATION);
                  let obj = { originalError: details };
                  tmp14.details = obj;
                  tmp3 = tmp14;
                } else {
                  const prototype = self.prototype;
                  const tmp8 = new self(constants.UNIONPAY_TOKENIZATION_NETWORK_ERROR);
                  obj = { originalError: details };
                  tmp8.details = obj;
                  tmp3 = tmp8;
                }
              }
              return Promise.reject(tmp3);
            });
          } else {
            tmp = globalThis;
            if (hostedFields) {
              _Promise2 = Promise;
              if (hostedFields._bus) {
                prototype3 = _Promise2.prototype;
                tmp16 = new.target;
                tmp17 = new.target;
                _Promise2 = new _Promise2((arg0, arg1) => {
                  const self = arg1;
                  const result = self._initializeHostedFields();
                  result.then(() => {
                    const _bus = arg1._bus;
                    _bus.emit(constants.HOSTED_FIELDS_TOKENIZE, arg0, (err) => {
                      if (err.err) {
                        const prototype = lib.prototype;
                        const tmp7 = new lib(err.err);
                        lib(tmp7);
                      } else {
                        callback(err.payload);
                      }
                    });
                  });
                });
              } else {
                tmp9 = closure_1;
                tmp10 = closure_7;
                prototype2 = closure_1.prototype;
                tmp11 = new.target;
                tmp12 = new.target;
                tmp13 = new closure_1(closure_7.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID);
                tmp14 = tmp13;
                _Promise2 = _Promise2.reject(tmp13);
              }
              tmp18 = _Promise2;
            } else {
              _Promise = Promise;
              tmp2 = closure_1;
              tmp3 = closure_7;
              prototype = closure_1.prototype;
              tmp4 = new.target;
              tmp5 = new.target;
              tmp6 = new closure_1(closure_7.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED);
              tmp7 = tmp6;
              rejectResult = Promise.reject(tmp6);
            }
          }
          return;
        }
        teardown() {
          self = this;
          if (this._bus) {
            parentNode = self._hostedFieldsFrame.parentNode;
            removeChildResult = parentNode.removeChild(self._hostedFieldsFrame);
            _bus = self._bus;
            teardownResult = _bus.teardown();
          }
          tmp3 = closure_6(self, closure_10(UnionPay.prototype));
          return Promise.resolve();
        }
        _initializeHostedFields() {
          self = this;
          closure_2 = closure_11();
          closure_3 = this;
          if (!this._hostedFieldsInitializePromise) {
            tmp = globalThis;
            _Promise = Promise;
            prototype = Promise.prototype;
            tmp2 = new.target;
            tmp3 = new.target;
            promise = new Promise((arg0) => {
              let assetsUrl = arg0;
              const client = self._options.client;
              assetsUrl = client.getConfiguration().gatewayConfiguration.assetsUrl;
              const client2 = self._options.client;
              const isDebug = client2.getConfiguration().isDebug;
              let obj = { channel: closure_2, verifyDomain: closure_4 };
              self._bus = new closure_2(obj);
              obj = { name: `${closure_3.HOSTED_FIELDS_FRAME_NAME}_${closure_2}`, src: `${`${closure_0}/web/3.112.1/html/unionpay-hosted-fields-frame`}${closure_5(closure_1)}.html`, height: 0, width: 0 };
              self._hostedFieldsFrame = callback(obj);
              const _bus = self._bus;
              _bus.on(closure_12, (arg0) => {
                arg0(_options._options.client);
                assetsUrl();
              });
              body.appendChild(self._hostedFieldsFrame);
            });
            tmp5 = promise;
            self._hostedFieldsInitializePromise = promise;
          }
          return self._hostedFieldsInitializePromise;
        }
      }
      let closure_0 = global("../../lib/analytics");
      let closure_1 = global("../../lib/braintree-error");
      let closure_2 = global("framebus");
      const globalResult = global("./constants");
      let closure_4 = global("../../lib/is-verified-domain");
      let closure_5 = global("../../lib/use-min");
      let closure_6 = global("../../lib/convert-methods-to-error");
      let closure_7 = global("./errors");
      const events = globalResult.events;
      let closure_9 = global("@braintree/iframer");
      let closure_10 = global("../../lib/methods");
      let closure_11 = global("@braintree/uuid");
      let closure_12 = global("../../lib/constants").BUS_CONFIGURATION_REQUEST_EVENT;
      module.exports = global("@braintree/wrap-promise").wrapPrototype(UnionPay);
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = { PLAID_LINK_JS: "https://cdn.plaid.com/link/v2/stable/link-initialize.js" };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      let obj = { type: globalResult.types.MERCHANT, code: "US_BANK_ACCOUNT_OPTION_REQUIRED" };
      obj = { type: globalResult.types.MERCHANT, code: "US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS" };
      obj = { placeholder: 22002241, live-guild-stage: -733871872, guild-event: -570424251, type: globalResult.types.NETWORK };
      const obj1 = { placeholder: "<string:1776156676>", live-guild-stage: "<string:1359020033>", guild-event: "<string:1346468979>", type: globalResult.types.CUSTOMER };
      const obj2 = { placeholder: 709902716, live-guild-stage: 1359020033, guild-event: -1975439769, type: globalResult.types.MERCHANT };
      const obj3 = { placeholder: "IconComponent", live-guild-stage: "Text", guild-event: "duration", type: globalResult.types.NETWORK };
      const obj4 = { placeholder: -1124072344, live-guild-stage: true, guild-event: true, type: globalResult.types.CUSTOMER };
      const obj5 = { placeholder: "VENMO_INVALID_PROFILE_ID", live-guild-stage: "Venmo profile ID is invalid.", guild-event: null, type: globalResult.types.MERCHANT };
      const obj6 = { placeholder: "VENMO_INVALID_DEEP_LINK_RETURN_URL", live-guild-stage: "Venmo deep link return URL is invalid.", guild-event: null, type: globalResult.types.MERCHANT };
      module.exports = { US_BANK_ACCOUNT_OPTION_REQUIRED: obj, US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS: obj, US_BANK_ACCOUNT_LOGIN_LOAD_FAILED: obj, US_BANK_ACCOUNT_LOGIN_CLOSED: obj1, US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE: obj2, US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR: obj3, US_BANK_ACCOUNT_FAILED_TOKENIZATION: obj4, US_BANK_ACCOUNT_NOT_ENABLED: obj5, US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED: obj6 };
    },
    { ../lib/braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/basic-component-verification");
      let closure_1 = global("../lib/braintree-error");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      let closure_4 = global("./errors");
      let closure_5 = global("./us-bank-account");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          const obj = { name: "US Bank Account", client: client.client, authorization: client.authorization };
          const verifyResult = closure_0.verify({ name: "US Bank Account", client: client.client, authorization: client.authorization });
          return closure_0.verify({ name: "US Bank Account", client: client.client, authorization: client.authorization }).then((self) => closure_2.create({ authorization: self.authorization, client: self.client, debug: self.debug, assetsUrl: closure_3.create(self.authorization), name: "US Bank Account" })).then((client) => {
            client.client = client;
            client = client.client;
            if (client.getConfiguration().gatewayConfiguration.usBankAccount) {
              const prototype2 = ctor2.prototype;
              let rejectResult = new ctor2(client);
            } else {
              const prototype = ctor.prototype;
              const tmp6 = new ctor(constants.US_BANK_ACCOUNT_NOT_ENABLED);
              rejectResult = Promise.reject(tmp6);
            }
            return rejectResult;
          });
        }),
        VERSION: "3.112.1"
      };
    },
    { scrolling: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002848094544824175, minified: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003075942108207193, unminified: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000035316372345355675, id: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004101256148732448, module: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004556951275113873, call: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006675221577529107, id: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004576713829021219 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      class USBankAccount {
        constructor(arg0) {
          this._client = global.client;
          this._isTokenizingBankLogin = false;
          sendEventResult = closure_4.sendEvent(this._client, "usbankaccount.initialized");
          return;
        }
        tokenize(arg0) {
          obj = global;
          self = this;
          if (!global) {
            obj = {};
          }
          if (obj.mandateText) {
            if (!obj.bankDetails) {
              if (obj.bankDetails) {
                _tokenizeBankDetailsResult = self._tokenizeBankDetails(obj);
              } else if (obj.bankLogin) {
                _tokenizeBankDetailsResult = self._tokenizeBankLogin(obj);
              } else {
                tmp10 = globalThis;
                _Promise2 = Promise;
                tmp11 = closure_0;
                obj = {};
                tmp12 = closure_2;
                obj.type = closure_2.US_BANK_ACCOUNT_OPTION_REQUIRED.type;
                tmp13 = closure_2;
                obj.code = closure_2.US_BANK_ACCOUNT_OPTION_REQUIRED.code;
                str2 = "tokenize must be called with bankDetails or bankLogin.";
                obj.message = "tokenize must be called with bankDetails or bankLogin.";
                prototype2 = closure_0.prototype;
                tmp14 = new.target;
                tmp15 = new.target;
                tmp16 = obj;
                tmp17 = new closure_0(obj);
                tmp18 = tmp17;
                _tokenizeBankDetailsResult = Promise.reject(tmp17);
              }
              tmp29 = _tokenizeBankDetailsResult;
            }
            tmp20 = globalThis;
            _Promise3 = Promise;
            tmp21 = closure_0;
            obj1 = {};
            tmp22 = closure_2;
            obj1.type = closure_2.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS.type;
            tmp23 = closure_2;
            obj1.code = closure_2.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS.code;
            str3 = "tokenize must be called with bankDetails or bankLogin, not both.";
            obj1.message = "tokenize must be called with bankDetails or bankLogin, not both.";
            prototype3 = closure_0.prototype;
            tmp24 = new.target;
            tmp25 = new.target;
            tmp26 = obj1;
            tmp27 = new closure_0(obj1);
            tmp28 = tmp27;
            _tokenizeBankDetailsResult = Promise.reject(tmp27);
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = closure_0;
            obj2 = {};
            tmp3 = closure_2;
            obj2.type = closure_2.US_BANK_ACCOUNT_OPTION_REQUIRED.type;
            tmp4 = closure_2;
            obj2.code = closure_2.US_BANK_ACCOUNT_OPTION_REQUIRED.code;
            str = "mandateText property is required.";
            obj2.message = "mandateText property is required.";
            prototype = closure_0.prototype;
            tmp5 = new.target;
            tmp6 = new.target;
            tmp7 = obj2;
            tmp8 = new closure_0(obj2);
            tmp9 = tmp8;
            return Promise.reject(tmp8);
          }
          return;
        }
        _tokenizeBankDetails(arg0) {
          _client = this._client;
          closure_0 = _client;
          bankDetails = global.bankDetails;
          obj = { achMandate: global.mandateText, routingNumber: bankDetails.routingNumber, accountNumber: bankDetails.accountNumber, accountType: accountType.toUpperCase() };
          ({ accountType, billingAddress } = bankDetails);
          tmp = formatBillingAddressForGraphQL;
          if (!billingAddress) {
            billingAddress = {};
          }
          obj.billingAddress = tmp(billingAddress);
          tmp2 = formatDataForOwnershipType(obj, bankDetails);
          obj = { query: closure_8, variables: { input: { usBankAccount: obj } } };
          requestResult = _client.request({ api: "graphQLApi", data: obj });
          nextPromise = requestResult.then((arg0) => {
            closure_4.sendEvent(_client, "usbankaccount.bankdetails.tokenization.succeeded");
            return Promise.resolve(callback2(arg0, "tokenizeUsBankAccount"));
          });
          return nextPromise.catch((arg0) => {
            closure_4.sendEvent(_client, "usbankaccount.bankdetails.tokenization.failed");
            return Promise.reject(callback(arg0));
          });
        }
        _tokenizeBankLogin(arg0) {
          self = this;
          closure_0 = global;
          closure_1 = this;
          _client = this._client;
          closure_2 = _client;
          gatewayConfiguration = _client.getConfiguration().gatewayConfiguration;
          closure_3 = "production" === gatewayConfiguration.environment;
          plaid = gatewayConfiguration.usBankAccount.plaid;
          closure_4 = plaid;
          tmp = globalThis;
          if (global.bankLogin.displayName) {
            if (!plaid) {
              _Promise2 = Promise;
              tmp10 = closure_0;
              tmp11 = closure_2;
              prototype2 = closure_0.prototype;
              tmp12 = new.target;
              tmp13 = new.target;
              tmp14 = new closure_0(closure_2.US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED);
              tmp15 = tmp14;
              rejectResult = Promise.reject(tmp14);
            }
            if (self._isTokenizingBankLogin) {
              _Promise4 = tmp.Promise;
              tmp19 = closure_0;
              tmp20 = closure_2;
              prototype4 = closure_0.prototype;
              tmp21 = new.target;
              tmp22 = new.target;
              tmp23 = new closure_0(closure_2.US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE);
              tmp = tmp23;
              rejectResult1 = _Promise4.reject(tmp23);
            } else {
              flag = true;
              self._isTokenizingBankLogin = true;
              _Promise3 = Promise;
              prototype3 = Promise.prototype;
              tmp16 = new.target;
              tmp17 = new.target;
              rejectResult1 = new Promise((arg0, arg1) => {
                const self = arg1;
                self._loadPlaid((arg0, create) => {
                  if (arg0) {
                    create(arg0);
                  } else {
                    let obj = { clientName: arg0.bankLogin.displayName };
                    let str = "sandbox";
                    if (closure_3) {
                      str = "production";
                    }
                    obj.env = str;
                    obj.key = closure_4.publicKey;
                    obj.onExit = function onExit() {
                      callback._isTokenizingBankLogin = false;
                      closure_4.sendEvent(closure_2, "usbankaccount.banklogin.tokenization.closed.by-user");
                      callback(new closure_0(closure_2.US_BANK_ACCOUNT_LOGIN_CLOSED));
                    };
                    obj.onSuccess = function onSuccess(publicToken, account_id) {
                      const bankLogin = closure_0.bankLogin;
                      let obj = { publicToken };
                      let str = "plaid_account_id";
                      if (closure_3) {
                        str = account_id.account_id;
                      }
                      obj.accountId = str;
                      obj.accountType = account_id.account.subtype.toUpperCase();
                      obj.achMandate = closure_0.mandateText;
                      let billingAddress = bankLogin.billingAddress;
                      if (!billingAddress) {
                        billingAddress = {};
                      }
                      obj.billingAddress = closure_14(billingAddress);
                      callback2(obj, bankLogin);
                      obj = { query: closure_9, variables: { input: { usBankLogin: obj } } };
                      const requestResult = closure_2.request({ api: "graphQLApi", data: obj });
                      const str2 = account_id.account.subtype;
                      const tmp = closure_14;
                      closure_2.request({ api: "graphQLApi", data: obj }).then(() => { ... }).catch(() => { ... });
                    };
                    obj = create.create(obj);
                    obj.open();
                    closure_4.sendEvent(closure_2, "usbankaccount.banklogin.tokenization.started");
                  }
                });
              });
            }
            tmp24 = rejectResult1;
          } else {
            _Promise = Promise;
            tmp2 = closure_0;
            obj = {};
            tmp3 = closure_2;
            obj.type = closure_2.US_BANK_ACCOUNT_OPTION_REQUIRED.type;
            tmp4 = closure_2;
            obj.code = closure_2.US_BANK_ACCOUNT_OPTION_REQUIRED.code;
            str = "displayName property is required when using bankLogin.";
            obj.message = "displayName property is required when using bankLogin.";
            prototype = closure_0.prototype;
            tmp5 = new.target;
            tmp6 = new.target;
            tmp7 = obj;
            tmp8 = new closure_0(obj);
            tmp9 = tmp8;
            return Promise.reject(tmp8);
          }
          return;
        }
        _loadPlaid(arg0) {
          tmp = closure_5(global);
          if (window.Plaid) {
            _window = window;
            tmp11 = null;
            tmpResult = tmp(null, window.Plaid);
          } else {
            _document = document;
            tmp2 = closure_1;
            str = "script[src=\"";
            str2 = "\"]";
            element = document.querySelector(`script[src="${closure_1.PLAID_LINK_JS}"]`);
            if (element) {
              tmp9 = addLoadListeners;
              tmp10 = addLoadListeners(element, tmp);
            } else {
              _document2 = document;
              str3 = "script";
              element1 = document.createElement("script");
              tmp5 = closure_1;
              element1.src = closure_1.PLAID_LINK_JS;
              flag = true;
              element1.async = true;
              tmp6 = addLoadListeners;
              tmp7 = addLoadListeners(element1, tmp);
              _document3 = document;
              body = document.body;
              appendChildResult = body.appendChild(element1);
              self = this;
              this._plaidScript = element1;
            }
          }
          return;
        }
        teardown() {
          self = this;
          if (this._plaidScript) {
            tmp = globalThis;
            _document = document;
            body = document.body;
            removeChildResult = body.removeChild(self._plaidScript);
          }
          tmp3 = closure_6(self, closure_7(USBankAccount.prototype));
          return Promise.resolve();
        }
      }
      function errorFrom(details) {
        let tmp2 = closure_0;
        if (401 === (details.details && details.details.httpStatus)) {
          let US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR = constants3.BRAINTREE_API_ACCESS_RESTRICTED;
        } else if (tmp < 500) {
          US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR = constants2.US_BANK_ACCOUNT_FAILED_TOKENIZATION;
        } else {
          US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR = constants2.US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR;
        }
        tmp2 = new tmp2(US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR);
        tmp2.details = { originalError: details };
        return tmp2;
      }
      function formatTokenizeResponseFromGraphQL(arg0, arg1) {
        const paymentMethod = arg0.data[arg1].paymentMethod;
        return { nonce: paymentMethod.id, details: {}, description: `US bank account ending in - ${paymentMethod.details.last4}`, type: "us_bank_account" };
      }
      function addLoadListeners(element, arg1) {
        let closure_0 = element;
        let closure_1 = arg1;
        function loadHandler() {
          const readyState = this.readyState;
          let tmp = readyState;
          if (readyState) {
            tmp = "loaded" !== readyState;
          }
          if (tmp) {
            tmp = "complete" !== readyState;
          }
          if (!tmp) {
            const removed = arg0.removeEventListener("error", errorHandler);
            const removed1 = arg0.removeEventListener("load", loadHandler);
            const removed2 = arg0.removeEventListener("readystatechange", loadHandler);
            const _window = window;
            arg1(null, window.Plaid);
          }
        }
        let closure_2 = loadHandler;
        function errorHandler() {
          const parentNode = arg0.parentNode;
          parentNode.removeChild(arg0);
          arg1(new arg0(loadHandler.US_BANK_ACCOUNT_LOGIN_LOAD_FAILED));
        }
        let closure_3 = errorHandler;
        const listener = element.addEventListener("error", errorHandler);
        const listener1 = element.addEventListener("load", loadHandler);
        const listener2 = element.addEventListener("readystatechange", loadHandler);
      }
      function formatBillingAddressForGraphQL(streetAddress) {
        return { streetAddress: streetAddress.streetAddress, extendedAddress: streetAddress.extendedAddress, city: streetAddress.locality, state: streetAddress.region, zipCode: streetAddress.postalCode };
      }
      function formatDataForOwnershipType(arg0, bankDetails) {
        if ("personal" === bankDetails.ownershipType) {
          let obj = {};
          ({ firstName: obj2.firstName, lastName: obj2.lastName } = bankDetails);
          arg0.individualOwner = obj;
        } else if ("business" === bankDetails.ownershipType) {
          obj = { businessName: bankDetails.businessName };
          arg0.businessOwner = obj;
        }
      }
      function createGraphQLMutation(UsBankAccount) {
        return "mutation Tokenize" + UsBankAccount + "($input: Tokenize" + UsBankAccount + "Input!) {  tokenize" + UsBankAccount + "(input: $input) {    paymentMethod {      id      details {        ... on UsBankAccountDetails {          last4        }      }    }  }}";
      }
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("./constants");
      let closure_2 = global("./errors");
      let closure_3 = global("../lib/errors");
      let closure_4 = global("../lib/analytics");
      let closure_5 = global("../lib/once");
      let closure_6 = global("../lib/convert-methods-to-error");
      let closure_7 = global("../lib/methods");
      let closure_8 = createGraphQLMutation("UsBankAccount");
      let closure_9 = createGraphQLMutation("UsBankLogin");
      module.exports = global("@braintree/wrap-promise").wrapPrototype(USBankAccount);
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      let obj = { placeholder: "VENMO_TOKENIZATION_FAILED", live-guild-stage: "Venmo encountered a problem", guild-event: null, type: globalResult.types.MERCHANT };
      obj = { type: globalResult.types.MERCHANT, code: "VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND" };
      obj = { type: globalResult.types.UNKNOWN, code: "VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR" };
      module.exports = { VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN: obj, VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND: obj, VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR: obj };
    },
    { ../lib/braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/basic-component-verification");
      let closure_1 = global("../lib/create-deferred-client");
      let closure_2 = global("../lib/create-assets-url");
      let closure_3 = global("./vault-manager");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          return closure_0.verify({ name: "Vault Manager", client: client.client, authorization: client.authorization }).then((self) => {
            let obj = {};
            obj = { authorization: self.authorization, client: self.client, debug: self.debug, assetsUrl: closure_2.create(self.authorization), name: "Vault Manager" };
            obj.createPromise = closure_1.create(obj);
            return new closure_3(obj);
          });
        }),
        VERSION: "3.112.1"
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class VaultManager {
        constructor(arg0) {
          this._createPromise = global.createPromise;
          return;
        }
        fetchPaymentMethods(arg0) {
          obj = global;
          self = this;
          if (!global) {
            obj = {};
          }
          num = 0;
          if (true === obj.defaultFirst) {
            num = 1;
          }
          closure_0 = num;
          _createPromise = self._createPromise;
          nextPromise = _createPromise.then((request) => {
            let obj = { month: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013394127751764505, dayOfYear: 20206864.062501427 };
            obj = { defaultFirst: num };
            obj.data = obj;
            return request.request(obj);
          });
          fn = function(paymentMethods) {
            num.sendEvent(this._createPromise, "vault-manager.fetch-payment-methods.succeeded");
            paymentMethods = paymentMethods.paymentMethods;
            return paymentMethods.map(closure_6);
          };
          return nextPromise.then(fn.bind(self));
        }
        deletePaymentMethod(arg0) {
          closure_0 = global;
          _createPromise = this._createPromise;
          return _createPromise.then((getConfiguration) => {
            if ("CLIENT_TOKEN" === getConfiguration.getConfiguration().authorizationType) {
              let obj = { api: "graphQLApi" };
              obj = {};
              obj = {};
              const obj1 = { singleUseTokenId: getConfiguration };
              obj.input = obj1;
              obj.variables = obj;
              obj.data = obj;
              const requestResult = getConfiguration.request(obj);
              let catchPromise = getConfiguration.request(obj).then(() => {
                arg0.sendEvent(arg0, "vault-manager.delete-payment-method.succeeded");
              }).catch((details) => {
                const originalError = details.details.originalError;
                details.sendEvent(details, "vault-manager.delete-payment-method.failed");
                let first = originalError[0];
                if (first) {
                  first = "NOT_FOUND" === originalError[0].extensions.errorClass;
                }
                let tmp3;
                if (first) {
                  let obj = { type: constants.VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND.type, code: constants.VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND.code, message: `A payment method for payment method nonce `${closure_0}` could not be found.` };
                  obj = { originalError };
                  obj.details = obj;
                  const prototype = ctor.prototype;
                  tmp3 = new ctor(obj);
                }
                if (!tmp3) {
                  obj = { type: constants.VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR.type, code: constants.VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR.code, message: `An unknown error occured when attempting to delete the payment method assocaited with the payment method nonce `${closure_0}`.` };
                  const obj1 = { originalError };
                  obj.details = obj1;
                  const prototype2 = ctor.prototype;
                  tmp3 = new ctor(obj);
                }
                return Promise.reject(tmp3);
              });
              const nextPromise = getConfiguration.request(obj).then(() => {
                arg0.sendEvent(arg0, "vault-manager.delete-payment-method.succeeded");
              });
            } else {
              const prototype = ctor.prototype;
              const tmp6 = new ctor(constants.VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN);
              catchPromise = Promise.reject(tmp6);
            }
            return catchPromise;
          });
        }
        teardown() {
          tmp = closure_3(this, closure_4(VaultManager.prototype));
          return Promise.resolve();
        }
      }
      function formatPaymentMethodPayload(nonce) {
        const obj = { nonce: nonce.nonce, default: nonce.default, details: nonce.details, hasSubscription: nonce.hasSubscription, type: nonce.type };
        if (nonce.description) {
          obj.description = nonce.description;
        }
        if (nonce.binData) {
          obj.binData = nonce.binData;
        }
        return obj;
      }
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("../lib/braintree-error");
      let closure_2 = global("./errors");
      let closure_3 = global("../lib/convert-methods-to-error");
      let closure_4 = global("../lib/methods");
      module.exports = global("@braintree/wrap-promise").wrapPrototype(VaultManager);
    },
    {}
  ];
  items = [
    function(arg0, arg1, arg2) {
      let fn = this;
      if (this) {
        fn = this.__importDefault;
      }
      if (!fn) {
        fn = (__esModule) => {
          if (!__esModule) {
            const obj = { default: __esModule };
            let tmp = obj;
          } else {
            tmp = __esModule;
          }
          return tmp;
        };
      }
      let closure_0 = fn(global("./venmo-desktop"));
      module.exports = function createVenmoDesktop(defaultResult1) {
        return new mod.default(defaultResult1).initialize();
      };
    },
    { ./venmo-desktop: 236 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      arg2.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY = undefined;
      arg2.CREATE_PAYMENT_CONTEXT_QUERY = undefined;
      arg2.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY = undefined;
      arg2.UPDATE_PAYMENT_CONTEXT_QUERY = undefined;
      arg2.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY = undefined;
      arg2.VENMO_PAYMENT_CONTEXT_STATUS_QUERY = undefined;
      arg2.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY = "mutation CreateVenmoQRCodePaymentContext($input: CreateVenmoQRCodePaymentContextInput!) {\n  createVenmoQRCodePaymentContext(input: $input) {\n    clientMutationId\n    venmoQRCodePaymentContext {\n      id\n      merchantId\n      createdAt\n      expiresAt\n    }\n  }\n}";
      arg2.CREATE_PAYMENT_CONTEXT_QUERY = "mutation CreateVenmoPaymentContext($input: CreateVenmoPaymentContextInput!) {\n  createVenmoPaymentContext(input: $input) {\n    clientMutationId\n    venmoPaymentContext {\n      id\n      merchantId\n      createdAt\n      expiresAt\n    }\n  }\n}";
      arg2.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY = "mutation UpdateVenmoQRCodePaymentContext($input: UpdateVenmoQRCodePaymentContextInput!) {\n  updateVenmoQRCodePaymentContext(input: $input) {\n    clientMutationId\n  }\n}";
      arg2.UPDATE_PAYMENT_CONTEXT_QUERY = "mutation UpdateVenmoPaymentContextStatus($input: UpdateVenmoPaymentContextStatusInput!) {\n  updateVenmoPaymentContextStatus(input: $input) {\n    clientMutationId\n  }\n}";
      arg2.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY = "query PaymentContext($id: ID!) {\n  node(id: $id) {\n    ... on VenmoQRCodePaymentContext {\n      status\n      paymentMethodId\n      userName\n    }\n  }\n}";
      arg2.VENMO_PAYMENT_CONTEXT_STATUS_QUERY = "query PaymentContext($id: ID!) {\n  node(id: $id) {\n    ... on VenmoPaymentContext {\n      status\n      paymentMethodId\n      userName\n      payerInfo {\n        firstName\n        lastName\n        phoneNumber\n        email\n        externalId\n        userName\n        billingAddress {\n          fullName\n          addressLine1\n          addressLine2\n          adminArea1\n          adminArea2\n          postalCode\n          countryCode\n        }\n        shippingAddress {\n          fullName\n          addressLine1\n          addressLine2\n          adminArea1\n          adminArea2\n          postalCode\n          countryCode\n        }\n      }\n    }\n  }\n}";
    },
    {}
  ];
  items = [
    function(arg0, arg1, arg2) {
      const self = this;
      let fn = this;
      if (this) {
        fn = self.__assign;
      }
      if (!fn) {
        fn = function() {
          const obj = Object.assign || (arg0) => {
            for (let num = 1; num < length; num = num + 1) {
              let tmp3 = arguments[num];
              let tmp4 = tmp3;
              let tmp5 = tmp2;
              let keys = Object.keys();
              if (keys !== undefined) {
                let tmp2 = tmp5;
                let tmp7 = keys[tmp];
                while (tmp7 !== undefined) {
                  let tmp8 = tmp7;
                  let _Object = Object;
                  tmp5 = tmp7;
                  if (!hasOwnProperty.call(tmp3, tmp7)) {
                    continue;
                  } else {
                    arg0[tmp7] = tmp3[tmp7];
                    tmp5 = tmp7;
                    // continue
                  }
                  continue;
                }
              }
            }
            return arg0;
          };
          return obj(...arguments);
        };
      }
      let fn2 = self;
      if (self) {
        fn2 = self.__importDefault;
      }
      if (!fn2) {
        fn2 = (__esModule) => {
          if (!__esModule) {
            const obj = { default: __esModule };
            let tmp = obj;
          } else {
            tmp = __esModule;
          }
          return tmp;
        };
      }
      let closure_1 = fn2(arg0("framebus"));
      let closure_2 = fn2(arg0("@braintree/iframer"));
      let closure_3 = fn2(arg0("@braintree/uuid"));
      let closure_4 = arg0("../shared/events");
      let closure_5 = arg0("./queries");
      arg2.default = () => {
        class VenmoDesktop {
          constructor(arg0) {
            this.isHidden = true;
            this.env = arg0.environment;
            this.id = closure_3.default();
            ({ profileId: this.profileId, displayName: this.displayName, paymentMethodUsage: this.paymentMethodUsage } = arg0);
            this.shouldUseLegacyQRCodeMutation = !this.paymentMethodUsage;
            obj = { channel: this.id, verifyDomain: arg0.verifyDomain, targetFrames: [] };
            text = `${arg0.url}#${this.env}_${this.id}`;
            _default = new closure_1.default(obj);
            this.bus = _default;
            ({ apiRequest: this.apiRequest, sendEvent: this.sendEvent, Promise: this.Promise } = arg0);
            this.alertBox = document.createElement("div");
            alertBox = this.alertBox;
            attr = alertBox.setAttribute("data-venmo-desktop-id", this.id);
            alertBox2 = this.alertBox;
            attr1 = alertBox2.setAttribute("role", "alert");
            this.alertBox.style.position = "fixed";
            this.alertBox.style.display = "none";
            this.alertBox.style.height = "1px";
            this.alertBox.style.width = "1px";
            this.alertBox.style.overflow = "hidden";
            this.alertBox.style.zIndex = "0";
            this.iframe = closure_2.default({ src: text, name: "venmo-desktop-iframe", style: {}, title: "Venmo Desktop" });
            bus = this.bus;
            addTargetFrameResult = bus.addTargetFrame(this.iframe);
            return;
          }
          initialize() {
            self = this;
            promise = new this.Promise((arg0) => {
              const self = arg0;
              const bus = self.bus;
              bus.on(constants.VENMO_DESKTOP_IFRAME_READY, () => {
                arg0(arg0);
              });
              const bus2 = self.bus;
              bus2.on(constants.VENMO_DESKTOP_REQUEST_NEW_QR_CODE, (self) => {
                self.sendEvent("venmo.tokenize.desktop.restarted-from-error-view");
                self.startPolling();
              });
              body.appendChild(self.iframe);
              body2.appendChild(self.alertBox);
            });
            return promise;
          }
          launchDesktopFlow() {
            self = this;
            this.isHidden = false;
            promise = new this.Promise((arg0, launchDesktopPromiseRejectFunction) => {
              const self = arg0;
              self.launchDesktopPromiseRejectFunction = launchDesktopPromiseRejectFunction;
              function removeListeners() {
                const bus = arg0.bus;
                bus.off(customerCancelledHandler.VENMO_DESKTOP_CUSTOMER_CANCELED, customerCancelledHandler);
                const bus2 = arg0.bus;
                bus2.off(customerCancelledHandler.VENMO_DESKTOP_UNKNOWN_ERROR, unknownErrorHandler);
              }
              function unknownErrorHandler(err) {
                removeListeners();
                err.sendEvent("venmo.tokenize.desktop.unknown-error");
                arg1({ err });
              }
              function customerCancelledHandler(self) {
                removeListeners();
                const result = self.updateVenmoDesktopPaymentContext("CANCELED");
                self.sendEvent("venmo.tokenize.desktop.status-change.canceled-from-modal");
                arg1({});
              }
              self.completedHandler = (arg0) => {
                removeListeners();
                arg0(arg0);
              };
              const bus = self.bus;
              bus.on(customerCancelledHandler.VENMO_DESKTOP_CUSTOMER_CANCELED, customerCancelledHandler);
              const bus2 = self.bus;
              bus2.on(customerCancelledHandler.VENMO_DESKTOP_UNKNOWN_ERROR, unknownErrorHandler);
            });
            this.iframe.style.display = "block";
            setAlertResult = this.setAlert("Generating a QR code, get your Venmo app ready");
            iframe = this.iframe;
            focusResult = iframe.focus();
            startPollingResult = this.startPolling();
            nextPromise = promise.then((arg0) => {
              delete r0.venmoContextId;
              delete r0.launchDesktopPromiseRejectFunction;
              return arg0;
            });
            return nextPromise.catch((arg0) => {
              delete r0.venmoContextId;
              delete r0.launchDesktopPromiseRejectFunction;
              return self.Promise.reject(arg0);
            });
          }
          triggerCompleted(arg0) {
            arg0 = arg0;
            self = this;
            if (!this.isHidden) {
              tmp = globalThis;
              _setTimeout = setTimeout;
              num = 2000;
              timerId = setTimeout(() => {
                if (self.completedHandler) {
                  self.completedHandler(arg0);
                }
                delete r0.completedHandler;
              }, 2000);
            }
            return;
          }
          triggerRejected(arg0) {
            self = this;
            if (this.launchDesktopPromiseRejectFunction) {
              tmp = arg0;
              result = self.launchDesktopPromiseRejectFunction(arg0);
            }
            return;
          }
          hideDesktopFlow() {
            setAlertResult = this.setAlert("");
            this.iframe.style.display = "none";
            bus = this.bus;
            emitResult = bus.emit(closure_4.VENMO_DESKTOP_CLOSED_FROM_PARENT);
            this.isHidden = true;
            return;
          }
          displayError(arg0) {
            self = this;
            if (!this.isHidden) {
              bus = self.bus;
              tmp = closure_4;
              obj = {};
              obj.message = arg0;
              emitResult = bus.emit(closure_4.VENMO_DESKTOP_DISPLAY_ERROR, obj);
              setAlertResult = self.setAlert(arg0);
            }
            return;
          }
          displayQRCode(arg0, arg1) {
            self = this;
            if (!this.isHidden) {
              bus = self.bus;
              tmp = closure_4;
              obj = {};
              tmp2 = arg0;
              obj.id = arg0;
              tmp3 = arg1;
              obj.merchantId = arg1;
              emitResult = bus.emit(closure_4.VENMO_DESKTOP_DISPLAY_QR_CODE, obj);
              str = "To scan the QR code, open your Venmo app";
              setAlertResult = self.setAlert("To scan the QR code, open your Venmo app");
            }
            return;
          }
          authorize() {
            self = this;
            if (!this.isHidden) {
              bus = self.bus;
              tmp = closure_4;
              emitResult = bus.emit(closure_4.VENMO_DESKTOP_AUTHORIZE);
              str = "Venmo account authorized";
              setAlertResult = self.setAlert("Venmo account authorized");
            }
            return;
          }
          authorizing() {
            self = this;
            if (!this.isHidden) {
              bus = self.bus;
              tmp = closure_4;
              emitResult = bus.emit(closure_4.VENMO_DESKTOP_AUTHORIZING);
              str = "Authorize on your Venmo app";
              setAlertResult = self.setAlert("Authorize on your Venmo app");
            }
            return;
          }
          startPolling() {
            self = this;
            venmoDesktopPaymentContext = this.createVenmoDesktopPaymentContext();
            nextPromise = venmoDesktopPaymentContext.then((expiresAt) => {
              const time = new Date(expiresAt.expiresAt).getTime();
              const date = new Date(expiresAt.expiresAt);
              const diff = time - new Date(expiresAt.createdAt).getTime();
              const sum = Date.now() + diff;
              self.displayQRCode(expiresAt.id, expiresAt.merchantId);
              return self.pollForStatusChange(expiresAt.status, sum);
            });
            nextPromise1 = nextPromise.then((userName) => {
              if (userName) {
                const obj = { paymentMethodNonce: userName.paymentMethodId, username: `@${userName.userName || "".replace("@", "")}`, payerInfo: userName.payerInfo };
                let str4 = self.venmoContextId;
                if (!str4) {
                  str4 = "";
                }
                obj.id = str4;
                self.triggerCompleted(obj);
                const str = userName.userName || "";
              }
            });
            return nextPromise1.catch((allowUIToHandleError) => {
              if (!allowUIToHandleError.allowUIToHandleError) {
                self.sendEvent("venmo.tokenize.desktop.unhandled-error");
                self.triggerRejected(allowUIToHandleError);
              }
            });
          }
          pollForStatusChange(arg0, arg1) {
            self = this;
            arg0 = arg0;
            arg1 = arg1;
            self = this;
            if (this.venmoContextId) {
              tmp = globalThis;
              _Date = Date;
              if (Date.now() > arg1) {
                str = "EXPIRED";
                result = self.updateVenmoDesktopPaymentContext("EXPIRED");
                nextPromise = result.then(() => {
                  self.displayError("Something went wrong");
                  self.sendEvent("venmo.tokenize.desktop.status-change.sdk-timeout");
                  return self.Promise.reject({});
                });
              } else {
                result1 = self.lookupVenmoDesktopPaymentContext();
                nextPromise = result1.then((status) => {
                  if (self.venmoContextId) {
                    if (status) {
                      status = status.status;
                      if (status !== status) {
                        self.sendEvent(`venmo.tokenize.desktop.status-change.${closure_0.toLowerCase()}`);
                        if ("CREATED" !== status) {
                          if ("EXPIRED" !== tmp16) {
                            if ("FAILED" !== tmp16) {
                              if ("CANCELED" !== tmp16) {
                                if ("SCANNED" === tmp16) {
                                  self.authorizing();
                                } else if ("APPROVED" === tmp16) {
                                  self.authorize();
                                  return self.Promise.resolve(status);
                                }
                              }
                            }
                          }
                          let str5 = "Something went wrong";
                          if ("CANCELED" === status) {
                            str5 = "The authorization was canceled";
                          }
                          self.displayError(str5);
                          const obj = { allowUIToHandleError: true, reason: status };
                          return self.Promise.reject(obj);
                        }
                      }
                      let _Promise3 = self.Promise;
                      const prototype = _Promise3.prototype;
                      _Promise3 = new _Promise3((arg0, arg1) => {
                        const status = arg0;
                        const timerId = setTimeout(() => { ... }, 1000);
                      });
                      return _Promise3;
                    }
                  }
                  return self.Promise.resolve();
                });
              }
              tmp3 = nextPromise;
            } else {
              _Promise = self.Promise;
              return _Promise.resolve();
            }
            return;
          }
          teardown() {
            self = this;
            bus = this.bus;
            teardownResult = bus.teardown();
            if (this.iframe.parentNode) {
              parentNode = self.iframe.parentNode;
              removeChildResult = parentNode.removeChild(self.iframe);
            }
            if (self.alertBox.parentNode) {
              parentNode2 = self.alertBox.parentNode;
              removeChildResult1 = parentNode2.removeChild(self.alertBox);
            }
            return;
          }
          setAlert(arg0) {
            str = "none";
            if (arg0) {
              str = "block";
            }
            this.alertBox.style.display = str;
            this.alertBox.textContent = arg0;
            return;
          }
          createPaymentContextFromGraphqlLegacyQRCodeMutation(arg0) {
            obj = { environment: this.env, intent: arg0 };
            apiRequestResult = this.apiRequest(closure_5.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY, { input: obj });
            return apiRequestResult.then((createVenmoQRCodePaymentContext) => createVenmoQRCodePaymentContext.createVenmoQRCodePaymentContext.venmoQRCodePaymentContext);
          }
          createPaymentContextFromGraphQL(arg0) {
            self = this;
            obj = { intent: arg0, paymentMethodUsage: this.paymentMethodUsage, customerClient: "DESKTOP" };
            if (this.profileId) {
              obj.merchantProfileId = self.profileId;
            }
            if (self.displayName) {
              obj.displayName = self.displayName;
            }
            apiRequestResult = self.apiRequest(closure_5.CREATE_PAYMENT_CONTEXT_QUERY, { input: obj });
            return apiRequestResult.then((createVenmoPaymentContext) => createVenmoPaymentContext.createVenmoPaymentContext.venmoPaymentContext);
          }
          createVenmoDesktopPaymentContext() {
            self = this;
            self = this;
            if (this.shouldUseLegacyQRCodeMutation) {
              str2 = "PAY_FROM_APP";
              paymentContextFromGraphqlLegacyQRCodeMutation = self.createPaymentContextFromGraphqlLegacyQRCodeMutation("PAY_FROM_APP");
            } else {
              str = "PAY_FROM_APP";
              paymentContextFromGraphqlLegacyQRCodeMutation = self.createPaymentContextFromGraphQL("PAY_FROM_APP");
            }
            return paymentContextFromGraphqlLegacyQRCodeMutation.then((id) => {
              self.venmoContextId = id.id;
              return { id: id.id, status: id.status, merchantId: self.profileId || id.merchantId, createdAt: id.createdAt, expiresAt: id.expiresAt };
            });
          }
          updateVenmoDesktopPaymentContext(arg0, arg1) {
            obj = arg1;
            self = this;
            if (undefined === arg1) {
              obj = {};
            }
            if (self.venmoContextId) {
              obj = {};
              tmp = closure_0;
              obj1 = {};
              obj1.id = self.venmoContextId;
              tmp2 = arg0;
              obj1.status = arg0;
              obj.input = closure_0(obj1, obj);
              tmp3 = closure_5;
              apiRequestResult = self.apiRequest(self.shouldUseLegacyQRCodeMutation ? tmp3.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY : tmp3.UPDATE_PAYMENT_CONTEXT_QUERY, obj);
              return apiRequestResult.then(() => {

              });
            } else {
              _Promise = self.Promise;
              return _Promise.resolve();
            }
          }
          lookupVenmoDesktopPaymentContext() {
            self = this;
            if (this.venmoContextId) {
              tmp = closure_5;
              obj = {};
              obj.id = self.venmoContextId;
              apiRequestResult = self.apiRequest(self.shouldUseLegacyQRCodeMutation ? tmp.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY : tmp.VENMO_PAYMENT_CONTEXT_STATUS_QUERY, obj);
              return apiRequestResult.then((node) => node.node);
            } else {
              _Promise = self.Promise;
              return _Promise.resolve();
            }
          }
        }
        return VenmoDesktop;
      }();
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("../lib/basic-component-verification");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      let closure_4 = global("./shared/errors");
      let closure_5 = global("../lib/braintree-error");
      let closure_6 = global("./venmo");
      let closure_7 = global("./shared/supports-venmo");
      const globalResult = global("@braintree/wrap-promise");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          return closure_1.verify({ name: "Venmo", client: client.client, authorization: client.authorization }).then((self) => {
            if (self.profileId) {
              if ("string" !== typeof self.profileId) {
                const prototype2 = ctor.prototype;
                const tmp18 = new ctor(constants.VENMO_INVALID_PROFILE_ID);
                let rejectResult = Promise.reject(tmp18);
              }
              return rejectResult;
            }
            if (self.deepLinkReturnUrl) {
              if ("string" !== typeof self.deepLinkReturnUrl) {
                const prototype = ctor.prototype;
                const tmp11 = new ctor(constants.VENMO_INVALID_DEEP_LINK_RETURN_URL);
                rejectResult = Promise.reject(tmp11);
              }
            }
            let obj = { authorization: self.authorization, client: self.client, debug: self.debug, assetsUrl: closure_3.create(self.authorization), name: "Venmo" };
            obj = closure_2.create(obj);
            const nextPromise = obj.then((client) => {
              let rejectResult = client;
              tmp3.client = client;
              if (!client.getConfiguration().gatewayConfiguration.payWithVenmo) {
                const prototype = ctor.prototype;
                const tmp7 = new ctor(constants.VENMO_NOT_ENABLED);
                rejectResult = Promise.reject(tmp7);
                const tmp3 = ctor;
              }
              return rejectResult;
            });
            self.createPromise = nextPromise;
            self = new closure_6(self);
            self.sendEvent(nextPromise, "venmo.initialized");
            rejectResult = nextPromise.then(() => tmp3);
          });
        }),
        isBrowserSupported(arg0) {
          return browserSupported.isBrowserSupported(arg0);
        },
        VERSION: "3.112.1"
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("@braintree/browser-detection/is-android");
      const globalResult1 = global("@braintree/browser-detection/is-chrome");
      const globalResult2 = global("@braintree/browser-detection/is-ios");
      const globalResult3 = global("@braintree/browser-detection/is-ios-safari");
      const globalResult4 = global("@braintree/browser-detection/is-ios-webview");
      module.exports = {
        isAndroid: globalResult,
        isAndroidWebview() {
          let tmp = globalResult();
          if (tmp) {
            const _window = window;
            const formatted = window.navigator.userAgent.toLowerCase();
            tmp = formatted.indexOf("wv") > -1;
            const str = window.navigator.userAgent;
          }
          return tmp;
        },
        isChrome: globalResult1,
        isIos: globalResult2,
        isIosChrome() {
          let tmp = globalResult2();
          if (tmp) {
            tmp = globalResult1();
          }
          return tmp;
        },
        isSamsung: global("@braintree/browser-detection/is-samsung"),
        isIosSafari: globalResult3,
        isIosWebview: globalResult4,
        isFacebookOwnedBrowserOnAndroid() {
          const formatted = window.navigator.userAgent.toLowerCase();
          let tmp = formatted.indexOf("huawei") > -1;
          if (tmp) {
            tmp = formatted.indexOf("fban") > -1;
          }
          if (!tmp) {
            const tmp3 = !globalResult();
            let tmp4 = !tmp3;
            if (!tmp3) {
              let tmp5 = formatted.indexOf("fb_iab") > -1;
              if (!tmp5) {
                tmp5 = formatted.indexOf("instagram") > -1;
              }
              tmp4 = tmp5;
            }
            tmp = tmp4;
          }
          return tmp;
        },
        doesNotSupportWindowOpenInIos() {
          const tmp = !globalResult2();
          let tmp2 = !tmp;
          if (!tmp) {
            let tmp4 = globalResult4();
            if (!tmp4) {
              tmp4 = !globalResult3();
            }
            tmp2 = tmp4;
          }
          return tmp2;
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      module.exports = {};
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../../lib/braintree-error");
      let obj = { placeholder: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000032007272748454555, live-guild-stage: 8364225937081637000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, guild-event: 49691156643452330000000000000000000000000000000000, type: globalResult.types.MERCHANT };
      obj = { type: globalResult.types.MERCHANT };
      obj = { placeholder: false, live-guild-stage: false, guild-event: false, type: globalResult.types.MERCHANT };
      const obj3 = { placeholder: "+213", live-guild-stage: "American Samoa", guild-event: "AS", type: globalResult.types.CUSTOMER };
      const obj5 = { placeholder: "Andorra", live-guild-stage: "AD", guild-event: "+376", type: globalResult.types.NETWORK };
      const obj6 = { placeholder: null, live-guild-stage: null, guild-event: null, type: globalResult.types.CUSTOMER };
      const obj7 = { placeholder: "AO", live-guild-stage: "+244", guild-event: "Anguilla", type: globalResult.types.MERCHANT };
      const obj8 = { placeholder: null, live-guild-stage: null, guild-event: null, type: globalResult.types.UNKNOWN };
      const obj9 = { placeholder: true, live-guild-stage: true, guild-event: true, type: globalResult.types.NETWORK };
      const obj10 = { placeholder: "CONTACT_SYNC_MODAL", live-guild-stage: "initialStack", guild-event: "Array", type: globalResult.types.UNKNOWN };
      const obj11 = { placeholder: "r", live-guild-stage: "GRADIENT_EASING_CONFIG", guild-event: "fr-NE", type: globalResult.types.CUSTOMER };
      const obj13 = { placeholder: "+374", live-guild-stage: "Aruba", guild-event: "AW", type: globalResult.types.CUSTOMER };
      const obj15 = { placeholder: 1358954801, live-guild-stage: -1186918205, guild-event: 1090519628, type: globalResult.types.MERCHANT };
      const obj16 = { placeholder: "<string:3074490370>", live-guild-stage: "<string:1358954906>", guild-event: "<string:4181791570>", type: globalResult.types.MERCHANT };
      const obj17 = { placeholder: "CONSOLE_STATUS_HEIGHT", live-guild-stage: "tab", guild-event: null, type: globalResult.types.UNKNOWN };
      const obj18 = { placeholder: "<string:1100080420>", live-guild-stage: "Austria", guild-event: "<string:1091615569>", type: globalResult.types.MERCHANT };
      module.exports = { VENMO_NOT_ENABLED: obj, VENMO_TOKENIZATION_REQUEST_ACTIVE: obj, VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE: obj, VENMO_APP_FAILED: { type: globalResult.types.UNKNOWN }, VENMO_APP_CANCELED: { type: globalResult.types.CUSTOMER }, VENMO_CANCELED: obj3, VENMO_CUSTOMER_CANCELED: { type: globalResult.types.CUSTOMER }, VENMO_NETWORK_ERROR: obj5, VENMO_DESKTOP_CANCELED: obj6, VENMO_TOKENIZATION_CANCELED_BY_MERCHANT: obj7, VENMO_DESKTOP_UNKNOWN_ERROR: obj8, VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED: obj9, VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR: obj10, VENMO_MOBILE_POLLING_TOKENIZATION_EXPIRED: obj11, VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED: { type: globalResult.types.CUSTOMER }, VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT: obj13, VENMO_MOBILE_POLLING_TOKENIZATION_FAILED: { type: globalResult.types.UNKNOWN }, VENMO_INVALID_PROFILE_ID: obj15, VENMO_INVALID_DEEP_LINK_RETURN_URL: obj16, VENMO_TOKENIZATION_FAILED: obj17, VENMO_ECD_DISABLED: obj18 };
    },
    { ../../lib/braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      arg2.VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT = undefined;
      arg2.VENMO_DESKTOP_AUTHORIZE = undefined;
      arg2.VENMO_DESKTOP_AUTHORIZING = undefined;
      arg2.VENMO_DESKTOP_CUSTOMER_CANCELED = undefined;
      arg2.VENMO_DESKTOP_DISPLAY_ERROR = undefined;
      arg2.VENMO_DESKTOP_DISPLAY_QR_CODE = undefined;
      arg2.VENMO_DESKTOP_IFRAME_READY = undefined;
      arg2.VENMO_DESKTOP_CLOSED_FROM_PARENT = undefined;
      arg2.VENMO_DESKTOP_REQUEST_NEW_QR_CODE = undefined;
      arg2.VENMO_DESKTOP_UNKNOWN_ERROR = undefined;
      arg2.VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT = "VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT";
      arg2.VENMO_DESKTOP_AUTHORIZE = "VENMO_DESKTOP_AUTHORIZE";
      arg2.VENMO_DESKTOP_AUTHORIZING = "VENMO_DESKTOP_AUTHORIZING";
      arg2.VENMO_DESKTOP_CUSTOMER_CANCELED = "VENMO_DESKTOP_CUSTOMER_CANCELED";
      arg2.VENMO_DESKTOP_DISPLAY_ERROR = "VENMO_DESKTOP_DISPLAY_ERROR";
      arg2.VENMO_DESKTOP_DISPLAY_QR_CODE = "VENMO_DESKTOP_DISPLAY_QR_CODE";
      arg2.VENMO_DESKTOP_IFRAME_READY = "VENMO_DESKTOP_IFRAME_READY";
      arg2.VENMO_DESKTOP_CLOSED_FROM_PARENT = "VENMO_DESKTOP_CLOSED_FROM_PARENT";
      arg2.VENMO_DESKTOP_REQUEST_NEW_QR_CODE = "VENMO_DESKTOP_REQUEST_NEW_QR_CODE";
      arg2.VENMO_DESKTOP_UNKNOWN_ERROR = "VENMO_DESKTOP_UNKNOWN_ERROR";
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./constants");
      module.exports = function getVenmoUrl(useAllowDesktopWebLogin) {
        if (useAllowDesktopWebLogin.useAllowDesktopWebLogin) {
          let VENMO_WEB_LOGIN_URL = constants.VENMO_WEB_LOGIN_URL;
        } else {
          VENMO_WEB_LOGIN_URL = useAllowDesktopWebLogin.mobileWebFallBack ? tmp.VENMO_APP_OR_MOBILE_AUTH_URL : tmp.VENMO_MOBILE_APP_AUTH_ONLY_URL;
        }
        return VENMO_WEB_LOGIN_URL;
      };
    },
    { ./constants: 239 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("./browser-detection");
      let closure_1 = global("../../lib/in-iframe");
      module.exports = {
        isBrowserSupported(arg0) {
          let obj = arg0;
          let isAndroidResult = closure_0.isAndroid();
          let isIosResult = isAndroidResult;
          if (!isAndroidResult) {
            isIosResult = closure_0.isIos();
          }
          if (isAndroidResult) {
            isAndroidResult = closure_0.isChrome();
          }
          let tmp5 = closure_0.isIosSafari() || isAndroidResult;
          if (!obj) {
            obj = {};
          }
          let tmp7 = true === (obj.allowDesktopWebLogin || obj.allowDesktop);
          const tmp8 = !obj.hasOwnProperty("allowNewBrowserTab") || obj.allowNewBrowserTab;
          let tmp10 = tmp8;
          if (tmp8) {
            tmp10 = !callback();
          }
          let isIosChromeResult = !tmp10;
          if (isIosChromeResult) {
            isIosChromeResult = closure_0.isIosChrome();
          }
          if (!isIosChromeResult) {
            isIosChromeResult = closure_0.isFacebookOwnedBrowserOnAndroid();
          }
          if (!isIosChromeResult) {
            isIosChromeResult = closure_0.isSamsung();
          }
          let tmp16 = !isIosChromeResult;
          if (tmp16) {
            let tmp17 = !tmp9;
            if (tmp17) {
              let isAndroidWebviewResult = closure_0.isAndroidWebview();
              if (!isAndroidWebviewResult) {
                isAndroidWebviewResult = closure_0.isIosWebview();
              }
              tmp17 = isAndroidWebviewResult;
            }
            let tmp21 = !tmp17;
            if (tmp21) {
              if (isIosResult) {
                if (tmp8) {
                  tmp5 = isIosResult;
                }
                tmp7 = tmp5;
              }
              tmp21 = tmp7;
            }
            tmp16 = tmp21;
          }
          return tmp16;
        }
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      function openPopup(frameServiceInstance) {
        frameServiceInstance = frameServiceInstance.frameServiceInstance;
        let closure_0 = frameServiceInstance;
        ({ checkForStatusChange: closure_1, cancelTokenization: closure_2, checkPaymentContextStatus: closure_3 } = frameServiceInstance);
        const tmp = new globalResult();
        let closure_4 = tmp;
        const element = document.getElementById(closure_9);
        const listener = element.addEventListener("click", () => {
          frameServiceInstance.focus();
        });
        const element1 = document.getElementById(closure_8);
        const listener1 = element1.addEventListener("click", () => {
          frameServiceInstance.close();
          callback2();
          callback3();
        });
        frameServiceInstance.open({}, (arg0) => {
          if (arg0) {
            tmp.reject(arg0);
          } else {
            const promise = callback(1);
            callback(1).then((arg0) => {
              closure_4.resolve(arg0);
            }).catch((arg0) => {
              callback().then(() => { ... });
            });
            const nextPromise = callback(1).then((arg0) => {
              closure_4.resolve(arg0);
            });
          }
          frameServiceInstance.close();
          callback3();
        });
        frameServiceInstance.redirect(frameServiceInstance.venmoUrl);
        return tmp;
      }
      function closeBackdrop() {
        const classList = document.getElementById("venmo-desktop-web-backdrop").classList;
        classList.add("hidden");
      }
      function buildAndStyleElements() {
        const element = document.getElementById(closure_5);
        if (element) {
          const classList = element.classList;
          classList.remove("hidden");
        } else {
          const _document = document;
          const element1 = <style />;
          const _document2 = document;
          const element2 = <div />;
          const _document3 = document;
          const element3 = <div />;
          const _document4 = document;
          const element4 = <div />;
          const _document5 = document;
          const element5 = <div />;
          const _document6 = document;
          const element6 = <div />;
          const _document7 = document;
          const element7 = <button />;
          const _document8 = document;
          const element8 = <button />;
          element1.id = "venmo-desktop-web__injected-styles";
          const items = [`#${closure_6} {`, "display: none;", "}", `#${closure_5} {`, "z-index: 3141592632;", "cursor: pointer;", "position: fixed;", "top: 0;", "left: 0;", "bottom: 0;", "width: 100%;", "background: rgba(0, 0, 0, 0.8);", "}"];
          const items1 = [`#${closure_7} {`, "display: flex;", "align-content: center;", "justify-content: center;", "align-items: center;", "width: 100%;", "height: 100%;", "flex-direction: column;", "}"];
          const items2 = [`#${closure_8} {`, "height: 24px;", "width: 380px;", "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", "font-style: normal;", "font-weight: 700;", "font-size: 18px;", "line-height: 24px;", "text-align: center;", "background-color: transparent;", "border: none;", "color: #FFFFFF;", "margin-top: 28px;", "}"];
          const items3 = [`#${closure_9} {`, "width: 400px;", "height: 50px;", "background: #0074DE;", "border-radius: 24px;", "border: none;", "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", "font-style: normal;", "font-weight: 700;", "font-size: 18px;", "color: #FFFFFF;", "margin-top: 44px;", "}"];
          const items4 = [`#${closure_10} {`, "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", "font-style: normal;", "font-weight: 500;", "font-size: 24px;", "line-height: 32px;", "text-align: center;", "color: #FFFFFF;", "margin-top: 32px;", "}"];
          const items5 = [`#${closure_11} {`, "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", "font-style: normal;", "font-weight: 400;", "font-size: 16px;", "line-height: 20px;", "text-align: center;", "color: #FFFFFF;", "margin-top: 16px;", "width: 400px;", "}"];
          const combined = items.concat(items1, items2, items3, items4, items5);
          element1.innerHTML = combined.join("\n");
          element2.id = closure_5;
          element3.id = closure_7;
          element4.id = closure_12;
          element4.innerHTML = "<svg width=\"198\" height=\"58\" viewBox=\"0 0 198 58\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M43.0702 13.6572C44.1935 15.4585 44.6999 17.3139 44.6999 19.6576C44.6999 27.1328 38.1277 36.8436 32.7935 43.6625H20.6099L15.7236 15.2939L26.3917 14.3105L28.9751 34.4966C31.389 30.6783 34.3678 24.6779 34.3678 20.587C34.3678 18.3477 33.9727 16.8225 33.3553 15.5666L43.0702 13.6572Z\" fill=\"white\"/>\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M56.8965 26.1491C58.8596 26.1491 63.8018 25.2772 63.8018 22.5499C63.8018 21.2402 62.8481 20.587 61.7242 20.587C59.7579 20.587 57.1776 22.8763 56.8965 26.1491ZM56.6715 31.5506C56.6715 34.8807 58.5787 36.1873 61.107 36.1873C63.8603 36.1873 66.4966 35.534 69.923 33.8433L68.6324 42.3523C66.2183 43.4976 62.4559 44.2617 58.8039 44.2617C49.5403 44.2617 46.2249 38.8071 46.2249 31.9879C46.2249 23.1496 51.6179 13.765 62.7365 13.765C68.858 13.765 72.2809 17.0949 72.2809 21.7317C72.2815 29.2066 62.4005 31.4965 56.6715 31.5506Z\" fill=\"white\"/>\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M103.067 20.3142C103.067 21.4052 102.897 22.9875 102.727 24.0216L99.5262 43.6622H89.1385L92.0585 25.658C92.1139 25.1696 92.284 24.1865 92.284 23.6411C92.284 22.3314 91.4414 22.0047 90.4282 22.0047C89.0826 22.0047 87.7337 22.6042 86.8354 23.0418L83.5234 43.6625H73.0772L77.8495 14.257H86.8908L87.0052 16.6041C89.1382 15.2404 91.9469 13.7656 95.932 13.7656C101.212 13.765 103.067 16.3845 103.067 20.3142Z\" fill=\"white\"/>\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M133.906 16.9841C136.881 14.9131 139.69 13.765 143.563 13.765C148.897 13.765 150.753 16.3845 150.753 20.3142C150.753 21.4052 150.583 22.9875 150.413 24.0216L147.216 43.6622H136.825L139.801 25.2774C139.855 24.786 139.971 24.1865 139.971 23.8063C139.971 22.3317 139.128 22.0047 138.115 22.0047C136.824 22.0047 135.535 22.5501 134.577 23.0418L131.266 43.6625H120.878L123.854 25.2777C123.908 24.7863 124.02 24.1868 124.02 23.8065C124.02 22.332 123.177 22.0049 122.167 22.0049C120.819 22.0049 119.473 22.6045 118.574 23.0421L115.26 43.6628H104.817L109.589 14.2573H118.52L118.8 16.7122C120.878 15.241 123.684 13.7662 127.446 13.7662C130.704 13.765 132.837 15.129 133.906 16.9841Z\" fill=\"white\"/>\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M171.426 25.5502C171.426 23.1496 170.808 21.513 168.956 21.513C164.857 21.513 164.015 28.55 164.015 32.1498C164.015 34.8807 164.802 36.5709 166.653 36.5709C170.528 36.5709 171.426 29.1497 171.426 25.5502ZM153.458 31.7152C153.458 22.442 158.511 13.765 170.136 13.765C178.896 13.765 182.098 18.7854 182.098 25.7148C182.098 34.8805 177.099 44.3723 165.194 44.3723C156.378 44.3723 153.458 38.7525 153.458 31.7152Z\" fill=\"white\"/>\n</svg>";
          element5.id = closure_10;
          element5.innerText = "What would you like to do?";
          element6.id = closure_11;
          element6.innerText = "Tap cancel payment to cancel and return to the business. Continue payment will relaunch the payment window.";
          element7.id = closure_9;
          element7.innerText = "Continue payment";
          element8.id = closure_8;
          element8.innerText = "Cancel payment";
          const _document9 = document;
          head.appendChild(element1);
          element3.appendChild(element4);
          element3.appendChild(element5);
          element3.appendChild(element6);
          element3.appendChild(element7);
          element3.appendChild(element8);
          element2.appendChild(element3);
          const _document10 = document;
          body.appendChild(element2);
          const listener = element2.addEventListener("click", (stopPropagation) => {
            stopPropagation.stopPropagation();
          });
        }
      }
      let closure_0 = global("../../lib/frame-service/external");
      let closure_1 = global("../../lib/use-min");
      const globalResult = global("@braintree/extended-promise");
      let closure_3 = global("../shared/errors");
      let closure_4 = global("../../lib/braintree-error");
      let closure_5 = "venmo-desktop-web-backdrop";
      let closure_6 = "venmo-desktop-web-backdrop.hidden";
      let closure_7 = "venmo-backdrop-container";
      let closure_8 = "venmo-popup-cancel-button";
      let closure_9 = "venmo-popup-continue-button";
      let closure_10 = "venmo-message";
      let closure_11 = "venmo-instructions";
      let closure_12 = "venmo-full-logo";
      globalResult.suppressUnhandledPromiseMessage = true;
      module.exports = {
        runWebLogin(arg0) {
          buildAndStyleElements();
          return openPopup(arg0);
        },
        openPopup,
        setupDesktopWebLogin(arg0) {
          let assetsUrl;
          let debug;
          const tmp = new globalResult();
          let closure_0 = tmp;
          ({ debug, assetsUrl } = arg0);
          if (!debug) {
            debug = false;
          }
          const rect = { top: Math.round((window.outerHeight - 570) / 2) + window.screenTop, left: Math.round((window.outerWidth - 400) / 2) + window.screenLeft };
          let obj = { name: "venmoDesktopWebLogin", dispatchFrameUrl: `${`${assetsUrl}/web/3.112.1/html`}/dispatch-frame${closure_1(debug)}.html`, openFrameUrl: `${`${assetsUrl}/web/3.112.1/html`}/venmo-landing-frame${closure_1(debug)}.html`, top: rect.top, left: rect.left, height: 570, width: 400 };
          obj = closure_0.create(obj, (arg0) => {
            tmp.resolve(arg0);
          });
          return tmp;
        },
        POPUP_WIDTH: 400,
        POPUP_HEIGHT: 570
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class Venmo {
        constructor(arg0) {
          self = this;
          closure_0 = this;
          self._allowDesktopWebLogin = global.allowDesktopWebLogin || false;
          self._mobileWebFallBack = global.mobileWebFallBack || false;
          self._createPromise = global.createPromise;
          self._allowNewBrowserTab = false !== global.allowNewBrowserTab;
          self._allowWebviews = false !== global.allowWebviews;
          self._allowDesktop = true === global.allowDesktop;
          self._useRedirectForIOS = true === global.useRedirectForIOS;
          ({ profileId: self._profileId, displayName: self._displayName, deepLinkReturnUrl: self._deepLinkReturnUrl, ignoreHistoryChanges: self._ignoreHistoryChanges } = global);
          str = global.paymentMethodUsage || "";
          self._paymentMethodUsage = str.toUpperCase();
          self._shouldUseLegacyFlow = !self._paymentMethodUsage;
          self._requireManualReturn = true === global.requireManualReturn;
          tmp = self._allowDesktop && self._isDesktop() && !self._allowDesktopWebLogin;
          self._useDesktopQRFlow = tmp;
          tmp2 = self._allowDesktopWebLogin && self._isDesktop();
          self._useAllowDesktopWebLogin = tmp2;
          tmp3 = closure_10() || self._requireManualReturn;
          self._cannotHaveReturnUrls = tmp3;
          self._allowAndroidRecreation = false !== global.allowAndroidRecreation;
          self._maxRetryCount = 3;
          self._collectCustomerBillingAddress = global.collectCustomerBillingAddress || false;
          self._collectCustomerShippingAddress = global.collectCustomerShippingAddress || false;
          self._isFinalAmount = global.isFinalAmount || false;
          ({ lineItems: self._lineItems, subTotalAmount: self._subTotalAmount, discountAmount: self._discountAmount, taxAmount: self._taxAmount, shippingAmount: self._shippingAmount, totalAmount: self._totalAmount } = global);
          self._shouldCreateVenmoPaymentContext = self._cannotHaveReturnUrls || !self._shouldUseLegacyFlow;
          sendEventResult = closure_0.sendEvent(self._createPromise, `venmo.desktop-flow.configured.${String(Boolean(self._allowDesktop))}`);
          if (self.hasTokenizationResult()) {
            tmp5 = closure_0;
            str2 = "venmo.appswitch.return-in-new-tab";
            sendEventResult1 = closure_0.sendEvent(self._createPromise, "venmo.appswitch.return-in-new-tab");
          } else if (self._useDesktopQRFlow) {
            _createPromise = self._createPromise;
            self._createPromise = _createPromise.then((getConfiguration) => {
              const self = getConfiguration;
              const gatewayConfiguration = getConfiguration.getConfiguration().gatewayConfiguration;
              const obj = { url: `${gatewayConfiguration.assetsUrl}/web/${closure_18}/html/venmo-desktop-frame.html` };
              let str = "SANDBOX";
              if ("production" === gatewayConfiguration.environment) {
                str = "PRODUCTION";
              }
              obj.environment = str;
              obj.profileId = self._profileId || gatewayConfiguration.payWithVenmo.merchantId;
              ({ _paymentMethodUsage: obj.paymentMethodUsage, _displayName: obj.displayName } = self);
              obj.Promise = Promise;
              obj.apiRequest = function apiRequest(query, variables) {
                return query.request({ api: "graphQLApi", data: { query, variables } }).then((data) => data.data);
              };
              obj.sendEvent = function sendEvent(self) {
                self.sendEvent(self._createPromise, self);
              };
              obj.verifyDomain = closure_6;
              const tmp = closure_16;
              const tmpResult = closure_16(obj);
              return closure_16(obj).then((_venmoDesktopInstance) => {
                _venmoDesktopInstance._venmoDesktopInstance = _venmoDesktopInstance;
                _venmoDesktopInstance.sendEvent(_venmoDesktopInstance._createPromise, "venmo.desktop-flow.presented");
                return _venmoDesktopInstance;
              }).catch((self) => {
                self.sendEvent(self._createPromise, "venmo.desktop-flow.setup-failed");
                self._useDesktopQRFlow = false;
                return self;
              });
            });
          } else if (self._shouldCreateVenmoPaymentContext) {
            num = 250;
            self._mobilePollingInterval = 250;
            num2 = 300000;
            self._mobilePollingExpiresThreshold = 300000;
            _createPromise1 = self._createPromise;
            self._createPromise = _createPromise1.then((getConfiguration) => {
              const self = getConfiguration;
              let str = "mobile-payment-context";
              if (self._cannotHaveReturnUrls) {
                str = "manual-return";
              }
              const configuration = getConfiguration.getConfiguration();
              const obj = { assetsUrl: configuration.gatewayConfiguration.assetsUrl, debug: configuration.isDebug };
              const setupDesktopWebLoginResult = closure_13.setupDesktopWebLogin({ assetsUrl: configuration.gatewayConfiguration.assetsUrl, debug: configuration.isDebug });
              const nextPromise = closure_13.setupDesktopWebLogin({ assetsUrl: configuration.gatewayConfiguration.assetsUrl, debug: configuration.isDebug }).then((_frameServiceInstance) => {
                _frameServiceInstance._frameServiceInstance = _frameServiceInstance;
              });
              const str2 = configuration.gatewayConfiguration.environment;
              self._mobilePollingContextEnvironment = str2.toUpperCase();
              const result = self._createVenmoPaymentContext(getConfiguration);
              const catchPromise = closure_13.setupDesktopWebLogin({ assetsUrl: configuration.gatewayConfiguration.assetsUrl, debug: configuration.isDebug }).then((_frameServiceInstance) => {
                _frameServiceInstance._frameServiceInstance = _frameServiceInstance;
              }).catch((arg0) => arg0);
              const items = [
                catchPromise,
                result.then((self) => {
                  self.sendEvent(self._createPromise, `venmo.${closure_1}.presented`);
                  return self;
                }).catch((originalError) => {
                  originalError.sendEvent(originalError._createPromise, `venmo.${closure_1}.setup-failed`);
                  let tmp2 = closure_9;
                  const obj = { type: constants.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED.type, code: constants.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED.code };
                  if (callback(originalError)) {
                    let message = originalError.details.originalError[0].message;
                  } else {
                    message = constants.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED.message;
                  }
                  obj.message = message;
                  obj.details = { originalError };
                  tmp2 = new tmp2(obj);
                  return Promise.reject(tmp2);
                })
              ];
              const nextPromise1 = result.then((self) => {
                self.sendEvent(self._createPromise, `venmo.${closure_1}.presented`);
                return self;
              });
              const allResult = closure_11.all(items);
              return closure_11.all(items).then((arg0) => Promise.resolve(arg0[1])).catch((arg0) => Promise.reject(arg0));
            });
          }
          return;
        }
        _createVenmoPaymentContext(arg0, arg1) {
          self = this;
          closure_0 = global;
          closure_1 = module;
          closure_3 = this;
          str = "MOBILE_WEB";
          if (this._useAllowDesktopWebLogin) {
            str = "NATIVE_WEB";
          }
          if (self._shouldCreateVenmoPaymentContext) {
            if (self._shouldUseLegacyFlow) {
              obj = {};
              str4 = "graphQLApi";
              obj.api = "graphQLApi";
              obj1 = {};
              tmp13 = closure_17;
              obj1.query = closure_17.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY;
              obj2 = {};
              obj3 = {};
              obj3.environment = self._mobilePollingContextEnvironment;
              str5 = "PAY_FROM_APP";
              obj3.intent = "PAY_FROM_APP";
              obj2.input = obj3;
              obj1.variables = obj2;
              obj.data = obj1;
              requestResult = global.request(obj);
              nextPromise = requestResult.then((data) => data.data.createVenmoQRCodePaymentContext.venmoQRCodePaymentContext);
            } else {
              if (self._collectCustomerBillingAddress) {
                if (!global.getConfiguration().gatewayConfiguration.payWithVenmo.enrichedCustomerDataEnabled) {
                  tmp2 = globalThis;
                  _Promise2 = Promise;
                  tmp3 = closure_9;
                  tmp4 = closure_4;
                  prototype = closure_9.prototype;
                  tmp5 = new.target;
                  tmp6 = new.target;
                  tmp7 = new closure_9(closure_4.VENMO_ECD_DISABLED);
                  tmp8 = tmp7;
                  return Promise.reject(tmp7);
                }
              }
              if (self._lineItems) {
                _lineItems = self._lineItems;
                item = _lineItems.forEach((unitTaxAmount) => {
                  unitTaxAmount.unitTaxAmount = unitTaxAmount.unitTaxAmount || "0";
                });
              }
              obj = {};
              ({ _subTotalAmount: obj.subTotalAmount, _discountAmount: obj.discountAmount, _taxAmount: obj.taxAmount, _shippingAmount: obj.shippingAmount, _totalAmount: obj.totalAmount, _lineItems: obj.lineItems } = self);
              closure_2 = obj;
              tmp10 = globalThis;
              _Object = Object;
              keys = Object.keys(obj);
              obj4 = {};
              str2 = "graphQLApi";
              obj4.api = "graphQLApi";
              obj5 = {};
              tmp11 = closure_17;
              obj5.query = closure_17.CREATE_PAYMENT_CONTEXT_QUERY;
              obj6 = {};
              obj7 = {};
              obj7.paymentMethodUsage = self._paymentMethodUsage;
              str3 = "CONTINUE";
              obj7.intent = "CONTINUE";
              obj7.customerClient = str;
              ({ _isFinalAmount: obj6.isFinalAmount, _displayName: obj6.displayName } = self);
              obj8 = {};
              ({ _collectCustomerBillingAddress: obj7.collectCustomerBillingAddress, _collectCustomerShippingAddress: obj7.collectCustomerShippingAddress } = self);
              tmp12 = undefined;
              if (keys.some((arg0) => undefined !== obj[arg0])) {
                tmp12 = obj;
              }
              obj8.transactionDetails = tmp12;
              obj7.paysheetDetails = obj8;
              obj6.input = obj7;
              obj5.variables = obj6;
              obj4.data = obj5;
              requestResult1 = global.request(obj4);
              nextPromise = requestResult1.then((data) => data.data.createVenmoPaymentContext.venmoPaymentContext);
            }
            return nextPromise.then((expiresAt) => {
              const date = new Date(expiresAt.expiresAt);
              const result = 0.6666 * (date - new Date(expiresAt.createdAt));
              clearTimeout(self._refreshPaymentContextTimeout);
              self._refreshPaymentContextTimeout = setTimeout(() => {
                if (!closure_3._tokenizationInProgress) {
                  const result = closure_3._createVenmoPaymentContext(closure_0, true);
                }
              }, result);
              let _tokenizationInProgress = arg1;
              if (arg1) {
                _tokenizationInProgress = self._tokenizationInProgress;
              }
              if (!_tokenizationInProgress) {
                ({ status: closure_3._venmoPaymentContextStatus, id: closure_3._venmoPaymentContextId } = expiresAt);
              }
            });
          } else {
            tmp = globalThis;
            _Promise = Promise;
            return Promise.resolve();
          }
        }
        appSwitch(arg0) {
          self = this;
          if (this._deepLinkReturnUrl) {
            tmp7 = globalThis;
            _window3 = window;
            platform = window.navigator.platform;
            if (platform) {
              obj = /iPhone|iPad|iPod/;
              _window4 = window;
              platform = obj.test(window.navigator.platform);
            }
            if (platform) {
              tmp14 = closure_0;
              str5 = "venmo.appswitch.start.ios-webview";
              sendEventResult = closure_0.sendEvent(self._createPromise, "venmo.appswitch.start.ios-webview");
              _window9 = window;
              window.location.href = global;
            } else {
              _window5 = window;
              if (window.popupBridge) {
                _window6 = window;
                str2 = "function";
                if ("function" === typeof window.popupBridge.open) {
                  tmp11 = closure_0;
                  str4 = "venmo.appswitch.start.popup-bridge";
                  sendEventResult1 = closure_0.sendEvent(self._createPromise, "venmo.appswitch.start.popup-bridge");
                  _window8 = window;
                  popupBridge = window.popupBridge;
                  openResult = popupBridge.open(global);
                }
              }
              tmp8 = closure_0;
              str3 = "venmo.appswitch.start.webview";
              sendEventResult2 = closure_0.sendEvent(self._createPromise, "venmo.appswitch.start.webview");
              _window7 = window;
              openResult1 = window.open(global);
            }
          } else {
            tmp = closure_0;
            str = "venmo.appswitch.start.browser";
            sendEventResult3 = closure_0.sendEvent(self._createPromise, "venmo.appswitch.start.browser");
            tmp3 = closure_2;
            if (!closure_2.doesNotSupportWindowOpenInIos()) {
              if (!self._shouldUseRedirectStrategy()) {
                tmp4 = globalThis;
                _window = window;
                openResult2 = window.open(global);
              }
            }
            tmp6 = globalThis;
            _window2 = window;
            window.location.href = global;
          }
          return;
        }
        getUrl() {
          _createPromise = this._createPromise;
          fn = function(getConfiguration) {
            const self = this;
            const configuration = getConfiguration.getConfiguration();
            let obj = {};
            let str = this._deepLinkReturnUrl;
            if (!str) {
              const _window = window;
              const _window2 = window;
              str = window.location.href.replace(window.location.hash, "");
              const str2 = window.location.href;
            }
            const payWithVenmo = configuration.gatewayConfiguration.payWithVenmo;
            const analyticsMetadata = configuration.analyticsMetadata;
            const accessToken = payWithVenmo.accessToken;
            obj = { version: analyticsMetadata.sdkVersion, integration: analyticsMetadata.integration, platform: analyticsMetadata.platform, sessionId: analyticsMetadata.sessionId };
            self._isDebug = configuration.isDebug;
            self._assetsUrl = configuration.gatewayConfiguration.assetsUrl;
            let replaced = str.replace(/#*$/, "");
            if (!self._venmoPaymentContextId) {
              if (!self._shouldIncludeReturnUrls()) {
                if (!self._useAllowDesktopWebLogin) {
                  obj.x-success = "NOOP";
                  obj.x-cancel = "NOOP";
                  obj.x-error = "NOOP";
                }
                if (self._allowAndroidRecreation) {
                  obj.allowAndroidRecreation = 1;
                } else {
                  obj.allowAndroidRecreation = 0;
                }
                const _window3 = window;
                obj.ua = window.navigator.userAgent;
                obj.braintree_merchant_id = self._profileId || payWithVenmo.merchantId;
                obj.braintree_access_token = accessToken;
                obj.braintree_environment = payWithVenmo.environment;
                const _btoa = btoa;
                const _JSON = JSON;
                obj.braintree_sdk_data = btoa(JSON.stringify({ _meta: obj }));
                obj = {};
                ({ _useAllowDesktopWebLogin: obj3.useAllowDesktopWebLogin, _mobileWebFallBack: obj3.mobileWebFallBack } = self);
                const text = `${closure_12(obj3)}?`;
                return `${closure_12(obj3)}?` + closure_5.stringify(obj);
              }
              if (self._useAllowDesktopWebLogin) {
                replaced = `${self._assetsUrl + "/web/" + closure_18}/html/redirect-frame.html`;
              }
              obj.x-success = `${tmp3}#venmoSuccess=1`;
              obj.x-cancel = `${tmp3}#venmoCancel=1`;
              obj.x-error = `${tmp3}#venmoError=1`;
            } else {
              const _venmoPaymentContextId = self._venmoPaymentContextId;
              if (self._shouldUseLegacyFlow) {
                let text1 = `${accessToken}|pcid:${_venmoPaymentContextId}`;
              } else {
                obj.resource_id = _venmoPaymentContextId;
                text1 = accessToken;
              }
            }
          };
          return _createPromise.then(fn.bind(this));
        }
        isBrowserSupported() {
          obj = { allowNewBrowserTab: this._allowNewBrowserTab, allowWebviews: this._allowWebviews, allowDesktop: this._allowDesktop, allowDesktopWebLogin: this._allowDesktopWebLogin };
          return closure_1.isBrowserSupported(obj);
        }
        hasTokenizationResult() {
          return this._hasTokenizationResult();
        }
        _hasTokenizationResult(arg0) {
          tmp = getFragmentParameters(global);
          urlParams = closure_15.getUrlParams();
          if (urlParams.resource_id) {
            self = this;
            this._venmoPaymentContextId = urlParams.resource_id;
          }
          tmp3 = tmp.venmoSuccess || tmp.venmoError || tmp.venmoCancel;
          return undefined !== tmp3;
        }
        _shouldIncludeReturnUrls() {
          tmp = !this._deepLinkReturnUrl;
          tmp2 = !tmp;
          if (tmp) {
            tmp2 = !this._cannotHaveReturnUrls;
          }
          return tmp2;
        }
        _isDesktop() {
          isIosResult = closure_2.isIos();
          if (!isIosResult) {
            tmp2 = closure_2;
            isIosResult = closure_2.isAndroid();
          }
          return !isIosResult;
        }
        tokenize(arg0) {
          obj = global;
          self = this;
          closure_0 = this;
          if (!global) {
            obj = {};
          }
          if (true === self._tokenizationInProgress) {
            tmp2 = globalThis;
            _Promise = Promise;
            tmp3 = closure_9;
            tmp4 = closure_4;
            prototype = closure_9.prototype;
            tmp5 = new.target;
            tmp6 = new.target;
            tmp7 = new closure_9(closure_4.VENMO_TOKENIZATION_REQUEST_ACTIVE);
            tmp8 = tmp7;
            rejectResult = Promise.reject(tmp7);
          } else {
            self._tokenizationInProgress = true;
            if (self._useDesktopQRFlow) {
              result = self._tokenizeForDesktopQRFlow(obj);
            } else if (self._useAllowDesktopWebLogin) {
              result = self._tokenizeWebLoginWithRedirect();
            } else if (self._cannotHaveReturnUrls) {
              result = self._tokenizeForMobileWithManualReturn();
            } else {
              result = self._tokenizeForMobileWithHashChangeListeners(obj);
            }
            nextPromise = result.then((arg0) => {
              const self = arg0;
              return self._createPromise.then((arg0) => arg0._createVenmoPaymentContext(arg0)).then((self) => {
                self._tokenizationInProgress = false;
                let obj = { nonce: self.paymentMethodNonce, type: "VenmoAccount" };
                obj = { username: callback(self.username), paymentContextId: self.id };
                obj.details = obj;
                if (self.payerInfo) {
                  obj.details.payerInfo = tmp.payerInfo;
                  obj.details.payerInfo.userName = callback(tmp.payerInfo.userName);
                }
                return obj;
              });
            });
            rejectResult = nextPromise.catch((arg0) => {
              const self = arg0;
              return self._createPromise.then((arg0) => arg0._createVenmoPaymentContext(arg0)).then(() => {
                arg0._tokenizationInProgress = false;
                return Promise.reject(arg0);
              });
            });
          }
          return rejectResult;
        }
        cancelTokenization() {
          self = this;
          if (this._tokenizationInProgress) {
            result = self._removeVisibilityEventListener();
            if (self._tokenizePromise) {
              _tokenizePromise = self._tokenizePromise;
              tmp10 = closure_9;
              tmp11 = closure_4;
              prototype2 = closure_9.prototype;
              tmp12 = new.target;
              tmp13 = new.target;
              tmp14 = new closure_9(closure_4.VENMO_TOKENIZATION_CANCELED_BY_MERCHANT);
              tmp15 = tmp14;
              rejectResult = _tokenizePromise.reject(tmp14);
            }
            tmp17 = globalThis;
            _Promise2 = Promise;
            items = [, ];
            items[0] = self._cancelMobilePaymentContext();
            items[1] = self._cancelVenmoDesktopContext();
            allPromises = Promise.all(items);
          } else {
            tmp = globalThis;
            _Promise = Promise;
            tmp2 = closure_9;
            tmp3 = closure_4;
            prototype = closure_9.prototype;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = new closure_9(closure_4.VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE);
            tmp7 = tmp6;
            allPromises = Promise.reject(tmp6);
          }
          return allPromises;
        }
        _tokenizeWebLoginWithRedirect() {
          closure_0 = this;
          sendEventResult = closure_0.sendEvent(this._createPromise, "venmo.tokenize.web-login.start");
          tmp2 = new closure_11();
          this._tokenizePromise = tmp2;
          url = this.getUrl();
          return url.then((venmoUrl) => {
            const cancelTokenization = self.cancelTokenization;
            const _checkPaymentContextStatus = self._checkPaymentContextStatus;
            const _checkPaymentContextStatusAndProcessResult = self._checkPaymentContextStatusAndProcessResult;
            const obj = { checkForStatusChange: _checkPaymentContextStatusAndProcessResult.bind(self), cancelTokenization: cancelTokenization.bind(self), frameServiceInstance: self._frameServiceInstance, venmoUrl, debug: self._isDebug, checkPaymentContextStatus: _checkPaymentContextStatus.bind(self) };
            const runWebLoginResult = closure_13.runWebLogin({ checkForStatusChange: _checkPaymentContextStatusAndProcessResult.bind(self), cancelTokenization: cancelTokenization.bind(self), frameServiceInstance: self._frameServiceInstance, venmoUrl, debug: self._isDebug, checkPaymentContextStatus: _checkPaymentContextStatus.bind(self) });
            closure_13.runWebLogin({ checkForStatusChange: _checkPaymentContextStatusAndProcessResult.bind(self), cancelTokenization: cancelTokenization.bind(self), frameServiceInstance: self._frameServiceInstance, venmoUrl, debug: self._isDebug, checkPaymentContextStatus: _checkPaymentContextStatus.bind(self) }).then((paymentMethodId) => {
              closure_0.sendEvent(closure_0._createPromise, "venmo.tokenize.web-login.success");
              closure_0._tokenizePromise.resolve({ paymentMethodNonce: paymentMethodId.paymentMethodId, username: paymentMethodId.userName, payerInfo: paymentMethodId.payerInfo, id: closure_0._venmoPaymentContextId });
            }).catch((arg0) => {
              closure_0.sendEvent(closure_0._createPromise, "venmo.tokenize.web-login.failure");
              closure_0._tokenizePromise.reject(arg0);
            });
            return self._tokenizePromise;
          });
        }
        _queryPaymentContextStatus(arg0) {
          closure_0 = global;
          closure_1 = this;
          _createPromise = this._createPromise;
          nextPromise = _createPromise.then((request) => {
            const data = { query: self._shouldUseLegacyFlow ? tmp.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY : tmp.VENMO_PAYMENT_CONTEXT_STATUS_QUERY, variables: obj };
            return request.request({ api: "graphQLApi", data });
          });
          return nextPromise.then((data) => data.data.node);
        }
        _checkPaymentContextStatusAndProcessResult(arg0) {
          closure_0 = global;
          closure_1 = this;
          result = this._checkPaymentContextStatus();
          return result.then((status) => {
            status = status.status;
            if (status !== self._venmoPaymentContextStatus) {
              self._venmoPaymentContextStatus = status;
              status.sendEvent(self._createPromise, "venmo.tokenize.web-login.status-change");
              if ("APPROVED" === status) {
                return Promise.resolve(status);
              } else if ("CANCELED" === status) {
                const prototype2 = ctor.prototype;
                const tmp17 = new ctor(constants.VENMO_CUSTOMER_CANCELED);
                return Promise.reject(tmp17);
              } else if ("FAILED" === status) {
                const prototype = ctor.prototype;
                const tmp10 = new ctor(constants.VENMO_TOKENIZATION_FAILED);
                return Promise.reject(tmp10);
              }
            }
            return new Promise((arg0, arg1) => {
              if (closure_0 < closure_1._maxRetryCount) {
                closure_0 = closure_0 + 1;
                const result = closure_1._checkPaymentContextStatusAndProcessResult(closure_0);
                let catchPromise = result.then(arg0).catch(arg1);
                const nextPromise = result.then(arg0);
              } else {
                const prototype = ctor.prototype;
                const tmp5 = new ctor(constants.VENMO_TOKENIZATION_FAILED);
                catchPromise = arg1(tmp5);
              }
              return catchPromise;
            });
          });
        }
        _checkPaymentContextStatus() {
          result = this._queryPaymentContextStatus(this._venmoPaymentContextId);
          catchPromise = result.catch((details) => Promise.reject(new closure_9({ type: constants.VENMO_NETWORK_ERROR.type, code: constants.VENMO_NETWORK_ERROR.code, message: constants.VENMO_NETWORK_ERROR.message, details })));
          return catchPromise.then((arg0) => Promise.resolve(arg0));
        }
        _pollForStatusChange() {
          self = this;
          closure_0 = this;
          if (Date.now() > this._mobilePollingContextExpiresIn) {
            _Promise = Promise;
            tmp2 = closure_9;
            tmp3 = closure_4;
            prototype = closure_9.prototype;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = new closure_9(closure_4.VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT);
            tmp7 = tmp6;
            rejectResult = Promise.reject(tmp6);
          } else {
            result = self._queryPaymentContextStatus(self._venmoPaymentContextId);
            catchPromise = result.catch((originalError) => {
              let obj = { type: constants.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.type, code: constants.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.code, message: constants.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.message, details: obj };
              obj = { originalError };
              return Promise.reject(new closure_9(obj));
            });
            rejectResult = catchPromise.then((status) => {
              let _createPromise;
              let sendEvent;
              if (status.status !== self._venmoPaymentContextStatus) {
                self._venmoPaymentContextStatus = str;
                ({ sendEvent, _createPromise } = self);
                sendEvent(_createPromise, `venmo.tokenize.manual-return.status-change.${str.toLowerCase()}`);
                if ("EXPIRED" !== str) {
                  if ("FAILED" !== str) {
                    if ("CANCELED" !== str) {
                      if ("APPROVED" === str) {
                        return Promise.resolve(status);
                      }
                    }
                  }
                }
                const prototype = ctor.prototype;
                const tmp11 = new ctor(closure_4["VENMO_MOBILE_POLLING_TOKENIZATION_" + str]);
                return Promise.reject(tmp11);
              }
              return new Promise((arg0, arg1) => {
                const timerId = setTimeout(() => {
                  const _pollForStatusChangeResult = arg0._pollForStatusChange();
                  arg0._pollForStatusChange().then(arg0).catch(arg1);
                }, arg0._mobilePollingInterval);
              });
            });
          }
          return rejectResult;
        }
        _tokenizeForMobileWithManualReturn() {
          closure_0 = this;
          sendEventResult = closure_0.sendEvent(this._createPromise, "venmo.tokenize.manual-return.start");
          this._mobilePollingContextExpiresIn = Date.now() + this._mobilePollingExpiresThreshold;
          tmp2 = new closure_11();
          this._tokenizePromise = tmp2;
          _pollForStatusChangeResult = this._pollForStatusChange();
          nextPromise = _pollForStatusChangeResult.then((paymentMethodId) => {
            self.sendEvent(self._createPromise, "venmo.tokenize.manual-return.success");
            self._tokenizePromise.resolve({ paymentMethodNonce: paymentMethodId.paymentMethodId, username: paymentMethodId.userName, payerInfo: paymentMethodId.payerInfo, id: self._venmoPaymentContextId });
          });
          catchPromise = nextPromise.catch((arg0) => {
            self.sendEvent(self._createPromise, "venmo.tokenize.manual-return.failure");
            self._tokenizePromise.reject(arg0);
          });
          url = this.getUrl();
          return url.then((arg0) => {
            self.appSwitch(arg0);
            return self._tokenizePromise;
          });
        }
        _shouldUseRedirectStrategy() {
          self = this;
          tmp = !closure_2.isIos();
          tmp2 = !tmp;
          if (!tmp) {
            flag = true;
            tmp3 = true === self._mobileWebFallBack || self._useRedirectForIOS;
            tmp2 = tmp3;
          }
          return tmp2;
        }
        _tokenizeForMobileWithHashChangeListeners(arg0) {
          self = this;
          closure_0 = global;
          completeFlow = function completeFlow(arg0) {
            const result = self.processHashChangeFlowResults(arg0);
            result.catch((arg0) => {

            }).then((arg0) => {
              let _ignoreHistoryChanges = closure_3._ignoreHistoryChanges;
              if (!_ignoreHistoryChanges) {
                const _window = window;
                _ignoreHistoryChanges = window.location.hash === closure_3._previousHash;
              }
              if (!_ignoreHistoryChanges) {
                const _window2 = window;
                window.location.hash = closure_3._previousHash;
              }
              const result = closure_3._removeVisibilityEventListener();
              if (closure_0) {
                _tokenizePromise.reject(closure_0);
              } else {
                _tokenizePromise.resolve(arg0);
              }
              delete r0._tokenizePromise;
            });
          };
          closure_3 = this;
          if (this.hasTokenizationResult()) {
            return self.processHashChangeFlowResults();
          } else {
            tmp = closure_0;
            str = "venmo.tokenize.mobile.start";
            sendEventResult = closure_0.sendEvent(self._createPromise, "venmo.tokenize.mobile.start");
            tmp3 = closure_11;
            prototype = closure_11.prototype;
            tmp4 = new.target;
            tmp5 = new.target;
            tmp6 = new closure_11();
            tmp7 = tmp6;
            self._tokenizePromise = tmp6;
            tmp8 = globalThis;
            _window = window;
            self._previousHash = window.location.hash;
            self._onHashChangeListener = (newURL) => {
              const tmp = newURL.newURL.split("#")[1];
              if (self._hasTokenizationResult(tmp)) {
                let closure_1 = true;
                const _clearTimeout = clearTimeout;
                clearTimeout(closure_2);
                completeFlow(tmp);
              }
            };
            _window2 = window;
            str2 = "hashchange";
            flag = false;
            listener = window.addEventListener("hashchange", self._onHashChangeListener, false);
            self._visibilityChangeListener = () => {
              let DEFAULT_PROCESS_RESULTS_DELAY = arg0.processResultsDelay;
              if (!DEFAULT_PROCESS_RESULTS_DELAY) {
                DEFAULT_PROCESS_RESULTS_DELAY = self.DEFAULT_PROCESS_RESULTS_DELAY;
              }
              if (!tmp2) {
                const _setTimeout = setTimeout;
                const timeout = setTimeout(completeFlow, DEFAULT_PROCESS_RESULTS_DELAY);
              }
            };
            url = self.getUrl();
            return url.then((arg0) => {
              self.appSwitch(arg0);
              const timerId = setTimeout(() => {
                const _document = window.document;
                const listener = _document.addEventListener(callback(), obj._visibilityChangeListener);
              }, self.DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY);
              return self._tokenizePromise;
            });
          }
        }
        _tokenizeForDesktopQRFlow() {
          closure_0 = this;
          sendEventResult = closure_0.sendEvent(this._createPromise, "venmo.tokenize.desktop.start");
          tmp2 = new closure_11();
          this._tokenizePromise = tmp2;
          _createPromise = this._createPromise;
          nextPromise = _createPromise.then(() => {
            const _venmoDesktopInstance = self._venmoDesktopInstance;
            return _venmoDesktopInstance.launchDesktopFlow();
          });
          nextPromise1 = nextPromise.then((arg0) => {
            const _venmoDesktopInstance = self._venmoDesktopInstance;
            _venmoDesktopInstance.hideDesktopFlow();
            self.sendEvent(self._createPromise, "venmo.tokenize.desktop.success");
            self._tokenizePromise.resolve(arg0);
          });
          catchPromise = nextPromise1.catch((originalError) => {
            self.sendEvent(self._createPromise, "venmo.tokenize.desktop.failure");
            if (self._venmoDesktopInstance) {
              const _venmoDesktopInstance = self._venmoDesktopInstance;
              _venmoDesktopInstance.hideDesktopFlow();
            }
            if (originalError) {
              if ("CUSTOMER_CANCELED" === originalError.reason) {
                const prototype = ctor.prototype;
                const tmp11 = new ctor(constants.VENMO_DESKTOP_CANCELED);
                self._tokenizePromise.reject(tmp11);
                const _tokenizePromise2 = self._tokenizePromise;
              }
            }
            let obj = { type: constants.VENMO_DESKTOP_UNKNOWN_ERROR.type, code: constants.VENMO_DESKTOP_UNKNOWN_ERROR.code, message: constants.VENMO_DESKTOP_UNKNOWN_ERROR.message, details: obj };
            obj = { originalError };
            self._tokenizePromise.reject(new ctor(obj));
          });
          return this._tokenizePromise;
        }
        _cancelMobilePaymentContext() {
          closure_0 = this;
          _createPromise = this._createPromise;
          return _createPromise.then((request) => {
            if (self._venmoPaymentContextId) {
              let obj = closure_17;
              obj = { api: "graphQLApi" };
              obj = {};
              obj.query = self._shouldUseLegacyFlow ? obj.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY : obj.UPDATE_PAYMENT_CONTEXT_QUERY;
              obj = {};
              const obj1 = { id: self._venmoPaymentContextId, status: "CANCELED" };
              obj.input = obj1;
              obj.variables = obj;
              obj.data = obj;
              request.request(obj);
              const tmp3 = self._shouldUseLegacyFlow ? obj.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY : obj.UPDATE_PAYMENT_CONTEXT_QUERY;
            } else {
              return Promise.resolve();
            }
          });
        }
        _cancelVenmoDesktopContext() {
          closure_0 = this;
          _createPromise = this._createPromise;
          return _createPromise.then(() => {
            if (self._venmoDesktopInstance) {
              const _venmoDesktopInstance = self._venmoDesktopInstance;
              const result = _venmoDesktopInstance.updateVenmoDesktopPaymentContext("CANCELED");
            }
            return Promise.resolve();
          });
        }
        teardown() {
          closure_0 = this;
          result = this._removeVisibilityEventListener();
          _createPromise = this._createPromise;
          fn = function() {
            if (self._venmoDesktopInstance) {
              const _venmoDesktopInstance = self._venmoDesktopInstance;
              _venmoDesktopInstance.teardown();
            }
            clearTimeout(self._refreshPaymentContextTimeout);
            const result = self._cancelMobilePaymentContext();
            callback2(this, callback(ctor.prototype));
          };
          return _createPromise.then(fn.bind(this));
        }
        _removeVisibilityEventListener() {
          removed = window.removeEventListener("hashchange", this._onHashChangeListener);
          _document = window.document;
          removed1 = _document.removeEventListener(documentVisibilityChangeEventName(), this._visibilityChangeListener);
          delete r1._visibilityChangeListener;
          delete r1._onHashChangeListener;
          return;
        }
        processHashChangeFlowResults(arg0) {
          closure_0 = this;
          closure_1 = getFragmentParameters(global);
          promise = new Promise((arg0, arg1) => {
            const self = arg0;
            let closure_1 = arg1;
            if (self._shouldUseLegacyFlow) {
              if (closure_1.venmoSuccess) {
                self.sendEvent(self._createPromise, "venmo.appswitch.handle.success");
                arg0(closure_1);
              } else if (closure_1.venmoError) {
                self.sendEvent(self._createPromise, "venmo.appswitch.handle.error");
                let obj = { type: constants.VENMO_APP_FAILED.type, code: constants.VENMO_APP_FAILED.code, message: constants.VENMO_APP_FAILED.message };
                obj = {};
                obj = {};
                const _decodeURIComponent = decodeURIComponent;
                obj.message = decodeURIComponent(closure_1.errorMessage);
                obj.code = closure_1.errorCode;
                obj.originalError = obj;
                obj.details = obj;
                const prototype3 = ctor.prototype;
                const tmp36 = new ctor(obj);
                arg1(tmp36);
              } else {
                const sendEvent = self.sendEvent;
                if (closure_1.venmoCancel) {
                  sendEvent(_createPromise, "venmo.appswitch.handle.cancel");
                  const prototype2 = ctor.prototype;
                  const tmp21 = new ctor(constants.VENMO_APP_CANCELED);
                  arg1(tmp21);
                } else {
                  sendEvent(_createPromise, "venmo.appswitch.cancel-or-unavailable");
                  const prototype = ctor.prototype;
                  const tmp13 = new ctor(constants.VENMO_CANCELED);
                  arg1(tmp13);
                }
              }
            } else {
              const _pollForStatusChangeResult = self._pollForStatusChange();
              self._pollForStatusChange().then((paymentMethodId) => {
                paymentMethodId.sendEvent(paymentMethodId._createPromise, "venmo.appswitch.handle.payment-context-status-query.success");
                return paymentMethodId({ paymentMethodNonce: paymentMethodId.paymentMethodId, username: paymentMethodId.userName, payerInfo: paymentMethodId.payerInfo, id: paymentMethodId._venmoPaymentContextId });
              }).catch((type) => {
                if (type.type === constants.VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED.type) {
                  arg1(type);
                }
                type.sendEvent(type._createPromise, "venmo.process-results.payment-context-status-query-failed");
                type(arg1);
              });
              const nextPromise = self._pollForStatusChange().then((paymentMethodId) => {
                paymentMethodId.sendEvent(paymentMethodId._createPromise, "venmo.appswitch.handle.payment-context-status-query.success");
                return paymentMethodId({ paymentMethodNonce: paymentMethodId.paymentMethodId, username: paymentMethodId.userName, payerInfo: paymentMethodId.payerInfo, id: paymentMethodId._venmoPaymentContextId });
              });
            }
            const result = self._clearFragmentParameters();
          });
          return promise;
        }
        _clearFragmentParameters() {
          if (!this._ignoreHistoryChanges) {
            tmp = globalThis;
            _window = window;
            str = "function";
            hash = "function" === typeof window.history.replaceState;
            if (hash) {
              _window2 = window;
              hash = window.location.hash;
            }
            if (hash) {
              history = globalThis.history;
              _window3 = window;
              href = window.location.href;
              _window4 = window;
              href1 = window.location.href;
              str2 = "#";
              num = 0;
              str3 = "";
              pushStateResult = globalThis.history.pushState({}, "", href.slice(0, href1.indexOf("#")));
            }
          }
          return;
        }
      }
      function isValidationError(details) {
        let extensions = details.details && details.details.originalError;
        if (extensions) {
          extensions = details.details.originalError[0];
        }
        if (extensions) {
          extensions = details.details.originalError[0].extensions;
        }
        if (extensions) {
          extensions = "VALIDATION" === details.details.originalError[0].extensions.errorClass;
        }
        if (extensions) {
          extensions = "user_error" === details.details.originalError[0].extensions.errorType;
        }
        return extensions;
      }
      function getFragmentParameters(arg0) {
        let str = arg0;
        if (!arg0) {
          const _window = window;
          str = window.location.hash.substring(1);
          const str2 = window.location.hash;
        }
        const parts = str.split("&");
        const reduced = parts.reduce((arg0, str) => {
          const parts = str.split("=");
          str = decodeURIComponent(parts[0]);
          arg0[callback(decodeURIComponent(parts[0]).replace(/\W/g, ""))] = decodeURIComponent(parts[1]);
          return arg0;
        }, {});
        if (reduced.resourceId) {
          reduced.id = reduced.resourceId;
        }
        return reduced;
      }
      function formatUserName(arg0) {
        let str = arg0;
        if (!arg0) {
          str = "";
        }
        return "@" + str.replace("@", "");
      }
      function documentVisibilityChangeEventName() {
        let str = "visibilitychange";
        if (undefined === window.document.hidden) {
          const _window = window;
          str = "msvisibilitychange";
          if (undefined === window.document.msHidden) {
            const _window2 = window;
            if (undefined !== window.document.webkitHidden) {
              str = "webkitvisibilitychange";
            }
          }
        }
        return str;
      }
      let closure_0 = global("../lib/analytics");
      let closure_1 = global("./shared/supports-venmo");
      let closure_2 = global("./shared/browser-detection");
      let closure_3 = global("./shared/constants");
      let closure_4 = global("./shared/errors");
      let closure_5 = global("../lib/querystring");
      let closure_6 = global("../lib/is-verified-domain");
      let closure_7 = global("../lib/methods");
      let closure_8 = global("../lib/convert-methods-to-error");
      let closure_9 = global("../lib/braintree-error");
      let closure_10 = global("../lib/in-iframe");
      const globalResult1 = global("@braintree/extended-promise");
      let closure_12 = global("./shared/get-venmo-url");
      let closure_13 = global("./shared/web-login-backdrop");
      let closure_14 = global("../lib/snake-case-to-camel-case");
      let closure_15 = global("../lib/url-params");
      let closure_16 = global("./external/");
      let closure_17 = global("./external/queries");
      let closure_18 = "3.112.1";
      globalResult1.suppressUnhandledPromiseMessage = true;
      module.exports = global("@braintree/wrap-promise").wrapPrototype(Venmo);
    },
    { "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006086695779856985, "Bool(false)": 5617988.000260661, "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002897671965886611, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006239241862261386, "Bool(false)": 0.00000000000000000000000000000000000000000000000000000012366376085466472, "Bool(false)": -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010197978816486513, "Bool(false)": 0.0000000000000000000000562484893769025, "Bool(false)": 3256565336949607000000000000000000000000000000000000000, "Bool(false)": 4621992662091949000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(false)": 131216.26123050135, "Bool(false)": 4366004125744.1357, "Bool(false)": "<string:1712193537>", "Bool(false)": "<string:3460431876>", "Bool(false)": "<string:251658583>", "Bool(false)": "<string:1090520166>", AMERICAN_EXPRESS: "clientApi", DINERS: "<string:4215379297>", DISCOVER: "<string:1090519429>", ELO: "payment_methods/paypal_accounts" }
  ];
  items = [
    (arg0, arg1, arg2) => {
      const globalResult = global("../lib/braintree-error");
      let obj = { placeholder: 21533591574028651000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, live-guild-stage: 0.0000000000000000000000000000000000000000000000000000000000000000000000014329465194136353, guild-event: 15182289950563622000000000000000000000000000000000000000000000000000000000000000000, type: globalResult.types.MERCHANT };
      obj = { placeholder: "r", live-guild-stage: "topCriticRatingCount", guild-event: "INVITES_HELP", type: globalResult.types.MERCHANT };
      obj = { type: globalResult.types.MERCHANT };
      const obj1 = { placeholder: "Bahrain", live-guild-stage: "BH", guild-event: "+973", type: globalResult.types.NETWORK };
      module.exports = { VISA_CHECKOUT_NOT_ENABLED: obj, VISA_CHECKOUT_INIT_OPTIONS_REQUIRED: obj, VISA_CHECKOUT_PAYMENT_REQUIRED: obj, VISA_CHECKOUT_TOKENIZATION: obj1 };
    },
    { ../lib/braintree-error: 143 }
  ];
  items = [
    (arg0, arg1, arg2) => {
      let closure_0 = global("../lib/basic-component-verification");
      let closure_1 = global("../lib/braintree-error");
      let closure_2 = global("../lib/create-deferred-client");
      let closure_3 = global("../lib/create-assets-url");
      let closure_4 = global("./visa-checkout");
      let closure_5 = global("../lib/analytics");
      let closure_6 = global("./errors");
      module.exports = {
        create: global("@braintree/wrap-promise")(function create(client) {
          let closure_0 = client;
          const obj = { name: "Visa Checkout", client: client.client, authorization: client.authorization };
          const verifyResult = closure_0.verify({ name: "Visa Checkout", client: client.client, authorization: client.authorization });
          return closure_0.verify({ name: "Visa Checkout", client: client.client, authorization: client.authorization }).then((self) => closure_2.create({ authorization: self.authorization, client: self.client, debug: self.debug, assetsUrl: closure_3.create(self.authorization), name: "Visa Checkout" })).then((client) => {
            client.client = client;
            client = client.client;
            if (client.getConfiguration().gatewayConfiguration.visaCheckout) {
              closure_5.sendEvent(client.client, "visacheckout.initialized");
              const prototype2 = ctor2.prototype;
              let rejectResult = new ctor2(client);
            } else {
              const prototype = ctor.prototype;
              const tmp6 = new ctor(constants.VISA_CHECKOUT_NOT_ENABLED);
              rejectResult = Promise.reject(tmp6);
            }
            return rejectResult;
          });
        }),
        VERSION: "3.112.1"
      };
    },
    {}
  ];
  items = [
    (arg0, arg1, arg2) => {
      class VisaCheckout {
        constructor(arg0) {
          this._client = global.client;
          return;
        }
        createInitOptions(arg0) {
          _client = this._client;
          gatewayConfiguration = _client.getConfiguration().gatewayConfiguration;
          visaCheckout = gatewayConfiguration.visaCheckout;
          if (global) {
            tmp7 = closure_3;
            tmp8 = closure_3(global);
            tmp8.apikey = tmp8.apikey || visaCheckout.apikey;
            tmp8.encryptionKey = visaCheckout.encryptionKey;
            tmp8.externalClientId = tmp8.externalClientId || visaCheckout.externalClientId;
            tmp8.settings = tmp8.settings || {};
            str = "FULL";
            tmp8.settings.dataLevel = "FULL";
            payment = tmp8.settings.payment;
            if (!payment) {
              payment = {};
            }
            tmp8.settings.payment = payment;
            if (!tmp8.settings.payment.cardBrands) {
              tmp8.settings.payment.cardBrands = function transformCardTypes(supportedCardTypes) {
                return supportedCardTypes.reduce((arr) => {
                  let combined = arr;
                  if (closure_6.hasOwnProperty(arg1)) {
                    combined = arr.concat(closure_6[arg1]);
                  }
                  return combined;
                }, []);
              }(gatewayConfiguration.visaCheckout.supportedCardTypes);
            }
            return tmp8;
          } else {
            tmp = closure_0;
            tmp2 = closure_2;
            prototype = closure_0.prototype;
            tmp3 = new.target;
            tmp4 = new.target;
            tmp5 = new closure_0(closure_2.VISA_CHECKOUT_INIT_OPTIONS_REQUIRED);
            tmp6 = tmp5;
            throw tmp5;
          }
        }
        tokenize(arg0) {
          closure_0 = this;
          if (global.callid) {
            if (global.encKey) {
              if (global.encPaymentData) {
                _client = tmp._client;
                obj = { 0: "+880", 0: "Barbados" };
                obj = {};
                obj1 = {};
                str = "visa-checkout";
                obj1.source = "visa-checkout";
                obj._meta = obj1;
                obj2 = {};
                ({ callid: obj4.callId, encPaymentData: obj4.encryptedPaymentData, encKey: obj4.encryptedKey } = global);
                obj.visaCheckoutCard = obj2;
                obj.data = obj;
                requestResult = _client.request(obj);
                nextPromise = requestResult.then((arg0) => {
                  closure_1.sendEvent(self._client, "visacheckout.tokenize.succeeded");
                  return arg0.visaCheckoutCards[0];
                });
                catchPromise = nextPromise.catch((originalError) => {
                  closure_1.sendEvent(self._client, "visacheckout.tokenize.failed");
                  let obj = { type: constants.VISA_CHECKOUT_TOKENIZATION.type, code: constants.VISA_CHECKOUT_TOKENIZATION.code, message: constants.VISA_CHECKOUT_TOKENIZATION.message, details: obj };
                  obj = { originalError };
                  return Promise.reject(new self(obj));
                });
              }
              return catchPromise;
            }
          }
          tmp2 = new closure_0(closure_2.VISA_CHECKOUT_PAYMENT_REQUIRED);
          catchPromise = Promise.reject(tmp2);
          return;
        }
        teardown() {
          tmp = closure_5(this, closure_4(VisaCheckout.prototype));
          return Promise.resolve();
        }
      }
      let closure_0 = global("../lib/braintree-error");
      let closure_1 = global("../lib/analytics");
      let closure_2 = global("./errors");
      let closure_3 = global("../lib/json-clone");
      let closure_4 = global("../lib/methods");
      let closure_5 = global("../lib/convert-methods-to-error");
      let closure_6 = {};
      module.exports = global("@braintree/wrap-promise").wrapPrototype(VisaCheckout);
    },
    { 1092507985: "get", 303816: "payment_methods/amex_rewards_balance", -334195117: "payment_methods/paypal_accounts", 1126243613: "post", 277906: "apple_pay_web/sessions", 277751: "payment_methods/masterpass_cards", 275362: "post" }
  ];
  return fn({ [1]: items, [2]: items1, [3]: items2, [4]: items3, [5]: items4, [6]: items5, [7]: items6, [8]: items7, [9]: items8, [10]: items9, [11]: items10, [12]: items11, [13]: items12, [14]: items13, [15]: items14, [16]: items15, [17]: items16, [18]: items17, [19]: items18, [20]: items19, [21]: items20, [22]: items21, [23]: items22, [24]: items23, [25]: items24, [26]: items25, [27]: items26, [28]: items27, [29]: items28, [30]: items29, [31]: items30, [32]: items31, [33]: items32, [34]: items33, [35]: items34, [36]: items35, [37]: items36, [38]: items37, [39]: items38, [40]: items39, [41]: items40, [42]: items41, [43]: items42, [44]: items43, [45]: items44, [46]: items45, [47]: items46, [48]: items47, [49]: items48, [50]: items49, [51]: items50, [52]: items51, [53]: items52, [54]: items53, [55]: items54, [56]: items55, [57]: items56, [58]: items57, [59]: items58, [60]: items59, [61]: items60, [62]: items61, [63]: items62, [64]: items63, [65]: items64, [66]: items65, [67]: items66, [68]: items67, [69]: items68, [70]: items69, [71]: items70, [72]: items71, [73]: items72, [74]: items73, [75]: items74, [76]: items75, [77]: items76, [78]: items77, [79]: items78, [80]: items79, [81]: items80, [82]: items81, [83]: items82, [84]: items83, [85]: items84, [86]: items85, [87]: items86, [88]: items87, [89]: items88, [90]: items89, [91]: items90, [92]: items91, [93]: items92, [94]: items93, [95]: items94, [96]: items95, [97]: items96, [98]: items97, [99]: items98, [100]: items, [101]: items, [102]: items, [103]: items, [104]: items, [105]: items, [106]: items, [107]: items, [108]: items, [109]: items, [110]: items, [111]: items, [112]: items, [113]: items, [114]: items, [115]: items, [116]: items, [117]: items, [118]: items, [119]: items, [120]: items, [121]: items, [122]: items, [123]: items, [124]: items, [125]: items, [126]: items, [127]: items, [128]: items, [129]: items, [130]: items, [131]: items, [132]: items, [133]: items, [134]: items, [135]: items, [136]: items, [137]: items, [138]: items, [139]: items, [140]: items, [141]: items, [142]: items, [143]: items, [144]: items, [145]: items, [146]: items, [147]: items, [148]: items, [149]: items, [150]: items, [151]: items, [152]: items, [153]: items, [154]: items, [155]: items, [156]: items, [157]: items, [158]: items, [159]: items, [160]: items, [161]: items, [162]: items, [163]: items, [164]: items, [165]: items, [166]: items, [167]: items, [168]: items, [169]: items, [170]: items, [171]: items, [172]: items, [173]: items, [174]: items, [175]: items, [176]: items, [177]: items, [178]: items, [179]: items, [180]: items, [181]: items, [182]: items, [183]: items, [184]: items, [185]: items, [186]: items, [187]: items, [188]: items, [189]: items, [190]: items, [191]: items, [192]: items, [193]: items, [194]: items, [195]: items, [196]: items, [197]: items, [198]: items, [199]: items, [200]: items, [201]: items, [202]: items, [203]: items, [204]: items, [205]: items, [206]: items, [207]: items, [208]: items, [209]: items, [210]: items, [211]: items, [212]: items, [213]: items, [214]: items, [215]: items, [216]: items, [217]: items, [218]: items, [219]: items, [220]: items, [221]: items, [222]: items, [223]: items, [224]: items, [225]: items, [226]: items, [227]: items, [228]: items, [229]: items, [230]: items, [231]: items, [232]: items, [233]: items, [234]: items, [235]: items, [236]: items, [237]: items, [238]: items, [239]: items, [240]: items, [241]: items, [242]: items, [243]: items, [244]: items, [245]: items, [246]: items, [247]: items, [248]: items }, {}, [])(136);
};
if ("object" === typeof exports) {
  if (undefined !== module) {
    module.exports = fn();
  }
}
if ("function" === typeof globalThis.define) {
  if (globalThis.define.amd) {
    globalThis.define([], fn);
  }
}
if ("undefined" !== typeof window) {
  let _self2 = window;
} else if (undefined !== global) {
  _self2 = global;
} else {
  const _self = self;
  _self2 = globalThis;
  if ("undefined" !== typeof self) {
    _self2 = self;
  }
}
_self2.braintree = fn();
