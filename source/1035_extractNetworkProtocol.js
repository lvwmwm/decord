// Module ID: 1035
// Function ID: 11154
// Name: extractNetworkProtocol
// Dependencies: []
// Exports: extractNetworkProtocol, getBrowserPerformanceAPI, isMeasurementValue, listenForWebVitalReportEvents, msToSec, startAndEndSpan, startStandaloneWebVitalSpan, supportsWebVital

// Module 1035 (extractNetworkProtocol)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const extractNetworkProtocol = function extractNetworkProtocol(nextHopProtocol) {
  let str2 = "unknown";
  let str3 = "unknown";
  let str4 = "";
  const iter = nextHopProtocol[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp11 = nextResult;
    if ("/" === nextResult) {
      let tmp7 = nextHopProtocol;
      let tmp8 = callback;
      let num2 = 2;
      let tmp9 = callback(str.split("/"), 2);
      let num3 = 0;
      str2 = tmp9[0];
      let num4 = 1;
      str3 = tmp9[1];
      iter.return();
      // break
    } else {
      let _isNaN = isNaN;
      let _Number = Number;
      let tmp2 = nextResult;
      let tmp3 = str4;
      if (isNaN(Number(tmp11))) {
        let tmp6 = nextResult;
        str4 = `${tmp11}`;
        // continue
      } else {
        let str5 = "http";
        let str6 = "h";
        if ("h" !== `${tmp11}`) {
          str5 = str4;
        }
        str2 = str5;
        let tmp4 = nextHopProtocol;
        let tmp5 = str4;
        let num = 1;
        str3 = str.split(str4)[1];
        iter.return();
        // break
      }
      break;
    }
    let tmp10 = str4;
    if (str4 === nextHopProtocol) {
      str2 = str4;
    }
    let obj = { name: str2, version: str3 };
    return obj;
  }
};
export const getBrowserPerformanceAPI = function getBrowserPerformanceAPI() {
  let _performance = require(dependencyMap[3]).WINDOW.addEventListener;
  if (_performance) {
    _performance = require(dependencyMap[3]).WINDOW.performance;
  }
  return _performance;
};
export const isMeasurementValue = function isMeasurementValue(deviceMemory) {
  let isFiniteResult = "number" === typeof deviceMemory;
  if (isFiniteResult) {
    const _isFinite = isFinite;
    isFiniteResult = isFinite(deviceMemory);
  }
  return isFiniteResult;
};
export const listenForWebVitalReportEvents = function listenForWebVitalReportEvents(on, arg1) {
  const require = arg1;
  function _runCollectorCallbackOnce(navigation) {
    let tmp = !closure_2;
    if (!closure_2) {
      tmp = closure_1;
    }
    if (tmp) {
      arg1(navigation, closure_1);
    }
    closure_2 = true;
  }
  let closure_2 = false;
  require(dependencyMap[4]).onHidden(() => {
    _runCollectorCallbackOnce("pagehide");
  });
  let closure_3 = on.on("beforeStartNavigationSpan", (arg0, isRedirect) => {
    if (!tmp) {
      _runCollectorCallbackOnce("navigation");
      callback();
      callback2();
    }
  });
  let closure_4 = on.on("afterStartPageLoadSpan", (spanContext) => {
    const spanId = spanContext.spanContext().spanId;
    callback2();
  });
};
export const msToSec = function msToSec(duration) {
  return duration / 1000;
};
export const startAndEndSpan = function startAndEndSpan(activeSpan, sum, sum1, arg3) {
  const require = sum;
  const dependencyMap = sum1;
  callback2(arg3);
  let closure_2 = Object.assign({}, arg3);
  const start_timestamp = require(dependencyMap[2]).spanToJSON(activeSpan).start_timestamp;
  let tmp2 = start_timestamp;
  if (start_timestamp) {
    tmp2 = start_timestamp > sum;
  }
  if (tmp2) {
    tmp2 = "function" === typeof activeSpan.updateStartTime;
  }
  if (tmp2) {
    activeSpan.updateStartTime(sum);
  }
  const obj = require(dependencyMap[2]);
  return require(dependencyMap[2]).withActiveSpan(activeSpan, () => {
    let obj = arg1(arg2[2]);
    obj = { startTime: arg1 };
    const startInactiveSpanResult = obj.startInactiveSpan(Object.assign(obj, closure_2));
    if (startInactiveSpanResult) {
      startInactiveSpanResult.end(arg2);
    }
    return startInactiveSpanResult;
  });
};
export const startStandaloneWebVitalSpan = function startStandaloneWebVitalSpan(arg0) {
  let attributes;
  let environment;
  let name;
  let release;
  let startTime;
  let transaction;
  let obj = require(dependencyMap[2]);
  const client = obj.getClient();
  if (client) {
    ({ name, transaction, attributes, startTime } = arg0);
    const options = client.getOptions();
    const sendDefaultPii = options.sendDefaultPii;
    ({ release, environment } = options);
    const integrationByName = client.getIntegrationByName("Replay");
    let replayId;
    if (null != integrationByName) {
      replayId = integrationByName.getReplayId();
    }
    const currentScope = require(dependencyMap[2]).getCurrentScope();
    const user = currentScope.getUser();
    let tmp8;
    if (undefined !== user) {
      tmp8 = user.email || user.id || user.ip_address;
      const tmp9 = user.email || user.id || user.ip_address;
    }
    const profile_id = currentScope.getScopeData().contexts.profile.profile_id;
    while (true) {
      let tmp12 = globalThis;
      obj = { release, environment };
      let tmp13 = tmp8;
      if (tmp8) {
        break;
      } else {
        // break
      }
      obj.user = tmp13;
      let tmp14 = profile_id;
      obj.profile_id = tmp14;
      let tmp15 = replayId;
      obj.replay_id = tmp15;
      obj.transaction = transaction;
      let tmp16 = require;
      let tmp17 = dependencyMap;
      let num = 3;
      let _navigator = require(dependencyMap[3]).WINDOW.navigator;
      let tmp18 = _navigator;
      let userAgent;
      if (null != _navigator) {
        userAgent = _navigator.userAgent;
      }
      obj.user_agent.original = userAgent;
      let tmp20 = sendDefaultPii;
      let str2;
      if (sendDefaultPii) {
        str2 = "{{auto}}";
      }
      obj.client.address = str2;
      let tmp22 = require;
      let tmp23 = dependencyMap;
      let merged = Object.assign(obj, attributes);
      let obj8 = require(dependencyMap[2]);
      obj = { name, attributes: merged, startTime };
      let obj1 = {};
      let flag = true;
      obj1.standalone = true;
      obj.experimental = obj1;
      return obj8.startInactiveSpan(obj);
    }
    const obj4 = require(dependencyMap[2]);
    const obj6 = currentScope;
  }
};
export const supportsWebVital = function supportsWebVital(arg0) {
  const supportedEntryTypes = globalThis.PerformanceObserver.supportedEntryTypes;
  return supportedEntryTypes.includes(arg0);
};
