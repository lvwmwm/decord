// Module ID: 711
// Function ID: 712
// Name: MAX_BAGGAGE_STRING_LENGTH
// Dependencies: [703, 699, 700]
// Exports: baggageHeaderToDynamicSamplingContext, dynamicSamplingContextToSentryBaggageHeader, objectToBaggageHeader, parseBaggageHeader

// Module 711 (MAX_BAGGAGE_STRING_LENGTH)
import _mod699 from "module_699" /* 699 */;
import _mod703 from "module_703" /* 703 */;

const f82689 = (acc, item) => {
  let closure_0 = acc;
  const parts = item.split(",");
  const mapped = parts.map(f82690);
  const entries = Object.entries(mapped.reduce(f82691, {}));
  item = entries.forEach((item) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = item;
    acc[tmp] = tmp2;
  });
  return acc;
};
const f82690 = (arr) => {
  let items;
  const index = arr.indexOf("=");
  if (-1 === index) {
    items = [];
  } else {
    const items1 = [arr.slice(0, index), arr.slice(index + 1)];
    items = items1.map((item) => {
      try {
        const _decodeURIComponent = decodeURIComponent;
        return decodeURIComponent(item.trim());
      } catch (err) {
      }
    });
  }
  return items;
};
const f82691 = (acc, item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  const tmp3 = tmp && tmp2;
  if (tmp3) {
    acc[tmp] = tmp2;
  }
  return acc;
};
const f82692 = (acc, item, index) => {
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
  if (combined1.length > 8192) {
    combined1 = acc;
    const tmp5 = require;
    const tmp6 = dependencyMap;
    if (_mod699.DEBUG_BUILD) {
      const debug = tmp5(tmp6[2]).debug;
      const _HermesInternal2 = HermesInternal;
      debug.warn("Not adding key: " + tmp + " with val: " + tmp2 + " to baggage header due to exceeding baggage size limits.");
      combined1 = acc;
    }
  }
  return combined1;
};
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c2 = "sentry-";
let tmp2 = /^sentry-/;
const re3 = tmp2;

export const MAX_BAGGAGE_STRING_LENGTH = 8192;
export const SENTRY_BAGGAGE_KEY_PREFIX = "sentry-";
export const SENTRY_BAGGAGE_KEY_PREFIX_REGEX = tmp2;
export const baggageHeaderToDynamicSamplingContext = function baggageHeaderToDynamicSamplingContext(arr) {
  let tmp;
  if (arr) {
    const tmp2 = require;
    let tmp3 = dependencyMap;
    const obj = _mod703;
    if (obj.isString(arr)) {
      let reduced;
      const _Array2 = Array;
      if (Array.isArray(arr)) {
        reduced = arr.reduce(f82689, {});
      } else {
        const str = ",";
        let parts = arr.split(",");
        let mapped = parts.map(f82690);
        reduced = mapped.reduce(f82691, {});
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
      reduced1 = entries1.reduce(f82692, "");
    }
    return reduced1;
  }
};
export const objectToBaggageHeader = function objectToBaggageHeader(arg0) {
  if (0 !== Object.keys(arg0).length) {
    const _Object = Object;
    const entries = Object.entries(arg0);
    return entries.reduce(f82692, "");
  }
};
export const parseBaggageHeader = function parseBaggageHeader(arr) {
  const tmp = arr;
  if (tmp) {
    let reduced;
    const obj = _mod703;
    if (!obj.isString(arr)) {
      const _Array = Array;
    }
    const _Array2 = Array;
    if (Array.isArray(arr)) {
      reduced = arr.reduce(f82689, {});
    } else {
      const parts = arr.split(",");
      const mapped = parts.map(f82690);
      reduced = mapped.reduce(f82691, {});
    }
    return reduced;
  }
};
