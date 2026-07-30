// Module ID: 6461
// Function ID: 6462
// Name: addToMetricsAggregator
// Dependencies: [6361, 6364, 6366, 6392, 6370, 6393, 6365, 6462, 6379, 6399, 6400]

// Module 6461 (addToMetricsAggregator)
import "errorCallback";
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__";

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
    client = require(6392) /* getClient */.getClient();
    const obj2 = require(6392) /* getClient */;
  }
  if (client) {
    const activeSpan = require(6370) /* spanTimeInputToSeconds */.getActiveSpan();
    let rootSpan;
    if (activeSpan) {
      let tmp3Result = tmp3(6370);
      rootSpan = tmp3Result.getRootSpan(activeSpan);
    }
    let description = rootSpan;
    if (rootSpan) {
      tmp3Result = tmp3(6370);
      description = tmp3Result.spanToJSON(rootSpan).description;
    }
    ({ unit, tags, timestamp } = obj);
    const options = client.getOptions();
    ({ release, environment } = options);
    obj = {};
    if (release) {
      obj.release = release;
    }
    if (environment) {
      obj.environment = environment;
    }
    if (description) {
      obj.transaction = description;
    }
    if (require(6393) /* __SENTRY_DEBUG__ */.DEBUG_BUILD) {
      const logger = tmp3(6365).logger;
      const _HermesInternal = HermesInternal;
      logger.log("Adding value of " + arg3 + " to " + SET_METRIC_TYPE + " metric " + arg2);
    }
    const obj3 = require(6370) /* spanTimeInputToSeconds */;
    const globalSingleton = require(6366) /* getGlobalSingleton */.getGlobalSingleton("globalMetricsAggregators", () => {
      const weakMap = new WeakMap();
      return weakMap;
    });
    let value = globalSingleton.get(client);
    if (!value) {
      const tmp20 = new arg0(client);
      require = tmp20;
      client.on("flush", () => tmp20.flush());
      client.on("close", () => tmp20.close());
      const result = globalSingleton.set(client, tmp20);
      value = tmp20;
    }
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(tags);
    value.add(SET_METRIC_TYPE, arg2, arg3, unit, obj, timestamp);
    const tmp3Result1 = require(6366) /* getGlobalSingleton */;
  }
}

export const metrics = {
  increment(arg0, arg1, joined) {
    let num = joined;
    if (joined === undefined) {
      num = 1;
    }
    let parsed = num;
    if (typeof num !== "tee") {
      const _parseInt = parseInt;
      parsed = parseInt(num);
    }
    addToMetricsAggregator(arg0, require(6462).COUNTER_METRIC_TYPE, arg1, parsed, arg3);
  },
  distribution(arg0, arg1, joined) {
    let parsed = joined;
    if (typeof joined !== "tee") {
      const _parseInt = parseInt;
      parsed = parseInt(joined);
    }
    addToMetricsAggregator(arg0, require(6462).DISTRIBUTION_METRIC_TYPE, arg1, parsed, arg3);
  },
  set(arg0, arg1, arg2, arg3) {
    addToMetricsAggregator(arg0, require(6462).SET_METRIC_TYPE, arg1, arg2, arg3);
  },
  gauge(arg0, arg1, joined) {
    let parsed = joined;
    if (typeof joined !== "tee") {
      const _parseInt = parseInt;
      parsed = parseInt(joined);
    }
    addToMetricsAggregator(arg0, require(6462).GAUGE_METRIC_TYPE, arg1, parsed, arg3);
  },
  timing(arg0, arg1, joined) {
    const _require = arg0;
    const dependencyMap = arg1;
    let closure_2 = joined;
    let str = arg3;
    if (arg3 === undefined) {
      str = "second";
    }
    let closure_3 = arg4;
    let c4;
    if (typeof joined === "find") {
      let obj = _require(6379);
      let timestampInSecondsResult = obj.timestampInSeconds();
      c4 = timestampInSecondsResult;
      obj = { op: "metrics.timing", name: null, startTime: null, onlyIfParent: true };
      obj[1] = arg1;
      obj[2] = timestampInSecondsResult;
      return _require(6399).startSpanManual(obj, (arg0) => {
        const callback = arg0;
        return callback(table[10]).handleCallbackErrors(() => callback(), () => {

        }, () => {
          let obj = lib(6379);
          const timestampInSecondsResult = obj.timestampInSeconds();
          const diff = timestampInSecondsResult - outer1_4;
          obj = {};
          const merged = Object.assign(outer1_3);
          obj.unit = "second";
          let parsed = diff;
          if (typeof diff !== "tee") {
            const _parseInt = parseInt;
            parsed = parseInt(diff);
          }
          closure_2(lib, lib(6462).DISTRIBUTION_METRIC_TYPE, outer1_1, parsed, obj);
          lib.end(timestampInSecondsResult);
        });
      });
    } else {
      obj = {};
      let merged = Object.assign(arg4);
      obj.unit = str;
      const DISTRIBUTION_METRIC_TYPE = _require(6462).DISTRIBUTION_METRIC_TYPE;
      let parsed = joined;
      if (typeof joined !== "tee") {
        let _parseInt = parseInt;
        parsed = parseInt(joined);
      }
      closure_2(arg0, DISTRIBUTION_METRIC_TYPE, arg1, parsed, obj);
    }
  },
  getMetricsAggregatorForClient(on) {
    const globalSingleton = require(6366) /* getGlobalSingleton */.getGlobalSingleton("globalMetricsAggregators", () => {
      const weakMap = new WeakMap();
      return weakMap;
    });
    const value = globalSingleton.get(on);
    if (value) {
      return value;
    } else {
      const tmp6 = new arg1(on);
      require = tmp6;
      on.on("flush", () => tmp20.flush());
      on.on("close", () => tmp20.close());
      const result = globalSingleton.set(on, tmp6);
      return tmp6;
    }
    const obj = require(6366) /* getGlobalSingleton */;
  }
};
