// Module ID: 1200
// Function ID: 13773
// Name: _extends
// Dependencies: []
// Exports: createBrowserHistory, createHashHistory, createMemoryHistory, locationsAreEqual

// Module 1200 (_extends)
function _extends() {
  const obj = Object.assign || (arg0) => {
    for (let num = 1; num < arguments.length; num = num + 1) {
      let tmp3 = arguments[num];
      let tmp4 = tmp3;
      let tmp5 = tmp2;
      let keys = Object.keys();
      if (keys !== undefined) {
        let tmp2 = tmp5;
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
            // continue
          }
          continue;
        }
      }
    }
    return arg0;
  };
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
      const str3 = tmp13.search;
    } else {
      tmp13.search = "";
    }
    if (tmp13.hash) {
      if ("#" !== str6.charAt(0)) {
        tmp13.hash = `#${tmp13.hash}`;
      }
      const str6 = tmp13.hash;
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
        tmp13.pathname = callback(tmp13.pathname, pathname.pathname);
      }
      const str9 = tmp13.pathname;
    } else {
      tmp13.pathname = pathname.pathname;
    }
  } else if (!pathname) {
    tmp13.pathname = "/";
  }
  return tmp13;
}
function createTransitionManager() {
  let closure_0 = null;
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
        if (closure_1) {
          arg0(...arguments);
        }
      };
      let arr = true;
      arr = arr.push(fn);
      return () => {
        let _true = false;
        _true = _true.filter((arg0) => arg0 !== closure_2);
      };
    },
    notifyListeners() {
      const length = arguments.length;
      const array = new Array(length);
      let closure_0 = array;
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
function stripHash(arr) {
  const index = arr.indexOf("#");
  let substr = arr;
  if (-1 !== index) {
    substr = arr.slice(0, index);
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
  const replaced = window.location.replace(`${closure_19(window.location.href)}#${encodePathResult}`);
}
function clamp(arg0, arg1, arg2) {
  return Math.min(Math.max(arg0, 0), arg2);
}
let closure_0 = _interopDefault(require(dependencyMap[0]));
let closure_1 = _interopDefault(require(dependencyMap[1]));
const _module = require(dependencyMap[2]);
let closure_2 = _interopDefault(require(dependencyMap[3]));
let tmp3 = "undefined" === typeof window;
if (!tmp3) {
  const _window = window;
  tmp3 = !window.document;
}
if (!tmp3) {
  const _window2 = window;
  tmp3 = !window.document.createElement;
}
let closure_3 = !tmp3;
let closure_4 = "popstate";
let closure_5 = "hashchange";
let closure_6 = "hashchange";
let closure_7 = {
  hashbang: {
    encodePath(str) {
      let text = str;
      if ("!" !== str.charAt(0)) {
        text = `!/${closure_10(str)}`;
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
  const parsePath = fn;
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
    const history = arg0;
    if (closure_8) {
      closure_8 = false;
      p();
    } else {
      closure_7.confirmTransitionTo(arg0, "POP", getUserConfirmation, (arg0) => {
        if (arg0) {
          const obj = { action: "POP", location: arg0 };
          callback(obj);
        } else {
          let num = closure_9.indexOf(_location.location.key);
          if (-1 === num) {
            num = 0;
          }
          let num3 = closure_9.indexOf(arg0.key);
          if (-1 === num3) {
            num3 = 0;
          }
          const diff = num - num3;
          if (diff) {
            let closure_8 = true;
            callback2(diff);
          }
          const tmp = arg0;
        }
      });
    }
  }
  const fn2 = function x(arg0) {
    return str6 + d(arg0);
  };
  const stripHash = fn2;
  class L {
    constructor(arg0) {
      goResult = history.go(props);
      return;
    }
  }
  const getHashPath = L;
  function E(arg0) {
    const sum = closure_10 + arg0;
    closure_10 = sum;
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
    if (0 === closure_10) {
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
    callback3(false);
  }
  let closure_0 = history;
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
    const _window = window;
    history = window.history;
  }
  if (history) {
    const _window2 = window;
    history = "pushState" in window.history;
  }
  let closure_1 = history;
  const callback3 = -1 !== userAgent1.indexOf("Trident");
  const forceRefresh = obj.forceRefresh;
  closure_3 = undefined !== forceRefresh && forceRefresh;
  let getUserConfirmation = obj.getUserConfirmation;
  if (undefined === getUserConfirmation) {
    getUserConfirmation = P;
  }
  let closure_4 = getUserConfirmation;
  const keyLength = obj.keyLength;
  let num = 6;
  if (undefined !== keyLength) {
    num = keyLength;
  }
  let closure_5 = num;
  let str6 = "";
  if (obj.basename) {
    str6 = stripTrailingSlash(addLeadingSlash(obj.basename));
  }
  let closure_6 = str6;
  let closure_7 = g();
  let closure_8 = false;
  const fnResult = fn(w());
  const items = [fnResult.key];
  const addLeadingSlash = items;
  let closure_10 = 0;
  let closure_11 = false;
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
          const tmp3 = callback2(callback2);
          if (closure_1) {
            let obj = { key: tmp4, state: tmp5 };
            tmp.pushState(obj, null, tmp3);
            if (closure_3) {
              const _window2 = window;
              window.location.href = tmp3;
            } else {
              const substr = substr.slice(0, substr.indexOf(_location.location.key) + 1);
              substr.push(tmp.key);
              obj = { action: "PUSH", location: tmp };
              callback(obj);
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
          const tmp3 = callback2(callback2);
          if (closure_1) {
            let obj = { key: tmp4, state: tmp5 };
            tmp.replaceState(obj, null, tmp3);
            if (closure_3) {
              const _window2 = window;
              const replaced = window.location.replace(tmp3);
              const str3 = window.location;
            } else {
              const index = closure_9.indexOf(_location.location.key);
              if (-1 !== index) {
                closure_9[index] = tmp.key;
              }
              obj = { action: "REPLACE", location: tmp };
              callback(obj);
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
      if (!closure_11) {
        E(1);
        closure_11 = true;
      }
      return () => {
        if (closure_11) {
          closure_11 = false;
          callback2(-1);
        }
        return callback();
      };
    },
    listen(arg0) {
      let closure_0 = closure_7.appendListener(arg0);
      E(1);
      return () => {
        callback2(-1);
        callback();
      };
    }
  };
  const stripTrailingSlash = obj;
  return obj;
};
export const createHashHistory = function createHashHistory(props) {
  let obj = props;
  const fn = function f() {
    const tmp = decodePath(callback2());
    let tmp2 = tmp;
    if (str2) {
      tmp2 = obj(tmp, str2);
    }
    return H(tmp2);
  };
  const stripTrailingSlash = fn;
  function d(SEMANTIC_ATTRIBUTE_SENTRY_OP) {
    items(obj, SEMANTIC_ATTRIBUTE_SENTRY_OP);
    obj.length = history.length;
    closure_5.notifyListeners(obj.location, obj.action);
  }
  function g(fnResult) {
    const tmp = callback2();
    const tmp2 = encodePath(tmp);
    if (tmp !== tmp2) {
      callback3(tmp2);
    } else {
      const tmp4 = fn();
      const _location = obj.location;
      if (!closure_6) {
        const tmp7 = _location.pathname === tmp4.pathname && _location.search === tmp4.search && _location.hash === tmp4.hash;
      }
      if (closure_7 !== g(tmp4)) {
        closure_7 = null;
        (arg0) => {
          if (closure_6) {
            closure_6 = false;
            callback();
          } else {
            closure_5.confirmTransitionTo(arg0, "POP", closure_1, (arg0) => {
              if (arg0) {
                const obj = { action: "POP", location: arg0 };
                callback(obj);
              } else {
                let num = closure_8.lastIndexOf(callback2(_location.location));
                if (-1 === num) {
                  num = 0;
                }
                let num3 = closure_8.lastIndexOf(callback2(arg0));
                if (-1 === num3) {
                  num3 = 0;
                }
                const diff = num - num3;
                if (diff) {
                  let closure_6 = true;
                  callback3(diff);
                }
                const tmp = arg0;
              }
            });
          }
        }(tmp4);
      }
    }
  }
  class H {
    constructor(arg0) {
      goResult = history.go(props);
      return;
    }
  }
  const createLocation = H;
  function L(arg0) {
    const sum = closure_9 + arg0;
    closure_9 = sum;
    if (1 === sum) {
      if (1 === arg0) {
        const _window2 = window;
        const listener = window.addEventListener(closure_6, g);
      }
    }
    if (0 === closure_9) {
      const _window = window;
      const removed = window.removeEventListener(closure_6, g);
    }
  }
  if (undefined === props) {
    obj = {};
  }
  if (!closure_3) {
    callback3(false);
  }
  let closure_0 = history;
  const index = userAgent.indexOf("Firefox");
  let getUserConfirmation = obj.getUserConfirmation;
  if (undefined === getUserConfirmation) {
    getUserConfirmation = getConfirmation;
  }
  let closure_1 = getUserConfirmation;
  const hashType = obj.hashType;
  let str = "slash";
  if (undefined !== hashType) {
    str = hashType;
  }
  let str2 = "";
  if (obj.basename) {
    str2 = stripTrailingSlash(addLeadingSlash(obj.basename));
  }
  const callback3 = str2;
  const encodePath = tmp6.encodePath;
  closure_3 = encodePath;
  const decodePath = tmp6.decodePath;
  let closure_5 = L();
  let closure_6 = false;
  let closure_7 = null;
  const tmp7 = getHashPath();
  const encodePathResult = encodePath(tmp7);
  if (tmp7 !== encodePathResult) {
    replaceHashPath(encodePathResult);
  }
  const fnResult = fn();
  const items = [g(fnResult)];
  const addLeadingSlash = 0;
  let closure_10 = false;
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
        str2 = callback(window.location.href);
      }
      return `${str2}#` + encodePath(str2 + g(arg0));
    },
    push(arg0, arg1) {
      const tmp = H(arg0, undefined, undefined, obj.location);
      const history = tmp;
      closure_5.confirmTransitionTo(tmp, "PUSH", getUserConfirmation, (arg0) => {
        if (arg0) {
          const tmp3 = callback3(tmp);
          const tmp6 = callback(closure_2 + tmp3);
          if (callback4() !== tmp6) {
            const _window = window;
            window.location.hash = tmp6;
            const substr = substr.slice(0, substr.lastIndexOf(callback3(_location.location)) + 1);
            substr.push(tmp3);
            const obj = { action: "PUSH", location: tmp };
            callback2(obj);
          } else {
            callback2();
          }
        }
      });
    },
    replace(arg0, arg1) {
      const tmp = H(arg0, undefined, undefined, obj.location);
      const history = tmp;
      closure_5.confirmTransitionTo(tmp, "REPLACE", getUserConfirmation, (arg0) => {
        if (arg0) {
          const tmp3 = callback3(tmp);
          const tmp6 = callback(closure_2 + tmp3);
          if (callback4() !== tmp6) {
            callback5(tmp6);
          }
          const index = closure_8.indexOf(callback3(_location.location));
          if (-1 !== index) {
            closure_8[index] = tmp3;
          }
          const obj = { action: "REPLACE", location: callback3 };
          callback2(obj);
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
      if (!closure_10) {
        L(1);
        closure_10 = true;
      }
      return () => {
        if (closure_10) {
          closure_10 = false;
          callback2(-1);
        }
        return callback();
      };
    },
    listen(arg0) {
      let closure_0 = closure_5.appendListener(arg0);
      L(1);
      return () => {
        callback2(-1);
        callback();
      };
    }
  };
  const stripBasename = obj;
  return obj;
};
export const createMemoryHistory = function createMemoryHistory(props) {
  let initialEntries;
  let obj = props;
  function u(arg0) {
    callback(obj, arg0);
    obj.length = obj.entries.length;
    closure_2.notifyListeners(obj.location, obj.action);
  }
  function f() {
    const str = Math.random();
    return Math.random().toString(36).substr(2, num2);
  }
  const fn = function p(arg0) {
    const tmp = callback3(obj.index + arg0, 0, obj.entries.length - 1);
    closure_2.confirmTransitionTo(obj.entries[tmp], "POP", tmp, (arg0) => {
      if (arg0) {
        const obj = { action: "POP", location: tmp2, index: tmp };
        tmp(obj);
      } else {
        tmp();
      }
    });
  };
  let closure_6 = fn;
  if (undefined === props) {
    obj = {};
  }
  ({ getUserConfirmation: closure_0, initialEntries } = obj);
  if (undefined === initialEntries) {
    initialEntries = [];
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
  let closure_1 = num2;
  let closure_2 = createTransitionManager();
  const tmp = clamp(num, 0, initialEntries.length - 1);
  const mapped = initialEntries.map((key) => {
    if ("string" === typeof key) {
      key = f();
    } else {
      key = key.key;
      if (!key) {
        key = f();
      }
    }
    return closure_15(key, undefined, key);
  });
  obj = {
    length: mapped.length,
    action: "POP",
    location: mapped[tmp],
    index: tmp,
    entries: mapped,
    createHref: createPath,
    push(arg0, arg1) {
      const tmp = callback2(arg0, arg1, f(), obj.location);
      closure_2.confirmTransitionTo(tmp, "PUSH", tmp, (arg0) => {
        if (arg0) {
          const sum = closure_3.index + 1;
          const entries = closure_3.entries;
          let substr = entries.slice(0);
          if (substr.length > sum) {
            substr.splice(sum, substr.length - sum, tmp);
          } else {
            substr.push(tmp);
          }
          const obj = { action: "PUSH", location: closure_3, index: sum, entries: substr };
          substr = callback(obj);
        }
      });
    },
    replace(arg0, arg1) {
      const tmp = callback2(arg0, arg1, f(), obj.location);
      closure_2.confirmTransitionTo(tmp, "REPLACE", tmp, (arg0) => {
        if (arg0) {
          closure_3.entries[closure_3.index] = closure_3;
          const obj = { action: "REPLACE", location: closure_3 };
          callback(obj);
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
  let closure_3 = obj;
  return obj;
};
export { createLocation };
export const locationsAreEqual = function locationsAreEqual(_location, pathname2) {
  let tmp = _location.pathname === pathname2.pathname && _location.search === pathname2.search && _location.hash === pathname2.hash && _location.key === pathname2.key;
  if (tmp) {
    tmp = callback2(_location.state, pathname2.state);
  }
  return tmp;
};
export { parsePath };
export { createPath };
