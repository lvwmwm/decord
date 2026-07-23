// Module ID: 166
// Function ID: 2482
// Name: rawToPerformanceEntryType
// Dependencies: [154, 167, 160, 168, 155]

// Module 166 (rawToPerformanceEntryType)
const require = arg1;
const dependencyMap = arg6;
function rawToPerformanceEntryType(entryType) {
  if (obj.MARK === entryType) {
    return "mark";
  } else if (obj.MEASURE === entryType) {
    return "measure";
  } else if (obj.EVENT === entryType) {
    return "event";
  } else if (obj.LONGTASK === entryType) {
    return "longtask";
  } else if (obj.RESOURCE === entryType) {
    return "resource";
  } else {
    const _TypeError = TypeError;
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("rawToPerformanceEntryType: unexpected performance entry type received: " + entryType);
    throw typeError;
  }
}
let obj = { MARK: 1, MEASURE: 2, EVENT: 3, LONGTASK: 4, RESOURCE: 5 };
arg5.RawPerformanceEntryTypeValues = obj;
arg5.rawToPerformanceEntry = function rawToPerformanceEntry(entryType) {
  let fetchStart;
  entryType = entryType.entryType;
  if (obj.EVENT === entryType) {
    const PerformanceEventTiming = require(154) /* _isNativeReflectConstruct */.PerformanceEventTiming;
    obj = {};
    ({ name: obj6.name, startTime: obj6.startTime, duration: obj6.duration, processingStart: obj6.processingStart, processingEnd: obj6.processingEnd, interactionId: obj6.interactionId } = entryType);
    const prototype6 = PerformanceEventTiming.prototype;
    const performanceEventTiming = new PerformanceEventTiming(obj);
    return performanceEventTiming;
  } else if (obj.LONGTASK === entryType) {
    const PerformanceLongTaskTiming = require(167) /* _callSuper */.PerformanceLongTaskTiming;
    obj = { name: entryType.name, entryType: rawToPerformanceEntryType(entryType.entryType) };
    ({ startTime: obj5.startTime, duration: obj5.duration } = entryType);
    const prototype5 = PerformanceLongTaskTiming.prototype;
    const performanceLongTaskTiming = new PerformanceLongTaskTiming(obj);
    return performanceLongTaskTiming;
  } else if (obj.MARK === entryType) {
    const PerformanceMark = require(160) /* _callSuper */.PerformanceMark;
    const obj1 = { startTime: entryType.startTime };
    const prototype4 = PerformanceMark.prototype;
    const performanceMark = new PerformanceMark(entryType.name, obj1);
    return performanceMark;
  } else if (obj.MEASURE === entryType) {
    const PerformanceMeasure = require(160) /* _callSuper */.PerformanceMeasure;
    const obj2 = {};
    ({ startTime: obj3.startTime, duration: obj3.duration } = entryType);
    const prototype3 = PerformanceMeasure.prototype;
    const performanceMeasure = new PerformanceMeasure(entryType.name, obj2);
    return performanceMeasure;
  } else if (obj.RESOURCE === entryType) {
    const PerformanceResourceTiming = require(168) /* _isNativeReflectConstruct */.PerformanceResourceTiming;
    const obj3 = {};
    ({ name: obj2.name, startTime: obj2.startTime, duration: obj2.duration, fetchStart } = entryType);
    let num3 = 0;
    if (null != fetchStart) {
      num3 = fetchStart;
    }
    obj3.fetchStart = num3;
    const requestStart = entryType.requestStart;
    let num4 = 0;
    if (null != requestStart) {
      num4 = requestStart;
    }
    obj3.requestStart = num4;
    const connectStart = entryType.connectStart;
    let num5 = 0;
    if (null != connectStart) {
      num5 = connectStart;
    }
    obj3.connectStart = num5;
    const connectEnd = entryType.connectEnd;
    let num6 = 0;
    if (null != connectEnd) {
      num6 = connectEnd;
    }
    obj3.connectEnd = num6;
    const responseStart = entryType.responseStart;
    let num7 = 0;
    if (null != responseStart) {
      num7 = responseStart;
    }
    obj3.responseStart = num7;
    const responseEnd = entryType.responseEnd;
    let num8 = 0;
    if (null != responseEnd) {
      num8 = responseEnd;
    }
    obj3.responseEnd = num8;
    obj3.responseStatus = entryType.responseStatus;
    const prototype2 = PerformanceResourceTiming.prototype;
    const performanceResourceTiming = new PerformanceResourceTiming(obj3);
    return performanceResourceTiming;
  } else {
    const PerformanceEntry = require(155) /* PerformanceEntry */.PerformanceEntry;
    obj = { name: entryType.name, entryType: rawToPerformanceEntryType(entryType.entryType) };
    ({ startTime: obj.startTime, duration: obj.duration } = entryType);
    const prototype = PerformanceEntry.prototype;
    const performanceEntry = new PerformanceEntry(obj);
    return performanceEntry;
  }
};
arg5.rawToPerformanceEntryType = rawToPerformanceEntryType;
arg5.performanceEntryTypeToRaw = function performanceEntryTypeToRaw(result1) {
  if ("mark" === result1) {
    return obj.MARK;
  } else if ("measure" === result1) {
    return obj.MEASURE;
  } else if ("event" === result1) {
    return obj.EVENT;
  } else if ("longtask" === result1) {
    return obj.LONGTASK;
  } else if ("resource" === result1) {
    return obj.RESOURCE;
  } else {
    const _TypeError = TypeError;
    const _HermesInternal = HermesInternal;
    const typeError = new TypeError("performanceEntryTypeToRaw: unexpected performance entry type received: " + result1);
    throw typeError;
  }
};
