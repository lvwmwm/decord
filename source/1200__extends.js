// Module ID: 1200
// Function ID: 13774
// Name: _extends
// Dependencies: [1201, 1203, 1205, 1206]
// Exports: createBrowserHistory, createHashHistory, createMemoryHistory, locationsAreEqual

// Module 1200 (_extends)
import isAbsolute from "isAbsolute";
import valueOf from "valueOf";
import warning from "warning";
import invariant from "invariant";

function _extends() {
  const obj = Object.assign || ((arg0) => {
    for (let num = 1; num < arguments.length; num = num + 1) {
      let tmp3 = arguments[num];
      let tmp4 = tmp3;
      let tmp5 = tmp2;
      let keys = Object.keys();
      if (keys !== undefined) {
        tmp2 = tmp5;
        let tmp7 = keys[tmp];
        while (tmp7 !== undefined) {
          let tmp8 = tmp7;
          let _Object = Object;
          tmp5 = tmp7;
          if (!hasOwnProperty.call(tmp3, tmp7)) {
            continue;
          } else {
            arg0[tmp7] = tmp3[tmp7];
            tmp5 = tmp7;
            continue;
          }
          continue;
        }
      }
    }
    return arg0;
  });
  return obj(...arguments);
}
function addLeadingSlash(str) {
  let text = str;
  if ("/" !== str.charAt(0)) {
    text = `/${str}`;
  }
  return text;
}
function stripLeadingSlash(str) {
  let substr = str;
  if ("/" === str.charAt(0)) {
    substr = str.substr(1);
  }
  return substr;
}
function stripBasename(str, str2) {
  const formatted = str.toLowerCase();
  let tmp = 0 === formatted.indexOf(str2.toLowerCase());
  if (tmp) {
    const indexOf = "/?#".indexOf;
    tmp = -1 !== "/?#".indexOf(str.charAt(str2.length));
  }
  let substr = str;
  if (tmp) {
    substr = str.substr(str2.length);
  }
  return substr;
}
function stripTrailingSlash(str) {
  let substr = str;
  if ("/" === str.charAt(str.length - 1)) {
    substr = str.slice(0, -1);
  }
  return substr;
}
function parsePath(arg0) {
  let str = arg0;
  if (!arg0) {
    str = "/";
  }
  const index = str.indexOf("#");
  let str2 = "";
  let substr = str;
  let str3 = "";
  if (-1 !== index) {
    str3 = str.substr(index);
    substr = str.substr(0, index);
  }
  const index1 = substr.indexOf("?");
  let substr2 = substr;
  let substr1 = str2;
  if (-1 !== index1) {
    substr1 = substr.substr(index1);
    substr2 = substr.substr(0, index1);
  }
  const obj = { pathname: substr2 };
  let tmp5 = str2;
  if ("?" !== substr1) {
    tmp5 = substr1;
  }
  obj.search = tmp5;
  if ("#" !== str3) {
    str2 = str3;
  }
  obj.hash = str2;
  return obj;
}
function createPath(location) {
  let hash;
  let pathname;
  let search;
  ({ pathname, search, hash } = location);
  if (!pathname) {
    pathname = "/";
  }
  let tmp = search;
  if (search) {
    tmp = "?" !== search;
  }
  let sum = pathname;
  if (tmp) {
    let text = search;
    if ("?" !== search.charAt(0)) {
      text = `?${search}`;
    }
    sum = pathname + text;
  }
  let tmp4 = hash;
  if (hash) {
    tmp4 = "#" !== hash;
  }
  let sum1 = sum;
  if (tmp4) {
    let text1 = hash;
    if ("#" !== hash.charAt(0)) {
      text1 = `#${hash}`;
    }
    sum1 = sum + text1;
  }
  return sum1;
}
function createLocation(to, state, key, pathname) {
  if ("string" === typeof to) {
    const tmp12 = parsePath(to);
    let tmp13 = tmp12;
    tmp12.state = state;
  } else {
    const tmp21 = _extends({}, to);
    tmp13 = tmp21;
    if (undefined === tmp21.pathname) {
      tmp13.pathname = "";
    }
    if (tmp13.search) {
      if ("?" !== str3.charAt(0)) {
        tmp13.search = `?${tmp13.search}`;
      }
      str3 = tmp13.search;
    } else {
      tmp13.search = "";
    }
    if (tmp13.hash) {
      if ("#" !== str6.charAt(0)) {
        tmp13.hash = `#${tmp13.hash}`;
      }
      str6 = tmp13.hash;
    } else {
      tmp13.hash = "";
    }
    let tmp8 = undefined !== state;
    if (tmp8) {
      tmp8 = undefined === tmp13.state;
    }
    if (tmp8) {
      tmp13.state = state;
    }
  }
  tmp13.pathname = decodeURI(tmp13.pathname);
  if (key) {
    tmp13.key = key;
  }
  pathname = tmp13.pathname;
  if (pathname) {
    if (pathname) {
      if ("/" !== str9.charAt(0)) {
        tmp13.pathname = isAbsolute(tmp13.pathname, pathname.pathname);
      }
      str9 = tmp13.pathname;
    } else {
      tmp13.pathname = pathname.pathname;
    }
  } else if (!pathname) {
    tmp13.pathname = "/";
  }
  return tmp13;
}
function createTransitionManager() {
  let c0 = null;
  let closure_1 = [];
  return {
    setPrompt(flag) {
      let closure_0 = flag;
      return () => {
        if (closure_0 === closure_0) {
          closure_0 = null;
        }
      };
    },
    confirmTransitionTo(arg0, POP, getUserConfirmation, arg3) {
      if (null != _null) {
        if ("function" === typeof _null) {
          let tmp3 = _null(arg0, POP);
        } else {
          tmp3 = _null;
        }
        if ("string" === typeof tmp3) {
          if ("function" === typeof getUserConfirmation) {
            getUserConfirmation(tmp3, arg3);
          } else {
            arg3(true);
          }
        } else {
          arg3(false !== tmp3);
        }
      } else {
        arg3(true);
      }
    },
    appendListener(arg0) {
      let closure_0 = arg0;
      const fn = function e() {
        if (c1) {
          callback(...arguments);
        }
      };
      let arr = true;
      arr = arr.push(fn);
      return () => {
        let _true = false;
        _true = _true.filter((arg0) => arg0 !== outer1_2);
      };
    },
    notifyListeners() {
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const item = arr.forEach((apply) => apply.apply(undefined, array));
    }
  };
}
function getConfirmation(arg0, arg1) {
  arg1(window.confirm(arg0));
}
function getHistoryState() {
  let obj = state;
  if (!state) {
    obj = {};
  }
  return obj;
}
function stripHash(href) {
  const index = href.indexOf("#");
  let substr = href;
  if (-1 !== index) {
    substr = href.slice(0, index);
  }
  return substr;
}
function getHashPath() {
  const index = href.indexOf("#");
  let str = "";
  if (-1 !== index) {
    str = href.substring(index + 1);
  }
  return str;
}
function replaceHashPath(encodePathResult) {
  const replaced = window.location.replace(`${stripHash(window.location.href)}#${encodePathResult}`);
}
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg0, 0), arg2);
}
let tmp3 = "undefined" === typeof window;
if (!tmp3) {
  let _window = window;
  tmp3 = !window.document;
}
if (!tmp3) {
  let _window2 = window;
  tmp3 = !window.document.createElement;
}
let closure_3 = !tmp3;
const popstate = "popstate";
let hashchange = "hashchange";
hashchange = "hashchange";
let closure_7 = {
  hashbang: {
    encodePath(str) {
      let text = str;
      if ("!" !== str.charAt(0)) {
        text = `!/${stripLeadingSlash(str)}`;
      }
      return text;
    },
    decodePath(str) {
      let substr = str;
      if ("!" === str.charAt(0)) {
        substr = str.substr(1);
      }
      return substr;
    }
  },
  noslash: { encodePath: stripLeadingSlash, decodePath: addLeadingSlash },
  slash: { encodePath: addLeadingSlash, decodePath: addLeadingSlash }
};

