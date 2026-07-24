// Module ID: 3954
// Function ID: 32648
// Name: _extends
// Dependencies: [31, 3955, 1205, 1206, 1199, 3958]

// Module 3954 (_extends)
import result from "result";
import emptyFunction from "emptyFunction";
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
function _inheritsLoose(arg0, arg1) {
  arg0.prototype = Object.create(arg1.prototype);
  arg0.prototype.constructor = arg0;
  _setPrototypeOf(arg0, arg1);
}
function _setPrototypeOf(arg0, arg1) {
  const tmp = Object.setPrototypeOf || ((arg0, arg1) => {
    arg0.__proto__ = arg1;
    return arg0;
  });
  const _setPrototypeOf = tmp;
  return tmp(arg0, arg1);
}
function _objectWithoutPropertiesLoose(arg0, arr) {
  if (null == arg0) {
    return {};
  } else {
    const obj = {};
    const _Object = Object;
    const keys = Object.keys(arg0);
    for (let num2 = 0; num2 < keys.length; num2 = num2 + 1) {
      let tmp2 = keys[num2];
      if (0 > arr.indexOf(tmp2)) {
        obj[tmp2] = arg0[tmp2];
      }
    }
    return obj;
  }
}
function resolveToLocation(arg0, arg1) {
  let tmp = arg0;
  if ("function" === typeof arg0) {
    tmp = arg0(arg1);
  }
  return tmp;
}
function normalizeToLocation(to, pathname) {
  let _location = to;
  if ("string" === typeof to) {
    const obj = require(1199) /* _extends */;
    _location = obj.createLocation(to, null, null, pathname);
  }
  return _location;
}
function forwardRefShim(arg0) {
  return arg0;
}
let forwardRef = result.forwardRef;
forwardRefShim = forwardRef;
let tmp5 = ((Component) => {
  let closure_0 = Component;
  class e {
    constructor() {
      self = this;
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      call = closure_0.call;
      items = [];
      items[0] = self;
      tmp2 = call.apply(closure_0, items.concat(array)) || self;
      obj = closure_0(outer1_1[4]);
      tmp2.history = obj.createBrowserHistory(tmp2.props);
      return tmp2;
    }
    render() {
      obj = { history: this.history, children: this.props.children };
      return outer1_2.createElement(closure_0(outer1_1[5]).Router, obj);
    }
  }
  _inheritsLoose(e, Component);
  return e;
})(result.Component);
if (undefined === forwardRef) {
  forwardRef = forwardRefShim;
}
let closure_8 = forwardRef((innerRef) => {
  let dependencyMap;
  let require;
  ({ navigate: require, onClick: dependencyMap } = innerRef);
  const tmp = _objectWithoutPropertiesLoose(innerRef, ["innerRef", "navigate", "onClick"]);
  const target = tmp.target;
  const tmp2 = _extends({}, tmp, {
    onClick(defaultPrevented) {
      if (callback2) {
        callback2(defaultPrevented);
      }
      defaultPrevented = defaultPrevented.defaultPrevented;
      let tmp4 = defaultPrevented;
      if (!defaultPrevented) {
        tmp4 = 0 !== defaultPrevented.button;
      }
      let tmp6 = tmp4;
      if (!tmp4) {
        let tmp8 = target;
        if (target) {
          tmp8 = "_self" !== target;
        }
        tmp6 = tmp8;
      }
      let tmp10 = tmp6;
      if (!tmp6) {
        tmp10 = defaultPrevented.metaKey || defaultPrevented.altKey || defaultPrevented.ctrlKey || defaultPrevented.shiftKey;
        const tmp12 = defaultPrevented.metaKey || defaultPrevented.altKey || defaultPrevented.ctrlKey || defaultPrevented.shiftKey;
      }
      if (!tmp10) {
        defaultPrevented.preventDefault();
        callback();
      }
    }
  });
  tmp2.ref = forwardRefShim !== forwardRefShim && arg1 || innerRef.innerRef;
  return <a {......tmp2} />;
});
const forwardRefResult = forwardRef((component) => {
  let closure_2;
  let invariant;
  let resolveToLocation;
  const _require = arg1;
  component = component.component;
  if (undefined === component) {
    component = closure_8;
  }
  ({ replace: closure_2, to: invariant, innerRef: resolveToLocation } = component);
  let closure_5 = _objectWithoutPropertiesLoose(component, ["component", "replace", "to", "innerRef"]);
  return React.createElement(_require(component[5]).__RouterContext.Consumer, null, (history) => {
    let closure_0 = history;
    if (!history) {
      outer1_3(false);
    }
    history = history.history;
    const tmp3 = callback(outer1_4(closure_3, history.location), history.location);
    let str = "";
    if (tmp3) {
      str = history.createHref(tmp3);
    }
    let obj = {
      href: str,
      navigate() {
        const tmp = outer2_4(outer1_3, history.location);
        const path = history(component[4]).createPath(history.location);
        const obj = history(component[4]);
        if (!outer1_2) {
          if (path !== obj2.createPath(callback(tmp))) {
            let replace = history.push;
          }
          const replaced = replace(tmp);
        }
        replace = history.replace;
      }
    };
    const tmp4 = outer1_12({}, callback, obj);
    if (outer1_6 !== outer1_7) {
      let tmp6 = closure_0;
      if (!closure_0) {
        tmp6 = closure_4;
      }
      tmp4.ref = tmp6;
    } else {
      tmp4.innerRef = closure_4;
    }
    return <history {......tmp4} />;
  });
});
function forwardRefShim$1(arg0) {
  return arg0;
}
let forwardRef2 = result.forwardRef;
forwardRefShim$1 = forwardRef2;
if (undefined === forwardRef2) {
  forwardRef2 = forwardRefShim$1;
}
let tmp6 = ((Component) => {
  let closure_0 = Component;
  class e {
    constructor() {
      self = this;
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      call = closure_0.call;
      items = [];
      items[0] = self;
      tmp2 = call.apply(closure_0, items.concat(array)) || self;
      obj = closure_0(outer1_1[4]);
      tmp2.history = obj.createHashHistory(tmp2.props);
      return tmp2;
    }
    render() {
      obj = { history: this.history, children: this.props.children };
      return outer1_2.createElement(closure_0(outer1_1[5]).Router, obj);
    }
  }
  _inheritsLoose(e, Component);
  return e;
})(result.Component);

