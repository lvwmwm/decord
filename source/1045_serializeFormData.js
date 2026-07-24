// Module ID: 1045
// Function ID: 11225
// Name: serializeFormData
// Dependencies: [57, 794, 1011]
// Exports: getBodyString, getFetchRequestArgBody, parseXhrResponseHeaders

// Module 1045 (serializeFormData)
import _slicedToArray from "_slicedToArray";

function serializeFormData(fetchRequestArgBody) {
  return new URLSearchParams(fetchRequestArgBody).toString();
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const forResult = Symbol.for("sentry__originalRequestBody");

export const ORIGINAL_REQ_BODY = forResult;
export const getBodyString = function getBodyString(fetchRequestArgBody, outer3_72) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let debug = arguments[1];
    }
    if ("string" === typeof fetchRequestArgBody) {
      const items = [fetchRequestArgBody];
      return items;
    } else {
      const _URLSearchParams = URLSearchParams;
      if (fetchRequestArgBody instanceof URLSearchParams) {
        const items1 = [fetchRequestArgBody.toString()];
        return items1;
      } else {
        const _FormData = FormData;
        if (fetchRequestArgBody instanceof FormData) {
          const items2 = [serializeFormData(fetchRequestArgBody)];
          return items2;
        } else if (fetchRequestArgBody) {
          if (require(1011).DEBUG_BUILD) {
            obj.log("Skipping network body because of body type", fetchRequestArgBody);
          }
          const items3 = [undefined, "UNPARSEABLE_BODY_TYPE"];
          return items3;
        } else {
          const items4 = [undefined];
          return items4;
        }
      }
    }
    obj = debug;
  }
  debug = require(794) /* registerSpanErrorInstrumentation */.debug;
};
export const getFetchRequestArgBody = function getFetchRequestArgBody(input) {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    if (first.length >= 2) {
      if (first[1]) {
        if ("object" === typeof first[1]) {
          if ("body" in first[1]) {
            return first[1].body;
          }
        }
      }
    }
    if (first.length >= 1) {
      const _Request = Request;
      if (first[0] instanceof Request) {
        let tmp4;
        if (undefined !== first[0][closure_3]) {
          tmp4 = tmp3;
        }
        return tmp4;
      }
    }
  }
  first = [];
};
export const parseXhrResponseHeaders = function parseXhrResponseHeaders(xhr) {
  const str = xhr.getAllResponseHeaders();
  if (str) {
    const parts = str.split("\r\n");
    let reduced = parts.reduce((arg0, str) => {
      const tmp = outer1_2(str.split(": "), 2);
      if (tmp[1]) {
        arg0[str.toLowerCase()] = tmp2;
      }
      return arg0;
    }, {});
  } else {
    reduced = {};
  }
  return reduced;
};
export { serializeFormData };