export const createBrowserHistory = function createBrowserHistory(props) {
  let obj = props;
  const fn = function l(arg0) {
    let key;
    let state;
    let obj = arg0;
    if (!arg0) {
      obj = {};
    }
    const _location = window.location;
    const sum = _location.pathname + _location.search + _location.hash;
    let tmp2 = sum;
    ({ key, state } = obj);
    if (str6) {
      tmp2 = callback2(sum, str6);
    }
    return p(tmp2, state, key);
  };
  function d() {
    const str = Math.random();
    return Math.random().toString(36).substr(2, num);
  }
  function p(arg0) {
    callback(obj, arg0);
    obj.length = history.length;
    closure_7.notifyListeners(obj.location, obj.action);
  }
  function g(state) {
    let tmp = undefined === state.state;
    if (tmp) {
      const _navigator = navigator;
      tmp = -1 === userAgent.indexOf("CriOS");
    }
    if (!tmp) {
      w(fn(state.state));
    }
  }
  function P() {
    w(fn(w()));
  }
  function w(arg0) {
    let closure_0 = arg0;
    if (c8) {
      c8 = false;
      p();
    } else {
      closure_7.confirmTransitionTo(arg0, "POP", getUserConfirmation, (arg0) => {
        if (arg0) {
          const obj = { action: "POP", location: closure_0 };
          outer1_15(obj);
        } else {
          let num = outer1_9.indexOf(outer1_12.location.key);
          if (-1 === num) {
            num = 0;
          }
          let num3 = outer1_9.indexOf(closure_0.key);
          if (-1 === num3) {
            num3 = 0;
          }
          const diff = num - num3;
          if (diff) {
            let c8 = true;
            outer1_20(diff);
          }
          const tmp = closure_0;
        }
      });
    }
  }
  const fn2 = function x(arg0) {
    return str6 + d(arg0);
  };
  class L {
    constructor(arg0) {
      goResult = history.go(props);
      return;
    }
  }
  let closure_20 = L;
  function E(arg0) {
    const sum = c10 + arg0;
    c10 = sum;
    if (1 === sum) {
      if (1 === arg0) {
        const _window2 = window;
        const listener = window.addEventListener(getUserConfirmation, g);
        if (closure_2) {
          const _window3 = window;
          const listener1 = window.addEventListener(num, P);
        }
      }
    }
    if (0 === c10) {
      const _window4 = window;
      const removed = window.removeEventListener(getUserConfirmation, g);
      if (closure_2) {
        const _window = window;
        const removed1 = window.removeEventListener(num, P);
      }
    }
  }
  if (undefined === props) {
    obj = {};
  }
  if (!closure_3) {
    invariant(false);
  }
  history = -1 === userAgent.indexOf("Android 2.");
  if (history) {
    history = -1 === userAgent.indexOf("Android 4.0");
  }
  if (!history) {
    history = -1 === userAgent.indexOf("Mobile Safari");
  }
  if (!history) {
    history = -1 !== userAgent.indexOf("Chrome");
  }
  if (!history) {
    history = -1 !== userAgent.indexOf("Windows Phone");
  }
  if (history) {
    let _window = window;
    history = window.history;
  }
  if (history) {
    let _window2 = window;
    history = "pushState" in window.history;
  }
  invariant = -1 !== userAgent1.indexOf("Trident");
  const forceRefresh = obj.forceRefresh;
  closure_3 = undefined !== forceRefresh && forceRefresh;
  let getUserConfirmation = obj.getUserConfirmation;
  if (undefined === getUserConfirmation) {
    getUserConfirmation = P;
  }
  const keyLength = obj.keyLength;
  let num = 6;
  if (undefined !== keyLength) {
    num = keyLength;
  }
  let str6 = "";
  if (obj.basename) {
    str6 = obj(items(obj.basename));
  }
  let closure_7 = g();
  let c8 = false;
  const fnResult = fn(w());
  items = [fnResult.key];
  let c10 = 0;
  let c11 = false;
  obj = {
    length: history.length,
    action: "POP",
    location: fnResult,
    createHref: fn2,
    push(arg0, arg1) {
      const tmp = p(arg0, arg1, d(), obj.location);
      const history = tmp;
      closure_7.confirmTransitionTo(tmp, "PUSH", getUserConfirmation, (arg0) => {
        if (arg0) {
          const tmp3 = outer1_19(outer1_19);
          if (outer1_1) {
            let obj = { key: tmp4, state: tmp5 };
            tmp.pushState(obj, null, tmp3);
            if (outer1_3) {
              const _window2 = window;
              window.location.href = tmp3;
            } else {
              const substr = outer1_9.slice(0, outer1_9.indexOf(outer1_12.location.key) + 1);
              substr.push(tmp.key);
              outer1_9 = substr;
              obj = { action: "PUSH", location: tmp };
              outer1_15(obj);
            }
          } else {
            const _window = window;
            window.location.href = tmp3;
          }
        }
      });
    },
    replace(arg0, arg1) {
      const tmp = p(arg0, arg1, d(), obj.location);
      const history = tmp;
      closure_7.confirmTransitionTo(tmp, "REPLACE", getUserConfirmation, (arg0) => {
        if (arg0) {
          const tmp3 = outer1_19(outer1_19);
          if (outer1_1) {
            let obj = { key: tmp4, state: tmp5 };
            tmp.replaceState(obj, null, tmp3);
            if (outer1_3) {
              const _window2 = window;
              const replaced = window.location.replace(tmp3);
              const str3 = window.location;
            } else {
              const index = outer1_9.indexOf(outer1_12.location.key);
              if (-1 !== index) {
                outer1_9[index] = tmp.key;
              }
              obj = { action: "REPLACE", location: tmp };
              outer1_15(obj);
            }
          } else {
            const _window = window;
            const replaced1 = window.location.replace(tmp3);
            const str = window.location;
          }
        }
      });
    },
    go: L,
    goBack() {
      L(-1);
    },
    goForward() {
      L(1);
    },
    block(flag) {
      if (undefined === flag) {
        flag = false;
      }
      const _prompt = closure_7.setPrompt(flag);
      if (!c11) {
        E(1);
        c11 = true;
      }
      return () => {
        if (c11) {
          c11 = false;
          outer1_21(-1);
        }
        return callback();
      };
    },
    listen(arg0) {
      let closure_0 = closure_7.appendListener(arg0);
      E(1);
      return () => {
        outer1_21(-1);
        callback();
      };
    }
  };
  return obj;
};
export const createHashHistory = function createHashHistory(props) {
  let obj = props;
  const fn = function f(arg0) {
    const tmp = decodePath(outer1_20());
    let tmp2 = tmp;
    if (str2) {
      tmp2 = obj(tmp, str2);
    }
    return H(tmp2);
  };
  function d(variant) {
    items(obj, variant);
    obj.length = history.length;
    closure_5.notifyListeners(obj.location, obj.action);
  }
  function g(fnResult) {
    let tmp = outer1_20();
    const tmp2 = encodePath(tmp);
    if (tmp !== tmp2) {
      outer1_21(tmp2);
    } else {
      const tmp4 = fn();
      const _location = obj.location;
      if (!c6) {
        const tmp7 = _location.pathname === tmp4.pathname && _location.search === tmp4.search && _location.hash === tmp4.hash;
      }
      if (c7 !== g(tmp4)) {
        c7 = null;
        ((arg0) => {
          let closure_0 = arg0;
          if (outer1_6) {
            outer1_6 = false;
            outer1_13();
          } else {
            outer1_5.confirmTransitionTo(arg0, "POP", outer1_1, (arg0) => {
              if (arg0) {
                const obj = { action: "POP", location: closure_0 };
                outer2_13(obj);
              } else {
                let num = outer2_8.lastIndexOf(g(outer2_11.location));
                if (-1 === num) {
                  num = 0;
                }
                let num3 = outer2_8.lastIndexOf(g(closure_0));
                if (-1 === num3) {
                  num3 = 0;
                }
                const diff = num - num3;
                if (diff) {
                  const outer2_6 = true;
                  outer2_15(diff);
                }
                const tmp = closure_0;
              }
            });
          }
        })(tmp4);
      }
    }
  }
  class H {
    constructor(arg0) {
      goResult = history.go(props);
      return;
    }
  }
  let closure_15 = H;
  function L(arg0) {
    const sum = c9 + arg0;
    c9 = sum;
    if (1 === sum) {
      if (1 === arg0) {
        const _window2 = window;
        const listener = window.addEventListener(c6, g);
      }
    }
    if (0 === c9) {
      const _window = window;
      const removed = window.removeEventListener(c6, g);
    }
  }
  if (undefined === props) {
    obj = {};
  }
  if (!encodePath) {
    str2(false);
  }
  let index = userAgent.indexOf("Firefox");
  let getUserConfirmation = obj.getUserConfirmation;
  if (undefined === getUserConfirmation) {
    getUserConfirmation = getConfirmation;
  }
  const hashType = obj.hashType;
  let str = "slash";
  if (undefined !== hashType) {
    str = hashType;
  }
  str2 = "";
  if (obj.basename) {
    str2 = fn(addLeadingSlash(obj.basename));
  }
  encodePath = tmp6.encodePath;
  const decodePath = tmp6.decodePath;
  let closure_5 = L();
  let c6 = false;
  const table = null;
  let tmp7 = getHashPath();
  const encodePathResult = encodePath(tmp7);
  if (tmp7 !== encodePathResult) {
    replaceHashPath(encodePathResult);
  }
  const fnResult = fn();
  const items = [g(fnResult)];
  addLeadingSlash = 0;
  let c10 = false;
  obj = {
    length: history.length,
    action: "POP",
    location: fnResult,
    createHref(arg0) {
      const element = document.querySelector("base");
      let attr = element;
      if (element) {
        attr = element.getAttribute("href");
      }
      let str2 = "";
      if (attr) {
        const _window = window;
        str2 = outer1_19(window.location.href);
      }
      return `${str2}#` + encodePath(str2 + g(arg0));
    },
    push(arg0, arg1) {
      const tmp = H(arg0, undefined, undefined, obj.location);
      const history = tmp;
      closure_5.confirmTransitionTo(tmp, "PUSH", getUserConfirmation, (arg0) => {
        if (arg0) {
          const tmp3 = g(closure_0);
          const tmp6 = outer1_3(outer1_2 + tmp3);
          if (outer2_20() !== tmp6) {
            const outer1_7 = tmp3;
            const _window = window;
            window.location.hash = tmp6;
            const substr = outer1_8.slice(0, outer1_8.lastIndexOf(g(outer1_11.location)) + 1);
            substr.push(tmp3);
            outer1_8 = substr;
            const obj = { action: "PUSH", location: closure_0 };
            outer1_13(obj);
          } else {
            outer1_13();
          }
        }
      });
    },
    replace(arg0, arg1) {
      const tmp = H(arg0, undefined, undefined, obj.location);
      const history = tmp;
      closure_5.confirmTransitionTo(tmp, "REPLACE", getUserConfirmation, (arg0) => {
        if (arg0) {
          const tmp3 = g(closure_0);
          const tmp6 = outer1_3(outer1_2 + tmp3);
          if (outer2_20() !== tmp6) {
            const outer1_7 = tmp3;
            outer2_21(tmp6);
          }
          const index = outer1_8.indexOf(g(outer1_11.location));
          if (-1 !== index) {
            outer1_8[index] = tmp3;
          }
          const obj = { action: "REPLACE", location: closure_0 };
          outer1_13(obj);
        }
      });
    },
    go: H,
    goBack() {
      H(-1);
    },
    goForward() {
      H(1);
    },
    block(flag) {
      if (undefined === flag) {
        flag = false;
      }
      const _prompt = closure_5.setPrompt(flag);
      if (!c10) {
        L(1);
        c10 = true;
      }
      return () => {
        if (c10) {
          c10 = false;
          outer1_16(-1);
        }
        return callback();
      };
    },
    listen(arg0) {
      let closure_0 = closure_5.appendListener(arg0);
      L(1);
      return () => {
        outer1_16(-1);
        callback();
      };
    }
  };
  return obj;
};
export const createMemoryHistory = function createMemoryHistory(props) {
  let initialEntries;
  let isAbsolute;
  let obj = props;
  function u(arg0) {
    outer1_8(obj, arg0);
    obj.length = obj.entries.length;
    closure_2.notifyListeners(obj.location, obj.action);
  }
  function f() {
    const str = Math.random();
    return Math.random().toString(36).substr(2, num2);
  }
  const fn = function p(arg0) {
    const tmp = outer1_22(obj.index + arg0, 0, obj.entries.length - 1);
    let closure_0 = tmp;
    closure_2.confirmTransitionTo(obj.entries[tmp], "POP", closure_0, (arg0) => {
      if (arg0) {
        const obj = { action: "POP", location: closure_1, index: closure_0 };
        tmp(obj);
      } else {
        tmp();
      }
    });
  };
  if (undefined === props) {
    obj = {};
  }
  ({ getUserConfirmation: isAbsolute, initialEntries } = obj);
  if (undefined === initialEntries) {
    initialEntries = ["/"];
  }
  const initialIndex = obj.initialIndex;
  let num = 0;
  if (undefined !== initialIndex) {
    num = initialIndex;
  }
  const keyLength = obj.keyLength;
  let num2 = 6;
  if (undefined !== keyLength) {
    num2 = keyLength;
  }
  let closure_2 = createTransitionManager();
  let tmp = clamp(num, 0, initialEntries.length - 1);
  const mapped = initialEntries.map((key) => {
    if ("string" === typeof key) {
      key = f();
    } else {
      key = key.key;
      if (!key) {
        key = f();
      }
    }
    return outer1_15(key, undefined, key);
  });
  obj = {
    length: mapped.length,
    action: "POP",
    location: mapped[tmp],
    index: tmp,
    entries: mapped,
    createHref: createPath,
    push(arg0, arg1) {
      const tmp = outer1_15(arg0, arg1, f(), obj.location);
      let closure_0 = tmp;
      closure_2.confirmTransitionTo(tmp, "PUSH", closure_0, (arg0) => {
        if (arg0) {
          const sum = outer1_3.index + 1;
          const entries = outer1_3.entries;
          let substr = entries.slice(0);
          if (substr.length > sum) {
            substr.splice(sum, substr.length - sum, closure_0);
          } else {
            substr.push(closure_0);
          }
          const obj = { action: "PUSH", location: closure_0, index: sum, entries: substr };
          substr = outer1_4(obj);
        }
      });
    },
    replace(arg0, arg1) {
      const tmp = outer1_15(arg0, arg1, f(), obj.location);
      let closure_0 = tmp;
      closure_2.confirmTransitionTo(tmp, "REPLACE", closure_0, (arg0) => {
        if (arg0) {
          outer1_3.entries[outer1_3.index] = closure_0;
          const obj = { action: "REPLACE", location: closure_0 };
          outer1_4(obj);
        }
      });
    },
    go: fn,
    goBack() {
      fn(-1);
    },
    goForward() {
      fn(1);
    },
    canGo(arg0) {
      const sum = obj.index + arg0;
      let tmp2 = 0 <= sum;
      if (tmp2) {
        tmp2 = sum < obj.entries.length;
      }
      return tmp2;
    },
    block(flag) {
      if (undefined === flag) {
        flag = false;
      }
      return closure_2.setPrompt(flag);
    },
    listen(arg0) {
      return closure_2.appendListener(arg0);
    }
  };
  return obj;
};
export { createLocation };
export const locationsAreEqual = function locationsAreEqual(_location, pathname2) {
  let tmp = _location.pathname === pathname2.pathname && _location.search === pathname2.search && _location.hash === pathname2.hash && _location.key === pathname2.key;
  if (tmp) {
    tmp = valueOf(_location.state, pathname2.state);
  }
  return tmp;
};
export { parsePath };
export { createPath };
