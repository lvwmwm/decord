// Module ID: 861
// Function ID: 9630
// Name: setMetricAttribute
// Dependencies: [57, 65, 857, 821, 815, 859, 825, 800, 801, 847, 862, 802]
// Exports: _INTERNAL_captureMetric

// Module 861 (setMetricAttribute)
import _slicedToArray from "_slicedToArray";
import _toConsumableArray from "_toConsumableArray";

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
function _INTERNAL_captureSerializedMetric(closure_0) {
  const obj = _getBufferMap();
  const arr = _INTERNAL_getMetricBuffer(closure_0);
  if (undefined === arr) {
    const items = [arg1];
    const result = obj.set(closure_0, items);
  } else if (arr.length >= 1000) {
    _INTERNAL_flushMetricsBuffer(closure_0, arr);
    const items1 = [arg1];
    const result1 = obj.set(closure_0, items1);
  } else {
    const items2 = [];
    const items3 = [arg1];
    const result2 = obj.set(closure_0, items2.concat(_toConsumableArray(arr), items3));
  }
}
function _INTERNAL_flushMetricsBuffer(closure_0, arr) {
  let _metadata;
  let tunnel;
  let items = arr;
  if (null == arr) {
    items = _INTERNAL_getMetricBuffer(closure_0);
  }
  if (null == items) {
    items = [];
  }
  if (0 !== items.length) {
    const options = closure_0.getOptions();
    const obj = require(862) /* createMetricContainerEnvelopeItem */;
    ({ _metadata, tunnel } = options);
    const metricEnvelope = obj.createMetricEnvelope(items, _metadata, tunnel, closure_0.getDsn());
    const result = _getBufferMap().set(closure_0, []);
    closure_0.emit("flushMetrics");
    closure_0.sendEnvelope(metricEnvelope);
    const obj2 = _getBufferMap();
  }
}
function _INTERNAL_getMetricBuffer(closure_0) {
  return _getBufferMap().get(closure_0);
}
function _getBufferMap() {
  return require(802) /* getSentryCarrier */.getGlobalSingleton("clientToMetricBufferMap", () => {
    const weakMap = new WeakMap();
    return weakMap;
  });
}
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
    let obj = require(825) /* getCurrentScope */;
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
    client = require(825) /* getCurrentScope */.getClient();
    const obj2 = require(825) /* getCurrentScope */;
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
        if (require(800).DEBUG_BUILD) {
          const debug2 = require(801) /* consoleSandbox */.debug;
          debug2.warn("metrics option not enabled, metric will not be captured.");
        }
      }
    }
    const obj3 = require(847) /* mergeScopeData */;
    const combinedScopeData = obj3.getCombinedScopeData(require(825) /* getCurrentScope */.getIsolationScope(), scope);
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
      let tmp49Result = tmp49(857);
      const tmp55 = _slicedToArray(tmp49Result._getTraceInfoFromScope(client, scope), 2)[1];
      tmp49Result = tmp49(821);
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
      obj = { timestamp: require(815) /* dateTimestampInSeconds */.timestampInSeconds() };
      let str16 = "";
      if (null != trace_id) {
        str16 = trace_id;
      }
      obj.trace_id = str16;
      obj.span_id = spanId;
      ({ name: obj11.name, type: obj11.type, unit: obj11.unit, value: obj11.value } = beforeSendMetricResult);
      const _Object3 = Object;
      const obj12 = require(815) /* dateTimestampInSeconds */;
      const obj13 = require(859) /* isAttributeObject */;
      const serializeAttributesResult = require(859) /* isAttributeObject */.serializeAttributes(attributes);
      obj.attributes = Object.assign({}, serializeAttributesResult, require(859) /* isAttributeObject */.serializeAttributes(beforeSendMetricResult.attributes, "skip-undefined"));
      if (require(800).DEBUG_BUILD) {
        const debug4 = require(801) /* consoleSandbox */.debug;
        debug4.log("[Metric]", obj);
      }
      prop(client, obj);
      client.emit("afterCaptureMetric", beforeSendMetricResult);
      const obj14 = require(859) /* isAttributeObject */;
    } else if (tmp49(800).DEBUG_BUILD) {
      const debug3 = require(801) /* consoleSandbox */.debug;
      debug3.log("`beforeSendMetric` returned `null`, will not send metric.");
    }
    const obj4 = require(825) /* getCurrentScope */;
  } else if (require(800).DEBUG_BUILD) {
    const debug = require(801) /* consoleSandbox */.debug;
    debug.warn("No client available to capture metric.");
  }
};
export { _INTERNAL_captureSerializedMetric };
export { _INTERNAL_flushMetricsBuffer };
export { _INTERNAL_getMetricBuffer };
