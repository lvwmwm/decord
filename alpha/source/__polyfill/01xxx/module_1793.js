// Module ID: 1793
// Function ID: 1794
// Dependencies: [41, 42, 93, 95, 98, 19, 21, 1658, 1763, 1699]

// Module 1793
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 1763 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react_mod from "react" /* 19 */;
import module_1658 from "module_1658" /* 1658 */;

let Component;
let createContext;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
function SkipEntering(children) {
  const tmp = metroImportDefault(children.shouldSkip);
  let closure_0 = tmp;
  const tmp2 = metroImportDefault(children.itemKey);
  if (children.itemKey !== tmp2.current) {
    ({ shouldSkip: tmp.current, itemKey: tmp2.current } = children);
  }
  const items = [tmp, children.itemKey];
  metroRequire(() => {
    closure_0.current = false;
  }, items);
  return jsx(closure_10 ? context : context.Provider, { value: tmp, children: children.children });
}
let react = react_mod;
({ Children: hasOwnProperty, useEffect: metroRequire, useRef: metroImportDefault, Component, createContext } = react);
react = react_mod;
const jsx = Fragment.jsx;
let closure_10 = module_1658.isReact19();
const context = createContext(null);
class LayoutAnimationConfig {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, LayoutAnimationConfig);
    const obj = _getPrototypeOf(LayoutAnimationConfig);
    const tmp2 = _getPrototypeOf;
    const tmp3 = c3;
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(LayoutAnimationConfig, Component);
const entry = {
  key: "getMaybeWrappedChildren",
  value: function getMaybeWrappedChildren() {
    const self = this;
    const arr = closure_1_5;
    if (closure_1_5.count(this.props.children) > 1) {
      let children;
      if (self.props.skipExiting) {
        children = arr.map(self.props.children, (children) => <LayoutAnimationConfig itemKey={self.props.itemKey} skipExiting>{arg0}</LayoutAnimationConfig>);
      }
      return children;
    }
    children = self.props.children;
  }
};
let items = [
  entry,
  {
    key: "setShouldAnimateExiting",
    value: function setShouldAnimateExiting() {
      const self = this;
      if (1 === hasOwnProperty.count(this.props.children)) {
        const obj = react_native;
        const findNodeHandleResult = obj.findNodeHandle(self);
        const tmp = require;
        if (findNodeHandleResult) {
          const tmpResult = tmp(1699);
          const result = tmpResult.setShouldAnimateExitingForTag(findNodeHandleResult, !self.props.skipExiting);
        }
      }
    }
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      if (undefined !== this.props.skipExiting) {
        const result = self.setShouldAnimateExiting();
      }
    }
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      const maybeWrappedChildren = this.getMaybeWrappedChildren();
      let tmp2 = maybeWrappedChildren;
      if (undefined !== this.props.skipEntering) {
        tmp2 = <SkipEntering itemKey={self.props.itemKey} shouldSkip={self.props.skipEntering}>{maybeWrappedChildren}</SkipEntering>;
      }
      return tmp2;
    }
  }
];
const LayoutAnimationConfig_export = _createClass(LayoutAnimationConfig, items);

export const SkipEnteringContext = context;
export { LayoutAnimationConfig_export as LayoutAnimationConfig };
