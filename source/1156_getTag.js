// Module ID: 1156
// Function ID: 13143
// Name: getTag
// Dependencies: []
// Exports: close, crashedLastRun, flush, init, nativeCrash, withScope, wrap

// Module 1156 (getTag)
let closure_2 = importAll(dependencyMap[0]);
let fn = this;
if (this) {
  fn = this.__awaiter;
}
if (!fn) {
  fn = (arg0, arg1, arg2, arg3) => {
    let _Promise = arg2;
    arg1 = arg0;
    const dependencyMap = arg1;
    if (!arg2) {
      _Promise = Promise;
    }
    _Promise = new _Promise((arg0, arg1) => {
      function fulfilled(arg0) {
        step(iter.next(arg0));
      }
      let arg3 = function rejected(arg0) {
        step(iter.throw(arg0));
      };
      function step(iter) {
        if (iter.done) {
          iter(iter.value);
        } else {
          function adopt(value) {
            let tmp = value;
            if (!(value instanceof ctor)) {
              const prototype = ctor.prototype;
              tmp = new ctor((arg0) => {
                arg0(arg0);
              });
            }
            return tmp;
          }(iter.value).then(fulfilled, iter);
          const promise = function adopt(value) {
            let tmp = value;
            if (!(value instanceof ctor)) {
              const prototype = ctor.prototype;
              tmp = new ctor((arg0) => {
                arg0(arg0);
              });
            }
            return tmp;
          }(iter.value);
        }
      }
      let items = arg1;
      if (!arg1) {
        items = [];
      }
      const iter = arg3.apply(arg0, items);
      arg3 = iter;
      step(iter.next());
    });
    return _Promise;
  };
}
const obj = { maxQueueSize: arg1(dependencyMap[1]).DEFAULT_BUFFER_SIZE };

