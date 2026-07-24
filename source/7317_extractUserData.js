// Module ID: 7317
// Function ID: 59041
// Name: extractUserData
// Dependencies: [57, 65, 7318, 7319, 7320, 7243, 7281, 7245, 7235, 7236, 7242]
// Exports: addNormalizedRequestDataToEvent, addRequestDataToEvent, extractPathForTransaction, httpRequestToRequestData, winterCGRequestToRequestData

// Module 7317 (extractUserData)
import _slicedToArray from "_slicedToArray";
import _toConsumableArray from "_toConsumableArray";

function extractUserData(user, user2) {
  let arr = user2;
  let closure_0 = user;
  const obj = {};
  if (!Array.isArray(user2)) {
    arr = items;
  }
  const item = arr.forEach((arg0) => {
    let tmp = user;
    if (user) {
      tmp = arg0 in user;
    }
    if (tmp) {
      obj[arg0] = user[arg0];
    }
  });
  return obj;
}
function extractRequestData(headers, arg1) {
  let closure_0 = headers;
  if (arguments.length > 1) {
    let include = {}.include;
    if (undefined === include) {
      include = combined;
    }
    let obj = {};
    const tmp2 = headers.headers || {};
    const _toConsumableArray = tmp2;
    const method = headers.method;
    if ("https" === headers.protocol) {
      let str3 = "https";
    } else {
      str3 = "http";
      if (headers.socket) {
        str3 = "http";
      }
    }
    combined = obj2;
    if (!headers.originalUrl || headers.url || "".startsWith(str3)) {
      let _HermesInternal = HermesInternal;
      combined = "" + str3 + "://" + tmp3 + tmp4;
    }
    let item = include.forEach((arg0) => {
      if ("headers" === arg0) {
        obj.headers = tmp2;
        if (!include.includes("cookies")) {
          const headers = obj.headers;
          delete tmp.cookie;
        }
        if (!include.includes("ip")) {
          const ipHeaderNames = headers(include[3]).ipHeaderNames;
          const item = ipHeaderNames.forEach((arg0) => {
            delete tmp2[tmp];
          });
        }
      } else if ("method" === arg0) {
        obj.method = method;
      } else if ("url" === arg0) {
        obj.url = combined;
      } else if ("cookies" === arg0) {
        let cookies = headers.cookies;
        if (!cookies) {
          let cookie = tmp2.cookie;
          if (cookie) {
            cookie = headers(include[4]).parseCookie(tmp2.cookie);
            const obj6 = headers(include[4]);
          }
          cookies = cookie;
        }
        if (!cookies) {
          cookies = {};
        }
        obj.cookies = cookies;
        const tmp33 = obj;
      } else if ("query_string" === arg0) {
        let str3 = headers.originalUrl;
        if (!str3) {
          str3 = tmp19.url;
        }
        if (!str3) {
          str3 = "";
        }
        combined = str3;
        let tmp21;
        if (str3) {
          if (combined.startsWith("/")) {
            const _HermesInternal2 = HermesInternal;
            combined = "http://dogs.are.great" + combined;
          }
          const query = tmp18.query;
          let substr = query;
          if (!query) {
            const _URL = URL;
            const uRL = new URL(combined);
            const search = uRL.search;
            substr = search.slice(1);
          }
          let tmp32;
          if (substr.length) {
            tmp32 = substr;
          }
          tmp21 = tmp32;
        }
        obj.query_string = tmp21;
        const tmp17 = obj;
      } else if ("data" === arg0) {
        if ("GET" !== method) {
          if ("HEAD" !== method) {
            const body = headers.body;
            if (undefined !== body) {
              if (obj7.isString(body)) {
                if (body) {
                  obj.data = body;
                }
              } else {
                obj = headers(include[5]);
                if (obj.isPlainObject(body)) {
                  const _JSON = JSON;
                  let json = JSON.stringify(headers(include[6]).normalize(body));
                  const obj3 = headers(include[6]);
                } else {
                  const _HermesInternal = HermesInternal;
                  json = headers(include[7]).truncate("" + body, 1024);
                  const obj2 = headers(include[7]);
                }
              }
              obj7 = headers(include[5]);
            }
          }
        }
      } else {
        const hasOwnProperty = {}.hasOwnProperty;
        if (hasOwnProperty.call(headers, arg0)) {
          obj[arg0] = headers[arg0];
        }
      }
    });
    return obj;
  }
}
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
    const tmp3 = outer1_2(arg0, 2)[1];
    if ("string" === typeof tmp3) {
      obj[tmp2] = tmp3;
    }
  });
}
function extractQueryParamsFromUrl(arg0) {
  if (arg0) {
    const _URL = URL;
    const uRL = new URL(tmp, "http://dogs.are.great");
    const search = uRL.search;
    const substr = search.slice(1);
    let tmp9;
    if (substr.length) {
      tmp9 = substr;
    }
    return tmp9;
  }
}
let closure_4 = { ip: false, request: true, user: true };
let closure_5 = ["cookies", "data", "headers", "method", "query_string", "url"];
let items = ["id", "username", "email"];

