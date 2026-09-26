// Module ID: 13175
// Function ID: 13176
// Dependencies: [13075, 13078, 13080, 13106, 13084, 13107, 13079, 13176, 13093, 13113, 13114]

// Module 13175
import errorCallback from "errorCallback" /* 13075 */;
import _mod13080 from "module_13080" /* 13080 */;
import spanTimeInputToSeconds from "spanTimeInputToSeconds" /* 13084 */;
import _mod13093 from "module_13093" /* 13093 */;
import _mod13106 from "module_13106" /* 13106 */;
import _mod13107 from "module_13107" /* 13107 */;
import COUNTER_METRIC_TYPE from "COUNTER_METRIC_TYPE" /* 13176 */;
import __SENTRY_DEBUG__ from "module_13078" /* 13078 */;

const require = globalThis.__r;

function addToMetricsAggregator(arg0, SET_METRIC_TYPE, arg2, arg3, arg4) {
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  let client = obj.client;
  if (!client) {
    client = _mod13106.getClient();
  }
  if (client) {
    const activeSpan = spanTimeInputToSeconds.getActiveSpan();
    let rootSpan;
    if (activeSpan) {
      rootSpan = tmp3(13084).getRootSpan(activeSpan);
      const tmp3Result = tmp3(13084);
    }
    let description = rootSpan;
    if (rootSpan) {
      description = tmp3(13084).spanToJSON(rootSpan).description;
      const tmp3Result3 = tmp3(13084);
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
    if (_mod13107.DEBUG_BUILD) {
      const logger = tmp3(13079).logger;
      const _HermesInternal = HermesInternal;
      logger.log("Adding value of " + arg3 + " to " + SET_METRIC_TYPE + " metric " + arg2);
    }
    const globalSingleton = _mod13080.getGlobalSingleton("globalMetricsAggregators", () => {
      const weakMap = new WeakMap();
      return weakMap;
    });
    value = globalSingleton.get(client);
    if (!value) {
      const tmp20 = new arg0(client);
      closure_0 = tmp20;
      client.on("flush", () => closure_0.flush());
      client.on("close", () => closure_0.close());
      const result = globalSingleton.set(client, tmp20);
      value = tmp20;
    }
    const obj5 = {};
    const merged = Object.assign(obj4);
    const merged1 = Object.assign(tags);
    value.add(SET_METRIC_TYPE, arg2, arg3, unit, obj5, timestamp);
    const tmp3Result4 = _mod13080;
  }
}
errorCallback;

export const metrics = {
  increment(arg0, arg1, match) {
    let num = match;
    if (match === undefined) {
      num = 1;
    }
    let parsed = num;
    if (typeof num === "string") {
      const _parseInt = parseInt;
      parsed = parseInt(num);
    }
    addToMetricsAggregator(arg0, COUNTER_METRIC_TYPE.COUNTER_METRIC_TYPE, arg1, parsed, arg3);
  },
  distribution(arg0, arg1, match, arg3) {
    let parsed = match;
    if (typeof match === "string") {
      const _parseInt = parseInt;
      parsed = parseInt(match);
    }
    addToMetricsAggregator(arg0, COUNTER_METRIC_TYPE.DISTRIBUTION_METRIC_TYPE, arg1, parsed, arg3);
  },
  set(arg0, arg1, arg2, arg3) {
    addToMetricsAggregator(arg0, COUNTER_METRIC_TYPE.SET_METRIC_TYPE, arg1, arg2, arg3);
  },
  gauge(arg0, arg1, match, arg3) {
    let parsed = match;
    if (typeof match === "string") {
      const _parseInt = parseInt;
      parsed = parseInt(match);
    }
    addToMetricsAggregator(arg0, COUNTER_METRIC_TYPE.GAUGE_METRIC_TYPE, arg1, parsed, arg3);
  },
  timing(arg0, name, fn) {
    _require = arg0;
    dependencyMap = name;
    addToMetricsAggregator = fn;
    let str = arg3;
    if (arg3 === undefined) {
      str = "second";
    }
    closure_3 = arg4;
    c4 = undefined;
    if (typeof fn === "function") {
      let timestampInSecondsResult = require("module_13093").timestampInSeconds();
      c4 = timestampInSecondsResult;
      const obj = require("module_13093");
      const obj3 = { op: "metrics.timing", name, startTime: timestampInSecondsResult, onlyIfParent: true };
      return require("module_13113").startSpanManual(obj3, (arg0) => {
        closure_0 = arg0;
        return closure_0(name[10]).handleCallbackErrors(() => fn(), () => {

        }, () => {
          const timestampInSecondsResult = _mod13093.timestampInSeconds();
          const diff = timestampInSecondsResult - c4;
          const obj2 = {};
          const merged = Object.assign(closure_3);
          obj2.unit = "second";
          let parsed = diff;
          if (typeof diff === "string") {
            const _parseInt = parseInt;
            parsed = parseInt(diff);
          }
          addToMetricsAggregator(closure_0, COUNTER_METRIC_TYPE.DISTRIBUTION_METRIC_TYPE, closure_1, parsed, obj2);
          closure_0.end(timestampInSecondsResult);
        });
      });
    } else {
      const obj4 = {};
      let merged = Object.assign(arg4);
      obj4.unit = str;
      const DISTRIBUTION_METRIC_TYPE = require("COUNTER_METRIC_TYPE").DISTRIBUTION_METRIC_TYPE;
      let parsed = fn;
      if (typeof fn === "string") {
        let _parseInt = parseInt;
        parsed = parseInt(fn);
      }
      addToMetricsAggregator(arg0, DISTRIBUTION_METRIC_TYPE, name, parsed, obj4);
    }
  },
  getMetricsAggregatorForClient(on, arg1) {
    const globalSingleton = _mod13080.getGlobalSingleton("globalMetricsAggregators", () => {
      const weakMap = new WeakMap();
      return weakMap;
    });
    value = globalSingleton.get(on);
    if (value) {
      return value;
    } else {
      const tmp6 = new arg1(on);
      closure_0 = tmp6;
      on.on("flush", () => closure_0.flush());
      on.on("close", () => closure_0.close());
      const result = globalSingleton.set(on, tmp6);
      return tmp6;
    }
  }
};
