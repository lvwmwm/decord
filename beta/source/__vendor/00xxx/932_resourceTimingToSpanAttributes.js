// Module ID: 932
// Function ID: 933
// Name: resourceTimingToSpanAttributes
// Dependencies: [686, 928]
// Exports: resourceTimingToSpanAttributes

// Module 932 (resourceTimingToSpanAttributes)
import extractNetworkProtocol from "extractNetworkProtocol" /* 928 */;

require = arg1;
const dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const resourceTimingToSpanAttributes = function resourceTimingToSpanAttributes(nextHopProtocol) {
  const obj = {};
  if (null != nextHopProtocol.nextHopProtocol) {
    const result = extractNetworkProtocol.extractNetworkProtocol(nextHopProtocol.nextHopProtocol);
    ({ version: obj["network.protocol.version"], name: obj["network.protocol.name"] } = result);
  }
  if (obj3.browserPerformanceTimeOrigin()) {
    const obj4 = {};
    const merged = Object.assign(obj);
    const redirectStart = nextHopProtocol.redirectStart;
    let result1 = redirectStart;
    if (redirectStart) {
      let timeOrigin = tmp4(686).browserPerformanceTimeOrigin();
      if (!timeOrigin) {
        const _performance = performance;
        timeOrigin = performance.timeOrigin;
      }
      result1 = (timeOrigin + redirectStart) / 1000;
      const tmp4Result = tmp4(686);
    }
    obj4["http.request.redirect_start"] = result1;
    const redirectEnd = nextHopProtocol.redirectEnd;
    let result2 = redirectEnd;
    if (redirectEnd) {
      let timeOrigin2 = tmp4(686).browserPerformanceTimeOrigin();
      if (!timeOrigin2) {
        const _performance2 = performance;
        timeOrigin2 = performance.timeOrigin;
      }
      result2 = (timeOrigin2 + redirectEnd) / 1000;
      const tmp4Result13 = tmp4(686);
    }
    obj4["http.request.redirect_end"] = result2;
    const workerStart = nextHopProtocol.workerStart;
    let result3 = workerStart;
    if (workerStart) {
      let timeOrigin3 = tmp4(686).browserPerformanceTimeOrigin();
      if (!timeOrigin3) {
        const _performance3 = performance;
        timeOrigin3 = performance.timeOrigin;
      }
      result3 = (timeOrigin3 + workerStart) / 1000;
      const tmp4Result14 = tmp4(686);
    }
    obj4["http.request.worker_start"] = result3;
    const fetchStart = nextHopProtocol.fetchStart;
    let result4 = fetchStart;
    if (fetchStart) {
      let timeOrigin4 = tmp4(686).browserPerformanceTimeOrigin();
      if (!timeOrigin4) {
        const _performance4 = performance;
        timeOrigin4 = performance.timeOrigin;
      }
      result4 = (timeOrigin4 + fetchStart) / 1000;
      const tmp4Result15 = tmp4(686);
    }
    obj4["http.request.fetch_start"] = result4;
    const domainLookupStart = nextHopProtocol.domainLookupStart;
    let result5 = domainLookupStart;
    if (domainLookupStart) {
      let timeOrigin5 = tmp4(686).browserPerformanceTimeOrigin();
      if (!timeOrigin5) {
        const _performance5 = performance;
        timeOrigin5 = performance.timeOrigin;
      }
      result5 = (timeOrigin5 + domainLookupStart) / 1000;
      const tmp4Result16 = tmp4(686);
    }
    obj4["http.request.domain_lookup_start"] = result5;
    const domainLookupEnd = nextHopProtocol.domainLookupEnd;
    let result6 = domainLookupEnd;
    if (domainLookupEnd) {
      let timeOrigin6 = tmp4(686).browserPerformanceTimeOrigin();
      if (!timeOrigin6) {
        const _performance6 = performance;
        timeOrigin6 = performance.timeOrigin;
      }
      result6 = (timeOrigin6 + domainLookupEnd) / 1000;
      const tmp4Result17 = tmp4(686);
    }
    obj4["http.request.domain_lookup_end"] = result6;
    const connectStart = nextHopProtocol.connectStart;
    let result7 = connectStart;
    if (connectStart) {
      let timeOrigin7 = tmp4(686).browserPerformanceTimeOrigin();
      if (!timeOrigin7) {
        const _performance7 = performance;
        timeOrigin7 = performance.timeOrigin;
      }
      result7 = (timeOrigin7 + connectStart) / 1000;
      const tmp4Result18 = tmp4(686);
    }
    obj4["http.request.connect_start"] = result7;
    const secureConnectionStart = nextHopProtocol.secureConnectionStart;
    let result8 = secureConnectionStart;
    if (secureConnectionStart) {
      let timeOrigin8 = tmp4(686).browserPerformanceTimeOrigin();
      if (!timeOrigin8) {
        const _performance8 = performance;
        timeOrigin8 = performance.timeOrigin;
      }
      result8 = (timeOrigin8 + secureConnectionStart) / 1000;
      const tmp4Result19 = tmp4(686);
    }
    obj4["http.request.secure_connection_start"] = result8;
    const connectEnd = nextHopProtocol.connectEnd;
    let result9 = connectEnd;
    if (connectEnd) {
      let timeOrigin9 = tmp4(686).browserPerformanceTimeOrigin();
      if (!timeOrigin9) {
        const _performance9 = performance;
        timeOrigin9 = performance.timeOrigin;
      }
      result9 = (timeOrigin9 + connectEnd) / 1000;
      const tmp4Result20 = tmp4(686);
    }
    obj4["http.request.connection_end"] = result9;
    const requestStart = nextHopProtocol.requestStart;
    let result10 = requestStart;
    if (requestStart) {
      let timeOrigin10 = tmp4(686).browserPerformanceTimeOrigin();
      if (!timeOrigin10) {
        const _performance10 = performance;
        timeOrigin10 = performance.timeOrigin;
      }
      result10 = (timeOrigin10 + requestStart) / 1000;
      const tmp4Result21 = tmp4(686);
    }
    obj4["http.request.request_start"] = result10;
    const responseStart = nextHopProtocol.responseStart;
    let result11 = responseStart;
    if (responseStart) {
      let timeOrigin11 = tmp4(686).browserPerformanceTimeOrigin();
      if (!timeOrigin11) {
        const _performance11 = performance;
        timeOrigin11 = performance.timeOrigin;
      }
      result11 = (timeOrigin11 + responseStart) / 1000;
      const tmp4Result22 = tmp4(686);
    }
    obj4["http.request.response_start"] = result11;
    const responseEnd = nextHopProtocol.responseEnd;
    let result12 = responseEnd;
    if (responseEnd) {
      let timeOrigin12 = tmp4(686).browserPerformanceTimeOrigin();
      if (!timeOrigin12) {
        const _performance12 = performance;
        timeOrigin12 = performance.timeOrigin;
      }
      result12 = (timeOrigin12 + responseEnd) / 1000;
      const tmp4Result23 = tmp4(686);
    }
    obj4["http.request.response_end"] = result12;
    let result13;
    if (null != nextHopProtocol.responseStart) {
      result13 = nextHopProtocol.responseStart / 1000;
    }
    obj4["http.request.time_to_first_byte"] = result13;
    const _Object = Object;
    const _Object2 = Object;
    const entries = Object.entries(obj4);
    let fromEntriesResult = Object.fromEntries(entries.filter((item) => {
      [, tmp] = item;
      return null != tmp;
    }));
  } else {
    const browserPerformanceAPI = tmp4(928).getBrowserPerformanceAPI();
    let timeOrigin1;
    if (browserPerformanceAPI != null) {
      timeOrigin1 = browserPerformanceAPI.timeOrigin;
    }
    fromEntriesResult = obj;
    const tmp4Result24 = tmp4(928);
  }
  return fromEntriesResult;
};
