// Module ID: 13351
// Function ID: 13352
// Name: metrics
// Dependencies: [13251, 13254, 13256, 13282, 13260, 13283, 13255, 13352, 13269, 13289, 13290]

// Module 13351 (metrics)
import _mod13256 from "module_13256" /* 13256 */;
import _mod13260 from "module_13260" /* 13260 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 13269 */;
import _mod13282 from "module_13282" /* 13282 */;
import _mod13283 from "module_13283" /* 13283 */;
import COUNTER_METRIC_TYPE2 from "COUNTER_METRIC_TYPE" /* 13352 */;
import registerSpanErrorInstrumentation from "module_13251" /* 13251 */;
import DEBUG_BUILD from "module_13254" /* 13254 */;

const require = globalThis.__r;
let _require, dependencyMap;

const f105185 = () => {
  const weakMap = new WeakMap();
  return weakMap;
};
function addToMetricsAggregator(arg0, SET_METRIC_TYPE, arg2, arg3, arg4) {
  let environment;
  let release;
  let tags;
  let timestamp;
  let unit;
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let client = obj.client;
  if (!client) {
    const obj2 = _mod13282;
    client = obj2.getClient();
  }
  if (client) {
    const obj3 = _mod13260;
    const activeSpan = obj3.getActiveSpan();
    let rootSpan;
    if (activeSpan) {
      const tmp3Result = _mod13260;
      rootSpan = tmp3Result.getRootSpan(activeSpan);
    }
    let description = rootSpan;
    if (description) {
      const tmp3Result3 = _mod13260;
      description = tmp3Result3.spanToJSON(rootSpan).description;
    }
    ({ unit, tags, timestamp } = obj);
    const options = client.getOptions();
    ({ release, environment } = options);
    const obj4 = {};
    if (release) {
      obj4.release = release;
    }
    if (environment) {
      obj4.environment = environment;
    }
    if (description) {
      obj4.transaction = description;
    }
    if (_mod13283.DEBUG_BUILD) {
      const logger = tmp3(13255).logger;
      const _HermesInternal = HermesInternal;
      logger.log("Adding value of " + arg3 + " to " + SET_METRIC_TYPE + " metric " + arg2);
    }
    const tmp3Result4 = _mod13256;
    const globalSingleton = tmp3Result4.getGlobalSingleton("globalMetricsAggregators", f105185);
    let value = globalSingleton.get(client);
    if (!value) {
      const self = this;
      const self2 = this;
      const tmp19 = new arg0(client);
      let closure_0 = tmp19;
      client.on("flush", () => closure_0.flush());
      client.on("close", () => closure_0.close());
      const result = globalSingleton.set(client, tmp19);
      value = tmp19;
    }
    const add = value.add;
    const obj5 = {};
    const merged = Object.assign(obj4);
    const merged1 = Object.assign(tags);
    add(SET_METRIC_TYPE, arg2, arg3, unit, obj5, timestamp);
  }
}

export const metrics = {
  increment(arg0, arg1, match) {
    let num = match;
    if (match === undefined) {
      num = 1;
    }
    const COUNTER_METRIC_TYPE = COUNTER_METRIC_TYPE2.COUNTER_METRIC_TYPE;
    let parsed = num;
    const tmp = addToMetricsAggregator;
    if (typeof num === "string") {
      const _parseInt = parseInt;
      parsed = parseInt(num);
    }
    tmp(arg0, COUNTER_METRIC_TYPE, arg1, parsed, arg3);
  },
  distribution(arg0, arg1, match, arg3) {
    const DISTRIBUTION_METRIC_TYPE = COUNTER_METRIC_TYPE2.DISTRIBUTION_METRIC_TYPE;
    let parsed = match;
    const tmp = addToMetricsAggregator;
    if (typeof match === "string") {
      const _parseInt = parseInt;
      parsed = parseInt(match);
    }
    tmp(arg0, DISTRIBUTION_METRIC_TYPE, arg1, parsed, arg3);
  },
  set(arg0, arg1, arg2, arg3) {
    addToMetricsAggregator(arg0, COUNTER_METRIC_TYPE2.SET_METRIC_TYPE, arg1, arg2, arg3);
  },
  gauge(arg0, arg1, match, arg3) {
    const GAUGE_METRIC_TYPE = COUNTER_METRIC_TYPE2.GAUGE_METRIC_TYPE;
    let parsed = match;
    const tmp = addToMetricsAggregator;
    if (typeof match === "string") {
      const _parseInt = parseInt;
      parsed = parseInt(match);
    }
    tmp(arg0, GAUGE_METRIC_TYPE, arg1, parsed, arg3);
  },
  timing(arg0, name, fn) {
    _require = arg0;
    dependencyMap = name;
    let closure_2 = fn;
    let str = arg3;
    if (arg3 === undefined) {
      str = "second";
    }
    let closure_3 = arg4;
    let c4;
    if (typeof fn === "function") {
      let obj = require("_browserPerformanceTimeOriginMode");
      let timestampInSecondsResult = obj.timestampInSeconds();
      c4 = timestampInSecondsResult;
      let obj2 = require("module_13289");
      const obj3 = { op: "metrics.timing", name, startTime: timestampInSecondsResult, onlyIfParent: true };
      return obj2.startSpanManual(obj3, (arg0) => {
        closure_0 = arg0;
        let obj = closure_0(name[10]);
        return obj.handleCallbackErrors(() => fn(), () => {

        }, () => {
          const obj = _browserPerformanceTimeOriginMode;
          const timestampInSecondsResult = obj.timestampInSeconds();
          const diff = timestampInSecondsResult - c4;
          const obj2 = { unit: "second" };
          const merged = Object.assign(closure_3);
          const DISTRIBUTION_METRIC_TYPE = COUNTER_METRIC_TYPE2.DISTRIBUTION_METRIC_TYPE;
          let parsed = diff;
          const tmp2 = closure_0;
          const tmp3 = name;
          const tmp6 = addToMetricsAggregator;
          if (typeof diff === "string") {
            const _parseInt = parseInt;
            parsed = parseInt(diff);
          }
          tmp6(tmp2, DISTRIBUTION_METRIC_TYPE, tmp3, parsed, obj2);
          closure_0.end(timestampInSecondsResult);
        });
      });
    } else {
      const obj4 = { unit: str };
      let merged = Object.assign(arg4);
      let DISTRIBUTION_METRIC_TYPE = require("COUNTER_METRIC_TYPE").DISTRIBUTION_METRIC_TYPE;
      let parsed = fn;
      const tmp13 = closure_2;
      if (typeof fn === "string") {
        let _parseInt = parseInt;
        parsed = parseInt(fn);
      }
      let tmp2 = DISTRIBUTION_METRIC_TYPE;
      let tmp3 = name;
      tmp13(arg0, DISTRIBUTION_METRIC_TYPE, name, parsed, obj4);
    }
  },
  getMetricsAggregatorForClient(on, arg1) {
    const obj = _mod13256;
    const globalSingleton = obj.getGlobalSingleton("globalMetricsAggregators", f105185);
    const value = globalSingleton.get(on);
    if (value) {
      return value;
    } else {
      const self = this;
      const self2 = this;
      const tmp4 = new arg1(on);
      let closure_0 = tmp4;
      on.on("flush", () => closure_0.flush());
      on.on("close", () => closure_0.close());
      const result = globalSingleton.set(on, tmp4);
      return tmp4;
    }
  }
};
