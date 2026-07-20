// Module ID: 7307
// Function ID: 58944
// Name: extractUserData
// Dependencies: []
// Exports: addNormalizedRequestDataToEvent, addRequestDataToEvent, extractPathForTransaction, httpRequestToRequestData, winterCGRequestToRequestData

// Module 7307 (extractUserData)
function extractUserData(user, user2) {
  let arr = user2;
  const require = user;
  const obj = {};
  const dependencyMap = obj;
  if (!Array.isArray(user2)) {
    arr = items;
  }
  const item = arr.forEach((arg0) => {
    let tmp = arg0;
    if (arg0) {
      tmp = arg0 in arg0;
    }
    if (tmp) {
      obj[arg0] = arg0[arg0];
    }
  });
  return obj;
}
function extractRequestData(headers, arg1) {
  const require = headers;
  if (arguments.length > 1) {
    let include = {}.include;
    if (undefined === include) {
      include = closure_5;
    }
    const dependencyMap = include;
    const obj = {};
    let closure_2 = obj;
    const tmp2 = headers.headers || {};
    let closure_3 = tmp2;
    const method = headers.method;
    if ("https" === headers.protocol) {
      let str3 = "https";
    } else {
      str3 = "http";
      if (headers.socket) {
        str3 = "http";
      }
    }
    let combined = obj2;
    if (!headers.originalUrl || headers.url || "".startsWith(str3)) {
      const _HermesInternal = HermesInternal;
      combined = "" + str3 + "://" + tmp3 + tmp4;
    }
    closure_5 = combined;
    const item = include.forEach((self) => {
      if ("headers" === self) {
        obj.headers = tmp2;
        if (!include.includes("cookies")) {
          const headers = obj.headers;
          delete r1.cookie;
        }
        if (!include.includes("ip")) {
          const ipHeaderNames = self(include[3]).ipHeaderNames;
          const item = ipHeaderNames.forEach((arg0) => {
            delete r1[r0];
          });
        }
      } else if ("method" === self) {
        obj.method = method;
      } else if ("url" === self) {
        obj.url = combined;
      } else if ("cookies" === self) {
        let cookies = self.cookies;
        if (!cookies) {
          let cookie = tmp2.cookie;
          if (cookie) {
            cookie = self(include[4]).parseCookie(tmp2.cookie);
            const obj6 = self(include[4]);
          }
          cookies = cookie;
        }
        if (!cookies) {
          cookies = {};
        }
        obj.cookies = cookies;
        const tmp32 = obj;
      } else if ("query_string" === self) {
        let str3 = self.originalUrl;
        if (!str3) {
          str3 = tmp18.url;
        }
        if (!str3) {
          str3 = "";
        }
        let combined = str3;
        let tmp20;
        if (str3) {
          if (combined.startsWith("/")) {
            const _HermesInternal2 = HermesInternal;
            combined = "http://dogs.are.great" + combined;
          }
          const query = tmp17.query;
          let substr = query;
          if (!query) {
            const _URL = URL;
            const uRL = new URL(combined);
            const search = uRL.search;
            substr = search.slice(1);
          }
          let tmp31;
          if (substr.length) {
            tmp31 = substr;
          }
          tmp20 = tmp31;
        }
        obj.query_string = tmp20;
        const tmp16 = obj;
      } else if ("data" === self) {
        if ("GET" !== method) {
          if ("HEAD" !== method) {
            const body = self.body;
            if (undefined !== body) {
              if (obj7.isString(body)) {
                if (body) {
                  obj.data = body;
                }
              } else {
                const obj = self(include[5]);
                if (obj.isPlainObject(body)) {
                  const _JSON = JSON;
                  let json = JSON.stringify(self(include[6]).normalize(body));
                  const obj3 = self(include[6]);
                } else {
                  const _HermesInternal = HermesInternal;
                  json = self(include[7]).truncate("" + body, 1024);
                  const obj2 = self(include[7]);
                }
              }
              const obj7 = self(include[5]);
            }
          }
        }
      } else {
        const hasOwnProperty = {}.hasOwnProperty;
        if (hasOwnProperty.call(self, self)) {
          obj[self] = self[self];
        }
      }
    });
    return obj;
  }
}
function winterCGHeadersToDict(arr) {
  const require = {};
  const item = arr.forEach((arg0, arg1) => {
    if ("string" === typeof arg0) {
      obj[arg1] = arg0;
    }
  });
}
function headersToDict(arg0) {
  const require = Object.create(null);
  const entries = Object.entries(arg0);
  const item = entries.forEach((arg0) => {
    const tmp3 = callback(arg0, 2)[1];
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
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = { "Bool(false)": true, "Bool(false)": false, "Bool(false)": true };
let closure_5 = [];
const items = [];

export const DEFAULT_USER_INCLUDES = items;
export const addNormalizedRequestDataToEvent = function addNormalizedRequestDataToEvent(request, headers, user, include) {
  if (include) {
    include = include.include;
  }
  const merged = Object.assign({}, closure_4, include);
  if (merged.request) {
    const _Array = Array;
    if (Array.isArray(merged.request)) {
      let combined = callback(merged.request);
    } else {
      const items = [];
      combined = items.concat(closure_5);
    }
    if (merged.ip) {
      combined.push("ip");
    }
    let obj = { include: combined };
    const _Object = Object;
    request.request = Object.assign({}, request.request, function extractNormalizedRequestData(headers, include) {
      include = include.include;
      if (include) {
        const _Array = Array;
        let tmp2 = include;
        if (!Array.isArray(include)) {
          tmp2 = closure_5;
        }
        let items = tmp2;
      } else {
        items = [];
      }
      const obj = {};
      const merged = Object.assign({}, headers.headers);
      if (items.includes("headers")) {
        obj.headers = merged;
        if (!include.includes("cookies")) {
          delete r5.cookie;
        }
        if (!include.includes("ip")) {
          const ipHeaderNames = merged(closure_1[3]).ipHeaderNames;
          const item = ipHeaderNames.forEach((arg0) => {
            delete r1[r0];
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
              parseCookieResult = merged(closure_1[4]).parseCookie(merged.cookie);
              const obj3 = merged(closure_1[4]);
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
    }(headers, obj));
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
      const obj2 = require(dependencyMap[5]);
    }
    obj = {};
  }
  if (merged.ip) {
    let ipAddress = headers.headers;
    if (ipAddress) {
      ipAddress = require(dependencyMap[3]).getClientIPAddress(headers.headers);
      const obj4 = require(dependencyMap[3]);
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
      let combined = callback(merged.request);
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
      const obj2 = require(dependencyMap[5]);
    }
    obj = {};
  }
  if (merged.ip) {
    let ip = request.headers;
    if (ip) {
      ip = require(dependencyMap[3]).getClientIPAddress(request.headers);
      const obj4 = require(dependencyMap[3]);
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
          str4 = require(dependencyMap[2]).stripUrlQueryAndFragment(str6);
          str5 = "url";
          const obj2 = require(dependencyMap[2]);
        }
        const tmp = method.originalUrl || method.url;
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
  return require(dependencyMap[10]).dropUndefinedKeys(obj);
};
export { winterCGHeadersToDict };
export const winterCGRequestToRequestData = function winterCGRequestToRequestData(method) {
  const obj = { method: method.method, url: method.url, query_string: extractQueryParamsFromUrl(method.url), headers: winterCGHeadersToDict(method.headers) };
  return obj;
};
