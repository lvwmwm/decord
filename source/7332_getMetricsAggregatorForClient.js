// Module ID: 7332
// Function ID: 59122
// Name: getMetricsAggregatorForClient
// Dependencies: [7232, 7235, 7237, 7263, 7241, 7264, 7236, 7333, 7250, 7270, 7271]

// Module 7332 (getMetricsAggregatorForClient)
import "errorCallback";
import module_7235 from "module_7235";

function getMetricsAggregatorForClient(on) {
  const globalSingleton = require(7237) /* getGlobalSingleton */.getGlobalSingleton("globalMetricsAggregators", () => {
    const weakMap = new WeakMap();
    return weakMap;
  });
  const value = globalSingleton.get(on);
  if (value) {
    return value;
  } else {
    const prototype = arg1.prototype;
    const tmp5 = new arg1(on);
    require = tmp5;
    on.on("flush", () => tmp5.flush());
    on.on("close", () => tmp5.close());
    const result = globalSingleton.set(on, tmp5);
    return tmp5;
  }
  const obj = require(7237) /* getGlobalSingleton */;
}
function addToMetricsAggregator(arg0, COUNTER_METRIC_TYPE, arg2, arg3, arg4) {
  let environment;
  let release;
  let tags;
  let timestamp;
  let unit;
  if (arguments.length > 4) {
    if (undefined !== arguments[4]) {
      let obj = arguments[4];
    }
    let client = obj.client;
    if (!client) {
      client = require(7263) /* getCurrentScope */.getClient();
      const obj2 = require(7263) /* getCurrentScope */;
    }
    if (client) {
      const activeSpan = require(7241) /* spanTimeInputToSeconds */.getActiveSpan();
      let rootSpan;
      if (activeSpan) {
        rootSpan = require(7241) /* spanTimeInputToSeconds */.getRootSpan(activeSpan);
        const obj4 = require(7241) /* spanTimeInputToSeconds */;
      }
      let description = rootSpan;
      if (rootSpan) {
        description = require(7241) /* spanTimeInputToSeconds */.spanToJSON(rootSpan).description;
        const obj5 = require(7241) /* spanTimeInputToSeconds */;
      }
      ({ unit, timestamp, tags } = obj);
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
      if (require(7264).DEBUG_BUILD) {
        const logger = require(7236) /* consoleSandbox */.logger;
        const _HermesInternal = HermesInternal;
        logger.log("Adding value of " + arg3 + " to " + COUNTER_METRIC_TYPE + " metric " + arg2);
      }
      const obj7 = getMetricsAggregatorForClient(client, arg0);
      const _Object = Object;
      obj7.add(COUNTER_METRIC_TYPE, arg2, arg3, unit, Object.assign({}, obj, tags), timestamp);
      const obj3 = require(7241) /* spanTimeInputToSeconds */;
    }
  }
  obj = {};
}
function distribution(arg0, arg1, replaced) {
  addToMetricsAggregator(arg0, require(7333).DISTRIBUTION_METRIC_TYPE, arg1, ensureNumber(replaced), arg3);
}
function ensureNumber(replaced) {
  let parsed = replaced;
  if ("string" === typeof replaced) {
    const _parseInt = parseInt;
    parsed = parseInt(replaced);
  }
  return parsed;
}

export const metrics = {
  increment(arg0, arg1) {
    let num = 1;
    if (arguments.length > 2) {
      num = 1;
      if (undefined !== arguments[2]) {
        num = arguments[2];
      }
    }
    let tmp;
    if (arguments.length > 3) {
      tmp = arguments[3];
    }
    addToMetricsAggregator(arg0, require(7333).COUNTER_METRIC_TYPE, arg1, ensureNumber(num), tmp);
  },
  distribution,
  set(arg0, arg1, arg2, arg3) {
    addToMetricsAggregator(arg0, require(7333).SET_METRIC_TYPE, arg1, arg2, arg3);
  },
  gauge(arg0, arg1, replaced) {
    addToMetricsAggregator(arg0, require(7333).GAUGE_METRIC_TYPE, arg1, ensureNumber(replaced), arg3);
  },
  timing(arg0, name) {
    const _require = arg0;
    const dependencyMap = name;
    let closure_2 = arg2;
    let str = "second";
    if (arguments.length > 3) {
      str = "second";
      if (undefined !== arguments[3]) {
        str = arguments[3];
      }
    }
    let tmp;
    if (arguments.length > 4) {
      tmp = arguments[4];
    }
    const addToMetricsAggregator = tmp;
    if ("function" === typeof arg2) {
      let timestampInSecondsResult = _require(7250).timestampInSeconds();
      const distribution = timestampInSecondsResult;
      const obj2 = _require(7250);
      let obj = { op: "metrics.timing", name, startTime: timestampInSecondsResult, onlyIfParent: true };
      return _require(7270).startSpanManual(obj, (arg0) => {
        const callback = arg0;
        return callback(name[10]).handleCallbackErrors(() => outer1_2(), () => {

        }, () => {
          const timestampInSecondsResult = lib(table[8]).timestampInSeconds();
          const diff = timestampInSecondsResult - outer1_4;
          timestampInSecondsResult(lib, outer1_1, diff, Object.assign({}, outer1_3, { unit: "second" }));
          lib.end(timestampInSecondsResult);
        });
      });
    } else {
      const _Object = Object;
      obj = { unit: str };
      distribution(arg0, name, arg2, Object.assign({}, tmp, obj));
    }
  },
  getMetricsAggregatorForClient
};
