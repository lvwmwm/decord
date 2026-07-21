// Module ID: 1114
// Function ID: 12671
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: useProfiler, withProfiler

// Module 1114 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);
let closure_5 = require(dependencyMap[3]);
let closure_6 = require(dependencyMap[4]);
let closure_7 = require(dependencyMap[5]);
let closure_8 = require(dependencyMap[6]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[7]);
const tmp3 = (Component) => {
  class Profiler {
    constructor(arg0) {
      self = this;
      tmp = closure_4(this, Profiler);
      items = [];
      items[0] = Component;
      obj = closure_7(Profiler);
      tmp2 = closure_6;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ name, disabled } = tmp2Result.props);
      if (undefined !== disabled) {
        if (disabled) {
          tmp8 = closure_6;
          tmp7 = closure_6(tmp2Result);
        }
        return tmp7;
      }
      obj2 = Profiler(closure_1[8]);
      obj = { name: "<" + name + ">", onlyIfParent: true, op: Profiler(closure_1[9]).REACT_MOUNT_OP, attributes: closure_3(closure_3({}, Profiler(closure_1[10]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.react.profiler"), "ui.component_name", name) };
      tmp2Result._mountSpan = obj2.startInactiveSpan(obj);
      tmp7 = tmp2Result;
      return;
    }
  }
  const require = Profiler;
  callback3(Profiler, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._mountSpan) {
        const _mountSpan = this._mountSpan;
        _mountSpan.end();
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(updateProps) {
      const self = this;
      const Profiler = this;
      updateProps = updateProps.updateProps;
      const includeUpdates = updateProps.includeUpdates;
      if (undefined === includeUpdates) {
        if (self._mountSpan) {
          if (updateProps !== self.props.updateProps) {
            const _Object = Object;
            const keys = Object.keys(updateProps);
            const found = keys.filter((arg0) => updateProps[arg0] !== self.props.updateProps[arg0]);
            if (found.length > 0) {
              let closure_3 = Profiler(updateProps[10]).timestampInSeconds();
              const obj = Profiler(updateProps[10]);
              self._updateSpan = Profiler(updateProps[10]).withActiveSpan(self._mountSpan, () => {
                let obj = self(updateProps[8]);
                obj = { name: "<" + self.props.name + ">", onlyIfParent: true, op: self(updateProps[9]).REACT_UPDATE_OP, startTime: callback, attributes: callback(callback(callback({}, self(updateProps[10]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.react.profiler"), "ui.component_name", self.props.name), "ui.react.changed_props", found) };
                return obj.startInactiveSpan(obj);
              });
              const obj2 = Profiler(updateProps[10]);
            }
          }
        }
      }
      return true;
    }
  };
  items[1] = obj;
  obj = {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      const self = this;
      if (this._updateSpan) {
        const _updateSpan = self._updateSpan;
        _updateSpan.end();
        self._updateSpan = undefined;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      let includeRender;
      const self = this;
      const Profiler = Profiler(closure_1[10]).timestampInSeconds();
      ({ name: closure_1, includeRender } = this.props);
      if (self._mountSpan) {
        if (tmp) {
          const timestamp = Profiler(closure_1[10]).spanToJSON(self._mountSpan).timestamp;
          const obj2 = Profiler(closure_1[10]);
          Profiler(closure_1[10]).withActiveSpan(self._mountSpan, () => {
            let obj = callback(closure_1[8]);
            obj = { onlyIfParent: true, name: "<" + closure_1 + ">", op: callback(closure_1[9]).REACT_RENDER_OP, startTime: timestamp, attributes: callback2(callback2({}, callback(closure_1[10]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.react.profiler"), "ui.component_name", closure_1) };
            const startInactiveSpanResult = obj.startInactiveSpan(obj);
            if (startInactiveSpanResult) {
              startInactiveSpanResult.end(callback);
            }
          });
          const obj3 = Profiler(closure_1[10]);
        }
      }
    }
  };
  items[4] = {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  };
  return callback2(Profiler, items);
}(_module.Component);
const merged = Object.assign(tmp3, { defaultProps: {} });

export const Profiler = tmp3;
export const UNKNOWN_COMPONENT = "unknown";
export const useProfiler = function useProfiler(arg0) {
  const require = arg0;
  if (arguments.length > 1) {
    let closure_1 = {};
    const callback = callback(_module.useState(() => {
      let obj = arg0(disabled[8]);
      obj = { name: "<" + arg0 + ">", onlyIfParent: true, op: arg0(disabled[9]).REACT_MOUNT_OP, attributes: callback(callback({}, arg0(disabled[10]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.react.profiler"), "ui.component_name", arg0) };
      return obj.startInactiveSpan(obj);
    }), 1)[0];
    const effect = _module.useEffect(() => {
      if (closure_2) {
        closure_2.end();
      }
      return () => {
        if (closure_2) {
          if (hasRenderSpan.hasRenderSpan) {
            let obj = callback(hasRenderSpan[10]);
            const obj2 = callback(hasRenderSpan[10]);
            const timestampInSecondsResult = callback(hasRenderSpan[10]).timestampInSeconds();
            obj = {};
            const _HermesInternal = HermesInternal;
            obj.name = "<" + callback + ">";
            obj.onlyIfParent = true;
            obj.op = callback(hasRenderSpan[9]).REACT_RENDER_OP;
            obj.startTime = obj.spanToJSON(closure_2).timestamp;
            obj.attributes = callback2(callback2({}, callback(hasRenderSpan[10]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.react.profiler"), "ui.component_name", callback);
            const startInactiveSpanResult = callback(hasRenderSpan[8]).startInactiveSpan(obj);
            if (startInactiveSpanResult) {
              startInactiveSpanResult.end(timestampInSecondsResult);
            }
            const obj3 = callback(hasRenderSpan[8]);
          }
        }
      };
    }, []);
  }
};
export const withProfiler = function withProfiler(displayName, name) {
  const require = displayName;
  const dependencyMap = name;
  let str;
  if (null != name) {
    str = name.name;
  }
  if (!str) {
    str = displayName.displayName;
  }
  if (!str) {
    str = displayName.name;
  }
  if (!str) {
    str = "unknown";
  }
  let closure_2 = str;
  class Wrapped {
    constructor(arg0) {
      obj = { name: closure_2, updateProps: displayName };
      merged = Object.assign({}, name, obj);
      return closure_9.createElement(closure_10, merged, closure_9.createElement(displayName, Object.assign({}, displayName)));
    }
  }
  Wrapped.displayName = "profiler(" + str + ")";
  require(dependencyMap[11]).hoistNonReactStatics(Wrapped, displayName);
  return Wrapped;
};
