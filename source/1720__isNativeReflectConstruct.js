// Module ID: 1720
// Function ID: 19350
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 33, 1585, 1690, 1626]

// Module 1720 (_isNativeReflectConstruct)
import jsxProd from "jsxProd";
import closure_3 from "isJest";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import result from "result";
import "result";
import { jsx } from "jsxProd";
import isJest from "isJest";

let Component;
let closure_7;
let closure_8;
let closure_9;
let createContext;
let require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function SkipEntering(children) {
  const tmp = callback4(children.shouldSkip);
  const require = tmp;
  const tmp2 = callback4(children.itemKey);
  if (children.itemKey !== tmp2.current) {
    ({ shouldSkip: tmp.current, itemKey: tmp2.current } = children);
  }
  const items = [tmp, children.itemKey];
  callback3(() => {
    closure_0.current = false;
  }, items);
  return jsx(isJest ? context : context.Provider, { value: tmp, children: children.children });
}
({ Children: closure_7, useEffect: closure_8, useRef: closure_9, Component, createContext } = result);
isJest = isJest.isReact19();
const context = createContext(null);

export const SkipEnteringContext = context;
export const LayoutAnimationConfig = ((Component) => {
  class LayoutAnimationConfig {
    constructor() {
      self = this;
      tmp = outer1_2(this, LayoutAnimationConfig);
      obj = outer1_5(LayoutAnimationConfig);
      tmp2 = outer1_4;
      if (outer1_13()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(LayoutAnimationConfig, Component);
  let obj = {
    key: "getMaybeWrappedChildren",
    value: function getMaybeWrappedChildren() {
      let self = this;
      self = this;
      if (outer1_7.count(this.props.children) > 1) {
        if (self.props.skipExiting) {
          let children = outer1_7.map(self.props.children, (children) => outer2_10(self, { itemKey: self.props.itemKey, skipExiting: true, children }));
        }
        return children;
      }
      children = self.props.children;
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "setShouldAnimateExiting",
    value: function setShouldAnimateExiting() {
      const self = this;
      if (1 === outer1_7.count(this.props.children)) {
        const findNodeHandleResult = LayoutAnimationConfig(outer1_1[8]).findNodeHandle(self);
        if (findNodeHandleResult) {
          const result = LayoutAnimationConfig(outer1_1[9]).setShouldAnimateExitingForTag(findNodeHandleResult, !self.props.skipExiting);
          const obj2 = LayoutAnimationConfig(outer1_1[9]);
        }
        const obj = LayoutAnimationConfig(outer1_1[8]);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      if (undefined !== this.props.skipExiting) {
        const result = self.setShouldAnimateExiting();
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value: function render() {
      const self = this;
      const maybeWrappedChildren = this.getMaybeWrappedChildren();
      let tmp2 = maybeWrappedChildren;
      if (undefined !== this.props.skipEntering) {
        const obj = { itemKey: self.props.itemKey, shouldSkip: self.props.skipEntering, children: maybeWrappedChildren };
        tmp2 = outer1_10(outer1_14, obj);
      }
      return tmp2;
    }
  };
  return callback(LayoutAnimationConfig, items);
})(Component);