export const DEFAULT_USER_INCLUDES = items;
export const addNormalizedRequestDataToEvent = function addNormalizedRequestDataToEvent(request, headers, user, include) {
  if (include) {
    include = include.include;
  }
  let merged = Object.assign({}, closure_4, include);
  if (merged.request) {
    let _Array = Array;
    if (Array.isArray(merged.request)) {
      let combined = _toConsumableArray(merged.request);
    } else {
      let items = [];
      combined = items.concat(closure_5);
    }
    if (merged.ip) {
      combined.push("ip");
    }
    let obj = { include: combined };
    const _Object = Object;
    request.request = Object.assign({}, request.request, (function extractNormalizedRequestData(headers, include) {
      include = include.include;
      if (include) {
        const _Array = Array;
        let tmp3 = include;
        if (!Array.isArray(include)) {
          tmp3 = outer1_5;
        }
        let items = tmp3;
      } else {
        items = [];
      }
      const obj = {};
      const merged = Object.assign({}, headers.headers);
      if (items.includes("headers")) {
        obj.headers = merged;
        if (!include.includes("cookies")) {
          delete tmp.cookie;
        }
        if (!include.includes("ip")) {
          const ipHeaderNames = outer1_0(outer1_1[3]).ipHeaderNames;
          const item = ipHeaderNames.forEach((arg0) => {
            delete tmp2[tmp];
          });
        }
      }
      if (items.includes("method")) {
        obj.method = headers.method;
      }
      if (items.includes("url")) {
        obj.url = headers.url;
      }
      if (items.includes("cookies")) {
        let cookies = headers.cookies;
        if (!cookies) {
          let parseCookieResult;
          if (merged) {
            if (merged.cookie) {
              parseCookieResult = outer1_0(outer1_1[4]).parseCookie(merged.cookie);
              const obj3 = outer1_0(outer1_1[4]);
            }
          }
          cookies = parseCookieResult;
        }
        if (!cookies) {
          cookies = {};
        }
        obj.cookies = cookies;
      }
      if (items.includes("query_string")) {
        obj.query_string = headers.query_string;
      }
      if (items.includes("data")) {
        obj.data = headers.data;
      }
      return obj;
    })(headers, obj));
  }
  if (merged.user) {
    if (user.user) {
      if (obj2.isPlainObject(user.user)) {
        obj = extractUserData(user.user, merged.user);
      }
      const _Object2 = Object;
      if (Object.keys(obj).length) {
        const _Object3 = Object;
        request.user = Object.assign({}, obj, request.user);
      }
      obj2 = require(7243) /* isBuiltin */;
    }
    obj = {};
  }
  if (merged.ip) {
    let ipAddress = headers.headers;
    if (ipAddress) {
      ipAddress = require(7319) /* items */.getClientIPAddress(headers.headers);
      const obj4 = require(7319) /* items */;
    }
    if (!ipAddress) {
      ipAddress = user.ipAddress;
    }
    if (ipAddress) {
      const _Object4 = Object;
      obj = { ip_address: ipAddress };
      request.user = Object.assign({}, request.user, obj);
    }
  }
};
export const addRequestDataToEvent = function addRequestDataToEvent(request, request, include) {
  if (include) {
    include = include.include;
  }
  const merged = Object.assign({}, closure_4, include);
  if (merged.request) {
    const _Array = Array;
    if (Array.isArray(merged.request)) {
      let combined = _toConsumableArray(merged.request);
    } else {
      const items = [];
      combined = items.concat(closure_5);
    }
    if (merged.ip) {
      combined.push("ip");
    }
    let obj = { include: combined };
    const _Object = Object;
    request.request = Object.assign({}, request.request, extractRequestData(request, obj));
  }
  if (merged.user) {
    if (request.user) {
      if (obj2.isPlainObject(request.user)) {
        obj = extractUserData(request.user, merged.user);
      }
      const _Object2 = Object;
      if (Object.keys(obj).length) {
        const _Object3 = Object;
        request.user = Object.assign({}, request.user, obj);
      }
      obj2 = require(7243) /* isBuiltin */;
    }
    obj = {};
  }
  if (merged.ip) {
    let ip = request.headers;
    if (ip) {
      ip = require(7319) /* items */.getClientIPAddress(request.headers);
      const obj4 = require(7319) /* items */;
    }
    if (!ip) {
      ip = request.ip;
    }
    if (!ip) {
      ip = request.socket && request.socket.remoteAddress;
      const tmp13 = request.socket && request.socket.remoteAddress;
    }
    if (ip) {
      const _Object4 = Object;
      obj = { ip_address: ip };
      request.user = Object.assign({}, request.user, obj);
    }
  }
  return request;
};
export const extractPathForTransaction = function extractPathForTransaction(method) {
  if (arguments.length > 1) {
    if (undefined !== arguments[1]) {
      let obj = arguments[1];
    }
    method = method.method;
    if (method) {
      method = method.method.toUpperCase();
      const str = method.method;
    }
    if (!obj.customRoute) {
      if (!method.route) {
        let str4 = "";
        let str5 = "url";
        if (tmp) {
          let str6 = method.originalUrl;
          if (!str6) {
            str6 = method.url;
          }
          if (!str6) {
            str6 = "";
          }
          str4 = require(7318) /* getNumberOfUrlSegments */.stripUrlQueryAndFragment(str6);
          str5 = "url";
          const obj2 = require(7318) /* getNumberOfUrlSegments */;
        }
        tmp = method.originalUrl || method.url;
      }
      let str8 = "";
      if (tmp7) {
        str8 = `${method}`;
      }
      let text = str8;
      if (tmp8) {
        text = `${str8} `;
      }
      let sum = text;
      if (tmp10) {
        sum = text + str4;
      }
      const items = [sum, str5];
      return items;
    }
    let customRoute = obj.customRoute;
    if (!customRoute) {
      const _HermesInternal = HermesInternal;
      customRoute = "" + method.baseUrl || "" + method.route && method.route.path;
      const tmp4 = method.baseUrl || "";
      const tmp5 = method.route && method.route.path;
    }
    str5 = "route";
    str4 = customRoute;
  }
  obj = {};
};
export { extractQueryParamsFromUrl };
export { extractRequestData };
export { headersToDict };
export const httpRequestToRequestData = function httpRequestToRequestData(headers) {
  const tmp = headers.headers || {};
  let str = "http";
  if (headers.socket) {
    str = "http";
    if (headers.socket.encrypted) {
      str = "https";
    }
  }
  let obj = headers.url || "";
  let combined = obj;
  if (!obj.startsWith(str)) {
    const _HermesInternal = HermesInternal;
    combined = "" + str + "://" + tmp2 + tmp3;
  }
  obj = { url: combined, method: headers.method };
  obj.query_string = extractQueryParamsFromUrl(obj);
  obj.headers = headersToDict(tmp);
  obj.cookies = headers.cookies;
  obj.data = headers.body || undefined;
  return require(7242) /* addNonEnumerableProperty */.dropUndefinedKeys(obj);
};
export { winterCGHeadersToDict };
export const winterCGRequestToRequestData = function winterCGRequestToRequestData(method) {
  const obj = { method: method.method, url: method.url, query_string: extractQueryParamsFromUrl(method.url), headers: winterCGHeadersToDict(method.headers) };
  return obj;
};