export const MemoryRouter = require(3958) /* _extends */.Redirect;
export const Prompt = require(3958) /* _extends */.Redirect;
export const Redirect = require(3958) /* _extends */.Redirect;
export const Route = require(3958) /* _extends */.Route;
export const Router = require(3958) /* _extends */.Router;
export const StaticRouter = require(3958) /* _extends */.StaticRouter;
export const Switch = require(3958) /* _extends */.Switch;
export const generatePath = require(3958) /* _extends */.generatePath;
export const matchPath = require(3958) /* _extends */.matchPath;
export const useHistory = require(3958) /* _extends */.useHistory;
export const useLocation = require(3958) /* _extends */.useLocation;
export const useParams = require(3958) /* _extends */.useParams;
export const useRouteMatch = require(3958) /* _extends */.useRouteMatch;
export const withRouter = require(3958) /* _extends */.withRouter;
export const BrowserRouter = tmp5;
export const HashRouter = tmp6;
export const Link = forwardRefResult;
export const NavLink = forwardRef2((aria_current) => {
  let _extends;
  let closure_8;
  let closure_9;
  let forwardRefShim;
  let forwardRefShim$1;
  let invariant;
  let normalizeToLocation;
  let resolveToLocation;
  const _require = arg1;
  aria_current = aria_current["aria-current"];
  let str = "page";
  if (undefined !== aria_current) {
    str = aria_current;
  }
  const activeClassName = aria_current.activeClassName;
  let str2 = "active";
  if (undefined !== activeClassName) {
    str2 = activeClassName;
  }
  ({ activeStyle: invariant, className: resolveToLocation, exact: normalizeToLocation, isActive: forwardRefShim, location: forwardRefShim, sensitive: closure_8, strict: closure_9, style: forwardRefShim$1, to: forwardRefShim$1, innerRef: _extends } = aria_current);
  let closure_13 = _objectWithoutPropertiesLoose(aria_current, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);
  return str2.createElement(_require(str[5]).__RouterContext.Consumer, null, (location) => {
    if (!location) {
      outer1_3(false);
    }
    let _location = closure_7;
    if (!closure_7) {
      _location = location.location;
    }
    const tmp3 = outer1_5(outer1_4(closure_11, _location), _location);
    let replaced = str;
    if (tmp3.pathname) {
      replaced = str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    let matchPathResult = null;
    if (replaced) {
      let obj = callback(str[5]);
      obj = { path: replaced, exact: closure_5, sensitive: closure_8, strict: closure_9 };
      matchPathResult = obj.matchPath(_location.pathname, obj);
    }
    let tmp11 = matchPathResult;
    if (callback3) {
      tmp11 = callback3(matchPathResult, _location);
    }
    let tmp14 = !tmp13;
    if ("function" === typeof callback2) {
      let tmp15 = callback2(tmp14);
    } else {
      tmp15 = callback2;
    }
    if ("function" === typeof callback4) {
      let tmp17 = callback4(tmp14);
    } else {
      tmp17 = callback4;
    }
    let tmp19 = tmp15;
    let tmp20 = tmp17;
    if (!!tmp11) {
      tmp19 = (function joinClassnames(arg0, arg1) {
        const length = arguments.length;
        const arr = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          arr[num] = arguments[num];
        }
        const found = arr.filter((arg0) => arg0);
        return found.join(" ");
      })(tmp15, str2);
      tmp20 = outer1_12({}, tmp17, closure_3);
    }
    obj = {};
    if (!!tmp11) {
      tmp14 = str;
    }
    if (!tmp14) {
      tmp14 = null;
    }
    obj["aria-current"] = tmp14;
    obj.className = tmp19;
    obj.style = tmp20;
    obj.to = tmp3;
    const tmp24Result = outer1_12(obj, closure_13);
    if (outer1_10 !== outer1_11) {
      let tmp27 = callback;
      if (!callback) {
        tmp27 = closure_12;
      }
      tmp24Result.ref = tmp27;
    } else {
      tmp24Result.innerRef = closure_12;
    }
    return <outer1_9 {......tmp24Result} />;
  });
});
