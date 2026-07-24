// Module ID: 1156
// Function ID: 13145
// Name: init
// Dependencies: [31, 1157, 978, 977, 982, 1158, 794, 1159, 791, 1160, 1161, 1111, 1162, 1152, 1163, 1170, 1171]
// Exports: close, crashedLastRun, flush, init, nativeCrash, withScope, wrap

// Module 1156 (init)
import result from "result";

const require = arg1;
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
let obj = { enableNativeCrashHandling: true, enableNativeNagger: true, autoInitializeNativeSdk: true, enableAutoPerformanceTracing: true, enableWatchdogTerminationTracking: true, patchGlobalPromise: true, sendClientReports: true, maxQueueSize: require("makeNativeTransport").DEFAULT_BUFFER_SIZE, attachStacktrace: true, enableCaptureFailedRequests: false, enableNdk: true, enableAppStartTracking: true, enableNativeFramesTracking: true, enableStallTracking: true, enableUserInteractionTracing: false, propagateTraceparent: false };

export const init = function init(maxQueueSize) {
  let obj = _require(url[2]);
  if (!obj.isRunningInMetroDevServer()) {
    maxQueueSize = maxQueueSize.maxQueueSize;
    if (null === maxQueueSize) {
      let transportOptions = maxQueueSize.transportOptions;
      let bufferSize;
      if (null !== transportOptions) {
        if (undefined !== transportOptions) {
          bufferSize = transportOptions.bufferSize;
        }
      }
      maxQueueSize = bufferSize;
    }
    if (null === maxQueueSize) {
      maxQueueSize = obj.maxQueueSize;
    }
    let isNativeAvailableResult = !tmp4;
    if (!(undefined !== maxQueueSize.enableNative && !maxQueueSize.enableNative)) {
      const NATIVE = _require(url[3]).NATIVE;
      isNativeAvailableResult = NATIVE.isNativeAvailable();
    }
    let obj1 = _require(url[4]);
    const encodePolyfill = obj1.useEncodePolyfill();
    if (isNativeAvailableResult) {
      let obj2 = _require(url[5]);
      let obj3 = _require(url[6]);
      obj2.enableSyncToNative(obj3.getGlobalScope());
      let obj4 = _require(url[5]);
      let obj5 = _require(url[6]);
      obj4.enableSyncToNative(obj5.getIsolationScope());
    }
    obj = { loggerMessage: "The beforeBreadcrumb threw an error" };
    _require = _require(url[7]).safeFactory(maxQueueSize.beforeBreadcrumb, obj);
    const obj7 = _require(url[7]);
    const devServer = _require(url[8]).getDevServer();
    url = undefined;
    if (null !== devServer) {
      if (undefined !== devServer) {
        url = devServer.url;
      }
    }
    const dsn = maxQueueSize.dsn;
    let combined;
    if (dsn) {
      url = _require(url[6]).makeDsn(dsn);
      if (url) {
        let str4 = "";
        if (url.port) {
          const _HermesInternal = HermesInternal;
          str4 = ":" + url.port;
        }
        const _HermesInternal2 = HermesInternal;
        combined = "" + url.protocol + "://" + url.host + str4;
      } else {
        const debug = _require(url[6]).debug;
        debug.error("Failed to extract url from DSN: ", dsn);
      }
      const obj10 = _require(url[6]);
    }
    const _Object = Object;
    const _Object2 = Object;
    obj = {};
    let release = maxQueueSize.release;
    const merged = Object.assign(Object.assign({}, obj), maxQueueSize);
    if (null === release) {
      release = _require(url[9]).getDefaultRelease();
      const obj12 = _require(url[9]);
    }
    obj.release = release;
    obj.enableNative = isNativeAvailableResult;
    const obj9 = _require(url[8]);
    obj.enableNativeNagger = _require(url[10]).shouldEnableNativeNagger(maxQueueSize.enableNativeNagger);
    let makeFetchTransport = maxQueueSize.transport;
    if (!makeFetchTransport) {
      obj1 = { enableNative: isNativeAvailableResult };
      makeFetchTransport = _require(url[1]).makeNativeTransportFactory(obj1);
      const obj14 = _require(url[1]);
    }
    if (!makeFetchTransport) {
      makeFetchTransport = _require(url[11]).makeFetchTransport;
    }
    obj.transport = makeFetchTransport;
    const _Object3 = Object;
    transportOptions = maxQueueSize.transportOptions;
    const merged1 = Object.assign({}, obj.transportOptions);
    if (null === transportOptions) {
      transportOptions = {};
    }
    obj2 = { bufferSize: maxQueueSize };
    obj.transportOptions = Object.assign(Object.assign(merged1, transportOptions), obj2);
    obj.maxQueueSize = maxQueueSize;
    obj.integrations = [];
    const obj13 = _require(url[10]);
    let defaultStackParser = maxQueueSize.stackParser;
    if (!defaultStackParser) {
      defaultStackParser = _require(url[11]).defaultStackParser;
    }
    obj.stackParser = _require(url[6]).stackParserFromStackParserOptions(defaultStackParser);
    obj.beforeBreadcrumb = function chainedBeforeBreadcrumb(arg0, arg1) {
      let tmp = arg0;
      if (callback) {
        tmp = callback(arg0, arg1);
        if (null === tmp) {
          return null;
        }
      }
      const data = tmp.data;
      let url;
      if (null !== data) {
        if (undefined !== data) {
          url = data.url;
        }
      }
      let str = "";
      if ("string" === typeof url) {
        str = tmp.data.url;
      }
      if ("http" === tmp5) {
        if (!url) {
          if (combined) {
            let tmp9 = null;
          }
        } else {
          tmp9 = null;
        }
        return tmp9;
      }
      tmp9 = tmp;
    };
    const obj18 = _require(url[6]);
    obj3 = { loggerMessage: "The initialScope threw an error" };
    obj.initialScope = _require(url[7]).safeFactory(maxQueueSize.initialScope, obj3);
    const merged2 = Object.assign(merged, obj);
    if ("tracesSampler" in merged2) {
      merged2.tracesSampler = _require(url[7]).safeTracesSampler(merged2.tracesSampler);
      const obj21 = _require(url[7]);
    }
    if (!("environment" in merged2)) {
      merged2.environment = _require(url[2]).getDefaultEnvironment();
      const obj22 = _require(url[2]);
    }
    if (undefined === maxQueueSize.defaultIntegrations) {
      let defaultIntegrations = _require(url[12]).getDefaultIntegrations(merged2);
      const obj23 = _require(url[12]);
    } else {
      defaultIntegrations = maxQueueSize.defaultIntegrations;
    }
    const obj19 = _require(url[7]);
    obj4 = {};
    const obj24 = _require(url[6]);
    obj5 = { loggerMessage: "The integrations threw an error" };
    obj4.integrations = _require(url[7]).safeFactory(maxQueueSize.integrations, obj5);
    obj4.defaultIntegrations = defaultIntegrations;
    merged2.integrations = obj24.getIntegrationsToSetup(obj4);
    const obj26 = _require(url[7]);
    const andBind = _require(url[6]).initAndBind(_require(url[13]).ReactNativeClient, merged2);
    const obj28 = _require(url[6]);
    if (obj29.isExpoGo()) {
      const debug2 = _require(url[6]).debug;
      debug2.log("Offline caching, native errors features are not available in Expo Go.");
      const debug3 = _require(url[6]).debug;
      debug3.log("Use EAS Build / Native Release Build to test these features.");
    }
    obj29 = _require(url[2]);
  }
};
export const wrap = function wrap(displayName, profilerProps) {
  const _require = displayName;
  const dependencyMap = profilerProps;
  profilerProps = undefined;
  if (null != profilerProps) {
    profilerProps = profilerProps.profilerProps;
  }
  const obj = {};
  displayName = displayName.displayName;
  let str = "Root";
  let merged = Object.assign({}, profilerProps);
  if (null !== displayName) {
    str = "Root";
    if (undefined !== displayName) {
      str = displayName;
    }
  }
  obj.name = str;
  obj.updateProps = {};
  let result = Object.assign(merged, obj);
  if (obj2.isWeb()) {
    let ReactNativeProfiler = tmp3(1111).Profiler;
  } else {
    ReactNativeProfiler = tmp3(1163).ReactNativeProfiler;
  }
  return function RootApp(arg0) {
    let prop;
    if (null != profilerProps) {
      prop = profilerProps.touchEventBoundaryProps;
    }
    if (null === prop) {
      prop = {};
    }
    const merged = Object.assign({}, prop);
    const merged1 = Object.assign({}, React);
    return React.createElement(displayName(profilerProps[15]).TouchEventBoundary, merged, <ReactNativeProfiler {......merged1}>{React.createElement(displayName(profilerProps[16]).FeedbackWidgetProvider, null, <displayName {......Object.assign({}, arg0)} />)}</ReactNativeProfiler>);
  };
};
export const nativeCrash = function nativeCrash() {
  const NATIVE = require(977) /* getRNSentryModule */.NATIVE;
  NATIVE.nativeCrash();
};
export const flush = function flush() {
  return fn(this, undefined, undefined, function*() {
    const client = outer2_0(outer2_1[6]).getClient();
    if (client) {
      return yield obj2.flush();
    } else {
      const debug = outer2_0(outer2_1[6]).debug;
      debug.error("Failed to flush the event queue.");
    }
  });
};
export const close = function close() {
  return fn(this, undefined, undefined, function*() {
    const client = outer2_0(outer2_1[6]).getClient();
    if (client) {
      yield obj2.close();
    }
  });
};
export const withScope = function withScope(arg0) {
  const _require = arg0;
  return _require(794).withScope(function safeCallback(arg0) {
    return callback(arg0);
  });
};
export const crashedLastRun = function crashedLastRun() {
  return fn(this, undefined, undefined, function*() {
    if (obj) {
      return obj.resume();
    } else {
      const NATIVE = outer2_0(outer2_1[3]).NATIVE;
      return NATIVE.crashedLastRun();
    }
  });
};
