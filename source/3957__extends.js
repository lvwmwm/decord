// Module ID: 3957
// Function ID: 32690
// Name: _extends
// Dependencies: []
// Exports: Prompt, Redirect, useHistory, useParams, useRouteMatch, withRouter

// Module 3957 (_extends)
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
function generatePath(flag) {
  let obj = arg1;
  if (undefined === flag) {
    flag = "/";
  }
  if (undefined === obj) {
    obj = {};
  }
  if ("/" === flag) {
    return flag;
  } else {
    if (closure_13[flag]) {
      let tmp5 = closure_13[flag];
    } else {
      const compileResult = closure_5.compile(flag);
      tmp5 = compileResult;
      if (closure_14 < 10000) {
        closure_13[flag] = compileResult;
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
  const require = pathname;
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
  const items = [];
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
      let obj = { end: tmp4, strict: closure_2, sensitive: closure_3 };
      const sum = "" + obj.end + obj.strict + obj.sensitive;
      let tmp7 = closure_15[sum];
      if (!tmp7) {
        obj = {};
        closure_15[sum] = obj;
        tmp7 = obj;
      }
      if (tmp7[path]) {
        let tmp11 = tmp7[path];
      } else {
        const items = [];
        obj = {};
        obj.regexp = callback(path, items, obj);
        obj.keys = items;
        tmp11 = obj;
        if (closure_16 < 10000) {
          tmp7[path] = obj;
          closure_16 = closure_16 + 1;
          tmp11 = obj;
        }
      }
      ({ regexp, keys } = tmp11);
      const match = regexp.exec(closure_0);
      if (match) {
        const first = match[0];
        closure_0 = match.slice(1);
        if (!tmp4) {
          const obj1 = { path };
          let str2 = "/";
          if ("/" !== path) {
            str2 = first;
          }
          obj1.url = str2;
          obj1.isExact = tmp17;
          obj1.params = keys.reduce((arg0, name) => {
            arg0[name.name] = closure_0[arg2];
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
    path = require(dependencyMap[7]).createPath(location);
    const obj = require(dependencyMap[7]);
  }
  return path;
}
function staticHandler(arg0) {
  return () => {
    callback(false);
  };
}
function noop() {

}
function useLocation() {
  return useContext(namedContext1).location;
}
const _interopDefaultResult = _interopDefault(require(dependencyMap[0]));
let closure_3 = _interopDefault(require(dependencyMap[1]));
const _module = require(dependencyMap[2]);
let closure_4 = _interopDefault(require(dependencyMap[3]));
let closure_5 = _interopDefault(require(dependencyMap[4]));
const _module1 = require(dependencyMap[5]);
let closure_6 = _interopDefault(require(dependencyMap[6]));
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
let closure_8 = _interopDefaultResult.createContext || function createReactContext(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  let num = global.__global_unique_id__;
  if (!num) {
    num = 0;
  }
  const sum = num + 1;
  global.__global_unique_id__ = sum;
  const React = `${"__create-react-context-" + tmp2}__`;
  const Provider = (Component) => {
    const fn = function t() {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const call = arg0.call;
      const items = [self];
      const tmp2 = call.apply(arg0, items.concat(array)) || self;
      tmp2.emitter = function createEventEmitter(value) {
        let closure_1 = [];
        return {
          on(arg0) {

          },
          off(arg0) {

          },
          get() {
            return arg0;
          },
          set(arg0, arg1) {
            arg0 = arg1;
            const item = arr.forEach(() => { ... });
          }
        };
      }(tmp2.props.value);
      return tmp2;
    };
    callback(fn, Component);
    const prototype = fn.prototype;
    prototype.getChildContext = function() {
      return { [closure_2]: this.emitter };
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
          if ("function" === typeof callback) {
            num3 = callback(value, value);
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
  }(React.Component);
  Provider.childContextTypes = { [`${"__create-react-context-" + tmp2}__`]: closure_3.object.isRequired };
  const Consumer = (Component) => {
    const fn = function t() {
      const self = this;
      const length = arguments.length;
      const array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      const call = arg0.call;
      const items = [self];
      let obj = call.apply(arg0, items.concat(array)) || self;
      const arg0 = obj;
      obj.observedBits = undefined;
      obj = { value: obj.getValue() };
      obj.state = obj;
      obj.onUpdate = (arg0, arg1) => {
        if (obj.observedBits & arg1) {
          const obj = {};
          obj.value = obj.getValue();
          obj.setState(obj);
        }
      };
      return obj;
    };
    callback(fn, Component);
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
      if (this.context[closure_2]) {
        self.context[closure_2].on(self.onUpdate);
        const obj = self.context[closure_2];
      }
      let num = self.props.observedBits;
      if (null == num) {
        num = 1073741823;
      }
      self.observedBits = num;
    };
    prototype.componentWillUnmount = function() {
      const self = this;
      if (this.context[closure_2]) {
        self.context[closure_2].off(self.onUpdate);
        const obj = self.context[closure_2];
      }
    };
    prototype.getValue = function() {
      if (this.context[closure_2]) {
        let value = this.context[closure_2].get();
        const obj = this.context[closure_2];
      } else {
        value = arg0;
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
  }(React.Component);
  Consumer.contextTypes = { [`${"__create-react-context-" + tmp2}__`]: closure_3.object };
  return { Provider, Consumer };
};
function createNamedContext(Router) {
  const tmp = callback2();
  tmp.displayName = Router;
  return tmp;
}
const namedContext = createNamedContext("Router-History");
const namedContext1 = createNamedContext("Router");
const tmp7 = (Component) => {
  const require = Component;
  const fn = function t(history) {
    const tmp = history.call(this, history) || this;
    history = tmp;
    tmp.state = { location: history.history.location };
    tmp._isMounted = false;
    tmp._pendingLocation = null;
    if (!history.staticContext) {
      history = history.history;
      tmp.unlisten = history.listen((_pendingLocation) => {
        tmp._pendingLocation = _pendingLocation;
      });
    }
    return tmp;
  };
  const dependencyMap = fn;
  _inheritsLoose(fn, Component);
  fn.computeRootMatch = (arg0) => {
    const obj = { ref: false, variant: false, params: {}, isExact: "/" === arg0 };
    return obj;
  };
  const prototype = fn.prototype;
  prototype.componentDidMount = function() {
    const self = this;
    const arg0 = this;
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
      const obj = { location: self._pendingLocation };
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
    return <redux2.Provider {......obj}><redux.Provider {......obj} /></redux2.Provider>;
  };
  return fn;
}(_interopDefaultResult.Component);
let closure_12 = (Component) => {
  const require = Component;
  const fn = function e() {
    return arg0(...arguments) || this;
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
}(_interopDefaultResult.Component);
let closure_13 = {};
let closure_14 = 0;
let closure_15 = {};
let closure_16 = 0;
const tmp8 = (Component) => {
  const require = Component;
  class t {
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
      obj = Component(closure_1[7]);
      tmp2.history = obj.createMemoryHistory(tmp2.props);
      return tmp2;
    }
    render() {
      obj = { history: this.history, children: this.props.children };
      return closure_2.createElement(closure_11, obj);
    }
  }
  _inheritsLoose(t, Component);
  return t;
}(_interopDefaultResult.Component);
const tmp9 = (Component) => {
  const require = Component;
  class e {
    constructor() {
      tmp = Component(...arguments) || this;
      return tmp;
    }
    render() {
      Component = this;
      return closure_2.createElement(closure_10.Consumer, null, (location) => {
        let children;
        let component;
        let render;
        if (!location) {
          callback(false);
        }
        const obj = { location: self.props.location || location.location };
        const props = self.props;
        if (self.props.computedMatch) {
          let match = props.computedMatch;
        } else if (props.path) {
          match = callback2(tmp3.pathname, self.props);
        } else {
          match = location.match;
        }
        obj.match = match;
        const tmp4Result = closure_18({}, location, obj);
        ({ children, component, render } = self.props);
        let isArray = Array.isArray(children);
        if (isArray) {
          const Children = React.Children;
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
}(_interopDefaultResult.Component);
const useContext = _interopDefaultResult.useContext;

export const MemoryRouter = tmp8;
export const Prompt = function Prompt(arg0) {
  let when;
  ({ message: closure_0, when } = arg0);
  let closure_1 = undefined === when || when;
  return <namedContext1.Consumer>{(staticContext) => {
    if (!staticContext) {
      callback(false);
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
        return <closure_12 {......obj} />;
      }
    }
    return null;
  }}</namedContext1.Consumer>;
};
export const Redirect = function Redirect(arg0) {
  let push;
  ({ computedMatch: closure_0, to: closure_1, push } = arg0);
  const React = undefined !== push && push;
  return <namedContext1.Consumer>{(history) => {
    if (!history) {
      callback(false);
    }
    history = history.history;
    const tmp3 = React ? history.push : history.replace;
    tmp3(tmp5Result[7]);
    if (tmp3) {
      if ("string" === typeof tmp6) {
        let tmp12 = callback3(tmp5Result, tmp3.params);
      } else {
        let obj = { pathname: callback3(tmp5Result.pathname, tmp3.params) };
        tmp12 = callback2({}, tmp5Result, obj);
      }
    } else {
      const tmp5Result = tmp5(tmp6);
      if (history.staticContext) {
        tmp3(tmp5Result);
        let element = null;
      } else {
        obj = {
          onMount() {
                tmp3(tmp5Result);
              },
          onUpdate(arg0, to) {
                let obj = tmp3(tmp5Result[7]);
                const _location = obj.createLocation(to.to);
                obj = { key: _location.key };
                if (!obj2.locationsAreEqual(_location, callback({}, tmp5Result, obj))) {
                  tmp5Result(tmp5Result);
                }
              },
          to: tmp5Result
        };
        element = <closure_12 {......obj} />;
      }
      return element;
    }
  }}</namedContext1.Consumer>;
};
export const Route = tmp9;
export const Router = tmp7;
export const StaticRouter = (Component) => {
  const require = Component;
  const fn = function t() {
    const self = this;
    const length = arguments.length;
    const array = new Array(length);
    for (let num = 0; num < length; num = num + 1) {
      array[num] = arguments[num];
    }
    const call = arg0.call;
    const items = [self];
    const tmp2 = call.apply(arg0, items.concat(array)) || self;
    const arg0 = tmp2;
    tmp2.handlePush = (arg0) => tmp2.navigateTo(arg0, "PUSH");
    tmp2.handleReplace = (arg0) => tmp2.navigateTo(arg0, "REPLACE");
    tmp2.handleListen = () => closure_28;
    tmp2.handleBlock = () => closure_28;
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
    const _location = to(closure_1[7]).createLocation(to);
    let tmp2 = _location;
    if (str) {
      const obj = { pathname: callback3(str) + _location.pathname };
      tmp2 = callback({}, _location, obj);
    }
    context.location = tmp2;
    context.url = callback5(context.location);
  };
  prototype.render = function() {
    const self = this;
    const props = this.props;
    const basename = props.basename;
    let str = "";
    if (undefined !== basename) {
      str = basename;
    }
    const arg0 = str;
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
        return callback(str + callback2(arg0));
      },
      action: "POP"
    };
    const tmp = callback2(props, []);
    obj.location = callback4(str, arg0(closure_1[7]).createLocation(str2));
    ({ handlePush: obj2.push, handleReplace: obj2.replace } = self);
    obj.go = callback6();
    obj.goBack = callback6();
    obj.goForward = callback6();
    ({ handleListen: obj2.listen, handleBlock: obj2.block } = self);
    obj = { history: obj, staticContext: context };
    return <closure_11 {......callback({}, tmp, obj)} />;
  };
  return fn;
}(_interopDefaultResult.Component);
export const Switch = (Component) => {
  const require = Component;
  class e {
    constructor() {
      tmp = Component(...arguments) || this;
      return tmp;
    }
    render() {
      Component = this;
      return closure_2.createElement(closure_10.Consumer, null, (location) => {
        const self = location;
        if (!location) {
          callback(false);
        }
        const tmp3 = self.props.location || location.location;
        const Children = React.Children;
        const item = Children.forEach(self.props.children, (icon) => {
          const tmp = icon;
          if (null == match) {
            if (match.isValidElement(tmp)) {
              let tmp3 = tmp.props.path || tmp.props.from;
              if (tmp3) {
                const obj = { path: tmp3 };
                tmp3 = callback({}, tmp.props, obj);
                let match = callback2(tmp3.pathname, tmp3);
              } else {
                match = icon.match;
              }
            }
          }
        });
        let cloneElementResult = null;
        if (React) {
          const obj = { location: tmp3, computedMatch: React };
          cloneElementResult = React.cloneElement(closure_1, obj);
        }
        return cloneElementResult;
      });
    }
  }
  _inheritsLoose(e, Component);
  return e;
}(_interopDefaultResult.Component);
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
  const require = displayName;
  const fn = function t(wrappedComponentRef) {
    wrappedComponentRef = wrappedComponentRef.wrappedComponentRef;
    let closure_1 = callback(wrappedComponentRef, [27676160]);
    return <Consumer.Consumer>{(arg0) => {
      if (!arg0) {
        callback(false);
      }
      return <wrappedComponentRef {......callback2({}, closure_1, arg0, { ref: wrappedComponentRef })} />;
    }}</Consumer.Consumer>;
  };
  fn.displayName = `withRouter(${displayName.displayName || displayName.name})`;
  fn.WrappedComponent = displayName;
  return callback(fn, displayName);
};
