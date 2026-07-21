// Module ID: 1117
// Function ID: 12695
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: withErrorBoundary

// Module 1117 (_isNativeReflectConstruct)
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
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[5]);
let closure_8 = {};
const tmp3 = (Component) => {
  class ErrorBoundary {
    constructor(arg0) {
      self = this;
      ErrorBoundary = Component;
      tmp = closure_2(this, ErrorBoundary);
      items = [];
      items[0] = Component;
      obj = closure_5(ErrorBoundary);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.state = closure_8;
      tmp2Result._openFallbackReportDialog = true;
      obj2 = ErrorBoundary(apply[6]);
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
            let obj = type(tmp2Result[6]);
            const _Object = Object;
            obj = { eventId: tmp2Result._lastEventId };
            obj.showReportDialog(Object.assign({}, type.dialogOptions, obj));
          }
        });
      }
      return tmp2Result;
    }
  }
  const require = ErrorBoundary;
  callback2(ErrorBoundary, Component);
  let obj = {
    key: "componentDidCatch",
    value: function componentDidCatch(arg0, componentStack) {
      const ErrorBoundary = arg0;
      const self = this;
      componentStack = componentStack.componentStack;
      ({ beforeCapture: closure_4, onError: closure_5, showDialog: closure_6, dialogOptions: closure_7 } = this.props);
      ErrorBoundary(componentStack[6]).withScope((arg0) => {
        if (callback) {
          callback(arg0, arg0, componentStack);
        }
        if (null != self.props.handled) {
          let handled = self.props.handled;
        } else {
          handled = self.props.fallback;
        }
        let obj = arg0(arg1[7]);
        obj = { handled, type: "auto.function.react.error_boundary" };
        const result = obj.captureReactException(arg0, arg1, { mechanism: obj });
        if (callback2) {
          callback2(arg0, componentStack, result);
        }
        if (closure_6) {
          self._lastEventId = result;
          if (self._openFallbackReportDialog) {
            const _Object = Object;
            obj = { eventId: result };
            arg0(arg1[6]).showReportDialog(Object.assign({}, closure_7, obj));
            const obj3 = arg0(arg1[6]);
          }
        }
        self.setState({ error: arg0, componentStack, eventId: result });
      });
    }
  };
  const items = [obj, , , , ];
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
        if (self.state === closure_8) {
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
      self.setState(closure_8);
    }
  };
  items[4] = {
    key: "render",
    value: function render() {
      let children;
      let fallback;
      const ErrorBoundary = this;
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
          element = <fallback {......obj} />;
        }
        if (!React.isValidElement(element)) {
          if (fallback) {
            fallback = ErrorBoundary(closure_1[8]).DEBUG_BUILD;
          }
          element = null;
          if (fallback) {
            const debug = ErrorBoundary(closure_1[9]).debug;
            debug.warn("fallback did not produce a valid ReactElement");
            element = null;
          }
        }
        return element;
      }
    }
  };
  return callback(ErrorBoundary, items);
}(_module.Component);

export const ErrorBoundary = tmp3;
export const UNKNOWN_COMPONENT = "unknown";
export const withErrorBoundary = function withErrorBoundary(displayName) {
  const require = displayName;
  const dependencyMap = arg1;
  const memoResult = _module.memo((arg0) => {
    const merged = Object.assign({}, arg1);
    return <closure_9 {......merged}><arg0 {......Object.assign({}, arg0)} /></closure_9>;
  });
  memoResult.displayName = "errorBoundary(" + displayName.displayName || displayName.name || "unknown" + ")";
  require(dependencyMap[10]).hoistNonReactStatics(memoResult, displayName);
  return memoResult;
};
