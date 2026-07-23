// Module ID: 7248
// Function ID: 58377
// Name: extractTraceparentData
// Dependencies: [7249, 7246]

// Module 7248 (extractTraceparentData)
const require = arg1;
const dependencyMap = arg6;
function extractTraceparentData(str) {
  if (str) {
    const match = str.match(regExp);
    if (match) {
      let flag = true;
      if ("1" !== match[3]) {
        if ("0" === match[3]) {
          flag = false;
        }
      }
      const obj = { traceId: match[1], parentSampled: flag, parentSpanId: match[2] };
      return obj;
    }
  }
}
const regExp = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
arg5.TRACEPARENT_REGEXP = regExp;
arg5.extractTraceparentData = extractTraceparentData;
arg5.generateSentryTraceHeader = function generateSentryTraceHeader() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    if (arguments.length > 1) {
      if (undefined !== arguments[1]) {
        let spanId = arguments[1];
      }
      let tmp5;
      if (arguments.length > 2) {
        tmp5 = arguments[2];
      }
      let str2 = "";
      if (undefined !== tmp5) {
        let str3 = "-0";
        if (tmp5) {
          str3 = "-1";
        }
        str2 = str3;
      }
      const _HermesInternal = HermesInternal;
      return "" + first + "-" + spanId + str2;
    }
    spanId = require(7246) /* generateTraceId */.generateSpanId();
    const obj2 = require(7246) /* generateTraceId */;
  }
  first = require(7246) /* generateTraceId */.generateTraceId();
};
arg5.propagationContextFromHeaders = function propagationContextFromHeaders(arg0, arg1) {
  const tmp = extractTraceparentData(arg0);
  let obj = require(7249) /* parseBaggageHeader */;
  let result = obj.baggageHeaderToDynamicSamplingContext(arg1);
  if (tmp) {
    if (tmp.traceId) {
      obj = {};
      ({ traceId: obj6.traceId, parentSpanId: obj6.parentSpanId } = tmp);
      obj.spanId = require(7246) /* generateTraceId */.generateSpanId();
      obj.sampled = tmp.parentSampled;
      if (!result) {
        result = {};
      }
      obj.dsc = result;
      return obj;
    }
  }
  obj = { traceId: require(7246) /* generateTraceId */.generateTraceId() };
  const obj4 = require(7246) /* generateTraceId */;
  obj.spanId = require(7246) /* generateTraceId */.generateSpanId();
  return obj;
};
