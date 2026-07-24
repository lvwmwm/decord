// Module ID: 3959
// Function ID: 32698
// Name: _extends
// Dependencies: [31, 3955, 1205, 1206, 3960, 3962, 3964, 1199]
// Exports: Prompt, Redirect, useHistory, useParams, useRouteMatch, withRouter

// Module 3959 (_extends)
import result from "result";
import emptyFunction from "emptyFunction";
import warning from "warning";
import invariant from "invariant";
import parse from "parse";
import z from "z";
import getStatics from "getStatics";

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
function generatePath(arg0, arg1) {
  let flag = arg0;
  let obj = arg1;
  if (undefined === arg0) {
    flag = "/";
  }
  if (undefined === obj) {
    obj = {};
  }
  if ("/" === flag) {
    return flag;
  } else {
    if (dependencyMap[flag]) {
      let tmp5 = dependencyMap[flag];
    } else {
      const compileResult = parse.compile(flag);
      tmp5 = compileResult;
      if (closure_14 < 10000) {
        dependencyMap[flag] = compileResult;
        closure_14 = closure_14 + 1;
        tmp5 = compileResult;
      }
    }
    obj = {};
    flag = true;
    obj.pretty = true;
    tmp5(obj, obj);
  }
}
function matchPath(pathname, Routes) {
  let obj = Routes;
  let closure_0 = pathname;
  if (undefined === Routes) {
    obj = {};
  }
  let tmp = "string" !== typeof obj;
  if (tmp) {
    const _Array = Array;
    tmp = !Array.isArray(obj);
  }
  let tmp3 = obj;
  if (!tmp) {
    obj = {};
    obj.path = obj;
    tmp3 = obj;
  }
  const exact = tmp3.exact;
  let tmp4 = undefined !== exact;
  if (tmp4) {
    tmp4 = exact;
  }
  const dependencyMap = tmp4;
  const strict = tmp3.strict;
  let closure_2 = undefined !== strict && strict;
  const sensitive = tmp3.sensitive;
  let closure_3 = undefined !== sensitive && sensitive;
  let items = [];
  const combined = items.concat(tmp3.path);
  return combined.reduce((arg0, path) => {
    let keys;
    let regexp;
    if (!path) {
      if ("" !== path) {
        return null;
      }
    }
    if (arg0) {
      return arg0;
    } else {
      let obj = { end: closure_1, strict: closure_2, sensitive: closure_3 };
      const sum = "" + obj.end + obj.strict + obj.sensitive;
      let tmp7 = outer1_15[sum];
      if (!tmp7) {
        obj = {};
        outer1_15[sum] = obj;
        tmp7 = obj;
      }
      if (tmp7[path]) {
        let tmp11 = tmp7[path];
      } else {
        const items = [];
        obj = {};
        obj.regexp = outer1_5(path, items, obj);
        obj.keys = items;
        tmp11 = obj;
        if (outer1_16 < 10000) {
          tmp7[path] = obj;
          outer1_16 = outer1_16 + 1;
          tmp11 = obj;
        }
      }
      ({ regexp, keys } = tmp11);
      const match = regexp.exec(closure_0);
      if (match) {
        const first = match[0];
        closure_0 = match.slice(1);
        if (!closure_1) {
          const obj1 = { path };
          let str2 = "/";
          if ("/" !== path) {
            str2 = first;
          }
          obj1.url = str2;
          obj1.isExact = tmp17;
          obj1.params = keys.reduce((arg0, name) => {
            arg0[name.name] = table[arg2];
            return arg0;
          }, {});
          let tmp19 = obj1;
        } else {
          tmp19 = null;
        }
        return tmp19;
      } else {
        return null;
      }
    }
  }, null);
}
function addLeadingSlash(str) {
  let text = str;
  if ("/" !== str.charAt(0)) {
    text = `/${str}`;
  }
  return text;
}
function stripBasename(arg0, pathname) {
  if (arg0) {
    const arr = addLeadingSlash(arg0);
    pathname = pathname.pathname;
    let tmp2 = pathname;
    if (0 === pathname.indexOf(arr)) {
      const obj = { pathname: pathname.pathname.substr(arr.length) };
      tmp2 = _extends({}, pathname, obj);
      const str = pathname.pathname;
    }
    return tmp2;
  } else {
    return pathname;
  }
}
function createURL(location) {
  let path = location;
  if ("string" !== typeof location) {
    path = require(1199) /* _extends */.createPath(location);
    const obj = require(1199) /* _extends */;
  }
  return path;
}
function staticHandler(arg0) {
  return () => {
    outer1_4(false);
  };
}
function noop() {

}
function useLocation() {
  return useContext(namedContext1).location;
}
if ("undefined" !== typeof globalThis) {
  let global = globalThis;
} else {
  const _window = window;
  if ("undefined" !== typeof window) {
    global = window;
  } else if (undefined === global) {
    global = {};
  }
}
let closure_8 = result.createContext || (function createReactContext(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let num = global.__global_unique_id__;
  if (!num) {
    num = 0;
  }
  const sum = num + 1;
  global.__global_unique_id__ = sum;
  const React = `${"__create-react-context-" + tmp2}__`;
  const Provider = ((Component) => {
    let closure_0 = Component;
    const fn = function t() {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const call = closure_0.call;
      const items = [self];
      const tmp2 = call.apply(closure_0, items.concat(array)) || self;
      tmp2.emitter = (function createEventEmitter(value) {
        let closure_0 = value;
        let closure_1 = [];
        return {
          on(arg0) {

          },
          off(arg0) {
            let closure_0 = arg0;
          },
          get() {
            return closure_0;
          },
          set(arg0, arg1) {
            let closure_0 = arg1;
            closure_0 = arg0;
            const item = arr.forEach(() => { ... });
          }
        };
      })(tmp2.props.value);
      return tmp2;
    };
    outer1_19(fn, Component);
    const prototype = fn.prototype;
    prototype.getChildContext = function() {
      return { [outer1_2]: this.emitter };
    };
    prototype.componentWillReceiveProps = function(value) {
      const self = this;
      if (this.props.value !== value.value) {
        value = self.props.value;
        value = value.value;
        if (value === value) {
          let tmp2 = 0 !== value;
          if (!tmp2) {
            tmp2 = 1 / value === 1 / value;
          }
          let tmp = tmp2;
        } else {
          tmp = value != value && value != value;
        }
        if (!tmp) {
          let num3 = 1073741823;
          if ("function" === typeof outer1_1) {
            num3 = outer1_1(value, value);
          }
          if (0 !== (num3 | 0)) {
            const emitter = self.emitter;
            const result = emitter.set(value.value, tmp5);
          }
        }
      }
    };
    prototype.render = function() {
      return this.props.children;
    };
    return fn;
  })(React.Component);
  Provider.childContextTypes = { [`${"__create-react-context-" + tmp2}__`]: emptyFunction.object.isRequired };
  const Consumer = ((Component) => {
    let closure_0 = Component;
    const fn = function t() {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const call = obj.call;
      const items = [self];
      obj = call.apply(obj, items.concat(array)) || self;
      obj.observedBits = undefined;
      obj = { value: obj.getValue() };
      obj.state = obj;
      obj.onUpdate = (arg0, arg1) => {
        if (obj.observedBits & arg1) {
          obj = {};
          obj.value = obj.getValue();
          obj.setState(obj);
        }
      };
      return obj;
    };
    outer1_19(fn, Component);
    const prototype = fn.prototype;
    prototype.componentWillReceiveProps = function(observedBits) {
      let num = observedBits.observedBits;
      if (null == num) {
        num = 1073741823;
      }
      this.observedBits = num;
    };
    prototype.componentDidMount = function() {
      const self = this;
      if (this.context[outer1_2]) {
        self.context[outer1_2].on(self.onUpdate);
        const obj = self.context[outer1_2];
      }
      let num = self.props.observedBits;
      if (null == num) {
        num = 1073741823;
      }
      self.observedBits = num;
    };
    prototype.componentWillUnmount = function() {
      const self = this;
      if (this.context[outer1_2]) {
        self.context[outer1_2].off(self.onUpdate);
        const obj = self.context[outer1_2];
      }
    };
    prototype.getValue = function() {
      if (this.context[outer1_2]) {
        let value = this.context[outer1_2].get();
        const obj = this.context[outer1_2];
      } else {
        value = closure_0;
      }
      return value;
    };
    prototype.render = function() {
      const children = this.props.children;
      let first = children;
      if (Array.isArray(children)) {
        first = children[0];
      }
      return first(this.state.value);
    };
    return fn;
  })(React.Component);
  Consumer.contextTypes = { [`${"__create-react-context-" + tmp2}__`]: emptyFunction.object };
  return { Provider, Consumer };
});
function createNamedContext(Router) {
  const tmp = callback();
  tmp.displayName = Router;
  return tmp;
}
const namedContext = createNamedContext("Router-History");
const namedContext1 = createNamedContext("Router");
let tmp7 = ((Component) => {
  let closure_0 = Component;
  const fn = function t(history) {
    const tmp = Component.call(this, history) || this;
    Component = tmp;
    tmp.state = { location: history.history.location };
    tmp._isMounted = false;
    tmp._pendingLocation = null;
    if (!history.staticContext) {
      history = history.history;
      tmp.unlisten = history.listen((_pendingLocation) => {
        closure_0._pendingLocation = _pendingLocation;
      });
    }
    return tmp;
  };
  _inheritsLoose(fn, Component);
  fn.computeRootMatch = (arg0) => {
    const obj = { path: "/", url: "/", params: {}, isExact: "/" === arg0 };
    return obj;
  };
  const prototype = fn.prototype;
  prototype.componentDidMount = function() {
    let self = this;
    self = this;
    this._isMounted = true;
    if (this.unlisten) {
      self.unlisten();
    }
    if (!self.props.staticContext) {
      const history = self.props.history;
      self.unlisten = history.listen((location) => {
        if (self._isMounted) {
          const obj = { location };
          self.setState(obj);
        }
      });
    }
    if (self._pendingLocation) {
      let obj = { location: self._pendingLocation };
      self.setState(obj);
    }
  };
  prototype.componentWillUnmount = function() {
    const self = this;
    if (this.unlisten) {
      self.unlisten();
      self._isMounted = false;
      self._pendingLocation = null;
    }
  };
  prototype.render = function() {
    let obj = {};
    obj = { history: this.props.history, location: this.state.location, match: fn.computeRootMatch(this.state.location.pathname), staticContext: this.props.staticContext };
    obj.value = obj;
    obj = {};
    let children = this.props.children;
    if (!children) {
      children = null;
    }
    obj.children = children;
    obj.value = this.props.history;
    return <outer1_10.Provider><outer1_9.Provider /></outer1_10.Provider>;
  };
  return fn;
})(result.Component);
let closure_11 = tmp7;
let closure_12 = ((Component) => {
  let closure_0 = Component;
  const fn = function e() {
    return Component(...arguments) || this;
  };
  _inheritsLoose(fn, Component);
  const prototype = fn.prototype;
  prototype.componentDidMount = function() {
    const self = this;
    if (this.props.onMount) {
      const onMount = self.props.onMount;
      onMount.call(self, self);
    }
  };
  prototype.componentDidUpdate = function(arg0) {
    const self = this;
    if (this.props.onUpdate) {
      const onUpdate = self.props.onUpdate;
      onUpdate.call(self, self, arg0);
    }
  };
  prototype.componentWillUnmount = function() {
    const self = this;
    if (this.props.onUnmount) {
      const onUnmount = self.props.onUnmount;
      onUnmount.call(self, self);
    }
  };
  prototype.render = () => null;
  return fn;
})(result.Component);
let closure_13 = {};
let c14 = 0;
let closure_15 = {};
let c16 = 0;
let tmp8 = ((Component) => {
  let closure_0 = Component;
  class t {
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
      obj = closure_0(outer1_1[7]);
      tmp2.history = obj.createMemoryHistory(tmp2.props);
      return tmp2;
    }
    render() {
      obj = { history: this.history, children: this.props.children };
      return outer1_2.createElement(outer1_11, obj);
    }
  }
  _inheritsLoose(t, Component);
  return t;
})(result.Component);
let tmp9 = ((Component) => {
  let closure_0 = Component;
  class e {
    constructor() {
      tmp = closure_0(...arguments) || this;
      return tmp;
    }
    render() {
      self = this;
      return outer1_2.createElement(outer1_10.Consumer, null, (location) => {
        let children;
        let component;
        let render;
        if (!location) {
          outer2_4(false);
        }
        const obj = { location: self.props.location || location.location };
        const props = self.props;
        if (self.props.computedMatch) {
          let match = props.computedMatch;
        } else if (props.path) {
          match = outer2_23(tmp3.pathname, self.props);
        } else {
          match = location.match;
        }
        obj.match = match;
        const tmp4Result = outer2_18({}, location, obj);
        ({ children, component, render } = self.props);
        let isArray = Array.isArray(children);
        if (isArray) {
          const Children = outer2_2.Children;
          isArray = 0 === Children.count(children);
        }
        let tmp9 = children;
        if (isArray) {
          tmp9 = null;
        }
        if (tmp4Result.match) {
          if (tmp9) {
            let tmp9Result = tmp9;
            if ("function" === typeof tmp9) {
              tmp9Result = tmp9(tmp4Result);
            }
            let element = tmp9Result;
          } else if (component) {
            element = <component {......tmp4Result} />;
          } else {
            element = null;
            if (render) {
              element = render(tmp4Result);
            }
          }
        } else {
          tmp9Result = null;
          if ("function" === typeof tmp9) {
            tmp9Result = tmp9(tmp4Result);
          }
          return tmp11(tmp12, { value: tmp4Result }, tmp9Result);
        }
      });
    }
  }
  _inheritsLoose(e, Component);
  return e;
})(result.Component);
const useContext = result.useContext;

