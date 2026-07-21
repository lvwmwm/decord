// Module ID: 1010
// Function ID: 11016
// Name: triggerHandlers
// Dependencies: [2386821120, 3221226487, 4211082227, 1895826180, 1022, 1651, 1792]

// Module 1010 (triggerHandlers)
function triggerHandlers(arg0, arg1) {
  if (null != closure_6[arg0]) {
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
  return arg1(arg6[2]).onCLS((metric) => {
    callback("cls", { metric });
  }, { reportAllChanges: true });
}
function instrumentLcp() {
  return arg1(arg6[3]).onLCP((metric) => {
    callback("lcp", { metric });
  }, { reportAllChanges: true });
}
function instrumentTtfb() {
  return arg1(arg6[4]).onTTFB((metric) => {
    callback("ttfb", { metric });
  });
}
function instrumentInp() {
  return arg1(arg6[5]).onINP((metric) => {
    callback("inp", { metric });
  });
}
function addMetricObserver(inp, _onInp, instrumentInp, closure_4) {
  addHandler(inp, _onInp);
  if (!closure_7[inp]) {
    closure_7[inp] = true;
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
  let items = closure_6[arg0];
  if (!items) {
    items = [];
  }
  closure_6[arg0] = items;
  closure_6[arg0].push(arg1);
}
function getCleanupCallback(event, handleEntries) {
  handleEntries = event;
  const arg6 = handleEntries;
  return () => {
    if (arg2) {
      arg2();
    }
    if (closure_6[closure_0]) {
      const index = arr.indexOf(arg1);
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
  if (!closure_7[event]) {
    function instrumentPerformanceObserver(event) {
      const obj = {};
      if ("event" === event) {
        obj.durationThreshold = 0;
      }
      event(closure_1[6]).observe(event, (entries) => {
        callback(entries, { entries });
      }, obj);
    }(event);
    closure_7[event] = true;
  }
  return getCleanupCallback(event, handleEntries);
};
arg5.addTtfbInstrumentationHandler = function addTtfbInstrumentationHandler(_onInp) {
  return addMetricObserver("ttfb", _onInp, instrumentTtfb, closure_4);
};
arg5.isPerformanceEventTiming = function isPerformanceEventTiming(interactionId) {
  return "duration" in interactionId;
};
