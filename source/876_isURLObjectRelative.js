// Module ID: 876
// Function ID: 9742
// Name: isURLObjectRelative
// Dependencies: [77, 816]
// Exports: getHttpSpanDetailsFromUrlObject, getSanitizedUrlString, parseStringToURLObject, parseUrl, stripDataUrlContent, stripUrlQueryAndFragment

// Module 876 (isURLObjectRelative)
import _defineProperty from "_defineProperty";

function isURLObjectRelative(result) {
  return "isRelative" in result;
}
function getSanitizedUrlStringFromUrlObject(result) {
  if (isURLObjectRelative(result)) {
    return result.pathname;
  } else {
    const _URL = URL;
    const str = new URL(result);
    str.search = "";
    str.hash = "";
    const items = ["80", "443"];
    if (items.includes(str.port)) {
      str.port = "";
    }
    if (str.password) {
      str.password = "%filtered%";
    }
    if (str.username) {
      str.username = "%filtered%";
    }
    return str.toString();
  }
}
function getHttpSpanNameFromUrlObject(pathname, arg1, method, arg3) {
  let str = arg3;
  let formatted;
  if (null != method) {
    if (null != method.method) {
      formatted = str2.toUpperCase();
    }
  }
  let str3 = "GET";
  if (null != formatted) {
    str3 = formatted;
  }
  if (!str) {
    if (!pathname) {
      str = "/";
    } else if ("client" === arg1) {
      pathname = getSanitizedUrlStringFromUrlObject(pathname);
    } else {
      pathname = pathname.pathname;
    }
  }
  return "" + str3 + " " + str;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const getHttpSpanDetailsFromUrlObject = function getHttpSpanDetailsFromUrlObject(hash, arg1, arg2, method) {
  const tmp2 = _defineProperty(_defineProperty({}, require(816).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, arg2), require(816).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, "url");
  if (arg4) {
    let str = "url.template";
    if ("server" === arg1) {
      str = "http.route";
    }
    tmp2[str] = arg4;
    tmp2[require(816).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "route";
  }
  if (tmp5) {
    tmp2[require(816).SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD] = method.method.toUpperCase();
    const str4 = method.method;
  }
  if (hash) {
    if (hash.search) {
      tmp2["url.query"] = hash.search;
    }
    if (hash.hash) {
      tmp2["url.fragment"] = hash.hash;
    }
    if (hash.pathname) {
      tmp2["url.path"] = hash.pathname;
      if ("/" === hash.pathname) {
        tmp2[require(816).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE] = "route";
      }
    }
    if (!isURLObjectRelative(hash)) {
      tmp2[require(816).SEMANTIC_ATTRIBUTE_URL_FULL] = hash.href;
      if (hash.port) {
        tmp2["url.port"] = hash.port;
      }
      if (hash.protocol) {
        tmp2["url.scheme"] = hash.protocol;
      }
      if (hash.hostname) {
        let str7 = "url.domain";
        if ("server" === arg1) {
          str7 = "server.address";
        }
        tmp2[str7] = hash.hostname;
      }
    }
  }
  const items = [getHttpSpanNameFromUrlObject(hash, arg1, method, arg4), tmp2];
  return items;
};
export const getSanitizedUrlString = function getSanitizedUrlString(path) {
  let host;
  let protocol;
  ({ protocol, host } = path);
  let str = "";
  if (protocol) {
    const _HermesInternal = HermesInternal;
    str = "" + protocol + "://";
  }
  let str3;
  if (null != host) {
    const str5 = host.replace(/^.*@/, "[filtered]:[filtered]@");
    str3 = host.replace(/^.*@/, "[filtered]:[filtered]@").replace(/(:80)$/, "").replace(/(:443)$/, "");
    const str6 = host.replace(/^.*@/, "[filtered]:[filtered]@").replace(/(:80)$/, "");
  }
  if (!str3) {
    str3 = "";
  }
  return "" + str + str3 + path.path;
};
export { getSanitizedUrlStringFromUrlObject };
export { isURLObjectRelative };
export const parseStringToURLObject = function parseStringToURLObject(to) {
  let tmp = arg1;
  let tmp2 = to.indexOf("://") <= 0;
  if (tmp2) {
    tmp2 = 0 !== arr.indexOf("//");
  }
  if (null == tmp) {
    let str2;
    if (tmp4) {
      str2 = "thismessage:/";
    }
    tmp = str2;
  }
  if ("canParse" in URL) {
    const _URL = URL;
  }
  const uRL = new URL(arr, tmp6);
  if (tmp2) {
    const obj = { isRelative: tmp2 };
    ({ pathname: obj.pathname, search: obj.search, hash: obj.hash } = uRL);
    let tmp10 = obj;
  } else {
    tmp10 = uRL;
  }
  return tmp10;
};
export const parseUrl = function parseUrl(str) {
  if (str) {
    const match = str.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
    if (match) {
      const obj = { host: match[4], path: match[5], protocol: match[2], search: match[6] || "", hash: match[8] || "", relative: match[5] + (match[6] || "") + (match[8] || "") };
      return obj;
    } else {
      return {};
    }
  } else {
    return {};
  }
};
export const stripDataUrlContent = function stripDataUrlContent(fullURL, arg1) {
  const tmp = arguments.length > 1 && undefined !== arguments[1];
  let tmp2 = !tmp;
  if (tmp) {
    tmp2 = arguments[1];
  }
  if (fullURL.startsWith("data:")) {
    const match = fullURL.match(/^data:([^;,]+)/);
    let str = "text/plain";
    if (match) {
      str = match[1];
    }
    const hasItem = fullURL.includes(";base64,");
    const index = fullURL.indexOf(",");
    let str5 = "";
    if (tmp2) {
      str5 = "";
      if (-1 !== index) {
        const substr = fullURL.slice(index + 1);
        let combined = substr;
        if (substr.length > 10) {
          const _HermesInternal = HermesInternal;
          combined = "" + substr.slice(0, 10) + "... [truncated]";
        }
        str5 = combined;
      }
    }
    let str7 = "";
    if (hasItem) {
      str7 = ",base64";
    }
    let str8 = "";
    if (str5) {
      const _HermesInternal2 = HermesInternal;
      str8 = "," + str5;
    }
    const _HermesInternal3 = HermesInternal;
    return "data:" + str + str7 + str8;
  } else {
    return fullURL;
  }
};
export const stripUrlQueryAndFragment = function stripUrlQueryAndFragment(arg0) {
  return arg0.split(/[?#]/, 1)[0];
};
