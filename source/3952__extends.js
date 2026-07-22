// Module ID: 3952
// Function ID: 32642
// Name: _extends
// Dependencies: []

// Module 3952 (_extends)
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
function _inheritsLoose(arg0, arg1) {
  arg0.prototype = Object.create(arg1.prototype);
  arg0.prototype.constructor = arg0;
  _setPrototypeOf(arg0, arg1);
}
function _setPrototypeOf(arg0, arg1) {
  const tmp = Object.setPrototypeOf || (arg0, arg1) => {
    arg0.__proto__ = arg1;
    return arg0;
  };
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
const _interopDefaultResult = _interopDefault(require(dependencyMap[0]));
const _module = require(dependencyMap[1]);
const _module1 = require(dependencyMap[2]);
let closure_3 = _interopDefault(require(dependencyMap[3]));
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
    const obj = require(dependencyMap[4]);
    _location = obj.createLocation(to, null, null, pathname);
  }
  return _location;
}
function forwardRefShim(arg0) {
  return arg0;
}
let forwardRef = _interopDefaultResult.forwardRef;
forwardRefShim = forwardRef;
const tmp5 = (Component) => {
  const require = Component;
  class e {
    constructor() {
      self = this;
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      call = Component.call;
      items = [];
      items[0] = self;
      tmp2 = call.apply(Component, items.concat(array)) || self;
      obj = Component(closure_1[4]);
      tmp2.history = obj.createBrowserHistory(tmp2.props);
      return tmp2;
    }
    render() {
      obj = { history: this.history, children: this.props.children };
      return closure_2.createElement(Component(closure_1[5]).Router, obj);
    }
  }
  _inheritsLoose(e, Component);
  return e;
}(_interopDefaultResult.Component);
if (undefined === forwardRef) {
  forwardRef = forwardRefShim;
}
let closure_8 = forwardRef((innerRef) => {
  ({ navigate: closure_0, onClick: closure_1 } = innerRef);
  const tmp = _objectWithoutPropertiesLoose(innerRef, ["chemin de fer", "gare", "moyen de transport"]);
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
  const require = arg1;
  component = component.component;
  if (undefined === component) {
    component = closure_8;
  }
  const dependencyMap = component;
  ({ replace: closure_2, to: closure_3, innerRef: closure_4 } = component);
  let closure_5 = _objectWithoutPropertiesLoose(component, []);
  return _interopDefaultResult.createElement(require(dependencyMap[5]).__RouterContext.Consumer, null, (history) => {
    const arg1 = history;
    if (!history) {
      callback(false);
    }
    history = history.history;
    const component = history;
    const tmp3 = callback3(callback2(callback, history.location), history.location);
    let str = "";
    if (tmp3) {
      str = history.createHref(tmp3);
    }
    const obj = {
      href: str,
      navigate() {
        const tmp = callback(closure_3, arg0.location);
        const path = arg0(history[4]).createPath(arg0.location);
        const obj = arg0(history[4]);
        if (!closure_2) {
          if (path !== obj2.createPath(callback2(tmp))) {
            let replace = history.push;
          }
          const replaced = replace(tmp);
        }
        replace = history.replace;
      }
    };
    const tmp4 = callback4({}, callback3, obj);
    if (closure_6 !== closure_7) {
      let tmp6 = arg1;
      if (!arg1) {
        tmp6 = callback2;
      }
      tmp4.ref = tmp6;
    } else {
      tmp4.innerRef = callback2;
    }
    return <component {......tmp4} />;
  });
});
function forwardRefShim$1(arg0) {
  return arg0;
}
let forwardRef2 = _interopDefaultResult.forwardRef;
forwardRefShim$1 = forwardRef2;
if (undefined === forwardRef2) {
  forwardRef2 = forwardRefShim$1;
}
const tmp6 = (Component) => {
  const require = Component;
  class e {
    constructor() {
      self = this;
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      call = Component.call;
      items = [];
      items[0] = self;
      tmp2 = call.apply(Component, items.concat(array)) || self;
      obj = Component(closure_1[4]);
      tmp2.history = obj.createHashHistory(tmp2.props);
      return tmp2;
    }
    render() {
      obj = { history: this.history, children: this.props.children };
      return closure_2.createElement(Component(closure_1[5]).Router, obj);
    }
  }
  _inheritsLoose(e, Component);
  return e;
}(_interopDefaultResult.Component);

