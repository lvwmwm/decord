// Module ID: 1114
// Function ID: 12676
// Name: _isNativeReflectConstruct
// Dependencies: [57, 77, 6, 7, 15, 17, 18, 31, 1000, 1115, 794, 1116]
// Exports: useProfiler, withProfiler

// Module 1114 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import _defineProperty from "_defineProperty";
import _classCallCheck from "_inherits";
import _defineProperties from "result";
import "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import result from "result";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tmp3 = ((Component) => {
  class Profiler {
    constructor(arg0) {
      self = this;
      tmp = outer1_4(this, Profiler);
      items = [];
      items[0] = Component;
      obj = outer1_7(Profiler);
      tmp2 = outer1_6;
      if (outer1_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_7;
        constructResult = Reflect.construct(obj, items, outer1_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      ({ name, disabled } = tmp2Result.props);
      if (undefined !== disabled) {
        if (disabled) {
          tmp8 = outer1_6;
          tmp7 = outer1_6(tmp2Result);
        }
        return tmp7;
      }
      obj2 = Profiler(outer1_1[8]);
      obj = { name: "<" + name + ">", onlyIfParent: true, op: Profiler(outer1_1[9]).REACT_MOUNT_OP, attributes: outer1_3(outer1_3({}, Profiler(outer1_1[10]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.react.profiler"), "ui.component_name", name) };
      tmp2Result._mountSpan = obj2.startInactiveSpan(obj);
      tmp7 = tmp2Result;
      return;
    }
  }
  _inherits(Profiler, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._mountSpan) {
        const _mountSpan = this._mountSpan;
        _mountSpan.end();
      }
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(updateProps) {
      let self = this;
      self = this;
      updateProps = updateProps.updateProps;
      const includeUpdates = updateProps.includeUpdates;
      if (undefined === includeUpdates) {
        if (self._mountSpan) {
          if (updateProps !== self.props.updateProps) {
            const _Object = Object;
            const keys = Object.keys(updateProps);
            const found = keys.filter((arg0) => updateProps[arg0] !== self.props.updateProps[arg0]);
            if (found.length > 0) {
              let closure_3 = Profiler(outer1_1[10]).timestampInSeconds();
              let obj = Profiler(outer1_1[10]);
              self._updateSpan = Profiler(outer1_1[10]).withActiveSpan(self._mountSpan, () => {
                let obj = Profiler(outer2_1[8]);
                obj = { name: "<" + self.props.name + ">", onlyIfParent: true, op: Profiler(outer2_1[9]).REACT_UPDATE_OP, startTime: closure_3, attributes: outer2_3(outer2_3(outer2_3({}, Profiler(outer2_1[10]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.react.profiler"), "ui.component_name", self.props.name), "ui.react.changed_props", found) };
                return obj.startInactiveSpan(obj);
              });
              const obj2 = Profiler(outer1_1[10]);
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
      let closure_1;
      let includeRender;
      const self = this;
      let closure_0 = Profiler(outer1_1[10]).timestampInSeconds();
      ({ name: closure_1, includeRender } = this.props);
      if (self._mountSpan) {
        if (tmp) {
          const timestamp = Profiler(outer1_1[10]).spanToJSON(self._mountSpan).timestamp;
          const obj2 = Profiler(outer1_1[10]);
          Profiler(outer1_1[10]).withActiveSpan(self._mountSpan, () => {
            let obj = Profiler(outer2_1[8]);
            obj = { onlyIfParent: true, name: "<" + closure_1 + ">", op: Profiler(outer2_1[9]).REACT_RENDER_OP, startTime: timestamp, attributes: outer2_3(outer2_3({}, Profiler(outer2_1[10]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.react.profiler"), "ui.component_name", closure_1) };
            const startInactiveSpanResult = obj.startInactiveSpan(obj);
            if (startInactiveSpanResult) {
              startInactiveSpanResult.end(closure_0);
            }
          });
          const obj3 = Profiler(outer1_1[10]);
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
  return _defineProperties(Profiler, items);
})(result.Component);
let closure_10 = tmp3;
let merged = Object.assign(tmp3, { defaultProps: { disabled: false, includeRender: true, includeUpdates: true } });

export const Profiler = tmp3;
export const UNKNOWN_COMPONENT = "unknown";
export const useProfiler = function useProfiler(arg0) {
  let closure_0 = arg0;
  if (arguments.length > 1) {
    let closure_1 = { disabled: false, hasRenderSpan: true };
    _slicedToArray = _slicedToArray(React.useState(() => {
      let obj = callback(disabled[8]);
      obj = { name: "<" + callback + ">", onlyIfParent: true, op: callback(disabled[9]).REACT_MOUNT_OP, attributes: outer1_3(outer1_3({}, callback(disabled[10]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.react.profiler"), "ui.component_name", callback) };
      return obj.startInactiveSpan(obj);
    }), 1)[0];
    const effect = React.useEffect(() => {
      if (closure_2) {
        closure_2.end();
      }
      return () => {
        if (outer1_2) {
          if (outer1_1.hasRenderSpan) {
            let obj = callback(794);
            const obj2 = callback(794);
            const timestampInSecondsResult = callback(794).timestampInSeconds();
            obj = {};
            const _HermesInternal = HermesInternal;
            obj.name = "<" + outer1_0 + ">";
            obj.onlyIfParent = true;
            obj.op = callback(1115).REACT_RENDER_OP;
            obj.startTime = obj.spanToJSON(outer1_2).timestamp;
            obj.attributes = outer2_3(outer2_3({}, callback(794).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ui.react.profiler"), "ui.component_name", outer1_0);
            const startInactiveSpanResult = callback(1000).startInactiveSpan(obj);
            if (startInactiveSpanResult) {
              startInactiveSpanResult.end(timestampInSecondsResult);
            }
            const obj3 = callback(1000);
          }
        }
      };
    }, []);
  }
};
export const withProfiler = function withProfiler(displayName, name) {
  const _require = displayName;
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
  class Wrapped {
    constructor(arg0) {
      obj = { name: unknown, updateProps: displayName };
      merged = Object.assign({}, closure_1, obj);
      return outer1_9.createElement(outer1_10, merged, outer1_9.createElement(closure_0, Object.assign({}, displayName)));
    }
  }
  Wrapped.displayName = "profiler(" + str + ")";
  _require(1116).hoistNonReactStatics(Wrapped, displayName);
  return Wrapped;
};
