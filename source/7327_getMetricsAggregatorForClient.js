// Module ID: 7327
// Function ID: 59088
// Name: getMetricsAggregatorForClient
// Dependencies: []

// Module 7327 (getMetricsAggregatorForClient)
function getMetricsAggregatorForClient(on) {
  const globalSingleton = require(dependencyMap[2]).getGlobalSingleton("globalMetricsAggregators", () => {
    const weakMap = new WeakMap();
    return weakMap;
  });
  const value = globalSingleton.get(on);
  if (value) {
    return value;
  } else {
    const prototype = arg1.prototype;
    const tmp5 = new arg1(on);
    const require = tmp5;
    on.on("flush", () => tmp5.flush());
    on.on("close", () => tmp5.close());
    const result = globalSingleton.set(on, tmp5);
    return tmp5;
  }
  const obj = require(dependencyMap[2]);
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
      client = require(dependencyMap[3]).getClient();
      const obj2 = require(dependencyMap[3]);
    }
    if (client) {
      const activeSpan = require(dependencyMap[4]).getActiveSpan();
      let rootSpan;
      if (activeSpan) {
        rootSpan = require(dependencyMap[4]).getRootSpan(activeSpan);
        const obj4 = require(dependencyMap[4]);
      }
      let description = rootSpan;
      if (rootSpan) {
        description = require(dependencyMap[4]).spanToJSON(rootSpan).description;
        const obj5 = require(dependencyMap[4]);
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
      if (require(dependencyMap[5]).DEBUG_BUILD) {
        const logger = require(dependencyMap[6]).logger;
        const _HermesInternal = HermesInternal;
        logger.log("Adding value of " + arg3 + " to " + COUNTER_METRIC_TYPE + " metric " + arg2);
      }
      const obj7 = getMetricsAggregatorForClient(client, arg0);
      const _Object = Object;
      obj7.add(COUNTER_METRIC_TYPE, arg2, arg3, unit, Object.assign({}, obj, tags), timestamp);
      const obj3 = require(dependencyMap[4]);
    }
  }
  obj = {};
}
function distribution(arg0, arg1, replaced) {
  addToMetricsAggregator(arg0, require(dependencyMap[7]).DISTRIBUTION_METRIC_TYPE, arg1, ensureNumber(replaced), arg3);
}
function ensureNumber(replaced) {
  let parsed = replaced;
  if ("string" === typeof replaced) {
    const _parseInt = parseInt;
    parsed = parseInt(replaced);
  }
  return parsed;
}
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[1]);

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
    addToMetricsAggregator(arg0, require(dependencyMap[7]).COUNTER_METRIC_TYPE, arg1, ensureNumber(num), tmp);
  },
  distribution,
  set(arg0, arg1, arg2, arg3) {
    addToMetricsAggregator(arg0, require(dependencyMap[7]).SET_METRIC_TYPE, arg1, arg2, arg3);
  },
  gauge(arg0, arg1, replaced) {
    addToMetricsAggregator(arg0, require(dependencyMap[7]).GAUGE_METRIC_TYPE, arg1, ensureNumber(replaced), arg3);
  },
  timing(arg0, name) {
    const require = arg0;
    const dependencyMap = name;
    const getMetricsAggregatorForClient = arg2;
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
      const timestampInSecondsResult = require(dependencyMap[8]).timestampInSeconds();
      const distribution = timestampInSecondsResult;
      const obj2 = require(dependencyMap[8]);
      let obj = { op: "metrics.timing", name, startTime: timestampInSecondsResult, onlyIfParent: true };
      return require(dependencyMap[9]).startSpanManual(obj, (arg0) => arg0(arg1[10]).handleCallbackErrors(() => callback(), () => {

      }, () => {
        const timestampInSecondsResult = arg0(closure_1[8]).timestampInSeconds();
        const diff = timestampInSecondsResult - callback2;
        callback2(arg0, closure_1, diff, Object.assign({}, closure_3, { unit: "second" }));
        arg0.end(timestampInSecondsResult);
      }));
    } else {
      const _Object = Object;
      obj = { unit: str };
      distribution(arg0, name, arg2, Object.assign({}, tmp, obj));
    }
  },
  getMetricsAggregatorForClient
};
