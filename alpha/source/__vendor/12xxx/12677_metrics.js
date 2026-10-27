// Module ID: 12677
// Function ID: 12678
// Name: metrics
// Dependencies: [12577, 12580, 12582, 12608, 12586, 12609, 12581, 12678, 12595, 12615, 12616]

// Module 12677 (metrics)
import _mod12582 from "module_12582" /* 12582 */;
import _mod12586 from "module_12586" /* 12586 */;
import _browserPerformanceTimeOriginMode from "_browserPerformanceTimeOriginMode" /* 12595 */;
import _mod12608 from "module_12608" /* 12608 */;
import _mod12609 from "module_12609" /* 12609 */;
import COUNTER_METRIC_TYPE2 from "COUNTER_METRIC_TYPE" /* 12678 */;
import registerSpanErrorInstrumentation from "module_12577" /* 12577 */;
import DEBUG_BUILD from "module_12580" /* 12580 */;

const require = globalThis.__r;
let _require, dependencyMap;

const f115530 = () => {
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
    const obj2 = _mod12608;
    client = obj2.getClient();
  }
  if (client) {
    const obj3 = _mod12586;
    const activeSpan = obj3.getActiveSpan();
    let rootSpan;
    if (activeSpan) {
      const tmp3Result = _mod12586;
      rootSpan = tmp3Result.getRootSpan(activeSpan);
    }
    let description = rootSpan;
    if (description) {
      const tmp3Result3 = _mod12586;
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
    if (_mod12609.DEBUG_BUILD) {
      const logger = tmp3(12581).logger;
      const _HermesInternal = HermesInternal;
      logger.log("Adding value of " + arg3 + " to " + SET_METRIC_TYPE + " metric " + arg2);
    }
    const tmp3Result4 = _mod12582;
    const globalSingleton = tmp3Result4.getGlobalSingleton("globalMetricsAggregators", f115530);
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
      let obj2 = require("module_12615");
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
    const obj = _mod12582;
    const globalSingleton = obj.getGlobalSingleton("globalMetricsAggregators", f115530);
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
