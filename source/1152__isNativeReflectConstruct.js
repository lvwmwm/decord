// Module ID: 1152
// Function ID: 13105
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1152 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _superPropGet(arg0, arg1, arg2, arg3) {
  arg1 = arg2;
  let prototype = arg0;
  if (1) {
    prototype = arg0.prototype;
  }
  const tmpResult = closure_6(closure_5(prototype), arg1, arg2);
  const dependencyMap = tmpResult;
  let fn = tmpResult;
  if (2) {
    fn = tmpResult;
    if ("function" === typeof tmpResult) {
      fn = (arg0) => tmpResult.apply(arg2, arg0);
    }
  }
  return fn;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const Alert = arg1(dependencyMap[6]).Alert;

export const ReactNativeClient = (Client) => {
  class ReactNativeClient {
    constructor(arg0) {
      self = this;
      tmp = closure_2(this, ReactNativeClient);
      obj = ReactNativeClient(closure_1[7]);
      ReactNativeVersion = ReactNativeClient(closure_1[8]).ReactNativeLibraries.ReactNativeVersion;
      version = undefined;
      if (null !== ReactNativeVersion) {
        if (undefined !== ReactNativeVersion) {
          version = ReactNativeVersion.version;
        }
      }
      result = obj.ignoreRequireCycleLogs(version);
      obj = {};
      _metadata = Client._metadata;
      sdk = undefined;
      merged = Object.assign({}, Client._metadata);
      if (null !== _metadata) {
        if (undefined !== _metadata) {
          sdk = _metadata.sdk;
        }
      }
      if (!sdk) {
        tmp6 = ReactNativeClient;
        tmp7 = closure_1;
        num = 9;
        sdk = ReactNativeClient(closure_1[9]).defaultSdkInfo;
      }
      obj1 = {};
      obj2 = {};
      str = "never";
      merged1 = Object.assign({}, sdk);
      if (Client.sendDefaultPii) {
        str = "auto";
      }
      obj2.infer_ip = str;
      _metadata2 = Client._metadata;
      sdk1 = undefined;
      if (null !== _metadata2) {
        if (undefined !== _metadata2) {
          sdk1 = _metadata2.sdk;
        }
      }
      settings = undefined;
      if (null !== sdk1) {
        if (undefined !== sdk1) {
          settings = sdk1.settings;
        }
      }
      obj1.settings = Object.assign(obj2, settings);
      obj.sdk = Object.assign(merged1, obj1);
      Client._metadata = Object.assign(merged, obj);
      Client.parentSpanIsAlwaysRootSpan = undefined === Client.parentSpanIsAlwaysRootSpan || Client.parentSpanIsAlwaysRootSpan;
      ({ enableLogs: enableLogs2, enableLogs } = Client);
      if (enableLogs2) {
        str2 = "native";
        enableLogs2 = "native" === Client.logsOrigin;
      }
      if (enableLogs2) {
        tmp11 = ReactNativeClient;
        tmp12 = closure_1;
        num2 = 10;
        debug = ReactNativeClient(closure_1[10]).debug;
        str3 = "disabling Sentry logs on JavaScript due to rule set by logsOrigin";
        logResult = debug.log("disabling Sentry logs on JavaScript due to rule set by logsOrigin");
        flag = false;
        Client.enableLogs = false;
      }
      items = [];
      items[0] = Client;
      obj5 = closure_5(ReactNativeClient);
      tmp14 = closure_4;
      if (closure_8()) {
        _Reflect = Reflect;
        tmp16 = closure_5;
        constructResult = Reflect.construct(obj5, items, closure_5(self).constructor);
      } else {
        constructResult = obj5.apply(self, items);
      }
      tmp14Result = tmp14(self, constructResult);
      ReactNativeClient = tmp14Result;
      tmp14Result._outcomesBuffer = [];
      if (true === Client.sendDefaultPii) {
        tmp17 = ReactNativeClient;
        tmp18 = closure_1;
        num3 = 10;
        str4 = "beforeSendSession";
        onResult = tmp14Result.on("beforeSendSession", ReactNativeClient(closure_1[10]).addAutoIpAddressToSession);
      }
      if (Client.enableLogs) {
        str5 = "flush";
        onResult1 = tmp14Result.on("flush", () => {
          const result = tmp14Result(closure_1[10])._INTERNAL_flushLogsBuffer(tmp14Result);
        });
        str6 = "afterCaptureLog";
        onResult2 = tmp14Result.on("afterCaptureLog", () => {
          if (tmp14Result._logFlushIdleTimeout) {
            const _clearTimeout = clearTimeout;
            clearTimeout(tmp14Result._logFlushIdleTimeout);
          }
          tmp14Result._logFlushIdleTimeout = setTimeout(() => {
            const result = callback(closure_1[10])._INTERNAL_flushLogsBuffer(callback);
          }, 5000);
        });
      }
      Client.enableLogs = enableLogs;
      return tmp14Result;
    }
  }
  const arg1 = ReactNativeClient;
  callback2(ReactNativeClient, Client);
  let obj = {
    key: "eventFromException",
    value: function eventFromException(arg0) {
      const self = this;
      if (arguments.length > 1) {
        if (undefined !== arguments[1]) {
          let obj = arguments[1];
        }
        const obj2 = ReactNativeClient(closure_1[11]);
        return obj2.eventFromException(self._options.stackParser, arg0, obj, self._options.attachStacktrace);
      }
      obj = {};
    }
  };
  const items = [obj, , , , , , , , , , , ];
  obj = {
    key: "eventFromMessage",
    value: function eventFromMessage(arg0, arg1, arg2) {
      return ReactNativeClient(closure_1[11]).eventFromMessage(this._options.stackParser, arg0, arg1, arg2, this._options.attachStacktrace);
    }
  };
  items[1] = obj;
  obj = {
    key: "nativeCrash",
    value: function nativeCrash() {
      const NATIVE = ReactNativeClient(closure_1[12]).NATIVE;
      NATIVE.nativeCrash();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "close",
    value: function close() {
      return callback4(ReactNativeClient, "close", this, 3)([]).then((arg0) => {
        const NATIVE = arg0(closure_1[12]).NATIVE;
        return NATIVE.closeNativeSdk().then(() => arg0);
      });
    }
  };
  items[4] = {
    key: "captureUserFeedback",
    value: function captureUserFeedback(arg0) {
      let obj = ReactNativeClient(closure_1[13]);
      obj = { metadata: this._options._metadata, dsn: this.getDsn(), tunnel: undefined };
      this.sendEnvelope(obj.createUserFeedbackEnvelope(arg0, obj));
    }
  };
  items[5] = {
    key: "sendEnvelope",
    value: function sendEnvelope(arg0) {
      const self = this;
      const _clearOutcomesResult = this._clearOutcomes();
      this._outcomesBuffer = ReactNativeClient(closure_1[14]).mergeOutcomes(this._outcomesBuffer, _clearOutcomesResult);
      if (this._options.sendClientReports) {
        const result = self._attachClientReportTo(self._outcomesBuffer, arg0);
      }
      const ReactNativeClient = true;
      if (self._isEnabled()) {
        if (self._transport) {
          if (self._dsn) {
            self.emit("beforeEnvelope", arg0);
            const _transport = self._transport;
            _transport.send(arg0).then(null, (arg0) => {
              if (arg0 instanceof _true(closure_1[10]).SentryError) {
                const _true = false;
                const debug2 = _true(closure_1[10]).debug;
                debug2.error("SentryError while sending event, keeping outcomes buffer:", arg0);
              } else {
                const debug = _true(closure_1[10]).debug;
                debug.error("Error while sending event:", arg0);
              }
            });
            const sendResult = _transport.send(arg0);
          }
          if (ReactNativeClient) {
            self._outcomesBuffer = [];
          }
          return Promise.resolve({});
        }
      }
      const debug = ReactNativeClient(closure_1[10]).debug;
      debug.error("Transport disabled");
    }
  };
  items[6] = {
    key: "init",
    value: function init() {
      callback4(ReactNativeClient, "init", this, 3)([]);
      this._initNativeSdk();
    }
  };
  items[7] = {
    key: "on",
    value: function on(arg0, arg1) {
      const items = [arg0, arg1];
      return callback4(ReactNativeClient, "on", this, 3)(items);
    }
  };
  items[8] = {
    key: "emit",
    value: function emit(arg0) {
      const length = arguments.length;
      let num = 0;
      if (length > 1) {
        num = length - 1;
      }
      const array = new Array(num);
      for (let num2 = 1; num2 < length; num2 = num2 + 1) {
        array[num2 - 1] = arguments[num2];
      }
      const items = [arg0];
      callback4(ReactNativeClient, "emit", this, 3)(items.concat(array));
    }
  };
  items[9] = {
    key: "_initNativeSdk",
    value: function _initNativeSdk() {
      const self = this;
      const ReactNativeClient = this;
      const NATIVE = ReactNativeClient(closure_1[12]).NATIVE;
      const obj = {};
      const merged = Object.assign({}, this._options);
      obj.defaultSidecarUrl = ReactNativeClient(closure_1[15]).getDefaultSidecarUrl();
      const obj2 = ReactNativeClient(closure_1[15]);
      const devServer = ReactNativeClient(closure_1[16]).getDevServer();
      let str;
      if (null !== devServer) {
        if (undefined !== devServer) {
          str = devServer.url;
        }
      }
      if (!str) {
        str = "";
      }
      obj.devServerUrl = str;
      let options;
      if (self._integrations[closure_0(undefined, closure_1[17]).MOBILE_REPLAY_INTEGRATION_NAME]) {
        if ("options" in self._integrations[closure_0(undefined, closure_1[17]).MOBILE_REPLAY_INTEGRATION_NAME]) {
          options = self._integrations[closure_0(undefined, closure_1[17]).MOBILE_REPLAY_INTEGRATION_NAME].options;
        }
      }
      obj.mobileReplayOptions = options;
      const _experiments = self._options._experiments;
      let prop;
      if (null !== _experiments) {
        if (undefined !== _experiments) {
          prop = _experiments.androidProfilingOptions;
        }
      }
      obj.androidProfilingOptions = prop;
      const nativeSdk = NATIVE.initNativeSdk(Object.assign(merged, obj));
      const obj3 = ReactNativeClient(closure_1[16]);
      const nextPromise = nativeSdk.then((arg0) => arg0, () => {
        const result = self._showCannotConnectDialog();
        return false;
      });
      nativeSdk.then((arg0) => arg0, () => {
        const result = self._showCannotConnectDialog();
        return false;
      }).then((didCallNativeInit) => {
        const _options = self._options;
        const onReady = _options.onReady;
        let tmp = null === onReady;
        if (!tmp) {
          tmp = undefined === onReady;
        }
        if (!tmp) {
          const obj = { didCallNativeInit };
          onReady.call(_options, obj);
        }
        self.emit("afterInit");
      }).then(undefined, (arg0) => {
        const debug = self(closure_1[10]).debug;
        debug.error("The OnReady callback threw an error: ", arg0);
      });
    }
  };
  items[10] = {
    key: "_showCannotConnectDialog",
    value: function _showCannotConnectDialog() {

    }
  };
  items[11] = {
    key: "_attachClientReportTo",
    value: function _attachClientReportTo(_outcomesBuffer, arg1) {
      if (_outcomesBuffer.length > 0) {
        let obj = { type: "client_report" };
        const items = [obj, ];
        obj = { timestamp: ReactNativeClient(closure_1[10]).dateTimestampInSeconds(), discarded_events: _outcomesBuffer };
        items[1] = obj;
        const obj3 = ReactNativeClient(closure_1[10]);
        arg1[closure_0(undefined, closure_1[13]).items].push(items);
        const arr2 = arg1[closure_0(undefined, closure_1[13]).items];
      }
    }
  };
  return callback(ReactNativeClient, items);
}(arg1(dependencyMap[10]).Client);
