// Module ID: 1125
// Function ID: 12819
// Name: pickSplat
// Dependencies: [57, 1118, 794]
// Exports: clearNavigationContext, getActiveRootSpan, getNavigationContext, initializeRouterUtils, resolveRouteNameAndSource, setNavigationContext, transactionNameHasWildcard

// Module 1125 (pickSplat)
import _slicedToArray from "_slicedToArray";

function pickSplat(params) {
  return params.params["*"] || "";
}
function trimSlash(pathname) {
  let substr = pathname;
  if ("/" === pathname[pathname.length - 1]) {
    substr = pathname.slice(0, -1);
  }
  return substr;
}
function pathEndsWithWildcard(sum) {
  return sum.endsWith("*");
}
function pathIsWildcardAndHasChildren(sum, route) {
  let flag = pathEndsWithWildcard(sum);
  if (flag) {
    const children = route.route.children;
    flag = !(null == children || !children.length);
    const tmp3 = null == children || !children.length;
  }
  if (!flag) {
    flag = false;
  }
  return flag;
}
function routeIsDescendant(route) {
  let tmp = route.children || !route.element;
  if (!tmp) {
    const path = route.path;
    tmp = null == path;
    const obj = path;
  }
  if (!tmp) {
    tmp = !obj.endsWith("/*");
  }
  return !tmp;
}
function sendIndexPath(sum, pathname, arg2) {
  let arr = sum;
  if (!sum) {
    let tmp2 = pathname;
    if (c4) {
      tmp2 = stripBasenameFromPathname(pathname, arg2);
    }
    arr = tmp2;
  }
  let substr = arr;
  if ("/*" === arr.slice(-2)) {
    substr = arr.slice(0, -2);
  }
  let tmp5 = substr.length > 1;
  if (tmp5) {
    tmp5 = "/" === substr[substr.length - 1];
  }
  let substr1 = substr;
  if (tmp5) {
    substr1 = substr.slice(0, -1);
  }
  const items = [substr1, "route"];
  return items;
}
function getNumberOfUrlSegments(str) {
  const parts = str.split(/\\?\//);
  return parts.filter((arg0) => {
    let tmp = arg0.length > 0;
    if (tmp) {
      tmp = "," !== arg0;
    }
    return tmp;
  }).length;
}
function stripBasenameFromPathname(pathname, str) {
  if (str) {
    if ("/" !== str) {
      const formatted = pathname.toLowerCase();
      if (formatted.startsWith(str.toLowerCase())) {
        if (str.endsWith("/")) {
          let diff = length - 1;
        } else {
          diff = length;
        }
        const charAtResult = pathname.charAt(diff);
        if (!charAtResult) {
          let tmp4 = pathname.slice(diff) || "/";
          const tmp5 = pathname.slice(diff) || "/";
        } else {
          tmp4 = pathname;
        }
        return tmp4;
      } else {
        return pathname;
      }
    }
  }
  return pathname;
}
function prefixWithSlash(combined) {
  if ("/" !== combined[0]) {
    const _HermesInternal = HermesInternal;
    combined = "/" + combined;
  }
  return combined;
}
function rebuildRoutePathFromAllRoutes(arg0, _location) {
  let closure_0 = arg0;
  let closure_1 = _location;
  const arr = callback(arg0, _location);
  if (arr) {
    if (0 !== arr.length) {
      function _loop(item10012) {
        let closure_0 = item10012;
        if (item10012.route.path) {
          if ("*" !== item10012.route.path) {
            let str2 = (function pickPath(route) {
              let substr = arr;
              if ("*" === route.route.path || ""[route.route.path || "".length - 1]) {
                substr = arr.slice(0, -1);
              }
              return substr;
            })(item10012);
            const tmp4 = outer1_13(_location.pathname, outer1_14(item10012.pathnameBase));
            if (_location.pathname === tmp4) {
              let obj = { v: outer1_7(tmp4) };
            } else {
              obj = {};
              if (!str2) {
                str2 = "";
              }
              obj = { pathname: tmp4 };
              obj.v = outer1_7(outer1_7(str2) + outer1_14(outer1_15(closure_0.filter((arg0) => arg0 !== item10012.route), obj)));
              const tmp5Result = outer1_7(str2);
            }
            return obj;
          }
        }
      }
      for (const item10012 of arr) {
        let tmp2 = _loop;
        let _loopResult = _loop(item10012);
        let tmp4 = _loopResult;
        if (_loopResult) {
          obj.return();
          return _loopResult.v;
        }
      }
      return "";
    }
  }
  return "";
}
function locationIsInsideDescendantRoute(_location, arg1) {
  const tmp = callback(arg1, _location);
  if (tmp) {
    for (const item10008 of tmp) {
      let tmp4 = routeIsDescendant;
      let tmp3 = item10008;
      if (routeIsDescendant(item10008.route)) {
        let tmp5 = pickSplat;
        let tmp6 = item10008;
        if (pickSplat(tmp3)) {
          obj.return();
          let flag = true;
          return true;
        }
      }
      continue;
    }
  }
  return false;
}
function getFallbackTransactionName(pathname, arg1) {
  if (c4) {
    let tmp = stripBasenameFromPathname(pathname.pathname, arg1);
  } else {
    tmp = pathname.pathname || "";
  }
  return tmp;
}
function getNormalizedName(arg0, pathname, items, arg3) {
  let str = "";
  let str2 = "";
  if (arguments.length > 3) {
    str2 = str;
    if (undefined !== arguments[3]) {
      str2 = arguments[3];
    }
  }
  if (arg0) {
    if (0 !== arg0.length) {
      if (items) {
        let sum = str;
        const iter = items[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp48 = nextResult;
          let route = nextResult.route;
          let tmp49 = route;
          if (route) {
            let tmp9 = route;
            if (tmp49.index) {
              let tmp39 = sendIndexPath;
              let tmp40 = sum;
              let tmp41 = str2;
              let tmp42 = sendIndexPath(sum, nextResult.pathname, tmp);
              iter.return();
              return tmp42;
            } else {
              let tmp10 = route;
              let path = tmp49.path;
              let tmp11 = path;
              if (path) {
                let tmp12 = pathIsWildcardAndHasChildren;
                let tmp13 = path;
                let tmp14 = nextResult;
                if (!pathIsWildcardAndHasChildren(tmp11, tmp48)) {
                  let tmp15 = path;
                  if ("/" !== tmp11[0]) {
                    let tmp16 = sum;
                    if ("/" !== sum[sum.length - 1]) {
                      let tmp17 = path;
                      let _HermesInternal = HermesInternal;
                      let combined = "/" + tmp11;
                    }
                    let tmp20 = trimSlash;
                    let tmp21 = sum;
                    let tmp19 = combined;
                    let tmp23 = prefixWithSlash;
                    let tmp22 = trimSlash(sum);
                    sum = tmp22 + prefixWithSlash(combined);
                    let tmp24 = pathname;
                    let tmp26 = str2;
                    let tmp27 = nextResult;
                    let tmp25 = trimSlash(pathname.pathname);
                    if (tmp25 === trimSlash(tmp + tmp48.pathname)) {
                      let tmp50 = getNumberOfUrlSegments;
                      let tmp51 = sum;
                      let tmp53 = nextResult;
                      let tmp52 = getNumberOfUrlSegments(sum);
                      if (tmp52 !== getNumberOfUrlSegments(tmp48.pathname)) {
                        let tmp28 = pathEndsWithWildcard;
                        let tmp29 = sum;
                        if (!pathEndsWithWildcard(sum)) {
                          let tmp30 = c4;
                          let tmp31 = str;
                          if (!c4) {
                            tmp31 = str2;
                          }
                          let tmp32 = combined;
                          items = [tmp31 + tmp19, ];
                          let str5 = "route";
                          items[1] = "route";
                        }
                        iter.return();
                        return items;
                      }
                      let tmp33 = pathIsWildcardAndHasChildren;
                      let tmp34 = sum;
                      let tmp35 = nextResult;
                      if (pathIsWildcardAndHasChildren(sum, tmp48)) {
                        let tmp36 = sum;
                        let num3 = -1;
                        sum = sum.slice(0, -1);
                      }
                      let tmp37 = c4;
                      if (!c4) {
                        str = str2;
                      }
                      let tmp38 = sum;
                      let items1 = [str + sum, ];
                      let str6 = "route";
                      items1[1] = "route";
                      items = items1;
                    }
                  }
                  combined = path;
                }
              }
            }
          }
          continue;
        }
        const items2 = [getFallbackTransactionName(pathname, tmp), "url"];
        return items2;
      } else {
        const items3 = [getFallbackTransactionName(pathname, tmp), "url"];
        return items3;
      }
    }
  }
  if (c4) {
    pathname = stripBasenameFromPathname(pathname.pathname, str2);
  } else {
    pathname = pathname.pathname;
  }
  const items4 = [pathname, "url"];
  return items4;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let c4 = false;
let closure_5 = [];

export const clearNavigationContext = function clearNavigationContext(setNavigationContextResult) {
  let token;
  if (null != arr[arr.length - 1]) {
    token = tmp.token;
  }
  if (token === setNavigationContextResult) {
    arr = arr.pop();
  }
};
export const getActiveRootSpan = function getActiveRootSpan() {
  const activeSpan = require(794) /* registerSpanErrorInstrumentation */.getActiveSpan();
  let rootSpan;
  if (activeSpan) {
    rootSpan = require(794) /* registerSpanErrorInstrumentation */.getRootSpan(activeSpan);
    const obj2 = require(794) /* registerSpanErrorInstrumentation */;
  }
  if (rootSpan) {
    const op = require(794) /* registerSpanErrorInstrumentation */.spanToJSON(rootSpan).op;
    if ("navigation" === op) {
      const tmp7 = rootSpan;
    }
    return tmp7;
  }
  const obj = require(794) /* registerSpanErrorInstrumentation */;
};
export const getNavigationContext = function getNavigationContext() {
  let tmp = null;
  if (arr.length > 0) {
    tmp = null;
    if (null != arr[length - 1]) {
      tmp = tmp3;
    }
  }
  return tmp;
};
export { getNormalizedName };
export { getNumberOfUrlSegments };
export const initializeRouterUtils = function initializeRouterUtils(arg0, flag) {
  let closure_2 = arg0;
  let closure_4 = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
};
export { locationIsInsideDescendantRoute };
export { pathEndsWithWildcard };
export { pathIsWildcardAndHasChildren };
export { prefixWithSlash };
export { rebuildRoutePathFromAllRoutes };
export const resolveRouteNameAndSource = function resolveRouteNameAndSource(_location, arg1, arg2, items, basename) {
  let str = "";
  if (arguments.length > 4) {
    str = "";
    if (undefined !== arguments[4]) {
      str = arguments[4];
    }
  }
  const tmp = locationIsInsideDescendantRoute(_location, arg2);
  let str2 = "url";
  let first;
  if (tmp) {
    first = prefixWithSlash(rebuildRoutePathFromAllRoutes(arg2, _location));
    str2 = "route";
  }
  if (!tmp) {
    const tmp11 = _slicedToArray(getNormalizedName(arg1, _location, items, str), 2);
    first = tmp11[0];
    str2 = tmp11[1];
  }
  if (!first) {
    first = _location.pathname;
  }
  items = [first, str2];
  return items;
};
export { routeIsDescendant };
export const setNavigationContext = function setNavigationContext(outer1_1, outer1_2) {
  let obj = {};
  if (arr.length >= 10) {
    if (require(1118).DEBUG_BUILD) {
      const debug = require(794) /* registerSpanErrorInstrumentation */.debug;
      debug.warn("[React Router] Navigation context stack overflow - removing oldest context");
    }
    arr = arr.shift();
  }
  obj = { token: obj, targetPath: outer1_1, span: outer1_2 };
  arr = arr.push(obj);
  return obj;
};
export const transactionNameHasWildcard = function transactionNameHasWildcard(description) {
  let hasItem = description.includes("/*");
  if (!hasItem) {
    hasItem = description.endsWith("*");
  }
  return hasItem;
};
