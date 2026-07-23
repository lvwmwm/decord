// Module ID: 1006
// Function ID: 10984
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 102, 18, 1004, 794, 1007]

// Module 1006 (_isNativeReflectConstruct)
import _classCallCheck from "ignoreNextOnError";
import _defineProperties from "registerSpanErrorInstrumentation";
import "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _get from "_get";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function applyDefaultOptions(arg0) {
  const obj = { release: null, sendClientReports: true, parentSpanIsAlwaysRootSpan: true };
  if ("string" === typeof globalThis.__SENTRY_RELEASE__) {
    let id = globalThis.__SENTRY_RELEASE__;
  } else {
    const SENTRY_RELEASE = require(1004) /* ignoreNextOnError */.WINDOW.SENTRY_RELEASE;
    if (null != SENTRY_RELEASE) {
      id = SENTRY_RELEASE.id;
    }
  }
  obj.release = id;
  return Object.assign(obj, arg0);
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const BrowserClient = ((Client) => {
  class BrowserClient {
    constructor(arg0) {
      self = this;
      tmp = outer1_2(this, apply);
      tmp2 = outer1_9(Client);
      SENTRY_SDK_SOURCE = BrowserClient(outer1_1[6]).WINDOW.SENTRY_SDK_SOURCE;
      if (!SENTRY_SDK_SOURCE) {
        tmp3 = BrowserClient;
        tmp4 = outer1_1;
        num = 7;
        obj = BrowserClient(outer1_1[7]);
        SENTRY_SDK_SOURCE = obj.getSDKSource();
      }
      obj2 = BrowserClient(outer1_1[7]);
      applySdkMetadataResult = obj2.applySdkMetadata(tmp2, "browser", ["browser"], SENTRY_SDK_SOURCE);
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
      obj4 = outer1_5(apply);
      tmp8 = outer1_4;
      if (outer1_8()) {
        tmp10 = globalThis;
        _Reflect = Reflect;
        tmp11 = outer1_5;
        constructResult = Reflect.construct(obj4, items, outer1_5(self).constructor);
      } else {
        constructResult = obj4.apply(self, items);
      }
      tmp8Result = tmp8(self, constructResult);
      apply = tmp8Result;
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
      c3 = tmp13;
      _document = BrowserClient(outer1_1[6]).WINDOW.document;
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
        tmp15 = outer1_1;
        _document2 = BrowserClient(outer1_1[6]).WINDOW.document;
        str2 = "visibilitychange";
        listener = _document2.addEventListener("visibilitychange", () => {
          if ("hidden" === BrowserClient(outer2_1[6]).WINDOW.document.visibilityState) {
            if (sendClientReports) {
              tmp8Result._flushOutcomes();
            }
            if (enableLogs) {
              const result = BrowserClient(outer2_1[7])._INTERNAL_flushLogsBuffer(tmp8Result);
              const obj = BrowserClient(outer2_1[7]);
            }
            if (closure_3) {
              const result1 = BrowserClient(outer2_1[7])._INTERNAL_flushMetricsBuffer(tmp8Result);
              const obj2 = BrowserClient(outer2_1[7]);
            }
          }
        });
      }
      if (sendDefaultPii) {
        tmp17 = BrowserClient;
        tmp18 = outer1_1;
        str3 = "beforeSendSession";
        onResult = tmp8Result.on("beforeSendSession", BrowserClient(outer1_1[7]).addAutoIpAddressToSession);
      }
      return tmp8Result;
    }
  }
  _inherits(BrowserClient, Client);
  let obj = {
    key: "eventFromException",
    value: function eventFromException(arg0, arg1) {
      return BrowserClient(outer1_1[8]).eventFromException(this._options.stackParser, arg0, arg1, this._options.attachStacktrace);
    }
  };
  let items = [obj, , ];
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
      return BrowserClient(outer1_1[8]).eventFromMessage(self._options.stackParser, arg0, str, tmp, self._options.attachStacktrace);
    }
  };
  items[1] = obj;
  obj = {
    key: "_prepareEvent",
    value: function _prepareEvent(platform) {
      platform.platform = platform.platform || "javascript";
      const items = [platform, arg1, arg2, arg3];
      return (function _superPropGet(BrowserClient, _prepareEvent, arg2, arg3) {
        let closure_0 = arg2;
        let prototype = BrowserClient;
        if (1) {
          prototype = BrowserClient.prototype;
        }
        const tmpResult = outer2_6(outer2_5(prototype), "_prepareEvent", arg2);
        let closure_1 = tmpResult;
        let fn = tmpResult;
        if (2) {
          fn = tmpResult;
          if ("function" === typeof tmpResult) {
            fn = (arg0) => tmpResult.apply(closure_0, arg0);
          }
        }
        return fn;
      })(BrowserClient, "_prepareEvent", this, 3)(items);
    }
  };
  items[2] = obj;
  return _defineProperties(BrowserClient, items);
})(require("registerSpanErrorInstrumentation").Client);
export { applyDefaultOptions };
