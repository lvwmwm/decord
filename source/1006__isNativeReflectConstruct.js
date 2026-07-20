// Module ID: 1006
// Function ID: 10979
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1006 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function applyDefaultOptions(arg0) {
  const obj = {};
  if ("string" === typeof globalThis.__SENTRY_RELEASE__) {
    let id = globalThis.__SENTRY_RELEASE__;
  } else {
    const SENTRY_RELEASE = require(dependencyMap[6]).WINDOW.SENTRY_RELEASE;
    if (null != SENTRY_RELEASE) {
      id = SENTRY_RELEASE.id;
    }
  }
  obj.release = id;
  return Object.assign(obj, arg0);
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);
let closure_5 = require(dependencyMap[3]);
let closure_6 = require(dependencyMap[4]);
let closure_7 = require(dependencyMap[5]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const BrowserClient = (Client) => {
  class BrowserClient {
    constructor(arg0) {
      self = this;
      tmp = enableLogs(this, BrowserClient);
      tmp2 = closure_9(Client);
      SENTRY_SDK_SOURCE = BrowserClient(sendClientReports[6]).WINDOW.SENTRY_SDK_SOURCE;
      if (!SENTRY_SDK_SOURCE) {
        tmp3 = BrowserClient;
        tmp4 = sendClientReports;
        num = 7;
        obj = BrowserClient(sendClientReports[7]);
        SENTRY_SDK_SOURCE = obj.getSDKSource();
      }
      obj2 = BrowserClient(sendClientReports[7]);
      applySdkMetadataResult = obj2.applySdkMetadata(tmp2, "browser", [null], SENTRY_SDK_SOURCE);
      _metadata = tmp2._metadata;
      tmp6 = null != _metadata && _metadata.sdk;
      if (tmp6) {
        tmp7 = globalThis;
        obj = {};
        str = "never";
        if (tmp2.sendDefaultPii) {
          str = "auto";
        }
        obj.infer_ip = str;
        tmp2._metadata.sdk.settings = Object.assign(obj, tmp2._metadata.sdk.settings);
      }
      items = [];
      items[0] = tmp2;
      obj4 = closure_5(BrowserClient);
      tmp8 = closure_4;
      if (closure_8()) {
        tmp10 = globalThis;
        _Reflect = Reflect;
        tmp11 = closure_5;
        constructResult = Reflect.construct(obj4, items, closure_5(self).constructor);
      } else {
        constructResult = obj4.apply(self, items);
      }
      tmp8Result = tmp8(self, constructResult);
      BrowserClient = tmp8Result;
      _options = tmp8Result._options;
      sendClientReports = _options.sendClientReports;
      enableLogs = _options.enableLogs;
      ({ _experiments, enableMetrics, sendDefaultPii } = _options);
      if (null == enableMetrics) {
        enableMetrics = undefined;
        if (null != _experiments) {
          enableMetrics = _experiments.enableMetrics;
        }
      }
      tmp13 = null == enableMetrics || enableMetrics;
      closure_3 = tmp13;
      _document = BrowserClient(sendClientReports[6]).WINDOW.document;
      if (_document) {
        if (!sendClientReports) {
          sendClientReports = enableLogs;
        }
        if (!sendClientReports) {
          sendClientReports = tmp13;
        }
        _document = sendClientReports;
      }
      if (_document) {
        tmp14 = BrowserClient;
        tmp15 = sendClientReports;
        _document2 = BrowserClient(sendClientReports[6]).WINDOW.document;
        str2 = "visibilitychange";
        listener = _document2.addEventListener("visibilitychange", () => {
          if ("hidden" === tmp8Result(sendClientReports[6]).WINDOW.document.visibilityState) {
            if (sendClientReports) {
              tmp8Result._flushOutcomes();
            }
            if (enableLogs) {
              const result = tmp8Result(sendClientReports[7])._INTERNAL_flushLogsBuffer(tmp8Result);
              const obj = tmp8Result(sendClientReports[7]);
            }
            if (tmp13) {
              const result1 = tmp8Result(sendClientReports[7])._INTERNAL_flushMetricsBuffer(tmp8Result);
              const obj2 = tmp8Result(sendClientReports[7]);
            }
          }
        });
      }
      if (sendDefaultPii) {
        tmp17 = BrowserClient;
        tmp18 = sendClientReports;
        str3 = "beforeSendSession";
        onResult = tmp8Result.on("beforeSendSession", BrowserClient(sendClientReports[7]).addAutoIpAddressToSession);
      }
      return tmp8Result;
    }
  }
  const require = BrowserClient;
  callback2(BrowserClient, Client);
  let obj = {
    key: "eventFromException",
    value: function eventFromException(arg0, arg1) {
      return BrowserClient(closure_1[8]).eventFromException(this._options.stackParser, arg0, arg1, this._options.attachStacktrace);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "eventFromMessage",
    value: function eventFromMessage(arg0) {
      const self = this;
      let str = "info";
      if (arguments.length > 1) {
        str = "info";
        if (undefined !== arguments[1]) {
          str = arguments[1];
        }
      }
      let tmp;
      if (arguments.length > 2) {
        tmp = arguments[2];
      }
      return BrowserClient(closure_1[8]).eventFromMessage(self._options.stackParser, arg0, str, tmp, self._options.attachStacktrace);
    }
  };
  items[1] = obj;
  obj = {
    key: "_prepareEvent",
    value: function _prepareEvent(platform) {
      platform.platform = platform.platform || "javascript";
      const items = [platform, arg1, arg2, arg3];
      return function _superPropGet(BrowserClient, _prepareEvent, arg2, arg3) {
        let prototype = BrowserClient;
        if (1) {
          prototype = BrowserClient.prototype;
        }
        const tmpResult = closure_6(closure_5(prototype), "_prepareEvent", arg2);
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(arg2, arg0);
          }
        }
        return fn;
      }(BrowserClient, "_prepareEvent", this, 3)(items);
    }
  };
  items[2] = obj;
  return callback(BrowserClient, items);
}(require(dependencyMap[7]).Client);
export { applyDefaultOptions };