export const MemoryRouter = require(dependencyMap[5]).Redirect;
export const Prompt = require(dependencyMap[5]).Redirect;
export const Redirect = require(dependencyMap[5]).Redirect;
export const Route = require(dependencyMap[5]).Route;
export const Router = require(dependencyMap[5]).Router;
export const StaticRouter = require(dependencyMap[5]).StaticRouter;
export const Switch = require(dependencyMap[5]).Switch;
export const generatePath = require(dependencyMap[5]).generatePath;
export const matchPath = require(dependencyMap[5]).matchPath;
export const useHistory = require(dependencyMap[5]).useHistory;
export const useLocation = require(dependencyMap[5]).useLocation;
export const useParams = require(dependencyMap[5]).useParams;
export const useRouteMatch = require(dependencyMap[5]).useRouteMatch;
export const withRouter = require(dependencyMap[5]).withRouter;
export const BrowserRouter = tmp5;
export const HashRouter = tmp6;
export const Link = forwardRefResult;
export const NavLink = forwardRef2((aria-current) => {
  const require = arg1;
  aria-current = aria_current.aria-current;
  let str = "page";
  if (undefined !== aria_current) {
    str = aria_current;
  }
  const dependencyMap = str;
  const activeClassName = aria_current.activeClassName;
  let str2 = "active";
  if (undefined !== activeClassName) {
    str2 = activeClassName;
  }
  ({ activeStyle: closure_3, className: closure_4, exact: closure_5, isActive: closure_6, location: closure_7, sensitive: closure_8, strict: closure_9, style: closure_10, to: closure_11, innerRef: closure_12 } = aria_current);
  let closure_13 = _objectWithoutPropertiesLoose(aria_current, []);
  return str2.createElement(require(dependencyMap[5]).__RouterContext.Consumer, null, (location) => {
    if (!location) {
      callback(false);
    }
    let _location = closure_7;
    if (!closure_7) {
      _location = location.location;
    }
    const tmp3 = callback3(callback2(closure_11, _location), _location);
    let replaced = str;
    if (tmp3.pathname) {
      replaced = str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    let matchPathResult = null;
    if (replaced) {
      let obj = arg1(str[5]);
      obj = { path: replaced, exact: callback3, sensitive: closure_8, strict: closure_9 };
      matchPathResult = obj.matchPath(_location.pathname, obj);
    }
    let tmp11 = matchPathResult;
    if (callback4) {
      tmp11 = callback4(matchPathResult, _location);
    }
    let tmp14 = !tmp13;
    if ("function" === typeof callback2) {
      let tmp15 = callback2(tmp14);
    } else {
      tmp15 = callback2;
    }
    if ("function" === typeof callback5) {
      let tmp17 = callback5(tmp14);
    } else {
      tmp17 = callback5;
    }
    let tmp19 = tmp15;
    let tmp20 = tmp17;
    if (!!tmp11) {
      tmp19 = function joinClassnames(arg0, arg1) {
        const length = arguments.length;
        const arr = new Array(length);
        for (let num = 0; num < length; num = num + 1) {
          arr[num] = arguments[num];
        }
        const found = arr.filter((arg0) => arg0);
        return found.join(" ");
      }(tmp15, str2);
      tmp20 = callback6({}, tmp17, callback);
    }
    obj = {};
    if (!!tmp11) {
      tmp14 = str;
    }
    if (!tmp14) {
      tmp14 = null;
    }
    obj.aria-current = tmp14;
    obj.className = tmp19;
    obj.style = tmp20;
    obj.to = tmp3;
    const tmp24Result = callback6(obj, closure_13);
    if (callback5 !== closure_11) {
      let tmp27 = arg1;
      if (!arg1) {
        tmp27 = callback6;
      }
      tmp24Result.ref = tmp27;
    } else {
      tmp24Result.innerRef = callback6;
    }
    return <closure_9 {......tmp24Result} />;
  });
});
