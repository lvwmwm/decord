// Module ID: 11494
// Function ID: 11495
// Name: isAllowedFrameNavigation
// Dependencies: [32, 11495, 2]
// Exports: isAllowedFrameNavigation

// Module 11494 (isAllowedFrameNavigation)
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

function matchesCSPSource(uRL, item) {
  if ("*" === item) {
    return closure_6.includes(uRL.protocol);
  } else if (regExp1.test(item)) {
    return uRL.protocol === item.toLowerCase();
  } else {
    const match = item.match(regExp);
    if (null == match) {
      return false;
    } else {
      let obj;
      const tmp17 = _slicedToArray(match, 5);
      const str8 = tmp17[2];
      if (null != tmp17[1]) {
        const _HermesInternal = HermesInternal;
        let tmp6 = closure_4["" + str7.toLowerCase(str7) + ":"];
        if (tmp6 == null) {
          const _HermesInternal2 = HermesInternal;
          const items = ["" + tmp17[1].toLowerCase() + ":"];
          tmp6 = items;
        }
        obj = tmp6;
      } else {
        obj = closure_5;
      }
      if (obj.includes(uRL.protocol)) {
        const hostname = uRL.hostname;
        const formatted = str8.toLowerCase();
        let tmp7 = "*" === formatted;
        if (!tmp7) {
          let endsWithResult;
          if (formatted.startsWith("*.")) {
            endsWithResult = hostname.endsWith(formatted.slice(1));
          } else {
            endsWithResult = hostname === formatted;
          }
          tmp7 = endsWithResult;
        }
        if (tmp7) {
          let port;
          if ("" !== uRL.port) {
            port = uRL.port;
          } else {
            port = closure_3[uRL.protocol];
          }
          let tmp10 = null == tmp18 || "*" === tmp18 || tmp18 === port;
          if (tmp10) {
            let tmp11 = null != tmp18 || "" === uRL.port;
            if (tmp11) {
              let tmp12 = null == obj2 || "/" === obj2;
              if (!tmp12) {
                let startsWithResult;
                const pathname = uRL.pathname;
                if (tmp17[4].endsWith("/")) {
                  startsWithResult = pathname.startsWith(obj2);
                } else {
                  startsWithResult = pathname === obj2;
                }
                tmp12 = startsWithResult;
              }
              tmp11 = tmp12;
            }
            tmp10 = tmp11;
          }
          return tmp10;
        }
      }
      return false;
    }
  }
}
let closure_3 = { "http:": "80", "https:": "443", "ws:": "80", "wss:": "443" };
let closure_4 = { "http:": ["http:", "https:"], "ws:": ["ws:", "wss:"] };
let closure_5 = ["https:", "wss:"];
let closure_6 = ["http:", "https:", "ws:", "wss:"];
const regExp = new RegExp("^(?:(" + "[a-z][a-z0-9+.-]*" + ")://)?(\\*|(?:\\*\\.)?[a-z0-9-]+(?:\\.[a-z0-9-]+)*)(?::(\\*|\\d+))?(/[^?#]*)?$", "i");
const regExp1 = new RegExp("^" + "[a-z][a-z0-9+.-]*" + ":$", "i");
const result = size.fileFinishedImporting("modules/embedded_apps/native/utils/isAllowedFrameNavigation.tsx");

export { matchesCSPSource };
export const isAllowedFrameNavigation = function isAllowedFrameNavigation(url, routerOrigin, policy) {
  let uRL;
  function getFrameSources(directives) {
    directives = directives.directives;
    let prop = directives["frame-src"];
    if (prop == null) {
      prop = directives["child-src"];
    }
    if (prop == null) {
      prop = directives["default-src"];
    }
    if (prop == null) {
      prop = [];
    }
    return prop;
  }
  const obj = uRL(11495);
  const tmp = uRL;
  if (!obj.isAboutBlankUrl(url)) {
    if (!url.startsWith("file://")) {
      try {
        let someResult;
        const _URL = URL;
        const self = this;
        const self2 = this;
        uRL = new URL(url);
        url = uRL;
        const _HermesInternal = HermesInternal;
        if ("" + url.protocol + "//" + url.host === routerOrigin) {
          const tmpResult = tmp(11495);
          someResult = !tmpResult.isTooLongForCloudflare(tmp6.href, routerOrigin);
        } else {
          const obj2 = getFrameSources(policy);
          someResult = obj2.some((item) => matchesCSPSource(uRL, item));
        }
        return someResult;
      } catch (err) {
        return false;
      }
    }
  }
  return true;
};
