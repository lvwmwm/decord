// Module ID: 1117
// Function ID: 12701
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 1000, 1113, 1118, 794, 1116]
// Exports: withErrorBoundary

// Module 1117 (_isNativeReflectConstruct)
import _classCallCheck from "keys";
import _defineProperties from "isAtLeastReact17";
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
let closure_8 = { componentStack: null, error: null, eventId: null };
const tmp3 = ((Component) => {
  class ErrorBoundary {
    constructor(arg0) {
      self = this;
      closure_0 = Component;
      tmp = outer1_2(this, closure_0);
      items = [];
      items[0] = Component;
      obj = outer1_5(closure_0);
      tmp2 = outer1_4;
      if (outer1_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.state = outer1_8;
      tmp2Result._openFallbackReportDialog = true;
      obj2 = ErrorBoundary(outer1_1[6]);
      client = obj2.getClient();
      showDialog = client;
      if (client) {
        showDialog = Component.showDialog;
      }
      if (showDialog) {
        flag = false;
        tmp2Result._openFallbackReportDialog = false;
        str = "afterSendEvent";
        tmp2Result._cleanupHook = client.on("afterSendEvent", (type) => {
          let _lastEventId = !type.type;
          if (_lastEventId) {
            _lastEventId = tmp2Result._lastEventId;
          }
          if (_lastEventId) {
            _lastEventId = type.event_id === tmp2Result._lastEventId;
          }
          if (_lastEventId) {
            let obj = ErrorBoundary(outer2_1[6]);
            const _Object = Object;
            obj = { eventId: tmp2Result._lastEventId };
            obj.showReportDialog(Object.assign({}, showDialog.dialogOptions, obj));
          }
        });
      }
      return tmp2Result;
    }
  }
  _inherits(ErrorBoundary, Component);
  let obj = {
    key: "componentDidCatch",
    value: function componentDidCatch(arg0, componentStack) {
      let closure_4;
      let closure_5;
      let closure_6;
      let closure_7;
      let closure_0 = arg0;
      let closure_1 = componentStack;
      const self = this;
      componentStack = componentStack.componentStack;
      ({ beforeCapture: closure_4, onError: closure_5, showDialog: closure_6, dialogOptions: closure_7 } = this.props);
      ErrorBoundary(outer1_1[6]).withScope((arg0) => {
        if (callback) {
          callback(arg0, closure_0, componentStack);
        }
        if (null != self.props.handled) {
          let handled = self.props.handled;
        } else {
          handled = self.props.fallback;
        }
        let obj = ErrorBoundary(outer2_1[7]);
        obj = { handled, type: "auto.function.react.error_boundary" };
        const result = obj.captureReactException(closure_0, closure_1, { mechanism: obj });
        if (callback2) {
          callback2(closure_0, componentStack, result);
        }
        if (closure_6) {
          self._lastEventId = result;
          if (self._openFallbackReportDialog) {
            const _Object = Object;
            obj = { eventId: result };
            ErrorBoundary(outer2_1[6]).showReportDialog(Object.assign({}, closure_7, obj));
            const obj3 = ErrorBoundary(outer2_1[6]);
          }
        }
        self.setState({ error: closure_0, componentStack, eventId: result });
      });
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const onMount = this.props.onMount;
      if (onMount) {
        onMount();
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      const onUnmount = this.props.onUnmount;
      if (onUnmount) {
        if (self.state === outer1_8) {
          onUnmount(null, null, null);
        } else {
          onUnmount(tmp, tmp2, tmp3);
        }
      }
      if (self._cleanupHook) {
        self._cleanupHook();
        self._cleanupHook = undefined;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "resetErrorBoundary",
    value: function resetErrorBoundary() {
      const self = this;
      const onReset = this.props.onReset;
      if (onReset) {
        onReset(tmp, tmp2, tmp3);
      }
      self.setState(outer1_8);
    }
  };
  items[4] = {
    key: "render",
    value: function render() {
      let children;
      let fallback;
      const self = this;
      ({ fallback, children } = this.props);
      const state = this.state;
      if (null === state.componentStack) {
        let childrenResult = children;
        if ("function" === typeof children) {
          childrenResult = children();
        }
        return childrenResult;
      } else {
        let element = fallback;
        if ("function" === typeof fallback) {
          const obj = {};
          ({ error: obj.error, componentStack: obj.componentStack } = state);
          obj.resetError = function resetError() {
            return self.resetErrorBoundary();
          };
          obj.eventId = state.eventId;
          element = <fallback />;
        }
        if (!outer1_7.isValidElement(element)) {
          if (fallback) {
            fallback = ErrorBoundary(outer1_1[8]).DEBUG_BUILD;
          }
          element = null;
          if (fallback) {
            const debug = ErrorBoundary(outer1_1[9]).debug;
            debug.warn("fallback did not produce a valid ReactElement");
            element = null;
          }
        }
        return element;
      }
    }
  };
  return _defineProperties(ErrorBoundary, items);
})(result.Component);
let closure_9 = tmp3;

export const ErrorBoundary = tmp3;
export const UNKNOWN_COMPONENT = "unknown";
export const withErrorBoundary = function withErrorBoundary(displayName) {
  const _require = displayName;
  const dependencyMap = arg1;
  const memoResult = React.memo((arg0) => {
    const merged = Object.assign({}, closure_1);
    return <outer1_9 {......merged}><closure_0 {......Object.assign({}, arg0)} /></outer1_9>;
  });
  memoResult.displayName = "errorBoundary(" + displayName.displayName || displayName.name || "unknown" + ")";
  _require(1116).hoistNonReactStatics(memoResult, displayName);
  return memoResult;
};
