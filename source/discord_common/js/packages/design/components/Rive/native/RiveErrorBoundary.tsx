// Module ID: 3910
// Function ID: 32332
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 3906, 2]

// Module 3910 (_isNativeReflectConstruct)
import context from "context";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let context = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return context;
  }
  const result = _isNativeReflectConstruct();
}
const tmp2 = ((Component) => {
  class RiveErrorBoundary {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = RiveErrorBoundary(this, RiveErrorBoundary);
      items1 = [...items];
      obj = outer1_3(RiveErrorBoundary);
      tmp2 = outer1_2;
      if (outer1_5()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_3;
        constructResult = Reflect.construct(obj, items1, outer1_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.state = { hasError: false };
      return tmp2Result;
    }
  }
  callback2(RiveErrorBoundary, Component);
  let obj = {
    key: "componentDidCatch",
    value(arg0) {
      const context = this.context;
      const captureException = context.captureException;
      if (null != captureException) {
        const obj = { rive_render_failed: "true" };
        captureException.call(context, arg0, obj);
      }
    }
  };
  let items = [obj, ];
  obj = {
    key: "render",
    value() {
      const props = this.props;
      if (this.state.hasError) {
        const fallback = props.fallback;
        let tmp = null;
        if (null != fallback) {
          tmp = fallback;
        }
        let children = tmp;
      } else {
        children = props.children;
      }
      return children;
    }
  };
  items[1] = obj;
  obj = {
    key: "getDerivedStateFromError",
    value() {
      return { hasError: true };
    }
  };
  let items1 = [obj];
  return callback(RiveErrorBoundary, items, items1);
})(require("result").Component);
tmp2.contextType = require("context").ManaContext;
let result = require("_possibleConstructorReturn").fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/RiveErrorBoundary.tsx");

export const RiveErrorBoundary = tmp2;