export const MemoryRouter = tmp8;
export const Prompt = function Prompt(arg0) {
  let require;
  let when;
  ({ message: require, when } = arg0);
  let closure_1 = undefined === when || when;
  return <namedContext1.Consumer>{(staticContext) => {
    if (!staticContext) {
      outer1_4(false);
    }
    if (closure_1) {
      if (!staticContext.staticContext) {
        const block = staticContext.history.block;
        const obj = {
          onMount(arg0) {
                arg0.release = block(block);
              },
          onUpdate(release, message) {
                if (message.message !== block) {
                  release.release();
                  release.release = block(block);
                }
              },
          onUnmount(cellKey, arg1, arg2) {
                cellKey.release();
              },
          message: block
        };
        return <outer1_12 onMount={function onMount(arg0) {
          arg0.release = block(block);
        }} onUpdate={function onUpdate(release, message) {
          if (message.message !== block) {
            release.release();
            release.release = block(block);
          }
        }} onUnmount={function onUnmount(cellKey, arg1, arg2) {
          cellKey.release();
        }} message={block} />;
      }
    }
    return null;
  }}</namedContext1.Consumer>;
};
export const Redirect = function Redirect(arg0) {
  let dependencyMap;
  let push;
  let require;
  ({ computedMatch: require, to: dependencyMap, push } = arg0);
  const React = undefined !== push && push;
  return <namedContext1.Consumer>{(history) => {
    if (!history) {
      outer1_4(false);
    }
    history = history.history;
    const tmp3 = React ? history.push : history.replace;
    let closure_0 = tmp3;
    outer1_0(outer1_1[7]);
    if (closure_0) {
      if ("string" === typeof tmp6) {
        let tmp12 = outer1_22(pathname, closure_0.params);
      } else {
        let obj = { pathname: outer1_22(pathname.pathname, closure_0.params) };
        tmp12 = outer1_18({}, pathname, obj);
      }
    } else {
      const tmp5Result = tmp5(tmp6);
      pathname = tmp5Result;
      if (history.staticContext) {
        tmp3(tmp5Result);
        let element = null;
      } else {
        obj = {
          onMount() {
                tmp3(closure_1);
              },
          onUpdate(arg0, to) {
                let obj = outer2_0(outer2_1[7]);
                const _location = obj.createLocation(to.to);
                obj = { key: _location.key };
                if (!obj2.locationsAreEqual(_location, outer2_18({}, closure_1, obj))) {
                  closure_1(closure_1);
                }
              },
          to: pathname
        };
        element = <outer1_12 onMount={function onMount() {
          tmp3(closure_1);
        }} onUpdate={function onUpdate(arg0, to) {
          let obj = outer2_0(outer2_1[7]);
          const _location = obj.createLocation(to.to);
          obj = { key: _location.key };
          if (!obj2.locationsAreEqual(_location, outer2_18({}, closure_1, obj))) {
            closure_1(closure_1);
          }
        }} to={pathname} />;
      }
      return element;
    }
  }}</namedContext1.Consumer>;
};
export const Route = tmp9;
export const Router = tmp7;
export const StaticRouter = ((Component) => {
  let closure_0 = Component;
  const fn = function t() {
    const self = this;
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    const call = closure_0.call;
    const items = [self];
    const tmp2 = call.apply(closure_0, items.concat(array)) || self;
    closure_0 = tmp2;
    tmp2.handlePush = (arg0) => tmp2.navigateTo(arg0, "PUSH");
    tmp2.handleReplace = (arg0) => tmp2.navigateTo(arg0, "REPLACE");
    tmp2.handleListen = () => outer2_28;
    tmp2.handleBlock = () => outer2_28;
    return tmp2;
  };
  _inheritsLoose(fn, Component);
  const prototype = fn.prototype;
  prototype.navigateTo = function(to, action) {
    const props = this.props;
    const basename = props.basename;
    let str = "";
    if (undefined !== basename) {
      str = basename;
    }
    let context = props.context;
    if (undefined === context) {
      context = {};
    }
    context.action = action;
    const _location = Component(outer1_1[7]).createLocation(to);
    let tmp2 = _location;
    if (str) {
      const obj = { pathname: outer1_24(str) + _location.pathname };
      tmp2 = outer1_18({}, _location, obj);
    }
    context.location = tmp2;
    context.url = outer1_26(context.location);
  };
  prototype.render = function() {
    const self = this;
    const props = this.props;
    const basename = props.basename;
    let str = "";
    if (undefined !== basename) {
      str = basename;
    }
    let context = props.context;
    if (undefined === context) {
      context = {};
    }
    const _location = props.location;
    let str2 = "/";
    if (undefined !== _location) {
      str2 = _location;
    }
    let obj = {
      createHref(arg0) {
        return outer2_24(str + outer2_26(arg0));
      },
      action: "POP"
    };
    const tmp = outer1_21(props, ["basename", "context", "location"]);
    obj.location = outer1_25(str, Component(outer1_1[7]).createLocation(str2));
    ({ handlePush: obj2.push, handleReplace: obj2.replace } = self);
    obj.go = outer1_27();
    obj.goBack = outer1_27();
    obj.goForward = outer1_27();
    ({ handleListen: obj2.listen, handleBlock: obj2.block } = self);
    obj = { history: obj, staticContext: context };
    return <outer1_11 {......outer1_18({}, tmp, obj)} />;
  };
  return fn;
})(result.Component);
export const Switch = ((Component) => {
  let closure_0 = Component;
  class e {
    constructor() {
      tmp = closure_0(...arguments) || this;
      return tmp;
    }
    render() {
      self = this;
      return outer1_2.createElement(outer1_10.Consumer, null, (location) => {
        const _self = location;
        if (!location) {
          outer2_4(false);
        }
        let closure_3 = tmp3;
        const Children = outer2_2.Children;
        const item = Children.forEach(_self.props.children, (icon) => {
          if (null == match) {
            if (outer3_2.isValidElement(tmp)) {
              let closure_1 = tmp;
              let tmp3 = tmp.props.path || tmp.props.from;
              if (tmp3) {
                const obj = { path: tmp3 };
                tmp3 = outer3_18({}, tmp.props, obj);
                match = outer3_23(tmp3.pathname, tmp3);
              } else {
                match = _location.match;
              }
            }
          }
        });
        let cloneElementResult = null;
        if (closure_2) {
          let obj = { location: tmp3, computedMatch: closure_2 };
          cloneElementResult = outer2_2.cloneElement(closure_1, obj);
        }
        return cloneElementResult;
      });
    }
  }
  _inheritsLoose(e, Component);
  return e;
})(result.Component);
export const __HistoryContext = namedContext;
export const __RouterContext = namedContext1;
export { generatePath };
export { matchPath };
export const useHistory = function useHistory() {
  return useContext(namedContext);
};
export { useLocation };
export const useParams = function useParams() {
  const match = useContext(namedContext1).match;
  return match ? match.params : {};
};
export const useRouteMatch = function useRouteMatch(Routes) {
  let match = useContext(namedContext1).match;
  if (Routes) {
    match = matchPath(tmp.pathname, Routes);
  }
  return match;
};
export const withRouter = function withRouter(displayName) {
  let closure_0 = displayName;
  const fn = function t(wrappedComponentRef) {
    wrappedComponentRef = wrappedComponentRef.wrappedComponentRef;
    let closure_1 = outer1_21(wrappedComponentRef, ["wrappedComponentRef"]);
    return <outer1_10.Consumer>{(arg0) => {
      if (!arg0) {
        outer2_4(false);
      }
      return <wrappedComponentRef {......outer2_18({}, closure_1, arg0, { ref: wrappedComponentRef })} />;
    }}</outer1_10.Consumer>;
  };
  fn.displayName = `withRouter(${displayName.displayName || displayName.name})`;
  fn.WrappedComponent = displayName;
  return getStatics(fn, displayName);
};
