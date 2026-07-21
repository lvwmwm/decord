// Module ID: 812
// Function ID: 9098
// Name: parseBaggageHeader
// Dependencies: [800, 801, 810, 65]
// Exports: baggageHeaderToDynamicSamplingContext, dynamicSamplingContextToSentryBaggageHeader

// Module 812 (parseBaggageHeader)
import module_800 from "module_800";

function parseBaggageHeader(arr) {
  if (arr) {
    if (!obj.isString(arr)) {
      const _Array = Array;
    }
    const _Array2 = Array;
    if (Array.isArray(arr)) {
      let reduced = arr.reduce((arg0, arg1) => {
        const entries = Object.entries(callback(arg1));
        const item = entries.forEach((arg0) => {
          const tmp = callback(arg0, 2);
          arg0[tmp[0]] = tmp[1];
        });
        return arg0;
      }, {});
    } else {
      reduced = baggageHeaderToObject(arr);
    }
    return reduced;
  }
}
function baggageHeaderToObject(str) {
  const parts = str.split(",");
  const mapped = parts.map((arr) => {
    const index = arr.indexOf("=");
    if (-1 === index) {
      let items = [];
    } else {
      const items1 = [arr.slice(0, index), arr.slice(index + 1)];
      items = items1.map((str) => decodeURIComponent(str.trim()));
    }
    return items;
  });
  return mapped.reduce((arg0, arg1) => {
    const tmp = callback(arg1, 2);
    const first = tmp[0];
    let tmp4 = first;
    if (first) {
      tmp4 = tmp3;
    }
    if (tmp4) {
      arg0[first] = tmp3;
    }
    return arg0;
  }, {});
}
function objectToBaggageHeader(arg0) {
  if (0 !== Object.keys(arg0).length) {
    const _Object = Object;
    const entries = Object.entries(arg0);
    return entries.reduce((arg0, arg1, arg2) => {
      const tmp = callback2(arg1, 2);
      const first = tmp[0];
      const combined = "" + encodeURIComponent(first) + "=" + encodeURIComponent(tmp3);
      let combined1 = combined;
      if (0 !== arg2) {
        const _HermesInternal = HermesInternal;
        combined1 = "" + arg0 + "," + combined;
      }
      if (combined1.length > 8192) {
        combined1 = arg0;
        if (callback(closure_1[2]).DEBUG_BUILD) {
          const debug = callback(closure_1[3]).debug;
          const _HermesInternal2 = HermesInternal;
          debug.warn("Not adding key: " + first + " with val: " + tmp3 + " to baggage header due to exceeding baggage size limits.");
          combined1 = arg0;
        }
      }
      return combined1;
    }, "");
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tmp2 = /^sentry-/;

export const MAX_BAGGAGE_STRING_LENGTH = 8192;
export const SENTRY_BAGGAGE_KEY_PREFIX = "sentry-";
export const SENTRY_BAGGAGE_KEY_PREFIX_REGEX = tmp2;
export const baggageHeaderToDynamicSamplingContext = function baggageHeaderToDynamicSamplingContext(arg0) {
  const tmp = parseBaggageHeader(arg0);
  if (tmp) {
    const _Object = Object;
    const entries = Object.entries(tmp);
    const reduced = entries.reduce((arg0, arg1) => {
      const tmp = callback(arg1, 2);
      if (tmp[0].match(closure_3)) {
        arg0[str.slice(7)] = tmp[1];
      }
      return arg0;
    }, {});
    const _Object2 = Object;
    let tmp4;
    if (Object.keys(reduced).length > 0) {
      tmp4 = reduced;
    }
    return tmp4;
  }
};
export const dynamicSamplingContextToSentryBaggageHeader = function dynamicSamplingContextToSentryBaggageHeader(arg0) {
  if (arg0) {
    const _Object = Object;
    const entries = Object.entries(arg0);
    return objectToBaggageHeader(entries.reduce((arg0, arg1) => {
      const tmp3 = callback(arg1, 2)[1];
      if (tmp3) {
        const _HermesInternal = HermesInternal;
        arg0["" + "sentry-" + tmp2] = tmp3;
      }
      return arg0;
    }, {}));
  }
};
export { objectToBaggageHeader };
export { parseBaggageHeader };
