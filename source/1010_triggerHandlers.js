// Module ID: 1010
// Function ID: 11018
// Name: triggerHandlers
// Dependencies: [1011, 794, 1012, 1027, 1030, 1031, 1022]

// Module 1010 (triggerHandlers)
const require = arg1;
const dependencyMap = arg6;
function triggerHandlers(arg0, arg1) {
  if (null != dependencyMap[arg0]) {
    if (arr.length) {
      const iter = arr[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = nextResult;
        let tmp6 = nextResult;
        let tmp7 = arg1;
        let nextResultResult = nextResult(arg1);
        continue;
      }
    }
  }
}
function instrumentCls() {
  return require(1012) /* items */.onCLS((metric) => {
    outer1_8("cls", { metric });
    const outer1_2 = metric;
  }, { reportAllChanges: true });
}
function instrumentLcp() {
  return require(1027) /* items */.onLCP((metric) => {
    outer1_8("lcp", { metric });
    const outer1_3 = metric;
  }, { reportAllChanges: true });
}
function instrumentTtfb() {
  return require(1030) /* items */.onTTFB((metric) => {
    outer1_8("ttfb", { metric });
    const outer1_4 = metric;
  });
}
function instrumentInp() {
  return require(1031) /* items */.onINP((metric) => {
    outer1_8("inp", { metric });
    const outer1_5 = metric;
  });
}
function addMetricObserver(inp, _onInp, instrumentInp, closure_4) {
  addHandler(inp, _onInp);
  if (!dependencyMap2[inp]) {
    dependencyMap2[inp] = true;
    const tmp3 = instrumentInp();
  }
  if (closure_4) {
    const obj = { metric: closure_4 };
    _onInp(obj);
  }
  let tmp8;
  if (tmp) {
    tmp8 = tmp3;
  }
  return getCleanupCallback(inp, _onInp, tmp8);
}
function addHandler(arg0, arg1) {
  let items = dependencyMap[arg0];
  if (!items) {
    items = [];
  }
  dependencyMap[arg0] = items;
  dependencyMap[arg0].push(arg1);
}
function getCleanupCallback(event, handleEntries) {
  let closure_0 = event;
  let closure_1 = handleEntries;
  let closure_2 = arg2;
  return () => {
    if (callback) {
      callback();
    }
    if (outer1_6[closure_0]) {
      const index = arr.indexOf(closure_1);
      if (-1 !== index) {
        arr.splice(index, 1);
      }
    }
  };
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let closure_6 = {};
let closure_7 = {};
arg5.addClsInstrumentationHandler = function addClsInstrumentationHandler(arg0, arg1) {
  let tmp4 = arguments.length > 1;
  if (tmp4) {
    tmp4 = undefined !== arguments[1];
  }
  if (tmp4) {
    tmp4 = arguments[1];
  }
  return addMetricObserver("cls", arg0, instrumentCls, closure_2, tmp4);
};
arg5.addInpInstrumentationHandler = function addInpInstrumentationHandler(_onInp) {
  return addMetricObserver("inp", _onInp, instrumentInp, closure_5);
};
arg5.addLcpInstrumentationHandler = function addLcpInstrumentationHandler(arg0, arg1) {
  let tmp4 = arguments.length > 1;
  if (tmp4) {
    tmp4 = undefined !== arguments[1];
  }
  if (tmp4) {
    tmp4 = arguments[1];
  }
  return addMetricObserver("lcp", arg0, instrumentLcp, closure_3, tmp4);
};
arg5.addPerformanceInstrumentationHandler = function addPerformanceInstrumentationHandler(event, handleEntries) {
  addHandler(event, handleEntries);
  if (!dependencyMap2[event]) {
    (function instrumentPerformanceObserver(event) {
      let closure_0 = event;
      const obj = {};
      if ("event" === event) {
        obj.durationThreshold = 0;
      }
      outer1_0(outer1_1[6]).observe(event, (entries) => {
        outer2_8(closure_0, { entries });
      }, obj);
    })(event);
    dependencyMap2[event] = true;
  }
  return getCleanupCallback(event, handleEntries);
};
arg5.addTtfbInstrumentationHandler = function addTtfbInstrumentationHandler(_onInp) {
  return addMetricObserver("ttfb", _onInp, instrumentTtfb, closure_4);
};
arg5.isPerformanceEventTiming = function isPerformanceEventTiming(interactionId) {
  return "duration" in interactionId;
};
