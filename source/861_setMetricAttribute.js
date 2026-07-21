// Module ID: 861
// Function ID: 9628
// Name: setMetricAttribute
// Dependencies: []
// Exports: _INTERNAL_captureMetric

// Module 861 (setMetricAttribute)
function setMetricAttribute(merged, arg1, email, arg3) {
  let tmp = !email;
  if (!tmp) {
    const tmp2 = arguments.length > 3 && undefined !== arguments[3];
    let tmp3 = !tmp2;
    if (tmp2) {
      tmp3 = arguments[3];
    }
    tmp = !tmp3 && arg1 in merged;
    const tmp4 = !tmp3 && arg1 in merged;
  }
  if (!tmp) {
    merged[arg1] = email;
  }
}
function _INTERNAL_captureSerializedMetric(tmp8Result) {
  const obj = _getBufferMap();
  const arr = _INTERNAL_getMetricBuffer(tmp8Result);
  if (undefined === arr) {
    const items = [arg1];
    const result = obj.set(tmp8Result, items);
  } else if (arr.length >= 1000) {
    _INTERNAL_flushMetricsBuffer(tmp8Result, arr);
    const items1 = [arg1];
    const result1 = obj.set(tmp8Result, items1);
  } else {
    const items2 = [];
    const items3 = [arg1];
    const result2 = obj.set(tmp8Result, items2.concat(callback2(arr), items3));
  }
}
function _INTERNAL_flushMetricsBuffer(tmp8Result, arr) {
  let _metadata;
  let tunnel;
  let items = arr;
  if (null == arr) {
    items = _INTERNAL_getMetricBuffer(tmp8Result);
  }
  if (null == items) {
    items = [];
  }
  if (0 !== items.length) {
    const options = tmp8Result.getOptions();
    const obj = require(dependencyMap[10]);
    ({ _metadata, tunnel } = options);
    const metricEnvelope = obj.createMetricEnvelope(items, _metadata, tunnel, tmp8Result.getDsn());
    const result = _getBufferMap().set(tmp8Result, []);
    tmp8Result.emit("flushMetrics");
    tmp8Result.sendEnvelope(metricEnvelope);
    const obj2 = _getBufferMap();
  }
}
function _INTERNAL_getMetricBuffer(tmp8Result) {
  return _getBufferMap().get(tmp8Result);
}
function _getBufferMap() {
  return require(dependencyMap[11]).getGlobalSingleton("clientToMetricBufferMap", () => {
    const weakMap = new WeakMap();
    return weakMap;
  });
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const _INTERNAL_captureMetric = function _INTERNAL_captureMetric(attributes, scope) {
  let _experiments;
  let beforeSendMetric;
  let enableMetrics;
  let environment;
  let release;
  let user;
  scope = undefined;
  if (null != scope) {
    scope = scope.scope;
  }
  if (null == scope) {
    let obj = require(dependencyMap[6]);
    scope = obj.getCurrentScope();
  }
  let prop;
  if (null != scope) {
    prop = scope.captureSerializedMetric;
  }
  if (null == prop) {
    prop = _INTERNAL_captureSerializedMetric;
  }
  let client;
  if (null != scope) {
    client = scope.getClient();
  }
  if (null == client) {
    client = require(dependencyMap[6]).getClient();
    const obj2 = require(dependencyMap[6]);
  }
  if (client) {
    const options = client.getOptions();
    ({ _experiments, enableMetrics, beforeSendMetric } = options);
    if (null == enableMetrics) {
      enableMetrics = undefined;
      if (null != _experiments) {
        enableMetrics = _experiments.enableMetrics;
      }
    }
    if (null != enableMetrics) {
      if (!enableMetrics) {
        if (require(dependencyMap[7]).DEBUG_BUILD) {
          const debug2 = require(dependencyMap[8]).debug;
          debug2.warn("metrics option not enabled, metric will not be captured.");
        }
      }
    }
    const obj3 = require(dependencyMap[9]);
    const combinedScopeData = obj3.getCombinedScopeData(require(dependencyMap[6]).getIsolationScope(), scope);
    ({ user, attributes } = combinedScopeData);
    const options1 = client.getOptions();
    const _Object = Object;
    ({ release, environment } = options1);
    const merged = Object.assign({}, attributes.attributes);
    setMetricAttribute(merged, "user.id", user.id, false);
    setMetricAttribute(merged, "user.email", user.email, false);
    setMetricAttribute(merged, "user.name", user.username, false);
    setMetricAttribute(merged, "sentry.release", release);
    setMetricAttribute(merged, "sentry.environment", environment);
    const sdkMetadata = client.getSdkMetadata();
    let sdk;
    if (null != sdkMetadata) {
      sdk = sdkMetadata.sdk;
    }
    if (null == sdk) {
      sdk = {};
    }
    setMetricAttribute(merged, "sentry.sdk.name", sdk.name);
    setMetricAttribute(merged, "sentry.sdk.version", sdk.version);
    const integrationByName = client.getIntegrationByName("Replay");
    let replayId;
    if (null != integrationByName) {
      replayId = integrationByName.getReplayId(true);
    }
    setMetricAttribute(merged, "sentry.replay_id", replayId);
    if (replayId) {
      let recordingMode;
      if (null != integrationByName) {
        recordingMode = integrationByName.getRecordingMode();
      }
      replayId = "buffer" === recordingMode;
    }
    if (replayId) {
      setMetricAttribute(merged, "sentry._internal.replay_is_buffering", true);
    }
    const _Object2 = Object;
    obj = { attributes: merged };
    const merged1 = Object.assign({}, attributes, obj);
    client.emit("processMetric", merged1);
    if (!beforeSendMetric) {
      beforeSendMetric = undefined;
      if (null != _experiments) {
        beforeSendMetric = _experiments.beforeSendMetric;
      }
    }
    let beforeSendMetricResult = merged1;
    if (beforeSendMetric) {
      beforeSendMetricResult = beforeSendMetric(merged1);
    }
    if (beforeSendMetricResult) {
      let tmp49Result = tmp49(tmp50[2]);
      const tmp55 = callback(tmp49Result._getTraceInfoFromScope(client, scope), 2)[1];
      tmp49Result = tmp49(tmp50[3]);
      const _getSpanForScopeResult = tmp49Result._getSpanForScope(scope);
      if (_getSpanForScopeResult) {
        let trace_id = _getSpanForScopeResult.spanContext().traceId;
      } else if (null != tmp55) {
        trace_id = tmp55.trace_id;
      }
      let spanId;
      if (_getSpanForScopeResult) {
        spanId = _getSpanForScopeResult.spanContext().spanId;
      }
      obj = { timestamp: require(dependencyMap[4]).timestampInSeconds() };
      let str16 = "";
      if (null != trace_id) {
        str16 = trace_id;
      }
      obj.trace_id = str16;
      obj.span_id = spanId;
      ({ name: obj11.name, type: obj11.type, unit: obj11.unit, value: obj11.value } = beforeSendMetricResult);
      const _Object3 = Object;
      const obj12 = require(dependencyMap[4]);
      const obj13 = require(dependencyMap[5]);
      const serializeAttributesResult = require(dependencyMap[5]).serializeAttributes(attributes);
      obj.attributes = Object.assign({}, serializeAttributesResult, require(dependencyMap[5]).serializeAttributes(beforeSendMetricResult.attributes, "skip-undefined"));
      if (require(dependencyMap[7]).DEBUG_BUILD) {
        const debug4 = require(dependencyMap[8]).debug;
        debug4.log("[Metric]", obj);
      }
      prop(client, obj);
      client.emit("afterCaptureMetric", beforeSendMetricResult);
      const obj14 = require(dependencyMap[5]);
    } else if (tmp49(tmp50[7]).DEBUG_BUILD) {
      const debug3 = require(dependencyMap[8]).debug;
      debug3.log("`beforeSendMetric` returned `null`, will not send metric.");
    }
    const obj4 = require(dependencyMap[6]);
  } else if (require(dependencyMap[7]).DEBUG_BUILD) {
    const debug = require(dependencyMap[8]).debug;
    debug.warn("No client available to capture metric.");
  }
};
export { _INTERNAL_captureSerializedMetric };
export { _INTERNAL_flushMetricsBuffer };
export { _INTERNAL_getMetricBuffer };
