// Module ID: 883
// Function ID: 9770
// Name: winterCGHeadersToDict
// Dependencies: [57]
// Exports: httpHeadersToSpanAttributes, httpRequestToRequestData, winterCGRequestToRequestData

// Module 883 (winterCGHeadersToDict)
import _slicedToArray from "_slicedToArray";

function winterCGHeadersToDict(arr) {
  const obj = {};
  const item = arr.forEach((arg0, arg1) => {
    if ("string" === typeof arg0) {
      obj[arg1] = arg0;
    }
  });
}
function headersToDict(arg0) {
  const obj = Object.create(null);
  const entries = Object.entries(arg0);
  const item = entries.forEach((arg0) => {
    const tmp3 = obj(arg0, 2)[1];
    if ("string" === typeof tmp3) {
      obj[tmp2] = tmp3;
    }
  });
}
function normalizeAttributeKey(str) {
  return str.replace(/-/g, "_");
}
function addSpanAttribute(arg0, arg1, arg2, arr) {
  const tmp2 = normalizeAttributeKey(arg1);
  if (arg2) {
    const _HermesInternal2 = HermesInternal;
    let combined = "http.request.header." + tmp2 + "." + normalizeAttributeKey(arg2);
  } else {
    const _HermesInternal = HermesInternal;
    combined = "http.request.header." + tmp2;
  }
  let tmp4 = arg2;
  if (!arg2) {
    tmp4 = arg1;
  }
  const tmp5 = (function handleHttpHeader(arg0, arr, arg2) {
    let closure_0 = arg0;
    if (arg2) {
      let someResult = outer1_1.some((arg0) => closure_0.includes(arg0));
    } else {
      const items = [];
      const combined = items.concat(outer1_2, outer1_1);
      someResult = combined.some((arg0) => closure_0.includes(arg0));
    }
    if (someResult) {
      return "[Filtered]";
    } else {
      const _Array = Array;
      if (Array.isArray(arr)) {
        const mapped = arr.map((arg0) => {
          let StringResult = arg0;
          if (null != arg0) {
            const _String = String;
            StringResult = String(arg0);
          }
          return StringResult;
        });
        return mapped.join(";");
      } else {
        return "string" === typeof arr ? arr : undefined;
      }
    }
  })(tmp4, arr, arg4);
  if (undefined !== tmp5) {
    arg0[combined] = tmp5;
  }
}
function extractQueryParamsFromUrl(arg0) {
  if (arg0) {
    const _URL = URL;
    const uRL = new URL(tmp, "http://s.io");
    const search = uRL.search;
    const substr = search.slice(1);
    let tmp9;
    if (substr.length) {
      tmp9 = substr;
    }
    return tmp9;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_1 = ["auth", "token", "secret", "session", "password", "passwd", "pwd", "key", "jwt", "bearer", "sso", "saml", "csrf", "xsrf", "credentials", "set-cookie", "cookie"];
let closure_2 = ["x-forwarded-", "-user"];

export { extractQueryParamsFromUrl };
export { headersToDict };
export const httpHeadersToSpanAttributes = function httpHeadersToSpanAttributes(arg0) {
  let tmp = arguments.length > 1 && undefined !== arguments[1];
  let tmp2 = tmp;
  if (tmp) {
    tmp2 = arguments[1];
  }
  const _slicedToArray = tmp2;
  const obj = {};
  const entries = Object.entries(arg0);
  const item = entries.forEach((arg0) => {
    const tmp = tmp2(arg0, 2);
    if (null != tmp[1]) {
      const formatted = str.toLowerCase();
      if ("cookie" === formatted) {
        if ("string" === typeof arr) {
          if ("" !== arr) {
            const index = arr.indexOf(";");
            let num = arr;
            if ("set-cookie" === tmp16) {
              num = arr;
              if (-1 !== index) {
                num = arr.substring(0, index);
              }
            }
            if ("set-cookie" === tmp16) {
              const items = [num];
              let parts = items;
            } else {
              parts = num.split("; ");
            }
            parts[Symbol.iterator]();
            num = -1;
          }
        }
      }
      outer1_6(obj, formatted, "", arr, tmp2);
    }
  });
};
export const httpRequestToRequestData = function httpRequestToRequestData(headers) {
  let host;
  let protocol;
  let url;
  const tmp = headers.headers || {};
  let prop;
  if ("string" === typeof tmp["x-forwarded-host"]) {
    prop = tmp["x-forwarded-host"];
  }
  if (!prop) {
    host = undefined;
    if ("string" === typeof tmp.host) {
      host = tmp.host;
    }
    prop = host;
  }
  let prop1;
  if ("string" === typeof tmp["x-forwarded-proto"]) {
    prop1 = tmp["x-forwarded-proto"];
  }
  if (!prop1) {
    prop1 = headers.protocol;
  }
  if (!prop1) {
    const socket = headers.socket;
    let str2 = "http";
    if (null != socket) {
      str2 = "http";
      if (socket.encrypted) {
        str2 = "https";
      }
    }
    prop1 = str2;
  }
  let obj = { url: tmp6, host: prop, protocol: prop1 };
  ({ url, protocol, host } = obj);
  if (null == url) {
    if (url) {
      if (host) {
        const _HermesInternal = HermesInternal;
        let combined = "" + protocol + "://" + host + url;
      }
    }
  } else {
    combined = url;
  }
  obj = { url: combined, method: headers.method, query_string: extractQueryParamsFromUrl(headers.url || ""), headers: headersToDict(tmp), cookies: headers.cookies, data: headers.body || undefined };
  return obj;
};
export { winterCGHeadersToDict };
export const winterCGRequestToRequestData = function winterCGRequestToRequestData(method) {
  const obj = { method: method.method, url: method.url, query_string: extractQueryParamsFromUrl(method.url), headers: winterCGHeadersToDict(method.headers) };
  return obj;
};
