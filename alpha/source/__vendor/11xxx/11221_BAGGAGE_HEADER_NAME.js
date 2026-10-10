// Module ID: 11221
// Function ID: 11222
// Name: BAGGAGE_HEADER_NAME
// Dependencies: [11215, 11207, 11208]
// Exports: baggageHeaderToDynamicSamplingContext, dynamicSamplingContextToSentryBaggageHeader, parseBaggageHeader

// Module 11221 (BAGGAGE_HEADER_NAME)
import _mod11207 from "module_11207" /* 11207 */;
import _mod11215 from "module_11215" /* 11215 */;

const f107576 = (acc, item) => {
  let closure_0 = acc;
  let parts = item.split(",");
  const mapped = parts.map(f107577);
  const entries = Object.entries(mapped.reduce(f107578, {}));
  item = entries.forEach((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    acc[tmp] = tmp2;
  });
  return acc;
};
const f107577 = (item) => {
  const parts = item.split("=");
  return parts.map((item) => decodeURIComponent(item.trim()));
};
const f107578 = (acc, item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  const tmp3 = tmp && tmp2;
  if (tmp3) {
    acc[tmp] = tmp2;
  }
  return acc;
};
let c2 = "sentry-";
let tmp2 = /^sentry-/;
const re3 = tmp2;
let c4 = 8192;

export const BAGGAGE_HEADER_NAME = "baggage";
export const MAX_BAGGAGE_STRING_LENGTH = 8192;
export const SENTRY_BAGGAGE_KEY_PREFIX = "sentry-";
export const SENTRY_BAGGAGE_KEY_PREFIX_REGEX = tmp2;
export const baggageHeaderToDynamicSamplingContext = function baggageHeaderToDynamicSamplingContext(arr) {
  let tmp;
  if (arr) {
    const tmp2 = require;
    let tmp3 = dependencyMap;
    const obj = _mod11215;
    if (obj.isString(arr)) {
      let reduced;
      const _Array2 = Array;
      if (Array.isArray(arr)) {
        reduced = arr.reduce(f107576, {});
      } else {
        const str = ",";
        let parts = arr.split(",");
        let mapped = parts.map(f107577);
        reduced = mapped.reduce(f107578, {});
      }
      tmp = reduced;
    } else {
      const _Array = Array;
    }
  }
  if (tmp) {
    const _Object = Object;
    let entries = Object.entries(tmp);
    const reduced1 = entries.reduce((acc, item) => {
      let str;
      let tmp;
      [str, tmp] = item;
      if (str.match(closure_1_3)) {
        acc[str.slice(7)] = tmp;
      }
      return acc;
    }, {});
    const _Object2 = Object;
    let tmp9;
    if (Object.keys(reduced1).length > 0) {
      tmp9 = reduced1;
    }
    return tmp9;
  }
};
export const dynamicSamplingContextToSentryBaggageHeader = function dynamicSamplingContextToSentryBaggageHeader(arg0) {
  const tmp = arg0;
  if (tmp) {
    const tmp2 = globalThis;
    const _Object = Object;
    const entries = Object.entries(arg0);
    const reduced = entries.reduce((acc, item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      if (tmp2) {
        const _HermesInternal = HermesInternal;
        acc["" + closure_1_2 + tmp] = tmp2;
      }
      return acc;
    }, {});
    const _Object2 = Object;
    let reduced1;
    if (0 !== Object.keys(reduced).length) {
      const _Object3 = Object;
      const entries1 = Object.entries(reduced);
      reduced1 = entries1.reduce((acc, item, index) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        const encodeURIComponentResult = encodeURIComponent(tmp);
        const combined = "" + encodeURIComponentResult + "=" + encodeURIComponent(tmp2);
        let combined1 = combined;
        if (0 !== index) {
          const _HermesInternal = HermesInternal;
          combined1 = "" + acc + "," + combined;
        }
        if (combined1.length > closure_1_4) {
          combined1 = acc;
          const tmp5 = require;
          const tmp6 = dependencyMap;
          if (_mod11207.DEBUG_BUILD) {
            const logger = tmp5(tmp6[2]).logger;
            const _HermesInternal2 = HermesInternal;
            logger.warn("Not adding key: " + tmp + " with val: " + tmp2 + " to baggage header due to exceeding baggage size limits.");
            combined1 = acc;
          }
        }
        return combined1;
      }, "");
    }
    return reduced1;
  }
};
export const parseBaggageHeader = function parseBaggageHeader(arr) {
  const tmp = arr;
  if (tmp) {
    let reduced;
    const obj = _mod11215;
    if (!obj.isString(arr)) {
      const _Array = Array;
    }
    const _Array2 = Array;
    if (Array.isArray(arr)) {
      reduced = arr.reduce(f107576, {});
    } else {
      const parts = arr.split(",");
      const mapped = parts.map(f107577);
      reduced = mapped.reduce(f107578, {});
    }
    return reduced;
  }
};
