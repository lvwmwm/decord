// Module ID: 7242
// Function ID: 58320
// Name: extractTraceparentData
// Dependencies: []

// Module 7242 (extractTraceparentData)
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
    spanId = arg1(arg6[1]).generateSpanId();
    const obj2 = arg1(arg6[1]);
  }
  first = arg1(arg6[1]).generateTraceId();
};
arg5.propagationContextFromHeaders = function propagationContextFromHeaders(arg0, arg1) {
  const tmp = extractTraceparentData(arg0);
  let obj = arg1(arg6[0]);
  let result = obj.baggageHeaderToDynamicSamplingContext(arg1);
  if (tmp) {
    if (tmp.traceId) {
      obj = {};
      ({ traceId: obj6.traceId, parentSpanId: obj6.parentSpanId } = tmp);
      obj.spanId = arg1(arg6[1]).generateSpanId();
      obj.sampled = tmp.parentSampled;
      if (!result) {
        result = {};
      }
      obj.dsc = result;
      return obj;
    }
  }
  obj = { traceId: arg1(arg6[1]).generateTraceId() };
  const obj4 = arg1(arg6[1]);
  obj.spanId = arg1(arg6[1]).generateSpanId();
  return obj;
};