export const init = function init(maxQueueSize) {
  let obj = callback(dependencyMap[2]);
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
      const NATIVE = callback(dependencyMap[3]).NATIVE;
      isNativeAvailableResult = NATIVE.isNativeAvailable();
    }
    let obj1 = callback(dependencyMap[4]);
    const encodePolyfill = obj1.useEncodePolyfill();
    if (isNativeAvailableResult) {
      let obj2 = callback(dependencyMap[5]);
      let obj3 = callback(dependencyMap[6]);
      obj2.enableSyncToNative(obj3.getGlobalScope());
      let obj4 = callback(dependencyMap[5]);
      let obj5 = callback(dependencyMap[6]);
      obj4.enableSyncToNative(obj5.getIsolationScope());
    }
    obj = { loggerMessage: "The beforeBreadcrumb threw an error" };
    const callback = callback(dependencyMap[7]).safeFactory(maxQueueSize.beforeBreadcrumb, obj);
    const obj7 = callback(dependencyMap[7]);
    const devServer = callback(dependencyMap[8]).getDevServer();
    let url;
    if (null !== devServer) {
      if (undefined !== devServer) {
        url = devServer.url;
      }
    }
    const dependencyMap = url;
    const dsn = maxQueueSize.dsn;
    let combined;
    if (dsn) {
      url = callback(dependencyMap[6]).makeDsn(dsn);
      if (url) {
        let str4 = "";
        if (url.port) {
          const _HermesInternal = HermesInternal;
          str4 = ":" + url.port;
        }
        const _HermesInternal2 = HermesInternal;
        combined = "" + url.protocol + "://" + url.host + str4;
      } else {
        const debug = callback(dependencyMap[6]).debug;
        debug.error("Failed to extract url from DSN: ", dsn);
      }
      const obj10 = callback(dependencyMap[6]);
    }
    let closure_2 = combined;
    const _Object = Object;
    const _Object2 = Object;
    obj = {};
    let release = maxQueueSize.release;
    const merged = Object.assign(Object.assign({}, obj), maxQueueSize);
    if (null === release) {
      release = callback(dependencyMap[9]).getDefaultRelease();
      const obj12 = callback(dependencyMap[9]);
    }
    obj.release = release;
    obj.enableNative = isNativeAvailableResult;
    const obj9 = callback(dependencyMap[8]);
    obj.enableNativeNagger = callback(dependencyMap[10]).shouldEnableNativeNagger(maxQueueSize.enableNativeNagger);
    let makeFetchTransport = maxQueueSize.transport;
    if (!makeFetchTransport) {
      obj1 = { enableNative: isNativeAvailableResult };
      makeFetchTransport = callback(dependencyMap[1]).makeNativeTransportFactory(obj1);
      const obj14 = callback(dependencyMap[1]);
    }
    if (!makeFetchTransport) {
      makeFetchTransport = callback(dependencyMap[11]).makeFetchTransport;
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
    const obj13 = callback(dependencyMap[10]);
    let defaultStackParser = maxQueueSize.stackParser;
    if (!defaultStackParser) {
      defaultStackParser = callback(dependencyMap[11]).defaultStackParser;
    }
    obj.stackParser = callback(dependencyMap[6]).stackParserFromStackParserOptions(defaultStackParser);
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
    const obj18 = callback(dependencyMap[6]);
    obj3 = { loggerMessage: "The initialScope threw an error" };
    obj.initialScope = callback(dependencyMap[7]).safeFactory(maxQueueSize.initialScope, obj3);
    const merged2 = Object.assign(merged, obj);
    if ("tracesSampler" in merged2) {
      merged2.tracesSampler = callback(dependencyMap[7]).safeTracesSampler(merged2.tracesSampler);
      const obj21 = callback(dependencyMap[7]);
    }
    if (!("environment" in merged2)) {
      merged2.environment = callback(dependencyMap[2]).getDefaultEnvironment();
      const obj22 = callback(dependencyMap[2]);
    }
    if (undefined === maxQueueSize.defaultIntegrations) {
      let defaultIntegrations = callback(dependencyMap[12]).getDefaultIntegrations(merged2);
      const obj23 = callback(dependencyMap[12]);
    } else {
      defaultIntegrations = maxQueueSize.defaultIntegrations;
    }
    const obj19 = callback(dependencyMap[7]);
    obj4 = {};
    const obj24 = callback(dependencyMap[6]);
    obj5 = { loggerMessage: "The integrations threw an error" };
    obj4.integrations = callback(dependencyMap[7]).safeFactory(maxQueueSize.integrations, obj5);
    obj4.defaultIntegrations = defaultIntegrations;
    merged2.integrations = obj24.getIntegrationsToSetup(obj4);
    const obj26 = callback(dependencyMap[7]);
    const andBind = callback(dependencyMap[6]).initAndBind(callback(dependencyMap[13]).ReactNativeClient, merged2);
    const obj28 = callback(dependencyMap[6]);
    if (obj29.isExpoGo()) {
      const debug2 = callback(dependencyMap[6]).debug;
      debug2.log("Offline caching, native errors features are not available in Expo Go.");
      const debug3 = callback(dependencyMap[6]).debug;
      debug3.log("Use EAS Build / Native Release Build to test these features.");
    }
    const obj29 = callback(dependencyMap[2]);
  }
};
export const wrap = function wrap(displayName, profilerProps) {
  profilerProps = displayName;
  const dependencyMap = profilerProps;
  profilerProps = undefined;
  if (null != profilerProps) {
    profilerProps = profilerProps.profilerProps;
  }
  const obj = {};
  displayName = displayName.displayName;
  let str = "Root";
  const merged = Object.assign({}, profilerProps);
  if (null !== displayName) {
    str = "Root";
    if (undefined !== displayName) {
      str = displayName;
    }
  }
  obj.name = str;
  obj.updateProps = {};
  let closure_2 = Object.assign(merged, obj);
  if (obj2.isWeb()) {
    let ReactNativeProfiler = tmp3(tmp4[11]).Profiler;
  } else {
    ReactNativeProfiler = tmp3(tmp4[14]).ReactNativeProfiler;
  }
  return function RootApp(arg0) {
    let prop;
    if (null != arg1) {
      prop = arg1.touchEventBoundaryProps;
    }
    if (null === prop) {
      prop = {};
    }
    const merged = Object.assign({}, prop);
    const merged1 = Object.assign({}, React);
    return React.createElement(arg0(arg1[15]).TouchEventBoundary, merged, <ReactNativeProfiler {......merged1}>{React.createElement(arg0(arg1[16]).FeedbackWidgetProvider, null, <arg0 {......Object.assign({}, arg0)} />)}</ReactNativeProfiler>);
  };
};
export const nativeCrash = function nativeCrash() {
  const NATIVE = arg1(dependencyMap[3]).NATIVE;
  NATIVE.nativeCrash();
};
export const flush = function flush() {
  return fn(this, undefined, undefined, function*() {
    const client = callback(closure_1[6]).getClient();
    if (client) {
      return yield obj2.flush();
    } else {
      const debug = callback(closure_1[6]).debug;
      debug.error("Failed to flush the event queue.");
    }
  });
};
export const close = function close() {
  return fn(this, undefined, undefined, function*() {
    const client = callback(closure_1[6]).getClient();
    if (client) {
      yield obj2.close();
    }
  });
};
export const withScope = function withScope(arg0) {
  const arg1 = arg0;
  return arg1(dependencyMap[6]).withScope(function safeCallback(arg0) {
    return arg0(arg0);
  });
};
export const crashedLastRun = function crashedLastRun() {
  return fn(this, undefined, undefined, function*() {
    if (obj) {
      return obj.resume();
    } else {
      const NATIVE = callback(closure_1[3]).NATIVE;
      return NATIVE.crashedLastRun();
    }
  });
};
