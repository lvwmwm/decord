// Module ID: 811
// Function ID: 9088
// Name: extractTraceparentData
// Dependencies: []

// Module 811 (extractTraceparentData)
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
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
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
arg5.generateTraceparentHeader = function generateTraceparentHeader(traceId, propagationSpanId2, sampled2) {
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
      let str = "00";
      if (tmp5) {
        str = "01";
      }
      const _HermesInternal = HermesInternal;
      return "00-" + first + "-" + spanId + "-" + str;
    }
    spanId = propagationSpanId2(arg6[1]).generateSpanId();
    const obj2 = propagationSpanId2(arg6[1]);
  }
  first = propagationSpanId2(arg6[1]).generateTraceId();
};
arg5.propagationContextFromHeaders = function propagationContextFromHeaders(arg0, arg1) {
  const tmp = extractTraceparentData(arg0);
  let obj = arg1(arg6[0]);
  let result = obj.baggageHeaderToDynamicSamplingContext(arg1);
  if (null != tmp) {
    if (tmp.traceId) {
      let sample_rand;
      if (null != result) {
        sample_rand = result.sample_rand;
      }
      const str = arg1(arg6[3]).parseSampleRate(sample_rand);
      if (undefined !== str) {
        if (result) {
          result.sample_rand = str.toString();
        }
        obj = {};
        ({ traceId: obj6.traceId, parentSpanId: obj6.parentSpanId, parentSampled: obj6.sampled } = tmp);
        if (!result) {
          result = {};
        }
        obj.dsc = result;
        obj.sampleRand = str;
        return obj;
      } else {
        let sample_rate;
        if (null != result) {
          sample_rate = result.sample_rate;
        }
        const parseSampleRateResult = arg1(arg6[3]).parseSampleRate(sample_rate);
        if (!parseSampleRateResult) {
          arg1(arg6[2]).safeMathRandom();
          const obj4 = arg1(arg6[2]);
        } else {
          let parentSampled;
          if (null != tmp) {
            parentSampled = tmp.parentSampled;
          }
        }
        const obj10 = arg1(arg6[3]);
        const safeMathRandomResult1 = arg1(arg6[2]).safeMathRandom();
        if (tmp.parentSampled) {
          let result1 = safeMathRandomResult1 * parseSampleRateResult;
        } else {
          result1 = parseSampleRateResult + safeMathRandomResult1 * (1 - parseSampleRateResult);
        }
        const obj5 = arg1(arg6[2]);
      }
      const obj3 = arg1(arg6[3]);
    }
  }
  obj = { traceId: arg1(arg6[1]).generateTraceId() };
  const obj8 = arg1(arg6[1]);
  obj.sampleRand = arg1(arg6[2]).safeMathRandom();
  return obj;
};
arg5.shouldContinueTrace = function shouldContinueTrace(client, org_id) {
  const result = org_id(arg6[4]).extractOrgIdFromClient(client);
  if (org_id) {
    if (result) {
      if (org_id !== result) {
        const debug2 = org_id(arg6[5]).debug;
        const _HermesInternal2 = HermesInternal;
        debug2.log("Won't continue trace because org IDs don't match (incoming baggage: " + org_id + ", SDK options: " + result + ")");
        let flag = false;
      }
      return flag;
    }
  }
  const obj = org_id(arg6[4]);
  flag = !(client.getOptions().strictTraceContinuation || false);
  if (!flag) {
    let tmp3 = org_id;
    if (org_id) {
      tmp3 = !result;
    }
    if (!tmp3) {
      tmp3 = !org_id && result;
      const tmp4 = !org_id && result;
    }
    flag = !tmp3;
  }
  if (!flag) {
    const debug = org_id(arg6[5]).debug;
    const _HermesInternal = HermesInternal;
    debug.log("Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: " + org_id + ", Sentry client: " + result + ")");
    flag = false;
  }
};
