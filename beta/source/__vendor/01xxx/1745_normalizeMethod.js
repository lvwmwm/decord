// Module ID: 1745
// Function ID: 1746
// Name: normalizeMethod
// Dependencies: [32]
// Exports: combineHeader, extractCharset, getHeader, hasHeader, isForbiddenMethod, isForbiddenRequestHeader, isHeaderName, isHeaderValue, isSupportedRequestUrl, isToken, normalizeHeaderValue, normalizeMethod, sortAndCombineHeaders

// Module 1745 (normalizeMethod)
import _slicedToArray from "_slicedToArray" /* 32 */;

let map;

const re1 = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;
const re2 = /^[^\0\r\n]*$/;
const re3 = /^[\t\n\r ]+|[\t\n\r ]+$/g;
const re4 = /^([A-Za-z][A-Za-z0-9+\-.]*):/;
const re5 = /;\s*charset\s*=\s*("([^"]*)"|([^;\s]*))/i;
let closure_6 = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
let closure_7 = ["CONNECT", "TRACE", "TRACK"];
let closure_8 = ["http", "https"];
const set = new Set(["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "set-cookie", "te", "trailer", "transfer-encoding", "upgrade", "via"]);
let closure_10 = ["proxy-", "sec-"];
const set1 = new Set(["x-http-method", "x-http-method-override", "x-method-override"]);
const set2 = new Set(["set-cookie", "set-cookie2"]);

export function normalizeMethod(StringResult) {
  let tmp = StringResult;
  const formatted = StringResult.toUpperCase();
  if (closure_6.includes(formatted)) {
    tmp = formatted;
  }
  return tmp;
}
export function isToken(StringResult) {
  return re1.test(StringResult);
}
export function isForbiddenMethod(StringResult) {
  return closure_7.includes(StringResult.toUpperCase());
}
export function isSupportedRequestUrl(url) {
  const match = re4.exec(url);
  let tmp2;
  if (match != null) {
    tmp2 = match[1];
  }
  const hasItem = undefined !== tmp2 && closure_8.includes(tmp2.toLowerCase());
  return hasItem;
}
export function isHeaderName(StringResult) {
  return re1.test(StringResult);
}
export function isHeaderValue(normalizeHeaderValueResult) {
  return re2.test(normalizeHeaderValueResult);
}
export function normalizeHeaderValue(str) {
  return str.replace(re3, "");
}
export function isForbiddenRequestHeader(StringResult, normalizeHeaderValueResult) {
  const formatted = StringResult.toLowerCase();
  const hasItem = set.has(formatted);
  const tmp3 = !hasItem && !closure_10.some((item) => formatted.startsWith(item));
  let tmp5 = !tmp3;
  if (tmp3) {
    let hasItem1 = set1.has(formatted);
    if (hasItem1) {
      let str = ",";
      const parts = normalizeHeaderValueResult.split(",");
      hasItem1 = parts.some((item) => {
        const str = item.trim();
        return closure_1_7.includes(str.toUpperCase());
      });
    }
    tmp5 = hasItem1;
  }
  return tmp5;
}
export function combineHeader(requestHeaders, StringResult, normalizeHeaderValueResult) {
  let closure_0 = StringResult.toLowerCase();
  const found = requestHeaders.find((item) => {
    let str;
    [str] = item;
    return str.toLowerCase() === closure_0;
  });
  if (undefined === found) {
    const items = [StringResult, normalizeHeaderValueResult];
    requestHeaders.push(items);
  } else {
    const _HermesInternal = HermesInternal;
    const str = ", ";
    found[1] = "" + found[1] + ", " + normalizeHeaderValueResult;
  }
}
export function hasHeader(items, str) {
  let closure_0 = str.toLowerCase();
  return items.some((item) => {
    let str;
    [str] = item;
    return str.toLowerCase() === closure_0;
  });
}
export function getHeader(responseHeaders, str) {
  const formatted = str.toLowerCase();
  if (set2.has(formatted)) {
    return null;
  } else {
    const found = responseHeaders.filter((item) => {
      let str;
      [str] = item;
      return str.toLowerCase() === formatted;
    });
    const mapped = found.map((item) => {
      let tmp;
      [, tmp] = item;
      return tmp;
    });
    let joined = null;
    if (mapped.length > 0) {
      str = ", ";
      joined = mapped.join(", ");
    }
    return joined;
  }
}
export function sortAndCombineHeaders(responseHeaders) {
  let str;
  let tmp5;
  map = new Map();
  const tmp = responseHeaders[Symbol.iterator]();
  while (tmp !== undefined) {
    let tmp4 = _slicedToArray(tmp2, 2);
    [str, tmp5] = tmp4;
    let formatted = str.toLowerCase();
    let tmp7 = formatted;
    if (!set2.has(formatted)) {
      let value = map.get(tmp7);
      let arr = value;
      if (undefined === value) {
        let items = [tmp5];
        let result = map.set(tmp7, items);
      } else {
        let arr2 = arr.push(tmp5);
      }
    }
    continue;
  }
  const arr3 = Array.from(map.keys());
  const sorted = arr3.sort((str, str2) => {
    const formatted = str.toUpperCase();
    const formatted1 = str2.toUpperCase();
    let num = 0;
    if (formatted !== formatted1) {
      let num2 = 1;
      if (formatted < formatted1) {
        num2 = -1;
      }
      num = num2;
    }
    return num;
  });
  const mapped = sorted.map((item) => {
    const value = map.get(item);
    return "" + item + ": " + value.join(", ") + "\r\n";
  });
  return mapped.join("");
}
export function extractCharset(mimeTypeOverride) {
  if (null !== mimeTypeOverride) {
    const match = re5.exec(mimeTypeOverride);
    if (null !== match) {
      let str = match[2];
      if (str == null) {
        str = match[3];
      }
      if (str == null) {
        str = "";
      }
      let tmp3;
      if ("" !== str) {
        tmp3 = str;
      }
      return tmp3;
    }
  }
}
